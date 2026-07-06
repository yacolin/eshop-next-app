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
  GfEshopApiPaymentsV1PaymentsCallbackReq,
  GfEshopApiPaymentsV1PaymentsCreateReq,
  GfEshopApiPaymentsV1RefundsCreateReq,
  V1PaymentsCallbackCreateData,
  V1PaymentsCreateData,
  V1PaymentsListData,
  V1PaymentsRefundsCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Payments<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Payments
   * @name V1PaymentsList
   * @summary 查询支付
   * @request GET:/api/v1/payments
   */
  v1PaymentsList = (
    query?: {
      /**
       * 支付单号
       * @format string
       */
      payment_no?: string;
      /**
       * 订单号
       * @format string
       */
      order_no?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PaymentsListData, any>({
      path: `/api/v1/payments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name V1PaymentsCreate
   * @summary 创建支付
   * @request POST:/api/v1/payments
   */
  v1PaymentsCreate = (
    data: GfEshopApiPaymentsV1PaymentsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PaymentsCreateData, any>({
      path: `/api/v1/payments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name V1PaymentsCallbackCreate
   * @summary 支付回调
   * @request POST:/api/v1/payments/callback
   */
  v1PaymentsCallbackCreate = (
    data: GfEshopApiPaymentsV1PaymentsCallbackReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PaymentsCallbackCreateData, any>({
      path: `/api/v1/payments/callback`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name V1PaymentsRefundsCreate
   * @summary 创建退款
   * @request POST:/api/v1/payments/refunds
   */
  v1PaymentsRefundsCreate = (
    data: GfEshopApiPaymentsV1RefundsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PaymentsRefundsCreateData, any>({
      path: `/api/v1/payments/refunds`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
