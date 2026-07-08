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
  GfEshopApiBrandsV1BrandsCreateReq,
  V1BrandsCreateData,
  V1BrandsDeleteData,
  V1BrandsDetailData,
  V1BrandsListData,
  V1BrandsUpdateData,
  V1BrandsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brands<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Brands
   * @name V1BrandsList
   * @summary 品牌列表
   * @request GET:/api/v1/brands
   */
  v1BrandsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      name?: string;
      /** @format string */
      first_letter?: string;
      /** @format *int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1BrandsListData, any>({
      path: `/api/v1/brands`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name V1BrandsCreate
   * @summary 新增品牌
   * @request POST:/api/v1/brands
   */
  v1BrandsCreate = (
    data: GfEshopApiBrandsV1BrandsCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1BrandsCreateData, any>({
      path: `/api/v1/brands`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name V1BrandsDelete
   * @summary 删除品牌
   * @request DELETE:/api/v1/brands/{id}
   */
  v1BrandsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1BrandsDeleteData, any>({
      path: `/api/v1/brands/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name V1BrandsDetail
   * @summary 品牌详情
   * @request GET:/api/v1/brands/{id}
   */
  v1BrandsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1BrandsDetailData, any>({
      path: `/api/v1/brands/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name V1BrandsUpdate
   * @summary 更新品牌
   * @request PUT:/api/v1/brands/{id}
   */
  v1BrandsUpdate = (
    id: number,
    data: V1BrandsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1BrandsUpdateData, any>({
      path: `/api/v1/brands/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
