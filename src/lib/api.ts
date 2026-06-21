import type { ApiResponse, ProductListData } from '@/types/product'

const API_BASE = 'http://localhost:8080/api/v1'

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
