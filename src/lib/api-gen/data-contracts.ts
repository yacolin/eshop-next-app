/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BaseNotificationListResult {
  list?: BaseNotificationResp[];
  total?: number;
}

export interface BaseNotificationResp {
  category?: number;
  channel?: number;
  content?: string;
  content_template?: string;
  created_at?: number;
  created_by?: number;
  icon_url?: string;
  id?: number;
  is_processed?: boolean;
  is_read?: boolean;
  priority?: number;
  process_result?: string;
  processed_at?: number;
  read_at?: number;
  redirect_url?: string;
  target_id?: number;
  target_type?: string;
  template_params?: string;
  title?: string;
  updated_at?: number;
  user_id?: number;
}

export interface BaseSendSystemNotificationReq {
  /** @minLength 1 */
  content: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  title: string;
  /** @min 0 */
  user_id?: number;
}

export interface BaseUnreadCountResp {
  count?: number;
}

export interface DashboardCategoryDistDTO {
  category?: string;
  value?: number;
}

export interface DashboardDashboardResponse {
  category_dist?: DashboardCategoryDistDTO[];
  inventory_status_dist?: DashboardStatusDistDTO[];
  order_status_dist?: DashboardStatusDistDTO[];
  order_trend?: DashboardOrderTrendDTO[];
  payment_method_dist?: DashboardMethodDistDTO[];
  summary?: DashboardSummaryDTO;
  top_products?: DashboardTopProductDTO[];
}

export interface DashboardMethodDistDTO {
  label?: string;
  method?: string;
  value?: number;
}

export interface DashboardOrderTrendDTO {
  amount?: number;
  count?: number;
  date?: string;
}

export interface DashboardStatusDistDTO {
  label?: string;
  status?: string;
  value?: number;
}

export interface DashboardSummaryDTO {
  low_stock_count?: number;
  total_orders?: number;
  total_products?: number;
  total_revenue?: number;
}

export interface DashboardTopProductDTO {
  amount?: number;
  count?: number;
  name?: string;
}

export interface DtoOnlineStatsResponse {
  /** 连接数 */
  connections?: number;
  /** 在线用户数 */
  online_users?: number;
}

export interface DtoReconnectRequest {
  /** 客户端最后收到的消息序列号 */
  last_seq: number;
}

export interface DtoReconnectResponse {
  /** 缓存最大序列号 */
  cached_max_seq?: number;
  /** 缓存最小序列号 */
  cached_min_seq?: number;
  /** 服务端当前序列号 */
  current_seq?: number;
  /** 客户端上报的序列号 */
  last_seq?: number;
  /** 提示信息 */
  message?: string;
  /** 补发消息数量 */
  message_count?: number;
  /** 需要补发的消息列表 */
  messages?: any[];
  /** 是否需要全量同步 */
  need_full_sync?: boolean;
  /** 是否需要增量同步 */
  need_incremental?: boolean;
  /** 状态：ok, sync_required */
  status?: string;
}

export interface DtoSessionResponse {
  /** 首次连接时间 */
  connected_at?: string;
  /** 会话是否存在 */
  exists?: boolean;
  /** 最后活跃时间 */
  last_active_at?: string;
  /** 最后收到的消息序列号 */
  last_seq?: number;
  /** 重连次数 */
  reconnect_count?: number;
  /** 用户ID */
  user_id?: number;
}

export interface InventoryDeductStockReq {
  /** @maxLength 50 */
  operator?: string;
  quantity: number;
  /** @maxLength 64 */
  reference_id?: string;
  sku_id: number;
}

export interface InventoryInventory {
  created_at?: string;
  id?: number;
  in_transit?: number;
  last_counted_at?: string;
  last_counted_by?: string;
  max_threshold?: number;
  quantity?: number;
  reserved?: number;
  sku_id?: number;
  status?: string;
  threshold?: number;
  updated_at?: string;
  warehouse_id?: number;
}

export interface InventoryInventoryLog {
  after_quantity?: number;
  after_reserved?: number;
  before_quantity?: number;
  before_reserved?: number;
  change_amount?: number;
  change_type?: string;
  created_at?: string;
  id?: number;
  note?: string;
  operator?: string;
  reference_id?: string;
  sku_id?: number;
  warehouse_id?: number;
}

