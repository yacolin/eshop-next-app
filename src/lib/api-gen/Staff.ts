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
  GfEshopApiStaffV1StaffLoginReq,
  GfEshopApiStaffV1StaffLogoutReq,
  GfEshopApiStaffV1StaffRefreshTokenReq,
  V1StaffListData,
  V1StaffLoginCreateData,
  V1StaffLogoutCreateData,
  V1StaffPermissionsListData,
  V1StaffProfileListData,
  V1StaffRefreshCreateData,
  V1StaffRolesUpdateData,
  V1StaffRolesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Staff<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffList
   * @summary 员工列表
   * @request GET:/api/v1/staff
   */
  v1StaffList = (
    query?: {
      /**
       * 页码
       * @format int
       */
      page?: number;
      /**
       * 每页条数
       * @format int
       */
      page_size?: number;
      /**
       * 搜索关键词（用户名/姓名）
       * @format string
       */
      keyword?: string;
      /**
       * 状态：1-正常 0-禁用
       * @format *int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1StaffListData, any>({
      path: `/api/v1/staff`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffLoginCreate
   * @summary 系统用户登录
   * @request POST:/api/v1/staff/login
   */
  v1StaffLoginCreate = (
    data: GfEshopApiStaffV1StaffLoginReq,
    params: RequestParams = {},
  ) =>
    this.request<V1StaffLoginCreateData, any>({
      path: `/api/v1/staff/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffLogoutCreate
   * @summary 系统用户退出登录
   * @request POST:/api/v1/staff/logout
   */
  v1StaffLogoutCreate = (
    data: GfEshopApiStaffV1StaffLogoutReq,
    params: RequestParams = {},
  ) =>
    this.request<V1StaffLogoutCreateData, any>({
      path: `/api/v1/staff/logout`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffPermissionsList
   * @summary 获取当前用户权限和角色
   * @request GET:/api/v1/staff/permissions
   */
  v1StaffPermissionsList = (params: RequestParams = {}) =>
    this.request<V1StaffPermissionsListData, any>({
      path: `/api/v1/staff/permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffProfileList
   * @summary 获取当前用户信息
   * @request GET:/api/v1/staff/profile
   */
  v1StaffProfileList = (params: RequestParams = {}) =>
    this.request<V1StaffProfileListData, any>({
      path: `/api/v1/staff/profile`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffRefreshCreate
   * @summary 刷新令牌
   * @request POST:/api/v1/staff/refresh
   */
  v1StaffRefreshCreate = (
    data: GfEshopApiStaffV1StaffRefreshTokenReq,
    params: RequestParams = {},
  ) =>
    this.request<V1StaffRefreshCreateData, any>({
      path: `/api/v1/staff/refresh`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Staff
   * @name V1StaffRolesUpdate
   * @summary 分配角色
   * @request PUT:/api/v1/staff/{id}/roles
   */
  v1StaffRolesUpdate = (
    id: number,
    data: V1StaffRolesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1StaffRolesUpdateData, any>({
      path: `/api/v1/staff/${id}/roles`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
