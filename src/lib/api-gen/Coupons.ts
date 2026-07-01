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
  MarketingClaimCouponReq,
  MarketingUseCouponReq,
  V1CouponsClaimCreateData,
  V1CouponsMeListData,
  V1CouponsUseCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Coupons<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags coupons
   * @name V1CouponsClaimCreate
   * @summary 领取优惠券
   * @request POST:/api/v1/coupons/claim
   * @secure
   */
  v1CouponsClaimCreate = (request: MarketingClaimCouponReq, params: RequestParams = {}) =>
    this.request<V1CouponsClaimCreateData, any>({
      path: `/api/v1/coupons/claim`,
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
   * @tags coupons
   * @name V1CouponsMeList
   * @summary 用户优惠券列表
   * @request GET:/api/v1/coupons/me
   * @secure
   */
  v1CouponsMeList = (
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
    this.request<V1CouponsMeListData, any>({
      path: `/api/v1/coupons/me`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags coupons
   * @name V1CouponsUseCreate
   * @summary 使用优惠券
   * @request POST:/api/v1/coupons/use
   * @secure
   */
  v1CouponsUseCreate = (request: MarketingUseCouponReq, params: RequestParams = {}) =>
    this.request<V1CouponsUseCreateData, any>({
      path: `/api/v1/coupons/use`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
