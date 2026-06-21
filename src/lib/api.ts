import type { ApiResponse, ProductCursorData, ProductListData } from '@/types/product'

const API_BASE = '/api/v1'

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
