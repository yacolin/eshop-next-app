// Legacy types bridge
import type { ProductSPU } from "@/lib/api-gen/data-contracts";

export type Product = ProductSPU;
export interface ProductDetailResponse {
  product: {
    id: number;
    name: string;
    description: string;
    min_price: number;
    created_at: number | string;
    updated_at: number | string;
  };
  skus: any[];
  attributes: any[];
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