export interface InventoryInventoryLogListResult {
  list?: InventoryInventoryLog[];
  total?: number;
}

export interface InventoryLockStockReq {
  /** @maxLength 50 */
  operator?: string;
  quantity: number;
  /** @maxLength 64 */
  reference_id?: string;
  sku_id: number;
}

export interface InventoryRestockReq {
  /** @maxLength 500 */
  note?: string;
  /** @maxLength 50 */
  operator?: string;
  quantity: number;
  /** @maxLength 64 */
  reference_id?: string;
  sku_id: number;
  warehouse_id?: number;
}

export interface InventoryUnlockStockReq {
  /** @maxLength 50 */
  operator?: string;
  quantity: number;
  /** @maxLength 64 */
  reference_id?: string;
  sku_id: number;
}

export interface MarketingClaimCouponReq {
  promotion_id: number;
}

export interface MarketingCreatePromotionReq {
  benefit_type?: MarketingCreatePromotionReqBenefitTypeEnum;
  benefit_value?: number;
  condition_type?: MarketingCreatePromotionReqConditionTypeEnum;
  condition_value?: number;
  end_time: string;
  is_stackable?: MarketingCreatePromotionReqIsStackableEnum;
  per_user_limit?: number;
  /** Products */
  product_ids?: number[];
  /** @maxLength 50 */
  promo_code?: string;
  /** @maxLength 100 */
  promo_name: string;
  promo_type: MarketingCreatePromotionReqPromoTypeEnum;
  /**
   * Rule
   * @maxLength 100
   */
  rule_name?: string;
  stack_priority?: number;
  start_time: string;
  total_quantity?: number;
}

export interface MarketingFlashBuyReq {
  product_id: number;
  promotion_id: number;
  /** @max 99 */
  quantity: number;
  sku_id: number;
}

export interface MarketingFlashConfirmReq {
  address_id?: number;
  token: string;
}

export interface MarketingPromotion {
  created_at?: string;
  created_by?: number;
  end_time?: string;
  id?: number;
  per_user_limit?: number;
  promo_code?: string;
  promo_name?: string;
  promo_type?: number;
  rule_id?: number;
  start_time?: string;
  status?: number;
  total_quantity?: number;
  updated_at?: string;
  updated_by?: number;
  used_quantity?: number;
}

export interface MarketingPromotionDetailResponse {
  created_at?: string;
  created_by?: number;
  end_time?: string;
  id?: number;
  per_user_limit?: number;
  products?: MarketingPromotionProductItem[];
  promo_code?: string;
  promo_name?: string;
  promo_type?: number;
  rule?: MarketingPromotionRule;
  rule_id?: number;
  start_time?: string;
  status?: number;
  total_quantity?: number;
  updated_at?: string;
  updated_by?: number;
  used_quantity?: number;
}

export interface MarketingPromotionListResult {
  list?: MarketingPromotion[];
  total?: number;
}

export interface MarketingPromotionProductItem {
  category_id?: number;
  id?: number;
  main_image?: string;
  max_price?: number;
  min_price?: number;
  product_id?: number;
  product_type?: number;
  sales_count?: number;
  spu_name?: string;
  spu_status?: number;
  subtitle?: string;
  unit?: string;
}

export interface MarketingPromotionRule {
  benefit_type?: number;
  benefit_value?: number;
  condition_type?: number;
  condition_value?: number;
  created_at?: string;
  created_by?: number;
  id?: number;
  is_stackable?: number;
  promotion_id?: number;
  rule_name?: string;
  stack_priority?: number;
  updated_at?: string;
  updated_by?: number;
}

export interface MarketingUpdatePromotionReq {
  benefit_type?: MarketingUpdatePromotionReqBenefitTypeEnum;
  benefit_value?: number;
  condition_type?: MarketingUpdatePromotionReqConditionTypeEnum;
  condition_value?: number;
  end_time?: string;
  is_stackable?: MarketingUpdatePromotionReqIsStackableEnum;
  per_user_limit?: number;
  /** @maxLength 100 */
  promo_name?: string;
  /** @maxLength 100 */
  rule_name?: string;
  stack_priority?: number;
  start_time?: string;
  status?: MarketingUpdatePromotionReqStatusEnum;
  total_quantity?: number;
}

