import { Suspense } from 'react'
import { ProductList } from '@/components/product-list'

function ProductListSkeleton() {
  return (
    <div className="w-full max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-8 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-5 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-3 h-8 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 p-8 dark:bg-black">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          E-Shop
        </h1>
        <p className="mt-2 text-zinc-500">Product Catalog</p>
      </header>

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  )
}
