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
  UserAssignRoleReq,
  UserUpdateUserInfoReq,
  V1UsersInfoUpdateData,
  V1UsersListData,
  V1UsersProfileListData,
  V1UsersRolesCreateData,
  V1UsersRolesDeleteData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags users
   * @name V1UsersList
   * @summary 后台用户列表
   * @request GET:/api/v1/users
   * @secure
   */
  v1UsersList = (
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
      /** 状态 */
      status?: number;
      /** 关键字（用户名/邮箱/手机号/昵称） */
      keyword?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UsersListData, any>({
      path: `/api/v1/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name V1UsersInfoUpdate
   * @summary 更新个人信息
   * @request PUT:/api/v1/users/info
   * @secure
   */
  v1UsersInfoUpdate = (request: UserUpdateUserInfoReq, params: RequestParams = {}) =>
    this.request<V1UsersInfoUpdateData, any>({
      path: `/api/v1/users/info`,
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
   * @tags users
   * @name V1UsersProfileList
   * @summary 获取当前用户资料
   * @request GET:/api/v1/users/profile
   * @secure
   */
  v1UsersProfileList = (params: RequestParams = {}) =>
    this.request<V1UsersProfileListData, any>({
      path: `/api/v1/users/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name V1UsersRolesCreate
   * @summary 给用户分配角色
   * @request POST:/api/v1/users/{user_id}/roles
   * @secure
   */
  v1UsersRolesCreate = (userId: number, request: UserAssignRoleReq, params: RequestParams = {}) =>
    this.request<V1UsersRolesCreateData, any>({
      path: `/api/v1/users/${userId}/roles`,
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
   * @tags users
   * @name V1UsersRolesDelete
   * @summary 移除用户的角色
   * @request DELETE:/api/v1/users/{user_id}/roles/{role_id}
   * @secure
   */
  v1UsersRolesDelete = (userId: number, roleId: number, params: RequestParams = {}) =>
    this.request<V1UsersRolesDeleteData, any>({
      path: `/api/v1/users/${userId}/roles/${roleId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
