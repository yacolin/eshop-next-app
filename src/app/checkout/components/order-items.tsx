import { Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { CheckoutItem } from "@/types/order";

const palettes = [
  ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
  ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
  ["from-amber-500/20", "via-orange-500/10", "to-red-500/20"],
  ["from-indigo-500/20", "via-violet-500/10", "to-purple-500/20"],
];

interface Props {
  items: CheckoutItem[];
}

export function OrderItems({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border bg-white">
      <div className="border-b px-6 py-4">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <Package className="size-4" />
          商品信息
        </h2>
      </div>
      <div className="divide-y">
        {items.map((item, idx) => {
          const palette = palettes[idx % palettes.length];
          const specText = Object.entries(item.spec)
            .map(([k, v]) => `${k}: ${v}`)
            .join("  ");

          return (
            <div key={item.sku_id} className="flex gap-4 px-6 py-4">
              {/* Image placeholder */}
              <div className={`size-20 shrink-0 rounded-lg bg-linear-to-br ${palette.join(" ")}`} />
              {/* Info */}
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <p className="truncate text-sm font-medium">{item.product_name}</p>
                  {item.sku_name && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.sku_name}</p>
                  )}
                  {specText && <p className="text-xs text-muted-foreground">{specText}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{formatPrice(item.price)}</span>
                  <span className="text-xs text-muted-foreground">x{item.quantity}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t px-6 py-3">
        <p className="text-xs text-muted-foreground/60">支持退换货</p>
      </div>
    </div>
  );
}
