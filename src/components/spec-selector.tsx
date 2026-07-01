"use client";

import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import type { ProductSKU } from "@/lib/api-gen/data-contracts";
import type { ProductProductAttrResponse } from "@/lib/api-gen/data-contracts";

/**
 * 商品规格选择器 —— 渲染属性按钮组 + 匹配 SKU 信息卡片。
 *
 * 根据后端 API 返回的 ProductAttributeItem[] 渲染每组属性按钮：
 * - 已选属性高亮（primary 色）
 * - 不可用属性置灰并加删除线
 * - 当所有属性都选择后，下方显示匹配到的 SKU 名称和编码
 *
 * 【设计要点】
 * - 无 spec 数据的 SKU（hasSpecSkus=false）不渲染任何内容，返回 null
 * - 属性按钮的可用性（isAvailable）通过检查所有 SKU 中是否存在该属性值判断
 *   （跨 SKU 组合覆盖，而非仅看当前已选组合）
 * - 匹配的 SKU 信息使用 bg-primary/5 底色卡片突出显示，区别于普通列表
 *
 * @param hasSpecSkus  - 是否存在带 spec 数据的 SKU，无则隐藏整个选择器
 * @param attrOptions  - 属性定义列表（来自 fetchProductAttributes API）
 * @param selectedAttrs - 当前已选属性映射 { 属性名: 属性值 }
 * @param skus         - 完整 SKU 列表，用于判断属性值可用性
 * @param onAttrSelect - 属性选中/取消回调，接收 (attrName, value)
 * @param matchedSku   - 当前已选属性匹配到的 SKU，null 表示无匹配
 */
export function SpecSelector({
  hasSpecSkus,
  attrOptions,
  selectedAttrs,
  skus,
  onAttrSelect,
  matchedSku,
}: {
  hasSpecSkus: boolean;
  attrOptions: ProductProductAttrResponse[];
  selectedAttrs: Record<string, string>;
  skus: ProductSKU[];
  onAttrSelect: (attrName: string, value: string) => void;
  matchedSku: ProductSKU | null;
}) {
  if (!hasSpecSkus || attrOptions.length === 0) return null;

  return (
    <div className="space-y-4">
      {attrOptions.map((attr) => (
        <div key={attr.attribute_name}>
          <p className="mb-2 text-sm font-medium">{attr.attribute_name}</p>
          <div className="flex flex-wrap gap-2">
            {(attr.values ?? []).map((v: any, vi: number) => {
              const isSelected = selectedAttrs[attr.attribute_name ?? ""] === v.value;
              const isAvailable = (skus as any).some(
                (sku: any) => sku.spec?.[attr.attribute_name ?? ""] === v.value,
              );
              return (
                <button
                  key={attr.attribute_name + "-" + vi}
                  onClick={() => isAvailable && onAttrSelect(attr.attribute_name ?? "", v.value)}
                  disabled={!isAvailable}
                  className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : isAvailable
                        ? "border-border hover:border-primary hover:text-primary"
                        : "cursor-not-allowed border-border/50 text-muted-foreground/40 line-through"
                  }`}
                >
                  {v.value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {matchedSku && (
        <div className="rounded-lg bg-primary/5 px-4 py-3">
          <p className="text-sm font-semibold text-foreground">{matchedSku.sku_code ?? ""}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            SKU: <span className="font-mono">{matchedSku.sku_code}</span>
          </p>
          <p className="mt-1 text-xs font-medium">
            {matchedSku.available_quantity !== undefined &&
            matchedSku.inventory_status === "outofstock" ? (
              <span className="inline-flex items-center gap-1 text-destructive">
                <XCircle className="size-3.5" />
                Out of Stock
              </span>
            ) : matchedSku.available_quantity !== undefined &&
              matchedSku.inventory_status === "lowstock" ? (
              <span className="inline-flex items-center gap-1 text-amber-600">
                <AlertTriangle className="size-3.5" />
                Only {matchedSku.available_quantity} left
              </span>
            ) : matchedSku.available_quantity !== undefined ? (
              <span className="inline-flex items-center gap-1 text-emerald-600">
                <CheckCircle className="size-3.5" />
                In Stock
              </span>
            ) : null}
          </p>
        </div>
      )}
    </div>
  );
}
