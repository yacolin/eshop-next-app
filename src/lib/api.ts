// Legacy API bridge — wraps generated clients for backward compatibility
import { Products } from "@/lib/api-gen/Products";
import { Orders } from "@/lib/api-gen/Orders";
import { Carts } from "@/lib/api-gen/Carts";
import { Address } from "@/lib/api-gen/Address";
import { Marketing } from "@/lib/api-gen/Marketing";
import { User } from "@/lib/api-gen/User";
import { UserAuth } from "@/lib/api-gen/UserAuth";
import type { ProductProductAttrResponse, UserCreateAddressReq } from "@/types/product";
import type {
  GfEshopApiCartsV1CartsAddItemReq,
  GfEshopApiCartsV1CartsUpdateItemReq,
} from "@/lib/api-gen/data-contracts";

const origFetch =
  typeof window !== "undefined" ? window.fetch.bind(window) : globalThis.fetch.bind(globalThis);

let isRefreshing = false;
let failedSubscribers: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

function onTokenRefreshed(token: string | null, error?: any) {
  failedSubscribers.forEach((s) => {
    if (error) s.reject(error);
    else if (token) s.resolve(token);
    else s.reject(new Error("Refresh failed"));
  });
  failedSubscribers = [];
}

async function doRefreshToken(): Promise<string | null> {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;
  try {
    const res = await origFetch("/api/v1/user/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json?.data;
    if (data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      if (data.refresh_token) {
        localStorage.setItem("refresh_token", data.refresh_token);
      }
      return data.access_token;
    }
    return null;
  } catch {
    return null;
  }
}

export const authFetch: typeof fetch = (input, init) => {
  if (typeof window === "undefined") return origFetch(input, init);

  const token = localStorage.getItem("access_token");
  const headers = new Headers(init?.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const doFetch = (h: Headers) => origFetch(input, { ...init, headers: h });

  return (async () => {
    let res = await doFetch(headers);

    if (res.status === 401 && token) {
      if (!isRefreshing) {
        isRefreshing = true;
        const newToken = await doRefreshToken();
        isRefreshing = false;

        if (newToken) {
          onTokenRefreshed(newToken);
          const retryHeaders = new Headers(init?.headers);
          retryHeaders.set("Authorization", `Bearer ${newToken}`);
          res = await origFetch(input, { ...init, headers: retryHeaders });
        } else {
          onTokenRefreshed(null, new Error("Refresh failed"));
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("username");
          localStorage.removeItem("user_id");
          window.dispatchEvent(new CustomEvent("auth:logout"));
        }
      } else {
        return new Promise<Response>((resolve, reject) => {
          failedSubscribers.push({
            resolve: (t: string) => {
              const h = new Headers(init?.headers);
              h.set("Authorization", `Bearer ${t}`);
              origFetch(input, { ...init, headers: h }).then(resolve, reject);
            },
            reject,
          });
        });
      }
    }

    return res;
  })();
};

const pApi = new Products({ baseUrl: "", customFetch: authFetch });
const oApi = new Orders({ baseUrl: "", customFetch: authFetch });
const cApi = new Carts({ baseUrl: "", customFetch: authFetch });
const aApi = new Address({ baseUrl: "", customFetch: authFetch });
const mApi = new Marketing({ baseUrl: "", customFetch: authFetch });
const uApi = new User({ baseUrl: "", customFetch: authFetch });
const authApi = new UserAuth({ baseUrl: "", customFetch: authFetch });

function computeSkuSpec(
  specSummary: string | undefined,
  attrNames: string[],
): Record<string, string> {
  if (!specSummary || attrNames.length === 0) return {};
  const parts = specSummary.split(" / ");
  const spec: Record<string, string> = {};
  attrNames.forEach((name, i) => {
    if (i < parts.length) {
      spec[name] = parts[i].trim();
    }
  });
  return spec;
}

export async function fetchProductDetail(id: number) {
  const res = await pApi.v1ProductsDetail(id);
  const raw = (res.data as any)?.data;
  if (!raw) throw new Error("Product not found");

  const selectableAttrs = (raw.specs?.selectable ?? []) as ProductProductAttrResponse[];
  const selectableNames = selectableAttrs.map((a) => a.attribute_name ?? "");

  // Build SKU spec from spec_summary mapped to selectable attribute names in order
  const skus = ((raw.skus ?? []) as any[]).map((s: any) => ({
    id: s.id ?? 0,
    product_id: s.product_id ?? 0,
    name: s.sku_code ?? "",
    price: s.price ?? 0,
    sku_code: s.sku_code ?? "",
    image: s.image ?? undefined,
    market_price: s.market_price,
    spec: computeSkuSpec(s.spec_summary, selectableNames),
    spec_summary: s.spec_summary ?? "",
    available_quantity: s.available_quantity,
    inventory_status: s.inventory_status,
    created_at: s.created_at ?? "",
    updated_at: s.updated_at ?? "",
  }));

  // Build selectable attributes with value_id
  const attributes = selectableAttrs.map((a, i) => ({
    attribute_id: a.attribute_id ?? 0,
    attribute_name: a.attribute_name ?? "",
    values: (a.values ?? []).map((v: string, j: number) => ({
      value_id: (a.attribute_id ?? 0) * 100 + j + 1,
      value: v,
    })),
  }));

  return {
    product: {
      id: raw.id ?? 0,
      name: raw.name ?? "",
      description: raw.description?.description ?? raw.description?.mobile_description ?? "",
      min_price: raw.price_min ?? 0,
      created_at: raw.created_at ?? "",
      updated_at: raw.updated_at ?? "",
    },
    skus,
    attributes,
  };
}

export async function submitOrder(data: Record<string, unknown>) {
  const res = await oApi.v1OrdersCreate(data as any);
  return (res.data as any)?.data;
}

export async function fetchCart(userId?: number | null, sessionId?: string | null) {
  const res = await cApi.v1CartsList({
    headers: { ...(sessionId ? { "X-Session-Id": sessionId } : {}) },
  });
  return (res.data as any)?.data;
}

export async function addToCart(data: GfEshopApiCartsV1CartsAddItemReq) {
  const res = await cApi.v1CartsItemsCreate(data);
  return (res.data as any)?.data;
}

export async function updateCartItem(itemId: number, data: GfEshopApiCartsV1CartsUpdateItemReq) {
  const res = await cApi.v1CartsItemsUpdate(data);
  return (res.data as any)?.data;
}

export async function removeCartItem(skuId: number) {
  const res = await cApi.v1CartsItemsDelete(skuId);
  return (res.data as any)?.data;
}

export async function clearCart() {
  const res = await cApi.v1CartsClearCreate({} as any);
  return (res.data as any)?.data;
}

export async function fetchAddresses() {
  const res = await aApi.v1AddressesList();
  return (res.data as any)?.data;
}

export async function createAddress(data: UserCreateAddressReq) {
  const res = await aApi.v1AddressesCreate(data);
  return (res.data as any)?.data;
}

export async function fetchProductsCursor(cursor: string | null = null, categoryId?: number) {
  const res = await pApi.v1ProductsList({
    size: 20,
    status: 2,
    cursor: cursor ?? undefined,
    category_id: categoryId,
  });
  const d = (res.data as any)?.data;
  return { list: d?.list ?? [], cursor: d?.cursor ?? null, has_more: d?.has_more ?? false };
}

export async function fetchPromotions(params?: {
  page?: number;
  page_size?: number;
  status?: number;
  promo_type?: number;
}) {
  const res = await mApi.v1PromotionsList(params as any);
  return (res.data as any)?.data;
}

export async function fetchPromotionDetail(id: number) {
  const res = await mApi.v1PromotionsDetail(id);
  return (res.data as any)?.data;
}

export async function fetchPromotionDetailList(id: number) {
  const res = await mApi.v1PromotionsDetailList(id);
  return (res.data as any)?.data;
}

export async function fetchFlashActivities(cursor: number | null) {
  const page = cursor ?? 1;
  const res = await mApi.v1PromotionsList({
    page,
    page_size: 20,
    promo_type: 3,
    status: 2,
  } as any);
  const d = (res.data as any)?.data;
  const list = (d?.list ?? []).map((p: any) => ({
    id: p.id ?? 0,
    product_id: p.product_id ?? 0,
    flash_price: p.flash_price ?? 0,
    total_stock: p.total_quantity ?? 0,
    sold_stock: p.used_quantity ?? 0,
    start_time: p.start_time ? new Date(p.start_time).getTime() : 0,
    end_time: p.end_time ? new Date(p.end_time).getTime() : 0,
    status: p.status === 2 ? "active" : "inactive",
    created_at: p.created_at ? new Date(p.created_at).getTime() : 0,
    updated_at: p.updated_at ? new Date(p.updated_at).getTime() : 0,
  }));
  const total = d?.total ?? 0;
  const has_more = page * 20 < total;
  return { list, next_cursor: has_more ? page + 1 : null, has_more };
}

export async function fetchFlashActivityById(id: number) {
  const res = await mApi.v1PromotionsDetailList(id);
  const d = (res.data as any)?.data;
  const p = d?.promotion;
  const product = d?.products?.[0];
  return {
    id: p?.id ?? 0,
    product_id: product?.product_id ?? 0,
    flash_price: product?.min_price ?? 0,
    total_stock: p?.total_quantity ?? 0,
    sold_stock: p?.used_quantity ?? 0,
    start_time: p?.start_time ? new Date(p.start_time).getTime() : 0,
    end_time: p?.end_time ? new Date(p.end_time).getTime() : 0,
    status: p?.status === 2 ? "active" : "inactive",
    created_at: p?.created_at ? new Date(p.created_at).getTime() : 0,
    updated_at: p?.updated_at ? new Date(p.updated_at).getTime() : 0,
  };
}

export async function fetchCouponsMe(params?: {
  page?: number;
  page_size?: number;
  status?: number;
}) {
  const res = await mApi.v1CouponsMeList(params);
  return (res.data as any)?.data;
}

export async function claimCoupon(promotionId: number) {
  const res = await mApi.v1CouponsClaimCreate({ promotion_id: promotionId });
  return (res.data as any)?.data;
}

export async function fetchOrders(params?: { page?: number; page_size?: number; status?: string }) {
  const uid = typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
  const res = await oApi.v1OrdersList({ ...params, user_id: uid ? Number(uid) : undefined } as any);
  return (res.data as any)?.data;
}

export async function fetchOrderDetail(orderNo: string) {
  const res = await oApi.v1OrdersDetail(orderNo);
  return (res.data as any)?.data;
}

export async function fetchUpdateAddress(id: number, data: Record<string, unknown>) {
  const res = await aApi.v1AddressesUpdate(id, data as any);
  return (res.data as any)?.data;
}

export async function fetchDeleteAddress(id: number) {
  const res = await aApi.v1AddressesDelete(id);
  return (res.data as any)?.data;
}

export async function fetchRegister(data: {
  username: string;
  password: string;
  email?: string;
  phone?: string;
}) {
  const res = await authApi.v1UserAuthRegisterCreate(data);
  return (res.data as any)?.data;
}

export async function fetchUserProfile() {
  const res = await uApi.v1UserList();
  return (res.data as any)?.data;
}

export async function fetchUpdateProfile(data: Record<string, unknown>) {
  const res = await uApi.v1UserUpdate(data as any);
  return (res.data as any)?.data;
}
