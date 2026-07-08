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
  GfEshopApiMerchantBankAccountsV1MerchantBankAccountsCreateReq,
  V1MerchantBankAccountsCreateData,
  V1MerchantBankAccountsDeleteData,
  V1MerchantBankAccountsDetailData,
  V1MerchantBankAccountsListData,
  V1MerchantBankAccountsUpdateData,
  V1MerchantBankAccountsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantBankAccounts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantBankAccounts
   * @name V1MerchantBankAccountsList
   * @summary 银行账户列表
   * @request GET:/api/v1/merchant-bank-accounts
   */
  v1MerchantBankAccountsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /**
       * 商家ID，可选筛选
       * @format int64
       */
      merchant_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantBankAccountsListData, any>({
      path: `/api/v1/merchant-bank-accounts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantBankAccounts
   * @name V1MerchantBankAccountsCreate
   * @summary 新增银行账户
   * @request POST:/api/v1/merchant-bank-accounts
   */
  v1MerchantBankAccountsCreate = (
    data: GfEshopApiMerchantBankAccountsV1MerchantBankAccountsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantBankAccountsCreateData, any>({
      path: `/api/v1/merchant-bank-accounts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantBankAccounts
   * @name V1MerchantBankAccountsDelete
   * @summary 删除银行账户
   * @request DELETE:/api/v1/merchant-bank-accounts/{id}
   */
  v1MerchantBankAccountsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantBankAccountsDeleteData, any>({
      path: `/api/v1/merchant-bank-accounts/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantBankAccounts
   * @name V1MerchantBankAccountsDetail
   * @summary 银行账户详情
   * @request GET:/api/v1/merchant-bank-accounts/{id}
   */
  v1MerchantBankAccountsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantBankAccountsDetailData, any>({
      path: `/api/v1/merchant-bank-accounts/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantBankAccounts
   * @name V1MerchantBankAccountsUpdate
   * @summary 更新银行账户
   * @request PUT:/api/v1/merchant-bank-accounts/{id}
   */
  v1MerchantBankAccountsUpdate = (
    id: number,
    data: V1MerchantBankAccountsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantBankAccountsUpdateData, any>({
      path: `/api/v1/merchant-bank-accounts/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
