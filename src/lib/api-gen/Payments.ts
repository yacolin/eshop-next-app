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
  TradeCreatePaymentReq,
  TradeCreateRefundReq,
  TradePaymentCallbackReq,
  V1PaymentsCallbackCreateData,
  V1PaymentsCreateData,
  V1PaymentsDetailData,
  V1PaymentsRefundCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Payments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags payments
   * @name V1PaymentsCreate
   * @summary 创建支付
   * @request POST:/api/v1/payments
   * @secure
   */
  v1PaymentsCreate = (request: TradeCreatePaymentReq, params: RequestParams = {}) =>
    this.request<V1PaymentsCreateData, any>({
      path: `/api/v1/payments`,
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
   * @tags payments
   * @name V1PaymentsCallbackCreate
   * @summary 支付回调
   * @request POST:/api/v1/payments/callback
   */
  v1PaymentsCallbackCreate = (request: TradePaymentCallbackReq, params: RequestParams = {}) =>
    this.request<V1PaymentsCallbackCreateData, any>({
      path: `/api/v1/payments/callback`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags payments
   * @name V1PaymentsRefundCreate
   * @summary 创建退款
   * @request POST:/api/v1/payments/refund
   * @secure
   */
  v1PaymentsRefundCreate = (request: TradeCreateRefundReq, params: RequestParams = {}) =>
    this.request<V1PaymentsRefundCreateData, any>({
      path: `/api/v1/payments/refund`,
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
   * @tags payments
   * @name V1PaymentsDetail
   * @summary 查询支付
   * @request GET:/api/v1/payments/{id}
   */
  v1PaymentsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1PaymentsDetailData, any>({
      path: `/api/v1/payments/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
