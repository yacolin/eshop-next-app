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
  V1ProductVersionsDetailData,
  V1ProductVersionsListData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ProductVersions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ProductVersions
   * @name V1ProductVersionsList
   * @summary 商品版本列表
   * @request GET:/api/v1/product_versions
   */
  v1ProductVersionsList = (
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
    this.request<V1ProductVersionsListData, any>({
      path: `/api/v1/product_versions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductVersions
   * @name V1ProductVersionsDetail
   * @summary 版本详情
   * @request GET:/api/v1/product_versions/{id}
   */
  v1ProductVersionsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductVersionsDetailData, any>({
      path: `/api/v1/product_versions/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
