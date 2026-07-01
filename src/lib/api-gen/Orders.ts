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
  TradeCreateOrderReq,
  TradeUpdateOrderStatusReq,
  V1OrdersCreateData,
  V1OrdersDetailData,
  V1OrdersListData,
  V1OrdersStatusUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Orders<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags orders
   * @name V1OrdersList
   * @summary 订单列表
   * @request GET:/api/v1/orders
   * @secure
   */
  v1OrdersList = (
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
    this.request<V1OrdersListData, any>({
      path: `/api/v1/orders`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags orders
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
  /**
   * No description
   *
   * @tags orders
   * @name V1OrdersDetail
   * @summary 根据订单号查询
   * @request GET:/api/v1/orders/{order_no}
   * @secure
   */
  v1OrdersDetail = (orderNo: string, params: RequestParams = {}) =>
    this.request<V1OrdersDetailData, any>({
      path: `/api/v1/orders/${orderNo}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags orders
   * @name V1OrdersStatusUpdate
   * @summary 更新订单状态
   * @request PUT:/api/v1/orders/{order_no}/status
   * @secure
   */
  v1OrdersStatusUpdate = (
    orderNo: string,
    request: TradeUpdateOrderStatusReq,
    params: RequestParams = {},
  ) =>
    this.request<V1OrdersStatusUpdateData, any>({
      path: `/api/v1/orders/${orderNo}/status`,
      method: "PUT",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
