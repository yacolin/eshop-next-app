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
  GfEshopApiUserPointsV1PointsAdjustReq,
  V1UserPointsAdjustCreateData,
  V1UserPointsBalanceListData,
  V1UserPointsListData,
  V1UserPointsTrendListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserPoints<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserPoints
   * @name V1UserPointsList
   * @summary 积分流水列表
   * @request GET:/api/v1/user-points
   */
  v1UserPointsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      user_id?: string;
      /** @format string */
      source?: string;
      /** @format string */
      start_time?: string;
      /** @format string */
      end_time?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UserPointsListData, any>({
      path: `/api/v1/user-points`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserPoints
   * @name V1UserPointsAdjustCreate
   * @summary 手动调整积分
   * @request POST:/api/v1/user-points/adjust
   */
  v1UserPointsAdjustCreate = (
    data: GfEshopApiUserPointsV1PointsAdjustReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserPointsAdjustCreateData, any>({
      path: `/api/v1/user-points/adjust`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserPoints
   * @name V1UserPointsBalanceList
   * @summary 用户积分余额
   * @request GET:/api/v1/user-points/balance
   */
  v1UserPointsBalanceList = (
    query?: {
      /** @format string */
      user_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UserPointsBalanceListData, any>({
      path: `/api/v1/user-points/balance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserPoints
   * @name V1UserPointsTrendList
   * @summary 积分趋势
   * @request GET:/api/v1/user-points/trend
   */
  v1UserPointsTrendList = (
    query?: {
      /** @format string */
      user_id?: string;
      /** @format string */
      start_time?: string;
      /** @format string */
      end_time?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UserPointsTrendListData, any>({
      path: `/api/v1/user-points/trend`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
