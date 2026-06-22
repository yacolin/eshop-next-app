"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  AutoSizer,
  List,
  InfiniteLoader,
  WindowScroller,
} from "react-virtualized";
import type { ListRowProps, Index } from "react-virtualized";
import { fetchProductsCursor } from "@/lib/api";
import type { Product } from "@/types/product";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowUp,
  ShoppingCart,
  Smartphone,
  Monitor,
  Shirt,
  HomeIcon,
  Gamepad2,
  BookOpen,
  Bike,
  Car,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";

const PAGE_SIZE = 20;
const ROW_HEIGHT = 270;
const MAX_CARD_WIDTH = 274;
const GAP = 16;

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  const palettes = [
    ["from-blue-500/20", "via-purple-500/10", "to-pink-500/20"],
    ["from-emerald-500/20", "via-teal-500/10", "to-cyan-500/20"],
    ["from-amber-500/20", "via-orange-500/10", "to-red-500/20"],
    ["from-indigo-500/20", "via-violet-500/10", "to-purple-500/20"],
    ["from-rose-500/20", "via-pink-500/10", "to-fuchsia-500/20"],
    ["from-sky-500/20", "via-blue-500/10", "to-indigo-500/20"],
    ["from-lime-500/20", "via-green-500/10", "to-emerald-500/20"],
    ["from-orange-500/20", "via-yellow-500/10", "to-amber-500/20"],
  ];
  const gradient = palettes[product.id % palettes.length];
  const Icons = [
    Smartphone, Monitor, Shirt, HomeIcon, Gamepad2, BookOpen, Bike, Car,
  ];
  const ImgIcon = Icons[product.id % Icons.length];

  return (
    <div className="group rounded-xl bg-card shadow-xs ring-1 ring-foreground/10 transition-shadow hover:shadow-md">
      {/* Image */}
      <Link
        href={`/products/${product.id}`}
        className={`flex h-32 items-center justify-center rounded-t-xl bg-gradient-to-br ${gradient.join(" ")}`}
      >
        <ImgIcon className="size-10 text-muted-foreground/25" />
      </Link>

      {/* Info */}
      <div className="space-y-1 p-3">
        <Link href={`/products/${product.id}`}>
          <p className="truncate text-sm font-medium transition-colors group-hover:text-primary">
            {product.name}
          </p>
        </Link>
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground line-through">
            {formatPrice(Math.round((product.price * 1.25) / 10) * 10)}
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <p className="text-[11px] text-muted-foreground">SKU: {product.sku}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/80"
            aria-label="Add to cart"
          >
            <ShoppingCart className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function InfiniteProductList({ categoryId }: { categoryId?: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const loadingRef = useRef(false);
  const { addItem } = useCart();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchProductsCursor(null, categoryId);
        if (cancelled) return;
        setProducts(data.list);
        setNextCursor(data.next_cursor);
        setHasMore(data.has_more);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Unknown error");
        }
      } finally {
        if (!cancelled) setInitialLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const loadMoreRows = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    try {
      const data = await fetchProductsCursor(nextCursor, categoryId);
      setProducts((prev) => [...prev, ...data.list]);
      setNextCursor(data.next_cursor);
      setHasMore(data.has_more);
    } catch (e) {
      console.error("Failed to load more products:", e);
    } finally {
      loadingRef.current = false;
    }
  }, [nextCursor, hasMore, categoryId]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      addItem(product.id, product.sku);
    },
    [addItem],
  );

  // Loading state
  if (initialLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              </CardHeader>
              <CardContent>
                <div className="h-7 w-1/2 animate-pulse rounded bg-muted" />
                <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-muted" />
              </CardContent>
              <CardFooter>
                <div className="h-7 w-full animate-pulse rounded bg-muted" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mx-auto mt-8 max-w-md px-4">
        <Card>
          <CardContent className="py-8 text-center text-destructive">
            <p className="font-medium">Failed to load products</p>
            <p className="mt-1 text-sm">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="mx-auto mt-8 max-w-md px-4">
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            <p>No products available</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div>
        <WindowScroller>
          {({ height, isScrolling, scrollTop, onChildScroll }) => (
            <AutoSizer disableHeight>
              {({ width }) => {
                const cols = getColumnCount(width);
                const cardWidth = Math.min(
                  (width - GAP * (cols - 1)) / cols,
                  MAX_CARD_WIDTH,
                );
                const visualRowCount = Math.ceil(products.length / cols);
                const rowCount = hasMore ? visualRowCount + 1 : visualRowCount;

                function isRowLoaded({ index }: Index) {
                  return index < visualRowCount;
                }

                function rowRenderer({ index, key, style }: ListRowProps) {
                  const startIdx = index * cols;
                  const rowProducts = products.slice(startIdx, startIdx + cols);

                  // Sentinel row — show loading indicator
                  if (rowProducts.length === 0) {
                    return (
                      <div
                        key={key}
                        style={style}
                        className="flex items-center justify-center"
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="size-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                          Loading more...
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={key}
                      style={style}
                      className="flex justify-start gap-4 py-2"
                    >
                      {rowProducts.map((product) => (
                        <div
                          key={product.id}
                          style={{ width: cardWidth }}
                          className="flex-shrink-0 mx-[1px]"
                        >
                          <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <div>
                    <InfiniteLoader
                      isRowLoaded={isRowLoaded}
                      loadMoreRows={loadMoreRows}
                      rowCount={rowCount}
                      threshold={1}
                    >
                      {({ onRowsRendered, registerChild }) => (
                        <List
                          ref={registerChild as any}
                          autoHeight
                          height={height}
                          isScrolling={isScrolling}
                          onScroll={onChildScroll}
                          scrollTop={scrollTop}
                          width={width}
                          rowCount={rowCount}
                          rowHeight={ROW_HEIGHT}
                          rowRenderer={rowRenderer}
                          onRowsRendered={onRowsRendered}
                          overscanRowCount={2}
                        />
                      )}
                    </InfiniteLoader>
                  </div>
                );
              }}
            </AutoSizer>
          )}
        </WindowScroller>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/80"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  );
}

function getColumnCount(width: number) {
  if (width >= 1080) return 4;
  if (width >= 720) return 3;
  if (width >= 480) return 2;
  return 1;
}
