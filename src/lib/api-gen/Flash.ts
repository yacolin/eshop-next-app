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
  MarketingFlashBuyReq,
  MarketingFlashConfirmReq,
  V1FlashBuyCreateData,
  V1FlashConfirmCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Flash<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags flash
   * @name V1FlashBuyCreate
   * @summary 秒杀抢购
   * @request POST:/api/v1/flash/buy
   * @secure
   */
  v1FlashBuyCreate = (request: MarketingFlashBuyReq, params: RequestParams = {}) =>
    this.request<V1FlashBuyCreateData, any>({
      path: `/api/v1/flash/buy`,
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
   * @tags flash
   * @name V1FlashConfirmCreate
   * @summary 确认秒杀订单
   * @request POST:/api/v1/flash/confirm
   * @secure
   */
  v1FlashConfirmCreate = (request: MarketingFlashConfirmReq, params: RequestParams = {}) =>
    this.request<V1FlashConfirmCreateData, any>({
      path: `/api/v1/flash/confirm`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
