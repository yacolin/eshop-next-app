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
   * 是否默认地址
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
   * 是否默认地址
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
   * 是否默认地址
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
   * 1-文本输入 2-单选 3-多选 4-数字
   * @format int
   */
  input_type?: number;
  /**
   * 可选值列表（如["A15","A16"]，仅单选/多选时使用）
   * @format string
   */
  values?: string;
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
   * 输入类型
   * @format int
   */
  input_type: GfEshopApiAttributesV1AttributesCreateReqInputTypeEnum;
  /**
   * 可选值列表JSON
   * @format string
   */
  values?: string;
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
   * 1-文本输入 2-单选 3-多选 4-数字
   * @format int
   */
  input_type?: number;
  /**
   * 可选值列表（如["A15","A16"]，仅单选/多选时使用）
   * @format string
   */
  values?: string;
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
   * 输入类型
   * @format int
   */
  input_type?: GfEshopApiAttributesV1AttributesUpdateReqInputTypeEnum;
  /**
   * 可选值列表JSON
   * @format string
   */
  values?: string;
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
  /** @format int */
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
  /** @format int */
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
  /** @format int */
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 可售库存（虚拟列，无需持久化）
   * @format int64
   */
  available?: number;
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
   * 变更类型：order_lock-下单预占 order_unlock-取消释放 order_dedut-支付扣减 inbound-入库 outbound-出库 return-退货入库 adjust-盘盈亏修正
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
   * 变更类型：order_lock-下单预占 order_unlock-取消释放 order_dedut-支付扣减 inbound-入库 outbound-出库 return-退货入库 adjust-盘盈亏修正
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

export interface GfEshopApiNotificationV1NotificationListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
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
  /** @format int */
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
  /** @format int */
  status?: number;
  /** @format int64 */
  price_min?: number;
  /** @format int64 */
  price_max?: number;
}

export interface GfEshopApiProductsV1ProductsListRes {
  /** @format []*entity.Products */
  list?: GfEshopInternalModelEntityProducts[];
  /** @format string */
  cursor?: string;
  /** @format bool */
  has_more?: boolean;
}

