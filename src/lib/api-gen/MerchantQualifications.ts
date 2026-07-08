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
  GfEshopApiMerchantQualificationsV1MerchantQualificationsCreateReq,
  V1MerchantQualificationsAuditUpdateData,
  V1MerchantQualificationsAuditUpdatePayload,
  V1MerchantQualificationsCreateData,
  V1MerchantQualificationsDeleteData,
  V1MerchantQualificationsDetailData,
  V1MerchantQualificationsListData,
  V1MerchantQualificationsUpdateData,
  V1MerchantQualificationsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantQualifications<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsList
   * @summary 资质列表
   * @request GET:/api/v1/merchant-qualifications
   */
  v1MerchantQualificationsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /**
       * 商家ID（可选）
       * @format int
       */
      merchant_id?: number;
      /**
       * 状态（可选）
       * @format int
       */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantQualificationsListData, any>({
      path: `/api/v1/merchant-qualifications`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsCreate
   * @summary 新增资质
   * @request POST:/api/v1/merchant-qualifications
   */
  v1MerchantQualificationsCreate = (
    data: GfEshopApiMerchantQualificationsV1MerchantQualificationsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantQualificationsCreateData, any>({
      path: `/api/v1/merchant-qualifications`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsDelete
   * @summary 删除资质
   * @request DELETE:/api/v1/merchant-qualifications/{id}
   */
  v1MerchantQualificationsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantQualificationsDeleteData, any>({
      path: `/api/v1/merchant-qualifications/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsDetail
   * @summary 资质详情
   * @request GET:/api/v1/merchant-qualifications/{id}
   */
  v1MerchantQualificationsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantQualificationsDetailData, any>({
      path: `/api/v1/merchant-qualifications/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsUpdate
   * @summary 更新资质
   * @request PUT:/api/v1/merchant-qualifications/{id}
   */
  v1MerchantQualificationsUpdate = (
    id: number,
    data: V1MerchantQualificationsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantQualificationsUpdateData, any>({
      path: `/api/v1/merchant-qualifications/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantQualifications
   * @name V1MerchantQualificationsAuditUpdate
   * @summary 审核资质
   * @request PUT:/api/v1/merchant-qualifications/{id}/audit
   */
  v1MerchantQualificationsAuditUpdate = (
    id: number,
    data: V1MerchantQualificationsAuditUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantQualificationsAuditUpdateData, any>({
      path: `/api/v1/merchant-qualifications/${id}/audit`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
