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
  GfEshopApiDepartmentsV1CreateReq,
  V1DepartmentsAllListData,
  V1DepartmentsChildrenListData,
  V1DepartmentsCreateData,
  V1DepartmentsDeleteData,
  V1DepartmentsDetailData,
  V1DepartmentsListData,
  V1DepartmentsTreeListData,
  V1DepartmentsUpdateData,
  V1DepartmentsUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Departments<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsList
   * @summary 部门列表（平铺）
   * @request GET:/api/v1/departments
   */
  v1DepartmentsList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int64 */
      parent_id?: number;
      /** @format string */
      name?: string;
      /** @format *int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1DepartmentsListData, any>({
      path: `/api/v1/departments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsCreate
   * @summary 新增部门
   * @request POST:/api/v1/departments
   */
  v1DepartmentsCreate = (
    data: GfEshopApiDepartmentsV1CreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1DepartmentsCreateData, any>({
      path: `/api/v1/departments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsAllList
   * @summary 所有部门
   * @request GET:/api/v1/departments/all
   */
  v1DepartmentsAllList = (params: RequestParams = {}) =>
    this.request<V1DepartmentsAllListData, any>({
      path: `/api/v1/departments/all`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsTreeList
   * @summary 部门树形结构
   * @request GET:/api/v1/departments/tree
   */
  v1DepartmentsTreeList = (
    query?: {
      /** @format *int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1DepartmentsTreeListData, any>({
      path: `/api/v1/departments/tree`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsDelete
   * @summary 删除部门
   * @request DELETE:/api/v1/departments/{id}
   */
  v1DepartmentsDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1DepartmentsDeleteData, any>({
      path: `/api/v1/departments/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsDetail
   * @summary 部门详情
   * @request GET:/api/v1/departments/{id}
   */
  v1DepartmentsDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1DepartmentsDetailData, any>({
      path: `/api/v1/departments/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsUpdate
   * @summary 更新部门
   * @request PUT:/api/v1/departments/{id}
   */
  v1DepartmentsUpdate = (
    id: number,
    data: V1DepartmentsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1DepartmentsUpdateData, any>({
      path: `/api/v1/departments/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name V1DepartmentsChildrenList
   * @summary 子部门
   * @request GET:/api/v1/departments/{id}/children
   */
  v1DepartmentsChildrenList = (id: number, params: RequestParams = {}) =>
    this.request<V1DepartmentsChildrenListData, any>({
      path: `/api/v1/departments/${id}/children`,
      method: "GET",
      format: "json",
      ...params,
    });
}
