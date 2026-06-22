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

export interface Category {
  id: number
  name: string
  description?: string
  parent_id: number | null
  created_at: number
  updated_at: number
}

export interface CategoryListData {
  total: number
  list: Category[]
}

export interface FlashActivity {
  id: number
  product_id: number
  flash_price: number
  total_stock: number
  sold_stock: number
  start_time: number
  end_time: number
  status: string
  created_at: number
  updated_at: number
}

export interface FlashActivityCursorData {
  list: FlashActivity[]
  next_cursor: number | null
  has_more: boolean
}
