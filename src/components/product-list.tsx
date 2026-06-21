import { fetchProducts } from '@/lib/api'

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export async function ProductList() {
  let products: Awaited<ReturnType<typeof fetchProducts>>
  let error: string | null = null

  try {
    products = await fetchProducts()
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error'
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
        <p className="font-medium">Failed to load products</p>
        <p className="mt-1 text-sm">{error}</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Products
        </h2>
        <span className="text-sm text-zinc-500">
          Total: {products!.total} items
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products!.list.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h3>
            <p className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1 text-xs text-zinc-400">SKU: {product.sku}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
