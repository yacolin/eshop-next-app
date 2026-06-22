"use client";

import { useState, useEffect, useMemo, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import {
  ShoppingCart,
  Minus,
  Plus,
  Package,
  ChevronRight,
  Home,
  Truck,
  RotateCcw,
  ShieldCheck,
  Zap,
  Clock,
} from "lucide-react";
import { fetchFlashActivityById } from "@/lib/api";
import type { Product, FlashActivity } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const palettes = [
  ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
  ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
  ["from-amber-500/20", "via-orange-500/10", "to-red-500/20"],
  ["from-indigo-500/20", "via-violet-500/10", "to-purple-500/20"],
];

export default function FlashSaleDetailPage({ params }: Props) {
  const { id } = use(params);
  const activityId = Number(id);
  const { addItem } = useCart();
  const router = useRouter();

  const [activity, setActivity] = useState<FlashActivity | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const imageColors = useMemo(() => {
    const offset = (product?.id ?? activityId) % palettes.length;
    return palettes.map((_, i) => palettes[(i + offset) % palettes.length]);
  }, [product?.id, activityId]);

  // Fetch activity + product
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const act = await fetchFlashActivityById(activityId);
        if (cancelled) return;
        setActivity(act);

        // Set countdown
        const remaining = Math.max(0, Math.floor((act.end_time - Date.now()) / 1000));
        setTimeLeft(remaining);

        // Fetch product
        const res = await fetch(`/api/v1/products/cache/${act.product_id}`);
        if (cancelled) return;
        if (!res.ok) throw new Error(`Failed to load product (${res.status})`);
        const json = await res.json();
        if (cancelled) return;
        if (json.code !== 0) throw new Error(json.message || "Failed to load product");
        setProduct(json.data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activityId]);

  // Countdown tick
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  async function handleAddToCart() {
    if (!product || adding) return;
    setAdding(true);
    try {
      for (let i = 0; i < quantity; i++) {
        await addItem(product.id, product.sku);
      }
    } finally {
      setAdding(false);
    }
  }

  function handleBuyNow() {
    if (!product) return;
    handleAddToCart().then(() => router.push("/"));
  }

  function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [String(h).padStart(2, "0"), String(m).padStart(2, "0"), String(s).padStart(2, "0")];
  }

  const [hh, mm, ss] = formatTime(timeLeft);
  const soldPct =
    activity && activity.total_stock > 0
      ? Math.min(100, Math.round((activity.sold_stock / activity.total_stock) * 100))
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 p-4 dark:bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 h-5 w-48 animate-pulse rounded bg-muted" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-square animate-pulse rounded-xl bg-muted" />
            <div className="space-y-5">
              <div className="h-6 w-1/4 animate-pulse rounded bg-muted" />
              <div className="h-8 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-10 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-12 w-full animate-pulse rounded bg-muted" />
              <div className="h-16 w-full animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product || !activity) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-black">
        <div className="w-full max-w-md text-center">
          <Zap className="mx-auto mb-4 size-16 text-muted-foreground/30" />
          <p className="mb-1 text-destructive">{error || "Flash sale not found"}</p>
          <p className="mb-4 text-sm text-muted-foreground">
            This flash sale activity does not exist or has ended.
          </p>
          <Button variant="outline" className="cursor-pointer" asChild>
            <Link href="/flash-sale">Back to Flash Sale</Link>
          </Button>
        </div>
      </div>
    );
  }

  const discount = Math.max(0, Math.round((1 - activity.flash_price / product.price) * 100));

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 py-6">
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
          <Link href="/flash-sale" className="transition-colors hover:text-foreground">
            Flash Sale
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* ─── Main section ─── */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ── Left: Image ── */}
          <div className="space-y-3">
            <div
              className={`flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${imageColors[0].join(" ")}`}
            >
              <Zap className="size-28 text-muted-foreground/20" />
            </div>
          </div>

          {/* ── Right: Info ── */}
          <div className="flex flex-col gap-5">
            {/* Status + Countdown */}
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium ${
                  activity.status === "active"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Zap className="size-3" />
                {activity.status === "active" ? "Active" : "Upcoming"}
              </span>
              <span className="flex items-center gap-1 rounded-md bg-destructive px-2 py-0.5 text-xs font-semibold tabular-nums text-destructive-foreground">
                <Clock className="size-3" />
                {hh}:{mm}:{ss}
              </span>
            </div>

            {/* SKU + Name */}
            <div>
              <div className="mb-2 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                <Package className="size-3" />
                {product.sku}
              </div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>
            </div>

            {/* Flash Price */}
            <div className="rounded-xl bg-gradient-to-r from-destructive/10 to-transparent px-5 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-destructive">
                  {formatPrice(activity.flash_price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="rounded-md bg-destructive/10 px-1.5 py-0.5 text-xs font-semibold text-destructive">
                  -{discount}%
                </span>
              </div>
            </div>

            {/* Stock progress */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Sold: {activity.sold_stock}</span>
                <span>Total: {activity.total_stock}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-destructive/10">
                <div
                  className="h-full rounded-full bg-destructive transition-all"
                  style={{ width: `${soldPct}%` }}
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-l-lg border transition-colors hover:bg-muted"
                  aria-label="Decrease quantity"
                >
                  <Minus className="size-3.5" />
                </button>
                <span className="flex h-9 w-12 items-center justify-center border-y text-sm font-medium tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-r-lg border transition-colors hover:bg-muted"
                  aria-label="Increase quantity"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 cursor-pointer gap-2"
                onClick={handleAddToCart}
                disabled={adding || activity.status !== "active"}
              >
                <ShoppingCart className="size-4" />
                {adding ? "Adding..." : "Add to Cart"}
              </Button>
              <Button
                size="lg"
                className="flex-1 cursor-pointer gap-2"
                onClick={handleBuyNow}
                disabled={adding || activity.status !== "active"}
              >
                <Zap className="size-4" />
                Buy Now
              </Button>
            </div>

            {/* Service promises */}
            <div className="grid grid-cols-3 gap-2 rounded-xl border bg-card/50 p-3 text-center text-xs text-muted-foreground">
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="size-4" />
                7-day return
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="size-4" />
                Free shipping
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="size-4" />
                Authentic
              </div>
            </div>

            <hr className="border-border/50" />

            {/* Flash info */}
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Activity ID</span>
                <span className="font-mono">{activity.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Start Time</span>
                <span>{new Date(activity.start_time).toLocaleString("zh-CN")}</span>
              </div>
              <div className="flex justify-between">
                <span>End Time</span>
                <span>{new Date(activity.end_time).toLocaleString("zh-CN")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom: Product details ─── */}
        <div className="mt-10 rounded-xl border bg-card">
          <div className="border-b px-6 py-4">
            <h3 className="text-base font-medium">{product.name}</h3>
          </div>
          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description || "No description available."}
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/flash-sale">&larr; Back to Flash Sale</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
