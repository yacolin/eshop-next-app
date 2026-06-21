export interface Product {
  id: number
  name: string
  price: number
  sku: string
  description?: string
  created_at?: number
  updated_at?: number
}

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
  trace_id: string
}

export interface ProductListData {
  total: number
  list: Product[]
}

export interface ProductCursorData {
  list: Product[]
  next_cursor: number | null
  has_more: boolean
}
