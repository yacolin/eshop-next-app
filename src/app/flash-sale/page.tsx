"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, Home, Zap, Loader2, AlertCircle } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { FlashSaleCard } from "@/components/flash-sale-card";
import { fetchProductsCursor, fetchFlashActivities } from "@/lib/api";
import type { Product, FlashActivity } from "@/types/product";

export default function FlashSalePage() {
  const [items, setItems] = useState<{ product: Product; activity: FlashActivity }[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Products cursor state (for infinite load)
  const productsRef = useRef<Map<number, Product>>(new Map());
  const [activities, setActivities] = useState<FlashActivity[]>([]);
  const [activitiesNext, setActivitiesNext] = useState<number | null>(null);
  const [activitiesHasMore, setActivitiesHasMore] = useState(true);
  const [productsNext, setProductsNext] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const buildItems = useCallback((acts: FlashActivity[], prodMap: Map<number, Product>) => {
    const seen = new Set<number>();
    return acts
      .filter((a) => {
        if (seen.has(a.product_id)) return false;
        seen.add(a.product_id);
        return prodMap.has(a.product_id);
      })
      .map((a) => ({
        product: prodMap.get(a.product_id)!,
        activity: a,
      }));
  }, []);

  // Initial load: fetch activities + enough products to cover them
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setError(null);
        const actsData = await fetchFlashActivities(null);
        if (cancelled) return;
        const acts = actsData.list;

        // Collect unique product_ids from activities
        const neededIds = new Set(acts.map((a) => a.product_id));
        let prodCursor: string | null = null;

        while (neededIds.size > productsRef.current.size) {
          const prodsData = await fetchProductsCursor(prodCursor);
          if (cancelled) return;
          prodsData.list.forEach((p) => productsRef.current.set(p.id, p));
          prodCursor = prodsData.cursor;
          if (!prodCursor) break; // no more products
        }

        setActivities(acts);
        setActivitiesNext(actsData.next_cursor);
        setActivitiesHasMore(actsData.has_more);
        setProductsNext(prodCursor);
        setItems(buildItems(acts, productsRef.current));
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [buildItems]);

  // Load next page of activities + enough products to cover them
  const loadMore = useCallback(async () => {
    if (loadingMore) return;
    setLoadingMore(true);

    try {
      const actsData = await fetchFlashActivities(activitiesNext);
      const acts = actsData.list;
      if (acts.length === 0) {
        setActivitiesHasMore(false);
        return;
      }

      // Keep fetching products until all new activity IDs are covered
      const newIds = new Set(acts.map((a) => a.product_id));
      const missingIds = [...newIds].filter((id) => !productsRef.current.has(id));
      let prodCursor = productsNext;

      while (missingIds.length > 0) {
        const prodsData = await fetchProductsCursor(prodCursor);
        prodsData.list.forEach((p) => productsRef.current.set(p.id, p));
        prodCursor = prodsData.cursor;
        if (!prodCursor) break;
        // Remove now-found IDs from missing list
        for (let i = missingIds.length - 1; i >= 0; i--) {
          if (productsRef.current.has(missingIds[i])) missingIds.splice(i, 1);
        }
        if (missingIds.length === 0) break;
      }

      setActivities((prev) => [...prev, ...acts]);
      setActivitiesNext(actsData.next_cursor);
      setActivitiesHasMore(actsData.has_more);
      setProductsNext(prodCursor);

      // Rebuild from ALL accumulated activities
      setItems(buildItems([...activities, ...acts], productsRef.current));
    } catch {
      // silent
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, activitiesNext, productsNext, activities, buildItems]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !activitiesHasMore || loadingMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && activitiesHasMore && !loadingMore) {
          loadMore();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [activitiesHasMore, loadingMore, loading, loadMore]);

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="mx-4 py-6 md:mx-auto md:max-w-6xl">
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
          <span className="flex items-center gap-1 font-medium text-foreground">
            <Zap className="size-3.5 text-destructive" />
            Flash Sale
          </span>
        </nav>

        <h1 className="mb-1 text-2xl font-bold">Flash Sale</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Limited-time deals with the best prices
        </p>

        {error && (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <AlertCircle className="mb-3 size-12 text-destructive/50" />
            <p className="text-sm text-destructive">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 cursor-pointer rounded-lg border px-4 py-1.5 text-xs transition-colors hover:bg-muted"
            >
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl bg-card p-3 shadow-xs">
                <div className="mb-2 aspect-square rounded-lg bg-muted" />
                <div className="h-4 w-3/4 rounded bg-muted" />
                <div className="mt-2 h-4 w-1/2 rounded bg-muted" />
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <Zap className="mb-3 size-12 text-muted-foreground/30" />
            <p className="text-sm">No flash sales available at the moment</p>
            <Link href="/">
              <button className="mt-4 cursor-pointer rounded-lg border px-4 py-1.5 text-xs transition-colors hover:bg-muted">
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {items.map((item) => (
                <FlashSaleCard
                  key={item.activity.id}
                  product={item.product}
                  activity={item.activity}
                  showStatus
                />
              ))}
            </div>

            {/* Sentinel + loading indicator */}
            <div ref={sentinelRef} className="mt-6 flex justify-center">
              {loadingMore && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin" />
                  Loading more...
                </div>
              )}
              {!activitiesHasMore && items.length > 0 && (
                <p className="text-xs text-muted-foreground/60">
                  You&apos;ve viewed all flash sales
                </p>
              )}
            </div>
          </>
        )}

        <BackToTop />
      </div>
    </div>
  );
}
