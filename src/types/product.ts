// Legacy types bridge — maps generated types to friendly names
import type {
  GfEshopInternalModelEntityProducts,
  GfEshopApiProductsV1SkuDetailItem,
  GfEshopApiProductsV1ProductAttrDetailResponse,
  GfEshopApiProductsV1ProductsDetailRes,
  GfEshopApiUserAuthV1UserLoginReq,
  GfEshopApiUserAuthV1UserLoginRes,
  GfEshopInternalModelEntityAddresses,
  GfEshopApiAddressV1AddressCreateReq,
  GfEshopApiUserV1UserProfileRes,
  GfEshopApiUserV1UserUpdateInfoReq,
} from "@/lib/api-gen/data-contracts";

export type ProductSPU = GfEshopInternalModelEntityProducts;
export type ProductSKU = GfEshopApiProductsV1SkuDetailItem;
export type ProductProductAttrResponse = GfEshopApiProductsV1ProductAttrDetailResponse;
export type ProductSPUDetailResponse = GfEshopApiProductsV1ProductsDetailRes;

export type UserPasswordLoginReq = GfEshopApiUserAuthV1UserLoginReq;
export type UserPasswordLoginRes = GfEshopApiUserAuthV1UserLoginRes;
export type UserAddress = GfEshopInternalModelEntityAddresses;
export type UserCreateAddressReq = GfEshopApiAddressV1AddressCreateReq;
export type UserProfile = GfEshopApiUserV1UserProfileRes;
export type UserUpdateProfileReq = GfEshopApiUserV1UserUpdateInfoReq;

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
  skus: (ProductSKU & { spec: Record<string, string> })[];
  attributes: ProductProductAttrResponse[];
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
