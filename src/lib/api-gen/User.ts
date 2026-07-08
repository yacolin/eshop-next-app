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
  GfEshopApiUserV1UserUpdateInfoReq,
  V1UserListData,
  V1UserUpdateData,
  V1UsersListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name V1UserList
   * @summary 获取当前用户资料
   * @request GET:/api/v1/user
   */
  v1UserList = (params: RequestParams = {}) =>
    this.request<V1UserListData, any>({
      path: `/api/v1/user`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name V1UserUpdate
   * @summary 更新个人信息
   * @request PUT:/api/v1/user
   */
  v1UserUpdate = (
    data: GfEshopApiUserV1UserUpdateInfoReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserUpdateData, any>({
      path: `/api/v1/user`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name V1UsersList
   * @summary 用户列表
   * @request GET:/api/v1/users
   */
  v1UsersList = (
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
       * 搜索关键词（用户名/昵称/邮箱/手机号）
       * @format string
       */
      keyword?: string;
      /**
       * 状态：1-正常 0-禁用 2-冻结
       * @format *int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UsersListData, any>({
      path: `/api/v1/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
