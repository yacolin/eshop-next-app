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
  V1InventoryLogsDetailData,
  V1InventoryLogsListData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class InventoryLogs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags InventoryLogs
   * @name V1InventoryLogsList
   * @summary 库存流水列表
   * @request GET:/api/v1/inventory_logs
   */
  v1InventoryLogsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      sku_id?: number;
      /** @format string */
      change_type?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1InventoryLogsListData, any>({
      path: `/api/v1/inventory_logs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags InventoryLogs
   * @name V1InventoryLogsDetail
   * @summary 流水详情
   * @request GET:/api/v1/inventory_logs/{id}
   */
  v1InventoryLogsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1InventoryLogsDetailData, any>({
      path: `/api/v1/inventory_logs/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
