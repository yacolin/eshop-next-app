"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ChevronRight, Home, Percent, Gift, Truck, BadgePercent, Package } from "lucide-react";
import { fetchPromotionDetail } from "@/lib/api";
import { EmptyState } from "@/components/empty-state";
import type { PromotionDetailResponse } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

const promoConfig: Record<number, { label: string; icon: typeof Percent }> = {
  1: { label: "Spend & Save", icon: BadgePercent },
  2: { label: "Discount", icon: Percent },
  3: { label: "Free Shipping", icon: Truck },
  4: { label: "Free Gift", icon: Gift },
};

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function PromotionDetailPage({ params }: Props) {
  const { id } = use(params);
  const [detail, setDetail] = useState<PromotionDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const d = await fetchPromotionDetail(Number(id));
        if (!cancelled) setDetail(d);
      } catch {
        // handled
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 p-4 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 h-5 w-48 animate-pulse rounded bg-muted" />
          <div className="h-40 animate-pulse rounded-xl bg-muted" />
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <Package className="mx-auto mb-4 size-12 text-muted-foreground/30" />
          <p className="text-muted-foreground">Promotion not found</p>
          <Link
            href="/promotions"
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            Back to Promotions
          </Link>
        </div>
      </div>
    );
  }

  const config = promoConfig[detail.promo_type] || promoConfig[1];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Home className="size-3.5" />
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <Link href="/promotions" className="transition-colors hover:text-foreground">
            Promotions
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{detail.promo_name}</span>
        </nav>

        {/* Promo Banner */}
        <div className="mb-8 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 p-6 text-white shadow-xs md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white/15 p-3 backdrop-blur-xs">
              <Icon className="size-8" />
            </div>
            <div className="flex-1">
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium">
                {config.label}
              </span>
              <h1 className="mt-2 text-xl font-bold md:text-2xl">{detail.promo_name}</h1>
              <p className="mt-2 text-sm opacity-80">
                {formatDate(detail.start_time)} – {formatDate(detail.end_time)}
              </p>
              {detail.total_quantity > 0 && (
                <p className="mt-1 text-xs opacity-60">
                  Limited: {detail.used_quantity}/{detail.total_quantity} claimed
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Products */}
        <h2 className="mb-4 text-lg font-bold">Featured Products</h2>
        {detail.products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {detail.products.map((p) => (
              <Link
                key={p.id}
                href={p.product_id ? `/products/${p.product_id}` : "#"}
                className="group rounded-xl bg-card p-3 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-2 flex aspect-square items-center justify-center rounded-lg bg-muted">
                  <Package className="size-8 text-muted-foreground/30" />
                </div>
                <p className="truncate text-sm font-medium group-hover:text-primary">
                  {p.spu_name || `Product #${p.product_id}`}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState message="No products in this promotion yet." />
        )}
      </div>
    </div>
  );
}
