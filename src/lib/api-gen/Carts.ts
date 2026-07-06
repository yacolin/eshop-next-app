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
  GfEshopApiCartsV1CartsAddItemReq,
  GfEshopApiCartsV1CartsClearReq,
  GfEshopApiCartsV1CartsUpdateItemReq,
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
   * @tags Carts
   * @name V1CartsList
   * @summary 获取购物车
   * @request GET:/api/v1/carts
   */
  v1CartsList = (params: RequestParams = {}) =>
    this.request<V1CartsListData, any>({
      path: `/api/v1/carts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Carts
   * @name V1CartsClearCreate
   * @summary 清空购物车
   * @request POST:/api/v1/carts/clear
   */
  v1CartsClearCreate = (
    data: GfEshopApiCartsV1CartsClearReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CartsClearCreateData, any>({
      path: `/api/v1/carts/clear`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Carts
   * @name V1CartsItemsCreate
   * @summary 添加商品到购物车
   * @request POST:/api/v1/carts/items
   */
  v1CartsItemsCreate = (
    data: GfEshopApiCartsV1CartsAddItemReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CartsItemsCreateData, any>({
      path: `/api/v1/carts/items`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Carts
   * @name V1CartsItemsUpdate
   * @summary 更新购物车商品数量
   * @request PUT:/api/v1/carts/items
   */
  v1CartsItemsUpdate = (
    data: GfEshopApiCartsV1CartsUpdateItemReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CartsItemsUpdateData, any>({
      path: `/api/v1/carts/items`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Carts
   * @name V1CartsItemsDelete
   * @summary 删除购物车商品
   * @request DELETE:/api/v1/carts/items/{sku_id}
   */
  v1CartsItemsDelete = (skuId: number, params: RequestParams = {}) =>
    this.request<V1CartsItemsDeleteData, any>({
      path: `/api/v1/carts/items/${skuId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
