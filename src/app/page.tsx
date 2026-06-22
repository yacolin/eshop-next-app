"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { InfiniteProductList } from "@/components/infinite-product-list";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Zap, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { fetchProductsCursor } from "@/lib/api";
import type { Product } from "@/types/product";
import { CategoriesBar } from "@/components/categories-bar";

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

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function Home() {
  const [bannerIdx, setBannerIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3 * 3600 + 30 * 60 + 45); // 03:30:45
  const [saleProducts, setSaleProducts] = useState<Product[]>([]);

  // Banner auto-rotate
  useEffect(() => {
    const t = setInterval(() => {
      setBannerIdx((i) => (i + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  // Countdown
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Fetch flash sale products
  useEffect(() => {
    fetchProductsCursor()
      .then((data) => setSaleProducts(data.list.slice(0, 4)))
      .catch(() => {});
  }, []);

  function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [
      String(h).padStart(2, "0"),
      String(m).padStart(2, "0"),
      String(s).padStart(2, "0"),
    ];
  }

  const slide = bannerSlides[bannerIdx];
  const [hh, mm, ss] = formatTime(timeLeft);

  return (
    <div className="bg-zinc-50 dark:bg-black">
      {/* ─── Search Bar ─── */}
      <div className="mx-4 mt-4 md:mx-auto md:max-w-6xl">
        <SearchBar />
      </div>

      {/* ─── Hero Banner ─── */}
      <section className="relative mx-4 mt-4 overflow-hidden rounded-2xl md:mx-auto md:max-w-6xl">
        <div
          className={`bg-gradient-to-r ${slide.gradient} px-8 py-10 text-primary-foreground transition-all md:px-12 md:py-14`}
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
        {/* Dots */}
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

      {/* ─── Categories ─── */}
      <CategoriesBar />

      {/* ─── Flash Sale ─── */}
      <section className="mx-4 mt-7 md:mx-auto md:max-w-6xl">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-base font-bold text-destructive">
              <Zap className="size-4" />
              Flash Sale
            </span>
            <span className="flex items-center gap-0.5 rounded-md bg-destructive px-1.5 py-0.5 text-xs font-semibold tabular-nums text-destructive-foreground">
              <Clock className="size-3" />
              {hh}:{mm}:{ss}
            </span>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground"
          >
            View All <ChevronRight className="size-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {saleProducts.length > 0
            ? saleProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="group rounded-xl bg-card p-3 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className={`mb-2 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br ${
                    [
                      "from-blue-500/20 via-purple-500/10 to-pink-500/20",
                      "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
                      "from-amber-500/20 via-orange-500/10 to-red-500/20",
                      "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
                      "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
                      "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
                      "from-lime-500/20 via-green-500/10 to-emerald-500/20",
                      "from-orange-500/20 via-yellow-500/10 to-amber-500/20",
                    ][p.id % 8]
                  }`}>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-background/40 backdrop-blur-sm">
                      <Zap className="size-5 text-foreground/30" />
                    </div>
                  </div>
                  <p className="truncate text-sm font-medium group-hover:text-primary">
                    {p.name}
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-destructive">
                      {formatPrice(p.price)}
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(Math.round((p.price * 1.25) / 10) * 10)}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-destructive/10">
                    <div
                      className="h-full rounded-full bg-destructive"
                      style={{ width: `${30 + (Math.round(p.id * 7) % 50)}%` }}
                    />
                  </div>
                </Link>
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl bg-card p-3 shadow-xs"
                >
                  <div className="mb-2 aspect-square rounded-lg bg-muted" />
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="mt-2 h-4 w-1/2 rounded bg-muted" />
                </div>
              ))}
        </div>
      </section>

      {/* ─── Recommended Products ─── */}
      <section className="mx-4 mt-8 md:mx-auto md:max-w-6xl">
        <div className="mb-3 text-center">
          <h2 className="text-lg font-bold">Recommended For You</h2>
        </div>
        <InfiniteProductList />
      </section>

      {/* ─── Footer ─── */}
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
                  <Link href="/" className="hover:text-foreground">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Sales
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
