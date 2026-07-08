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
  GfEshopApiUserLevelsV1LevelsCreateReq,
  V1UserLevelsCreateData,
  V1UserLevelsDeleteData,
  V1UserLevelsDetailData,
  V1UserLevelsListData,
  V1UserLevelsUpdateData,
  V1UserLevelsUpdatePayload,
  V1UserLevelsUserLevelListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserLevels<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsList
   * @summary 等级列表
   * @request GET:/api/v1/user-levels
   */
  v1UserLevelsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /**
       * 等级名称模糊搜索
       * @format string
       */
      name?: string;
      /**
       * 1-启用 0-禁用
       * @format *int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UserLevelsListData, any>({
      path: `/api/v1/user-levels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsCreate
   * @summary 新增等级
   * @request POST:/api/v1/user-levels
   */
  v1UserLevelsCreate = (
    data: GfEshopApiUserLevelsV1LevelsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserLevelsCreateData, any>({
      path: `/api/v1/user-levels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsUserLevelList
   * @summary 用户等级进度
   * @request GET:/api/v1/user-levels/user-level
   */
  v1UserLevelsUserLevelList = (
    query: {
      /** @format int64 */
      user_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1UserLevelsUserLevelListData, any>({
      path: `/api/v1/user-levels/user-level`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsDelete
   * @summary 删除等级
   * @request DELETE:/api/v1/user-levels/{id}
   */
  v1UserLevelsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1UserLevelsDeleteData, any>({
      path: `/api/v1/user-levels/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsDetail
   * @summary 等级详情
   * @request GET:/api/v1/user-levels/{id}
   */
  v1UserLevelsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1UserLevelsDetailData, any>({
      path: `/api/v1/user-levels/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserLevels
   * @name V1UserLevelsUpdate
   * @summary 更新等级
   * @request PUT:/api/v1/user-levels/{id}
   */
  v1UserLevelsUpdate = (
    id: number,
    data: V1UserLevelsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1UserLevelsUpdateData, any>({
      path: `/api/v1/user-levels/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
