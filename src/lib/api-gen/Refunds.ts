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
  V1PaymentsRefundsDetailData,
  V1PaymentsRefundsListData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Refunds<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Refunds
   * @name V1PaymentsRefundsList
   * @summary 退款列表
   * @request GET:/api/v1/payments/refunds
   */
  v1PaymentsRefundsList = (
    query?: {
      /**
       * 页码
       * @format int
       */
      page?: number;
      /**
       * 每页条数
       * @format int
       */
      page_size?: number;
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
      /**
       * 退款单号
       * @format string
       */
      refund_no?: string;
      /**
       * 退款状态
       * @format string
       */
      status?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PaymentsRefundsListData, any>({
      path: `/api/v1/payments/refunds`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Refunds
   * @name V1PaymentsRefundsDetail
   * @summary 退款详情
   * @request GET:/api/v1/payments/refunds/{refund_no}
   */
  v1PaymentsRefundsDetail = (refundNo: string, params: RequestParams = {}) =>
    this.request<V1PaymentsRefundsDetailData, any>({
      path: `/api/v1/payments/refunds/${refundNo}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
