import type { ApiResponse, Product, ProductCursorData, ProductListData } from '@/types/product'
import type { LoginRequest, LoginResponseData } from '@/types/auth'
import type { CartData, AddToCartRequest, UpdateCartItemRequest } from '@/types/cart'

const API_BASE = '/api/v1'
const API_BASE_SERVER = process.env.API_BASE_SERVER || 'http://localhost:8080/api/v1'

export async function fetchProducts(): Promise<ProductListData> {
  const res = await fetch(`${API_BASE}/products/cache`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`)
  }

  const json: ApiResponse<ProductListData> = await res.json()

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`)
  }

  return json.data
}

export async function fetchProductsCursor(
  cursor: number | null = null
): Promise<ProductCursorData> {
  const url = cursor
    ? `${API_BASE}/products/cursor?cursor=${cursor}`
    : `${API_BASE}/products/cursor`

  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error(`Failed to fetch products cursor: ${res.status}`)
  }

  const json: ApiResponse<ProductCursorData> = await res.json()

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`)
  }

  return json.data
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_SERVER}/products/cache/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`)
  }

  const json: ApiResponse<Product> = await res.json()

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`)
  }

  return json.data
}

export async function login(data: LoginRequest): Promise<LoginResponseData> {
  const res = await fetch(`${API_BASE}/auth/login/password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => null)
    throw new Error(err?.message || `Login failed: ${res.status}`)
  }

  const json: ApiResponse<LoginResponseData> = await res.json()

  if (json.code !== 0) {
    throw new Error(json.message)
  }

  return json.data
}

function buildCartQuery(userId?: number | null, sessionId?: string | null): string {
  const params = new URLSearchParams()
  if (userId) params.set('user_id', String(userId))
  else if (sessionId) params.set('session_id', sessionId)
  return params.toString()
}

export async function fetchCart(
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId)
  const res = await fetch(`${API_BASE}/carts?${qs}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch cart: ${res.status}`)
  }

  const json: ApiResponse<CartData> = await res.json()

  if (json.code !== 0) {
    throw new Error(`API error: ${json.message}`)
  }

  return json.data
}

export async function addToCart(
  data: AddToCartRequest,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId)
  const res = await fetch(`${API_BASE}/carts/items?${qs}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => null)
    throw new Error(err?.message || `Failed to add to cart: ${res.status}`)
  }

  const json: ApiResponse<CartData> = await res.json()

  if (json.code !== 0) {
    throw new Error(json.message)
  }

  return json.data
}

export async function updateCartItem(
  itemId: number,
  data: UpdateCartItemRequest,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId)
  const res = await fetch(`${API_BASE}/carts/items/${itemId}?${qs}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => null)
    throw new Error(err?.message || `Failed to update cart item: ${res.status}`)
  }

  const json: ApiResponse<CartData> = await res.json()

  if (json.code !== 0) {
    throw new Error(json.message)
  }

  return json.data
}

export async function removeCartItem(
  itemId: number,
  userId?: number | null,
  sessionId?: string | null,
): Promise<CartData> {
  const qs = buildCartQuery(userId, sessionId)
  const res = await fetch(`${API_BASE}/carts/items/${itemId}?${qs}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    const err = await res.json().catch(() => null)
    throw new Error(err?.message || `Failed to remove cart item: ${res.status}`)
  }

  const json: ApiResponse<CartData> = await res.json()

  if (json.code !== 0) {
    throw new Error(json.message)
  }

  return json.data
}

export async function clearCart(
  userId?: number | null,
  sessionId?: string | null,
): Promise<void> {
  const qs = buildCartQuery(userId, sessionId)
  const res = await fetch(`${API_BASE}/carts?${qs}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    const err = await res.json().catch(() => null)
    throw new Error(err?.message || `Failed to clear cart: ${res.status}`)
  }
}
