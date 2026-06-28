import type {
  ApiResponse,
  Product,
  ProductCursorData,
  ProductListData,
  ProductEnrichedData,
  Category,
  CategoryListData,
  FlashActivity,
  FlashActivityCursorData,
  ProductDetailResponse,
  ProductAttributeItem,
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

export async function fetchProducts(): Promise<ProductListData> {
  const res = await fetch(`${API_BASE}/products/cache`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const json: ApiResponse<ProductListData> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchProductsCursor(
  cursor: number | null = null,
  categoryId?: number,
): Promise<ProductCursorData> {
  const params = new URLSearchParams();
  if (cursor) params.set("cursor", String(cursor));
  if (categoryId) params.set("category_id", String(categoryId));
  const qs = params.toString();
  const url = qs ? `${API_BASE}/products/cache/cursor?${qs}` : `${API_BASE}/products/cache/cursor`;

  const res = await fetch(url, { cache: "no-store" });

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
  const res = await fetch(`${API_BASE_SERVER}/products/cache/${id}`, {
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

export async function fetchProductDetail(id: number): Promise<ProductDetailResponse> {
  const res = await fetch(`${API_BASE}/products/${id}/detail`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product detail: ${res.status}`);
  }

  const json: ApiResponse<ProductDetailResponse> = await res.json();

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data;
}

export async function fetchProductAttributes(id: number): Promise<ProductAttributeItem[]> {
  const res = await fetch(`${API_BASE}/products/${id}/attributes`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch product attributes: ${res.status}`);
  const json: ApiResponse<ProductAttributeItem[]> = await res.json();
  if (json.code !== 0) throw new Error(`API error: ${json.message}`);
  return json.data;
}

export async function fetchRootCategories(): Promise<CategoryListData> {
  const res = await fetch(`${API_BASE}/categories/root`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const json: ApiResponse<CategoryListData> = await res.json();

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
