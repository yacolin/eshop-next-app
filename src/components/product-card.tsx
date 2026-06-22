"use client";

import Link from "next/link";
import {
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
import type { Product } from "@/types/product";

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

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

const iconList = [Smartphone, Monitor, Shirt, HomeIcon, Gamepad2, BookOpen, Bike, Car];

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  const gradient = palettes[product.id % palettes.length];
  const ImgIcon = iconList[product.id % iconList.length];

  return (
    <div className="group rounded-xl bg-card shadow-xs ring-1 ring-foreground/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/20">
      <Link
        href={`/products/${product.id}`}
        className={`flex h-32 items-center justify-center rounded-t-xl bg-gradient-to-br ${gradient.join(" ")}`}
      >
        <ImgIcon className="size-10 text-muted-foreground/25" />
      </Link>

      <div className="space-y-1 p-3">
        <Link href={`/products/${product.id}`}>
          <p className="truncate text-sm font-medium transition-colors group-hover:text-primary">
            {product.name}
          </p>
        </Link>
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-primary">{formatPrice(product.price)}</span>
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
