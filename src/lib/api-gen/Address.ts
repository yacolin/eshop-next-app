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
  GfEshopApiAddressV1AddressCreateReq,
  V1AddressesCreateData,
  V1AddressesDefaultListData,
  V1AddressesDeleteData,
  V1AddressesDetailData,
  V1AddressesListData,
  V1AddressesUpdateData,
  V1AddressesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Address<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesList
   * @summary 收货地址列表
   * @request GET:/api/v1/addresses
   */
  v1AddressesList = (params: RequestParams = {}) =>
    this.request<V1AddressesListData, any>({
      path: `/api/v1/addresses`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesCreate
   * @summary 新增收货地址
   * @request POST:/api/v1/addresses
   */
  v1AddressesCreate = (
    data: GfEshopApiAddressV1AddressCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1AddressesCreateData, any>({
      path: `/api/v1/addresses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesDefaultList
   * @summary 获取默认地址
   * @request GET:/api/v1/addresses/default
   */
  v1AddressesDefaultList = (params: RequestParams = {}) =>
    this.request<V1AddressesDefaultListData, any>({
      path: `/api/v1/addresses/default`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesDelete
   * @summary 删除收货地址
   * @request DELETE:/api/v1/addresses/{id}
   */
  v1AddressesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1AddressesDeleteData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesDetail
   * @summary 地址详情
   * @request GET:/api/v1/addresses/{id}
   */
  v1AddressesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1AddressesDetailData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Address
   * @name V1AddressesUpdate
   * @summary 更新收货地址
   * @request PUT:/api/v1/addresses/{id}
   */
  v1AddressesUpdate = (
    id: number,
    data: V1AddressesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1AddressesUpdateData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
