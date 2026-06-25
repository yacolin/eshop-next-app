export interface Product {
  id: number;
  name: string;
  min_price: number;
}

export interface ProductResponse {
  id: number;
  name: string;
  description: string;
  min_price: number;
  created_at: number;
  updated_at: number;
}

export interface SKUResponse {
  id: number;
  product_id: number;
  name: string;
  price: number;
  sku_code: string;
  image?: string;
  spec?: Record<string, string>;
  available_quantity?: number;
  inventory_status?: string;
  created_at: number;
  updated_at: number;
}

export interface ProductDetailResponse {
  product: ProductResponse;
  skus: SKUResponse[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  trace_id: string;
}

export interface ProductListData {
  total: number;
  list: Product[];
}

export interface ProductCursorData {
  list: Product[];
  next_cursor: number | null;
  has_more: boolean;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  parent_id: number | null;
  created_at: number;
  updated_at: number;
}

export interface CategoryListData {
  total: number;
  list: Category[];
}

export interface AttributeValueItem {
  value_id: number;
  value: string;
}

export interface ProductAttributeItem {
  attribute_id: number;
  attribute_name: string;
  values: AttributeValueItem[];
}

export interface FlashActivity {
  id: number;
  product_id: number;
  flash_price: number;
  total_stock: number;
  sold_stock: number;
  start_time: number;
  end_time: number;
  status: string;
  created_at: number;
  updated_at: number;
}

export interface FlashActivityCursorData {
  list: FlashActivity[];
  next_cursor: number | null;
  has_more: boolean;
}
