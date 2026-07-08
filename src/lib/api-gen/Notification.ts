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
  GfEshopApiNotificationV1NotificationMarkAllAsReadReq,
  GfEshopApiNotificationV1NotificationSendSystemReq,
  V1NotificationDeleteData,
  V1NotificationListData,
  V1NotificationReadUpdateData,
  V1NotificationReadUpdatePayload,
  V1NotificationReadallUpdateData,
  V1NotificationSystemCreateData,
  V1NotificationTemplatesListData,
  V1NotificationUnreadListData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notification<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationList
   * @summary 通知列表
   * @request GET:/api/v1/notification
   */
  v1NotificationList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format string */
      title?: string;
      /** @format *int */
      category?: number;
      /** @format *bool */
      is_read?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationListData, any>({
      path: `/api/v1/notification`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationReadallUpdate
   * @summary 全部已读
   * @request PUT:/api/v1/notification/readall
   */
  v1NotificationReadallUpdate = (
    data: GfEshopApiNotificationV1NotificationMarkAllAsReadReq,
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationReadallUpdateData, any>({
      path: `/api/v1/notification/readall`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationSystemCreate
   * @summary 发送系统通知（admin）
   * @request POST:/api/v1/notification/system
   */
  v1NotificationSystemCreate = (
    data: GfEshopApiNotificationV1NotificationSendSystemReq,
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationSystemCreateData, any>({
      path: `/api/v1/notification/system`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationTemplatesList
   * @summary 通知模板列表
   * @request GET:/api/v1/notification/templates
   */
  v1NotificationTemplatesList = (params: RequestParams = {}) =>
    this.request<V1NotificationTemplatesListData, any>({
      path: `/api/v1/notification/templates`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationUnreadList
   * @summary 未读通知数
   * @request GET:/api/v1/notification/unread
   */
  v1NotificationUnreadList = (params: RequestParams = {}) =>
    this.request<V1NotificationUnreadListData, any>({
      path: `/api/v1/notification/unread`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationDelete
   * @summary 删除通知
   * @request DELETE:/api/v1/notification/{id}
   */
  v1NotificationDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1NotificationDeleteData, any>({
      path: `/api/v1/notification/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name V1NotificationReadUpdate
   * @summary 标记已读
   * @request PUT:/api/v1/notification/{id}/read
   */
  v1NotificationReadUpdate = (
    id: number,
    data: V1NotificationReadUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1NotificationReadUpdateData, any>({
      path: `/api/v1/notification/${id}/read`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
