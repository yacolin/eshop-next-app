"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Percent, ChevronRight, Gift, Truck, BadgePercent } from "lucide-react";
import { fetchActivePromotions } from "@/lib/api";
import { PromotionCard } from "@/components/promotion-card";
import type { Promotion } from "@/types/product";

const promoTypeIcons: Record<number, typeof Percent> = {
  1: BadgePercent, // 满减
  2: Percent, // 折扣
  3: Truck, // 包邮
  4: Gift, // 赠品
};

const promoTypeLabels: Record<number, string> = {
  1: "Spend & Save",
  2: "Discount",
  3: "Free Shipping",
  4: "Free Gift",
};

export function FlashSaleSection() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchActivePromotions(4);
        if (!cancelled) {
          setPromotions(data.list);
        }
      } catch {
        // fallback - no promotions to show
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (promotions.length === 0) {
    return null;
  }

  const Icon = promoTypeIcons[promotions[0].promo_type] || Percent;

  return (
    <section className="mx-4 mt-7 md:mx-auto md:max-w-6xl">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-base font-bold text-destructive">
            <Icon className="size-4" />
            Promotions
          </span>
        </div>
        <Link
          href="/promotions"
          className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground"
        >
          View All <ChevronRight className="size-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {promotions.map((promo) => (
          <PromotionCard key={promo.id} promotion={promo} />
        ))}
      </div>
    </section>
  );
}