export interface MarketingUseCouponReq {
  order_id: number;
  user_promotion_id: number;
}

export interface MarketingUserPromotion {
  acquire_time?: string;
  created_at?: string;
  created_by?: number;
  expire_time?: string;
  id?: number;
  order_id?: number;
  promotion_id?: number;
  queue_token?: string;
  status?: number;
  updated_at?: string;
  updated_by?: number;
  used_time?: string;
  user_id?: number;
}

export interface MarketingUserPromotionListResult {
  list?: MarketingUserPromotion[];
  total?: number;
}

export interface ProductAttribute {
  category_id?: number;
  created_at?: string;
  id?: number;
  /** 1-文本 2-单选 3-多选 4-数字 */
  input_type?: number;
  is_sku_spec?: number;
  name?: string;
  required?: number;
  searchable?: number;
  sort_order?: number;
  status?: number;
  unit?: string;
  updated_at?: string;
  /** 可选值 JSON 数组 */
  values?: string;
}

export interface ProductBrand {
  created_at?: string;
  description?: string;
  english_name?: string;
  first_letter?: string;
  id?: number;
  logo_url?: string;
  name?: string;
  sort_order?: number;
  status?: number;
  updated_at?: string;
}

export interface ProductBrandListResult {
  list?: ProductBrand[];
  total?: number;
}

export interface ProductCategory {
  created_at?: string;
  icon_url?: string;
  id?: number;
  level?: number;
  name?: string;
  parent_id?: number;
  path?: string;
  sort_order?: number;
  status?: number;
  updated_at?: string;
}

export interface ProductCategoryBrandDetail {
  brand_id?: number;
  brand_name?: string;
  english_name?: string;
  first_letter?: string;
  logo_url?: string;
  sort_order?: number;
}

export interface ProductCategoryListResult {
  list?: ProductCategory[];
  total?: number;
}

export interface ProductCreateAttributeReq {
  category_id: number;
  input_type?: ProductCreateAttributeReqInputTypeEnum;
  is_sku_spec?: ProductCreateAttributeReqIsSkuSpecEnum;
  /** @maxLength 100 */
  name: string;
  required?: ProductCreateAttributeReqRequiredEnum;
  searchable?: ProductCreateAttributeReqSearchableEnum;
  sort_order?: number;
  /** @maxLength 20 */
  unit?: string;
  /** JSON */
  values?: string;
}

export interface ProductCreateBrandReq {
  description?: string;
  /** @maxLength 100 */
  english_name?: string;
  first_letter?: string;
  /** @maxLength 512 */
  logo_url?: string;
  /** @maxLength 100 */
  name: string;
  sort_order?: number;
  status?: ProductCreateBrandReqStatusEnum;
}

export interface ProductCreateCategoryReq {
  /** @maxLength 512 */
  icon_url?: string;
  /** @maxLength 100 */
  name: string;
  parent_id?: number;
  sort_order?: number;
}

export interface ProductCreateProductAttrItem {
  attribute_id: number;
  /** @maxLength 500 */
  value: string;
}

export interface ProductCreateSKUItem {
  /** @maxLength 50 */
  barcode?: string;
  cost_price?: number;
  height?: number;
  /** @maxLength 512 */
  image?: string;
  length?: number;
  market_price?: number;
  max_purchase_qty?: number;
  min_purchase_qty?: number;
  price: number;
  /** @maxLength 100 */
  sku_code: string;
  spec?: Record<string, string>;
  volume?: number;
  weight?: number;
  width?: number;
}

export interface ProductCreateSKUReq {
  /** @maxLength 50 */
  barcode?: string;
  cost_price?: number;
  height?: number;
  /** @maxLength 512 */
  image?: string;
  length?: number;
  market_price?: number;
  price: number;
  product_id: number;
  /** @maxLength 100 */
  sku_code: string;
  spec: string;
  volume?: number;
  weight?: number;
  width?: number;
}

