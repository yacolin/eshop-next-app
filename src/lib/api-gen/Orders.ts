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

import { TradeCreateOrderReq, V1OrdersCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Orders<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags orders, frontend
   * @name V1OrdersCreate
   * @summary 创建订单
   * @request POST:/api/v1/orders
   * @secure
   */
  v1OrdersCreate = (request: TradeCreateOrderReq, params: RequestParams = {}) =>
    this.request<V1OrdersCreateData, any>({
      path: `/api/v1/orders`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
