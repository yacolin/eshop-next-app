import type {
  ApiResponse,
  Product,
  ProductCursorData,
  ProductEnrichedData,
  Category,
  FlashActivity,
  FlashActivityCursorData,
  ProductDetailResponse,
  ProductAttributeItem,
  Promotion,
  PromotionDetailResponse,
  PromotionListData,
  BrandSimple,
} from "@/types/product";
import type { LoginRequest, LoginResponseData } from "@/types/auth";
import type { CartData, AddToCartRequest, UpdateCartItemRequest } from "@/types/cart";
import type {
  AddressData,
  AddressListData,
  CreateAddressRequest,
  UpdateAddressRequest,
} from "@/types/address";
import type { SubmitOrderRequest, OrderResult } from "@/types/order";

const API_BASE = "/api/v1";
const API_BASE_SERVER = process.env.API_BASE_SERVER || "http://localhost:8080/api/v1";

export async function fetchProducts(size: number = 20): Promise<ProductCursorData> {
  const params = new URLSearchParams();
  params.set("size", String(size));
  params.set("status", "2");
  const res = await fetch(`${API_BASE}/products?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const json: ApiResponse<ProductCursorData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchProductsCursor(
  cursor: string | null = null,
  categoryId?: number,
  size: number = 20,
  brandId?: number,
): Promise<ProductCursorData> {
  const params = new URLSearchParams();
  params.set("size", String(size));
  params.set("status", "2");
  if (cursor) params.set("cursor", cursor);
  if (categoryId) params.set("category_id", String(categoryId));
  if (brandId) params.set("brand_id", String(brandId));
  const res = await fetch(`${API_BASE}/products?${params.toString()}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch products cursor: ${res.status}`);
  }

  const json: ApiResponse<ProductCursorData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_SERVER}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const json: ApiResponse<Product> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

function safeParseJSON(val: string): Record<string, string> {
  try {
    const parsed = JSON.parse(val);
    if (typeof parsed === "object" && parsed !== null) return parsed;
    return {};
  } catch {
    return {};
  }
}

export async function fetchProductDetail(id: number): Promise<ProductDetailResponse> {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product detail: ${res.status}`);
  }

  const json: ApiResponse<any> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  const raw = json.data;

  // Transform backend SPUDetailResponse → frontend ProductDetailResponse
  // Backend returns flat SPU fields, spec as JSON string, and includes attributes
  // Collect attribute names that actually appear in SKU specs
  const skuSpecAttrNames = new Set<string>();
  for (const sku of raw.skus || []) {
    const spec = typeof sku.spec === "string" ? safeParseJSON(sku.spec) : sku.spec || {};
    Object.keys(spec).forEach((k) => skuSpecAttrNames.add(k));
  }

  return {
    product: {
      id: raw.id,
      name: raw.name,
      description: raw.description?.description ?? raw.description?.mobile_description ?? "",
      min_price: raw.min_price,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    },
    skus: (raw.skus || []).map((sku: any) => {
      const parsedSpec = typeof sku.spec === "string" ? safeParseJSON(sku.spec) : sku.spec || {};
      return {
        id: sku.id,
        product_id: sku.product_id,
        name: sku.sku_code,
        price: sku.price,
        sku_code: sku.sku_code,
        image: sku.image || undefined,
        spec: parsedSpec,
        available_quantity: sku.available_quantity,
        inventory_status: sku.inventory_status,
        created_at: sku.created_at,
        updated_at: sku.updated_at,
      };
    }),
    attributes: (raw.attributes || [])
      // Only show attributes that are used in SKU specs (skip e.g. processor, camera)
      .filter((attr: any) => skuSpecAttrNames.has(attr.attribute_name))
      .map((attr: any, aidx: number) => {
        const attrId = attr.attribute_id || -(aidx + 1);
        return {
          attribute_id: attrId,
          attribute_name: attr.attribute_name,
          values: (attr.values || []).map((v: string, vidx: number) => ({
            value_id: attrId * 100 + vidx + 1,
            value: v,
          })),
        };
      }),
  };
}

export async function fetchProductAttributes(id: number): Promise<ProductAttributeItem[]> {
  const res = await fetch(`${API_BASE}/products/${id}/attributes`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch product attributes: ${res.status}`);
  const json: ApiResponse<ProductAttributeItem[]> = await res.json();
  if (json.code !== 0) throw new Error(`API error: ${json.message}`);
  return json.data;
}

export async function fetchCategoryById(id: number): Promise<Category> {
  const res = await fetch(`${API_BASE}/categories/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch category: ${res.status}`);
  }

  const json: ApiResponse<Category> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchAllCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE}/categories/all`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const json: ApiResponse<Category[]> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchCategoryBrands(categoryId: number): Promise<BrandSimple[]> {
  const res = await fetch(`${API_BASE}/categories/${categoryId}/brands`, {
    headers: authHeaders(),
  });
  if (!res.ok) return [];
  const json: ApiResponse<BrandSimple[]> = await res.json();
  if (json.code !== 0) return [];
  return json.data ?? [];
}

export async function fetchRootCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE}/categories/root`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const json: ApiResponse<Category[]> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchProductsEnriched(
  page: number,
  pageSize: number,
  categoryId?: number,
): Promise<ProductEnrichedData> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("size", String(pageSize));
  if (categoryId) params.set("category_id", String(categoryId));
  const res = await fetch(`${API_BASE}/products/enriched?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch enriched products: ${res.status}`);
  }
  const json: ApiResponse<ProductEnrichedData> = await res.json();
  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }
  return json.data;
}

export async function fetchSubcategories(parentId: number): Promise<Category[]> {
  const res = await fetch(`${API_BASE}/categories/${parentId}/children`);

  if (!res.ok) {
    throw new Error(`Failed to fetch subcategories: ${res.status}`);
  }

  const json: ApiResponse<Category[]> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchPromotionById(id: number): Promise<Promotion | null> {
  try {
    const res = await fetch(`${API_BASE}/promotions/${id}`);
    if (!res.ok) return null;
    const json: ApiResponse<Promotion> = await res.json();
    if (json.code !== 0) return null;
    return json.data;
  } catch {
    return null;
  }
}

export async function fetchPromotionDetail(id: number): Promise<PromotionDetailResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/promotions/${id}/detail`);
    if (!res.ok) return null;
    const json: ApiResponse<PromotionDetailResponse> = await res.json();
    if (json.code !== 0) return null;
    return json.data;
  } catch {
    return null;
  }
}

