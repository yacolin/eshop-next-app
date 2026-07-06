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
  GfEshopApiAttributesV1AttributesCreateReq,
  V1AttributesCreateData,
  V1AttributesDeleteData,
  V1AttributesDetailData,
  V1AttributesListData,
  V1AttributesSearchableListData,
  V1AttributesSkuSpecListData,
  V1AttributesUpdateData,
  V1AttributesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Attributes<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesList
   * @summary 属性列表
   * @request GET:/api/v1/attributes
   */
  v1AttributesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      category_id?: number;
      /** @format int */
      searchable?: number;
      /** @format int */
      is_sku_spec?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1AttributesListData, any>({
      path: `/api/v1/attributes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesCreate
   * @summary 新增属性
   * @request POST:/api/v1/attributes
   */
  v1AttributesCreate = (
    data: GfEshopApiAttributesV1AttributesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1AttributesCreateData, any>({
      path: `/api/v1/attributes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesSearchableList
   * @summary 可搜索属性列表
   * @request GET:/api/v1/attributes/searchable
   */
  v1AttributesSearchableList = (
    query?: {
      /** @format int64 */
      category_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1AttributesSearchableListData, any>({
      path: `/api/v1/attributes/searchable`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesSkuSpecList
   * @summary SKU规格属性列表
   * @request GET:/api/v1/attributes/sku-spec
   */
  v1AttributesSkuSpecList = (
    query?: {
      /** @format int64 */
      category_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1AttributesSkuSpecListData, any>({
      path: `/api/v1/attributes/sku-spec`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesDelete
   * @summary 删除属性
   * @request DELETE:/api/v1/attributes/{id}
   */
  v1AttributesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1AttributesDeleteData, any>({
      path: `/api/v1/attributes/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesDetail
   * @summary 属性详情
   * @request GET:/api/v1/attributes/{id}
   */
  v1AttributesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1AttributesDetailData, any>({
      path: `/api/v1/attributes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Attributes
   * @name V1AttributesUpdate
   * @summary 更新属性
   * @request PUT:/api/v1/attributes/{id}
   */
  v1AttributesUpdate = (
    id: number,
    data: V1AttributesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1AttributesUpdateData, any>({
      path: `/api/v1/attributes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
