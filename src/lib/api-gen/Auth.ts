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
  UserRefreshTokenReq,
  UserRegisterReq,
  V1AuthLoginPasswordCreateData,
  V1AuthRefreshCreateData,
  V1AuthRegisterCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags auth
   * @name V1AuthLoginPasswordCreate
   * @summary 密码登录
   * @request POST:/api/v1/auth/login/password
   */
  v1AuthLoginPasswordCreate = (request: UserPasswordLoginReq, params: RequestParams = {}) =>
    this.request<V1AuthLoginPasswordCreateData, any>({
      path: `/api/v1/auth/login/password`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name V1AuthRefreshCreate
   * @summary 刷新令牌
   * @request POST:/api/v1/auth/refresh
   */
  v1AuthRefreshCreate = (request: UserRefreshTokenReq, params: RequestParams = {}) =>
    this.request<V1AuthRefreshCreateData, any>({
      path: `/api/v1/auth/refresh`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name V1AuthRegisterCreate
   * @summary 注册
   * @request POST:/api/v1/auth/register
   */
  v1AuthRegisterCreate = (request: UserRegisterReq, params: RequestParams = {}) =>
    this.request<V1AuthRegisterCreateData, any>({
      path: `/api/v1/auth/register`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