export async function fetchActivePromotions(size: number = 10): Promise<PromotionListData> {
  const params = new URLSearchParams();
  params.set("status", "1");
  params.set("size", String(size));
  const res = await fetch(`${API_BASE}/promotions?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch active promotions: ${res.status}`);
  }

  const json: ApiResponse<PromotionListData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchFlashActivities(
  cursor: number | null = null,
): Promise<FlashActivityCursorData> {
  const url = cursor
    ? `${API_BASE}/flash/activities/cursor?cursor=${cursor}`
    : `${API_BASE}/flash/activities/cursor`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch flash activities: ${res.status}`);
  }

  const json: ApiResponse<FlashActivityCursorData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchFlashActivityById(id: number): Promise<FlashActivity> {
  const res = await fetch(`${API_BASE}/flash/activities/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch flash activity: ${res.status}`);
  }

  const json: ApiResponse<FlashActivity> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function login(data: LoginRequest): Promise<LoginResponseData> {
  const res = await fetch(`${API_BASE}/auth/login/password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Login failed: ${res.status}`);
  }

  const json: ApiResponse<LoginResponseData> = await res.json();

  if (json.code !== 0) {
    throw new Error(json.message);
  }

  return json.data;
}

function buildCartQuery(userId?: number | null, sessionId?: string | null): string {
  const params = new URLSearchParams();
  if (userId) params.set("user_id", String(userId));
  else if (sessionId) params.set("session_id", sessionId);
  return params.toString();
}

export async function fetchCart(
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId);
  const res = await fetch(`${API_BASE}/carts?${qs}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch cart: ${res.status}`);
  }

  const json: ApiResponse<CartData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function addToCart(
  data: AddToCartRequest,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId);
  const res = await fetch(`${API_BASE}/carts/items?${qs}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to add to cart: ${res.status}`);
  }

  const json: ApiResponse<CartData> = await res.json();

  if (json.code !== 0) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function updateCartItem(
  itemId: number,
  data: UpdateCartItemRequest,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId);
  const res = await fetch(`${API_BASE}/carts/items/${itemId}?${qs}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to update cart item: ${res.status}`);
  }

  const json: ApiResponse<CartData> = await res.json();

  if (json.code !== 0) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function removeCartItem(
  itemId: number,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId);
  const res = await fetch(`${API_BASE}/carts/items/${itemId}?${qs}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to remove cart item: ${res.status}`);
  }

  const json: ApiResponse<CartData> = await res.json();

  if (json.code !== 0) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function clearCart(userId?: number | null, sessionId?: string | null): Promise<void> {
  const qs = buildCartQuery(userId, sessionId);
  const res = await fetch(`${API_BASE}/carts?${qs}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to clear cart: ${res.status}`);
  }
}

// ── Address API ──

function authHeaders(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchAddresses(): Promise<AddressListData> {
  const res = await fetch(`${API_BASE}/addresses`, { headers: authHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch addresses: ${res.status}`);
  const json: ApiResponse<AddressListData> = await res.json();
  if (json.code !== 0) throw new Error(json.message);
  return json.data;
}

export async function fetchDefaultAddress(): Promise<AddressData | null> {
  const res = await fetch(`${API_BASE}/addresses/default`, { headers: authHeaders() });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch default address: ${res.status}`);
  const json: ApiResponse<AddressData> = await res.json();
  if (json.code !== 0) return null;
  return json.data;
}

export async function createAddress(data: CreateAddressRequest): Promise<AddressData> {
  const res = await fetch(`${API_BASE}/addresses`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to create address: ${res.status}`);
  }
  const json: ApiResponse<AddressData> = await res.json();
  if (json.code !== 0) throw new Error(json.message);
  return json.data;
}

export async function updateAddress(id: number, data: UpdateAddressRequest): Promise<AddressData> {
  const res = await fetch(`${API_BASE}/addresses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to update address: ${res.status}`);
  }
  const json: ApiResponse<AddressData> = await res.json();
  if (json.code !== 0) throw new Error(json.message);
  return json.data;
}

export async function deleteAddress(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/addresses/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to delete address: ${res.status}`);
  }
}

// ── Order API ──

export async function submitOrder(data: SubmitOrderRequest): Promise<OrderResult> {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || `Failed to submit order: ${res.status}`);
  }
  const json: ApiResponse<OrderResult> = await res.json();
  if (json.code !== 0) throw new Error(json.message);
  return json.data;
}
