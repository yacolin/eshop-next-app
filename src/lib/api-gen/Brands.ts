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

import { V1BrandsListData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brands<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags brands, frontend
   * @name V1BrandsList
   * @summary 品牌列表
   * @request GET:/api/v1/brands
   */
  v1BrandsList = (
    query?: {
      /**
       * 页码
       * @default 1
       */
      page?: number;
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
      /** 品牌名称模糊搜索 */
      name?: string;
      /** 首字母筛选 */
      first_letter?: string;
      /** 状态 1-启用 0-禁用 */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1BrandsListData, any>({
      path: `/api/v1/brands`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