export interface ProductCreateSPUReq {
  attributes?: ProductCreateProductAttrItem[];
  brand_id?: number;
  category_id: number;
  /** @maxLength 50 */
  created_by?: string;
  description?: string;
  images?: string[];
  /** @maxLength 512 */
  main_image: string;
  mobile_description?: string;
  /** @maxLength 200 */
  name: string;
  /** @minItems 1 */
  skus: ProductCreateSKUItem[];
  sort_order?: number;
  /** @maxLength 500 */
  subtitle?: string;
  /** @maxLength 10 */
  unit?: string;
  /** @maxLength 512 */
  video_url?: string;
}

export interface ProductDescription {
  created_at?: string;
  description?: string;
  id?: number;
  mobile_description?: string;
  product_id?: number;
  updated_at?: string;
}

export interface ProductProductAttrResponse {
  attribute_id?: number;
  attribute_name?: string;
  sort_order?: number;
  values?: string[];
}

export interface ProductSKU {
  available_quantity?: number;
  barcode?: string;
  cost_price?: number;
  created_at?: string;
  height?: number;
  id?: number;
  image?: string;
  inventory_status?: string;
  length?: number;
  market_price?: number;
  max_purchase_qty?: number;
  min_purchase_qty?: number;
  price?: number;
  product_id?: number;
  sku_code?: string;
  spec?: string;
  status?: number;
  updated_at?: string;
  volume?: number;
  weight?: number;
  width?: number;
}

export interface ProductSPU {
  brand_id?: number;
  category_id?: number;
  created_at?: string;
  created_by?: string;
  has_description?: number;
  id?: number;
  images?: string;
  main_image?: string;
  max_price?: number;
  min_price?: number;
  name?: string;
  rating_average?: number;
  rating_count?: number;
  sales_count?: number;
  sort_order?: number;
  status?: number;
  subtitle?: string;
  total_stock?: number;
  unit?: string;
  updated_at?: string;
  updated_by?: string;
  video_url?: string;
}

export interface ProductSPUDetailResponse {
  attributes?: ProductProductAttrResponse[];
  brand_id?: number;
  category_id?: number;
  created_at?: string;
  created_by?: string;
  description?: ProductDescription;
  has_description?: number;
  id?: number;
  images?: string;
  main_image?: string;
  max_price?: number;
  min_price?: number;
  name?: string;
  rating_average?: number;
  rating_count?: number;
  sales_count?: number;
  skus?: ProductSKU[];
  sort_order?: number;
  status?: number;
  subtitle?: string;
  total_stock?: number;
  unit?: string;
  updated_at?: string;
  updated_by?: string;
  video_url?: string;
}

export interface ProductSPUListResult {
  cursor?: string;
  has_more?: boolean;
  list?: ProductSPU[];
}

export interface ProductSetCategoryBrandsReq {
  brand_ids: number[];
  sort_order?: number;
}

export interface ProductUpdateAttributeReq {
  input_type?: ProductUpdateAttributeReqInputTypeEnum;
  is_sku_spec?: ProductUpdateAttributeReqIsSkuSpecEnum;
  /** @maxLength 100 */
  name?: string;
  required?: ProductUpdateAttributeReqRequiredEnum;
  searchable?: ProductUpdateAttributeReqSearchableEnum;
  sort_order?: number;
  status?: ProductUpdateAttributeReqStatusEnum;
  /** @maxLength 20 */
  unit?: string;
  values?: string;
}

export interface ProductUpdateBrandReq {
  description?: string;
  /** @maxLength 100 */
  english_name?: string;
  first_letter?: string;
  /** @maxLength 512 */
  logo_url?: string;
  /** @maxLength 100 */
  name?: string;
  sort_order?: number;
  status?: ProductUpdateBrandReqStatusEnum;
}

export interface ProductUpdateCategoryReq {
  /** @maxLength 512 */
  icon_url?: string;
  /** @maxLength 100 */
  name?: string;
  sort_order?: number;
  status?: ProductUpdateCategoryReqStatusEnum;
}

export interface ProductUpdateSKUReq {
  /** @maxLength 50 */
  barcode?: string;
  /** @min 0 */
  cost_price?: number;
  height?: number;
  /** @maxLength 512 */
  image?: string;
  length?: number;
  /** @min 0 */
  market_price?: number;
  price?: number;
  status?: ProductUpdateSkuReqStatusEnum;
  volume?: number;
  weight?: number;
  width?: number;
}

