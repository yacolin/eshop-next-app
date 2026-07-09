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

export type GfEshopApiAddressV1AddressListReq = object;

export interface GfEshopApiAddressV1AddressListRes {
  /** @format []*entity.Addresses */
  list?: GfEshopInternalModelEntityAddresses[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityAddresses {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 收货人姓名
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 国家
   * @format string
   */
  country?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区/县
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 地址标签：home/office/company/other
   * @format string
   */
  tag?: string;
  /**
   * 是否默认地址（NULL=非默认, 1=默认）
   * @format int
   */
  is_default?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiAddressV1AddressCreateReq {
  /**
   * 收货人姓名
   * @format string
   */
  consignee: string;
  /**
   * 联系电话
   * @format string
   */
  phone: string;
  /**
   * 国家
   * @format string
   */
  country?: string;
  /**
   * 省
   * @format string
   */
  province: string;
  /**
   * 市
   * @format string
   */
  city: string;
  /**
   * 区/县
   * @format string
   */
  district: string;
  /**
   * 详细地址
   * @format string
   */
  detail: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 地址标签：home/office/company/other
   * @format string
   */
  tag?: string;
  /**
   * 是否默认地址
   * @format int
   */
  is_default?: number;
}

export interface GfEshopApiAddressV1AddressCreateRes {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiAddressV1AddressGetDefaultReq = object;

export interface GfEshopApiAddressV1AddressGetDefaultRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 收货人姓名
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 国家
   * @format string
   */
  country?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区/县
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 地址标签：home/office/company/other
   * @format string
   */
  tag?: string;
  /**
   * 是否默认地址（NULL=非默认, 1=默认）
   * @format int
   */
  is_default?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiAddressV1AddressDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiAddressV1AddressDeleteRes = object;

export interface GfEshopApiAddressV1AddressDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiAddressV1AddressDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 收货人姓名
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 国家
   * @format string
   */
  country?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区/县
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 地址标签：home/office/company/other
   * @format string
   */
  tag?: string;
  /**
   * 是否默认地址（NULL=非默认, 1=默认）
   * @format int
   */
  is_default?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiAddressV1AddressUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 收货人姓名
   * @format *string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format *string
   */
  phone?: string;
  /**
   * 国家
   * @format *string
   */
  country?: string;
  /**
   * 省
   * @format *string
   */
  province?: string;
  /**
   * 市
   * @format *string
   */
  city?: string;
  /**
   * 区/县
   * @format *string
   */
  district?: string;
  /**
   * 详细地址
   * @format *string
   */
  detail?: string;
  /**
   * 邮编
   * @format *string
   */
  zip_code?: string;
  /**
   * 地址标签
   * @format *string
   */
  tag?: string;
  /**
   * 是否默认地址
   * @format *int
   */
  is_default?: number;
}

export type GfEshopApiAddressV1AddressUpdateRes = object;

export interface GfEshopApiAttributesV1AttributesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  category_id?: number;
  /** @format int */
  searchable?: number;
  /** @format int */
  is_sku_spec?: number;
}

export interface GfEshopApiAttributesV1AttributesListRes {
  /** @format []*entity.Attributes */
  list?: GfEshopInternalModelEntityAttributes[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityAttributes {
  /** @format int64 */
  id?: number;
  /**
   * 属性名称（如：处理器、屏幕尺寸）
   * @format string
   */
  name?: string;
  /**
   * 所属类目ID（该属性只出现在这个类目下）
   * @format int64
   */
  category_id?: number;
  /**
   * 1-文本 2-数值 3-颜色
   * @format int
   */
  value_type?: number;
  /**
   * 是否参与前台筛选
   * @format int
   */
  filterable?: number;
  /**
   * 单位（如：英寸、GB）
   * @format string
   */
  unit?: string;
  /**
   * 1-必填（该属性在该类目下创建商品时必须填写）
   * @format int
   */
  required?: number;
  /**
   * 1-作为前台筛选条件（列表页筛选项来源）
   * @format int
   */
  searchable?: number;
  /**
   * 1-是SKU规格（如颜色、内存） 0-仅SPU属性（如上市时间）
   * @format int
   */
  is_sku_spec?: number;
  /** @format int */
  sort_order?: number;
  /** @format int */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiAttributesV1AttributesCreateReq {
  /**
   * 属性名称
   * @format string
   */
  name: string;
  /**
   * 所属类目ID
   * @format int64
   */
  category_id: number;
  /**
   * 值类型(1-文本 2-数值 3-颜色)
   * @format int
   */
  value_type: GfEshopApiAttributesV1AttributesCreateReqValueTypeEnum;
  /**
   * 是否参与前台筛选
   * @format int
   */
  filterable?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 是否必填
   * @format int
   */
  required?: number;
  /**
   * 是否可搜索
   * @format int
   */
  searchable?: number;
  /**
   * 是否SKU规格
   * @format int
   */
  is_sku_spec?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiAttributesV1AttributesCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiAttributesV1AttributesListSearchableReq {
  /** @format int64 */
  category_id?: number;
}

export interface GfEshopApiAttributesV1AttributesListSearchableRes {
  /** @format []*entity.Attributes */
  list?: GfEshopInternalModelEntityAttributes[];
}

export interface GfEshopApiAttributesV1AttributesListSkuSpecReq {
  /** @format int64 */
  category_id?: number;
}

export interface GfEshopApiAttributesV1AttributesListSkuSpecRes {
  /** @format []*entity.Attributes */
  list?: GfEshopInternalModelEntityAttributes[];
}

export interface GfEshopApiAttributesV1AttributesDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiAttributesV1AttributesDeleteRes = object;

export interface GfEshopApiAttributesV1AttributesDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiAttributesV1AttributesDetailRes {
  /** @format int64 */
  id?: number;
  /**
   * 属性名称（如：处理器、屏幕尺寸）
   * @format string
   */
  name?: string;
  /**
   * 所属类目ID（该属性只出现在这个类目下）
   * @format int64
   */
  category_id?: number;
  /**
   * 1-文本 2-数值 3-颜色
   * @format int
   */
  value_type?: number;
  /**
   * 是否参与前台筛选
   * @format int
   */
  filterable?: number;
  /**
   * 单位（如：英寸、GB）
   * @format string
   */
  unit?: string;
  /**
   * 1-必填（该属性在该类目下创建商品时必须填写）
   * @format int
   */
  required?: number;
  /**
   * 1-作为前台筛选条件（列表页筛选项来源）
   * @format int
   */
  searchable?: number;
  /**
   * 1-是SKU规格（如颜色、内存） 0-仅SPU属性（如上市时间）
   * @format int
   */
  is_sku_spec?: number;
  /** @format int */
  sort_order?: number;
  /** @format int */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiAttributesV1AttributesUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 属性名称
   * @format string
   */
  name?: string;
  /**
   * 所属类目ID
   * @format int64
   */
  category_id?: number;
  /**
   * 值类型(1-文本 2-数值 3-颜色)
   * @format int
   */
  value_type?: GfEshopApiAttributesV1AttributesUpdateReqValueTypeEnum;
  /**
   * 是否参与前台筛选
   * @format int
   */
  filterable?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 是否必填
   * @format int
   */
  required?: number;
  /**
   * 是否可搜索
   * @format int
   */
  searchable?: number;
  /**
   * 是否SKU规格
   * @format int
   */
  is_sku_spec?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type GfEshopApiAttributesV1AttributesUpdateRes = object;

export interface GfEshopApiBrandsV1BrandsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  name?: string;
  /** @format string */
  first_letter?: string;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiBrandsV1BrandsListRes {
  /** @format []*entity.Brands */
  list?: GfEshopInternalModelEntityBrands[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityBrands {
  /** @format int64 */
  id?: number;
  /**
   * 品牌名称（如：苹果）
   * @format string
   */
  name?: string;
  /**
   * 英文名
   * @format string
   */
  english_name?: string;
  /**
   * 品牌Logo（CDN）
   * @format string
   */
  logo_url?: string;
  /**
   * 首字母（A-Z，用于前台索引筛选）
   * @format string
   */
  first_letter?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 品牌故事
   * @format string
   */
  description?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiBrandsV1BrandsCreateReq {
  /**
   * 品牌名称
   * @format string
   */
  name: string;
  /**
   * 英文名
   * @format string
   */
  english_name?: string;
  /**
   * 品牌Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 首字母
   * @format string
   */
  first_letter?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 品牌故事
   * @format string
   */
  description?: string;
}

export interface GfEshopApiBrandsV1BrandsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiBrandsV1BrandsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiBrandsV1BrandsDeleteRes = object;

export interface GfEshopApiBrandsV1BrandsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiBrandsV1BrandsDetailRes {
  /** @format int64 */
  id?: number;
  /**
   * 品牌名称（如：苹果）
   * @format string
   */
  name?: string;
  /**
   * 英文名
   * @format string
   */
  english_name?: string;
  /**
   * 品牌Logo（CDN）
   * @format string
   */
  logo_url?: string;
  /**
   * 首字母（A-Z，用于前台索引筛选）
   * @format string
   */
  first_letter?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 品牌故事
   * @format string
   */
  description?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiBrandsV1BrandsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 品牌名称
   * @format string
   */
  name?: string;
  /**
   * 英文名
   * @format string
   */
  english_name?: string;
  /**
   * 品牌Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 首字母
   * @format string
   */
  first_letter?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 品牌故事
   * @format string
   */
  description?: string;
}

export type GfEshopApiBrandsV1BrandsUpdateRes = object;

export type GfEshopApiCartsV1CartsGetReq = object;

export interface GfEshopApiCartsV1CartsGetRes {
  /** @format int64 */
  id?: number;
  /** @format int */
  item_count?: number;
  /** @format int64 */
  total_amount?: number;
  /** @format []v1.CartItemResponse */
  items?: GfEshopApiCartsV1CartItemResponse[];
}

export interface GfEshopApiCartsV1CartItemResponse {
  /** @format int64 */
  sku_id?: number;
  /** @format int64 */
  product_id?: number;
  /** @format string */
  product_name?: string;
  /** @format string */
  sku_spec?: string;
  /** @format string */
  image?: string;
  /** @format int64 */
  price?: number;
  /** @format int */
  quantity?: number;
  /** @format int64 */
  subtotal?: number;
}

export type GfEshopApiCartsV1CartsClearReq = object;

export type GfEshopApiCartsV1CartsClearRes = object;

export interface GfEshopApiCartsV1CartsAddItemReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 数量
   * @format int
   */
  quantity: number;
}

export interface GfEshopApiCartsV1CartsAddItemRes {
  /** @format int64 */
  id?: number;
  /** @format int */
  item_count?: number;
  /** @format int64 */
  total_amount?: number;
  /** @format []v1.CartItemResponse */
  items?: GfEshopApiCartsV1CartItemResponse[];
}

export interface GfEshopApiCartsV1CartsUpdateItemReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 数量（为0时删除）
   * @format int
   */
  quantity?: number;
}

export interface GfEshopApiCartsV1CartsUpdateItemRes {
  /** @format int64 */
  id?: number;
  /** @format int */
  item_count?: number;
  /** @format int64 */
  total_amount?: number;
  /** @format []v1.CartItemResponse */
  items?: GfEshopApiCartsV1CartItemResponse[];
}

export interface GfEshopApiCartsV1CartsRemoveItemReq {
  /** @format int64 */
  sku_id?: number;
}

export interface GfEshopApiCartsV1CartsRemoveItemRes {
  /** @format int64 */
  id?: number;
  /** @format int */
  item_count?: number;
  /** @format int64 */
  total_amount?: number;
  /** @format []v1.CartItemResponse */
  items?: GfEshopApiCartsV1CartItemResponse[];
}

export interface GfEshopApiCategoriesV1CategoryListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int */
  parent_id?: number;
  /** @format *int */
  status?: number;
  /** @format string */
  name?: string;
  /** @format int */
  level?: number;
}

export interface GfEshopApiCategoriesV1CategoryListRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityCategories {
  /** @format int64 */
  id?: number;
  /**
   * 类目名称（如：手机）
   * @format string
   */
  name?: string;
  /**
   * 父级ID（0表示根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级（1-3级）
   * @format int
   */
  level?: number;
  /**
   * 路径（如：1/23/45/）
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiCategoriesV1CategoryCreateReq {
  /**
   * 类目名称
   * @format string
   */
  name: string;
  /**
   * 父级ID
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级
   * @format int
   */
  level?: number;
  /**
   * 路径
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiCategoriesV1CategoryCreateRes {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiCategoriesV1CategoryAllReq = object;

export interface GfEshopApiCategoriesV1CategoryAllRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
}

export interface GfEshopApiCategoriesV1CategoryLevelReq {
  /** @format int64 */
  level?: number;
}

export interface GfEshopApiCategoriesV1CategoryLevelRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
}

export type GfEshopApiCategoriesV1CategoryNonRootReq = object;

export interface GfEshopApiCategoriesV1CategoryNonRootRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
}

export type GfEshopApiCategoriesV1CategoryRootReq = object;

export interface GfEshopApiCategoriesV1CategoryRootRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
}

export interface GfEshopApiCategoriesV1CategoryTreeReq {
  /** @format *int */
  status?: number;
}

export interface GfEshopApiCategoriesV1CategoryTreeRes {
  /** @format []*v1.CategoryTreeItem */
  tree?: GfEshopApiCategoriesV1CategoryTreeItem[];
}

export interface GfEshopApiCategoriesV1CategoryTreeItem {
  /** @format int64 */
  id?: number;
  /**
   * 类目名称（如：手机）
   * @format string
   */
  name?: string;
  /**
   * 父级ID（0表示根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级（1-3级）
   * @format int
   */
  level?: number;
  /**
   * 路径（如：1/23/45/）
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
  /** @format []*v1.CategoryTreeItem */
  children?: GfEshopApiCategoriesV1CategoryTreeItem[];
}

export interface GfEshopApiCategoriesV1CategoryDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiCategoriesV1CategoryDeleteRes = object;

export interface GfEshopApiCategoriesV1CategoryDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiCategoriesV1CategoryDetailRes {
  /** @format int64 */
  id?: number;
  /**
   * 类目名称（如：手机）
   * @format string
   */
  name?: string;
  /**
   * 父级ID（0表示根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级（1-3级）
   * @format int
   */
  level?: number;
  /**
   * 路径（如：1/23/45/）
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiCategoriesV1CategoryUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 类目名称
   * @format string
   */
  name?: string;
  /**
   * 父级ID
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级
   * @format int
   */
  level?: number;
  /**
   * 路径
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type GfEshopApiCategoriesV1CategoryUpdateRes = object;

export interface GfEshopApiCategoryBrandsV1CategoryBrandListReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiCategoryBrandsV1CategoryBrandListRes {
  /** @format []*v1.CategoryBrandItem */
  list?: GfEshopApiCategoryBrandsV1CategoryBrandItem[];
}

export interface GfEshopApiCategoryBrandsV1CategoryBrandItem {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  category_id?: number;
  /** @format int64 */
  brand_id?: number;
  /** @format int */
  sort_order?: number;
  /** @format string */
  brand_name?: string;
  /** @format string */
  english_name?: string;
  /** @format string */
  logo_url?: string;
  /** @format string */
  first_letter?: string;
}

export interface GfEshopApiCategoryBrandsV1CategoryBrandUpdateReq {
  /** @format int64 */
  id?: number;
  /** @format []int64 */
  brand_ids: number[];
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
}

export type GfEshopApiCategoryBrandsV1CategoryBrandUpdateRes = object;

export interface GfEshopApiCategoriesV1CategoryChildrenReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiCategoriesV1CategoryChildrenRes {
  /** @format []*entity.Categories */
  list?: GfEshopInternalModelEntityCategories[];
}

export interface GfEshopApiMarketingV1CouponClaimReq {
  /** @format int64 */
  promotion_id: number;
}

export type GfEshopApiMarketingV1CouponClaimRes = object;

export interface GfEshopApiMarketingV1CouponListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiMarketingV1CouponListRes {
  /** @format []*entity.UserPromotions */
  list?: GfEshopInternalModelEntityUserPromotions[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityUserPromotions {
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 用户促销资产编号
   * @format string
   */
  user_promotion_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 促销ID
   * @format int64
   */
  promotion_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 领取时间
   * @format *gtime.Time
   */
  acquire_time?: string;
  /**
   * 过期时间
   * @format *gtime.Time
   */
  expire_time?: string;
  /**
   * 1-未使用 2-锁定中(下单未付) 3-已使用 4-已过期 5-已作废
   * @format int
   */
  status?: number;
  /**
   * 锁定的订单ID（用于回滚）
   * @format int64
   */
  lock_order_id?: number;
  /**
   * 使用时间
   * @format *gtime.Time
   */
  used_time?: string;
  /**
   * 最终使用的订单ID
   * @format int64
   */
  order_id?: number;
  /**
   * 秒杀排队令牌
   * @format string
   */
  queue_token?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMarketingV1CouponUseReq {
  /** @format int64 */
  user_promotion_id: number;
  /** @format int64 */
  order_id: number;
}

export type GfEshopApiMarketingV1CouponUseRes = object;

export type GfEshopApiDashboardV1DashboardStatsReq = object;

export interface GfEshopApiDashboardV1DashboardStatsRes {
  summary?: GfEshopApiDashboardV1SummaryDTO;
  /** @format []v1.OrderTrendDTO */
  order_trend?: GfEshopApiDashboardV1OrderTrendDTO[];
  /** @format []v1.StatusDistDTO */
  order_status_dist?: GfEshopApiDashboardV1StatusDistDTO[];
  /** @format []v1.MethodDistDTO */
  payment_method_dist?: GfEshopApiDashboardV1MethodDistDTO[];
  /** @format []v1.CategoryDistDTO */
  category_dist?: GfEshopApiDashboardV1CategoryDistDTO[];
  /** @format []v1.StatusDistDTO */
  inventory_status_dist?: GfEshopApiDashboardV1StatusDistDTO[];
  /** @format []v1.TopProductDTO */
  top_products?: GfEshopApiDashboardV1TopProductDTO[];
}

export interface GfEshopApiDashboardV1SummaryDTO {
  /** @format int64 */
  total_orders?: number;
  /** @format int64 */
  total_revenue?: number;
  /** @format int64 */
  total_products?: number;
  /** @format int64 */
  low_stock_count?: number;
}

export interface GfEshopApiDashboardV1OrderTrendDTO {
  /** @format string */
  date?: string;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  amount?: number;
}

export interface GfEshopApiDashboardV1StatusDistDTO {
  /** @format string */
  status?: string;
  /** @format string */
  label?: string;
  /** @format int64 */
  value?: number;
}

export interface GfEshopApiDashboardV1MethodDistDTO {
  /** @format string */
  method?: string;
  /** @format string */
  label?: string;
  /** @format int64 */
  value?: number;
}

export interface GfEshopApiDashboardV1CategoryDistDTO {
  /** @format string */
  category?: string;
  /** @format int64 */
  value?: number;
}

export interface GfEshopApiDashboardV1TopProductDTO {
  /** @format string */
  name?: string;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  amount?: number;
}

export interface GfEshopApiDepartmentsV1ListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  parent_id?: number;
  /** @format string */
  name?: string;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiDepartmentsV1ListRes {
  /** @format []*entity.Departments */
  list?: GfEshopInternalModelEntityDepartments[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityDepartments {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 部门名称
   * @format string
   */
  name?: string;
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiDepartmentsV1CreateReq {
  /**
   * 部门名称
   * @format string
   */
  name: string;
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export interface GfEshopApiDepartmentsV1CreateRes {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiDepartmentsV1AllReq = object;

export interface GfEshopApiDepartmentsV1AllRes {
  /** @format []*entity.Departments */
  list?: GfEshopInternalModelEntityDepartments[];
}

export interface GfEshopApiDepartmentsV1TreeReq {
  /** @format *int */
  status?: number;
}

export interface GfEshopApiDepartmentsV1TreeRes {
  /** @format []*v1.TreeItem */
  tree?: GfEshopApiDepartmentsV1TreeItem[];
}

export interface GfEshopApiDepartmentsV1TreeItem {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 部门名称
   * @format string
   */
  name?: string;
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
  /** @format []*v1.TreeItem */
  children?: GfEshopApiDepartmentsV1TreeItem[];
}

export interface GfEshopApiDepartmentsV1DeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiDepartmentsV1DeleteRes = object;

export interface GfEshopApiDepartmentsV1DetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiDepartmentsV1DetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 部门名称
   * @format string
   */
  name?: string;
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiDepartmentsV1UpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 部门名称
   * @format string
   */
  name?: string;
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export type GfEshopApiDepartmentsV1UpdateRes = object;

export interface GfEshopApiDepartmentsV1ChildrenReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiDepartmentsV1ChildrenRes {
  /** @format []*entity.Departments */
  list?: GfEshopInternalModelEntityDepartments[];
}

export interface GfEshopApiMarketingV1FlashBuyReq {
  /** @format int64 */
  promotion_id: number;
  /** @format int64 */
  product_id: number;
  /** @format int64 */
  sku_id: number;
  /** @format int */
  quantity: number;
}

export interface GfEshopApiMarketingV1FlashBuyRes {
  /** @format string */
  token?: string;
}

export interface GfEshopApiMarketingV1FlashConfirmReq {
  /** @format string */
  token: string;
  /** @format int64 */
  address_id: number;
}

export type GfEshopApiMarketingV1FlashConfirmRes = object;

export interface GfEshopApiInventoriesV1InventoriesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  sku_id?: number;
  /** @format int64 */
  warehouse_id?: number;
}

export interface GfEshopApiInventoriesV1InventoriesListRes {
  /** @format []*entity.Inventories */
  list?: GfEshopInternalModelEntityInventories[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityInventories {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesCreateReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 仓库ID
   * @format int64
   */
  warehouse_id: number;
  /**
   * 物理库存
   * @format int64
   */
  quantity: number;
  /**
   * 安全库存阈值
   * @format int64
   */
  threshold?: number;
}

export interface GfEshopApiInventoriesV1InventoriesCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiInventoriesV1InventoriesDeductReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 扣减数量
   * @format int64
   */
  quantity: number;
  /**
   * 关联单据ID（如订单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
}

export interface GfEshopApiInventoriesV1InventoriesDeductRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesLockReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 预占数量
   * @format int64
   */
  quantity: number;
  /**
   * 关联单据ID（如订单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
}

export interface GfEshopApiInventoriesV1InventoriesLockRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesRestockReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 仓库ID
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 入库数量
   * @format int64
   */
  quantity: number;
  /**
   * 关联单据ID（如入库单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
  /**
   * 备注
   * @format string
   */
  note?: string;
}

export interface GfEshopApiInventoriesV1InventoriesRestockRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesGetStockReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
}

export interface GfEshopApiInventoriesV1InventoriesGetStockRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesUnlockReq {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 释放数量
   * @format int64
   */
  quantity: number;
  /**
   * 关联单据ID（如订单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
}

export interface GfEshopApiInventoriesV1InventoriesUnlockRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiInventoriesV1InventoriesDeleteRes = object;

export interface GfEshopApiInventoriesV1InventoriesDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiInventoriesV1InventoriesDetailRes {
  /**
   * 库存记录ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID（关联 sp_warehouses.id）
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 物理库存总量（含预占）
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存（下单未支付）
   * @format int64
   */
  reserved?: number;
  /**
   * 在途库存（采购中/调拨中）
   * @format int64
   */
  in_transit?: number;
  /**
   * 安全库存预警阈值（低于此值触发告警）
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限（入库不能超过此值）
   * @format int64
   */
  max_threshold?: number;
  /**
   * 1-充足 2-缺货 3-无货
   * @format int
   */
  status?: number;
  /**
   * 最后盘点时间
   * @format *gtime.Time
   */
  last_counted_at?: string;
  /**
   * 最后盘点人
   * @format string
   */
  last_counted_by?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1InventoriesUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 物理库存
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存
   * @format int64
   */
  reserved?: number;
  /**
   * 安全库存阈值
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限
   * @format int64
   */
  max_threshold?: number;
}

export type GfEshopApiInventoriesV1InventoriesUpdateRes = object;

export interface GfEshopApiInventoryLogsV1InventoryLogsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  sku_id?: number;
  /** @format string */
  change_type?: string;
}

export interface GfEshopApiInventoryLogsV1InventoryLogsListRes {
  /** @format []*entity.InventoryLogs */
  list?: GfEshopInternalModelEntityInventoryLogs[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityInventoryLogs {
  /**
   * 日志ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 变更类型：order_lock-下单预占 order_unlock-取消释放 order_deduct-支付扣减 inbound-入库 outbound-出库 return-退货入库 adjust-盘盈亏修正
   * @format string
   */
  change_type?: string;
  /**
   * 变更前物理库存
   * @format int64
   */
  before_quantity?: number;
  /**
   * 变更后物理库存
   * @format int64
   */
  after_quantity?: number;
  /**
   * 变更前预占库存
   * @format int64
   */
  before_reserved?: number;
  /**
   * 变更后预占库存
   * @format int64
   */
  after_reserved?: number;
  /**
   * 变更数量（正=增加，负=减少）
   * @format int64
   */
  change_amount?: number;
  /**
   * 关联单据ID（如订单号、入库单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人（系统操作填 system）
   * @format string
   */
  operator?: string;
  /**
   * 备注
   * @format string
   */
  note?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiInventoryLogsV1InventoryLogsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiInventoryLogsV1InventoryLogsDetailRes {
  /**
   * 日志ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 skus.id
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库ID
   * @format int64
   */
  warehouse_id?: number;
  /**
   * 变更类型：order_lock-下单预占 order_unlock-取消释放 order_deduct-支付扣减 inbound-入库 outbound-出库 return-退货入库 adjust-盘盈亏修正
   * @format string
   */
  change_type?: string;
  /**
   * 变更前物理库存
   * @format int64
   */
  before_quantity?: number;
  /**
   * 变更后物理库存
   * @format int64
   */
  after_quantity?: number;
  /**
   * 变更前预占库存
   * @format int64
   */
  before_reserved?: number;
  /**
   * 变更后预占库存
   * @format int64
   */
  after_reserved?: number;
  /**
   * 变更数量（正=增加，负=减少）
   * @format int64
   */
  change_amount?: number;
  /**
   * 关联单据ID（如订单号、入库单号）
   * @format string
   */
  reference_id?: string;
  /**
   * 操作人（系统操作填 system）
   * @format string
   */
  operator?: string;
  /**
   * 备注
   * @format string
   */
  note?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiLevelRulesV1LevelRulesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 规则类型筛选：upgrade-升级 downgrade-降级
   * @format string
   */
  rule_type?: string;
  /**
   * 状态筛选
   * @format *int
   */
  status?: number;
}

export interface GfEshopApiLevelRulesV1LevelRulesListRes {
  /** @format []*entity.LevelRules */
  list?: GfEshopInternalModelEntityLevelRules[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityLevelRules {
  /** @format int */
  id?: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则类型：upgrade-自动升级 downgrade-自动降级
   * @format string
   */
  rule_type?: string;
  /**
   * 源等级ID（0=任意等级）
   * @format int64
   */
  from_level_id?: number;
  /**
   * 目标等级ID
   * @format int64
   */
  to_level_id?: number;
  /**
   * 条件类型：points-累计积分 order_count-订单数 order_amount-消费金额
   * @format string
   */
  condition_type?: string;
  /**
   * 条件阈值
   * @format int64
   */
  condition_value?: number;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态：0-禁用 1-启用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiLevelRulesV1LevelRulesCreateReq {
  /**
   * 规则名称
   * @format string
   */
  name: string;
  /**
   * 规则类型：upgrade-升级 downgrade-降级
   * @format string
   */
  rule_type: string;
  /**
   * 源等级ID（0=任意等级）
   * @format int64
   */
  from_level_id?: number;
  /**
   * 目标等级ID
   * @format int64
   */
  to_level_id?: number;
  /**
   * 条件类型：points-累计积分 order_count-订单数 order_amount-消费金额 inactive_days-无消费天数
   * @format string
   */
  condition_type: string;
  /**
   * 条件阈值
   * @format int64
   */
  condition_value: number;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiLevelRulesV1LevelRulesCreateRes {
  /** @format int */
  id?: number;
}

export interface GfEshopApiLevelRulesV1LevelRulesDeleteReq {
  /** @format int */
  id: number;
}

export type GfEshopApiLevelRulesV1LevelRulesDeleteRes = object;

export interface GfEshopApiLevelRulesV1LevelRulesDetailReq {
  /** @format int */
  id: number;
}

export interface GfEshopApiLevelRulesV1LevelRulesDetailRes {
  /** @format int */
  id?: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则类型：upgrade-自动升级 downgrade-自动降级
   * @format string
   */
  rule_type?: string;
  /**
   * 源等级ID（0=任意等级）
   * @format int64
   */
  from_level_id?: number;
  /**
   * 目标等级ID
   * @format int64
   */
  to_level_id?: number;
  /**
   * 条件类型：points-累计积分 order_count-订单数 order_amount-消费金额
   * @format string
   */
  condition_type?: string;
  /**
   * 条件阈值
   * @format int64
   */
  condition_value?: number;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态：0-禁用 1-启用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiLevelRulesV1LevelRulesUpdateReq {
  /** @format int */
  id: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则类型
   * @format string
   */
  rule_type?: string;
  /**
   * 源等级ID
   * @format int64
   */
  from_level_id?: number;
  /**
   * 目标等级ID
   * @format int64
   */
  to_level_id?: number;
  /**
   * 条件类型
   * @format string
   */
  condition_type?: string;
  /**
   * 条件阈值
   * @format int64
   */
  condition_value?: number;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format *int
   */
  sort_order?: number;
  /**
   * 状态
   * @format *int
   */
  status?: number;
}

export type GfEshopApiLevelRulesV1LevelRulesUpdateRes = object;

export interface GfEshopApiMerchantBalancesV1GetByMerchantReq {
  /** @format int64 */
  merchant_id: number;
}

export interface GfEshopApiMerchantBalancesV1GetByMerchantRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 可提现余额（分）
   * @format int64
   */
  available_balance?: number;
  /**
   * 冻结余额（分）
   * @format int64
   */
  freeze_balance?: number;
  /**
   * 币种
   * @format string
   */
  currency?: string;
  /**
   * 版本号（并发控制）
   * @format int64
   */
  version?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 商家ID，可选筛选
   * @format int64
   */
  merchant_id?: number;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsListRes {
  /** @format []*entity.MerchantBankAccounts */
  list?: GfEshopInternalModelEntityMerchantBankAccounts[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchantBankAccounts {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 开户行
   * @format string
   */
  bank_name?: string;
  /**
   * 开户支行
   * @format string
   */
  bank_branch?: string;
  /**
   * 开户名
   * @format string
   */
  account_name?: string;
  /**
   * 银行账号
   * @format string
   */
  account_no?: string;
  /**
   * 1-对公账户 2-对私账户
   * @format int
   */
  account_type?: number;
  /**
   * 是否默认结算账户（NULL=非默认, 1=默认）
   * @format int
   */
  is_default?: number;
  /**
   * 1-正常 2-禁用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsCreateReq {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id: number;
  /**
   * 开户行
   * @format string
   */
  bank_name: string;
  /**
   * 开户支行
   * @format string
   */
  bank_branch?: string;
  /**
   * 开户名
   * @format string
   */
  account_name: string;
  /**
   * 银行账号
   * @format string
   */
  account_no: string;
  /**
   * 1-对公账户 2-对私账户
   * @format int
   */
  account_type?: number;
  /**
   * 是否默认结算账户 0-否 1-是
   * @format int
   */
  is_default?: number;
  /**
   * 1-正常 2-禁用
   * @format int
   */
  status?: number;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDeleteRes =
  object;

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 开户行
   * @format string
   */
  bank_name?: string;
  /**
   * 开户支行
   * @format string
   */
  bank_branch?: string;
  /**
   * 开户名
   * @format string
   */
  account_name?: string;
  /**
   * 银行账号
   * @format string
   */
  account_no?: string;
  /**
   * 1-对公账户 2-对私账户
   * @format int
   */
  account_type?: number;
  /**
   * 是否默认结算账户（NULL=非默认, 1=默认）
   * @format int
   */
  is_default?: number;
  /**
   * 1-正常 2-禁用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantBankAccountsV1MerchantBankAccountsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 开户行
   * @format string
   */
  bank_name?: string;
  /**
   * 开户支行
   * @format string
   */
  bank_branch?: string;
  /**
   * 开户名
   * @format string
   */
  account_name?: string;
  /**
   * 银行账号
   * @format string
   */
  account_no?: string;
  /**
   * 1-对公账户 2-对私账户
   * @format int
   */
  account_type?: number;
  /**
   * 是否默认结算账户 0-否 1-是
   * @format int
   */
  is_default?: number;
  /**
   * 1-正常 2-禁用
   * @format int
   */
  status?: number;
}

export type GfEshopApiMerchantBankAccountsV1MerchantBankAccountsUpdateRes =
  object;

export interface GfEshopApiMerchantContactsV1MerchantContactsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 商家ID，可选筛选
   * @format int64
   */
  merchant_id?: number;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsListRes {
  /** @format []*entity.MerchantContacts */
  list?: GfEshopInternalModelEntityMerchantContacts[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchantContacts {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 联系人姓名
   * @format string
   */
  contact_name?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系人角色：finance-财务 legal-法人 operation-运营
   * @format string
   */
  contact_role?: string;
  /**
   * 是否主要联系人 0-否 1-是
   * @format int
   */
  is_primary?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsCreateReq {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id: number;
  /**
   * 联系人姓名
   * @format string
   */
  contact_name: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone: string;
  /**
   * 联系人角色：finance-财务 legal-法人 operation-运营
   * @format string
   */
  contact_role?: string;
  /**
   * 是否主要联系人 0-否 1-是
   * @format int
   */
  is_primary?: number;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantContactsV1MerchantContactsDeleteRes = object;

export interface GfEshopApiMerchantContactsV1MerchantContactsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 联系人姓名
   * @format string
   */
  contact_name?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系人角色：finance-财务 legal-法人 operation-运营
   * @format string
   */
  contact_role?: string;
  /**
   * 是否主要联系人 0-否 1-是
   * @format int
   */
  is_primary?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantContactsV1MerchantContactsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 联系人姓名
   * @format string
   */
  contact_name?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系人角色：finance-财务 legal-法人 operation-运营
   * @format string
   */
  contact_role?: string;
  /**
   * 是否主要联系人 0-否 1-是
   * @format int
   */
  is_primary?: number;
}

export type GfEshopApiMerchantContactsV1MerchantContactsUpdateRes = object;

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 商家ID（可选）
   * @format int
   */
  merchant_id?: number;
  /**
   * 状态（可选）
   * @format int
   */
  status?: number;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsListRes {
  /** @format []*entity.MerchantQualifications */
  list?: GfEshopInternalModelEntityMerchantQualifications[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchantQualifications {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 资质类型：business_license-营业执照 food-食品经营许可 brand_authorization-品牌授权
   * @format string
   */
  qualification_type?: string;
  /**
   * 资质名称
   * @format string
   */
  qualification_name?: string;
  /**
   * 资质文件URL
   * @format string
   */
  file_url?: string;
  /**
   * 有效期
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 0-待审核 1-审核通过 2-已过期 3-审核拒绝
   * @format int
   */
  status?: number;
  /**
   * 审核备注
   * @format string
   */
  audit_remark?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsCreateReq {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id: number;
  /**
   * 资质类型
   * @format string
   */
  qualification_type: string;
  /**
   * 资质名称
   * @format string
   */
  qualification_name: string;
  /**
   * 资质文件URL
   * @format string
   */
  file_url: string;
  /**
   * 有效期
   * @format *gtime.Time
   */
  expire_at?: string;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantQualificationsV1MerchantQualificationsDeleteRes =
  object;

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 资质类型：business_license-营业执照 food-食品经营许可 brand_authorization-品牌授权
   * @format string
   */
  qualification_type?: string;
  /**
   * 资质名称
   * @format string
   */
  qualification_name?: string;
  /**
   * 资质文件URL
   * @format string
   */
  file_url?: string;
  /**
   * 有效期
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 0-待审核 1-审核通过 2-已过期 3-审核拒绝
   * @format int
   */
  status?: number;
  /**
   * 审核备注
   * @format string
   */
  audit_remark?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 资质名称
   * @format string
   */
  qualification_name?: string;
  /**
   * 资质文件URL
   * @format string
   */
  file_url?: string;
  /**
   * 有效期
   * @format *gtime.Time
   */
  expire_at?: string;
}

export type GfEshopApiMerchantQualificationsV1MerchantQualificationsUpdateRes =
  object;

export interface GfEshopApiMerchantQualificationsV1MerchantQualificationsAuditReq {
  /** @format int64 */
  id: number;
  /**
   * 1-审核通过 3-审核拒绝
   * @format int
   */
  status: GfEshopApiMerchantQualificationsV1MerchantQualificationsAuditReqStatusEnum;
  /**
   * 审核备注
   * @format string
   */
  audit_remark?: string;
}

export type GfEshopApiMerchantQualificationsV1MerchantQualificationsAuditRes =
  object;

export interface GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsListReq {
  /**
   * 角色ID
   * @format int64
   */
  role_id: number;
}

export interface GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsListRes {
  /** @format []*entity.MerchantRolePermissions */
  list?: GfEshopInternalModelEntityMerchantRolePermissions[];
}

export interface GfEshopInternalModelEntityMerchantRolePermissions {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 角色ID（关联 mch_merchant_roles.id）
   * @format int64
   */
  role_id?: number;
  /**
   * 权限标识（对应 sys_permissions.name）
   * @format string
   */
  permission_name?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsCreateReq {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id: number;
  /**
   * 角色ID
   * @format int64
   */
  role_id: number;
  /**
   * 权限标识
   * @format string
   */
  permission_name: string;
}

export type GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsCreateRes =
  object;

export interface GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsDeleteRes =
  object;

export interface GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsUpdateReq {
  /**
   * 角色ID
   * @format int64
   */
  role_id: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 权限标识列表
   * @format []string
   */
  permission_names?: string[];
}

export type GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsUpdateRes =
  object;

export interface GfEshopApiMerchantRolesV1MerchantRolesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 商家ID，可选筛选
   * @format int64
   */
  merchant_id?: number;
  /**
   * 按角色名称模糊搜索
   * @format string
   */
  name?: string;
  /**
   * 按状态筛选
   * @format *int
   */
  status?: number;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesListRes {
  /** @format []*entity.MerchantRoles */
  list?: GfEshopInternalModelEntityMerchantRoles[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchantRoles {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID（0=平台预置角色）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 角色名称（如店长/运营/财务）
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统预置 custom-商家自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesCreateReq {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id: number;
  /**
   * 角色名称标识
   * @format string
   */
  name: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统预置 custom-商家自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantRolesV1MerchantRolesDeleteRes = object;

export interface GfEshopApiMerchantRolesV1MerchantRolesDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID（0=平台预置角色）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 角色名称（如店长/运营/财务）
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统预置 custom-商家自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiMerchantRolesV1MerchantRolesUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 角色名称标识
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统预置 custom-商家自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export type GfEshopApiMerchantRolesV1MerchantRolesUpdateRes = object;

export interface GfEshopApiMerchantWithdrawalsV1ListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  merchant_id?: number;
  /** @format int */
  status?: number;
}

export interface GfEshopApiMerchantWithdrawalsV1ListRes {
  /** @format []*entity.MerchantWithdrawals */
  list?: GfEshopInternalModelEntityMerchantWithdrawals[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchantWithdrawals {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 提现单号
   * @format string
   */
  withdraw_no?: string;
  /**
   * 提现金额（分）
   * @format int64
   */
  amount?: number;
  /**
   * 结算账户ID
   * @format int64
   */
  bank_account_id?: number;
  /**
   * 0-待审核 1-审核通过 2-已打款 3-拒绝
   * @format int
   */
  status?: number;
  /**
   * 审批备注
   * @format string
   */
  audit_remark?: string;
  /**
   * 申请时间
   * @format *gtime.Time
   */
  applied_at?: string;
  /**
   * 审批时间
   * @format *gtime.Time
   */
  approved_at?: string;
  /**
   * 打款时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantWithdrawalsV1ApplyReq {
  /** @format int64 */
  merchant_id: number;
  /** @format int64 */
  amount: number;
  /** @format int64 */
  bank_account_id: number;
}

export interface GfEshopApiMerchantWithdrawalsV1ApplyRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantWithdrawalsV1DetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantWithdrawalsV1DetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 提现单号
   * @format string
   */
  withdraw_no?: string;
  /**
   * 提现金额（分）
   * @format int64
   */
  amount?: number;
  /**
   * 结算账户ID
   * @format int64
   */
  bank_account_id?: number;
  /**
   * 0-待审核 1-审核通过 2-已打款 3-拒绝
   * @format int
   */
  status?: number;
  /**
   * 审批备注
   * @format string
   */
  audit_remark?: string;
  /**
   * 申请时间
   * @format *gtime.Time
   */
  applied_at?: string;
  /**
   * 审批时间
   * @format *gtime.Time
   */
  approved_at?: string;
  /**
   * 打款时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantWithdrawalsV1ApproveReq {
  /** @format int64 */
  id: number;
}

export type GfEshopApiMerchantWithdrawalsV1ApproveRes = object;

export interface GfEshopApiMerchantWithdrawalsV1RejectReq {
  /** @format int64 */
  id: number;
  /** @format string */
  audit_remark?: string;
}

export type GfEshopApiMerchantWithdrawalsV1RejectRes = object;

export interface GfEshopApiMerchantsV1MerchantsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
}

export interface GfEshopApiMerchantsV1MerchantsListRes {
  /** @format []*entity.Merchants */
  list?: GfEshopInternalModelEntityMerchants[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityMerchants {
  /**
   * 商家ID
   * @format int64
   */
  id?: number;
  /**
   * 商家名称（店铺名）
   * @format string
   */
  merchant_name?: string;
  /**
   * 商家编码（系统生成，唯一）
   * @format string
   */
  merchant_code?: string;
  /**
   * 1-个人商家 2-企业商家 3-品牌直营
   * @format int
   */
  merchant_type?: number;
  /**
   * 商家等级 1-普通 2-银牌 3-金牌 4-钻石（影响佣金率/权限）
   * @format int
   */
  merchant_level?: number;
  /**
   * 经营范围
   * @format string
   */
  business_scope?: string;
  /**
   * 经营年限（入驻年限）
   * @format int
   */
  business_years?: number;
  /**
   * 主要联系人
   * @format string
   */
  contact_person?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系邮箱
   * @format string
   */
  contact_email?: string;
  /**
   * 店铺Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 店铺Banner图
   * @format string
   */
  banner_url?: string;
  /**
   * 店铺简介
   * @format string
   */
  shop_description?: string;
  /**
   * 0-待审核 1-正常 2-冻结 3-已注销
   * @format int
   */
  status?: number;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝
   * @format int
   */
  audit_status?: number;
  /**
   * 审核拒绝原因
   * @format string
   */
  audit_reason?: string;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 冻结原因
   * @format string
   */
  frozen_reason?: string;
  /**
   * 平台抽佣比例（千分比，如 50 表示5%）
   * @format int64
   */
  commission_rate?: number;
  /**
   * 结算周期 1-T+1 2-T+7 3-月结
   * @format int
   */
  settlement_cycle?: number;
  /**
   * 历史总订单数
   * @format int
   */
  total_orders?: number;
  /**
   * 历史总销售额（分）
   * @format int64
   */
  total_sales?: number;
  /**
   * 店铺平均评分
   * @format float64
   */
  avg_rating?: number;
  /**
   * 在售商品数量
   * @format int
   */
  product_count?: number;
  /**
   * 入驻时间
   * @format *gtime.Time
   */
  settled_at?: string;
  /**
   * 合同到期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 创建人
   * @format int64
   */
  created_by?: number;
  /**
   * 更新人
   * @format int64
   */
  updated_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantsV1MerchantsCreateReq {
  /**
   * 商家名称
   * @format string
   */
  merchant_name: string;
  /**
   * 1-个人商家 2-企业商家 3-品牌直营
   * @format int
   */
  merchant_type?: number;
  /**
   * 商家等级 1-普通 2-银牌 3-金牌 4-钻石
   * @format int
   */
  merchant_level?: number;
  /**
   * 经营范围
   * @format string
   */
  business_scope?: string;
  /**
   * 经营年限
   * @format int
   */
  business_years?: number;
  /**
   * 主要联系人
   * @format string
   */
  contact_person?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系邮箱
   * @format string
   */
  contact_email?: string;
  /**
   * 店铺Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 店铺Banner图
   * @format string
   */
  banner_url?: string;
  /**
   * 店铺简介
   * @format string
   */
  shop_description?: string;
  /**
   * 0-待审核 1-正常 2-冻结 3-已注销
   * @format int
   */
  status?: number;
  /**
   * 平台抽佣比例（千分比）
   * @format int64
   */
  commission_rate?: number;
  /**
   * 结算周期 1-T+1 2-T+7 3-月结
   * @format int
   */
  settlement_cycle?: number;
  /**
   * 入驻时间
   * @format *gtime.Time
   */
  settled_at?: string;
  /**
   * 合同到期时间
   * @format *gtime.Time
   */
  expire_at?: string;
}

export interface GfEshopApiMerchantsV1MerchantsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantsV1MerchantsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMerchantsV1MerchantsDeleteRes = object;

export interface GfEshopApiMerchantsV1MerchantsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMerchantsV1MerchantsDetailRes {
  /**
   * 商家ID
   * @format int64
   */
  id?: number;
  /**
   * 商家名称（店铺名）
   * @format string
   */
  merchant_name?: string;
  /**
   * 商家编码（系统生成，唯一）
   * @format string
   */
  merchant_code?: string;
  /**
   * 1-个人商家 2-企业商家 3-品牌直营
   * @format int
   */
  merchant_type?: number;
  /**
   * 商家等级 1-普通 2-银牌 3-金牌 4-钻石（影响佣金率/权限）
   * @format int
   */
  merchant_level?: number;
  /**
   * 经营范围
   * @format string
   */
  business_scope?: string;
  /**
   * 经营年限（入驻年限）
   * @format int
   */
  business_years?: number;
  /**
   * 主要联系人
   * @format string
   */
  contact_person?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系邮箱
   * @format string
   */
  contact_email?: string;
  /**
   * 店铺Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 店铺Banner图
   * @format string
   */
  banner_url?: string;
  /**
   * 店铺简介
   * @format string
   */
  shop_description?: string;
  /**
   * 0-待审核 1-正常 2-冻结 3-已注销
   * @format int
   */
  status?: number;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝
   * @format int
   */
  audit_status?: number;
  /**
   * 审核拒绝原因
   * @format string
   */
  audit_reason?: string;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 冻结原因
   * @format string
   */
  frozen_reason?: string;
  /**
   * 平台抽佣比例（千分比，如 50 表示5%）
   * @format int64
   */
  commission_rate?: number;
  /**
   * 结算周期 1-T+1 2-T+7 3-月结
   * @format int
   */
  settlement_cycle?: number;
  /**
   * 历史总订单数
   * @format int
   */
  total_orders?: number;
  /**
   * 历史总销售额（分）
   * @format int64
   */
  total_sales?: number;
  /**
   * 店铺平均评分
   * @format float64
   */
  avg_rating?: number;
  /**
   * 在售商品数量
   * @format int
   */
  product_count?: number;
  /**
   * 入驻时间
   * @format *gtime.Time
   */
  settled_at?: string;
  /**
   * 合同到期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 创建人
   * @format int64
   */
  created_by?: number;
  /**
   * 更新人
   * @format int64
   */
  updated_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMerchantsV1MerchantsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 商家名称
   * @format string
   */
  merchant_name?: string;
  /**
   * 1-个人商家 2-企业商家 3-品牌直营
   * @format int
   */
  merchant_type?: number;
  /**
   * 商家等级 1-普通 2-银牌 3-金牌 4-钻石
   * @format int
   */
  merchant_level?: number;
  /**
   * 经营范围
   * @format string
   */
  business_scope?: string;
  /**
   * 经营年限
   * @format int
   */
  business_years?: number;
  /**
   * 主要联系人
   * @format string
   */
  contact_person?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系邮箱
   * @format string
   */
  contact_email?: string;
  /**
   * 店铺Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 店铺Banner图
   * @format string
   */
  banner_url?: string;
  /**
   * 店铺简介
   * @format string
   */
  shop_description?: string;
  /**
   * 0-待审核 1-正常 2-冻结 3-已注销
   * @format int
   */
  status?: number;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝
   * @format int
   */
  audit_status?: number;
  /**
   * 审核拒绝原因
   * @format string
   */
  audit_reason?: string;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 冻结原因
   * @format string
   */
  frozen_reason?: string;
  /**
   * 平台抽佣比例（千分比）
   * @format int64
   */
  commission_rate?: number;
  /**
   * 结算周期 1-T+1 2-T+7 3-月结
   * @format int
   */
  settlement_cycle?: number;
  /**
   * 合同到期时间
   * @format *gtime.Time
   */
  expire_at?: string;
}

export type GfEshopApiMerchantsV1MerchantsUpdateRes = object;

export interface GfEshopApiNotificationV1NotificationListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  title?: string;
  /** @format *int */
  category?: number;
  /** @format *bool */
  is_read?: boolean;
}

export interface GfEshopApiNotificationV1NotificationListRes {
  /** @format []*v1.NotificationListItem */
  list?: GfEshopApiNotificationV1NotificationListItem[];
  /** @format int */
  total?: number;
}

export interface GfEshopApiNotificationV1NotificationListItem {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  user_id?: number;
  /** @format string */
  title?: string;
  /** @format string */
  content?: string;
  /** @format int */
  channel?: number;
  /** @format int */
  category?: number;
  /** @format string */
  target_type?: string;
  /** @format int64 */
  target_id?: number;
  /** @format string */
  redirect_url?: string;
  /** @format string */
  icon_url?: string;
  /** @format int */
  priority?: number;
  /** @format bool */
  is_read?: boolean;
  /** @format int64 */
  created_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
}

export type GfEshopApiNotificationV1NotificationMarkAllAsReadReq = object;

export type GfEshopApiNotificationV1NotificationMarkAllAsReadRes = object;

export interface GfEshopApiNotificationV1NotificationSendSystemReq {
  /**
   * 0=全体用户
   * @format int64
   */
  user_id: number;
  /**
   * 模板代码（优先级高于 title/content）
   * @format string
   */
  template_code?: string;
  /**
   * 通知标题
   * @format string
   */
  title?: string;
  /**
   * 通知内容
   * @format string
   */
  content?: string;
}

export interface GfEshopApiNotificationV1NotificationSendSystemRes {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiNotificationV1NotificationListTemplatesReq = object;

export interface GfEshopApiNotificationV1NotificationListTemplatesRes {
  /** @format []*v1.NotificationListTemplatesItem */
  list?: GfEshopApiNotificationV1NotificationListTemplatesItem[];
}

export interface GfEshopApiNotificationV1NotificationListTemplatesItem {
  /** @format int64 */
  id?: number;
  /** @format string */
  template_code?: string;
  /** @format int */
  channel?: number;
  /** @format string */
  title_template?: string;
  /** @format string */
  content_template?: string;
  /** @format int */
  category?: number;
  /** @format int */
  priority?: number;
  /** @format int */
  status?: number;
}

export type GfEshopApiNotificationV1NotificationUnreadCountReq = object;

export interface GfEshopApiNotificationV1NotificationUnreadCountRes {
  /** @format int64 */
  count?: number;
}

export interface GfEshopApiNotificationV1NotificationDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiNotificationV1NotificationDeleteRes = object;

export interface GfEshopApiNotificationV1NotificationMarkAsReadReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiNotificationV1NotificationMarkAsReadRes = object;

export interface GfEshopApiOrdersV1OrdersListReq {
  /**
   * 页码
   * @format int
   */
  page?: number;
  /**
   * 每页条数
   * @format int
   */
  page_size?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 订单状态
   * @format string
   */
  status?: string;
  /**
   * 支付状态
   * @format string
   */
  payment_status?: string;
  /**
   * 订单号
   * @format string
   */
  order_no?: string;
}

export interface GfEshopApiOrdersV1OrdersListRes {
  /** @format []*entity.Orders */
  list?: GfEshopInternalModelEntityOrders[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityOrders {
  /**
   * 自增主键
   * @format int64
   */
  id?: number;
  /**
   * 父订单号（业务唯一键，如 202612010001）
   * @format string
   */
  order_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 商品总金额（分）
   * @format int64
   */
  total_amount?: number;
  /**
   * 优惠金额（分，含优惠券/满减）
   * @format int64
   */
  discount_amount?: number;
  /**
   * 运费（分）
   * @format int64
   */
  shipping_fee?: number;
  /**
   * 实付金额（分 = total - discount + shipping）
   * @format int64
   */
  pay_amount?: number;
  /**
   * 父订单状态：pending-待支付 paid-已支付 partial_shipped-部分发货 completed-已完成 cancelled-已取消 closed-已关闭 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 支付状态：unpaid-未支付 paying-支付中 paid-已支付 refunding-退款中 refunded-已退款
   * @format string
   */
  payment_status?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 收货人
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail_addr?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 使用的优惠券ID
   * @format int64
   */
  coupon_id?: number;
  /**
   * 优惠券快照（名称/面值等，便于售后追溯）
   * @format string
   */
  coupon_snapshot?: string;
  /**
   * 买家备注
   * @format string
   */
  buyer_remark?: string;
  /**
   * 卖家备注
   * @format string
   */
  seller_remark?: string;
  /**
   * 订单来源：pc-电脑端 app-APP miniapp-小程序 h5-H5
   * @format string
   */
  source?: string;
  /**
   * 支付时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 发货时间
   * @format *gtime.Time
   */
  shipped_at?: string;
  /**
   * 签收时间
   * @format *gtime.Time
   */
  delivered_at?: string;
  /**
   * 完成时间
   * @format *gtime.Time
   */
  completed_at?: string;
  /**
   * 关闭时间
   * @format *gtime.Time
   */
  closed_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiOrdersV1OrdersCreateReq {
  /**
   * 用户ID（留空则从登录上下文获取）
   * @format int64
   */
  user_id?: number;
  /**
   * 商品列表
   * @format []v1.CreateOrderItem
   */
  items: GfEshopApiOrdersV1CreateOrderItem[];
  /**
   * 优惠券ID
   * @format *int64
   */
  coupon_id?: number;
  /**
   * 买家备注
   * @format string
   */
  buyer_remark?: string;
  /**
   * 来源
   * @format string
   */
  source?: string;
  /**
   * 收货人
   * @format string
   */
  consignee: string;
  /**
   * 手机号
   * @format string
   */
  phone: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail_addr?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
}

export interface GfEshopApiOrdersV1CreateOrderItem {
  /**
   * SKU ID
   * @format int64
   */
  sku_id: number;
  /**
   * 数量
   * @format int
   */
  quantity: number;
}

export interface GfEshopApiOrdersV1OrdersCreateRes {
  /**
   * 自增主键
   * @format int64
   */
  id?: number;
  /**
   * 父订单号（业务唯一键，如 202612010001）
   * @format string
   */
  order_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 商品总金额（分）
   * @format int64
   */
  total_amount?: number;
  /**
   * 优惠金额（分，含优惠券/满减）
   * @format int64
   */
  discount_amount?: number;
  /**
   * 运费（分）
   * @format int64
   */
  shipping_fee?: number;
  /**
   * 实付金额（分 = total - discount + shipping）
   * @format int64
   */
  pay_amount?: number;
  /**
   * 父订单状态：pending-待支付 paid-已支付 partial_shipped-部分发货 completed-已完成 cancelled-已取消 closed-已关闭 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 支付状态：unpaid-未支付 paying-支付中 paid-已支付 refunding-退款中 refunded-已退款
   * @format string
   */
  payment_status?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 收货人
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail_addr?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 使用的优惠券ID
   * @format int64
   */
  coupon_id?: number;
  /**
   * 优惠券快照（名称/面值等，便于售后追溯）
   * @format string
   */
  coupon_snapshot?: string;
  /**
   * 买家备注
   * @format string
   */
  buyer_remark?: string;
  /**
   * 卖家备注
   * @format string
   */
  seller_remark?: string;
  /**
   * 订单来源：pc-电脑端 app-APP miniapp-小程序 h5-H5
   * @format string
   */
  source?: string;
  /**
   * 支付时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 发货时间
   * @format *gtime.Time
   */
  shipped_at?: string;
  /**
   * 签收时间
   * @format *gtime.Time
   */
  delivered_at?: string;
  /**
   * 完成时间
   * @format *gtime.Time
   */
  completed_at?: string;
  /**
   * 关闭时间
   * @format *gtime.Time
   */
  closed_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiOrdersV1OrdersDetailReq {
  /** @format string */
  order_no?: string;
}

export interface GfEshopApiOrdersV1OrdersDetailRes {
  order?: GfEshopInternalModelEntityOrders;
  /** @format []*entity.SubOrders */
  sub_orders?: GfEshopInternalModelEntitySubOrders[];
  /** @format []*entity.OrderItems */
  items?: GfEshopInternalModelEntityOrderItems[];
}

export interface GfEshopInternalModelEntitySubOrders {
  /**
   * 子订单ID
   * @format int64
   */
  id?: number;
  /**
   * 子订单号（按商家拆单后的业务唯一键）
   * @format string
   */
  sub_order_no?: string;
  /**
   * 父订单ID
   * @format int64
   */
  parent_order_id?: number;
  /**
   * 父订单号（冗余，便于查询）
   * @format string
   */
  parent_order_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商品总金额（分）
   * @format int64
   */
  total_amount?: number;
  /**
   * 优惠金额（分）
   * @format int64
   */
  discount_amount?: number;
  /**
   * 运费（分）
   * @format int64
   */
  shipping_fee?: number;
  /**
   * 子订单实付金额（分）
   * @format int64
   */
  pay_amount?: number;
  /**
   * 子订单状态：pending-待支付 paid-已支付 shipped-已发货 delivered-已签收 completed-已完成 cancelled-已取消 closed-已关闭 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 退款状态：none-无 partial_refunded-部分退款 refunded-已退款
   * @format string
   */
  refund_status?: string;
  /**
   * 卖家备注
   * @format string
   */
  seller_remark?: string;
  /**
   * 支付时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 发货时间
   * @format *gtime.Time
   */
  shipped_at?: string;
  /**
   * 签收时间
   * @format *gtime.Time
   */
  delivered_at?: string;
  /**
   * 完成时间
   * @format *gtime.Time
   */
  completed_at?: string;
  /**
   * 关闭时间
   * @format *gtime.Time
   */
  closed_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopInternalModelEntityOrderItems {
  /**
   * 订单项ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 子订单ID
   * @format int64
   */
  sub_order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 订单号（冗余，方便按订单号查）
   * @format string
   */
  order_no?: string;
  /**
   * 子订单号（冗余，方便按商家订单查）
   * @format string
   */
  sub_order_no?: string;
  /**
   * 关联 skus.id(sp_skus)
   * @format int64
   */
  sku_id?: number;
  /**
   * 关联 products.id(sp_products)
   * @format int64
   */
  product_id?: number;
  /**
   * 商家编码（冗余快照）
   * @format string
   */
  sku_code?: string;
  /**
   * 商品名（冗余快照）
   * @format string
   */
  product_name?: string;
  /**
   * 规格摘要（如：红色 / 256G）
   * @format string
   */
  sku_spec_summary?: string;
  /**
   * 规格JSON快照
   * @format string
   */
  sku_spec?: string;
  /**
   * 商品图（冗余快照）
   * @format string
   */
  image?: string;
  /**
   * 单价（分，下单时价格）
   * @format int64
   */
  price?: number;
  /**
   * 购买数量
   * @format int
   */
  quantity?: number;
  /**
   * 小计（分 = price * quantity）
   * @format int64
   */
  subtotal?: number;
  /**
   * 退款状态：none-无 refunding-退款中 refunded-已退款
   * @format string
   */
  refund_status?: string;
  /**
   * 已退款金额（分）
   * @format int64
   */
  refund_amount?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiOrdersV1OrdersUpdateStatusReq {
  /** @format string */
  order_no?: string;
  /**
   * 目标状态
   * @format string
   */
  status: GfEshopApiOrdersV1OrdersUpdateStatusReqStatusEnum;
  /**
   * 备注
   * @format string
   */
  note?: string;
}

export interface GfEshopApiOrdersV1OrdersUpdateStatusRes {
  /**
   * 自增主键
   * @format int64
   */
  id?: number;
  /**
   * 父订单号（业务唯一键，如 202612010001）
   * @format string
   */
  order_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 商品总金额（分）
   * @format int64
   */
  total_amount?: number;
  /**
   * 优惠金额（分，含优惠券/满减）
   * @format int64
   */
  discount_amount?: number;
  /**
   * 运费（分）
   * @format int64
   */
  shipping_fee?: number;
  /**
   * 实付金额（分 = total - discount + shipping）
   * @format int64
   */
  pay_amount?: number;
  /**
   * 父订单状态：pending-待支付 paid-已支付 partial_shipped-部分发货 completed-已完成 cancelled-已取消 closed-已关闭 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 支付状态：unpaid-未支付 paying-支付中 paid-已支付 refunding-退款中 refunded-已退款
   * @format string
   */
  payment_status?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 收货人
   * @format string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format string
   */
  phone?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  detail_addr?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 使用的优惠券ID
   * @format int64
   */
  coupon_id?: number;
  /**
   * 优惠券快照（名称/面值等，便于售后追溯）
   * @format string
   */
  coupon_snapshot?: string;
  /**
   * 买家备注
   * @format string
   */
  buyer_remark?: string;
  /**
   * 卖家备注
   * @format string
   */
  seller_remark?: string;
  /**
   * 订单来源：pc-电脑端 app-APP miniapp-小程序 h5-H5
   * @format string
   */
  source?: string;
  /**
   * 支付时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 发货时间
   * @format *gtime.Time
   */
  shipped_at?: string;
  /**
   * 签收时间
   * @format *gtime.Time
   */
  delivered_at?: string;
  /**
   * 完成时间
   * @format *gtime.Time
   */
  completed_at?: string;
  /**
   * 关闭时间
   * @format *gtime.Time
   */
  closed_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1PaymentsGetReq {
  /**
   * 支付单号
   * @format string
   */
  payment_no?: string;
  /**
   * 订单号
   * @format string
   */
  order_no?: string;
}

export interface GfEshopApiPaymentsV1PaymentsGetRes {
  /**
   * 支付单ID
   * @format int64
   */
  id?: number;
  /**
   * 支付单号（业务唯一键）
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 订单类型：order-普通订单 flash-秒杀订单
   * @format string
   */
  order_type?: string;
  /**
   * 支付金额（分）
   * @format int64
   */
  amount?: number;
  /** @format string */
  currency?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 支付渠道（如 wechat_native-微信 native alipay_page-支付宝页面）
   * @format string
   */
  channel?: string;
  /**
   * 交易类型：native-jsapi-app-h5-page
   * @format string
   */
  trade_type?: string;
  /**
   * 支付渠道交易号（微信/支付宝订单号，用于对账）
   * @format string
   */
  transaction_id?: string;
  /**
   * 支付创建幂等键（防重复提交）
   * @format string
   */
  idempotency_key?: string;
  /**
   * 支付状态：pending-待支付 processing-处理中 success-已支付 failed-支付失败 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 客户端IP
   * @format string
   */
  client_ip?: string;
  /**
   * 支付过期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 支付成功时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 最近一次渠道回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /**
   * 渠道最近一次响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1PaymentsCreateReq {
  /**
   * 订单号
   * @format string
   */
  order_no: string;
  /**
   * 支付金额
   * @format int64
   */
  amount: number;
  /**
   * 支付方式
   * @format string
   */
  payment_method: string;
  /**
   * 支付渠道
   * @format string
   */
  channel?: string;
}

export interface GfEshopApiPaymentsV1PaymentsCreateRes {
  /**
   * 支付单ID
   * @format int64
   */
  id?: number;
  /**
   * 支付单号（业务唯一键）
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 订单类型：order-普通订单 flash-秒杀订单
   * @format string
   */
  order_type?: string;
  /**
   * 支付金额（分）
   * @format int64
   */
  amount?: number;
  /** @format string */
  currency?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 支付渠道（如 wechat_native-微信 native alipay_page-支付宝页面）
   * @format string
   */
  channel?: string;
  /**
   * 交易类型：native-jsapi-app-h5-page
   * @format string
   */
  trade_type?: string;
  /**
   * 支付渠道交易号（微信/支付宝订单号，用于对账）
   * @format string
   */
  transaction_id?: string;
  /**
   * 支付创建幂等键（防重复提交）
   * @format string
   */
  idempotency_key?: string;
  /**
   * 支付状态：pending-待支付 processing-处理中 success-已支付 failed-支付失败 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 客户端IP
   * @format string
   */
  client_ip?: string;
  /**
   * 支付过期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 支付成功时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 最近一次渠道回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /**
   * 渠道最近一次响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1PaymentsCallbackReq {
  /**
   * 支付单号
   * @format string
   */
  payment_no: string;
  /**
   * 渠道交易ID
   * @format string
   */
  transaction_id: string;
  /**
   * 渠道
   * @format string
   */
  channel?: string;
  /**
   * 状态
   * @format string
   */
  status: GfEshopApiPaymentsV1PaymentsCallbackReqStatusEnum;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 原始回调数据
   * @format string
   */
  raw_body?: string;
}

export interface GfEshopApiPaymentsV1PaymentsCallbackRes {
  /**
   * 支付单ID
   * @format int64
   */
  id?: number;
  /**
   * 支付单号（业务唯一键）
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 订单类型：order-普通订单 flash-秒杀订单
   * @format string
   */
  order_type?: string;
  /**
   * 支付金额（分）
   * @format int64
   */
  amount?: number;
  /** @format string */
  currency?: string;
  /**
   * 支付方式：wechat-微信 alipay-支付宝 wallet-余额
   * @format string
   */
  payment_method?: string;
  /**
   * 支付渠道（如 wechat_native-微信 native alipay_page-支付宝页面）
   * @format string
   */
  channel?: string;
  /**
   * 交易类型：native-jsapi-app-h5-page
   * @format string
   */
  trade_type?: string;
  /**
   * 支付渠道交易号（微信/支付宝订单号，用于对账）
   * @format string
   */
  transaction_id?: string;
  /**
   * 支付创建幂等键（防重复提交）
   * @format string
   */
  idempotency_key?: string;
  /**
   * 支付状态：pending-待支付 processing-处理中 success-已支付 failed-支付失败 refunding-退款中 refunded-已退款
   * @format string
   */
  status?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 客户端IP
   * @format string
   */
  client_ip?: string;
  /**
   * 支付过期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 支付成功时间
   * @format *gtime.Time
   */
  paid_at?: string;
  /**
   * 最近一次渠道回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /**
   * 渠道最近一次响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1RefundsListReq {
  /**
   * 页码
   * @format int
   */
  page?: number;
  /**
   * 每页条数
   * @format int
   */
  page_size?: number;
  /**
   * 支付单号
   * @format string
   */
  payment_no?: string;
  /**
   * 订单号
   * @format string
   */
  order_no?: string;
  /**
   * 退款单号
   * @format string
   */
  refund_no?: string;
  /**
   * 退款状态
   * @format string
   */
  status?: string;
}

export interface GfEshopApiPaymentsV1RefundsListRes {
  /** @format []*entity.Refunds */
  list?: GfEshopInternalModelEntityRefunds[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityRefunds {
  /**
   * 退款单ID
   * @format int64
   */
  id?: number;
  /**
   * 退款单号（业务唯一键）
   * @format string
   */
  refund_no?: string;
  /**
   * 关联 tx_payments.id
   * @format int64
   */
  payment_id?: number;
  /**
   * 关联支付单号
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 退款金额（分）
   * @format int64
   */
  amount?: number;
  /**
   * 退款原因
   * @format string
   */
  reason?: string;
  /**
   * 退款状态：pending-待处理 processing-处理中 success-已退款 failed-退款失败 rejected-已拒绝
   * @format string
   */
  status?: string;
  /**
   * 渠道退款交易号
   * @format string
   */
  channel_refund_id?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 渠道退款响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /**
   * 退款幂等键
   * @format string
   */
  idempotency_key?: string;
  /**
   * 申请时间
   * @format *gtime.Time
   */
  applied_at?: string;
  /**
   * 退款成功时间
   * @format *gtime.Time
   */
  success_at?: string;
  /**
   * 最近一次退款回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1RefundsCreateReq {
  /**
   * 支付单号
   * @format string
   */
  payment_no: string;
  /**
   * 退款金额
   * @format int64
   */
  amount: number;
  /**
   * 退款原因
   * @format string
   */
  reason?: string;
}

export interface GfEshopApiPaymentsV1RefundsCreateRes {
  /**
   * 退款单ID
   * @format int64
   */
  id?: number;
  /**
   * 退款单号（业务唯一键）
   * @format string
   */
  refund_no?: string;
  /**
   * 关联 tx_payments.id
   * @format int64
   */
  payment_id?: number;
  /**
   * 关联支付单号
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 退款金额（分）
   * @format int64
   */
  amount?: number;
  /**
   * 退款原因
   * @format string
   */
  reason?: string;
  /**
   * 退款状态：pending-待处理 processing-处理中 success-已退款 failed-退款失败 rejected-已拒绝
   * @format string
   */
  status?: string;
  /**
   * 渠道退款交易号
   * @format string
   */
  channel_refund_id?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 渠道退款响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /**
   * 退款幂等键
   * @format string
   */
  idempotency_key?: string;
  /**
   * 申请时间
   * @format *gtime.Time
   */
  applied_at?: string;
  /**
   * 退款成功时间
   * @format *gtime.Time
   */
  success_at?: string;
  /**
   * 最近一次退款回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPaymentsV1RefundsDetailReq {
  /** @format string */
  refund_no?: string;
}

export interface GfEshopApiPaymentsV1RefundsDetailRes {
  /**
   * 退款单ID
   * @format int64
   */
  id?: number;
  /**
   * 退款单号（业务唯一键）
   * @format string
   */
  refund_no?: string;
  /**
   * 关联 tx_payments.id
   * @format int64
   */
  payment_id?: number;
  /**
   * 关联支付单号
   * @format string
   */
  payment_no?: string;
  /**
   * 关联订单号
   * @format string
   */
  order_no?: string;
  /**
   * 关联 tx_orders.id
   * @format int64
   */
  order_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 退款金额（分）
   * @format int64
   */
  amount?: number;
  /**
   * 退款原因
   * @format string
   */
  reason?: string;
  /**
   * 退款状态：pending-待处理 processing-处理中 success-已退款 failed-退款失败 rejected-已拒绝
   * @format string
   */
  status?: string;
  /**
   * 渠道退款交易号
   * @format string
   */
  channel_refund_id?: string;
  /**
   * 失败原因
   * @format string
   */
  failure_reason?: string;
  /**
   * 渠道退款响应/回调摘要
   * @format string
   */
  channel_response?: string;
  /**
   * 退款幂等键
   * @format string
   */
  idempotency_key?: string;
  /**
   * 申请时间
   * @format *gtime.Time
   */
  applied_at?: string;
  /**
   * 退款成功时间
   * @format *gtime.Time
   */
  success_at?: string;
  /**
   * 最近一次退款回调时间
   * @format *gtime.Time
   */
  notify_at?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiPermissionsV1PermissionListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  resource?: string;
  /** @format string */
  action?: string;
  /** @format string */
  category?: string;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiPermissionsV1PermissionListRes {
  /** @format []*entity.Permissions */
  list?: GfEshopInternalModelEntityPermissions[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityPermissions {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 权限标识（唯一，如 order:create）
   * @format string
   */
  name?: string;
  /**
   * 权限显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 权限描述
   * @format string
   */
  description?: string;
  /**
   * 资源（如 order/product/user）
   * @format string
   */
  resource?: string;
  /**
   * 操作（如 create/read/update/delete）
   * @format string
   */
  action?: string;
  /**
   * 父级ID（0=根节点，支持菜单/按钮树形层级）
   * @format int64
   */
  parent_id?: number;
  /**
   * 分类（如 business/system/admin）
   * @format string
   */
  category?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiPermissionsV1PermissionCreateReq {
  /**
   * 权限标识
   * @format string
   */
  name: string;
  /**
   * 显示名称
   * @format string
   */
  display_name: string;
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 资源
   * @format string
   */
  resource: string;
  /**
   * 操作
   * @format string
   */
  action: string;
  /**
   * 父级ID（0=根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 分类
   * @format string
   */
  category?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiPermissionsV1PermissionCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiPermissionsV1PermissionCheckReq {
  /**
   * 权限标识，如 order:create
   * @format string
   */
  permission: string;
}

export interface GfEshopApiPermissionsV1PermissionCheckRes {
  /** @format bool */
  has_permission?: boolean;
}

export interface GfEshopApiPermissionsV1RolePermissionListReq {
  /** @format int64 */
  role_id?: number;
}

export interface GfEshopApiPermissionsV1RolePermissionListRes {
  /** @format []*entity.Permissions */
  list?: GfEshopInternalModelEntityPermissions[];
}

export interface GfEshopApiPermissionsV1RolePermissionUpdateReq {
  /** @format int64 */
  role_id?: number;
  /** @format []int64 */
  permission_ids: number[];
}

export type GfEshopApiPermissionsV1RolePermissionUpdateRes = object;

export interface GfEshopApiPermissionsV1PermissionDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiPermissionsV1PermissionDeleteRes = object;

export interface GfEshopApiPermissionsV1PermissionDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiPermissionsV1PermissionDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 权限标识（唯一，如 order:create）
   * @format string
   */
  name?: string;
  /**
   * 权限显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 权限描述
   * @format string
   */
  description?: string;
  /**
   * 资源（如 order/product/user）
   * @format string
   */
  resource?: string;
  /**
   * 操作（如 create/read/update/delete）
   * @format string
   */
  action?: string;
  /**
   * 父级ID（0=根节点，支持菜单/按钮树形层级）
   * @format int64
   */
  parent_id?: number;
  /**
   * 分类（如 business/system/admin）
   * @format string
   */
  category?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiPermissionsV1PermissionUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 权限标识
   * @format string
   */
  name?: string;
  /**
   * 显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 资源
   * @format string
   */
  resource?: string;
  /**
   * 操作
   * @format string
   */
  action?: string;
  /**
   * 父级ID（0=根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 分类
   * @format string
   */
  category?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type GfEshopApiPermissionsV1PermissionUpdateRes = object;

export interface GfEshopApiPointsRulesV1PointsRulesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  rule_key?: string;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiPointsRulesV1PointsRulesListRes {
  /** @format []*entity.PointsRules */
  list?: GfEshopInternalModelEntityPointsRules[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityPointsRules {
  /** @format int */
  id?: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则键名：earn_rate-消费返积分比例 expire_days-积分过期天数 signin_points-签到奖励积分 review_points-评价奖励积分
   * @format string
   */
  rule_key?: string;
  /**
   * 整数值（如积分数量、天数）
   * @format int
   */
  value_int?: number;
  /**
   * 小数值（如比例、倍数）
   * @format float64
   */
  value_decimal?: number;
  /**
   * 字符串值（如配置json、文本）
   * @format string
   */
  value_string?: string;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态：0-禁用 1-启用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiPointsRulesV1PointsRulesCreateReq {
  /** @format string */
  name: string;
  /** @format string */
  rule_key: string;
  /**
   * 整数值（如积分数量、天数）
   * @format int
   */
  value_int?: number;
  /**
   * 小数值（如比例、倍数）
   * @format float64
   */
  value_decimal?: number;
  /**
   * 字符串值（如配置json、文本）
   * @format string
   */
  value_string?: string;
  /** @format string */
  description?: string;
  /** @format int */
  sort_order?: number;
  /** @format int */
  status?: number;
}

export interface GfEshopApiPointsRulesV1PointsRulesCreateRes {
  /** @format int */
  id?: number;
}

export interface GfEshopApiPointsRulesV1PointsRulesDeleteReq {
  /** @format int */
  id: number;
}

export type GfEshopApiPointsRulesV1PointsRulesDeleteRes = object;

export interface GfEshopApiPointsRulesV1PointsRulesDetailReq {
  /** @format int */
  id: number;
}

export interface GfEshopApiPointsRulesV1PointsRulesDetailRes {
  /** @format int */
  id?: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则键名：earn_rate-消费返积分比例 expire_days-积分过期天数 signin_points-签到奖励积分 review_points-评价奖励积分
   * @format string
   */
  rule_key?: string;
  /**
   * 整数值（如积分数量、天数）
   * @format int
   */
  value_int?: number;
  /**
   * 小数值（如比例、倍数）
   * @format float64
   */
  value_decimal?: number;
  /**
   * 字符串值（如配置json、文本）
   * @format string
   */
  value_string?: string;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态：0-禁用 1-启用
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiPointsRulesV1PointsRulesUpdateReq {
  /** @format int */
  id: number;
  /** @format string */
  name?: string;
  /** @format string */
  rule_key?: string;
  /**
   * 整数值（如积分数量、天数）
   * @format *int
   */
  value_int?: number;
  /**
   * 小数值（如比例、倍数）
   * @format *float64
   */
  value_decimal?: number;
  /**
   * 字符串值（如配置json、文本）
   * @format string
   */
  value_string?: string;
  /** @format string */
  description?: string;
  /** @format *int */
  sort_order?: number;
  /** @format *int */
  status?: number;
}

export type GfEshopApiPointsRulesV1PointsRulesUpdateRes = object;

export interface GfEshopApiProductAttributesV1ProductAttributesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  product_id?: number;
}

export interface GfEshopApiProductAttributesV1ProductAttributesListRes {
  /** @format []*entity.ProductAttributes */
  list?: GfEshopInternalModelEntityProductAttributes[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityProductAttributes {
  /** @format int64 */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 关联 attributes.id
   * @format int64
   */
  attribute_id?: number;
  /**
   * 属性值（如：A16）
   * @format string
   */
  value?: string;
  /**
   * 排序权重（越小越靠前，用于控制前台展示顺序）
   * @format int
   */
  sort_order?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /**
   * 软删除
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiProductAttributesV1ProductAttributesCreateReq {
  /**
   * 商品ID
   * @format int64
   */
  product_id: number;
  /**
   * 属性ID
   * @format int64
   */
  attribute_id: number;
  /**
   * 属性值
   * @format string
   */
  value: string;
}

export interface GfEshopApiProductAttributesV1ProductAttributesCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductAttributesV1ProductAttributesDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiProductAttributesV1ProductAttributesDeleteRes = object;

export interface GfEshopApiProductVersionsV1ProductVersionsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  product_id?: number;
}

export interface GfEshopApiProductVersionsV1ProductVersionsListRes {
  /** @format []*entity.ProductVersions */
  list?: GfEshopInternalModelEntityProductVersions[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityProductVersions {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 关联 sp_products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 版本号（从1递增）
   * @format int
   */
  version?: number;
  /**
   * 变更JSON（{"before": {...}, "after": {...}}）
   * @format string
   */
  diff?: string;
  /**
   * 变更字段列表（如：["name", "price", "status"]）
   * @format string
   */
  changed_fields?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
  /**
   * 操作人ID
   * @format int64
   */
  operator_id?: number;
  /**
   * 变更原因
   * @format string
   */
  reason?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiProductVersionsV1ProductVersionsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductVersionsV1ProductVersionsDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 关联 sp_products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 版本号（从1递增）
   * @format int
   */
  version?: number;
  /**
   * 变更JSON（{"before": {...}, "after": {...}}）
   * @format string
   */
  diff?: string;
  /**
   * 变更字段列表（如：["name", "price", "status"]）
   * @format string
   */
  changed_fields?: string;
  /**
   * 操作人
   * @format string
   */
  operator?: string;
  /**
   * 操作人ID
   * @format int64
   */
  operator_id?: number;
  /**
   * 变更原因
   * @format string
   */
  reason?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiProductsV1ProductsListReq {
  /**
   * 每页条数(默认10,最大100)
   * @format int
   */
  size?: number;
  /**
   * 游标(首次不传,后续使用返回的cursor)
   * @format string
   */
  cursor?: string;
  /** @format string */
  name?: string;
  /** @format int64 */
  category_id?: number;
  /** @format int64 */
  brand_id?: number;
  /** @format *int */
  status?: number;
  /** @format int64 */
  price_min?: number;
  /** @format int64 */
  price_max?: number;
}

export interface GfEshopApiProductsV1ProductsListRes {
  /** @format []*v1.ProductsListItem */
  list?: GfEshopApiProductsV1ProductsListItem[];
  /** @format string */
  cursor?: string;
  /** @format bool */
  has_more?: boolean;
}

export interface GfEshopApiProductsV1ProductsListItem {
  /**
   * SPU ID
   * @format int64
   */
  id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商品名称（用于搜索和展示）
   * @format string
   */
  name?: string;
  /**
   * 商品副标题（卖点文案，如"2026新款"）
   * @format string
   */
  subtitle?: string;
  /**
   * 前台主类目ID（叶子节点）
   * @format int64
   */
  category_id?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位（件/箱/台/套）
   * @format string
   */
  unit?: string;
  /**
   * 主图URL（CDN地址）
   * @format string
   */
  main_image?: string;
  /**
   * 附图JSON数组（最多10张）
   * @format string
   */
  images?: string;
  /**
   * 主图视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 总销量（从订单明细聚合，每日更新）
   * @format int
   */
  sales_count?: number;
  /**
   * 平均评分（1-5）
   * @format float64
   */
  rating_average?: number;
  /**
   * 评价总数
   * @format int
   */
  rating_count?: number;
  /**
   * 0-草稿 1-待审 2-已上架 3-已下架 4-违规封禁
   * @format int
   */
  status?: number;
  /**
   * 排序权重（越大越靠前，运营手动调整）
   * @format int
   */
  sort_order?: number;
  /**
   * 1-有图文详情（存于 sp_product_descriptions 表）
   * @format int
   */
  has_description?: number;
  /**
   * SEO标题（自定义title，留空则使用name）
   * @format string
   */
  seo_title?: string;
  /**
   * SEO关键词（逗号分隔）
   * @format string
   */
  seo_keywords?: string;
  /**
   * SEO描述（页面meta description）
   * @format string
   */
  seo_description?: string;
  /**
   * 创建人（运营工号）
   * @format string
   */
  created_by?: string;
  /**
   * 最后更新人
   * @format string
   */
  updated_by?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 软删除时间（NULL表示未删除）
   * @format *gtime.Time
   */
  deleted_at?: string;
  /**
   * 最低销售价(分)
   * @format int64
   */
  price_min?: number;
  /**
   * 最高销售价(分)
   * @format int64
   */
  price_max?: number;
  /**
   * 总库存（可售）
   * @format int64
   */
  total_stock?: number;
}

export interface GfEshopApiProductsV1ProductsCreateReq {
  /**
   * 商品名称
   * @format string
   */
  name: string;
  /**
   * 副标题
   * @format string
   */
  subtitle?: string;
  /**
   * 类目ID
   * @format int64
   */
  category_id: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 主图
   * @format string
   */
  main_image: string;
  /**
   * 附图JSON
   * @format string
   */
  images?: string;
  /**
   * 视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 创建人
   * @format string
   */
  created_by?: string;
}

export interface GfEshopApiProductsV1ProductsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductsV1ProductsCreateFullReq {
  /**
   * 商品名称
   * @format string
   */
  name: string;
  /**
   * 副标题
   * @format string
   */
  subtitle?: string;
  /**
   * 类目ID
   * @format int64
   */
  category_id: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 主图
   * @format string
   */
  main_image: string;
  /**
   * 附图JSON
   * @format string
   */
  images?: string;
  /**
   * 视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 创建人
   * @format string
   */
  created_by?: string;
  /**
   * 商品详情HTML
   * @format string
   */
  description?: string;
  /**
   * 移动端详情
   * @format string
   */
  mobile_description?: string;
  /**
   * SKU列表
   * @format []v1.CreateSKUItem
   */
  skus?: GfEshopApiProductsV1CreateSKUItem[];
  /**
   * 属性值列表
   * @format []v1.CreateProductAttrItem
   */
  attributes?: GfEshopApiProductsV1CreateProductAttrItem[];
}

export interface GfEshopApiProductsV1CreateSKUItem {
  /**
   * 商家编码
   * @format string
   */
  sku_code?: string;
  /**
   * 条码
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价(分)
   * @format int64
   */
  price?: number;
  /**
   * 划线价(分)
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价(分)
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量(克)
   * @format float64
   */
  weight?: number;
  /**
   * 体积(cm³)
   * @format float64
   */
  volume?: number;
  /**
   * 长(cm)
   * @format float64
   */
  length?: number;
  /**
   * 宽(cm)
   * @format float64
   */
  width?: number;
  /**
   * 高(cm)
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU图
   * @format string
   */
  image?: string;
}

export interface GfEshopApiProductsV1CreateProductAttrItem {
  /**
   * 属性ID
   * @format int64
   */
  attribute_id?: number;
  /**
   * 属性值
   * @format string
   */
  value?: string;
}

export interface GfEshopApiProductsV1ProductsCreateFullRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductsV1ProductsDetailPureReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductsV1ProductsDetailPureRes {
  /**
   * SPU ID
   * @format int64
   */
  id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商品名称（用于搜索和展示）
   * @format string
   */
  name?: string;
  /**
   * 商品副标题（卖点文案，如"2026新款"）
   * @format string
   */
  subtitle?: string;
  /**
   * 前台主类目ID（叶子节点）
   * @format int64
   */
  category_id?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位（件/箱/台/套）
   * @format string
   */
  unit?: string;
  /**
   * 主图URL（CDN地址）
   * @format string
   */
  main_image?: string;
  /**
   * 附图JSON数组（最多10张）
   * @format string
   */
  images?: string;
  /**
   * 主图视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 总销量（从订单明细聚合，每日更新）
   * @format int
   */
  sales_count?: number;
  /**
   * 平均评分（1-5）
   * @format float64
   */
  rating_average?: number;
  /**
   * 评价总数
   * @format int
   */
  rating_count?: number;
  /**
   * 0-草稿 1-待审 2-已上架 3-已下架 4-违规封禁
   * @format int
   */
  status?: number;
  /**
   * 排序权重（越大越靠前，运营手动调整）
   * @format int
   */
  sort_order?: number;
  /**
   * 1-有图文详情（存于 sp_product_descriptions 表）
   * @format int
   */
  has_description?: number;
  /**
   * SEO标题（自定义title，留空则使用name）
   * @format string
   */
  seo_title?: string;
  /**
   * SEO关键词（逗号分隔）
   * @format string
   */
  seo_keywords?: string;
  /**
   * SEO描述（页面meta description）
   * @format string
   */
  seo_description?: string;
  /**
   * 创建人（运营工号）
   * @format string
   */
  created_by?: string;
  /**
   * 最后更新人
   * @format string
   */
  updated_by?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 软删除时间（NULL表示未删除）
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiProductsV1ProductsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiProductsV1ProductsDeleteRes = object;

export interface GfEshopApiProductsV1ProductsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiProductsV1ProductsDetailRes {
  /**
   * SPU ID
   * @format int64
   */
  id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商品名称（用于搜索和展示）
   * @format string
   */
  name?: string;
  /**
   * 商品副标题（卖点文案，如"2026新款"）
   * @format string
   */
  subtitle?: string;
  /**
   * 前台主类目ID（叶子节点）
   * @format int64
   */
  category_id?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位（件/箱/台/套）
   * @format string
   */
  unit?: string;
  /**
   * 主图URL（CDN地址）
   * @format string
   */
  main_image?: string;
  /**
   * 附图JSON数组（最多10张）
   * @format string
   */
  images?: string;
  /**
   * 主图视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 总销量（从订单明细聚合，每日更新）
   * @format int
   */
  sales_count?: number;
  /**
   * 平均评分（1-5）
   * @format float64
   */
  rating_average?: number;
  /**
   * 评价总数
   * @format int
   */
  rating_count?: number;
  /**
   * 0-草稿 1-待审 2-已上架 3-已下架 4-违规封禁
   * @format int
   */
  status?: number;
  /**
   * 排序权重（越大越靠前，运营手动调整）
   * @format int
   */
  sort_order?: number;
  /**
   * 1-有图文详情（存于 sp_product_descriptions 表）
   * @format int
   */
  has_description?: number;
  /**
   * SEO标题（自定义title，留空则使用name）
   * @format string
   */
  seo_title?: string;
  /**
   * SEO关键词（逗号分隔）
   * @format string
   */
  seo_keywords?: string;
  /**
   * SEO描述（页面meta description）
   * @format string
   */
  seo_description?: string;
  /**
   * 创建人（运营工号）
   * @format string
   */
  created_by?: string;
  /**
   * 最后更新人
   * @format string
   */
  updated_by?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 软删除时间（NULL表示未删除）
   * @format *gtime.Time
   */
  deleted_at?: string;
  /**
   * 最低销售价(分)
   * @format int64
   */
  price_min?: number;
  /**
   * 最高销售价(分)
   * @format int64
   */
  price_max?: number;
  /**
   * 总库存（可售）
   * @format int64
   */
  total_stock?: number;
  /** @format []v1.ProductAttrDetailResponse */
  attributes?: GfEshopApiProductsV1ProductAttrDetailResponse[];
  description?: GfEshopInternalModelEntityProductDescriptions;
  /** @format []*v1.SkuDetailItem */
  skus?: GfEshopApiProductsV1SkuDetailItem[];
}

export interface GfEshopApiProductsV1ProductAttrDetailResponse {
  /** @format int64 */
  attribute_id?: number;
  /** @format string */
  attribute_name?: string;
  /** @format []string */
  values?: string[];
  /** @format int */
  sort_order?: number;
}

export interface GfEshopInternalModelEntityProductDescriptions {
  /** @format int64 */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 商品详情（富文本HTML）
   * @format string
   */
  description?: string;
  /**
   * 移动端详情（可选，适配手机展示）
   * @format string
   */
  mobile_description?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiProductsV1SkuDetailItem {
  /**
   * SKU ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商家编码（唯一，用于ERP/WMS对接）
   * @format string
   */
  sku_code?: string;
  /**
   * 条码/EAN/UPC（仓库扫描用，NULL表示无条码）
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价（分）
   * @format int64
   */
  price?: number;
  /**
   * 划线价/市场价（分）
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价（分，仅后台可见）
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量（克）
   * @format float64
   */
  weight?: number;
  /**
   * 体积（立方厘米）
   * @format float64
   */
  volume?: number;
  /**
   * 长（厘米）
   * @format float64
   */
  length?: number;
  /**
   * 宽（厘米）
   * @format float64
   */
  width?: number;
  /**
   * 高（厘米）
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量（0=不限）
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU专属图（如不同颜色展示不同图片）
   * @format string
   */
  image?: string;
  /**
   * 1-正常 0-禁用（如某规格暂时缺货下架）
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
  /** @format int64 */
  available_quantity?: number;
  /** @format string */
  inventory_status?: string;
}

export interface GfEshopApiProductsV1ProductsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 商品名称
   * @format string
   */
  name?: string;
  /**
   * 副标题
   * @format string
   */
  subtitle?: string;
  /**
   * 类目ID
   * @format int64
   */
  category_id?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 主图
   * @format string
   */
  main_image?: string;
  /**
   * 附图JSON
   * @format string
   */
  images?: string;
  /**
   * 视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 更新人
   * @format string
   */
  updated_by?: string;
}

export type GfEshopApiProductsV1ProductsUpdateRes = object;

export interface GfEshopApiProductDescriptionsV1ProductDescriptionsDetailReq {
  /** @format int64 */
  product_id?: number;
}

export interface GfEshopApiProductDescriptionsV1ProductDescriptionsDetailRes {
  /** @format int64 */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 商品详情（富文本HTML）
   * @format string
   */
  description?: string;
  /**
   * 移动端详情（可选，适配手机展示）
   * @format string
   */
  mobile_description?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiProductDescriptionsV1ProductDescriptionsSaveReq {
  /** @format int64 */
  product_id: number;
  /**
   * 商品详情(富文本HTML)
   * @format string
   */
  description?: string;
  /**
   * 移动端详情
   * @format string
   */
  mobile_description?: string;
}

export type GfEshopApiProductDescriptionsV1ProductDescriptionsSaveRes = object;

export interface GfEshopApiMarketingV1PromotionListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format *int */
  status?: number;
  /** @format int */
  promo_type?: number;
}

export interface GfEshopApiMarketingV1PromotionListRes {
  /** @format []*entity.Promotions */
  list?: GfEshopInternalModelEntityPromotions[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityPromotions {
  /**
   * 促销ID
   * @format int64
   */
  id?: number;
  /**
   * 促销业务编号
   * @format string
   */
  promotion_no?: string;
  /**
   * 所属商家ID（0表示平台级活动）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 活动名称
   * @format string
   */
  promo_name?: string;
  /**
   * 1-满减券 2-折扣券 3-秒杀 4-满额减 5-满件折 6-会员价
   * @format int
   */
  promo_type?: number;
  /**
   * 优惠码（优惠券专用）
   * @format string
   */
  promo_code?: string;
  /**
   * 开始时间
   * @format *gtime.Time
   */
  start_time?: string;
  /**
   * 结束时间
   * @format *gtime.Time
   */
  end_time?: string;
  /**
   * 发行总量（0表示不限）
   * @format int
   */
  total_quantity?: number;
  /**
   * 每人限领/限购数量
   * @format int
   */
  per_user_limit?: number;
  /**
   * 已使用/已售数量（异步统计，非实时）
   * @format int
   */
  used_quantity?: number;
  /**
   * 关联规则表ID
   * @format int64
   */
  rule_id?: number;
  /**
   * 1-草稿 2-待生效 3-生效中 4-已暂停 5-已结束 6-已作废
   * @format int
   */
  status?: number;
  /**
   * 优先级（数字越大越优先，同类型互斥）
   * @format int
   */
  priority?: number;
  /**
   * 创建人
   * @format int64
   */
  created_by?: number;
  /**
   * 更新人
   * @format int64
   */
  updated_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMarketingV1PromotionCreateReq {
  /** @format string */
  promo_name: string;
  /** @format int */
  promo_type: number;
  /** @format string */
  promo_code?: string;
  /** @format string */
  start_time: string;
  /** @format string */
  end_time: string;
  /** @format int */
  total_quantity?: number;
  /** @format int */
  per_user_limit?: number;
  /** @format string */
  rule_name?: string;
  /** @format int */
  condition_type?: number;
  /** @format int64 */
  condition_value?: number;
  /** @format int */
  benefit_type?: number;
  /** @format int64 */
  benefit_value?: number;
  /** @format int */
  is_stackable?: number;
  /** @format int */
  stack_priority?: number;
  /** @format []int64 */
  product_ids?: number[];
}

export interface GfEshopApiMarketingV1PromotionCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMarketingV1PromotionDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiMarketingV1PromotionDeleteRes = object;

export interface GfEshopApiMarketingV1PromotionDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMarketingV1PromotionDetailRes {
  /**
   * 促销ID
   * @format int64
   */
  id?: number;
  /**
   * 促销业务编号
   * @format string
   */
  promotion_no?: string;
  /**
   * 所属商家ID（0表示平台级活动）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 活动名称
   * @format string
   */
  promo_name?: string;
  /**
   * 1-满减券 2-折扣券 3-秒杀 4-满额减 5-满件折 6-会员价
   * @format int
   */
  promo_type?: number;
  /**
   * 优惠码（优惠券专用）
   * @format string
   */
  promo_code?: string;
  /**
   * 开始时间
   * @format *gtime.Time
   */
  start_time?: string;
  /**
   * 结束时间
   * @format *gtime.Time
   */
  end_time?: string;
  /**
   * 发行总量（0表示不限）
   * @format int
   */
  total_quantity?: number;
  /**
   * 每人限领/限购数量
   * @format int
   */
  per_user_limit?: number;
  /**
   * 已使用/已售数量（异步统计，非实时）
   * @format int
   */
  used_quantity?: number;
  /**
   * 关联规则表ID
   * @format int64
   */
  rule_id?: number;
  /**
   * 1-草稿 2-待生效 3-生效中 4-已暂停 5-已结束 6-已作废
   * @format int
   */
  status?: number;
  /**
   * 优先级（数字越大越优先，同类型互斥）
   * @format int
   */
  priority?: number;
  /**
   * 创建人
   * @format int64
   */
  created_by?: number;
  /**
   * 更新人
   * @format int64
   */
  updated_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMarketingV1PromotionUpdateReq {
  /** @format int64 */
  id: number;
  /** @format string */
  promo_name?: string;
  /** @format string */
  start_time?: string;
  /** @format string */
  end_time?: string;
  /** @format int */
  total_quantity?: number;
  /** @format int */
  per_user_limit?: number;
  /** @format int */
  status?: number;
  /** @format string */
  rule_name?: string;
  /** @format int */
  condition_type?: number;
  /** @format int64 */
  condition_value?: number;
  /** @format int */
  benefit_type?: number;
  /** @format int64 */
  benefit_value?: number;
  /** @format int */
  is_stackable?: number;
  /** @format int */
  stack_priority?: number;
}

export type GfEshopApiMarketingV1PromotionUpdateRes = object;

export interface GfEshopApiMarketingV1PromotionFullDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiMarketingV1PromotionFullDetailRes {
  promotion?: GfEshopInternalModelEntityPromotions;
  rule?: GfEshopInternalModelEntityPromotionRules;
  /** @format []*v1.PromotionProductItem */
  products?: GfEshopApiMarketingV1PromotionProductItem[];
}

export interface GfEshopInternalModelEntityPromotionRules {
  /**
   * 规则ID
   * @format int64
   */
  id?: number;
  /**
   * 所属促销ID
   * @format int64
   */
  promotion_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 规则名称
   * @format string
   */
  rule_name?: string;
  /**
   * 1-无门槛 2-满金额 3-满件数 4-指定用户等级
   * @format int
   */
  condition_type?: number;
  /**
   * 门槛值（分）
   * @format int64
   */
  condition_value?: number;
  /**
   * 优惠配置JSON。例：{"type":1,"value":3000} 或 {"type":2,"steps":[{"limit":10000,"rate":900},{"limit":20000,"rate":800}]}
   * @format string
   */
  benefit_config?: string;
  /**
   * 是否可与其他促销叠加 0-否 1-是
   * @format int
   */
  is_stackable?: number;
  /**
   * 叠加组ID（同组内互斥，不同组可叠加）
   * @format int
   */
  stack_group?: number;
  /**
   * 创建人
   * @format int64
   */
  created_by?: number;
  /**
   * 更新人
   * @format int64
   */
  updated_by?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiMarketingV1PromotionProductItem {
  /** @format int64 */
  id?: number;
  /** @format int */
  product_type?: number;
  /** @format int64 */
  product_id?: number;
  /** @format string */
  spu_name?: string;
  /** @format string */
  subtitle?: string;
  /** @format string */
  main_image?: string;
  /** @format string */
  unit?: string;
  /** @format int64 */
  min_price?: number;
  /** @format int64 */
  max_price?: number;
  /** @format int */
  sales_count?: number;
  /** @format int */
  spu_status?: number;
}

export interface GfEshopApiReviewsV1ReviewsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int */
  id?: number;
  /** @format int */
  merchant_id?: number;
  /** @format int */
  spu_id?: number;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiReviewsV1ReviewsListRes {
  /** @format []*entity.Reviews */
  list?: GfEshopInternalModelEntityReviews[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityReviews {
  /**
   * 评价ID
   * @format int64
   */
  id?: number;
  /**
   * 评价业务单号（幂等键）
   * @format string
   */
  review_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 订单ID（校验必须已购）
   * @format int64
   */
  order_id?: number;
  /**
   * 订单明细ID（用于区分同订单多商品）
   * @format int64
   */
  order_item_id?: number;
  /**
   * 商品SPU ID
   * @format int64
   */
  spu_id?: number;
  /**
   * 商品SKU ID
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 总体评分（1-5星）
   * @format int
   */
  overall_rating?: number;
  /**
   * 质量评分
   * @format int
   */
  quality_rating?: number;
  /**
   * 物流评分
   * @format int
   */
  logistics_rating?: number;
  /**
   * 服务评分
   * @format int
   */
  service_rating?: number;
  /**
   * 评价文字内容
   * @format string
   */
  content?: string;
  /**
   * 内容长度（冗余，用于筛选优质评价）
   * @format int
   */
  content_length?: number;
  /**
   * 是否匿名 0-否 1-是
   * @format int
   */
  is_anonymous?: number;
  /**
   * 是否包含媒体 0-否 1-是
   * @format int
   */
  has_media?: number;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝 3-用户删除 4-平台屏蔽
   * @format int
   */
  status?: number;
  /**
   * 风险等级 0-正常 1-低风险 2-高风险
   * @format int
   */
  risk_level?: number;
  /**
   * 拒绝原因
   * @format string
   */
  reject_reason?: string;
  /**
   * 审核人ID
   * @format int64
   */
  audited_by?: number;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 点赞数（异步校准）
   * @format int
   */
  like_count?: number;
  /**
   * 有用数（异步校准）
   * @format int
   */
  helpful_count?: number;
  /**
   * 回复总数（异步校准）
   * @format int
   */
  reply_count?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiReviewsV1ReviewsCreateReq {
  /** @format int64 */
  order_id: number;
  /** @format int64 */
  order_item_id?: number;
  /** @format int64 */
  spu_id: number;
  /** @format int64 */
  sku_id?: number;
  /** @format int */
  overall_rating: number;
  /** @format int */
  quality_rating?: number;
  /** @format int */
  logistics_rating?: number;
  /** @format int */
  service_rating?: number;
  /** @format string */
  content?: string;
  /** @format int */
  is_anonymous?: number;
}

export interface GfEshopApiReviewsV1ReviewsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiReviewsV1ReviewsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiReviewsV1ReviewsDeleteRes = object;

export interface GfEshopApiReviewsV1ReviewsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiReviewsV1ReviewsDetailRes {
  /**
   * 评价ID
   * @format int64
   */
  id?: number;
  /**
   * 评价业务单号（幂等键）
   * @format string
   */
  review_no?: string;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 订单ID（校验必须已购）
   * @format int64
   */
  order_id?: number;
  /**
   * 订单明细ID（用于区分同订单多商品）
   * @format int64
   */
  order_item_id?: number;
  /**
   * 商品SPU ID
   * @format int64
   */
  spu_id?: number;
  /**
   * 商品SKU ID
   * @format int64
   */
  sku_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 总体评分（1-5星）
   * @format int
   */
  overall_rating?: number;
  /**
   * 质量评分
   * @format int
   */
  quality_rating?: number;
  /**
   * 物流评分
   * @format int
   */
  logistics_rating?: number;
  /**
   * 服务评分
   * @format int
   */
  service_rating?: number;
  /**
   * 评价文字内容
   * @format string
   */
  content?: string;
  /**
   * 内容长度（冗余，用于筛选优质评价）
   * @format int
   */
  content_length?: number;
  /**
   * 是否匿名 0-否 1-是
   * @format int
   */
  is_anonymous?: number;
  /**
   * 是否包含媒体 0-否 1-是
   * @format int
   */
  has_media?: number;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝 3-用户删除 4-平台屏蔽
   * @format int
   */
  status?: number;
  /**
   * 风险等级 0-正常 1-低风险 2-高风险
   * @format int
   */
  risk_level?: number;
  /**
   * 拒绝原因
   * @format string
   */
  reject_reason?: string;
  /**
   * 审核人ID
   * @format int64
   */
  audited_by?: number;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 点赞数（异步校准）
   * @format int
   */
  like_count?: number;
  /**
   * 有用数（异步校准）
   * @format int
   */
  helpful_count?: number;
  /**
   * 回复总数（异步校准）
   * @format int
   */
  reply_count?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiReviewsV1ReviewsUpdateReq {
  /** @format int64 */
  id: number;
  /** @format int */
  overall_rating?: number;
  /** @format int */
  quality_rating?: number;
  /** @format int */
  logistics_rating?: number;
  /** @format int */
  service_rating?: number;
  /** @format string */
  content?: string;
  /** @format int */
  is_anonymous?: number;
}

export type GfEshopApiReviewsV1ReviewsUpdateRes = object;

export interface GfEshopApiReviewsV1ReviewsAuditReq {
  /** @format int64 */
  id: number;
  /** @format int */
  status: GfEshopApiReviewsV1ReviewsAuditReqStatusEnum;
  /** @format string */
  reject_reason?: string;
}

export type GfEshopApiReviewsV1ReviewsAuditRes = object;

export interface GfEshopApiReviewsV1ReviewsListAuditLogsReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiReviewsV1ReviewsListAuditLogsRes {
  /** @format []*entity.ReviewAuditLogs */
  list?: GfEshopInternalModelEntityReviewAuditLogs[];
}

export interface GfEshopInternalModelEntityReviewAuditLogs {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 评价ID
   * @format int64
   */
  review_id?: number;
  /**
   * 操作：submit/approve/reject/delete/shield
   * @format string
   */
  action?: string;
  /**
   * 操作人ID
   * @format int64
   */
  operator_id?: number;
  /**
   * 操作人名称
   * @format string
   */
  operator_name?: string;
  /**
   * 变更前状态
   * @format int
   */
  before_status?: number;
  /**
   * 变更后状态
   * @format int
   */
  after_status?: number;
  /**
   * 操作备注
   * @format string
   */
  remark?: string;
  /**
   * 评价快照（用于回溯）
   * @format string
   */
  snapshot?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiReviewsV1ReviewsListRepliesReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiReviewsV1ReviewsListRepliesRes {
  /** @format []*entity.ReviewReplies */
  list?: GfEshopInternalModelEntityReviewReplies[];
}

export interface GfEshopInternalModelEntityReviewReplies {
  /**
   * 回复ID
   * @format int64
   */
  id?: number;
  /**
   * 关联评价ID
   * @format int64
   */
  review_id?: number;
  /**
   * 根回复ID（一级回复为NULL）
   * @format int64
   */
  root_reply_id?: number;
  /**
   * 父级回复ID（支持二级回复）
   * @format int64
   */
  parent_id?: number;
  /**
   * 1-商家回复 2-用户追问 3-平台回复
   * @format int
   */
  reply_type?: number;
  /**
   * 回复内容
   * @format string
   */
  content?: string;
  /**
   * 操作人ID
   * @format int64
   */
  operator_id?: number;
  /**
   * 操作人名称（冗余，避免JOIN用户表）
   * @format string
   */
  operator_name?: string;
  /**
   * 1-正常 2-隐藏 3-删除
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
}

export interface GfEshopApiReviewsV1ReviewsCreateReplyReq {
  /** @format int64 */
  id: number;
  /** @format string */
  content: string;
  /** @format int */
  reply_type?: number;
  /**
   * 父级回复ID（二级回复时传入）
   * @format int64
   */
  parent_id?: number;
}

export interface GfEshopApiReviewsV1ReviewsCreateReplyRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiReviewsV1ReviewsDeleteReplyReq {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  replyId?: number;
}

export type GfEshopApiReviewsV1ReviewsDeleteReplyRes = object;

export interface GfEshopApiRolesV1RoleListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  name?: string;
  /** @format string */
  role_type?: string;
  /** @format *int */
  status?: number;
}

export interface GfEshopApiRolesV1RoleListRes {
  /** @format []*entity.Roles */
  list?: GfEshopInternalModelEntityRoles[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityRoles {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 角色名称（唯一，如 admin/editor/vip）
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统内置 custom-自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiRolesV1RoleCreateReq {
  /**
   * 角色名称
   * @format string
   */
  name: string;
  /**
   * 显示名称
   * @format string
   */
  display_name: string;
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 类型
   * @format string
   */
  role_type?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiRolesV1RoleCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiRolesV1RoleDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiRolesV1RoleDeleteRes = object;

export interface GfEshopApiRolesV1RoleDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiRolesV1RoleDetailRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 角色名称（唯一，如 admin/editor/vip）
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统内置 custom-自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiRolesV1RoleUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 角色名称
   * @format string
   */
  name?: string;
  /**
   * 显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 类型
   * @format string
   */
  role_type?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type GfEshopApiRolesV1RoleUpdateRes = object;

export interface GfEshopApiSkusV1SkusListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format int64 */
  product_id?: number;
}

export interface GfEshopApiSkusV1SkusListRes {
  /** @format []*entity.Skus */
  list?: GfEshopInternalModelEntitySkus[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntitySkus {
  /**
   * SKU ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商家编码（唯一，用于ERP/WMS对接）
   * @format string
   */
  sku_code?: string;
  /**
   * 条码/EAN/UPC（仓库扫描用，NULL表示无条码）
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价（分）
   * @format int64
   */
  price?: number;
  /**
   * 划线价/市场价（分）
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价（分，仅后台可见）
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量（克）
   * @format float64
   */
  weight?: number;
  /**
   * 体积（立方厘米）
   * @format float64
   */
  volume?: number;
  /**
   * 长（厘米）
   * @format float64
   */
  length?: number;
  /**
   * 宽（厘米）
   * @format float64
   */
  width?: number;
  /**
   * 高（厘米）
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量（0=不限）
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU专属图（如不同颜色展示不同图片）
   * @format string
   */
  image?: string;
  /**
   * 1-正常 0-禁用（如某规格暂时缺货下架）
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiSkusV1SkusCreateReq {
  /**
   * 商品ID
   * @format int64
   */
  product_id: number;
  /**
   * 商家编码
   * @format string
   */
  sku_code: string;
  /**
   * 条码
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价(分)
   * @format int64
   */
  price: number;
  /**
   * 划线价(分)
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价(分)
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量(克)
   * @format float64
   */
  weight?: number;
  /**
   * 体积(cm³)
   * @format float64
   */
  volume?: number;
  /**
   * 长(cm)
   * @format float64
   */
  length?: number;
  /**
   * 宽(cm)
   * @format float64
   */
  width?: number;
  /**
   * 高(cm)
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU图
   * @format string
   */
  image?: string;
}

export interface GfEshopApiSkusV1SkusCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiSkusV1SkusGetByCodeReq {
  /** @format string */
  sku_code?: string;
}

export interface GfEshopApiSkusV1SkusGetByCodeRes {
  /**
   * SKU ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商家编码（唯一，用于ERP/WMS对接）
   * @format string
   */
  sku_code?: string;
  /**
   * 条码/EAN/UPC（仓库扫描用，NULL表示无条码）
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价（分）
   * @format int64
   */
  price?: number;
  /**
   * 划线价/市场价（分）
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价（分，仅后台可见）
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量（克）
   * @format float64
   */
  weight?: number;
  /**
   * 体积（立方厘米）
   * @format float64
   */
  volume?: number;
  /**
   * 长（厘米）
   * @format float64
   */
  length?: number;
  /**
   * 宽（厘米）
   * @format float64
   */
  width?: number;
  /**
   * 高（厘米）
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量（0=不限）
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU专属图（如不同颜色展示不同图片）
   * @format string
   */
  image?: string;
  /**
   * 1-正常 0-禁用（如某规格暂时缺货下架）
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
  /** @format int64 */
  available_quantity?: number;
  /** @format string */
  inventory_status?: string;
}

export interface GfEshopApiSkusV1SkusDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiSkusV1SkusDeleteRes = object;

export interface GfEshopApiSkusV1SkusDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiSkusV1SkusDetailRes {
  /**
   * SKU ID
   * @format int64
   */
  id?: number;
  /**
   * 关联 products.id
   * @format int64
   */
  product_id?: number;
  /**
   * 所属商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 商家编码（唯一，用于ERP/WMS对接）
   * @format string
   */
  sku_code?: string;
  /**
   * 条码/EAN/UPC（仓库扫描用，NULL表示无条码）
   * @format string
   */
  barcode?: string;
  /**
   * 规格文本快照（如：红色 / 256G）
   * @format string
   */
  spec_summary?: string;
  /**
   * 销售价（分）
   * @format int64
   */
  price?: number;
  /**
   * 划线价/市场价（分）
   * @format int64
   */
  market_price?: number;
  /**
   * 成本价（分，仅后台可见）
   * @format int64
   */
  cost_price?: number;
  /**
   * 重量（克）
   * @format float64
   */
  weight?: number;
  /**
   * 体积（立方厘米）
   * @format float64
   */
  volume?: number;
  /**
   * 长（厘米）
   * @format float64
   */
  length?: number;
  /**
   * 宽（厘米）
   * @format float64
   */
  width?: number;
  /**
   * 高（厘米）
   * @format float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量（0=不限）
   * @format int
   */
  max_purchase_qty?: number;
  /**
   * SKU专属图（如不同颜色展示不同图片）
   * @format string
   */
  image?: string;
  /**
   * 1-正常 0-禁用（如某规格暂时缺货下架）
   * @format int
   */
  status?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
  /** @format int64 */
  available_quantity?: number;
  /** @format string */
  inventory_status?: string;
}

export interface GfEshopApiSkusV1SkusUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 销售价(分)
   * @format *int64
   */
  price?: number;
  /**
   * 划线价(分)
   * @format *int64
   */
  market_price?: number;
  /**
   * 成本价(分)
   * @format *int64
   */
  cost_price?: number;
  /**
   * 1-正常 0-禁用
   * @format *int
   */
  status?: number;
  /**
   * SKU图
   * @format *string
   */
  image?: string;
  /**
   * 条码
   * @format *string
   */
  barcode?: string;
  /**
   * 重量(克)
   * @format *float64
   */
  weight?: number;
  /**
   * 体积(cm³)
   * @format *float64
   */
  volume?: number;
  /**
   * 长(cm)
   * @format *float64
   */
  length?: number;
  /**
   * 宽(cm)
   * @format *float64
   */
  width?: number;
  /**
   * 高(cm)
   * @format *float64
   */
  height?: number;
  /**
   * 最少购买数量
   * @format *int
   */
  min_purchase_qty?: number;
  /**
   * 最大购买数量
   * @format *int
   */
  max_purchase_qty?: number;
}

export type GfEshopApiSkusV1SkusUpdateRes = object;

export interface GfEshopApiStaffV1StaffListReq {
  /**
   * 页码
   * @format int
   */
  page?: number;
  /**
   * 每页条数
   * @format int
   */
  page_size?: number;
  /**
   * 搜索关键词（用户名/姓名）
   * @format string
   */
  keyword?: string;
  /**
   * 状态：1-正常 0-禁用
   * @format *int
   */
  status?: number;
}

export interface GfEshopApiStaffV1StaffListRes {
  /** @format []*v1.StaffListItem */
  list?: GfEshopApiStaffV1StaffListItem[];
  /** @format int */
  total?: number;
}

export interface GfEshopApiStaffV1StaffListItem {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 登录用户名
   * @format string
   */
  username?: string;
  /**
   * 真实姓名
   * @format string
   */
  real_name?: string;
  /**
   * 邮箱
   * @format string
   */
  email?: string;
  /**
   * 手机号
   * @format string
   */
  phone?: string;
  /**
   * 头像URL
   * @format string
   */
  avatar?: string;
  /**
   * 1-正常 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 最后登录IP
   * @format string
   */
  last_login_ip?: string;
  /**
   * 最后登录时间
   * @format *gtime.Time
   */
  last_login_at?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 角色ID列表
   * @format []int64
   */
  role_ids?: number[];
  /**
   * 角色名称列表
   * @format []string
   */
  role_names?: string[];
  /**
   * 所属部门ID列表
   * @format []int64
   */
  department_ids?: number[];
  /**
   * 所属部门名称列表
   * @format []string
   */
  department_names?: string[];
}

export interface GfEshopApiStaffV1StaffLoginReq {
  /**
   * 用户名
   * @format string
   */
  username: string;
  /**
   * 密码
   * @format string
   */
  password: string;
}

export interface GfEshopApiStaffV1StaffLoginRes {
  /**
   * 访问令牌
   * @format string
   */
  access_token?: string;
  /**
   * access_token 过期时间（秒）
   * @format int64
   */
  expire_in?: number;
  /**
   * 刷新令牌
   * @format string
   */
  refresh_token?: string;
  /**
   * refresh_token 过期时间（秒）
   * @format int64
   */
  refresh_in?: number;
  /**
   * 用户ID
   * @format int64
   */
  staff_id?: number;
  /**
   * 用户名
   * @format string
   */
  username?: string;
  /**
   * 真实姓名
   * @format string
   */
  real_name?: string;
}

export type GfEshopApiStaffV1StaffLogoutReq = object;

export type GfEshopApiStaffV1StaffLogoutRes = object;

export type GfEshopApiStaffV1StaffPermissionsReq = object;

export interface GfEshopApiStaffV1StaffPermissionsRes {
  /**
   * 角色名称列表
   * @format []string
   */
  roles?: string[];
  /**
   * 权限标识列表
   * @format []string
   */
  permissions?: string[];
}

export type GfEshopApiStaffV1StaffProfileReq = object;

export interface GfEshopApiStaffV1StaffProfileRes {
  /**
   * 用户ID
   * @format int64
   */
  id?: number;
  /**
   * 用户名
   * @format string
   */
  username?: string;
  /**
   * 真实姓名
   * @format string
   */
  real_name?: string;
  /**
   * 邮箱
   * @format string
   */
  email?: string;
  /**
   * 手机号
   * @format string
   */
  phone?: string;
  /**
   * 头像URL
   * @format string
   */
  avatar?: string;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 最后登录IP
   * @format string
   */
  last_login_ip?: string;
  /**
   * 所属部门ID列表
   * @format []int64
   */
  department_ids?: number[];
  /**
   * 所属部门名称列表
   * @format []string
   */
  department_names?: string[];
}

export interface GfEshopApiStaffV1StaffRefreshTokenReq {
  /**
   * 刷新令牌
   * @format string
   */
  refresh_token: string;
}

export interface GfEshopApiStaffV1StaffRefreshTokenRes {
  /**
   * 新的访问令牌
   * @format string
   */
  access_token?: string;
  /**
   * access_token 过期时间（秒）
   * @format int64
   */
  expire_in?: number;
  /**
   * 新的刷新令牌
   * @format string
   */
  refresh_token?: string;
  /**
   * refresh_token 过期时间（秒）
   * @format int64
   */
  refresh_in?: number;
}

export interface GfEshopApiStaffV1StaffAssignRolesReq {
  /**
   * 员工ID
   * @format int64
   */
  id: number;
  /**
   * 角色ID列表
   * @format []int64
   */
  role_ids: number[];
}

export type GfEshopApiStaffV1StaffAssignRolesRes = object;

export type GfEshopApiUserV1UserProfileReq = object;

export interface GfEshopApiUserV1UserProfileRes {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户名（唯一，NULL表示未设置）
   * @format string
   */
  username?: string;
  /**
   * bcrypt 密码哈希
   * @format string
   */
  password_hash?: string;
  /**
   * 邮箱（唯一，NULL表示未绑定）
   * @format string
   */
  email?: string;
  /**
   * 邮箱是否已验证
   * @format int
   */
  email_verified?: number;
  /**
   * 手机号（唯一，NULL表示未绑定）
   * @format string
   */
  phone?: string;
  /**
   * 手机号是否已验证
   * @format int
   */
  phone_verified?: number;
  /**
   * 头像URL
   * @format string
   */
  avatar?: string;
  /**
   * 昵称
   * @format string
   */
  nickname?: string;
  /**
   * 状态：1-正常 0-禁用 2-冻结
   * @format int
   */
  status?: number;
  /**
   * 注册IP
   * @format string
   */
  register_ip?: string;
  /**
   * 注册来源：web/ios/android/admin
   * @format string
   */
  register_source?: string;
  /**
   * 最后登录IP
   * @format string
   */
  last_login_ip?: string;
  /**
   * 最后登录时间
   * @format *gtime.Time
   */
  last_login_at?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
  info?: GfEshopInternalModelEntityInfos;
}

export interface GfEshopInternalModelEntityInfos {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 性别：0-未知 1-男 2-女
   * @format int
   */
  gender?: number;
  /**
   * 生日
   * @format *gtime.Time
   */
  birthday?: string;
  /**
   * 个人简介
   * @format string
   */
  bio?: string;
  /**
   * 国家
   * @format string
   */
  country?: string;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 邮编
   * @format string
   */
  zip_code?: string;
  /**
   * 语言
   * @format string
   */
  language?: string;
  /**
   * 时区
   * @format string
   */
  timezone?: string;
  /**
   * 当前等级ID（关联 usr_levels.id）
   * @format int64
   */
  level_id?: number;
  /**
   * 累计积分
   * @format int64
   */
  total_points?: number;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
  /**
   * 更新时间
   * @format *gtime.Time
   */
  updated_at?: string;
  /**
   * 删除时间
   * @format *gtime.Time
   */
  deleted_at?: string;
}

export interface GfEshopApiUserV1UserUpdateInfoReq {
  /** @format string */
  nickname?: string;
  /** @format string */
  avatar?: string;
  /** @format int */
  gender?: number;
  /** @format string */
  birthday?: string;
  /** @format string */
  bio?: string;
  /** @format string */
  country?: string;
  /** @format string */
  province?: string;
  /** @format string */
  city?: string;
  /** @format string */
  zip_code?: string;
  /** @format string */
  language?: string;
  /** @format string */
  timezone?: string;
}

export type GfEshopApiUserV1UserUpdateInfoRes = object;

export interface GfEshopApiUserLevelsV1LevelsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /**
   * 等级名称模糊搜索
   * @format string
   */
  name?: string;
  /**
   * 1-启用 0-禁用
   * @format *int
   */
  status?: number;
}

export interface GfEshopApiUserLevelsV1LevelsListRes {
  /** @format []*entity.Levels */
  list?: GfEshopInternalModelEntityLevels[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityLevels {
  /**
   * 等级ID
   * @format int64
   */
  id?: number;
  /**
   * 等级名称（如：青铜会员、白银会员、黄金会员、钻石会员）
   * @format string
   */
  name?: string;
  /**
   * 等级数值（1=青铜 2=白银 3=黄金 4=钻石）
   * @format int
   */
  level?: number;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 该等级所需最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣，900=九折）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 消费积分倍数（如 1.5 倍积分）
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 扩展权益JSON（如：{"birthday_gift": true, "exclusive_coupon": true}）
   * @format string
   */
  benefits?: string;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiUserLevelsV1LevelsCreateReq {
  /**
   * 等级名称
   * @format string
   */
  name: string;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 等级数值
   * @format int
   */
  level: number;
  /**
   * 最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 消费积分倍数
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 扩展权益JSON
   * @format string
   */
  benefits?: string;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
}

export interface GfEshopApiUserLevelsV1LevelsCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiUserLevelsV1UserLevelReq {
  /** @format int64 */
  user_id: number;
}

export interface GfEshopApiUserLevelsV1UserLevelRes {
  /**
   * 等级ID
   * @format int64
   */
  id?: number;
  /**
   * 等级名称（如：青铜会员、白银会员、黄金会员、钻石会员）
   * @format string
   */
  name?: string;
  /**
   * 等级数值（1=青铜 2=白银 3=黄金 4=钻石）
   * @format int
   */
  level?: number;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 该等级所需最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣，900=九折）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 消费积分倍数（如 1.5 倍积分）
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 扩展权益JSON（如：{"birthday_gift": true, "exclusive_coupon": true}）
   * @format string
   */
  benefits?: string;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
  /** @format float64 */
  progress_percent?: number;
  /** @format int64 */
  current_points?: number;
  next_level?: GfEshopInternalModelEntityLevels;
  /** @format int64 */
  points_to_next?: number;
}

export interface GfEshopApiUserLevelsV1LevelsDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiUserLevelsV1LevelsDeleteRes = object;

export interface GfEshopApiUserLevelsV1LevelsDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiUserLevelsV1LevelsDetailRes {
  /**
   * 等级ID
   * @format int64
   */
  id?: number;
  /**
   * 等级名称（如：青铜会员、白银会员、黄金会员、钻石会员）
   * @format string
   */
  name?: string;
  /**
   * 等级数值（1=青铜 2=白银 3=黄金 4=钻石）
   * @format int
   */
  level?: number;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 该等级所需最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣，900=九折）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 消费积分倍数（如 1.5 倍积分）
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 扩展权益JSON（如：{"birthday_gift": true, "exclusive_coupon": true}）
   * @format string
   */
  benefits?: string;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiUserLevelsV1LevelsUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 等级名称
   * @format string
   */
  name?: string;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 等级数值
   * @format int
   */
  level?: number;
  /**
   * 最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 消费积分倍数
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 扩展权益JSON
   * @format string
   */
  benefits?: string;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
}

export type GfEshopApiUserLevelsV1LevelsUpdateRes = object;

export interface GfEshopApiUserPointsV1PointsListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  user_id?: string;
  /** @format string */
  source?: string;
  /** @format string */
  start_time?: string;
  /** @format string */
  end_time?: string;
}

export interface GfEshopApiUserPointsV1PointsListRes {
  /** @format []*entity.Points */
  list?: GfEshopInternalModelEntityPoints[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityPoints {
  /**
   * 流水ID
   * @format int64
   */
  id?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 积分变动（正=增加，负=扣减）
   * @format int64
   */
  points?: number;
  /**
   * 变动后积分余额
   * @format int64
   */
  balance_after?: number;
  /**
   * 积分来源：order-下单消费 review-评价 signin-签到 admin-管理员调整 refund-退款扣减 expire-过期清零
   * @format string
   */
  source?: string;
  /**
   * 来源ID（如订单号、评价ID）
   * @format string
   */
  source_id?: string;
  /**
   * 过期时间（NULL=永不过期）
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 0-待确认 1-已确认 2-已过期 3-已作废
   * @format int
   */
  status?: number;
  /**
   * 备注
   * @format string
   */
  remark?: string;
  /** @format *gtime.Time */
  created_at?: string;
}

export interface GfEshopApiUserPointsV1PointsAdjustReq {
  /** @format int64 */
  user_id: number;
  /** @format int64 */
  points: number;
  /** @format string */
  remark?: string;
}

export interface GfEshopApiUserPointsV1PointsAdjustRes {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  balance_after?: number;
}

export interface GfEshopApiUserPointsV1PointsBalanceReq {
  /** @format string */
  user_id?: string;
}

export interface GfEshopApiUserPointsV1PointsBalanceRes {
  /** @format int64 */
  user_id?: number;
  /** @format int64 */
  balance?: number;
  /** @format int64 */
  total_in?: number;
  /** @format int64 */
  total_out?: number;
}

export interface GfEshopApiUserPointsV1PointsTrendReq {
  /** @format string */
  user_id?: string;
  /** @format string */
  start_time?: string;
  /** @format string */
  end_time?: string;
}

export interface GfEshopApiUserPointsV1PointsTrendRes {
  /** @format []*v1.PointsTrendItem */
  list?: GfEshopApiUserPointsV1PointsTrendItem[];
}

export interface GfEshopApiUserPointsV1PointsTrendItem {
  /** @format string */
  date?: string;
  /** @format int64 */
  points?: number;
  /** @format int64 */
  balance?: number;
}

export interface GfEshopApiUserAuthV1UserLoginReq {
  /**
   * 用户名
   * @format string
   */
  username: string;
  /**
   * 密码
   * @format string
   */
  password: string;
}

export interface GfEshopApiUserAuthV1UserLoginRes {
  /**
   * 访问令牌
   * @format string
   */
  access_token?: string;
  /**
   * access_token 过期时间（秒）
   * @format int64
   */
  expire_in?: number;
  /**
   * 刷新令牌
   * @format string
   */
  refresh_token?: string;
  /**
   * refresh_token 过期时间（秒）
   * @format int64
   */
  refresh_in?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 用户名
   * @format string
   */
  username?: string;
}

export interface GfEshopApiUserAuthV1UserRefreshTokenReq {
  /**
   * 刷新令牌
   * @format string
   */
  refresh_token: string;
}

export interface GfEshopApiUserAuthV1UserRefreshTokenRes {
  /**
   * 新的访问令牌
   * @format string
   */
  access_token?: string;
  /**
   * access_token 过期时间（秒）
   * @format int64
   */
  expire_in?: number;
  /**
   * 新的刷新令牌
   * @format string
   */
  refresh_token?: string;
  /**
   * refresh_token 过期时间（秒）
   * @format int64
   */
  refresh_in?: number;
}

export interface GfEshopApiUserAuthV1UserRegisterReq {
  /**
   * 用户名
   * @format string
   */
  username: string;
  /**
   * 密码
   * @format string
   */
  password: string;
  /**
   * 邮箱
   * @format string
   */
  email?: string;
  /**
   * 手机号
   * @format string
   */
  phone?: string;
}

export interface GfEshopApiUserAuthV1UserRegisterRes {
  /**
   * 访问令牌
   * @format string
   */
  access_token?: string;
  /**
   * access_token 过期时间（秒）
   * @format int64
   */
  expire_in?: number;
  /**
   * 刷新令牌
   * @format string
   */
  refresh_token?: string;
  /**
   * refresh_token 过期时间（秒）
   * @format int64
   */
  refresh_in?: number;
  /**
   * 用户ID
   * @format int64
   */
  user_id?: number;
  /**
   * 用户名
   * @format string
   */
  username?: string;
}

export interface GfEshopApiUserAdminV1UserListReq {
  /**
   * 页码
   * @format int
   */
  page?: number;
  /**
   * 每页条数
   * @format int
   */
  page_size?: number;
  /**
   * 搜索关键词（用户名/昵称/邮箱/手机号）
   * @format string
   */
  keyword?: string;
  /**
   * 状态：1-正常 0-禁用 2-冻结
   * @format *int
   */
  status?: number;
}

export interface GfEshopApiUserAdminV1UserListRes {
  /** @format []*v1.UserListItem */
  list?: GfEshopApiUserAdminV1UserListItem[];
  /** @format int */
  total?: number;
}

export interface GfEshopApiUserAdminV1UserListItem {
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户名
   * @format string
   */
  username?: string;
  /**
   * 昵称
   * @format string
   */
  nickname?: string;
  /**
   * 邮箱
   * @format string
   */
  email?: string;
  /**
   * 邮箱是否已验证
   * @format int
   */
  email_verified?: number;
  /**
   * 手机号
   * @format string
   */
  phone?: string;
  /**
   * 手机号是否已验证
   * @format int
   */
  phone_verified?: number;
  /**
   * 头像URL
   * @format string
   */
  avatar?: string;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 注册IP
   * @format string
   */
  register_ip?: string;
  /**
   * 注册来源
   * @format string
   */
  register_source?: string;
  /**
   * 最后登录IP
   * @format string
   */
  last_login_ip?: string;
  /**
   * 最后登录时间
   * @format *gtime.Time
   */
  last_login_at?: string;
  /**
   * 创建时间
   * @format *gtime.Time
   */
  created_at?: string;
}

export interface GfEshopApiInventoriesV1WarehousesListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
}

export interface GfEshopApiInventoriesV1WarehousesListRes {
  /** @format []*entity.Warehouses */
  list?: GfEshopInternalModelEntityWarehouses[];
  /** @format int */
  total?: number;
}

export interface GfEshopInternalModelEntityWarehouses {
  /**
   * 仓库ID
   * @format int64
   */
  id?: number;
  /**
   * 所属商家ID（0表示平台仓）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库名称
   * @format string
   */
  warehouse_name?: string;
  /**
   * 1-平台仓 2-商家仓 3-第三方仓
   * @format int
   */
  warehouse_type?: number;
  /**
   * 仓库编码
   * @format string
   */
  warehouse_code?: string;
  /**
   * 1-启用 2-禁用
   * @format int
   */
  status?: number;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  address?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1WarehousesCreateReq {
  /**
   * 仓库名称
   * @format string
   */
  warehouse_name: string;
  /**
   * 仓库类型
   * @format int
   */
  warehouse_type?: number;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  address?: string;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export interface GfEshopApiInventoriesV1WarehousesCreateRes {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiInventoriesV1WarehousesDeleteReq {
  /** @format int64 */
  id?: number;
}

export type GfEshopApiInventoriesV1WarehousesDeleteRes = object;

export interface GfEshopApiInventoriesV1WarehousesDetailReq {
  /** @format int64 */
  id?: number;
}

export interface GfEshopApiInventoriesV1WarehousesDetailRes {
  /**
   * 仓库ID
   * @format int64
   */
  id?: number;
  /**
   * 所属商家ID（0表示平台仓）
   * @format int64
   */
  merchant_id?: number;
  /**
   * 仓库名称
   * @format string
   */
  warehouse_name?: string;
  /**
   * 1-平台仓 2-商家仓 3-第三方仓
   * @format int
   */
  warehouse_type?: number;
  /**
   * 仓库编码
   * @format string
   */
  warehouse_code?: string;
  /**
   * 1-启用 2-禁用
   * @format int
   */
  status?: number;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  address?: string;
  /** @format *gtime.Time */
  created_at?: string;
  /** @format *gtime.Time */
  updated_at?: string;
  /** @format *gtime.Time */
  deleted_at?: string;
}

export interface GfEshopApiInventoriesV1WarehousesUpdateReq {
  /** @format int64 */
  id: number;
  /**
   * 仓库名称
   * @format string
   */
  warehouse_name?: string;
  /**
   * 仓库类型
   * @format int
   */
  warehouse_type?: number;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  address?: string;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type GfEshopApiInventoriesV1WarehousesUpdateRes = object;

export type GfEshopApiWsV1WsSessionReq = object;

export interface GfEshopApiWsV1WsSessionRes {
  /** @format bool */
  exists?: boolean;
  /** @format int64 */
  last_seq?: number;
  /** @format string */
  connected_at?: string;
  /** @format string */
  last_active_at?: string;
  /** @format int */
  reconnect_count?: number;
}

export type GfEshopApiWsV1WsStatsReq = object;

export interface GfEshopApiWsV1WsStatsRes {
  /** @format int */
  online_users?: number;
  /** @format int */
  connections?: number;
}

export type GfEshopApiHelloV1HelloReq = object;

/** @example "string" */
export type GfEshopApiHelloV1HelloRes = object;

/**
 * 值类型(1-文本 2-数值 3-颜色)
 * @format int
 */
export enum GfEshopApiAttributesV1AttributesCreateReqValueTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/**
 * 值类型(1-文本 2-数值 3-颜色)
 * @format int
 */
export enum GfEshopApiAttributesV1AttributesUpdateReqValueTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/**
 * 1-审核通过 3-审核拒绝
 * @format int
 */
export enum GfEshopApiMerchantQualificationsV1MerchantQualificationsAuditReqStatusEnum {
  Value1 = 1,
  Value3 = 3,
}

/**
 * 目标状态
 * @format string
 */
export enum GfEshopApiOrdersV1OrdersUpdateStatusReqStatusEnum {
  Paid = "paid",
  Cancelled = "cancelled",
  Shipped = "shipped",
  Delivered = "delivered",
  Completed = "completed",
}

/**
 * 状态
 * @format string
 */
export enum GfEshopApiPaymentsV1PaymentsCallbackReqStatusEnum {
  Success = "success",
  Failed = "failed",
}

/** @format int */
export enum GfEshopApiReviewsV1ReviewsAuditReqStatusEnum {
  Value1 = 1,
  Value2 = 2,
}

export type V1AddressesListData = GfEshopApiAddressV1AddressListRes;

export type V1AddressesCreateData = GfEshopApiAddressV1AddressCreateRes;

export type V1AddressesDefaultListData =
  GfEshopApiAddressV1AddressGetDefaultRes;

export type V1AddressesDeleteData = GfEshopApiAddressV1AddressDeleteRes;

export type V1AddressesDetailData = GfEshopApiAddressV1AddressDetailRes;

export interface V1AddressesUpdatePayload {
  /**
   * 地址标签
   * @format *string
   */
  tag?: string;
  /**
   * 市
   * @format *string
   */
  city?: string;
  /**
   * 详细地址
   * @format *string
   */
  detail?: string;
  /**
   * 是否默认地址
   * @format *int
   */
  is_default?: number;
  /**
   * 收货人姓名
   * @format *string
   */
  consignee?: string;
  /**
   * 联系电话
   * @format *string
   */
  phone?: string;
  /**
   * 国家
   * @format *string
   */
  country?: string;
  /**
   * 省
   * @format *string
   */
  province?: string;
  /**
   * 区/县
   * @format *string
   */
  district?: string;
  /**
   * 邮编
   * @format *string
   */
  zip_code?: string;
}

export type V1AddressesUpdateData = GfEshopApiAddressV1AddressUpdateRes;

export type V1AttributesListData = GfEshopApiAttributesV1AttributesListRes;

export type V1AttributesCreateData = GfEshopApiAttributesV1AttributesCreateRes;

export type V1AttributesSearchableListData =
  GfEshopApiAttributesV1AttributesListSearchableRes;

export type V1AttributesSkuSpecListData =
  GfEshopApiAttributesV1AttributesListSkuSpecRes;

export type V1AttributesDeleteData = GfEshopApiAttributesV1AttributesDeleteRes;

export type V1AttributesDetailData = GfEshopApiAttributesV1AttributesDetailRes;

/**
 * 值类型(1-文本 2-数值 3-颜色)
 * @format int
 */
export enum V1AttributesUpdatePayloadValueTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface V1AttributesUpdatePayload {
  /**
   * 值类型(1-文本 2-数值 3-颜色)
   * @format int
   */
  value_type?: V1AttributesUpdatePayloadValueTypeEnum;
  /**
   * 是否必填
   * @format int
   */
  required?: number;
  /**
   * 是否可搜索
   * @format int
   */
  searchable?: number;
  /**
   * 是否SKU规格
   * @format int
   */
  is_sku_spec?: number;
  /**
   * 属性名称
   * @format string
   */
  name?: string;
  /**
   * 所属类目ID
   * @format int64
   */
  category_id?: number;
  /**
   * 是否参与前台筛选
   * @format int
   */
  filterable?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type V1AttributesUpdateData = GfEshopApiAttributesV1AttributesUpdateRes;

export type V1BrandsListData = GfEshopApiBrandsV1BrandsListRes;

export type V1BrandsCreateData = GfEshopApiBrandsV1BrandsCreateRes;

export type V1BrandsDeleteData = GfEshopApiBrandsV1BrandsDeleteRes;

export type V1BrandsDetailData = GfEshopApiBrandsV1BrandsDetailRes;

export interface V1BrandsUpdatePayload {
  /**
   * 品牌名称
   * @format string
   */
  name?: string;
  /**
   * 英文名
   * @format string
   */
  english_name?: string;
  /**
   * 品牌Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 首字母
   * @format string
   */
  first_letter?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 品牌故事
   * @format string
   */
  description?: string;
}

export type V1BrandsUpdateData = GfEshopApiBrandsV1BrandsUpdateRes;

export type V1CartsListData = GfEshopApiCartsV1CartsGetRes;

export type V1CartsClearCreateData = GfEshopApiCartsV1CartsClearRes;

export type V1CartsItemsCreateData = GfEshopApiCartsV1CartsAddItemRes;

export type V1CartsItemsUpdateData = GfEshopApiCartsV1CartsUpdateItemRes;

export type V1CartsItemsDeleteData = GfEshopApiCartsV1CartsRemoveItemRes;

export type V1CategoriesListData = GfEshopApiCategoriesV1CategoryListRes;

export type V1CategoriesCreateData = GfEshopApiCategoriesV1CategoryCreateRes;

export type V1CategoriesAllListData = GfEshopApiCategoriesV1CategoryAllRes;

export type V1CategoriesLevelDetailData =
  GfEshopApiCategoriesV1CategoryLevelRes;

export type V1CategoriesNonrootListData =
  GfEshopApiCategoriesV1CategoryNonRootRes;

export type V1CategoriesRootListData = GfEshopApiCategoriesV1CategoryRootRes;

export type V1CategoriesTreeListData = GfEshopApiCategoriesV1CategoryTreeRes;

export type V1CategoriesDeleteData = GfEshopApiCategoriesV1CategoryDeleteRes;

export type V1CategoriesDetailData = GfEshopApiCategoriesV1CategoryDetailRes;

export interface V1CategoriesUpdatePayload {
  /**
   * 类目名称
   * @format string
   */
  name?: string;
  /**
   * 父级ID
   * @format int64
   */
  parent_id?: number;
  /**
   * 层级
   * @format int
   */
  level?: number;
  /**
   * 路径
   * @format string
   */
  path?: string;
  /**
   * 类目图标
   * @format string
   */
  icon_url?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type V1CategoriesUpdateData = GfEshopApiCategoriesV1CategoryUpdateRes;

export type V1CategoriesBrandsListData =
  GfEshopApiCategoryBrandsV1CategoryBrandListRes;

export interface V1CategoriesBrandsUpdatePayload {
  /** @format []int64 */
  brand_ids: number[];
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
}

export type V1CategoriesBrandsUpdateData =
  GfEshopApiCategoryBrandsV1CategoryBrandUpdateRes;

export type V1CategoriesChildrenListData =
  GfEshopApiCategoriesV1CategoryChildrenRes;

export type V1CouponsClaimCreateData = GfEshopApiMarketingV1CouponClaimRes;

export type V1CouponsMeListData = GfEshopApiMarketingV1CouponListRes;

export type V1CouponsUseCreateData = GfEshopApiMarketingV1CouponUseRes;

export type V1DashboardStatsListData = GfEshopApiDashboardV1DashboardStatsRes;

export type V1DepartmentsListData = GfEshopApiDepartmentsV1ListRes;

export type V1DepartmentsCreateData = GfEshopApiDepartmentsV1CreateRes;

export type V1DepartmentsAllListData = GfEshopApiDepartmentsV1AllRes;

export type V1DepartmentsTreeListData = GfEshopApiDepartmentsV1TreeRes;

export type V1DepartmentsDeleteData = GfEshopApiDepartmentsV1DeleteRes;

export type V1DepartmentsDetailData = GfEshopApiDepartmentsV1DetailRes;

export interface V1DepartmentsUpdatePayload {
  /**
   * 上级部门ID（0=根部门）
   * @format int64
   */
  parent_id?: number;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
  /**
   * 部门名称
   * @format string
   */
  name?: string;
}

export type V1DepartmentsUpdateData = GfEshopApiDepartmentsV1UpdateRes;

export type V1DepartmentsChildrenListData = GfEshopApiDepartmentsV1ChildrenRes;

export type V1FlashBuyCreateData = GfEshopApiMarketingV1FlashBuyRes;

export type V1FlashConfirmCreateData = GfEshopApiMarketingV1FlashConfirmRes;

export type V1InventoriesListData = GfEshopApiInventoriesV1InventoriesListRes;

export type V1InventoriesCreateData =
  GfEshopApiInventoriesV1InventoriesCreateRes;

export type V1InventoriesDeductCreateData =
  GfEshopApiInventoriesV1InventoriesDeductRes;

export type V1InventoriesLockCreateData =
  GfEshopApiInventoriesV1InventoriesLockRes;

export type V1InventoriesRestockCreateData =
  GfEshopApiInventoriesV1InventoriesRestockRes;

export type V1InventoriesStockListData =
  GfEshopApiInventoriesV1InventoriesGetStockRes;

export type V1InventoriesUnlockCreateData =
  GfEshopApiInventoriesV1InventoriesUnlockRes;

export type V1InventoriesDeleteData =
  GfEshopApiInventoriesV1InventoriesDeleteRes;

export type V1InventoriesDetailData =
  GfEshopApiInventoriesV1InventoriesDetailRes;

export interface V1InventoriesUpdatePayload {
  /**
   * 物理库存
   * @format int64
   */
  quantity?: number;
  /**
   * 预占库存
   * @format int64
   */
  reserved?: number;
  /**
   * 安全库存阈值
   * @format int64
   */
  threshold?: number;
  /**
   * 最大库存上限
   * @format int64
   */
  max_threshold?: number;
}

export type V1InventoriesUpdateData =
  GfEshopApiInventoriesV1InventoriesUpdateRes;

export type V1InventoryLogsListData =
  GfEshopApiInventoryLogsV1InventoryLogsListRes;

export type V1InventoryLogsDetailData =
  GfEshopApiInventoryLogsV1InventoryLogsDetailRes;

export type V1LevelRulesListData = GfEshopApiLevelRulesV1LevelRulesListRes;

export type V1LevelRulesCreateData = GfEshopApiLevelRulesV1LevelRulesCreateRes;

export type V1LevelRulesDeleteData = GfEshopApiLevelRulesV1LevelRulesDeleteRes;

export type V1LevelRulesDetailData = GfEshopApiLevelRulesV1LevelRulesDetailRes;

export interface V1LevelRulesUpdatePayload {
  /**
   * 排序
   * @format *int
   */
  sort_order?: number;
  /**
   * 状态
   * @format *int
   */
  status?: number;
  /**
   * 源等级ID
   * @format int64
   */
  from_level_id?: number;
  /**
   * 条件阈值
   * @format int64
   */
  condition_value?: number;
  /**
   * 规则名称
   * @format string
   */
  name?: string;
  /**
   * 规则类型
   * @format string
   */
  rule_type?: string;
  /**
   * 目标等级ID
   * @format int64
   */
  to_level_id?: number;
  /**
   * 条件类型
   * @format string
   */
  condition_type?: string;
  /**
   * 规则说明
   * @format string
   */
  description?: string;
}

export type V1LevelRulesUpdateData = GfEshopApiLevelRulesV1LevelRulesUpdateRes;

export type V1MerchantBalancesDetailData =
  GfEshopApiMerchantBalancesV1GetByMerchantRes;

export type V1MerchantBankAccountsListData =
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsListRes;

export type V1MerchantBankAccountsCreateData =
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsCreateRes;

export type V1MerchantBankAccountsDeleteData =
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDeleteRes;

export type V1MerchantBankAccountsDetailData =
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsDetailRes;

export interface V1MerchantBankAccountsUpdatePayload {
  /**
   * 银行账号
   * @format string
   */
  account_no?: string;
  /**
   * 1-对公账户 2-对私账户
   * @format int
   */
  account_type?: number;
  /**
   * 是否默认结算账户 0-否 1-是
   * @format int
   */
  is_default?: number;
  /**
   * 1-正常 2-禁用
   * @format int
   */
  status?: number;
  /**
   * 开户行
   * @format string
   */
  bank_name?: string;
  /**
   * 开户支行
   * @format string
   */
  bank_branch?: string;
  /**
   * 开户名
   * @format string
   */
  account_name?: string;
}

export type V1MerchantBankAccountsUpdateData =
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsUpdateRes;

export type V1MerchantContactsListData =
  GfEshopApiMerchantContactsV1MerchantContactsListRes;

export type V1MerchantContactsCreateData =
  GfEshopApiMerchantContactsV1MerchantContactsCreateRes;

export type V1MerchantContactsDeleteData =
  GfEshopApiMerchantContactsV1MerchantContactsDeleteRes;

export type V1MerchantContactsDetailData =
  GfEshopApiMerchantContactsV1MerchantContactsDetailRes;

export interface V1MerchantContactsUpdatePayload {
  /**
   * 联系人姓名
   * @format string
   */
  contact_name?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 联系人角色：finance-财务 legal-法人 operation-运营
   * @format string
   */
  contact_role?: string;
  /**
   * 是否主要联系人 0-否 1-是
   * @format int
   */
  is_primary?: number;
}

export type V1MerchantContactsUpdateData =
  GfEshopApiMerchantContactsV1MerchantContactsUpdateRes;

export type V1MerchantQualificationsListData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsListRes;

export type V1MerchantQualificationsCreateData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsCreateRes;

export type V1MerchantQualificationsDeleteData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsDeleteRes;

export type V1MerchantQualificationsDetailData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsDetailRes;

export interface V1MerchantQualificationsUpdatePayload {
  /**
   * 有效期
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 资质名称
   * @format string
   */
  qualification_name?: string;
  /**
   * 资质文件URL
   * @format string
   */
  file_url?: string;
}

export type V1MerchantQualificationsUpdateData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsUpdateRes;

/**
 * 1-审核通过 3-审核拒绝
 * @format int
 */
export enum V1MerchantQualificationsAuditUpdatePayloadStatusEnum {
  Value1 = 1,
  Value3 = 3,
}

export interface V1MerchantQualificationsAuditUpdatePayload {
  /**
   * 1-审核通过 3-审核拒绝
   * @format int
   */
  status: V1MerchantQualificationsAuditUpdatePayloadStatusEnum;
  /**
   * 审核备注
   * @format string
   */
  audit_remark?: string;
}

export type V1MerchantQualificationsAuditUpdateData =
  GfEshopApiMerchantQualificationsV1MerchantQualificationsAuditRes;

export type V1MerchantRolePermissionsListData =
  GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsListRes;

export type V1MerchantRolePermissionsCreateData =
  GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsCreateRes;

export type V1MerchantRolePermissionsDeleteData =
  GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsDeleteRes;

export interface V1MerchantRolePermissionsUpdatePayload {
  /**
   * 商家ID
   * @format int64
   */
  merchant_id?: number;
  /**
   * 权限标识列表
   * @format []string
   */
  permission_names?: string[];
}

export type V1MerchantRolePermissionsUpdateData =
  GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsUpdateRes;

export type V1MerchantRolesListData =
  GfEshopApiMerchantRolesV1MerchantRolesListRes;

export type V1MerchantRolesCreateData =
  GfEshopApiMerchantRolesV1MerchantRolesCreateRes;

export type V1MerchantRolesDeleteData =
  GfEshopApiMerchantRolesV1MerchantRolesDeleteRes;

export type V1MerchantRolesDetailData =
  GfEshopApiMerchantRolesV1MerchantRolesDetailRes;

export interface V1MerchantRolesUpdatePayload {
  /**
   * 角色名称标识
   * @format string
   */
  name?: string;
  /**
   * 角色显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 角色描述
   * @format string
   */
  description?: string;
  /**
   * builtin-系统预置 custom-商家自定义
   * @format string
   */
  role_type?: string;
  /**
   * 排序值
   * @format int
   */
  sort_order?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export type V1MerchantRolesUpdateData =
  GfEshopApiMerchantRolesV1MerchantRolesUpdateRes;

export type V1MerchantWithdrawalsListData =
  GfEshopApiMerchantWithdrawalsV1ListRes;

export type V1MerchantWithdrawalsCreateData =
  GfEshopApiMerchantWithdrawalsV1ApplyRes;

export type V1MerchantWithdrawalsDetailData =
  GfEshopApiMerchantWithdrawalsV1DetailRes;

export type V1MerchantWithdrawalsApproveUpdatePayload = object;

export type V1MerchantWithdrawalsApproveUpdateData =
  GfEshopApiMerchantWithdrawalsV1ApproveRes;

export interface V1MerchantWithdrawalsRejectUpdatePayload {
  /** @format string */
  audit_remark?: string;
}

export type V1MerchantWithdrawalsRejectUpdateData =
  GfEshopApiMerchantWithdrawalsV1RejectRes;

export type V1MerchantsListData = GfEshopApiMerchantsV1MerchantsListRes;

export type V1MerchantsCreateData = GfEshopApiMerchantsV1MerchantsCreateRes;

export type V1MerchantsDeleteData = GfEshopApiMerchantsV1MerchantsDeleteRes;

export type V1MerchantsDetailData = GfEshopApiMerchantsV1MerchantsDetailRes;

export interface V1MerchantsUpdatePayload {
  /**
   * 店铺Banner图
   * @format string
   */
  banner_url?: string;
  /**
   * 店铺简介
   * @format string
   */
  shop_description?: string;
  /**
   * 0-待审核 1-正常 2-冻结 3-已注销
   * @format int
   */
  status?: number;
  /**
   * 审核时间
   * @format *gtime.Time
   */
  audited_at?: string;
  /**
   * 冻结原因
   * @format string
   */
  frozen_reason?: string;
  /**
   * 0-待审核 1-审核通过 2-审核拒绝
   * @format int
   */
  audit_status?: number;
  /**
   * 审核拒绝原因
   * @format string
   */
  audit_reason?: string;
  /**
   * 合同到期时间
   * @format *gtime.Time
   */
  expire_at?: string;
  /**
   * 1-个人商家 2-企业商家 3-品牌直营
   * @format int
   */
  merchant_type?: number;
  /**
   * 商家等级 1-普通 2-银牌 3-金牌 4-钻石
   * @format int
   */
  merchant_level?: number;
  /**
   * 主要联系人
   * @format string
   */
  contact_person?: string;
  /**
   * 联系电话
   * @format string
   */
  contact_phone?: string;
  /**
   * 商家名称
   * @format string
   */
  merchant_name?: string;
  /**
   * 店铺Logo
   * @format string
   */
  logo_url?: string;
  /**
   * 平台抽佣比例（千分比）
   * @format int64
   */
  commission_rate?: number;
  /**
   * 结算周期 1-T+1 2-T+7 3-月结
   * @format int
   */
  settlement_cycle?: number;
  /**
   * 经营范围
   * @format string
   */
  business_scope?: string;
  /**
   * 经营年限
   * @format int
   */
  business_years?: number;
  /**
   * 联系邮箱
   * @format string
   */
  contact_email?: string;
}

export type V1MerchantsUpdateData = GfEshopApiMerchantsV1MerchantsUpdateRes;

export type V1NotificationListData =
  GfEshopApiNotificationV1NotificationListRes;

export type V1NotificationReadallUpdateData =
  GfEshopApiNotificationV1NotificationMarkAllAsReadRes;

export type V1NotificationSystemCreateData =
  GfEshopApiNotificationV1NotificationSendSystemRes;

export type V1NotificationTemplatesListData =
  GfEshopApiNotificationV1NotificationListTemplatesRes;

export type V1NotificationUnreadListData =
  GfEshopApiNotificationV1NotificationUnreadCountRes;

export type V1NotificationDeleteData =
  GfEshopApiNotificationV1NotificationDeleteRes;

export type V1NotificationReadUpdatePayload = object;

export type V1NotificationReadUpdateData =
  GfEshopApiNotificationV1NotificationMarkAsReadRes;

export type V1OrdersListData = GfEshopApiOrdersV1OrdersListRes;

export type V1OrdersCreateData = GfEshopApiOrdersV1OrdersCreateRes;

export type V1OrdersDetailData = GfEshopApiOrdersV1OrdersDetailRes;

/**
 * 目标状态
 * @format string
 */
export enum V1OrdersStatusUpdatePayloadStatusEnum {
  Paid = "paid",
  Cancelled = "cancelled",
  Shipped = "shipped",
  Delivered = "delivered",
  Completed = "completed",
}

export interface V1OrdersStatusUpdatePayload {
  /**
   * 目标状态
   * @format string
   */
  status: V1OrdersStatusUpdatePayloadStatusEnum;
  /**
   * 备注
   * @format string
   */
  note?: string;
}

export type V1OrdersStatusUpdateData = GfEshopApiOrdersV1OrdersUpdateStatusRes;

export type V1PaymentsListData = GfEshopApiPaymentsV1PaymentsGetRes;

export type V1PaymentsCreateData = GfEshopApiPaymentsV1PaymentsCreateRes;

export type V1PaymentsCallbackCreateData =
  GfEshopApiPaymentsV1PaymentsCallbackRes;

export type V1PaymentsRefundsListData = GfEshopApiPaymentsV1RefundsListRes;

export type V1PaymentsRefundsCreateData = GfEshopApiPaymentsV1RefundsCreateRes;

export type V1PaymentsRefundsDetailData = GfEshopApiPaymentsV1RefundsDetailRes;

export type V1PermissionsListData = GfEshopApiPermissionsV1PermissionListRes;

export type V1PermissionsCreateData =
  GfEshopApiPermissionsV1PermissionCreateRes;

export type V1PermissionsCheckCreateData =
  GfEshopApiPermissionsV1PermissionCheckRes;

export type V1PermissionsRolesDetailData =
  GfEshopApiPermissionsV1RolePermissionListRes;

export interface V1PermissionsRolesUpdatePayload {
  /** @format []int64 */
  permission_ids: number[];
}

export type V1PermissionsRolesUpdateData =
  GfEshopApiPermissionsV1RolePermissionUpdateRes;

export type V1PermissionsDeleteData =
  GfEshopApiPermissionsV1PermissionDeleteRes;

export type V1PermissionsDetailData =
  GfEshopApiPermissionsV1PermissionDetailRes;

export interface V1PermissionsUpdatePayload {
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 操作
   * @format string
   */
  action?: string;
  /**
   * 父级ID（0=根节点）
   * @format int64
   */
  parent_id?: number;
  /**
   * 分类
   * @format string
   */
  category?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 权限标识
   * @format string
   */
  name?: string;
  /**
   * 显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 资源
   * @format string
   */
  resource?: string;
}

export type V1PermissionsUpdateData =
  GfEshopApiPermissionsV1PermissionUpdateRes;

export type V1PointsRulesListData = GfEshopApiPointsRulesV1PointsRulesListRes;

export type V1PointsRulesCreateData =
  GfEshopApiPointsRulesV1PointsRulesCreateRes;

export type V1PointsRulesDeleteData =
  GfEshopApiPointsRulesV1PointsRulesDeleteRes;

export type V1PointsRulesDetailData =
  GfEshopApiPointsRulesV1PointsRulesDetailRes;

export interface V1PointsRulesUpdatePayload {
  /** @format string */
  rule_key?: string;
  /**
   * 整数值（如积分数量、天数）
   * @format *int
   */
  value_int?: number;
  /**
   * 字符串值（如配置json、文本）
   * @format string
   */
  value_string?: string;
  /** @format string */
  description?: string;
  /** @format *int */
  sort_order?: number;
  /** @format string */
  name?: string;
  /**
   * 小数值（如比例、倍数）
   * @format *float64
   */
  value_decimal?: number;
  /** @format *int */
  status?: number;
}

export type V1PointsRulesUpdateData =
  GfEshopApiPointsRulesV1PointsRulesUpdateRes;

export type V1ProductAttributesListData =
  GfEshopApiProductAttributesV1ProductAttributesListRes;

export type V1ProductAttributesCreateData =
  GfEshopApiProductAttributesV1ProductAttributesCreateRes;

export type V1ProductAttributesDeleteData =
  GfEshopApiProductAttributesV1ProductAttributesDeleteRes;

export type V1ProductVersionsListData =
  GfEshopApiProductVersionsV1ProductVersionsListRes;

export type V1ProductVersionsDetailData =
  GfEshopApiProductVersionsV1ProductVersionsDetailRes;

export type V1ProductsListData = GfEshopApiProductsV1ProductsListRes;

export type V1ProductsCreateData = GfEshopApiProductsV1ProductsCreateRes;

export type V1ProductsFullCreateData =
  GfEshopApiProductsV1ProductsCreateFullRes;

export type V1ProductsPureDetailData =
  GfEshopApiProductsV1ProductsDetailPureRes;

export type V1ProductsDeleteData = GfEshopApiProductsV1ProductsDeleteRes;

export type V1ProductsDetailData = GfEshopApiProductsV1ProductsDetailRes;

export interface V1ProductsUpdatePayload {
  /**
   * 更新人
   * @format string
   */
  updated_by?: string;
  /**
   * 类目ID
   * @format int64
   */
  category_id?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
  /**
   * 单位
   * @format string
   */
  unit?: string;
  /**
   * 附图JSON
   * @format string
   */
  images?: string;
  /**
   * 视频URL
   * @format string
   */
  video_url?: string;
  /**
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 商品名称
   * @format string
   */
  name?: string;
  /**
   * 副标题
   * @format string
   */
  subtitle?: string;
  /**
   * 主图
   * @format string
   */
  main_image?: string;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type V1ProductsUpdateData = GfEshopApiProductsV1ProductsUpdateRes;

export type V1ProductsDescriptionListData =
  GfEshopApiProductDescriptionsV1ProductDescriptionsDetailRes;

export interface V1ProductsDescriptionUpdatePayload {
  /**
   * 商品详情(富文本HTML)
   * @format string
   */
  description?: string;
  /**
   * 移动端详情
   * @format string
   */
  mobile_description?: string;
}

export type V1ProductsDescriptionUpdateData =
  GfEshopApiProductDescriptionsV1ProductDescriptionsSaveRes;

export type V1PromotionsListData = GfEshopApiMarketingV1PromotionListRes;

export type V1PromotionsCreateData = GfEshopApiMarketingV1PromotionCreateRes;

export type V1PromotionsDeleteData = GfEshopApiMarketingV1PromotionDeleteRes;

export type V1PromotionsDetailData = GfEshopApiMarketingV1PromotionDetailRes;

export interface V1PromotionsUpdatePayload {
  /** @format int */
  benefit_type?: number;
  /** @format int64 */
  benefit_value?: number;
  /** @format int */
  is_stackable?: number;
  /** @format string */
  promo_name?: string;
  /** @format int */
  total_quantity?: number;
  /** @format int */
  per_user_limit?: number;
  /** @format int */
  condition_type?: number;
  /** @format int64 */
  condition_value?: number;
  /** @format int */
  stack_priority?: number;
  /** @format string */
  start_time?: string;
  /** @format string */
  end_time?: string;
  /** @format int */
  status?: number;
  /** @format string */
  rule_name?: string;
}

export type V1PromotionsUpdateData = GfEshopApiMarketingV1PromotionUpdateRes;

export type V1PromotionsDetailListData =
  GfEshopApiMarketingV1PromotionFullDetailRes;

export type V1ReviewsListData = GfEshopApiReviewsV1ReviewsListRes;

export type V1ReviewsCreateData = GfEshopApiReviewsV1ReviewsCreateRes;

export type V1ReviewsDeleteData = GfEshopApiReviewsV1ReviewsDeleteRes;

export type V1ReviewsDetailData = GfEshopApiReviewsV1ReviewsDetailRes;

export interface V1ReviewsUpdatePayload {
  /** @format int */
  service_rating?: number;
  /** @format string */
  content?: string;
  /** @format int */
  is_anonymous?: number;
  /** @format int */
  overall_rating?: number;
  /** @format int */
  quality_rating?: number;
  /** @format int */
  logistics_rating?: number;
}

export type V1ReviewsUpdateData = GfEshopApiReviewsV1ReviewsUpdateRes;

/** @format int */
export enum V1ReviewsAuditUpdatePayloadStatusEnum {
  Value1 = 1,
  Value2 = 2,
}

export interface V1ReviewsAuditUpdatePayload {
  /** @format string */
  reject_reason?: string;
  /** @format int */
  status: V1ReviewsAuditUpdatePayloadStatusEnum;
}

export type V1ReviewsAuditUpdateData = GfEshopApiReviewsV1ReviewsAuditRes;

export type V1ReviewsAuditLogsListData =
  GfEshopApiReviewsV1ReviewsListAuditLogsRes;

export type V1ReviewsRepliesListData = GfEshopApiReviewsV1ReviewsListRepliesRes;

export interface V1ReviewsRepliesCreatePayload {
  /** @format string */
  content: string;
  /** @format int */
  reply_type?: number;
  /**
   * 父级回复ID（二级回复时传入）
   * @format int64
   */
  parent_id?: number;
}

export type V1ReviewsRepliesCreateData =
  GfEshopApiReviewsV1ReviewsCreateReplyRes;

export type V1ReviewsRepliesDeleteData =
  GfEshopApiReviewsV1ReviewsDeleteReplyRes;

export type V1RolesListData = GfEshopApiRolesV1RoleListRes;

export type V1RolesCreateData = GfEshopApiRolesV1RoleCreateRes;

export type V1RolesDeleteData = GfEshopApiRolesV1RoleDeleteRes;

export type V1RolesDetailData = GfEshopApiRolesV1RoleDetailRes;

export interface V1RolesUpdatePayload {
  /**
   * 角色名称
   * @format string
   */
  name?: string;
  /**
   * 显示名称
   * @format string
   */
  display_name?: string;
  /**
   * 描述
   * @format string
   */
  description?: string;
  /**
   * 类型
   * @format string
   */
  role_type?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 状态
   * @format int
   */
  status?: number;
}

export type V1RolesUpdateData = GfEshopApiRolesV1RoleUpdateRes;

export type V1SkusListData = GfEshopApiSkusV1SkusListRes;

export type V1SkusCreateData = GfEshopApiSkusV1SkusCreateRes;

export type V1SkusCodeDetailData = GfEshopApiSkusV1SkusGetByCodeRes;

export type V1SkusDeleteData = GfEshopApiSkusV1SkusDeleteRes;

export type V1SkusDetailData = GfEshopApiSkusV1SkusDetailRes;

export interface V1SkusUpdatePayload {
  /**
   * 成本价(分)
   * @format *int64
   */
  cost_price?: number;
  /**
   * 1-正常 0-禁用
   * @format *int
   */
  status?: number;
  /**
   * 重量(克)
   * @format *float64
   */
  weight?: number;
  /**
   * 宽(cm)
   * @format *float64
   */
  width?: number;
  /**
   * 高(cm)
   * @format *float64
   */
  height?: number;
  /**
   * 最大购买数量
   * @format *int
   */
  max_purchase_qty?: number;
  /**
   * 销售价(分)
   * @format *int64
   */
  price?: number;
  /**
   * SKU图
   * @format *string
   */
  image?: string;
  /**
   * 条码
   * @format *string
   */
  barcode?: string;
  /**
   * 体积(cm³)
   * @format *float64
   */
  volume?: number;
  /**
   * 长(cm)
   * @format *float64
   */
  length?: number;
  /**
   * 最少购买数量
   * @format *int
   */
  min_purchase_qty?: number;
  /**
   * 划线价(分)
   * @format *int64
   */
  market_price?: number;
}

export type V1SkusUpdateData = GfEshopApiSkusV1SkusUpdateRes;

export type V1StaffListData = GfEshopApiStaffV1StaffListRes;

export type V1StaffLoginCreateData = GfEshopApiStaffV1StaffLoginRes;

export type V1StaffLogoutCreateData = GfEshopApiStaffV1StaffLogoutRes;

export type V1StaffPermissionsListData = GfEshopApiStaffV1StaffPermissionsRes;

export type V1StaffProfileListData = GfEshopApiStaffV1StaffProfileRes;

export type V1StaffRefreshCreateData = GfEshopApiStaffV1StaffRefreshTokenRes;

export interface V1StaffRolesUpdatePayload {
  /**
   * 角色ID列表
   * @format []int64
   */
  role_ids: number[];
}

export type V1StaffRolesUpdateData = GfEshopApiStaffV1StaffAssignRolesRes;

export type V1UserListData = GfEshopApiUserV1UserProfileRes;

export type V1UserUpdateData = GfEshopApiUserV1UserUpdateInfoRes;

export type V1UserLevelsListData = GfEshopApiUserLevelsV1LevelsListRes;

export type V1UserLevelsCreateData = GfEshopApiUserLevelsV1LevelsCreateRes;

export type V1UserLevelsUserLevelListData = GfEshopApiUserLevelsV1UserLevelRes;

export type V1UserLevelsDeleteData = GfEshopApiUserLevelsV1LevelsDeleteRes;

export type V1UserLevelsDetailData = GfEshopApiUserLevelsV1LevelsDetailRes;

export interface V1UserLevelsUpdatePayload {
  /**
   * 等级名称
   * @format string
   */
  name?: string;
  /**
   * 最低累计积分
   * @format int64
   */
  min_points?: number;
  /**
   * 折扣率（千分比，1000=无折扣）
   * @format int64
   */
  discount_rate?: number;
  /**
   * 1-免运费
   * @format int
   */
  free_shipping?: number;
  /**
   * 扩展权益JSON
   * @format string
   */
  benefits?: string;
  /**
   * 排序
   * @format int
   */
  sort_order?: number;
  /**
   * 等级图标URL
   * @format string
   */
  icon?: string;
  /**
   * 等级数值
   * @format int
   */
  level?: number;
  /**
   * 消费积分倍数
   * @format float64
   */
  points_multiplier?: number;
  /**
   * 1-启用 0-禁用
   * @format int
   */
  status?: number;
}

export type V1UserLevelsUpdateData = GfEshopApiUserLevelsV1LevelsUpdateRes;

export type V1UserPointsListData = GfEshopApiUserPointsV1PointsListRes;

export type V1UserPointsAdjustCreateData =
  GfEshopApiUserPointsV1PointsAdjustRes;

export type V1UserPointsBalanceListData =
  GfEshopApiUserPointsV1PointsBalanceRes;

export type V1UserPointsTrendListData = GfEshopApiUserPointsV1PointsTrendRes;

export type V1UserAuthLoginCreateData = GfEshopApiUserAuthV1UserLoginRes;

export type V1UserAuthRefreshCreateData =
  GfEshopApiUserAuthV1UserRefreshTokenRes;

export type V1UserAuthRegisterCreateData = GfEshopApiUserAuthV1UserRegisterRes;

export type V1UsersListData = GfEshopApiUserAdminV1UserListRes;

export type V1WarehousesListData = GfEshopApiInventoriesV1WarehousesListRes;

export type V1WarehousesCreateData = GfEshopApiInventoriesV1WarehousesCreateRes;

export type V1WarehousesDeleteData = GfEshopApiInventoriesV1WarehousesDeleteRes;

export type V1WarehousesDetailData = GfEshopApiInventoriesV1WarehousesDetailRes;

export interface V1WarehousesUpdatePayload {
  /**
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 仓库名称
   * @format string
   */
  warehouse_name?: string;
  /**
   * 仓库类型
   * @format int
   */
  warehouse_type?: number;
  /**
   * 省
   * @format string
   */
  province?: string;
  /**
   * 市
   * @format string
   */
  city?: string;
  /**
   * 区
   * @format string
   */
  district?: string;
  /**
   * 详细地址
   * @format string
   */
  address?: string;
}

export type V1WarehousesUpdateData = GfEshopApiInventoriesV1WarehousesUpdateRes;

export type V1WsSessionListData = GfEshopApiWsV1WsSessionRes;

export type V1WsStatsListData = GfEshopApiWsV1WsStatsRes;

export type HelloListData = GfEshopApiHelloV1HelloRes;
