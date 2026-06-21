export interface Product {
  id: number
  name: string
  price: number
  sku: string
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
