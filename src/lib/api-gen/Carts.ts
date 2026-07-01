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
  TradeAddItemReq,
  TradeUpdateItemReq,
  V1CartsClearCreateData,
  V1CartsItemsCreateData,
  V1CartsItemsDeleteData,
  V1CartsItemsUpdateData,
  V1CartsListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Carts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags carts, frontend
   * @name V1CartsList
   * @summary 获取购物车
   * @request GET:/api/v1/carts
   * @secure
   */
  v1CartsList = (params: RequestParams = {}) =>
    this.request<V1CartsListData, any>({
      path: `/api/v1/carts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags carts, frontend
   * @name V1CartsClearCreate
   * @summary 清空购物车
   * @request POST:/api/v1/carts/clear
   * @secure
   */
  v1CartsClearCreate = (
    query?: {
      /** 会话ID */
      session_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CartsClearCreateData, any>({
      path: `/api/v1/carts/clear`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags carts, frontend
   * @name V1CartsItemsUpdate
   * @summary 更新购物车商品
   * @request PUT:/api/v1/carts/items
   * @secure
   */
  v1CartsItemsUpdate = (
    request: TradeUpdateItemReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CartsItemsUpdateData, any>({
      path: `/api/v1/carts/items`,
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
   * @tags carts, frontend
   * @name V1CartsItemsCreate
   * @summary 添加商品到购物车
   * @request POST:/api/v1/carts/items
   * @secure
   */
  v1CartsItemsCreate = (request: TradeAddItemReq, params: RequestParams = {}) =>
    this.request<V1CartsItemsCreateData, any>({
      path: `/api/v1/carts/items`,
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
   * @tags carts, frontend
   * @name V1CartsItemsDelete
   * @summary 删除购物车商品
   * @request DELETE:/api/v1/carts/items
   * @secure
   */
  v1CartsItemsDelete = (
    query: {
      /** SKU ID */
      sku_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CartsItemsDeleteData, any>({
      path: `/api/v1/carts/items`,
      method: "DELETE",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