export interface ProductUpdateSPUReq {
  images?: string[];
  /** @maxLength 512 */
  main_image?: string;
  /** @maxLength 200 */
  name?: string;
  sort_order?: number;
  status?: ProductUpdateSpuReqStatusEnum;
  /** @maxLength 500 */
  subtitle?: string;
  /** @maxLength 10 */
  unit?: string;
  /** @maxLength 50 */
  updated_by?: string;
  /** @maxLength 512 */
  video_url?: string;
}

export interface ResponseResponse {
  code?: number;
  data?: any;
  message?: string;
  trace_id?: string;
}

export interface ReviewCreateReviewReq {
  /** @maxLength 2000 */
  content?: string;
  is_anonymous?: boolean;
  /**
   * @min 1
   * @max 5
   */
  logistics_rating?: number;
  order_id: number;
  order_item_id?: number;
  /**
   * @min 1
   * @max 5
   */
  overall_rating: number;
  /**
   * @min 1
   * @max 5
   */
  quality_rating?: number;
  /**
   * @min 1
   * @max 5
   */
  service_rating?: number;
  sku_id?: number;
  spu_id: number;
}

export interface ReviewModerateReviewReq {
  /** @maxLength 200 */
  reason?: string;
  status: ReviewModerateReviewReqStatusEnum;
}

export interface ReviewReplyReviewReq {
  /** @maxLength 1000 */
  content: string;
}

export interface ReviewReviewListResult {
  list?: ReviewReviewResp[];
  total?: number;
}

export interface ReviewReviewRatingResp {
  avg_logistics_rating?: number;
  avg_overall_rating?: number;
  avg_quality_rating?: number;
  avg_service_rating?: number;
  rating_1_count?: number;
  rating_2_count?: number;
  rating_3_count?: number;
  rating_4_count?: number;
  rating_5_count?: number;
  spu_id?: number;
  total_reviews?: number;
  with_media_count?: number;
}

export interface ReviewReviewResp {
  content?: string;
  created_at?: number;
  helpful_count?: number;
  id?: number;
  is_anonymous?: boolean;
  like_count?: number;
  logistics_rating?: number;
  order_id?: number;
  order_item_id?: number;
  overall_rating?: number;
  quality_rating?: number;
  reject_reason?: string;
  reply_count?: number;
  service_rating?: number;
  sku_id?: number;
  spu_id?: number;
  status?: number;
  updated_at?: number;
  user_id?: number;
}

export interface TradeAddItemReq {
  /** @max 99 */
  quantity: number;
  sku_id: number;
}

export interface TradeAddressInfo {
  /** @maxLength 32 */
  city?: string;
  /** @maxLength 64 */
  consignee: string;
  /** @maxLength 256 */
  detail_addr?: string;
  /** @maxLength 32 */
  district?: string;
  /** @maxLength 20 */
  phone: string;
  /** @maxLength 32 */
  province?: string;
  /** @maxLength 10 */
  zip_code?: string;
}

export interface TradeCart {
  created_at?: string;
  expired_at?: string;
  id?: number;
  item_count?: number;
  session_id?: string;
  total_amount?: number;
  updated_at?: string;
  user_id?: number;
}

export interface TradeCreateOrderItem {
  /** @max 99 */
  quantity: number;
  sku_id: number;
}

export interface TradeCreateOrderReq {
  address: TradeAddressInfo;
  /** @maxLength 500 */
  buyer_remark?: string;
  coupon_id?: number;
  /** @minItems 1 */
  items: TradeCreateOrderItem[];
  /** @maxLength 20 */
  source?: string;
}

export interface TradeCreatePaymentReq {
  amount: number;
  /** @maxLength 32 */
  channel?: string;
  order_id: number;
  /** @maxLength 32 */
  order_no: string;
  /** @maxLength 20 */
  order_type?: string;
  /** @maxLength 32 */
  payment_method: string;
}

export interface TradeCreateRefundReq {
  amount: number;
  /** @maxLength 32 */
  payment_no: string;
  /** @maxLength 500 */
  reason?: string;
}

