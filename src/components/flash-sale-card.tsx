"use client";

import Link from "next/link";
import { Zap, Clock } from "lucide-react";
import type { Product, FlashActivity } from "@/types/product";

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const palettes = [
  "from-blue-500/20 via-purple-500/10 to-pink-500/20",
  "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  "from-amber-500/20 via-orange-500/10 to-red-500/20",
  "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
  "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
  "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  "from-lime-500/20 via-green-500/10 to-emerald-500/20",
  "from-orange-500/20 via-yellow-500/10 to-amber-500/20",
];

export function FlashSaleCard({
  product,
  activity,
  showStatus = false,
}: {
  product: Product;
  activity: FlashActivity;
  showStatus?: boolean;
}) {
  const soldPct =
    activity.total_stock > 0
      ? Math.min(100, Math.round((activity.sold_stock / activity.total_stock) * 100))
      : 0;

  return (
    <Link
      href={`/flash-sale/${activity.id}`}
      className="group rounded-xl bg-card p-3 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20"
    >
      <div
        className={`mb-2 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br ${palettes[product.id % 8]}`}
      >
        <div className="flex size-10 items-center justify-center rounded-lg bg-background/40 backdrop-blur-sm">
          <Zap className="size-5 text-foreground/30" />
        </div>
      </div>
      <p className="truncate text-sm font-medium group-hover:text-primary">{product.name}</p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="text-sm font-bold text-destructive">
          {formatPrice(activity.flash_price)}
        </span>
        <span className="text-xs text-muted-foreground line-through">
          {formatPrice(product.price)}
        </span>
      </div>

      {showStatus ? (
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[10px] font-medium ${
              activity.status === "active"
                ? "bg-destructive/10 text-destructive"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <Clock className="size-2.5" />
            {activity.status === "active" ? "Ending soon" : "Upcoming"}
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-destructive/10">
            <div className="h-full rounded-full bg-destructive" style={{ width: `${soldPct}%` }} />
          </div>
        </div>
      ) : (
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-destructive/10">
          <div className="h-full rounded-full bg-destructive" style={{ width: `${soldPct}%` }} />
        </div>
      )}
    </Link>
  );
}
