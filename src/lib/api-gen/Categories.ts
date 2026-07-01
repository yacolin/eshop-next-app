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
  ProductCreateCategoryReq,
  ProductSetCategoryBrandsReq,
  ProductUpdateCategoryReq,
  V1CategoriesAllListData,
  V1CategoriesBrandsListData,
  V1CategoriesBrandsUpdateData,
  V1CategoriesChildrenListData,
  V1CategoriesCreateData,
  V1CategoriesDeleteData,
  V1CategoriesDetailData,
  V1CategoriesLevelDetailData,
  V1CategoriesListData,
  V1CategoriesRootListData,
  V1CategoriesUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Categories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags categories
   * @name V1CategoriesList
   * @summary 类目列表
   * @request GET:/api/v1/categories
   */
  v1CategoriesList = (
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
      /** 类目名称模糊搜索 */
      name?: string;
      /** 状态 1-启用 0-禁用 */
      status?: number;
      /** 层级 1-3 */
      level?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesListData, any>({
      path: `/api/v1/categories`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags categories
   * @name V1CategoriesCreate
   * @summary 创建类目
   * @request POST:/api/v1/categories
   */
  v1CategoriesCreate = (category: ProductCreateCategoryReq, params: RequestParams = {}) =>
    this.request<V1CategoriesCreateData, any>({
      path: `/api/v1/categories`,
      method: "POST",
      body: category,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags categories
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
   * @tags categories
   * @name V1CategoriesLevelDetail
   * @summary 按层级查询
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
   * @tags categories
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
   * @tags categories
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
   * @tags categories
   * @name V1CategoriesUpdate
   * @summary 更新类目
   * @request PUT:/api/v1/categories/{id}
   */
  v1CategoriesUpdate = (
    id: number,
    category: ProductUpdateCategoryReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesUpdateData, any>({
      path: `/api/v1/categories/${id}`,
      method: "PUT",
      body: category,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags categories
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
   * @tags categories
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
   * @tags categories
   * @name V1CategoriesBrandsUpdate
   * @summary 设置类目关联的品牌
   * @request PUT:/api/v1/categories/{id}/brands
   */
  v1CategoriesBrandsUpdate = (
    id: number,
    req: ProductSetCategoryBrandsReq,
    params: RequestParams = {},
  ) =>
    this.request<V1CategoriesBrandsUpdateData, any>({
      path: `/api/v1/categories/${id}/brands`,
      method: "PUT",
      body: req,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags categories
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