export interface TradeOrder {
  buyer_remark?: string;
  city?: string;
  closed_at?: string;
  completed_at?: string;
  consignee?: string;
  coupon_id?: number;
  coupon_snapshot?: string;
  created_at?: string;
  delivered_at?: string;
  detail_addr?: string;
  discount_amount?: number;
  district?: string;
  id?: number;
  order_no?: string;
  paid_at?: string;
  pay_amount?: number;
  payment_method?: string;
  payment_status?: string;
  phone?: string;
  province?: string;
  seller_remark?: string;
  shipped_at?: string;
  shipping_fee?: number;
  source?: string;
  status?: string;
  total_amount?: number;
  updated_at?: string;
  user_id?: number;
  zip_code?: string;
}

export interface TradeOrderDetailResponse {
  buyer_remark?: string;
  city?: string;
  closed_at?: string;
  completed_at?: string;
  consignee?: string;
  coupon_id?: number;
  coupon_snapshot?: string;
  created_at?: string;
  delivered_at?: string;
  detail_addr?: string;
  discount_amount?: number;
  district?: string;
  id?: number;
  items?: TradeOrderItem[];
  order_no?: string;
  paid_at?: string;
  pay_amount?: number;
  payment_method?: string;
  payment_status?: string;
  phone?: string;
  province?: string;
  seller_remark?: string;
  shipped_at?: string;
  shipping_fee?: number;
  source?: string;
  status?: string;
  total_amount?: number;
  updated_at?: string;
  user_id?: number;
  zip_code?: string;
}

export interface TradeOrderItem {
  created_at?: string;
  id?: number;
  image?: string;
  order_id?: number;
  order_no?: string;
  price?: number;
  product_id?: number;
  product_name?: string;
  quantity?: number;
  refund_amount?: number;
  refund_status?: string;
  sku_code?: string;
  sku_id?: number;
  sku_spec?: string;
  subtotal?: number;
  updated_at?: string;
}

export interface TradeOrderListResult {
  list?: TradeOrder[];
  total?: number;
}

export interface TradePayment {
  amount?: number;
  channel?: string;
  created_at?: string;
  currency?: string;
  failure_reason?: string;
  id?: number;
  order_id?: number;
  order_no?: string;
  order_type?: string;
  paid_at?: string;
  payment_method?: string;
  payment_no?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: string;
}

export interface TradePaymentCallbackReq {
  /** @maxLength 32 */
  channel?: string;
  /** @maxLength 500 */
  failure_reason?: string;
  /** @maxLength 32 */
  payment_no: string;
  raw_body?: string;
  status: TradePaymentCallbackReqStatusEnum;
  /** @maxLength 128 */
  transaction_id: string;
}

export interface TradeUpdateItemReq {
  /**
   * @min 0
   * @max 99
   */
  quantity?: number;
  sku_id: number;
}

export interface TradeUpdateOrderStatusReq {
  /** @maxLength 500 */
  note?: string;
  status: TradeUpdateOrderStatusReqStatusEnum;
}

export interface UserAddress {
  city?: string;
  consignee?: string;
  country?: string;
  created_at?: string;
  detail?: string;
  district?: string;
  id?: number;
  is_default?: boolean;
  phone?: string;
  province?: string;
  tag?: string;
  updated_at?: string;
  user_id?: number;
  zip_code?: string;
}

export interface UserAddressListResult {
  list?: UserAddress[];
  total?: number;
}

export interface UserAssignPermissionsReq {
  permission_ids: number[];
}

export interface UserAssignRoleReq {
  role_id: number;
}

export interface UserCheckPermissionsReq {
  permission_names: string[];
}

export interface UserCheckPermissionsResult {
  permissions?: Record<string, boolean>;
}

export interface UserCreateAddressReq {
  /** @maxLength 32 */
  city: string;
  /** @maxLength 64 */
  consignee: string;
  /** @maxLength 32 */
  country?: string;
  /** @maxLength 256 */
  detail: string;
  /** @maxLength 32 */
  district: string;
  is_default?: boolean;
  /** @maxLength 20 */
  phone: string;
  /** @maxLength 32 */
  province: string;
  tag?: UserCreateAddressReqTagEnum;
  /** @maxLength 10 */
  zip_code?: string;
}

export interface UserCreatePermissionReq {
  action: string;
  category?: string;
  description?: string;
  display_name: string;
  name: string;
  resource: string;
  sort_order?: number;
}

