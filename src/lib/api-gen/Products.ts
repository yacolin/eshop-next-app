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
  GfEshopApiProductsV1ProductsCreateFullReq,
  GfEshopApiProductsV1ProductsCreateReq,
  V1ProductsCreateData,
  V1ProductsDeleteData,
  V1ProductsDetailData,
  V1ProductsFullCreateData,
  V1ProductsListData,
  V1ProductsPureDetailData,
  V1ProductsUpdateData,
  V1ProductsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Products<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsList
   * @summary 商品列表(游标分页)
   * @request GET:/api/v1/products
   */
  v1ProductsList = (
    query?: {
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
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsListData, any>({
      path: `/api/v1/products`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsCreate
   * @summary 新增商品
   * @request POST:/api/v1/products
   */
  v1ProductsCreate = (
    data: GfEshopApiProductsV1ProductsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsCreateData, any>({
      path: `/api/v1/products`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsFullCreate
   * @summary 创建商品（含SKU/属性/描述）
   * @request POST:/api/v1/products/full
   */
  v1ProductsFullCreate = (
    data: GfEshopApiProductsV1ProductsCreateFullReq,
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsFullCreateData, any>({
      path: `/api/v1/products/full`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsPureDetail
   * @summary 商品详情(纯实体,不含聚合)
   * @request GET:/api/v1/products/pure/{id}
   */
  v1ProductsPureDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductsPureDetailData, any>({
      path: `/api/v1/products/pure/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsDelete
   * @summary 删除商品
   * @request DELETE:/api/v1/products/{id}
   */
  v1ProductsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductsDeleteData, any>({
      path: `/api/v1/products/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsDetail
   * @summary 商品详情
   * @request GET:/api/v1/products/{id}
   */
  v1ProductsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductsDetailData, any>({
      path: `/api/v1/products/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name V1ProductsUpdate
   * @summary 更新商品
   * @request PUT:/api/v1/products/{id}
   */
  v1ProductsUpdate = (
    id: number,
    data: V1ProductsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsUpdateData, any>({
      path: `/api/v1/products/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
