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

import { HelloListData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Hello<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Hello
   * @name HelloList
   * @summary You first hello api
   * @request GET:/hello
   */
  helloList = (params: RequestParams = {}) =>
    this.request<HelloListData, any>({
      path: `/hello`,
      method: "GET",
      ...params,
    });
}
