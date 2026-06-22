export interface CartItemData {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  sku: string;
  product_name: string;
  stock: number;
}

export interface CartData {
  id: number;
  user_id: number;
  items: CartItemData[];
  total_items: number;
  total_price: number;
}

export interface AddToCartRequest {
  product_id: number;
  quantity: number;
  sku?: string;
}

export interface UpdateCartItemRequest {
  quantity: number;
}
