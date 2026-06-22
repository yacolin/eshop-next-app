'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { InfiniteProductList } from '@/components/infinite-product-list'
import { fetchRootCategories } from '@/lib/api'

interface Props {
  params: Promise<{ id: string }>
}

export default function CategoryPage({ params }: Props) {
  const { id } = use(params)
  const categoryId = Number(id)
  const [categoryName, setCategoryName] = useState<string | null>(null)

  useEffect(() => {
    fetchRootCategories()
      .then((data) => {
        const cat = data.list.find((c) => c.id === categoryId)
        if (cat) setCategoryName(cat.name)
      })
      .catch(() => {})
  }, [categoryId])

  return (
    <div className="bg-zinc-50 dark:bg-black">
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
          <span className="text-foreground">{categoryName || `Category ${categoryId}`}</span>
        </nav>

        {categoryName && (
          <h1 className="mb-6 text-2xl font-bold">{categoryName}</h1>
        )}

        <InfiniteProductList categoryId={categoryId} />
      </div>
    </div>
  )
}
