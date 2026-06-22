"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, ChevronRight, Clock } from "lucide-react";
import { fetchProductsCursor, fetchFlashActivities } from "@/lib/api";
import type { Product, FlashActivity } from "@/types/product";

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    String(h).padStart(2, "0"),
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0"),
  ];
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

export function FlashSaleSection() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [saleItems, setSaleItems] = useState<
    { product: Product; activity: FlashActivity }[]
  >([]);

  // Fetch flash sale products
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [activitiesData, products] = await Promise.all([
          fetchFlashActivities(),
          fetchProductsCursor(null),
        ]);
        if (cancelled) return;

        const activities = activitiesData.list;
        const productMap = new Map(products.list.map((p) => [p.id, p]));

        const seen = new Set<number>();
        const merged = activities
          .filter((a) => {
            if (a.status !== "active" || seen.has(a.product_id)) return false;
            seen.add(a.product_id);
            return productMap.has(a.product_id);
          })
          .map((a) => ({
            product: productMap.get(a.product_id)!,
            activity: a,
          }))
          .slice(0, 4);

        setSaleItems(merged);

        if (merged.length > 0) {
          const earliestEnd = Math.min(
            ...merged.map((m) => m.activity.end_time),
          );
          setTimeLeft(Math.max(0, Math.floor((earliestEnd - Date.now()) / 1000)));
        }
      } catch {
        // fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Countdown tick
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const [hh, mm, ss] = formatTime(timeLeft);

  return (
    <section className="mx-4 mt-7 md:mx-auto md:max-w-6xl">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-base font-bold text-destructive">
            <Zap className="size-4" />
            Flash Sale
          </span>
          <span className="flex items-center gap-0.5 rounded-md bg-destructive px-1.5 py-0.5 text-xs font-semibold tabular-nums text-destructive-foreground">
            <Clock className="size-3" />
            {hh}:{mm}:{ss}
          </span>
        </div>
        <Link
          href="/flash-sale"
          className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground"
        >
          View All <ChevronRight className="size-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {saleItems.length > 0
          ? saleItems.map((item) => {
              const p = item.product;
              const a = item.activity;
              const soldPct =
                a.total_stock > 0
                  ? Math.min(100, Math.round((a.sold_stock / a.total_stock) * 100))
                  : 0;
              return (
                <Link
                  key={a.id}
                  href={`/flash-sale/${a.id}`}
                  className="group rounded-xl bg-card p-3 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div
                    className={`mb-2 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br ${palettes[p.id % 8]}`}
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-background/40 backdrop-blur-sm">
                      <Zap className="size-5 text-foreground/30" />
                    </div>
                  </div>
                  <p className="truncate text-sm font-medium group-hover:text-primary">
                    {p.name}
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-destructive">
                      {formatPrice(a.flash_price)}
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(p.price)}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-destructive/10">
                    <div
                      className="h-full rounded-full bg-destructive"
                      style={{ width: `${soldPct}%` }}
                    />
                  </div>
                </Link>
              );
            })
          : Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl bg-card p-3 shadow-xs"
              >
                <div className="mb-2 aspect-square rounded-lg bg-muted" />
                <div className="h-4 w-3/4 rounded bg-muted" />
                <div className="mt-2 h-4 w-1/2 rounded bg-muted" />
              </div>
            ))}
      </div>
    </section>
  );
}
