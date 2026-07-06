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
  GfEshopApiInventoriesV1InventoriesCreateReq,
  GfEshopApiInventoriesV1InventoriesDeductReq,
  GfEshopApiInventoriesV1InventoriesLockReq,
  GfEshopApiInventoriesV1InventoriesRestockReq,
  GfEshopApiInventoriesV1InventoriesUnlockReq,
  V1InventoriesCreateData,
  V1InventoriesDeductCreateData,
  V1InventoriesDeleteData,
  V1InventoriesDetailData,
  V1InventoriesListData,
  V1InventoriesLockCreateData,
  V1InventoriesRestockCreateData,
  V1InventoriesStockListData,
  V1InventoriesUnlockCreateData,
  V1InventoriesUpdateData,
  V1InventoriesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Inventories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesList
   * @summary 库存列表
   * @request GET:/api/v1/inventories
   */
  v1InventoriesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      sku_id?: number;
      /** @format int64 */
      warehouse_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesListData, any>({
      path: `/api/v1/inventories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesCreate
   * @summary 新增库存记录
   * @request POST:/api/v1/inventories
   */
  v1InventoriesCreate = (
    data: GfEshopApiInventoriesV1InventoriesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesCreateData, any>({
      path: `/api/v1/inventories`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesDeductCreate
   * @summary 支付扣减库存
   * @request POST:/api/v1/inventories/deduct
   */
  v1InventoriesDeductCreate = (
    data: GfEshopApiInventoriesV1InventoriesDeductReq,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesDeductCreateData, any>({
      path: `/api/v1/inventories/deduct`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesLockCreate
   * @summary 下单预占库存
   * @request POST:/api/v1/inventories/lock
   */
  v1InventoriesLockCreate = (
    data: GfEshopApiInventoriesV1InventoriesLockReq,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesLockCreateData, any>({
      path: `/api/v1/inventories/lock`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesRestockCreate
   * @summary 入库/补货
   * @request POST:/api/v1/inventories/restock
   */
  v1InventoriesRestockCreate = (
    data: GfEshopApiInventoriesV1InventoriesRestockReq,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesRestockCreateData, any>({
      path: `/api/v1/inventories/restock`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesStockList
   * @summary 查询库存(按SKU)
   * @request GET:/api/v1/inventories/stock
   */
  v1InventoriesStockList = (
    query: {
      /**
       * SKU ID
       * @format int64
       */
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
   * @tags Inventories
   * @name V1InventoriesUnlockCreate
   * @summary 取消释放预占库存
   * @request POST:/api/v1/inventories/unlock
   */
  v1InventoriesUnlockCreate = (
    data: GfEshopApiInventoriesV1InventoriesUnlockReq,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesUnlockCreateData, any>({
      path: `/api/v1/inventories/unlock`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesDelete
   * @summary 删除库存记录
   * @request DELETE:/api/v1/inventories/{id}
   */
  v1InventoriesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1InventoriesDeleteData, any>({
      path: `/api/v1/inventories/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesDetail
   * @summary 库存详情
   * @request GET:/api/v1/inventories/{id}
   */
  v1InventoriesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1InventoriesDetailData, any>({
      path: `/api/v1/inventories/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Inventories
   * @name V1InventoriesUpdate
   * @summary 更新库存
   * @request PUT:/api/v1/inventories/{id}
   */
  v1InventoriesUpdate = (
    id: number,
    data: V1InventoriesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1InventoriesUpdateData, any>({
      path: `/api/v1/inventories/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
