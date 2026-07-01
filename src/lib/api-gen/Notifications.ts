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
  BaseSendSystemNotificationReq,
  V1NotificationsDeleteData,
  V1NotificationsListData,
  V1NotificationsReadUpdateData,
  V1NotificationsReadallUpdateData,
  V1NotificationsSystemCreateData,
  V1NotificationsUnreadListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags notifications
   * @name V1NotificationsList
   * @summary 通知列表
   * @request GET:/api/v1/notifications
   * @secure
   */
  v1NotificationsList = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationsListData, any>({
      path: `/api/v1/notifications`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notifications
   * @name V1NotificationsReadallUpdate
   * @summary 全部已读
   * @request PUT:/api/v1/notifications/readall
   * @secure
   */
  v1NotificationsReadallUpdate = (params: RequestParams = {}) =>
    this.request<V1NotificationsReadallUpdateData, any>({
      path: `/api/v1/notifications/readall`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags notifications
   * @name V1NotificationsSystemCreate
   * @summary 发送系统通知
   * @request POST:/api/v1/notifications/system
   * @secure
   */
  v1NotificationsSystemCreate = (
    request: BaseSendSystemNotificationReq,
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationsSystemCreateData, any>({
      path: `/api/v1/notifications/system`,
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
   * @tags notifications
   * @name V1NotificationsUnreadList
   * @summary 未读通知数
   * @request GET:/api/v1/notifications/unread
   * @secure
   */
  v1NotificationsUnreadList = (params: RequestParams = {}) =>
    this.request<V1NotificationsUnreadListData, any>({
      path: `/api/v1/notifications/unread`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notifications
   * @name V1NotificationsDelete
   * @summary 删除通知
   * @request DELETE:/api/v1/notifications/{id}
   * @secure
   */
  v1NotificationsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1NotificationsDeleteData, any>({
      path: `/api/v1/notifications/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags notifications
   * @name V1NotificationsReadUpdate
   * @summary 标记已读
   * @request PUT:/api/v1/notifications/{id}/read
   * @secure
   */
  v1NotificationsReadUpdate = (id: number, params: RequestParams = {}) =>
    this.request<V1NotificationsReadUpdateData, any>({
      path: `/api/v1/notifications/${id}/read`,
      method: "PUT",
      secure: true,
      ...params,
    });
}
