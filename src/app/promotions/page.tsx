"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Percent, Gift, Truck, BadgePercent, ChevronRight, Home } from "lucide-react";
import { Promotions } from "@/lib/api-gen/Promotions";
import type { MarketingPromotion } from "@/lib/api-gen/data-contracts";

const promoApi = new Promotions({ baseUrl: "" });

const promoTypeConfig: Record<number, { label: string; icon: typeof Percent; gradient: string }> = {
  1: { label: "Spend & Save", icon: BadgePercent, gradient: "from-rose-500 to-pink-600" },
  2: { label: "Discount", icon: Percent, gradient: "from-violet-500 to-purple-600" },
  3: { label: "Free Shipping", icon: Truck, gradient: "from-emerald-500 to-teal-600" },
  4: { label: "Free Gift", icon: Gift, gradient: "from-amber-500 to-orange-600" },
};

function formatDate(ts: string | number | undefined) {
  if (!ts) return "";
  return new Date(ts).toLocaleDateString("zh-CN", { month: "short", day: "numeric" });
}

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<MarketingPromotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await promoApi.v1PromotionsList({ size: 50 });
        if (!cancelled) setPromotions(res.data?.data?.list ?? []);
      } catch {
        // no promotions
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 p-4 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 h-5 w-48 animate-pulse rounded bg-muted" />
          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-6">
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
          <span className="text-foreground">Promotions</span>
        </nav>

        <h1 className="mb-6 text-2xl font-bold">Promotions</h1>

        {promotions.length === 0 ? (
          <div className="rounded-xl border bg-card px-8 py-12 text-center">
            <Percent className="mx-auto mb-4 size-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">No active promotions right now.</p>
            <Link href="/" className="mt-3 inline-block text-sm text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {promotions.map((promo) => {
              const config = promoTypeConfig[promo.promo_type ?? 1] || promoTypeConfig[1];
              const Icon = config.icon;
              return (
                <Link
                  key={promo.id}
                  href={`/promotions/${promo.id}`}
                  className={`flex flex-col justify-between rounded-xl bg-linear-to-br ${config.gradient} p-5 text-white shadow-xs transition-shadow hover:shadow-md`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-5 opacity-80" />
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium">
                      {config.label}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold">{promo.promo_name}</h3>
                    <p className="mt-1 text-xs opacity-75">
                      {formatDate(promo.start_time)} – {formatDate(promo.end_time)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
