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
  UserPasswordLoginReq,
  V1AuthLoginPasswordCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags auth, frontend
   * @name V1AuthLoginPasswordCreate
   * @summary 密码登录
   * @request POST:/api/v1/auth/login/password
   */
  v1AuthLoginPasswordCreate = (
    request: UserPasswordLoginReq,
    params: RequestParams = {},
  ) =>
    this.request<V1AuthLoginPasswordCreateData, any>({
      path: `/api/v1/auth/login/password`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
