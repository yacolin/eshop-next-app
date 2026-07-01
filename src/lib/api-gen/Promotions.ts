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
  V1PromotionsDetailData,
  V1PromotionsDetailListData,
  V1PromotionsListData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Promotions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags promotions, frontend
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
      /** 状态 1-启用 2-禁用 3-已结束 */
      status?: number;
      /** 促销类型 1-满减 2-折扣 3-包邮 4-赠品 */
      promo_type?: number;
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
   * @tags promotions, frontend
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
   * @tags promotions, frontend
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
