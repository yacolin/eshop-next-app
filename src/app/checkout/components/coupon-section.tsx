import { Tag } from "lucide-react";

export function CouponSection() {
  return (
    <div className="rounded-xl border bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <Tag className="size-4 text-muted-foreground/40" />
        <span className="text-sm text-muted-foreground/60">暂无可用优惠券</span>
      </div>
    </div>
  );
}
