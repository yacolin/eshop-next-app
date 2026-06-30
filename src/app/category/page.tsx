"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { InfiniteProductList } from "@/components/infinite-product-list";
import { SearchBar } from "@/components/search-bar";
import {
  fetchAllCategories,
  fetchCategoryById,
  fetchSubcategories,
  fetchCategoryBrands,
} from "@/lib/api";
import type { Category, BrandSimple } from "@/types/product";

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = Number(searchParams.get("id") || "1");
  const sub = searchParams.get("sub");

  const [currentCat, setCurrentCat] = useState<Category | null>(null);
  const [allCats, setAllCats] = useState<Category[]>([]);
  const [children, setChildren] = useState<Category[]>([]);
  const [brands, setBrands] = useState<BrandSimple[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const hasDefaulted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [cat, all, childList] = await Promise.all([
          fetchCategoryById(categoryId),
          fetchAllCategories(),
          fetchSubcategories(categoryId),
        ]);
        if (cancelled) return;
        setCurrentCat(cat);
        setAllCats(all);
        setChildren(childList);

        if (!hasDefaulted.current && childList.length > 0 && !sub) {
          hasDefaulted.current = true;
          router.replace(`/category?id=${categoryId}&sub=${childList[0].id}`, {
            scroll: false,
          });
        }
      } catch {
        // handled by null checks
      } finally {
        if (!cancelled) setInitialLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  // Breadcrumb
  const breadcrumb = useMemo(() => {
    if (!currentCat) return [];
    const items: { label: string; id: number }[] = [];
    let pid: number = currentCat.parent_id;
    while (pid > 0) {
      const p = allCats.find((c) => c.id === pid);
      if (p) {
        items.unshift({ label: p.name, id: p.id });
        pid = p.parent_id;
      } else break;
    }
    items.push({ label: currentCat.name, id: currentCat.id });
    return items;
  }, [currentCat, allCats]);

  const hasChildren = children.length > 0;
  const activeCategoryId = useMemo(() => {
    if (hasChildren) {
      const subId = Number(sub);
      if (isNaN(subId)) return;
      return children.some((c) => c.id === subId) ? subId : undefined;
    }
    return categoryId;
  }, [sub, children, hasChildren, categoryId]);

  // Fetch brands when active category (or subcategory) changes
  useEffect(() => {
    let cancelled = false;
    const brandTargetId = activeCategoryId ?? categoryId;
    (async () => {
      const list = await fetchCategoryBrands(brandTargetId);
      if (!cancelled) setBrands(list);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategoryId, categoryId]);

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="mb-6 h-5 w-64 animate-pulse rounded bg-muted" />
          <div className="mb-6 flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-7 w-16 animate-pulse rounded-full bg-muted" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!currentCat) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <p className="text-muted-foreground">Category not found</p>
          <Link href="/" className="mt-2 inline-block text-sm text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Search */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Home className="size-3.5" />
            Home
          </Link>
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              {i < breadcrumb.length - 1 ? (
                <Link
                  href={`/category?id=${item.id}`}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Subcategory tabs (level 1 → level 2) */}
        {hasChildren && (
          <div className="mb-4 overflow-x-auto overflow-y-hidden">
            <div className="flex gap-2">
              {children.map((child) => {
                const isActive = Number(sub) === child.id || (!sub && children[0]?.id === child.id);
                return (
                  <Link
                    key={child.id}
                    href={`/category?id=${categoryId}&sub=${child.id}`}
                    replace
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {child.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Brand filter chips */}
        {brands.length > 0 && (
          <div className="mb-6 scroll-mt-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Filter by Brand</p>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <span
                  key={b.brand_id}
                  className="cursor-pointer rounded-md border bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-xs transition-colors hover:border-primary hover:text-primary"
                >
                  {b.brand_name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        <InfiniteProductList categoryId={activeCategoryId} key={activeCategoryId ?? "all"} />
      </div>
    </div>
  );
}
