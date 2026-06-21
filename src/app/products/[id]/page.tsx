'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import type { Product } from '@/types/product'

interface Props {
  params: Promise<{ id: string }>
}

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params)
  const productId = Number(id)

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/v1/products/cache/${productId}`)
        if (cancelled) return

        if (!res.ok) {
          setError(`Failed to load product (${res.status})`)
          return
        }

        const json = await res.json()
        if (cancelled) return

        if (json.code !== 0) {
          setError(json.message || 'Failed to load product')
          return
        }

        setProduct(json.data)
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    if (!isNaN(productId)) {
      load()
    } else {
      setError('Invalid product ID')
      setLoading(false)
    }

    return () => {
      cancelled = true
    }
  }, [productId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 dark:bg-black">
        <div className="w-full max-w-lg">
          <div className="mb-4 h-8 w-24 animate-pulse rounded bg-muted" />
          <Card>
            <CardContent className="space-y-4 py-6">
              <div className="h-7 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-9 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-5 w-1/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 dark:bg-black">
        <div className="w-full max-w-lg text-center">
          <Card>
            <CardContent className="py-8">
              <p className="text-destructive">{error || 'Product not found'}</p>
              <Button variant="outline" size="sm" className="mt-4 cursor-pointer" asChild>
                <Link href="/">Back to Products</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 p-8 dark:bg-black">
      <div className="w-full max-w-lg">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 cursor-pointer">
            &larr; Back to Products
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">SKU</p>
              <p className="font-mono text-sm">{product.sku}</p>
            </div>
            {product.description && (
              <div>
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="text-sm">{product.description}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer" asChild>
              <Link href="/">Back to Catalog</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
