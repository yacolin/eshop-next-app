import { InfiniteProductList } from '@/components/infinite-product-list'

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 dark:bg-black">
      <header className="pb-6 pt-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          E-Shop
        </h1>
        <p className="mt-2 text-muted-foreground">Product Catalog</p>
      </header>

      <InfiniteProductList />
    </div>
  )
}
