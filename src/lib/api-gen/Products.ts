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

import { V1ProductsDetailData, V1ProductsListData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Products<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags products, frontend
   * @name V1ProductsList
   * @summary 商品列表（keyset 游标分页）
   * @request GET:/api/v1/products
   */
  v1ProductsList = (
    query?: {
      /**
       * 每页条数
       * @default 10
       */
      size?: number;
      /** 游标（首次请求不传，后续使用上次返回的 cursor） */
      cursor?: string;
      /** 商品名称模糊搜索 */
      name?: string;
      /** 类目ID */
      category_id?: number;
      /** 品牌ID */
      brand_id?: number;
      /** 状态 0-草稿 1-待审 2-上架 3-下架 4-封禁 */
      status?: number;
      /** 最低价格（分） */
      price_min?: number;
      /** 最高价格（分） */
      price_max?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsListData, any>({
      path: `/api/v1/products`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags products, frontend
   * @name V1ProductsDetail
   * @summary 获取商品详情
   * @request GET:/api/v1/products/{id}
   */
  v1ProductsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1ProductsDetailData, any>({
      path: `/api/v1/products/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
