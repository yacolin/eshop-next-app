"use client";

import { useState, useEffect, use, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { InfiniteProductList } from "@/components/infinite-product-list";
import { SubcategoryTabs } from "@/components/subcategory-tabs";
import { fetchRootCategories, fetchSubcategories } from "@/lib/api";
import type { Category } from "@/types/product";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ sub?: string }>;
}

export default function CategoryPage({ params, searchParams }: Props) {
  const { id } = use(params);
  const { sub } = use(searchParams);
  const router = useRouter();
  const categoryId = Number(id);
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<Category[]>([]);
  const [hasSubcategories, setHasSubcategories] = useState<boolean | null>(null);
  const hasDefaulted = useRef(false);

  useEffect(() => {
    fetchRootCategories()
      .then((data) => {
        const cat = data.list.find((c) => c.id === categoryId);
        if (cat) setCategoryName(cat.name);
      })
      .catch(() => {});
  }, [categoryId]);

  useEffect(() => {
    let cancelled = false;
    fetchSubcategories(categoryId)
      .then((list) => {
        if (cancelled) return;
        setSubcategories(list);
        setHasSubcategories(list.length > 0);
        if (!hasDefaulted.current && list.length > 0 && !sub) {
          hasDefaulted.current = true;
          router.replace(`/category/${categoryId}?sub=${list[0].id}`, { scroll: false });
        }
      })
      .catch(() => {
        if (!cancelled) setHasSubcategories(false);
      });
    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  const activeCategoryId = useMemo(() => {
    const subId = Number(sub);
    if (isNaN(subId)) return undefined;
    const isValid = subcategories.some((c) => c.id === subId);
    return isValid ? subId : undefined;
  }, [sub, subcategories]);

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="mx-4 py-6 md:mx-auto md:max-w-6xl">
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Home className="size-3.5" />
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{categoryName || `Category ${categoryId}`}</span>
        </nav>

        {categoryName && <h1 className="mb-6 text-2xl font-bold">{categoryName}</h1>}

        {hasSubcategories && subcategories.length > 0 && (
          <SubcategoryTabs
            categoryId={categoryId}
            subcategories={subcategories}
            currentSub={sub ?? null}
          />
        )}

        <InfiniteProductList categoryId={activeCategoryId} key={activeCategoryId} />
      </div>
    </div>
  );
}
