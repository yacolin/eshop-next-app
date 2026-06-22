"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Shirt,
  HomeIcon,
  BookOpen,
  Bike,
  Sparkles,
  Gamepad2,
  Car,
  Apple,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { fetchRootCategories } from "@/lib/api";
import type { Category } from "@/types/product";

const iconMap: Record<string, LucideIcon> = {
  Electronics: Smartphone,
  Clothing: Shirt,
  Books: BookOpen,
  "Home & Garden": HomeIcon,
  "Sports & Outdoors": Bike,
  "Beauty & Health": Sparkles,
  "Toys & Games": Gamepad2,
  Automotive: Car,
  "Food & Grocery": Apple,
  "Office Supplies": Briefcase,
};

export function CategoriesBar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchRootCategories()
      .then((data) => setCategories(data.list))
      .catch(() => {});
  }, []);

  if (categories.length === 0) {
    return (
      <div className="mx-4 mt-5 md:mx-auto md:max-w-6xl">
        <div className="grid grid-cols-4 gap-3 md:grid-cols-5 md:gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex animate-pulse flex-col items-center gap-1.5 rounded-xl bg-card px-2 py-4"
            >
              <div className="size-6 rounded-full bg-muted" />
              <div className="h-3 w-12 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mx-4 mt-5 md:mx-auto md:max-w-6xl">
      <div className="grid grid-cols-4 gap-3 md:grid-cols-5 md:gap-4">
        {categories.map((cat) => {
          const Icon = iconMap[cat.name] || Smartphone;
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-card px-2 py-4 text-center text-xs text-muted-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="size-6" />
              <span className="leading-tight">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
