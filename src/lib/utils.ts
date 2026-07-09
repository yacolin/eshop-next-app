import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProductProductAttrResponse, ProductSKU } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化价格（分 → ¥ 字符串）。
 *
 * 项目统一以"分"为价格单位传输和存储，此函数负责展示层转换。
 * 使用 zh-CN 区域格式，始终显示两位小数：¥100.00、¥1,234.50
 *
 * @param cents - 以分为单位的价格（如 9900 表示 ¥99.00）
 */
/**
 * Parse spec_summary into a structured spec object by matching values to attribute names.
 *
 * The backend constructs spec_summary by concatenating attribute values in the same
 * order as the product's attribute definitions. This function reverses that by
 * splitting on " / " and pairing each part with the corresponding attribute name.
 */
export function parseSkuSpec(
  specSummary: string | undefined,
  attrNames: string[],
): Record<string, string> {
  if (!specSummary || attrNames.length === 0) return {};
  const parts = specSummary.split(" / ");
  if (parts.length !== attrNames.length) return {};
  const spec: Record<string, string> = {};
  attrNames.forEach((name, i) => {
    spec[name] = parts[i].trim();
  });
  return spec;
}

export function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/**
 * 根据已选的规格属性匹配 SKU。
 *
 * 遍历 SKU 列表，找出 spec 与 selected 完全匹配的 SKU。
 * 当没有任何属性被选择且 SKU 也没有 spec 数据时（hasAttrs=false），自动返回第一个无 spec 的 SKU。
 *
 * 【匹配逻辑】
 * - hasAttrs=false + 无已选项 → 返回第一个无 spec 的 SKU（兼容无规格商品）
 * - 有已选项 → 要求已选 keys 全部匹配 sku.spec（允许 sku 有多余属性不做要求）
 * - 无匹配 → 返回 null
 *
 * @param skus     - SKU 列表
 * @param selected - 已选属性映射 { attrName: value }
 * @param hasAttrs - 是否存在带 spec 的 SKU，用于判断是否需要规格选择
 */
export function findMatchingSku<T extends { spec?: Record<string, string> }>(
  skus: T[],
  selected: Record<string, string>,
  hasAttrs: boolean,
): T | null {
  const keys = Object.keys(selected);
  if (keys.length === 0 && !hasAttrs) {
    return skus.find((sku) => !sku.spec || Object.keys(sku.spec).length === 0) ?? null;
  }
  if (keys.length === 0) return null;
  return (
    skus.find((sku) => {
      if (!sku.spec) return false;
      return keys.every((key) => sku.spec![key] === selected[key]);
    }) ?? null
  );
}
