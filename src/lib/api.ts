// Legacy API bridge — wraps generated clients for backward compatibility
import { Products } from "@/lib/api-gen/Products";
import { Orders } from "@/lib/api-gen/Orders";
import { Carts } from "@/lib/api-gen/Carts";
import { Address } from "@/lib/api-gen/Address";
import type { ProductSKU, ProductProductAttrResponse, UserCreateAddressReq } from "@/types/product";
import type {
  GfEshopApiCartsV1CartsAddItemReq,
  GfEshopApiCartsV1CartsUpdateItemReq,
} from "@/lib/api-gen/data-contracts";

const pApi = new Products({ baseUrl: "" });
const oApi = new Orders({ baseUrl: "" });
const cApi = new Carts({ baseUrl: "" });
const aApi = new Address({ baseUrl: "" });

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

export { authHeaders };
