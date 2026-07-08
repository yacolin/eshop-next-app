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
  GfEshopApiMerchantsV1MerchantsCreateReq,
  V1MerchantsCreateData,
  V1MerchantsDeleteData,
  V1MerchantsDetailData,
  V1MerchantsListData,
  V1MerchantsUpdateData,
  V1MerchantsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Merchants<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Merchants
   * @name V1MerchantsList
   * @summary 商家列表
   * @request GET:/api/v1/merchants
   */
  v1MerchantsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantsListData, any>({
      path: `/api/v1/merchants`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Merchants
   * @name V1MerchantsCreate
   * @summary 新增商家
   * @request POST:/api/v1/merchants
   */
  v1MerchantsCreate = (
    data: GfEshopApiMerchantsV1MerchantsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantsCreateData, any>({
      path: `/api/v1/merchants`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Merchants
   * @name V1MerchantsDelete
   * @summary 删除商家
   * @request DELETE:/api/v1/merchants/{id}
   */
  v1MerchantsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantsDeleteData, any>({
      path: `/api/v1/merchants/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Merchants
   * @name V1MerchantsDetail
   * @summary 商家详情
   * @request GET:/api/v1/merchants/{id}
   */
  v1MerchantsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantsDetailData, any>({
      path: `/api/v1/merchants/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Merchants
   * @name V1MerchantsUpdate
   * @summary 更新商家
   * @request PUT:/api/v1/merchants/{id}
   */
  v1MerchantsUpdate = (
    id: number,
    data: V1MerchantsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantsUpdateData, any>({
      path: `/api/v1/merchants/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
