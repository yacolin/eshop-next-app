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
  DtoReconnectRequest,
  V1WsReconnectCreateData,
  V1WsSessionListData,
  V1WsStatsListData,
  V1WsTestPushCreateData,
  WsTestPushRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Websocket<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 将HTTP连接升级为WebSocket连接，支持断线重连时携带last_seq参数
   *
   * @tags websocket
   * @name V1WsList
   * @summary 升级WebSocket连接
   * @request GET:/api/v1/ws
   */
  v1WsList = (
    query: {
      /** JWT Token */
      token: string;
      /**
       * 最后收到的消息序列号（重连时使用）
       * @default 0
       */
      last_seq?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/api/v1/ws`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 客户端重连时提交lastSeq，服务端返回需要补发的消息
   *
   * @tags websocket
   * @name V1WsReconnectCreate
   * @summary WebSocket重连接口
   * @request POST:/api/v1/ws/reconnect
   */
  v1WsReconnectCreate = (request: DtoReconnectRequest, params: RequestParams = {}) =>
    this.request<V1WsReconnectCreateData, void>({
      path: `/api/v1/ws/reconnect`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取当前用户的WebSocket会话信息，包括最后收到的消息序列号等
   *
   * @tags websocket
   * @name V1WsSessionList
   * @summary 获取用户会话信息
   * @request GET:/api/v1/ws/session
   */
  v1WsSessionList = (params: RequestParams = {}) =>
    this.request<V1WsSessionListData, void>({
      path: `/api/v1/ws/session`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取当前WebSocket在线用户数和连接数
   *
   * @tags websocket
   * @name V1WsStatsList
   * @summary 获取在线统计
   * @request GET:/api/v1/ws/stats
   */
  v1WsStatsList = (params: RequestParams = {}) =>
    this.request<V1WsStatsListData, any>({
      path: `/api/v1/ws/stats`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 向WebSocket客户端推送一条测试消息，用于调试
   *
   * @tags websocket
   * @name V1WsTestPushCreate
   * @summary 推送WebSocket测试消息
   * @request POST:/api/v1/ws/test/push
   */
  v1WsTestPushCreate = (request: WsTestPushRequest, params: RequestParams = {}) =>
    this.request<V1WsTestPushCreateData, void>({
      path: `/api/v1/ws/test/push`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
