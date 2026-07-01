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
  ReviewCreateReviewReq,
  ReviewModerateReviewReq,
  ReviewReplyReviewReq,
  V1AdminReviewsDeleteData,
  V1AdminReviewsModeratePartialUpdateData,
  V1AdminReviewsPendingListData,
  V1AdminReviewsReplyCreateData,
  V1ProductsRatingListData,
  V1ProductsReviewsListData,
  V1ReviewsCreateData,
  V1ReviewsDeleteData,
  V1ReviewsMeListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Reviews<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags reviews
   * @name V1AdminReviewsPendingList
   * @summary 待审核评价列表
   * @request GET:/api/v1/admin/reviews/pending
   * @secure
   */
  v1AdminReviewsPendingList = (
    query?: {
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1AdminReviewsPendingListData, any>({
      path: `/api/v1/admin/reviews/pending`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1AdminReviewsDelete
   * @summary 管理员删除评价
   * @request DELETE:/api/v1/admin/reviews/{id}
   * @secure
   */
  v1AdminReviewsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1AdminReviewsDeleteData, any>({
      path: `/api/v1/admin/reviews/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1AdminReviewsModeratePartialUpdate
   * @summary 审核评价
   * @request PATCH:/api/v1/admin/reviews/{id}/moderate
   * @secure
   */
  v1AdminReviewsModeratePartialUpdate = (
    id: number,
    request: ReviewModerateReviewReq,
    params: RequestParams = {},
  ) =>
    this.request<V1AdminReviewsModeratePartialUpdateData, any>({
      path: `/api/v1/admin/reviews/${id}/moderate`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1AdminReviewsReplyCreate
   * @summary 商家回复
   * @request POST:/api/v1/admin/reviews/{id}/reply
   * @secure
   */
  v1AdminReviewsReplyCreate = (
    id: number,
    request: ReviewReplyReviewReq,
    params: RequestParams = {},
  ) =>
    this.request<V1AdminReviewsReplyCreateData, any>({
      path: `/api/v1/admin/reviews/${id}/reply`,
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
   * @tags reviews
   * @name V1ProductsRatingList
   * @summary 商品评分汇总
   * @request GET:/api/v1/products/{id}/rating
   */
  v1ProductsRatingList = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductsRatingListData, any>({
      path: `/api/v1/products/${id}/rating`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1ProductsReviewsList
   * @summary 商品评价列表
   * @request GET:/api/v1/products/{id}/reviews
   */
  v1ProductsReviewsList = (
    id: number,
    query?: {
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsReviewsListData, any>({
      path: `/api/v1/products/${id}/reviews`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1ReviewsCreate
   * @summary 创建评价
   * @request POST:/api/v1/reviews
   * @secure
   */
  v1ReviewsCreate = (request: ReviewCreateReviewReq, params: RequestParams = {}) =>
    this.request<V1ReviewsCreateData, any>({
      path: `/api/v1/reviews`,
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
   * @tags reviews
   * @name V1ReviewsMeList
   * @summary 我的评价
   * @request GET:/api/v1/reviews/me
   * @secure
   */
  v1ReviewsMeList = (
    query?: {
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ReviewsMeListData, any>({
      path: `/api/v1/reviews/me`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reviews
   * @name V1ReviewsDelete
   * @summary 删除我的评价
   * @request DELETE:/api/v1/reviews/{id}
   * @secure
   */
  v1ReviewsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1ReviewsDeleteData, any>({
      path: `/api/v1/reviews/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
