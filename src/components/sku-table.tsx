import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { SkuWithSpec } from "@/types/product";

/**
 * SKU 列表表格 —— 产品/秒杀详情页底部共用。
 *
 * 以表格形式展示商品所有 SKU 变体，每行包含：SKU 编码、规格描述、
 * 库存状态、可用数量、价格（划线价对比）。
 *
 * 无 SKU 时（skus.length === 0）返回 null，不占用渲染空间。
 *
 * @param skus - 完整 SKU 列表，通常来自 ProductDetailResponse.skus
 */
export function SkuTable({ skus }: { skus: SkuWithSpec[] }) {
  if (skus.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border bg-card">
      <div className="border-b px-6 py-3">
        <h3 className="text-sm font-medium">All Variants ({skus.length})</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          {/* ── Table header ── */}
          <thead>
            <tr className="border-b text-xs text-muted-foreground">
              <th className="px-6 py-3 font-medium">SKU Code</th>
              <th className="px-6 py-3 font-medium">Specifications</th>
              <th className="px-6 py-3 font-medium">Stock</th>
              <th className="px-6 py-3 font-medium text-right">Price</th>
            </tr>
          </thead>

          {/* ── Table body ── */}
          <tbody className="divide-y">
            {skus.map((sku) => (
              <tr key={sku.id} className="transition-colors hover:bg-muted/30">
                {/* SKU Code */}
                <td className="px-6 py-3">
                  <span className="font-mono text-xs">{sku.sku_code ?? "—"}</span>
                  {sku.spec_summary && (
                    <div className="mt-0.5 text-xs text-muted-foreground">{sku.spec_summary}</div>
                  )}
                </td>

                {/* Specifications — iterated from parsed spec */}
                <td className="px-6 py-3">
                  {sku.spec && Object.keys(sku.spec).length > 0 ? (
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {Object.entries(sku.spec).map(([k, v]) => (
                        <span key={k} className="whitespace-nowrap text-xs">
                          <span className="text-muted-foreground">{k}:</span>{" "}
                          <span className="font-medium">{v}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </td>

                {/* Stock status + quantity */}
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    {sku.inventory_status === "充足" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                        <CheckCircle className="size-3.5" />
                        <span>
                          In Stock
                          {sku.available_quantity > 0 && (
                            <span className="ml-1 text-muted-foreground">
                              ({sku.available_quantity})
                            </span>
                          )}
                        </span>
                      </span>
                    ) : sku.inventory_status === "缺货" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                        <AlertTriangle className="size-3.5" />
                        <span>Only {sku.available_quantity} left</span>
                      </span>
                    ) : sku.inventory_status === "无货" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-destructive">
                        <XCircle className="size-3.5" />
                        Out of Stock
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </div>
                </td>

                {/* Price — show sale price with market price strikethrough */}
                <td className="px-6 py-3 text-right">
                  <span className="font-semibold text-primary">{formatPrice(sku.price ?? 0)}</span>
                  {sku.market_price && sku.market_price > (sku.price ?? 0) && (
                    <span className="ml-2 text-xs text-muted-foreground line-through">
                      {formatPrice(sku.market_price)}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
