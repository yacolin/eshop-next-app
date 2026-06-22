'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { InfiniteProductList } from '@/components/infinite-product-list'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
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
          <span className="text-foreground">All Products</span>
        </nav>

        <h1 className="mb-6 text-2xl font-bold">All Products</h1>
        <InfiniteProductList />
      </div>
    </div>
  )
}
