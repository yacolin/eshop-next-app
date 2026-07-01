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
  UserCreateRoleReq,
  UserUpdateRoleReq,
  V1RolesCreateData,
  V1RolesDeleteData,
  V1RolesDetailData,
  V1RolesListData,
  V1RolesUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Roles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags roles
   * @name V1RolesList
   * @summary 角色列表
   * @request GET:/api/v1/roles
   * @secure
   */
  v1RolesList = (
    query?: {
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
    this.request<V1RolesListData, any>({
      path: `/api/v1/roles`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags roles
   * @name V1RolesCreate
   * @summary 创建角色
   * @request POST:/api/v1/roles
   * @secure
   */
  v1RolesCreate = (request: UserCreateRoleReq, params: RequestParams = {}) =>
    this.request<V1RolesCreateData, any>({
      path: `/api/v1/roles`,
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
   * @tags roles
   * @name V1RolesDetail
   * @summary 获取角色
   * @request GET:/api/v1/roles/{id}
   * @secure
   */
  v1RolesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1RolesDetailData, any>({
      path: `/api/v1/roles/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags roles
   * @name V1RolesUpdate
   * @summary 更新角色
   * @request PUT:/api/v1/roles/{id}
   * @secure
   */
  v1RolesUpdate = (id: number, request: UserUpdateRoleReq, params: RequestParams = {}) =>
    this.request<V1RolesUpdateData, any>({
      path: `/api/v1/roles/${id}`,
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
   * @tags roles
   * @name V1RolesDelete
   * @summary 删除角色
   * @request DELETE:/api/v1/roles/{id}
   * @secure
   */
  v1RolesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1RolesDeleteData, any>({
      path: `/api/v1/roles/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
