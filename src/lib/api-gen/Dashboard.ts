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

import { V1DashboardStatsListData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Dashboard<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags dashboard
   * @name V1DashboardStatsList
   * @summary 获取仪表盘汇总数据
   * @request GET:/api/v1/dashboard/stats
   */
  v1DashboardStatsList = (params: RequestParams = {}) =>
    this.request<V1DashboardStatsListData, any>({
      path: `/api/v1/dashboard/stats`,
      method: "GET",
      format: "json",
      ...params,
    });
}
