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
  GfEshopApiMarketingV1CouponClaimReq,
  GfEshopApiMarketingV1CouponUseReq,
  GfEshopApiMarketingV1FlashBuyReq,
  GfEshopApiMarketingV1FlashConfirmReq,
  GfEshopApiMarketingV1PromotionCreateReq,
  V1CouponsClaimCreateData,
  V1CouponsMeListData,
  V1CouponsUseCreateData,
  V1FlashBuyCreateData,
  V1FlashConfirmCreateData,
  V1PromotionsCreateData,
  V1PromotionsDeleteData,
  V1PromotionsDetailData,
  V1PromotionsDetailListData,
  V1PromotionsListData,
  V1PromotionsUpdateData,
  V1PromotionsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Marketing<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Marketing
   * @name V1CouponsClaimCreate
   * @summary 领取优惠券
   * @request POST:/api/v1/coupons/claim
   */
  v1CouponsClaimCreate = (
    data: GfEshopApiMarketingV1CouponClaimReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CouponsClaimCreateData, any>({
      path: `/api/v1/coupons/claim`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1CouponsMeList
   * @summary 我的优惠券列表
   * @request GET:/api/v1/coupons/me
   */
  v1CouponsMeList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CouponsMeListData, any>({
      path: `/api/v1/coupons/me`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1CouponsUseCreate
   * @summary 使用优惠券
   * @request POST:/api/v1/coupons/use
   */
  v1CouponsUseCreate = (
    data: GfEshopApiMarketingV1CouponUseReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CouponsUseCreateData, any>({
      path: `/api/v1/coupons/use`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1FlashBuyCreate
   * @summary 秒杀下单
   * @request POST:/api/v1/flash/buy
   */
  v1FlashBuyCreate = (
    data: GfEshopApiMarketingV1FlashBuyReq,
    params: RequestParams = {},
  ) =>
    this.request<V1FlashBuyCreateData, any>({
      path: `/api/v1/flash/buy`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1FlashConfirmCreate
   * @summary 确认秒杀订单
   * @request POST:/api/v1/flash/confirm
   */
  v1FlashConfirmCreate = (
    data: GfEshopApiMarketingV1FlashConfirmReq,
    params: RequestParams = {},
  ) =>
    this.request<V1FlashConfirmCreateData, any>({
      path: `/api/v1/flash/confirm`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1PromotionsList
   * @summary 促销列表
   * @request GET:/api/v1/promotions
   */
  v1PromotionsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int */
      status?: number;
      /** @format int */
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
   * @tags Marketing
   * @name V1PromotionsCreate
   * @summary 新增促销
   * @request POST:/api/v1/promotions
   */
  v1PromotionsCreate = (
    data: GfEshopApiMarketingV1PromotionCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PromotionsCreateData, any>({
      path: `/api/v1/promotions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1PromotionsDelete
   * @summary 删除促销
   * @request DELETE:/api/v1/promotions/{id}
   */
  v1PromotionsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1PromotionsDeleteData, any>({
      path: `/api/v1/promotions/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1PromotionsDetail
   * @summary 促销详情
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
   * @tags Marketing
   * @name V1PromotionsUpdate
   * @summary 更新促销
   * @request PUT:/api/v1/promotions/{id}
   */
  v1PromotionsUpdate = (
    id: number,
    data: V1PromotionsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1PromotionsUpdateData, any>({
      path: `/api/v1/promotions/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Marketing
   * @name V1PromotionsDetailList
   * @summary 促销详细信息(含规则和商品)
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
