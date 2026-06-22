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
  ZoomIn,
} from "lucide-react";
import type { Product } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const productId = Number(id);
  const { addItem } = useCart();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs">("description");
  const [selectedImage, setSelectedImage] = useState(0);

  // Deterministic gradient colors per product — same every render
  const imageColors = useMemo(() => {
    const palettes = [
      ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
      ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
      ["from-amber-500/20", "via-orange-500/10", "to-red-500/20"],
      ["from-indigo-500/20", "via-violet-500/10", "to-purple-500/20"],
    ];
    // Rotate palette based on product id so each product has its own set
    const offset = productId % palettes.length;
    return palettes.map((_, i) => palettes[(i + offset) % palettes.length]);
  }, [productId]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/v1/products/cache/${productId}`);
        if (cancelled) return;

        if (!res.ok) {
          setError(`Failed to load product (${res.status})`);
          return;
        }

        const json = await res.json();
        if (cancelled) return;

        if (json.code !== 0) {
          setError(json.message || "Failed to load product");
          return;
        }

        setProduct(json.data);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Unknown error");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (!isNaN(productId)) {
      load();
    } else {
      setError("Invalid product ID");
      setLoading(false);
    }

    return () => {
      cancelled = true;
    };
  }, [productId]);

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

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-black">
        <div className="w-full max-w-md text-center">
          <Package className="mx-auto mb-4 size-16 text-muted-foreground/30" />
          <p className="text-destructive mb-1">{error || "Product not found"}</p>
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
          <div className="space-y-3">
            <div
              className={`group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${imageColors[selectedImage].join(" ")}`}
            >
              <Package className="size-28 text-muted-foreground/20" />
              {/* TODO: Hover to zoom — <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  <ZoomIn className="size-3" />
                  Hover to zoom
                </span>
              </div> */}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {imageColors.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square w-16 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                    i === selectedImage
                      ? "border-primary ring-1 ring-primary/30"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${imageColors[i].join(" ")}`}
                  >
                    <Package className="size-6 text-muted-foreground/20" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Product info ── */}
          <div className="flex flex-col gap-5">
            {/* SKU + Name */}
            <div>
              <div className="mb-2 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                <Package className="size-3" />
                {product.sku}
              </div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>
            </div>

            {/* Price */}
            <div className="rounded-xl bg-gradient-to-r from-primary/10 to-transparent px-5 py-4">
              <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
            </div>

            {/* Shipping */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Truck className="size-3.5" />
                Free shipping
              </span>
              <span className="flex items-center gap-1">
                <Package className="size-3.5" />
                In stock
              </span>
            </div>

            <hr className="border-border/50" />

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
                disabled={adding}
              >
                <ShoppingCart className="size-4" />
                {adding ? "Adding..." : "Add to Cart"}
              </Button>
              <Button
                size="lg"
                className="flex-1 cursor-pointer gap-2"
                onClick={handleBuyNow}
                disabled={adding}
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
                  <span className="w-28 shrink-0 text-muted-foreground">SKU</span>
                  <span className="font-mono text-xs">{product.sku}</span>
                </div>
                <div className="flex border-b py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Price</span>
                  <span className="font-semibold text-primary">{formatPrice(product.price)}</span>
                </div>
                <div className="flex border-b py-2 text-sm">
                  <span className="w-28 shrink-0 text-muted-foreground">Product ID</span>
                  <span className="font-mono text-xs">{product.id}</span>
                </div>
                {product.created_at && (
                  <div className="flex border-b py-2 text-sm">
                    <span className="w-28 shrink-0 text-muted-foreground">Listed</span>
                    <span className="text-xs">
                      {new Date(product.created_at * 1000).toLocaleDateString("zh-CN", {
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
                      {new Date(product.updated_at * 1000).toLocaleDateString("zh-CN", {
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
