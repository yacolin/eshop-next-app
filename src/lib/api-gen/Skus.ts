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
  ProductCreateSKUReq,
  ProductUpdateSKUReq,
  V1SkusCodeCodeListData,
  V1SkusCreateData,
  V1SkusDeleteData,
  V1SkusDetailData,
  V1SkusListData,
  V1SkusUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Skus<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusList
   * @summary 获取 SKU 列表
   * @request GET:/api/v1/skus
   */
  v1SkusList = (
    query?: {
      /** 产品 ID */
      product_id?: number;
      /** SKU 编码 */
      sku_code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1SkusListData, any>({
      path: `/api/v1/skus`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusCreate
   * @summary 创建 SKU
   * @request POST:/api/v1/skus
   * @secure
   */
  v1SkusCreate = (request: ProductCreateSKUReq, params: RequestParams = {}) =>
    this.request<V1SkusCreateData, any>({
      path: `/api/v1/skus`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusCodeCodeList
   * @summary 根据编码获取 SKU
   * @request GET:/api/v1/skus/code/:code
   */
  v1SkusCodeCodeList = (code: string, params: RequestParams = {}) =>
    this.request<V1SkusCodeCodeListData, any>({
      path: `/api/v1/skus/code/${code}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusDetail
   * @summary 获取 SKU 详情
   * @request GET:/api/v1/skus/{id}
   */
  v1SkusDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1SkusDetailData, any>({
      path: `/api/v1/skus/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusUpdate
   * @summary 更新 SKU
   * @request PUT:/api/v1/skus/{id}
   * @secure
   */
  v1SkusUpdate = (id: number, request: ProductUpdateSKUReq, params: RequestParams = {}) =>
    this.request<V1SkusUpdateData, any>({
      path: `/api/v1/skus/${id}`,
      method: "PUT",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags skus
   * @name V1SkusDelete
   * @summary 删除 SKU
   * @request DELETE:/api/v1/skus/{id}
   * @secure
   */
  v1SkusDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1SkusDeleteData, any>({
      path: `/api/v1/skus/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
