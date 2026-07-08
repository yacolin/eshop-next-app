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
  GfEshopApiLevelRulesV1LevelRulesCreateReq,
  V1LevelRulesCreateData,
  V1LevelRulesDeleteData,
  V1LevelRulesDetailData,
  V1LevelRulesListData,
  V1LevelRulesUpdateData,
  V1LevelRulesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LevelRules<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags LevelRules
   * @name V1LevelRulesList
   * @summary 升降级规则列表
   * @request GET:/api/v1/level-rules
   */
  v1LevelRulesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /**
       * 规则类型筛选：upgrade-升级 downgrade-降级
       * @format string
       */
      rule_type?: string;
      /**
       * 状态筛选
       * @format *int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1LevelRulesListData, any>({
      path: `/api/v1/level-rules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LevelRules
   * @name V1LevelRulesCreate
   * @summary 新增升降级规则
   * @request POST:/api/v1/level-rules
   */
  v1LevelRulesCreate = (
    data: GfEshopApiLevelRulesV1LevelRulesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1LevelRulesCreateData, any>({
      path: `/api/v1/level-rules`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LevelRules
   * @name V1LevelRulesDelete
   * @summary 删除升降级规则
   * @request DELETE:/api/v1/level-rules/{id}
   */
  v1LevelRulesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1LevelRulesDeleteData, any>({
      path: `/api/v1/level-rules/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LevelRules
   * @name V1LevelRulesDetail
   * @summary 规则详情
   * @request GET:/api/v1/level-rules/{id}
   */
  v1LevelRulesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1LevelRulesDetailData, any>({
      path: `/api/v1/level-rules/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LevelRules
   * @name V1LevelRulesUpdate
   * @summary 更新升降级规则
   * @request PUT:/api/v1/level-rules/{id}
   */
  v1LevelRulesUpdate = (
    id: number,
    data: V1LevelRulesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1LevelRulesUpdateData, any>({
      path: `/api/v1/level-rules/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
