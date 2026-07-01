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
  UserCreateAddressReq,
  UserUpdateAddressReq,
  V1AddressesCreateData,
  V1AddressesDefaultListData,
  V1AddressesDeleteData,
  V1AddressesDetailData,
  V1AddressesListData,
  V1AddressesUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Addresses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags addresses, frontend
   * @name V1AddressesList
   * @summary 地址列表
   * @request GET:/api/v1/addresses
   * @secure
   */
  v1AddressesList = (params: RequestParams = {}) =>
    this.request<V1AddressesListData, any>({
      path: `/api/v1/addresses`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags addresses, frontend
   * @name V1AddressesCreate
   * @summary 创建地址
   * @request POST:/api/v1/addresses
   * @secure
   */
  v1AddressesCreate = (request: UserCreateAddressReq, params: RequestParams = {}) =>
    this.request<V1AddressesCreateData, any>({
      path: `/api/v1/addresses`,
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
   * @tags addresses, frontend
   * @name V1AddressesDefaultList
   * @summary 获取默认地址
   * @request GET:/api/v1/addresses/default
   * @secure
   */
  v1AddressesDefaultList = (params: RequestParams = {}) =>
    this.request<V1AddressesDefaultListData, any>({
      path: `/api/v1/addresses/default`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags addresses, frontend
   * @name V1AddressesDetail
   * @summary 获取地址详情
   * @request GET:/api/v1/addresses/{id}
   * @secure
   */
  v1AddressesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1AddressesDetailData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags addresses, frontend
   * @name V1AddressesUpdate
   * @summary 更新地址
   * @request PUT:/api/v1/addresses/{id}
   * @secure
   */
  v1AddressesUpdate = (id: number, request: UserUpdateAddressReq, params: RequestParams = {}) =>
    this.request<V1AddressesUpdateData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "PUT",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags addresses, frontend
   * @name V1AddressesDelete
   * @summary 删除地址
   * @request DELETE:/api/v1/addresses/{id}
   * @secure
   */
  v1AddressesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1AddressesDeleteData, any>({
      path: `/api/v1/addresses/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
