import type { ApiResponse, Product, ProductCursorData, ProductListData } from '@/types/product'
import type { LoginRequest, LoginResponseData } from '@/types/auth'

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
