import { formatPrice } from "@/lib/utils";
import type { ProductSKU } from "@/types/product";

/**
 * SKU 列表表格 —— 产品/秒杀详情页底部共用。
 *
 * 以表格形式展示商品所有 SKU 变体，每行包含：SKU 编码、名称、规格描述、价格。
 * 无 SKU 时（skus.length === 0）返回 null，不占用渲染空间。
 *
 * @param skus - 完整 SKU 列表，通常来自 ProductDetailResponse.skus
 */
export function SkuTable({ skus }: { skus: ProductSKU[] }) {
  if (skus.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border bg-card">
      <div className="border-b px-6 py-3">
        <h3 className="text-sm font-medium">All Variants ({skus.length})</h3>
      </div>
      <div className="divide-y px-6 py-2">
        {skus.map((sku) => (
          <div key={sku.id} className="flex items-center justify-between py-2.5 text-sm">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">{sku.sku_code ?? ""}</span>
              <span className="text-xs">{sku.sku_code ?? ""}</span>
              {sku.spec && Object.keys(sku.spec).length > 0 && (
                <span className="text-xs text-muted-foreground">
                  {Object.entries(sku.spec)
                    .map(([k, v]) => `${k}:${v}`)
                    .join(", ")}
                </span>
              )}
            </div>
            <span className="font-medium text-primary">{formatPrice(sku.price ?? 0)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
