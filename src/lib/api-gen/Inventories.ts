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
  InventoryDeductStockReq,
  InventoryLockStockReq,
  InventoryRestockReq,
  InventoryUnlockStockReq,
  V1InventoriesDeductCreateData,
  V1InventoriesLockCreateData,
  V1InventoriesLogsListData,
  V1InventoriesRestockCreateData,
  V1InventoriesStockListData,
  V1InventoriesUnlockCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Inventories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesDeductCreate
   * @summary 支付扣减库存
   * @request POST:/api/v1/inventories/deduct
   */
  v1InventoriesDeductCreate = (req: InventoryDeductStockReq, params: RequestParams = {}) =>
    this.request<V1InventoriesDeductCreateData, any>({
      path: `/api/v1/inventories/deduct`,
      method: "POST",
      body: req,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesLockCreate
   * @summary 下单预占库存
   * @request POST:/api/v1/inventories/lock
   */
  v1InventoriesLockCreate = (req: InventoryLockStockReq, params: RequestParams = {}) =>
    this.request<V1InventoriesLockCreateData, any>({
      path: `/api/v1/inventories/lock`,
      method: "POST",
      body: req,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesLogsList
   * @summary 查询库存变更流水
   * @request GET:/api/v1/inventories/logs
   */
  v1InventoriesLogsList = (
    query: {
      /** SKU ID */
      sku_id: number;
      /** 变更类型 */
      change_type?: string;
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 20
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesLogsListData, any>({
      path: `/api/v1/inventories/logs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesRestockCreate
   * @summary 入库/补货
   * @request POST:/api/v1/inventories/restock
   */
  v1InventoriesRestockCreate = (req: InventoryRestockReq, params: RequestParams = {}) =>
    this.request<V1InventoriesRestockCreateData, any>({
      path: `/api/v1/inventories/restock`,
      method: "POST",
      body: req,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesStockList
   * @summary 查询库存
   * @request GET:/api/v1/inventories/stock
   */
  v1InventoriesStockList = (
    query: {
      /** SKU ID */
      sku_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesStockListData, any>({
      path: `/api/v1/inventories/stock`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inventories
   * @name V1InventoriesUnlockCreate
   * @summary 取消释放库存
   * @request POST:/api/v1/inventories/unlock
   */
  v1InventoriesUnlockCreate = (req: InventoryUnlockStockReq, params: RequestParams = {}) =>
    this.request<V1InventoriesUnlockCreateData, any>({
      path: `/api/v1/inventories/unlock`,
      method: "POST",
      body: req,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
