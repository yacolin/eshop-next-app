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
  GfEshopApiMerchantContactsV1MerchantContactsCreateReq,
  V1MerchantContactsCreateData,
  V1MerchantContactsDeleteData,
  V1MerchantContactsDetailData,
  V1MerchantContactsListData,
  V1MerchantContactsUpdateData,
  V1MerchantContactsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MerchantContacts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantContacts
   * @name V1MerchantContactsList
   * @summary 联系人列表
   * @request GET:/api/v1/merchant-contacts
   */
  v1MerchantContactsList = (
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
    this.request<V1MerchantContactsListData, any>({
      path: `/api/v1/merchant-contacts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantContacts
   * @name V1MerchantContactsCreate
   * @summary 新增联系人
   * @request POST:/api/v1/merchant-contacts
   */
  v1MerchantContactsCreate = (
    data: GfEshopApiMerchantContactsV1MerchantContactsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantContactsCreateData, any>({
      path: `/api/v1/merchant-contacts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantContacts
   * @name V1MerchantContactsDelete
   * @summary 删除联系人
   * @request DELETE:/api/v1/merchant-contacts/{id}
   */
  v1MerchantContactsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantContactsDeleteData, any>({
      path: `/api/v1/merchant-contacts/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantContacts
   * @name V1MerchantContactsDetail
   * @summary 联系人详情
   * @request GET:/api/v1/merchant-contacts/{id}
   */
  v1MerchantContactsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1MerchantContactsDetailData, any>({
      path: `/api/v1/merchant-contacts/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MerchantContacts
   * @name V1MerchantContactsUpdate
   * @summary 更新联系人
   * @request PUT:/api/v1/merchant-contacts/{id}
   */
  v1MerchantContactsUpdate = (
    id: number,
    data: V1MerchantContactsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1MerchantContactsUpdateData, any>({
      path: `/api/v1/merchant-contacts/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
