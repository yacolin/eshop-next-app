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
  GfEshopApiProductAttributesV1ProductAttributesCreateReq,
  V1ProductAttributesCreateData,
  V1ProductAttributesDeleteData,
  V1ProductAttributesListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProductAttributes<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ProductAttributes
   * @name V1ProductAttributesList
   * @summary 商品属性值列表
   * @request GET:/api/v1/product_attributes
   */
  v1ProductAttributesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      product_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ProductAttributesListData, any>({
      path: `/api/v1/product_attributes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductAttributes
   * @name V1ProductAttributesCreate
   * @summary 新增商品属性值
   * @request POST:/api/v1/product_attributes
   */
  v1ProductAttributesCreate = (
    data: GfEshopApiProductAttributesV1ProductAttributesCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1ProductAttributesCreateData, any>({
      path: `/api/v1/product_attributes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductAttributes
   * @name V1ProductAttributesDelete
   * @summary 删除商品属性值
   * @request DELETE:/api/v1/product_attributes/{id}
   */
  v1ProductAttributesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductAttributesDeleteData, any>({
      path: `/api/v1/product_attributes/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
