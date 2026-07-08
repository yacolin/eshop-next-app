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
  GfEshopApiReviewsV1ReviewsCreateReq,
  V1ReviewsAuditLogsListData,
  V1ReviewsAuditUpdateData,
  V1ReviewsAuditUpdatePayload,
  V1ReviewsCreateData,
  V1ReviewsDeleteData,
  V1ReviewsDetailData,
  V1ReviewsListData,
  V1ReviewsRepliesCreateData,
  V1ReviewsRepliesCreatePayload,
  V1ReviewsRepliesDeleteData,
  V1ReviewsRepliesListData,
  V1ReviewsUpdateData,
  V1ReviewsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Reviews<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsList
   * @summary 评价列表
   * @request GET:/api/v1/reviews
   */
  v1ReviewsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int */
      id?: number;
      /** @format int */
      merchant_id?: number;
      /** @format int */
      spu_id?: number;
      /** @format *int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsListData, any>({
      path: `/api/v1/reviews`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsCreate
   * @summary 新增评价
   * @request POST:/api/v1/reviews
   */
  v1ReviewsCreate = (
    data: GfEshopApiReviewsV1ReviewsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsCreateData, any>({
      path: `/api/v1/reviews`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsDelete
   * @summary 删除评价
   * @request DELETE:/api/v1/reviews/{id}
   */
  v1ReviewsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1ReviewsDeleteData, any>({
      path: `/api/v1/reviews/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsDetail
   * @summary 评价详情
   * @request GET:/api/v1/reviews/{id}
   */
  v1ReviewsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1ReviewsDetailData, any>({
      path: `/api/v1/reviews/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsUpdate
   * @summary 更新评价
   * @request PUT:/api/v1/reviews/{id}
   */
  v1ReviewsUpdate = (
    id: number,
    data: V1ReviewsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsUpdateData, any>({
      path: `/api/v1/reviews/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsAuditUpdate
   * @summary 审核评价
   * @request PUT:/api/v1/reviews/{id}/audit
   */
  v1ReviewsAuditUpdate = (
    id: number,
    data: V1ReviewsAuditUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsAuditUpdateData, any>({
      path: `/api/v1/reviews/${id}/audit`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsAuditLogsList
   * @summary 审核日志列表
   * @request GET:/api/v1/reviews/{id}/audit-logs
   */
  v1ReviewsAuditLogsList = (id: number, params: RequestParams = {}) =>
    this.request<V1ReviewsAuditLogsListData, any>({
      path: `/api/v1/reviews/${id}/audit-logs`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsRepliesList
   * @summary 评价回复列表
   * @request GET:/api/v1/reviews/{id}/replies
   */
  v1ReviewsRepliesList = (id: number, params: RequestParams = {}) =>
    this.request<V1ReviewsRepliesListData, any>({
      path: `/api/v1/reviews/${id}/replies`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsRepliesCreate
   * @summary 新增回复
   * @request POST:/api/v1/reviews/{id}/replies
   */
  v1ReviewsRepliesCreate = (
    id: number,
    data: V1ReviewsRepliesCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsRepliesCreateData, any>({
      path: `/api/v1/reviews/${id}/replies`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reviews
   * @name V1ReviewsRepliesDelete
   * @summary 删除回复
   * @request DELETE:/api/v1/reviews/{id}/replies/{replyId}
   */
  v1ReviewsRepliesDelete = (
    id: number,
    replyId: number,
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsRepliesDeleteData, any>({
      path: `/api/v1/reviews/${id}/replies/${replyId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
