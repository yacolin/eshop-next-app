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
  GfEshopApiSkusV1SkusCreateReq,
  V1SkusCodeDetailData,
  V1SkusCreateData,
  V1SkusDeleteData,
  V1SkusDetailData,
  V1SkusListData,
  V1SkusUpdateData,
  V1SkusUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Skus<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Skus
   * @name V1SkusList
   * @summary SKU列表
   * @request GET:/api/v1/skus
   */
  v1SkusList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      product_id?: number;
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
   * @tags Skus
   * @name V1SkusCreate
   * @summary 新增SKU
   * @request POST:/api/v1/skus
   */
  v1SkusCreate = (
    data: GfEshopApiSkusV1SkusCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1SkusCreateData, any>({
      path: `/api/v1/skus`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Skus
   * @name V1SkusCodeDetail
   * @summary 根据编码查询SKU
   * @request GET:/api/v1/skus/code/{sku_code}
   */
  v1SkusCodeDetail = (skuCode: string, params: RequestParams = {}) =>
    this.request<V1SkusCodeDetailData, any>({
      path: `/api/v1/skus/code/${skuCode}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Skus
   * @name V1SkusDelete
   * @summary 删除SKU
   * @request DELETE:/api/v1/skus/{id}
   */
  v1SkusDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1SkusDeleteData, any>({
      path: `/api/v1/skus/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Skus
   * @name V1SkusDetail
   * @summary SKU详情
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
   * @tags Skus
   * @name V1SkusUpdate
   * @summary 更新SKU
   * @request PUT:/api/v1/skus/{id}
   */
  v1SkusUpdate = (
    id: number,
    data: V1SkusUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1SkusUpdateData, any>({
      path: `/api/v1/skus/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
