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

import { V1WsSessionListData, V1WsStatsListData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Ws<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags WS
   * @name V1WsSessionList
   * @summary 当前用户会话信息
   * @request GET:/api/v1/ws/session
   */
  v1WsSessionList = (params: RequestParams = {}) =>
    this.request<V1WsSessionListData, any>({
      path: `/api/v1/ws/session`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags WS
   * @name V1WsStatsList
   * @summary WebSocket 在线统计
   * @request GET:/api/v1/ws/stats
   */
  v1WsStatsList = (params: RequestParams = {}) =>
    this.request<V1WsStatsListData, any>({
      path: `/api/v1/ws/stats`,
      method: "GET",
      format: "json",
      ...params,
    });
}
