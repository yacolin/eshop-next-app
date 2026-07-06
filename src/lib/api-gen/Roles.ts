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
  GfEshopApiRolesV1RoleCreateReq,
  V1RolesCreateData,
  V1RolesDeleteData,
  V1RolesDetailData,
  V1RolesListData,
  V1RolesUpdateData,
  V1RolesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Roles<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name V1RolesList
   * @summary 角色列表
   * @request GET:/api/v1/roles
   */
  v1RolesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      name?: string;
      /** @format string */
      role_type?: string;
      /** @format int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1RolesListData, any>({
      path: `/api/v1/roles`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name V1RolesCreate
   * @summary 新增角色
   * @request POST:/api/v1/roles
   */
  v1RolesCreate = (
    data: GfEshopApiRolesV1RoleCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1RolesCreateData, any>({
      path: `/api/v1/roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name V1RolesDelete
   * @summary 删除角色
   * @request DELETE:/api/v1/roles/{id}
   */
  v1RolesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1RolesDeleteData, any>({
      path: `/api/v1/roles/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name V1RolesDetail
   * @summary 角色详情
   * @request GET:/api/v1/roles/{id}
   */
  v1RolesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1RolesDetailData, any>({
      path: `/api/v1/roles/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name V1RolesUpdate
   * @summary 更新角色
   * @request PUT:/api/v1/roles/{id}
   */
  v1RolesUpdate = (
    id: number,
    data: V1RolesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1RolesUpdateData, any>({
      path: `/api/v1/roles/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
