// @ts-nocheck
"use client";

import { useState, useEffect, useMemo, use, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { ShoppingCart, ChevronRight, Home, Zap, Clock } from "lucide-react";
import { fetchFlashActivityById, fetchProductDetail } from "@/lib/api";
import { formatPrice, findMatchingSku } from "@/lib/utils";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { SpecSelector } from "@/components/spec-selector";
import { QuantitySelector } from "@/components/quantity-selector";
import { ServicePromises } from "@/components/service-promises";
import { SkuTable } from "@/components/sku-table";
import type { FlashActivity, ProductDetailResponse } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
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
  const [detail, setDetail] = useState<ProductDetailResponse | null>(null);
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
    const offset = (detail?.product?.id ?? activityId) % palettes.length;
    return palettes.map((_, i) => palettes[(i + offset) % palettes.length]);
  }, [detail?.product?.id, activityId]);

  // Fetch activity + product detail + attributes
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

        const detailData = await fetchProductDetail(act.product_id);
        if (cancelled) return;
        setDetail(detailData);

        // Only auto-select when SKUs actually have spec data
        const skusHaveSpec = detailData.skus.some(
          (sku: any) => sku.spec && Object.keys(sku.spec).length > 0,
        );
        if (detailData.attributes.length > 0 && skusHaveSpec) {
          const initial: Record<string, string> = {};
          (detailData.attributes as any[]).forEach((attr: any) => {
            initial[attr.attribute_name] = attr.values[0].value;
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

  const attrOptions = detail?.attributes ?? [];
  const hasSpecSkus = detail
    ? detail.skus.some((sku: any) => sku.spec && Object.keys(sku.spec).length > 0)
    : false;

  const matchedSku = useMemo(
    () => (detail ? findMatchingSku(detail.skus, selectedAttrs, hasSpecSkus) : null),
    [detail, selectedAttrs, hasSpecSkus],
  );

  const allSelected = useMemo(
    () =>
      hasSpecSkus &&
      attrOptions.length > 0 &&
      attrOptions.every((opt) => selectedAttrs[opt.attribute_name]),
    [attrOptions, selectedAttrs, hasSpecSkus],
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
    if (!detail || !matchedSku || adding) return;
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
    if (!matchedSku || !detail || !activity) return;
    router.push(
      `/checkout?product_id=${detail.product.id}&sku_id=${matchedSku.id}&quantity=${quantity}&flash_price=${activity.flash_price}`,
    );
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

  const originalPrice = matchedSku?.price ?? detail?.product.min_price ?? 0;
  const discount =
    activity && originalPrice > 0
      ? Math.max(0, Math.round((1 - activity.flash_price / originalPrice) * 100))
      : 0;

  const canAddToCart = matchedSku != null;

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
  if (error || !activity || !detail) {
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

  const { product, skus } = detail;

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
          <ProductImageGallery
            palettes={imageColors}
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
            icon={Zap}
          />

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
            <div className="rounded-xl bg-linear-to-r from-destructive/10 to-transparent px-5 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-destructive">
                  {formatPrice(activity.flash_price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(originalPrice ?? 0)}
                </span>
                {discount > 0 && (
                  <span className="rounded-md bg-destructive/10 px-1.5 py-0.5 text-xs font-semibold text-destructive">
                    -{discount}%
                  </span>
                )}
              </div>
            </div>

            {/* SKU Attribute Selectors */}
            <div className="min-h-30">
              <SpecSelector
                hasSpecSkus={hasSpecSkus}
                attrOptions={attrOptions}
                selectedAttrs={selectedAttrs}
                skus={skus}
                onAttrSelect={handleAttrSelect}
                matchedSku={matchedSku}
              />
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
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

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
                  : !allSelected && hasSpecSkus && attrOptions.length > 0
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
            <ServicePromises />

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
          <div className="space-y-4 px-6 py-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description || "No description available."}
            </p>
            <hr className="border-border/50" />
            <div className="space-y-3 text-sm">
              <div className="flex border-b py-2 text-sm">
                <span className="w-28 shrink-0 text-muted-foreground">Min Price</span>
                <span className="font-semibold text-primary">{formatPrice(product.min_price)}</span>
              </div>
              <div className="flex border-b py-2 text-sm">
                <span className="w-28 shrink-0 text-muted-foreground">Variants</span>
                <span className="text-xs">{skus.length} SKUs</span>
              </div>
              {matchedSku && (
                <div className="flex border-b py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Selected SKU</span>
                  <span className="font-mono text-xs">{matchedSku.sku_code}</span>
                </div>
              )}
              <div className="flex border-b py-2 text-sm">
                <span className="w-28 shrink-0 text-muted-foreground">Product ID</span>
                <span className="font-mono text-xs">{product.id}</span>
              </div>
              {product.created_at && (
                <div className="flex border-b py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Listed</span>
                  <span className="text-xs">
                    {new Date(product.created_at).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              {product.updated_at && product.updated_at !== product.created_at && (
                <div className="flex py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Updated</span>
                  <span className="text-xs">
                    {new Date(product.updated_at).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All SKU table */}
        <SkuTable skus={skus} />

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
