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
  V1ProductsDescriptionListData,
  V1ProductsDescriptionUpdateData,
  V1ProductsDescriptionUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProductDescriptions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ProductDescriptions
   * @name V1ProductsDescriptionList
   * @summary 商品详情内容
   * @request GET:/api/v1/products/{product_id}/description
   */
  v1ProductsDescriptionList = (productId: number, params: RequestParams = {}) =>
    this.request<V1ProductsDescriptionListData, any>({
      path: `/api/v1/products/${productId}/description`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductDescriptions
   * @name V1ProductsDescriptionUpdate
   * @summary 保存商品详情
   * @request PUT:/api/v1/products/{product_id}/description
   */
  v1ProductsDescriptionUpdate = (
    productId: number,
    data: V1ProductsDescriptionUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1ProductsDescriptionUpdateData, any>({
      path: `/api/v1/products/${productId}/description`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
