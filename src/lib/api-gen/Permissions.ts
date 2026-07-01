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
  UserAssignPermissionsReq,
  UserCheckPermissionsReq,
  UserCreatePermissionReq,
  UserUpdatePermissionReq,
  V1PermissionsCheckCreateData,
  V1PermissionsCreateData,
  V1PermissionsDeleteData,
  V1PermissionsDetailData,
  V1PermissionsListData,
  V1PermissionsRolesCreateData,
  V1PermissionsRolesDeleteData,
  V1PermissionsRolesDetailData,
  V1PermissionsUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Permissions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsList
   * @summary 权限列表
   * @request GET:/api/v1/permissions
   * @secure
   */
  v1PermissionsList = (
    query?: {
      category?: string;
      /**
       * 页码，最小 1
       * @min 1
       */
      page?: number;
      resource?: string;
      role_id?: number;
      /**
       * 每页条数，范围 1..1000
       * @min 1
       * @max 1000
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsListData, any>({
      path: `/api/v1/permissions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsCreate
   * @summary 创建权限
   * @request POST:/api/v1/permissions
   * @secure
   */
  v1PermissionsCreate = (request: UserCreatePermissionReq, params: RequestParams = {}) =>
    this.request<V1PermissionsCreateData, any>({
      path: `/api/v1/permissions`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsCheckCreate
   * @summary 检查权限
   * @request POST:/api/v1/permissions/check
   * @secure
   */
  v1PermissionsCheckCreate = (request: UserCheckPermissionsReq, params: RequestParams = {}) =>
    this.request<V1PermissionsCheckCreateData, any>({
      path: `/api/v1/permissions/check`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsRolesDetail
   * @summary 获取角色的权限列表
   * @request GET:/api/v1/permissions/roles/{role_id}
   * @secure
   */
  v1PermissionsRolesDetail = (roleId: number, params: RequestParams = {}) =>
    this.request<V1PermissionsRolesDetailData, any>({
      path: `/api/v1/permissions/roles/${roleId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsRolesCreate
   * @summary 给角色分配权限
   * @request POST:/api/v1/permissions/roles/{role_id}
   * @secure
   */
  v1PermissionsRolesCreate = (
    roleId: number,
    request: UserAssignPermissionsReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsRolesCreateData, any>({
      path: `/api/v1/permissions/roles/${roleId}`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsRolesDelete
   * @summary 移除角色的权限
   * @request DELETE:/api/v1/permissions/roles/{role_id}
   * @secure
   */
  v1PermissionsRolesDelete = (
    roleId: number,
    request: UserAssignPermissionsReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsRolesDeleteData, any>({
      path: `/api/v1/permissions/roles/${roleId}`,
      method: "DELETE",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsDetail
   * @summary 获取权限
   * @request GET:/api/v1/permissions/{id}
   * @secure
   */
  v1PermissionsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1PermissionsDetailData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsUpdate
   * @summary 更新权限
   * @request PUT:/api/v1/permissions/{id}
   * @secure
   */
  v1PermissionsUpdate = (
    id: number,
    request: UserUpdatePermissionReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PermissionsUpdateData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "PUT",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permissions
   * @name V1PermissionsDelete
   * @summary 删除权限
   * @request DELETE:/api/v1/permissions/{id}
   * @secure
   */
  v1PermissionsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1PermissionsDeleteData, any>({
      path: `/api/v1/permissions/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
