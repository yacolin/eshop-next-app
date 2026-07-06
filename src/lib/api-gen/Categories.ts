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
  GfEshopApiCategoriesV1CategoryCreateReq,
  V1CategoriesAllListData,
  V1CategoriesBrandsListData,
  V1CategoriesBrandsUpdateData,
  V1CategoriesBrandsUpdatePayload,
  V1CategoriesChildrenListData,
  V1CategoriesCreateData,
  V1CategoriesDeleteData,
  V1CategoriesDetailData,
  V1CategoriesLevelDetailData,
  V1CategoriesListData,
  V1CategoriesNonrootListData,
  V1CategoriesRootListData,
  V1CategoriesTreeListData,
  V1CategoriesUpdateData,
  V1CategoriesUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Categories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesList
   * @summary 类目列表（平铺）
   * @request GET:/api/v1/categories
   */
  v1CategoriesList = (
    query?: {
      /** @format int */
      page?: number;
      /** @format int */
      page_size?: number;
      /** @format int */
      parent_id?: number;
      /** @format int */
      status?: number;
      /** @format string */
      name?: string;
      /** @format int */
      level?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesListData, any>({
      path: `/api/v1/categories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesCreate
   * @summary 新增类目
   * @request POST:/api/v1/categories
   */
  v1CategoriesCreate = (
    data: GfEshopApiCategoriesV1CategoryCreateReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesCreateData, any>({
      path: `/api/v1/categories`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesAllList
   * @summary 所有类目
   * @request GET:/api/v1/categories/all
   */
  v1CategoriesAllList = (params: RequestParams = {}) =>
    this.request<V1CategoriesAllListData, any>({
      path: `/api/v1/categories/all`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesLevelDetail
   * @summary 层级类目
   * @request GET:/api/v1/categories/level/{level}
   */
  v1CategoriesLevelDetail = (level: number, params: RequestParams = {}) =>
    this.request<V1CategoriesLevelDetailData, any>({
      path: `/api/v1/categories/level/${level}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesNonrootList
   * @summary 非根类目
   * @request GET:/api/v1/categories/nonroot
   */
  v1CategoriesNonrootList = (params: RequestParams = {}) =>
    this.request<V1CategoriesNonrootListData, any>({
      path: `/api/v1/categories/nonroot`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesRootList
   * @summary 根类目
   * @request GET:/api/v1/categories/root
   */
  v1CategoriesRootList = (params: RequestParams = {}) =>
    this.request<V1CategoriesRootListData, any>({
      path: `/api/v1/categories/root`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesTreeList
   * @summary 类目树形结构
   * @request GET:/api/v1/categories/tree
   */
  v1CategoriesTreeList = (
    query?: {
      /** @format int */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesTreeListData, any>({
      path: `/api/v1/categories/tree`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesDelete
   * @summary 删除类目
   * @request DELETE:/api/v1/categories/{id}
   */
  v1CategoriesDelete = (id: number, params: RequestParams = {}) =>
    this.request<V1CategoriesDeleteData, any>({
      path: `/api/v1/categories/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesDetail
   * @summary 类目详情
   * @request GET:/api/v1/categories/{id}
   */
  v1CategoriesDetail = (id: number, params: RequestParams = {}) =>
    this.request<V1CategoriesDetailData, any>({
      path: `/api/v1/categories/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesUpdate
   * @summary 更新类目
   * @request PUT:/api/v1/categories/{id}
   */
  v1CategoriesUpdate = (
    id: number,
    data: V1CategoriesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesUpdateData, any>({
      path: `/api/v1/categories/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesBrandsList
   * @summary 类目下品牌
   * @request GET:/api/v1/categories/{id}/brands
   */
  v1CategoriesBrandsList = (id: number, params: RequestParams = {}) =>
    this.request<V1CategoriesBrandsListData, any>({
      path: `/api/v1/categories/${id}/brands`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesBrandsUpdate
   * @summary 类目关联品牌
   * @request PUT:/api/v1/categories/{id}/brands
   */
  v1CategoriesBrandsUpdate = (
    id: number,
    data: V1CategoriesBrandsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesBrandsUpdateData, any>({
      path: `/api/v1/categories/${id}/brands`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name V1CategoriesChildrenList
   * @summary 子类目
   * @request GET:/api/v1/categories/{id}/children
   */
  v1CategoriesChildrenList = (id: number, params: RequestParams = {}) =>
    this.request<V1CategoriesChildrenListData, any>({
      path: `/api/v1/categories/${id}/children`,
      method: "GET",
      format: "json",
      ...params,
    });
}
