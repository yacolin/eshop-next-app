import { InfiniteProductList } from '@/components/infinite-product-list'

export default function Home() {
  return (
    <>
      <div className="px-4 pb-2 pt-6 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product Catalog</h1>
      </div>

      <InfiniteProductList />
    </>
  )
}
