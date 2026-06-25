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
  customer_id: string;
  address_id: number;
  user_coupon_id?: number | null;
  items: Array<{ sku_id: number; quantity: number }>;
}

export interface OrderResult {
  id: number;
  order_no: string;
  total_amount: number;
  status: string;
  consignee: string;
  phone: string;
  province?: string;
  city?: string;
  district?: string;
  detail_addr?: string;
}