export interface GfEshopInternalModelEntityProducts {
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
   * SKU最低价（分）
   * @format int64
   */
  min_price?: number;
  /**
   * SKU最高价（分）
   * @format int64
   */
  max_price?: number;
  /**
   * 可售库存总和（SUM(quantity - reserved)）
   * @format int
   */
  total_stock?: number;
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
   * 规格JSON
   * @format string
   */
  spec?: string;
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
   * SKU最低价（分）
   * @format int64
   */
  min_price?: number;
  /**
   * SKU最高价（分）
   * @format int64
   */
  max_price?: number;
  /**
   * 可售库存总和（SUM(quantity - reserved)）
   * @format int
   */
  total_stock?: number;
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
   * SKU最低价（分）
   * @format int64
   */
  min_price?: number;
  /**
   * SKU最高价（分）
   * @format int64
   */
  max_price?: number;
  /**
   * 可售库存总和（SUM(quantity - reserved)）
   * @format int
   */
  total_stock?: number;
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
   * 规格JSON（如{"颜色":"红色","内存":"256G"}）
   * @format string
   */
  spec?: string;
  /**
   * 规格MD5签名（用于快速匹配，由应用层计算）
   * @format string
   */
  spec_signature?: string;
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

export interface GfEshopApiRolesV1RoleListReq {
  /** @format int */
  page?: number;
  /** @format int */
  page_size?: number;
  /** @format string */
  name?: string;
  /** @format string */
  role_type?: string;
  /** @format int */
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
   * 规格JSON（如{"颜色":"红色","内存":"256G"}）
   * @format string
   */
  spec?: string;
  /**
   * 规格MD5签名（用于快速匹配，由应用层计算）
   * @format string
   */
  spec_signature?: string;
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
   * 规格JSON
   * @format string
   */
  spec: string;
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
   * 规格JSON（如{"颜色":"红色","内存":"256G"}）
   * @format string
   */
  spec?: string;
  /**
   * 规格MD5签名（用于快速匹配，由应用层计算）
   * @format string
   */
  spec_signature?: string;
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
   * 规格JSON（如{"颜色":"红色","内存":"256G"}）
   * @format string
   */
  spec?: string;
  /**
   * 规格MD5签名（用于快速匹配，由应用层计算）
   * @format string
   */
  spec_signature?: string;
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
 * 输入类型
 * @format int
 */
export enum GfEshopApiAttributesV1AttributesCreateReqInputTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/**
 * 输入类型
 * @format int
 */
export enum GfEshopApiAttributesV1AttributesUpdateReqInputTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
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

export type V1AddressesListData = GfEshopApiAddressV1AddressListRes;

export type V1AddressesCreateData = GfEshopApiAddressV1AddressCreateRes;

export type V1AddressesDefaultListData =
  GfEshopApiAddressV1AddressGetDefaultRes;

export type V1AddressesDeleteData = GfEshopApiAddressV1AddressDeleteRes;

export type V1AddressesDetailData = GfEshopApiAddressV1AddressDetailRes;

export interface V1AddressesUpdatePayload {
  /**
   * 收货人姓名
   * @format *string
   */
  consignee?: string;
  /**
   * 国家
   * @format *string
   */
  country?: string;
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
   * 联系电话
   * @format *string
   */
  phone?: string;
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
 * 输入类型
 * @format int
 */
export enum V1AttributesUpdatePayloadInputTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface V1AttributesUpdatePayload {
  /**
   * 所属类目ID
   * @format int64
   */
  category_id?: number;
  /**
   * 输入类型
   * @format int
   */
  input_type?: V1AttributesUpdatePayloadInputTypeEnum;
  /**
   * 可选值列表JSON
   * @format string
   */
  values?: string;
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
   * 属性名称
   * @format string
   */
  name?: string;
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

export type V1DashboardStatsListData = GfEshopApiDashboardV1DashboardStatsRes;

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
   * 状态
   * @format int
   */
  status?: number;
  /**
   * 资源
   * @format string
   */
  resource?: string;
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
   * 权限标识
   * @format string
   */
  name?: string;
  /**
   * 显示名称
   * @format string
   */
  display_name?: string;
}

export type V1PermissionsUpdateData =
  GfEshopApiPermissionsV1PermissionUpdateRes;

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
   * 商品名称
   * @format string
   */
  name?: string;
  /**
   * 品牌ID
   * @format int64
   */
  brand_id?: number;
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
   * 状态
   * @format int
   */
  status?: number;
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
   * 排序权重
   * @format int
   */
  sort_order?: number;
  /**
   * 更新人
   * @format string
   */
  updated_by?: string;
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
   * 划线价(分)
   * @format *int64
   */
  market_price?: number;
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
  /**
   * 销售价(分)
   * @format *int64
   */
  price?: number;
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
}

export type V1SkusUpdateData = GfEshopApiSkusV1SkusUpdateRes;

export type V1StaffLoginCreateData = GfEshopApiStaffV1StaffLoginRes;

export type V1StaffLogoutCreateData = GfEshopApiStaffV1StaffLogoutRes;

export type V1StaffPermissionsListData = GfEshopApiStaffV1StaffPermissionsRes;

export type V1StaffProfileListData = GfEshopApiStaffV1StaffProfileRes;

export type V1StaffRefreshCreateData = GfEshopApiStaffV1StaffRefreshTokenRes;

export type V1UserListData = GfEshopApiUserV1UserProfileRes;

export type V1UserUpdateData = GfEshopApiUserV1UserUpdateInfoRes;

export type V1UserAuthLoginCreateData = GfEshopApiUserAuthV1UserLoginRes;

export type V1UserAuthRefreshCreateData =
  GfEshopApiUserAuthV1UserRefreshTokenRes;

export type V1UserAuthRegisterCreateData = GfEshopApiUserAuthV1UserRegisterRes;

export type V1WarehousesListData = GfEshopApiInventoriesV1WarehousesListRes;

export type V1WarehousesCreateData = GfEshopApiInventoriesV1WarehousesCreateRes;

export type V1WarehousesDeleteData = GfEshopApiInventoriesV1WarehousesDeleteRes;

export type V1WarehousesDetailData = GfEshopApiInventoriesV1WarehousesDetailRes;

export interface V1WarehousesUpdatePayload {
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
}

export type V1WarehousesUpdateData = GfEshopApiInventoriesV1WarehousesUpdateRes;

export type V1WsSessionListData = GfEshopApiWsV1WsSessionRes;

export type V1WsStatsListData = GfEshopApiWsV1WsStatsRes;

export type HelloListData = GfEshopApiHelloV1HelloRes;
