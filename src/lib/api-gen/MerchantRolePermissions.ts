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
  GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsCreateReq,
  V1MerchantRolePermissionsCreateData,
  V1MerchantRolePermissionsDeleteData,
  V1MerchantRolePermissionsListData,
  V1MerchantRolePermissionsUpdateData,
  V1MerchantRolePermissionsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantRolePermissions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantRolePermissions
   * @name V1MerchantRolePermissionsList
   * @summary 角色权限列表
   * @request GET:/api/v1/merchant-role-permissions
   */
  v1MerchantRolePermissionsList = (
    query: {
      /**
       * 角色ID
       * @format int64
       */
      role_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolePermissionsListData, any>({
      path: `/api/v1/merchant-role-permissions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRolePermissions
   * @name V1MerchantRolePermissionsCreate
   * @summary 新增角色权限
   * @request POST:/api/v1/merchant-role-permissions
   */
  v1MerchantRolePermissionsCreate = (
    data: GfEshopApiMerchantRolePermissionsV1MerchantRolePermissionsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolePermissionsCreateData, any>({
      path: `/api/v1/merchant-role-permissions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRolePermissions
   * @name V1MerchantRolePermissionsDelete
   * @summary 删除角色权限
   * @request DELETE:/api/v1/merchant-role-permissions/{id}
   */
  v1MerchantRolePermissionsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantRolePermissionsDeleteData, any>({
      path: `/api/v1/merchant-role-permissions/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantRolePermissions
   * @name V1MerchantRolePermissionsUpdate
   * @summary 批量更新角色权限
   * @request PUT:/api/v1/merchant-role-permissions/{role_id}
   */
  v1MerchantRolePermissionsUpdate = (
    roleId: number,
    data: V1MerchantRolePermissionsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantRolePermissionsUpdateData, any>({
      path: `/api/v1/merchant-role-permissions/${roleId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