export interface UserCreateRoleReq {
  description?: string;
  display_name: string;
  is_system?: boolean;
  name: string;
  sort_order?: number;
  status?: UserCreateRoleReqStatusEnum;
}

export interface UserLoginResponse {
  access_token?: string;
  expires_at?: number;
  is_new_user?: boolean;
  refresh_token?: string;
  token_type?: string;
  user_id?: number;
  username?: string;
}

export interface UserPasswordLoginReq {
  password: string;
  username: string;
}

export interface UserPermission {
  action?: string;
  category?: string;
  created_at?: string;
  description?: string;
  display_name?: string;
  id?: number;
  name?: string;
  resource?: string;
  sort_order?: number;
  status?: number;
  updated_at?: string;
}

export interface UserPermissionListResult {
  list?: UserPermission[];
  total?: number;
}

export interface UserRefreshTokenReq {
  refresh_token: string;
}

export interface UserRegisterReq {
  email?: string;
  password?: string;
  phone?: string;
  provider: string;
  username?: string;
}

export interface UserRole {
  created_at?: string;
  description?: string;
  display_name?: string;
  id?: number;
  is_system?: boolean;
  name?: string;
  sort_order?: number;
  status?: number;
  updated_at?: string;
}

export interface UserRoleListResult {
  list?: UserRole[];
  total?: number;
}

export interface UserTokenResponse {
  access_token?: string;
  expires_at?: number;
  refresh_token?: string;
  token_type?: string;
}

export interface UserUpdateAddressReq {
  /** @maxLength 32 */
  city?: string;
  /** @maxLength 64 */
  consignee?: string;
  /** @maxLength 32 */
  country?: string;
  /** @maxLength 256 */
  detail?: string;
  /** @maxLength 32 */
  district?: string;
  is_default?: boolean;
  /** @maxLength 20 */
  phone?: string;
  /** @maxLength 32 */
  province?: string;
  tag?: UserUpdateAddressReqTagEnum;
  /** @maxLength 10 */
  zip_code?: string;
}

export interface UserUpdatePermissionReq {
  category?: string;
  description?: string;
  display_name?: string;
  sort_order?: number;
  status?: UserUpdatePermissionReqStatusEnum;
}

export interface UserUpdateRoleReq {
  description?: string;
  display_name?: string;
  sort_order?: number;
  status?: UserUpdateRoleReqStatusEnum;
}

export interface UserUpdateUserInfoReq {
  /** @maxLength 512 */
  avatar?: string;
  /** @maxLength 200 */
  bio?: string;
  birthday?: string;
  /** @maxLength 32 */
  city?: string;
  /** @maxLength 32 */
  country?: string;
  gender?: UserUpdateUserInfoReqGenderEnum;
  /** @maxLength 10 */
  language?: string;
  /** @maxLength 50 */
  nickname?: string;
  /** @maxLength 32 */
  province?: string;
  /** @maxLength 32 */
  timezone?: string;
  /** @maxLength 10 */
  zip_code?: string;
}

export interface UserUserInfoResponse {
  bio?: string;
  birthday?: string;
  city?: string;
  country?: string;
  gender?: number;
  language?: string;
  province?: string;
  timezone?: string;
  zip_code?: string;
}

export interface UserUserListItem {
  avatar?: string;
  created_at?: string;
  email?: string;
  email_verified?: boolean;
  id?: number;
  last_login_at?: string;
  last_login_ip?: string;
  nickname?: string;
  phone?: string;
  phone_verified?: boolean;
  register_ip?: string;
  register_source?: string;
  roles?: UserUserRoleBrief[];
  status?: number;
  updated_at?: string;
  username?: string;
}

export interface UserUserListResult {
  list?: UserUserListItem[];
  total?: number;
}

export interface UserUserProfileResponse {
  avatar?: string;
  email?: string;
  email_verified?: boolean;
  id?: number;
  nickname?: string;
  phone?: string;
  phone_verified?: boolean;
  status?: number;
  user_info?: UserUserInfoResponse;
  username?: string;
}

export interface UserUserRoleBrief {
  display_name?: string;
  id?: number;
  name?: string;
}

