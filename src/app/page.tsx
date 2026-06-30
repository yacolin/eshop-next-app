"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { InfiniteProductList } from "@/components/infinite-product-list";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FlashSaleSection } from "@/components/flash-sale";
import { fetchRootCategories } from "@/lib/api";
import type { Category } from "@/types/product";

const bannerSlides = [
  {
    title: "Summer Sale",
    subtitle: "Up to 50% off on selected items",
    cta: "Shop Now",
    gradient: "from-violet-600/90 via-primary/80 to-sky-600/80",
  },
  {
    title: "New Arrivals",
    subtitle: "Check out the latest products",
    cta: "Explore",
    gradient: "from-rose-600/90 via-pink-600/80 to-orange-600/70",
  },
  {
    title: "Free Shipping",
    subtitle: "On all orders over ¥200",
    cta: "Learn More",
    gradient: "from-emerald-600/90 via-teal-600/80 to-cyan-600/70",
  },
];

export default function Home() {
  const [bannerIdx, setBannerIdx] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const t = setInterval(() => {
      setBannerIdx((i) => (i + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetchRootCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  const slide = bannerSlides[bannerIdx];

  return (
    <div className="bg-zinc-50 dark:bg-black">
      {/* ─── Search Bar ─── */}
      <div className="mx-4 mt-4 md:mx-auto md:max-w-6xl">
        <SearchBar />
      </div>

      {/* ─── Main content area: sidebar + banner ─── */}
      <div className="mx-4 mt-4 md:mx-auto md:max-w-6xl md:flex md:gap-5 md:items-stretch">
        {/* Left sidebar — category tree */}
        <aside className="hidden w-44 shrink-0 md:block">
          <div className="flex h-full flex-col rounded-xl border bg-card shadow-xs">
            <div className="border-b px-3 py-2.5 text-xs font-semibold text-foreground">
              All Categories
            </div>
            <div className="flex-1 p-1.5">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category?id=${cat.id}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {cat.name}
                  <ChevronRight className="size-3" />
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Right content */}
        <div className="min-w-0 flex-1">
          {/* Hero Banner */}
          <section className="overflow-hidden rounded-2xl">
            <div
              className={`bg-linear-to-r ${slide.gradient} px-8 py-10 text-primary-foreground transition-all md:px-12 md:py-14`}
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-widest opacity-80">
                {slide.title}
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">{slide.subtitle}</h2>
              <Button
                size="sm"
                className="mt-4 cursor-pointer rounded-full bg-white/20 text-primary-foreground backdrop-blur-sm hover:bg-white/30"
              >
                {slide.cta}
                <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </div>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBannerIdx(i)}
                  className={`size-1.5 rounded-full transition-all ${
                    i === bannerIdx ? "w-4 bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Flash Sale */}
          <FlashSaleSection />
        </div>
      </div>

      {/* Recommended Products — full width */}
      <section className="mx-4 mt-8 md:mx-auto md:max-w-6xl">
        <div className="mb-3">
          <h2 className="text-lg font-bold">Recommended For You</h2>
        </div>
        <InfiniteProductList />
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-3 text-sm font-semibold">Shop</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/category?id=1" className="hover:text-foreground">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Support</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Company</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>WeChat</li>
                <li>Weibo</li>
                <li>Douyin</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            &copy; 2026 E-Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
