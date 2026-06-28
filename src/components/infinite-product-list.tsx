"use client";

import { useState, useEffect } from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";
import type { ListRowProps } from "react-virtualized";
import { fetchProductsCursor } from "@/lib/api";
import type { Product } from "@/types/product";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { BackToTop } from "@/components/back-to-top";

const ROW_HEIGHT = 270;
const MAX_CARD_WIDTH = 274;
const GAP = 16;

export function InfiniteProductList({ categoryId }: { categoryId?: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setInitialLoading(true);
    setProducts([]);
    setError(null);

    (async () => {
      try {
        const data = await fetchProductsCursor(null, categoryId);
        if (cancelled) return;
        setProducts(data.list);
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
                const cardWidth = Math.min((width - GAP * (cols - 1)) / cols, MAX_CARD_WIDTH);
                const rowCount = Math.ceil(products.length / cols);

                function rowRenderer({ index, key, style }: ListRowProps) {
                  const startIdx = index * cols;
                  const rowProducts = products.slice(startIdx, startIdx + cols);

                  return (
                    <div key={key} style={style} className="flex justify-start gap-4 py-2">
                      {rowProducts.map((product) => (
                        <div
                          key={product.id}
                          style={{ width: cardWidth }}
                          className="mx-[1px] flex-shrink-0"
                        >
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <List
                    autoHeight
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    width={width}
                    rowCount={rowCount}
                    rowHeight={ROW_HEIGHT}
                    rowRenderer={rowRenderer}
                    overscanRowCount={2}
                  />
                );
              }}
            </AutoSizer>
          )}
        </WindowScroller>
      </div>

      <BackToTop />
    </>
  );
}

function getColumnCount(width: number) {
  if (width >= 1080) return 4;
  if (width >= 720) return 3;
  if (width >= 480) return 2;
  return 1;
}
