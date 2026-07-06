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
  GfEshopApiUserAuthV1UserLoginReq,
  GfEshopApiUserAuthV1UserRefreshTokenReq,
  GfEshopApiUserAuthV1UserRegisterReq,
  V1UserAuthLoginCreateData,
  V1UserAuthRefreshCreateData,
  V1UserAuthRegisterCreateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserAuth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserAuth
   * @name V1UserAuthLoginCreate
   * @summary 用户密码登录
   * @request POST:/api/v1/user/auth/login
   */
  v1UserAuthLoginCreate = (
    data: GfEshopApiUserAuthV1UserLoginReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserAuthLoginCreateData, any>({
      path: `/api/v1/user/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserAuth
   * @name V1UserAuthRefreshCreate
   * @summary 刷新令牌
   * @request POST:/api/v1/user/auth/refresh
   */
  v1UserAuthRefreshCreate = (
    data: GfEshopApiUserAuthV1UserRefreshTokenReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserAuthRefreshCreateData, any>({
      path: `/api/v1/user/auth/refresh`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserAuth
   * @name V1UserAuthRegisterCreate
   * @summary 用户注册
   * @request POST:/api/v1/user/auth/register
   */
  v1UserAuthRegisterCreate = (
    data: GfEshopApiUserAuthV1UserRegisterReq,
    params: RequestParams = {},
  ) =>
    this.request<V1UserAuthRegisterCreateData, any>({
      path: `/api/v1/user/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
