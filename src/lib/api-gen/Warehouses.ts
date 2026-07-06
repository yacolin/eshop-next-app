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
  GfEshopApiInventoriesV1WarehousesCreateReq,
  V1WarehousesCreateData,
  V1WarehousesDeleteData,
  V1WarehousesDetailData,
  V1WarehousesListData,
  V1WarehousesUpdateData,
  V1WarehousesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Warehouses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Warehouses
   * @name V1WarehousesList
   * @summary 仓库列表
   * @request GET:/api/v1/warehouses
   */
  v1WarehousesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1WarehousesListData, any>({
      path: `/api/v1/warehouses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Warehouses
   * @name V1WarehousesCreate
   * @summary 新增仓库
   * @request POST:/api/v1/warehouses
   */
  v1WarehousesCreate = (
    data: GfEshopApiInventoriesV1WarehousesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1WarehousesCreateData, any>({
      path: `/api/v1/warehouses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Warehouses
   * @name V1WarehousesDelete
   * @summary 删除仓库
   * @request DELETE:/api/v1/warehouses/{id}
   */
  v1WarehousesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1WarehousesDeleteData, any>({
      path: `/api/v1/warehouses/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Warehouses
   * @name V1WarehousesDetail
   * @summary 仓库详情
   * @request GET:/api/v1/warehouses/{id}
   */
  v1WarehousesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1WarehousesDetailData, any>({
      path: `/api/v1/warehouses/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Warehouses
   * @name V1WarehousesUpdate
   * @summary 更新仓库
   * @request PUT:/api/v1/warehouses/{id}
   */
  v1WarehousesUpdate = (
    id: number,
    data: V1WarehousesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1WarehousesUpdateData, any>({
      path: `/api/v1/warehouses/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