export interface WsTestPushRequest {
  /** 级别: info/warning/error */
  level?: string;
  /** 通知内容 */
  message: string;
  /** 目标: all(默认) 或 user_id */
  target?: string;
  /** 通知标题 */
  title: string;
}

export enum MarketingCreatePromotionReqBenefitTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

export enum MarketingCreatePromotionReqConditionTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum MarketingCreatePromotionReqIsStackableEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum MarketingCreatePromotionReqPromoTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export enum MarketingUpdatePromotionReqBenefitTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

export enum MarketingUpdatePromotionReqConditionTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum MarketingUpdatePromotionReqIsStackableEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum MarketingUpdatePromotionReqStatusEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum ProductCreateAttributeReqInputTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum ProductCreateAttributeReqIsSkuSpecEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductCreateAttributeReqRequiredEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductCreateAttributeReqSearchableEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductCreateBrandReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateAttributeReqInputTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum ProductUpdateAttributeReqIsSkuSpecEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateAttributeReqRequiredEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateAttributeReqSearchableEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateAttributeReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateBrandReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateCategoryReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateSkuReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum ProductUpdateSpuReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export enum ReviewModerateReviewReqStatusEnum {
  Value1 = 1,
  Value2 = 2,
}

export enum TradePaymentCallbackReqStatusEnum {
  Success = "success",
  Failed = "failed",
}

export enum TradeUpdateOrderStatusReqStatusEnum {
  Cancelled = "cancelled",
  Shipped = "shipped",
  Delivered = "delivered",
  Completed = "completed",
}

export enum UserCreateAddressReqTagEnum {
  Home = "home",
  Office = "office",
  Company = "company",
  Other = "other",
}

export enum UserCreateRoleReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum UserUpdateAddressReqTagEnum {
  Home = "home",
  Office = "office",
  Company = "company",
  Other = "other",
}

export enum UserUpdatePermissionReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum UserUpdateRoleReqStatusEnum {
  Value0 = 0,
  Value1 = 1,
}

export enum UserUpdateUserInfoReqGenderEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export type V1AddressesListData = ResponseResponse & {
  data?: UserAddressListResult;
};

export type V1AddressesCreateData = ResponseResponse & {
  data?: UserAddress;
};

export type V1AddressesDefaultListData = ResponseResponse & {
  data?: UserAddress;
};

export type V1AddressesDetailData = ResponseResponse & {
  data?: UserAddress;
};

export type V1AddressesUpdateData = ResponseResponse & {
  data?: UserAddress;
};

export type V1AddressesDeleteData = ResponseResponse;

export type V1AuthLoginPasswordCreateData = ResponseResponse & {
  data?: UserLoginResponse;
};

export type V1BrandsListData = ResponseResponse & {
  data?: ProductBrandListResult;
};

export type V1CartsListData = ResponseResponse & {
  data?: TradeCart;
};

export type V1CartsUpdateData = ResponseResponse;

export type V1CartsCreateData = ResponseResponse;

export type V1CartsDeleteData = ResponseResponse;

export type V1CartsClearCreateData = ResponseResponse;

export type V1CategoriesAllListData = ResponseResponse & {
  data?: ProductCategory[];
};

export type V1CategoriesRootListData = ResponseResponse & {
  data?: ProductCategory[];
};

export type V1CategoriesDetailData = ResponseResponse & {
  data?: ProductCategory;
};

export type V1CategoriesBrandsListData = ResponseResponse & {
  data?: ProductCategoryBrandDetail[];
};

export type V1CategoriesChildrenListData = ResponseResponse & {
  data?: ProductCategory[];
};

export type V1OrdersCreateData = ResponseResponse & {
  data?: TradeOrder;
};

export type V1ProductsListData = ResponseResponse & {
  data?: ProductSPUListResult;
};

export type V1ProductsDetailData = ResponseResponse & {
  data?: ProductSPUDetailResponse;
};

export type V1PromotionsListData = ResponseResponse & {
  data?: MarketingPromotionListResult;
};

export type V1PromotionsDetailData = ResponseResponse & {
  data?: MarketingPromotion;
};

export type V1PromotionsDetailListData = ResponseResponse & {
  data?: MarketingPromotionDetailResponse;
};
