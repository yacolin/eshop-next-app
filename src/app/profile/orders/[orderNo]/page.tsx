"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { fetchOrderDetail } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { ChevronRight, Home, Package, Loader2, MapPin } from "lucide-react";

interface Props {
  params: Promise<{ orderNo: string }>;
}

const statusLabels: Record<string, string> = {
  pending: "Pending Payment",
  paid: "Paid",
  shipped: "Shipped",
  delivered: "Delivered",
  completed: "Completed",
  cancelled: "Cancelled",
  closed: "Closed",
  refunding: "Refunding",
  refunded: "Refunded",
};

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  paid: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-muted text-muted-foreground",
  closed: "bg-muted text-muted-foreground",
  refunding: "bg-rose-100 text-rose-700",
  refunded: "bg-rose-100 text-rose-700",
};

function formatDate(ts: string | undefined) {
  if (!ts) return "-";
  return new Date(ts).toLocaleString("zh-CN");
}

export default function OrderDetailPage({ params }: Props) {
  const { orderNo } = use(params);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const d = await fetchOrderDetail(orderNo);
        if (cancelled) return;
        setData(d);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load order");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [orderNo]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <Package className="mx-auto mb-4 size-12 text-muted-foreground/30" />
          <p className="text-destructive">{error || "Order not found"}</p>
          <Button variant="outline" className="mt-4 cursor-pointer" asChild>
            <button
              onClick={() => window.history.back()}
              className="text-sm text-primary hover:underline"
            >
              Back to Orders
            </button>
          </Button>
        </div>
      </div>
    );
  }

  const order = data.order ?? {};
  const items = data.items ?? [];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-3xl px-4 py-6">
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
          <Link href="/profile" className="transition-colors hover:text-foreground">
            Profile
          </Link>
          <ChevronRight className="size-3.5" />
          <Link href="/profile?tab=orders" className="transition-colors hover:text-foreground">
            Orders
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{order.order_no}</span>
        </nav>

        {/* Status banner */}
        <div className="mb-6 rounded-xl bg-card p-5 shadow-xs ring-1 ring-foreground/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-muted-foreground">{order.order_no}</p>
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[order.status] || "bg-muted"}`}
                >
                  {statusLabels[order.status] || order.status}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(order.created_at)}
                </span>
              </div>
            </div>
            {order.payment_status && order.payment_status !== "unpaid" && (
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {order.payment_method || order.payment_status}
              </span>
            )}
          </div>
        </div>

        {/* Shipping address */}
        <div className="mb-4 rounded-xl bg-card p-5 shadow-xs ring-1 ring-foreground/5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground/40" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">
                {order.consignee}
                <span className="ml-3 font-normal text-muted-foreground">{order.phone}</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {[order.province, order.city, order.district, order.detail_addr]
                  .filter(Boolean)
                  .join(" ")}
              </p>
            </div>
          </div>
        </div>

        {/* Order items */}
        <div className="mb-4 rounded-xl bg-card shadow-xs ring-1 ring-foreground/5">
          <div className="border-b px-5 py-3">
            <h3 className="text-sm font-medium">Items</h3>
          </div>
          <div className="divide-y">
            {items.length > 0 ? (
              items.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4 px-5 py-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Package className="size-6 text-muted-foreground/30" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={item.product_id ? `/products/${item.product_id}` : "#"}
                      className="text-sm font-medium hover:text-primary"
                    >
                      {item.product_name || `Product #${item.product_id}`}
                    </Link>
                    {item.sku_spec && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {typeof item.sku_spec === "string"
                          ? Object.values(JSON.parse(item.sku_spec)).join(" / ")
                          : typeof item.sku_spec === "object"
                            ? Object.values(item.sku_spec).join(" / ")
                            : item.sku_spec}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <p>{formatPrice(item.price ?? 0)}</p>
                    <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <div className="w-20 text-right text-sm font-medium">
                    {formatPrice(item.subtotal ?? 0)}
                  </div>
                </div>
              ))
            ) : (
              <div className="px-5 py-8 text-center text-sm text-muted-foreground">
                No item details available
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-card p-5 shadow-xs ring-1 ring-foreground/5">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{formatPrice(order.total_amount ?? 0)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>{order.shipping_fee ? formatPrice(order.shipping_fee) : "Free"}</span>
            </div>
            {(order.discount_amount ?? 0) > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-{formatPrice(order.discount_amount)}</span>
              </div>
            )}
            <hr className="border-border/50" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPrice(order.pay_amount ?? order.total_amount ?? 0)}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-4 space-y-2 text-xs text-muted-foreground">
          {order.paid_at && <p>Paid: {formatDate(order.paid_at)}</p>}
          {order.shipped_at && <p>Shipped: {formatDate(order.shipped_at)}</p>}
          {order.delivered_at && <p>Delivered: {formatDate(order.delivered_at)}</p>}
          {order.completed_at && <p>Completed: {formatDate(order.completed_at)}</p>}
          {order.closed_at && <p>Closed: {formatDate(order.closed_at)}</p>}
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
}
