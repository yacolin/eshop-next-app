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
  MarketingCreatePromotionReq,
  MarketingUpdatePromotionReq,
  V1PromotionsCreateData,
  V1PromotionsDeleteData,
  V1PromotionsDetailData,
  V1PromotionsDetailListData,
  V1PromotionsListData,
  V1PromotionsUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Promotions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags promotions
   * @name V1PromotionsList
   * @summary 促销列表
   * @request GET:/api/v1/promotions
   */
  v1PromotionsList = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PromotionsListData, any>({
      path: `/api/v1/promotions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags promotions
   * @name V1PromotionsCreate
   * @summary 创建促销
   * @request POST:/api/v1/promotions
   * @secure
   */
  v1PromotionsCreate = (request: MarketingCreatePromotionReq, params: RequestParams = {}) =>
    this.request<V1PromotionsCreateData, any>({
      path: `/api/v1/promotions`,
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
   * @tags promotions
   * @name V1PromotionsDetail
   * @summary 获取促销
   * @request GET:/api/v1/promotions/{id}
   */
  v1PromotionsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1PromotionsDetailData, any>({
      path: `/api/v1/promotions/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags promotions
   * @name V1PromotionsUpdate
   * @summary 更新促销
   * @request PUT:/api/v1/promotions/{id}
   * @secure
   */
  v1PromotionsUpdate = (
    id: number,
    request: MarketingUpdatePromotionReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PromotionsUpdateData, any>({
      path: `/api/v1/promotions/${id}`,
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
   * @tags promotions
   * @name V1PromotionsDelete
   * @summary 删除促销
   * @request DELETE:/api/v1/promotions/{id}
   * @secure
   */
  v1PromotionsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1PromotionsDeleteData, any>({
      path: `/api/v1/promotions/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags promotions
   * @name V1PromotionsDetailList
   * @summary 获取促销详情（含规则、商品范围）
   * @request GET:/api/v1/promotions/{id}/detail
   */
  v1PromotionsDetailList = (id: number, params: RequestParams = {}) =>
    this.request<V1PromotionsDetailListData, any>({
      path: `/api/v1/promotions/${id}/detail`,
      method: "GET",
      format: "json",
      ...params,
    });
}
