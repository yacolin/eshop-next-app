import { formatPrice } from "@/lib/utils";

interface Props {
  subtotal: number;
  shippingFee: number;
  couponDiscount: number;
  total: number;
}

export function PriceSummary({ subtotal, shippingFee, couponDiscount, total }: Props) {
  return (
    <div className="rounded-xl border bg-white px-6 py-5">
      <h3 className="mb-4 text-sm font-medium">价格明细</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">商品小计</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">运费</span>
          <span className={shippingFee === 0 ? "text-green-600" : ""}>
            {shippingFee === 0 ? "免运费" : formatPrice(shippingFee)}
          </span>
        </div>
        {couponDiscount > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">优惠券</span>
            <span className="text-destructive">-{formatPrice(couponDiscount)}</span>
          </div>
        )}
        <hr className="border-border/50" />
        <div className="flex justify-between text-base font-semibold">
          <span>合计</span>
          <span className="text-primary">{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
