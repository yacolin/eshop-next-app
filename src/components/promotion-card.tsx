import Link from "next/link";
import { Percent, Gift, Truck, BadgePercent, ArrowRight } from "lucide-react";
import type { GfEshopInternalModelEntityPromotions } from "@/lib/api-gen/data-contracts";

const promoTypeConfig: Record<number, { label: string; icon: typeof Percent; gradient: string }> = {
  1: { label: "Spend & Save", icon: BadgePercent, gradient: "from-rose-500 to-pink-600" },
  2: { label: "Discount", icon: Percent, gradient: "from-violet-500 to-purple-600" },
  3: { label: "Free Shipping", icon: Truck, gradient: "from-emerald-500 to-teal-600" },
  4: { label: "Free Gift", icon: Gift, gradient: "from-amber-500 to-orange-600" },
};

function formatDate(ts: string | number | undefined): string {
  if (!ts) return "";
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export function PromotionCard({ promotion }: { promotion: GfEshopInternalModelEntityPromotions }) {
  const config = promoTypeConfig[promotion.promo_type ?? 1] || promoTypeConfig[1];
  const Icon = config.icon;

  return (
    <Link
      href={`/promotions/${promotion.id}`}
      className={`flex flex-col justify-between rounded-xl bg-linear-to-br ${config.gradient} p-4 text-white shadow-xs transition-shadow hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <Icon className="size-5 opacity-80" />
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-xs">
          {config.label}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-bold leading-tight line-clamp-2">{promotion.promo_name}</h3>
        <p className="mt-1 text-[10px] opacity-75">
          {formatDate(promotion.start_time)} - {formatDate(promotion.end_time)}
        </p>
      </div>

      <div className="mt-3 flex items-center gap-1 text-[10px] font-medium opacity-90">
        Learn More <ArrowRight className="size-3" />
      </div>
    </Link>
  );
}
