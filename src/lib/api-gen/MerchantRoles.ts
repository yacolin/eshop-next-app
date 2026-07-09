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
  GfEshopApiMerchantRolesV1MerchantRolesCreateReq,
  V1MerchantRolesCreateData,
  V1MerchantRolesDeleteData,
  V1MerchantRolesDetailData,
  V1MerchantRolesListData,
  V1MerchantRolesUpdateData,
  V1MerchantRolesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantRoles<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantRoles
   * @name V1MerchantRolesList
   * @summary 商家角色列表
   * @request GET:/api/v1/merchant-roles
   */
  v1MerchantRolesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /**
       * 商家ID，可选筛选
       * @format int64
       */
      merchant_id?: number;
      /**
       * 按角色名称模糊搜索
       * @format string
       */
      name?: string;
      /**
       * 按状态筛选
       * @format *int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolesListData, any>({
      path: `/api/v1/merchant-roles`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRoles
   * @name V1MerchantRolesCreate
   * @summary 新增角色
   * @request POST:/api/v1/merchant-roles
   */
  v1MerchantRolesCreate = (
    data: GfEshopApiMerchantRolesV1MerchantRolesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolesCreateData, any>({
      path: `/api/v1/merchant-roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRoles
   * @name V1MerchantRolesDelete
   * @summary 删除角色
   * @request DELETE:/api/v1/merchant-roles/{id}
   */
  v1MerchantRolesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantRolesDeleteData, any>({
      path: `/api/v1/merchant-roles/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRoles
   * @name V1MerchantRolesDetail
   * @summary 角色详情
   * @request GET:/api/v1/merchant-roles/{id}
   */
  v1MerchantRolesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantRolesDetailData, any>({
      path: `/api/v1/merchant-roles/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRoles
   * @name V1MerchantRolesUpdate
   * @summary 更新角色
   * @request PUT:/api/v1/merchant-roles/{id}
   */
  v1MerchantRolesUpdate = (
    id: number,
    data: V1MerchantRolesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolesUpdateData, any>({
      path: `/api/v1/merchant-roles/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
