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
  GfEshopApiPermissionsV1PermissionCheckReq,
  GfEshopApiPermissionsV1PermissionCreateReq,
  V1PermissionsCheckCreateData,
  V1PermissionsCreateData,
  V1PermissionsDeleteData,
  V1PermissionsDetailData,
  V1PermissionsListData,
  V1PermissionsRolesDetailData,
  V1PermissionsRolesUpdateData,
  V1PermissionsRolesUpdatePayload,
  V1PermissionsUpdateData,
  V1PermissionsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Permissions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsList
   * @summary 权限列表
   * @request GET:/api/v1/permissions
   */
  v1PermissionsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      resource?: string;
      /** @format string */
      action?: string;
      /** @format string */
      category?: string;
      /** @format int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsListData, any>({
      path: `/api/v1/permissions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsCreate
   * @summary 新增权限
   * @request POST:/api/v1/permissions
   */
  v1PermissionsCreate = (
    data: GfEshopApiPermissionsV1PermissionCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsCreateData, any>({
      path: `/api/v1/permissions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsCheckCreate
   * @summary 校验当前用户权限
   * @request POST:/api/v1/permissions/check
   */
  v1PermissionsCheckCreate = (
    data: GfEshopApiPermissionsV1PermissionCheckReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsCheckCreateData, any>({
      path: `/api/v1/permissions/check`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsRolesDetail
   * @summary 角色权限列表
   * @request GET:/api/v1/permissions/roles/{role_id}
   */
  v1PermissionsRolesDetail = (roleId: number, params: RequestParams = {}) =>
    this.request<V1PermissionsRolesDetailData, any>({
      path: `/api/v1/permissions/roles/${roleId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsRolesUpdate
   * @summary 替换角色权限
   * @request PUT:/api/v1/permissions/roles/{role_id}
   */
  v1PermissionsRolesUpdate = (
    roleId: number,
    data: V1PermissionsRolesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsRolesUpdateData, any>({
      path: `/api/v1/permissions/roles/${roleId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsDelete
   * @summary 删除权限
   * @request DELETE:/api/v1/permissions/{id}
   */
  v1PermissionsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1PermissionsDeleteData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsDetail
   * @summary 权限详情
   * @request GET:/api/v1/permissions/{id}
   */
  v1PermissionsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1PermissionsDetailData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name V1PermissionsUpdate
   * @summary 更新权限
   * @request PUT:/api/v1/permissions/{id}
   */
  v1PermissionsUpdate = (
    id: number,
    data: V1PermissionsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsUpdateData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
