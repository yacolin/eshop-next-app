"use client";

import { useState, useEffect, useMemo, use, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { ShoppingCart, Package, ChevronRight, Home, Zap } from "lucide-react";
import { fetchProductDetail, fetchProductAttributes } from "@/lib/api";
import { formatPrice, findMatchingSku } from "@/lib/utils";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { SpecSelector } from "@/components/spec-selector";
import { QuantitySelector } from "@/components/quantity-selector";
import { ServicePromises } from "@/components/service-promises";
import { SkuTable } from "@/components/sku-table";
import type { ProductDetailResponse, ProductAttributeItem } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

const palettes = [
  ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
  ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
  ["from-amber-500/20", "via-orange-500/10", "to-red-500/20"],
  ["from-indigo-500/20", "via-violet-500/10", "to-purple-500/20"],
];

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const productId = Number(id);
  const { addItem } = useCart();
  const router = useRouter();

  // Scroll to top on mount — prevent inherited scroll from list page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [detail, setDetail] = useState<ProductDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs">("description");
  const [selectedAttrs, setSelectedAttrs] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [attributes, setAttributes] = useState<ProductAttributeItem[]>([]);

  const imageColors = useMemo(() => {
    const offset = productId % palettes.length;
    return palettes.map((_, i) => palettes[(i + offset) % palettes.length]);
  }, [productId]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [detailData, attrsData] = await Promise.all([
          fetchProductDetail(productId),
          fetchProductAttributes(productId),
        ]);
        if (cancelled) return;
        setDetail(detailData);
        setAttributes(attrsData);
        // Only auto-select when SKUs actually have spec data
        const skusHaveSpec = detailData.skus.some(
          (sku) => sku.spec && Object.keys(sku.spec).length > 0,
        );
        if (attrsData.length > 0 && skusHaveSpec) {
          const initial: Record<string, string> = {};
          attrsData.forEach((attr) => {
            initial[attr.attribute_name] = attr.values[0].value;
          });
          setSelectedAttrs(initial);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Unknown error");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [productId]);

  const attrOptions = attributes;
  const hasSpecSkus = detail
    ? detail.skus.some((sku) => sku.spec && Object.keys(sku.spec).length > 0)
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
        // Toggle off
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
    if (!matchedSku || !detail) return;
    router.push(
      `/checkout?product_id=${detail.product.id}&sku_id=${matchedSku.id}&quantity=${quantity}`,
    );
  }

  const displayPrice = matchedSku?.price ?? detail?.product.min_price ?? 0;

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
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !detail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-black">
        <div className="w-full max-w-md text-center">
          <Package className="mx-auto mb-4 size-16 text-muted-foreground/30" />
          <p className="mb-1 text-destructive">{error || "Product not found"}</p>
          <p className="mb-4 text-sm text-muted-foreground">
            The product you are looking for does not exist or has been removed.
          </p>
          <Button variant="outline" className="cursor-pointer" asChild>
            <Link href="/">Back to Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const { product, skus } = detail;
  const canAddToCart = matchedSku != null;

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
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* ─── Main section: image + info ─── */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ── Left: Image gallery ── */}
          <ProductImageGallery
            palettes={imageColors}
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />

          {/* ── Right: Product info ── */}
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>
            </div>

            {/* Price */}
            <div className="rounded-xl bg-linear-to-r from-primary/10 to-transparent px-5 py-4">
              <span className="text-4xl font-bold text-primary">{formatPrice(displayPrice)}</span>
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

            <hr className="border-border/50" />

            {/* Quantity */}
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 cursor-pointer gap-2"
                onClick={handleAddToCart}
                disabled={adding || !canAddToCart || (matchedSku?.available_quantity ?? 0) <= 0}
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
                disabled={adding || !canAddToCart || (matchedSku?.available_quantity ?? 0) <= 0}
              >
                <Zap className="size-4" />
                Buy Now
              </Button>
            </div>

            {/* Service promises */}
            <ServicePromises />
          </div>
        </div>

        {/* ─── Bottom: Product details ─── */}
        <div className="mt-10 rounded-xl border bg-card">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 cursor-pointer px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "description"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`flex-1 cursor-pointer px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "specs"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Specifications
            </button>
          </div>

          {/* Tab content */}
          <div className="px-6 py-5">
            {activeTab === "description" ? (
              <div>
                <h3 className="mb-3 text-base font-medium">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description || "No description available."}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex border-b py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Min Price</span>
                  <span className="font-semibold text-primary">
                    {formatPrice(product.min_price)}
                  </span>
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
            )}
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
            <Link href="/">&larr; Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
