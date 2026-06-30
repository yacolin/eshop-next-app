export interface Product {
  id: number;
  name: string;
  subtitle: string;
  category_id: number;
  brand_id: number;
  unit: string;
  main_image: string;
  images?: string;
  video_url: string;
  min_price: number;
  max_price: number;
  total_stock: number;
  sales_count: number;
  rating_average: number;
  rating_count: number;
  status: number;
  sort_order: number;
  created_at: number;
  updated_at: number;
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
  attributes: ProductAttributeItem[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  trace_id: string;
}

/** @deprecated Use ProductCursorData instead. New API returns cursor-based pagination without total. */
export interface ProductListData {
  total: number;
  list: Product[];
}

export interface CategoryListData {
  total: number;
  list: Category[];
}

export interface ProductCursorData {
  list: Product[];
  cursor: string;
  has_more: boolean;
}

export interface ProductEnrichedItem extends Product {
  categories: { id: number; name: string }[];
}

export interface ProductEnrichedData {
  total: number;
  list: ProductEnrichedItem[];
}

export interface Category {
  id: number;
  name: string;
  parent_id: number;
  level: number;
  path: string;
  icon_url: string;
  sort_order: number;
  status: number;
  created_at: number;
  updated_at: number;
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

export interface Brand {
  id: number;
  name: string;
  english_name: string;
  logo_url: string;
  first_letter: string;
  description: string;
  status: number;
  sort_order: number;
  created_at: number;
  updated_at: number;
}

export interface BrandSimple {
  brand_id: number;
  brand_name: string;
  first_letter: string;
  logo_url: string;
}

export interface Promotion {
  id: number;
  promo_name: string;
  promo_type: number;
  promo_code: string;
  start_time: number;
  end_time: number;
  total_quantity: number;
  per_user_limit: number;
  used_quantity: number;
  rule_id: number | null;
  status: number;
  created_at: number;
  updated_at: number;
}

export interface PromotionListData {
  total: number;
  list: Promotion[];
}
