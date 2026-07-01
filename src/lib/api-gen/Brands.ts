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

import {
  ProductCreateBrandReq,
  ProductUpdateBrandReq,
  V1BrandsCreateData,
  V1BrandsDeleteData,
  V1BrandsDetailData,
  V1BrandsListData,
  V1BrandsUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brands<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags brands
   * @name V1BrandsList
   * @summary 品牌列表
   * @request GET:/api/v1/brands
   */
  v1BrandsList = (
    query?: {
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
      /** 品牌名称模糊搜索 */
      name?: string;
      /** 首字母筛选 */
      first_letter?: string;
      /** 状态 1-启用 0-禁用 */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1BrandsListData, any>({
      path: `/api/v1/brands`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags brands
   * @name V1BrandsCreate
   * @summary 创建品牌
   * @request POST:/api/v1/brands
   */
  v1BrandsCreate = (brand: ProductCreateBrandReq, params: RequestParams = {}) =>
    this.request<V1BrandsCreateData, any>({
      path: `/api/v1/brands`,
      method: "POST",
      body: brand,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags brands
   * @name V1BrandsDetail
   * @summary 获取品牌详情
   * @request GET:/api/v1/brands/{id}
   */
  v1BrandsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1BrandsDetailData, any>({
      path: `/api/v1/brands/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags brands
   * @name V1BrandsUpdate
   * @summary 更新品牌
   * @request PUT:/api/v1/brands/{id}
   */
  v1BrandsUpdate = (id: number, brand: ProductUpdateBrandReq, params: RequestParams = {}) =>
    this.request<V1BrandsUpdateData, any>({
      path: `/api/v1/brands/${id}`,
      method: "PUT",
      body: brand,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags brands
   * @name V1BrandsDelete
   * @summary 删除品牌
   * @request DELETE:/api/v1/brands/{id}
   */
  v1BrandsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1BrandsDeleteData, any>({
      path: `/api/v1/brands/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
