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
  GfEshopApiMerchantWithdrawalsV1ApplyReq,
  V1MerchantWithdrawalsApproveUpdateData,
  V1MerchantWithdrawalsApproveUpdatePayload,
  V1MerchantWithdrawalsCreateData,
  V1MerchantWithdrawalsDetailData,
  V1MerchantWithdrawalsListData,
  V1MerchantWithdrawalsRejectUpdateData,
  V1MerchantWithdrawalsRejectUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantWithdrawals<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantWithdrawals
   * @name V1MerchantWithdrawalsList
   * @summary 提现列表
   * @request GET:/api/v1/merchant-withdrawals
   */
  v1MerchantWithdrawalsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      merchant_id?: number;
      /** @format int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantWithdrawalsListData, any>({
      path: `/api/v1/merchant-withdrawals`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantWithdrawals
   * @name V1MerchantWithdrawalsCreate
   * @summary 申请提现
   * @request POST:/api/v1/merchant-withdrawals
   */
  v1MerchantWithdrawalsCreate = (
    data: GfEshopApiMerchantWithdrawalsV1ApplyReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantWithdrawalsCreateData, any>({
      path: `/api/v1/merchant-withdrawals`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantWithdrawals
   * @name V1MerchantWithdrawalsDetail
   * @summary 提现详情
   * @request GET:/api/v1/merchant-withdrawals/{id}
   */
  v1MerchantWithdrawalsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantWithdrawalsDetailData, any>({
      path: `/api/v1/merchant-withdrawals/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantWithdrawals
   * @name V1MerchantWithdrawalsApproveUpdate
   * @summary 审核通过
   * @request PUT:/api/v1/merchant-withdrawals/{id}/approve
   */
  v1MerchantWithdrawalsApproveUpdate = (
    id: number,
    data: V1MerchantWithdrawalsApproveUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantWithdrawalsApproveUpdateData, any>({
      path: `/api/v1/merchant-withdrawals/${id}/approve`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantWithdrawals
   * @name V1MerchantWithdrawalsRejectUpdate
   * @summary 审核拒绝
   * @request PUT:/api/v1/merchant-withdrawals/{id}/reject
   */
  v1MerchantWithdrawalsRejectUpdate = (
    id: number,
    data: V1MerchantWithdrawalsRejectUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantWithdrawalsRejectUpdateData, any>({
      path: `/api/v1/merchant-withdrawals/${id}/reject`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
