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
  ProductCreateAttributeReq,
  ProductUpdateAttributeReq,
  V1AttributesCreateData,
  V1AttributesDeleteData,
  V1AttributesDetailData,
  V1AttributesListData,
  V1AttributesSearchableListData,
  V1AttributesSkuSpecListData,
  V1AttributesUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Attributes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags attributes
   * @name V1AttributesList
   * @summary 按类目查询属性
   * @request GET:/api/v1/attributes
   */
  v1AttributesList = (
    query: {
      /** 类目ID */
      category_id: number;
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
   * @tags attributes
   * @name V1AttributesCreate
   * @summary 创建属性
   * @request POST:/api/v1/attributes
   */
  v1AttributesCreate = (attr: ProductCreateAttributeReq, params: RequestParams = {}) =>
    this.request<V1AttributesCreateData, any>({
      path: `/api/v1/attributes`,
      method: "POST",
      body: attr,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags attributes
   * @name V1AttributesSearchableList
   * @summary 按类目查询可筛选项
   * @request GET:/api/v1/attributes/searchable
   */
  v1AttributesSearchableList = (
    query: {
      /** 类目ID */
      category_id: number;
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
   * @tags attributes
   * @name V1AttributesSkuSpecList
   * @summary 按类目查询 SKU 规格
   * @request GET:/api/v1/attributes/sku-spec
   */
  v1AttributesSkuSpecList = (
    query: {
      /** 类目ID */
      category_id: number;
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
   * @tags attributes
   * @name V1AttributesDetail
   * @summary 获取属性详情
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
   * @tags attributes
   * @name V1AttributesUpdate
   * @summary 更新属性
   * @request PUT:/api/v1/attributes/{id}
   */
  v1AttributesUpdate = (id: number, attr: ProductUpdateAttributeReq, params: RequestParams = {}) =>
    this.request<V1AttributesUpdateData, any>({
      path: `/api/v1/attributes/${id}`,
      method: "PUT",
      body: attr,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags attributes
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
}
