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
  V1CategoriesAllListData,
  V1CategoriesBrandsListData,
  V1CategoriesChildrenListData,
  V1CategoriesDetailData,
  V1CategoriesRootListData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Categories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags categories, frontend
   * @name V1CategoriesAllList
   * @summary 全部分类
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
   * @tags categories, frontend
   * @name V1CategoriesRootList
   * @summary 根类目列表
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
   * @tags categories, frontend
   * @name V1CategoriesDetail
   * @summary 获取类目详情
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
   * @tags categories, frontend
   * @name V1CategoriesBrandsList
   * @summary 查类目下的品牌列表
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
   * @tags categories, frontend
   * @name V1CategoriesChildrenList
   * @summary 子类目列表
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
