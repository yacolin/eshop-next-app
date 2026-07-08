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
  GfEshopApiPointsRulesV1PointsRulesCreateReq,
  V1PointsRulesCreateData,
  V1PointsRulesDeleteData,
  V1PointsRulesDetailData,
  V1PointsRulesListData,
  V1PointsRulesUpdateData,
  V1PointsRulesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PointsRules<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PointsRules
   * @name V1PointsRulesList
   * @summary 积分规则列表
   * @request GET:/api/v1/points-rules
   */
  v1PointsRulesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      rule_key?: string;
      /** @format *int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1PointsRulesListData, any>({
      path: `/api/v1/points-rules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PointsRules
   * @name V1PointsRulesCreate
   * @summary 新增积分规则
   * @request POST:/api/v1/points-rules
   */
  v1PointsRulesCreate = (
    data: GfEshopApiPointsRulesV1PointsRulesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1PointsRulesCreateData, any>({
      path: `/api/v1/points-rules`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PointsRules
   * @name V1PointsRulesDelete
   * @summary 删除积分规则
   * @request DELETE:/api/v1/points-rules/{id}
   */
  v1PointsRulesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1PointsRulesDeleteData, any>({
      path: `/api/v1/points-rules/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PointsRules
   * @name V1PointsRulesDetail
   * @summary 积分规则详情
   * @request GET:/api/v1/points-rules/{id}
   */
  v1PointsRulesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1PointsRulesDetailData, any>({
      path: `/api/v1/points-rules/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PointsRules
   * @name V1PointsRulesUpdate
   * @summary 更新积分规则
   * @request PUT:/api/v1/points-rules/{id}
   */
  v1PointsRulesUpdate = (
    id: number,
    data: V1PointsRulesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1PointsRulesUpdateData, any>({
      path: `/api/v1/points-rules/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
