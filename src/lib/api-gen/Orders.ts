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
  GfEshopApiOrdersV1OrdersCreateReq,
  V1OrdersCreateData,
  V1OrdersDetailData,
  V1OrdersListData,
  V1OrdersStatusUpdateData,
  V1OrdersStatusUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Orders<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Orders
   * @name V1OrdersList
   * @summary 订单列表
   * @request GET:/api/v1/orders
   */
  v1OrdersList = (
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
       * 用户ID
       * @format int64
       */
      user_id?: number;
      /**
       * 订单状态
       * @format string
       */
      status?: string;
      /**
       * 支付状态
       * @format string
       */
      payment_status?: string;
      /**
       * 订单号
       * @format string
       */
      order_no?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1OrdersListData, any>({
      path: `/api/v1/orders`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name V1OrdersCreate
   * @summary 创建订单
   * @request POST:/api/v1/orders
   */
  v1OrdersCreate = (
    data: GfEshopApiOrdersV1OrdersCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1OrdersCreateData, any>({
      path: `/api/v1/orders`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name V1OrdersDetail
   * @summary 订单详情
   * @request GET:/api/v1/orders/{order_no}
   */
  v1OrdersDetail = (orderNo: string, params: RequestParams = {}) =>
    this.request<V1OrdersDetailData, any>({
      path: `/api/v1/orders/${orderNo}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name V1OrdersStatusUpdate
   * @summary 更新订单状态
   * @request PUT:/api/v1/orders/{order_no}/status
   */
  v1OrdersStatusUpdate = (
    orderNo: string,
    data: V1OrdersStatusUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1OrdersStatusUpdateData, any>({
      path: `/api/v1/orders/${orderNo}/status`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
