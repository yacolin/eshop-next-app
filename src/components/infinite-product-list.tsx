"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AutoSizer, List, InfiniteLoader, WindowScroller } from "react-virtualized";
import type { ListRowProps, Index } from "react-virtualized";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";
import { ProductCard } from "@/components/product-card";
import { Products } from "@/lib/api-gen/Products";
import type { ProductSPU } from "@/lib/api-gen/data-contracts";

const productsApi = new Products({ baseUrl: "" });
import { BackToTop } from "@/components/back-to-top";

const PAGE_SIZE = 20;
const ROW_HEIGHT = 270;
const MAX_CARD_WIDTH = 274;
const GAP = 16;

export function InfiniteProductList({
  categoryId,
  brandId,
}: {
  categoryId?: number;
  brandId?: number;
}) {
  const [products, setProducts] = useState<ProductSPU[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const loadingRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    setInitialLoading(true);
    setProducts([]);
    setNextCursor(null);
    setHasMore(true);
    setError(null);

    (async () => {
      try {
        const res = await productsApi.v1ProductsList({
          size: 20,
          status: 2,
          category_id: categoryId,
          brand_id: brandId,
        });
        if (cancelled) return;
        const data = res.data?.data;
        setProducts(data?.list ?? []);
        setNextCursor(data?.cursor ?? null);
        setHasMore(data?.has_more ?? false);
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
  }, [categoryId, brandId]);

  const loadMoreRows = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    try {
      const res = await productsApi.v1ProductsList({
        size: 20,
        status: 2,
        cursor: nextCursor ?? undefined,
        category_id: categoryId,
        brand_id: brandId,
      });
      const data = res.data?.data;
      setProducts((prev) => [...prev, ...(data?.list ?? [])]);
      setNextCursor(data?.cursor ?? null);
      setHasMore(data?.has_more ?? false);
    } catch (e) {
      console.error("Failed to load more products:", e);
    } finally {
      loadingRef.current = false;
    }
  }, [nextCursor, hasMore, categoryId, brandId]);

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
    return <EmptyState message="No products available in this category." />;
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
                const visualRowCount = Math.ceil(products.length / cols);
                const rowCount = hasMore ? visualRowCount + 1 : visualRowCount;

                function isRowLoaded({ index }: Index) {
                  return index < visualRowCount;
                }

                function rowRenderer({ index, key, style }: ListRowProps) {
                  const startIdx = index * cols;
                  const rowProducts = products.slice(startIdx, startIdx + cols);

                  if (rowProducts.length === 0) {
                    return (
                      <div key={key} style={style} className="flex items-center justify-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="size-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                          Loading more...
                        </div>
                      </div>
                    );
                  }

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
