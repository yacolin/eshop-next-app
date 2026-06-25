export interface CheckoutItem {
  sku_id: number;
  product_name: string;
  sku_name: string;
  spec: Record<string, string>;
  price: number;
  quantity: number;
  image?: string;
  stock: number;
}

export interface PreOrderResponse {
  trade_token: string;
  items: CheckoutItem[];
  total_amount: number;
  shipping_fee: number;
  coupon_discount: number;
  final_amount: number;
}

export interface SubmitOrderRequest {
  trade_token?: string;
  sku_id?: number;
  quantity?: number;
  address_id?: number;
  coupon_id?: number;
  note?: string;
}

export interface OrderResult {
  order_id: number;
  status: string;
  total_amount: number;
}
