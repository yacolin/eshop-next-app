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

import { V1MerchantBalancesDetailData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class MerchantBalances<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags MerchantBalances
   * @name V1MerchantBalancesDetail
   * @summary 商家余额
   * @request GET:/api/v1/merchant-balances/{merchant_id}
   */
  v1MerchantBalancesDetail = (merchantId: number, params: RequestParams = {}) =>
    this.request<V1MerchantBalancesDetailData, any>({
      path: `/api/v1/merchant-balances/${merchantId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
