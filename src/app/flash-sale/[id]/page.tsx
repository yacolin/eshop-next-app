"use client";

import { useState, useEffect, useMemo, use, useCallback } from "react";
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
import { fetchFlashActivityById, fetchProductDetail } from "@/lib/api";
import type { FlashActivity, SKUResponse, ProductResponse } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function buildAttributeOptions(skus: SKUResponse[]) {
  const attrMap = new Map<string, Set<string>>();
  for (const sku of skus) {
    if (!sku.spec) continue;
    for (const [key, value] of Object.entries(sku.spec)) {
      if (!attrMap.has(key)) attrMap.set(key, new Set());
      attrMap.get(key)!.add(value);
    }
  }
  return Array.from(attrMap.entries()).map(([name, values]) => ({
    name,
    values: Array.from(values),
  }));
}

function findMatchingSku(
  skus: SKUResponse[],
  selected: Record<string, string>,
  attrOptions: { name: string; values: string[] }[],
): SKUResponse | null {
  const keys = Object.keys(selected);
  if (keys.length === 0 && attrOptions.length === 0) {
    return skus.find((sku) => !sku.spec || Object.keys(sku.spec).length === 0) ?? null;
  }
  if (keys.length === 0) return null;
  return (
    skus.find((sku) => {
      if (!sku.spec) return false;
      return keys.every((key) => sku.spec![key] === selected[key]);
    }) ?? null
  );
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
  const [product, setProduct] = useState<ProductResponse | null>(null);
  const [skus, setSkus] = useState<SKUResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedAttrs, setSelectedAttrs] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState(0);

  // Scroll to top on mount — prevent inherited scroll from list page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageColors = useMemo(() => {
    const offset = (product?.id ?? activityId) % palettes.length;
    return palettes.map((_, i) => palettes[(i + offset) % palettes.length]);
  }, [product?.id, activityId]);

  // Fetch activity + product detail
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const act = await fetchFlashActivityById(activityId);
        if (cancelled) return;
        setActivity(act);

        const remaining = Math.max(0, Math.floor((act.end_time - Date.now()) / 1000));
        setTimeLeft(remaining);

        const detail = await fetchProductDetail(act.product_id);
        if (cancelled) return;
        setProduct(detail.product);
        setSkus(detail.skus);

        // Auto-select first option of each attribute group
        const attrs = buildAttributeOptions(detail.skus);
        if (attrs.length > 0) {
          const initial: Record<string, string> = {};
          attrs.forEach((attr) => {
            initial[attr.name] = attr.values[0];
          });
          setSelectedAttrs(initial);
        }
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

  const attrOptions = useMemo(() => buildAttributeOptions(skus), [skus]);

  const matchedSku = useMemo(
    () => findMatchingSku(skus, selectedAttrs, attrOptions),
    [skus, selectedAttrs, attrOptions],
  );

  const allSelected = useMemo(
    () => attrOptions.length === 0 || attrOptions.every((opt) => selectedAttrs[opt.name]),
    [attrOptions, selectedAttrs],
  );

  const handleAttrSelect = useCallback((attrName: string, value: string) => {
    setSelectedAttrs((prev) => {
      const next = { ...prev };
      if (next[attrName] === value) {
        delete next[attrName];
      } else {
        next[attrName] = value;
      }
      return next;
    });
  }, []);

  async function handleAddToCart() {
    if (!product || !matchedSku || adding) return;
    setAdding(true);
    try {
      for (let i = 0; i < quantity; i++) {
        await addItem(matchedSku.id);
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

  const originalPrice = matchedSku?.price ?? product?.min_price ?? 0;
  const discount =
    activity && originalPrice > 0
      ? Math.max(0, Math.round((1 - activity.flash_price / originalPrice) * 100))
      : 0;

  const canAddToCart = matchedSku != null && allSelected;

  // Loading state
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

  // Error state
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
          <div className="space-y-2">
            <div
              className={`flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${imageColors[selectedImage].join(" ")}`}
            >
              <Zap className="size-28 text-muted-foreground/20" />
            </div>
            {/* 4 fixed thumbnail slots — purely visual, switch main image */}
            <div className="flex gap-2">
              {imageColors.map((colors, idx) => {
                const isActive = selectedImage === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square w-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                      isActive
                        ? "border-primary ring-1 ring-primary/30"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${colors.join(" ")}`}
                    >
                      <Package className="size-6 text-muted-foreground/20" />
                    </div>
                  </button>
                );
              })}
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

            {/* Name */}
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>

            {/* Flash Price */}
            <div className="rounded-xl bg-gradient-to-r from-destructive/10 to-transparent px-5 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-destructive">
                  {formatPrice(activity.flash_price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
                {discount > 0 && (
                  <span className="rounded-md bg-destructive/10 px-1.5 py-0.5 text-xs font-semibold text-destructive">
                    -{discount}%
                  </span>
                )}
              </div>
            </div>

            {/* SKU Attribute Selectors — always reserve space to prevent layout shift */}
            <div className="min-h-[120px] space-y-4">
              {attrOptions.length > 0 ? (
                <>
                  {attrOptions.map((attr) => (
                    <div key={attr.name}>
                      <p className="mb-2 text-sm font-medium">{attr.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {attr.values.map((value) => {
                          const isSelected = selectedAttrs[attr.name] === value;
                          const isAvailable = skus.some((sku) => sku.spec?.[attr.name] === value);
                          return (
                            <button
                              key={value}
                              onClick={() => isAvailable && handleAttrSelect(attr.name, value)}
                              disabled={!isAvailable}
                              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : isAvailable
                                    ? "border-border hover:border-primary hover:text-primary"
                                    : "cursor-not-allowed border-border/50 text-muted-foreground/40 line-through"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  {/* Always reserve SKU info line to prevent layout shift */}
                  <div className="h-5 text-xs text-muted-foreground">
                    {matchedSku && (
                      <>
                        SKU: <span className="font-mono">{matchedSku.sku_code}</span>
                      </>
                    )}
                  </div>
                </>
              ) : null}
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
                disabled={adding || !canAddToCart || activity.status !== "active"}
              >
                <ShoppingCart className="size-4" />
                {adding
                  ? "Adding..."
                  : !allSelected && attrOptions.length > 0
                    ? "Select Specs"
                    : "Add to Cart"}
              </Button>
              <Button
                size="lg"
                className="flex-1 cursor-pointer gap-2"
                onClick={handleBuyNow}
                disabled={adding || !canAddToCart || activity.status !== "active"}
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

        {/* All SKU table */}
        {skus.length > 0 && (
          <div className="mt-6 rounded-xl border bg-card">
            <div className="border-b px-6 py-3">
              <h3 className="text-sm font-medium">All Variants ({skus.length})</h3>
            </div>
            <div className="divide-y px-6 py-2">
              {skus.map((sku) => (
                <div key={sku.id} className="flex items-center justify-between py-2.5 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{sku.sku_code}</span>
                    <span className="text-xs">{sku.name}</span>
                    {sku.spec && Object.keys(sku.spec).length > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {Object.entries(sku.spec)
                          .map(([k, v]) => `${k}:${v}`)
                          .join(", ")}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-primary">{formatPrice(sku.price)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

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
