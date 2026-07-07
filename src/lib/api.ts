// Legacy API bridge — wraps generated clients for backward compatibility
import { Products } from "@/lib/api-gen/Products";
import { Orders } from "@/lib/api-gen/Orders";
import { Carts } from "@/lib/api-gen/Carts";
import { Address } from "@/lib/api-gen/Address";
import { Marketing } from "@/lib/api-gen/Marketing";
import type { ProductSKU, ProductProductAttrResponse, UserCreateAddressReq } from "@/types/product";
import type {
  GfEshopApiCartsV1CartsAddItemReq,
  GfEshopApiCartsV1CartsUpdateItemReq,
} from "@/lib/api-gen/data-contracts";

const pApi = new Products({ baseUrl: "" });
const oApi = new Orders({ baseUrl: "" });
const cApi = new Carts({ baseUrl: "" });
const aApi = new Address({ baseUrl: "" });
const mApi = new Marketing({ baseUrl: "" });

function authHeaders(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchProductDetail(id: number) {
  const res = await pApi.v1ProductsDetail(id);
  const raw = (res.data as any)?.data;
  if (!raw) throw new Error("Product not found");
  return {
    product: {
      id: raw.id ?? 0,
      name: raw.name ?? "",
      description: raw.description?.description ?? raw.description?.mobile_description ?? "",
      min_price: raw.min_price ?? 0,
      created_at: raw.created_at ?? "",
      updated_at: raw.updated_at ?? "",
    },
    skus: ((raw.skus ?? []) as ProductSKU[]).map((s: ProductSKU) => ({
      id: s.id ?? 0,
      product_id: s.product_id ?? 0,
      name: s.sku_code ?? "",
      price: s.price ?? 0,
      sku_code: s.sku_code ?? "",
      image: s.image ?? undefined,
      spec: typeof s.spec === "string" ? JSON.parse(s.spec) : (s.spec ?? {}),
      available_quantity: s.available_quantity,
      inventory_status: s.inventory_status,
      created_at: s.created_at ?? 0,
      updated_at: s.updated_at ?? 0,
    })),
    attributes: ((raw.attributes ?? []) as ProductProductAttrResponse[]).map(
      (a: ProductProductAttrResponse, i: number) => ({
        attribute_id: a.attribute_id ?? 0,
        attribute_name: a.attribute_name ?? "",
        values: (a.values ?? []).map((v: string, j: number) => ({
          value_id: (a.attribute_id ?? 0) * 100 + j + 1,
          value: v,
        })),
      }),
    ),
  };
}

export async function submitOrder(data: Record<string, unknown>) {
  const res = await oApi.v1OrdersCreate(data as any, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function fetchCart(userId?: number | null, sessionId?: string | null) {
  const res = await cApi.v1CartsList({
    headers: { ...authHeaders(), ...(sessionId ? { "X-Session-Id": sessionId } : {}) },
  });
  return (res.data as any)?.data;
}

export async function addToCart(data: GfEshopApiCartsV1CartsAddItemReq) {
  const res = await cApi.v1CartsItemsCreate(data, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function updateCartItem(itemId: number, data: GfEshopApiCartsV1CartsUpdateItemReq) {
  const res = await cApi.v1CartsItemsUpdate(data, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function removeCartItem(skuId: number) {
  const res = await cApi.v1CartsItemsDelete(skuId, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function clearCart() {
  const res = await cApi.v1CartsClearCreate({} as any, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function fetchAddresses() {
  const res = await aApi.v1AddressesList({ headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function createAddress(data: UserCreateAddressReq) {
  const res = await aApi.v1AddressesCreate(data, { headers: authHeaders() });
  return (res.data as any)?.data;
}

// Legacy — still used by flash-sale pages
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
  const res = await mApi.v1PromotionsList(params as any, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function fetchPromotionDetail(id: number) {
  const res = await mApi.v1PromotionsDetail(id, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function fetchPromotionDetailList(id: number) {
  const res = await mApi.v1PromotionsDetailList(id, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function fetchFlashActivities(cursor: number | null) {
  const page = cursor ?? 1;
  const res = await mApi.v1PromotionsList(
    {
      page,
      page_size: 20,
      promo_type: 3,
      status: 2,
    } as any,
    { headers: authHeaders() },
  );
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
  const res = await mApi.v1PromotionsDetailList(id, { headers: authHeaders() });
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
  const res = await mApi.v1CouponsMeList(params, { headers: authHeaders() });
  return (res.data as any)?.data;
}

export async function claimCoupon(promotionId: number) {
  const res = await mApi.v1CouponsClaimCreate(
    { promotion_id: promotionId },
    { headers: authHeaders() },
  );
  return (res.data as any)?.data;
}

export { authHeaders };
