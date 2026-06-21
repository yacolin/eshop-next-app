'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  AutoSizer,
  List,
  InfiniteLoader,
  WindowScroller,
} from 'react-virtualized'
import type { ListRowProps, Index } from 'react-virtualized'
import { fetchProductsCursor } from '@/lib/api'
import type { Product } from '@/types/product'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

const PAGE_SIZE = 20
const ROW_HEIGHT = 260
const MAX_CARD_WIDTH = 300
const GAP = 16

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function getColumnCount(width: number) {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="truncate">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </p>
        {product.description && (
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {product.description}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">SKU: {product.sku}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full cursor-pointer" asChild>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function InfiniteProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [nextCursor, setNextCursor] = useState<number | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const loadingRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await fetchProductsCursor()
        if (cancelled) return
        setProducts(data.list)
        setNextCursor(data.next_cursor)
        setHasMore(data.has_more)
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error')
        }
      } finally {
        if (!cancelled) setInitialLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const loadMoreRows = useCallback(async () => {
    if (loadingRef.current || !hasMore) return
    loadingRef.current = true
    try {
      const data = await fetchProductsCursor(nextCursor)
      setProducts((prev) => [...prev, ...data.list])
      setNextCursor(data.next_cursor)
      setHasMore(data.has_more)
    } catch (e) {
      console.error('Failed to load more products:', e)
    } finally {
      loadingRef.current = false
    }
  }, [nextCursor, hasMore])

  // Loading state
  if (initialLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              </CardHeader>
              <CardContent>
                <div className="h-7 w-1/2 animate-pulse rounded bg-muted" />
                <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-muted" />
              </CardContent>
              <CardFooter>
                <div className="h-7 w-full animate-pulse rounded bg-muted" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="mx-auto mt-8 max-w-md px-4">
        <Card>
          <CardContent className="py-8 text-center text-destructive">
            <p className="font-medium">Failed to load products</p>
            <p className="mt-1 text-sm">{error}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="mx-auto mt-8 max-w-md px-4">
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            <p>No products available</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      <div className="px-4">
        <WindowScroller>
          {({ height, isScrolling, scrollTop, onChildScroll }) => (
            <AutoSizer disableHeight>
              {({ width }) => {
                const cols = getColumnCount(width)
                const cardWidth = Math.min((width - GAP * (cols - 1)) / cols, MAX_CARD_WIDTH)
                const visualRowCount = Math.ceil(products.length / cols)
                const rowCount = hasMore ? visualRowCount + 1 : visualRowCount

                function isRowLoaded({ index }: Index) {
                  return index < visualRowCount
                }

                function rowRenderer({
                  index,
                  key,
                  style,
                }: ListRowProps) {
                  const startIdx = index * cols
                  const rowProducts = products.slice(startIdx, startIdx + cols)

                  // Sentinel row — show loading indicator
                  if (rowProducts.length === 0) {
                    return (
                      <div key={key} style={style} className="flex items-center justify-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="size-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                          Loading more...
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div key={key} style={style} className="flex justify-center gap-4 py-2">
                      {rowProducts.map((product) => (
                        <div
                          key={product.id}
                          style={{ width: cardWidth }}
                          className="flex-shrink-0"
                        >
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  )
                }

                return (
                  <div className="mx-auto max-w-4xl">
                    <InfiniteLoader
                      isRowLoaded={isRowLoaded}
                      loadMoreRows={loadMoreRows}
                      rowCount={rowCount}
                      threshold={1}
                    >
                      {({ onRowsRendered, registerChild }) => (
                        <List
                          ref={registerChild as any}
                          autoHeight
                          height={height}
                          isScrolling={isScrolling}
                          onScroll={onChildScroll}
                          scrollTop={scrollTop}
                          width={width}
                          rowCount={rowCount}
                          rowHeight={ROW_HEIGHT}
                          rowRenderer={rowRenderer}
                          onRowsRendered={onRowsRendered}
                          overscanRowCount={2}
                        />
                      )}
                    </InfiniteLoader>
                  </div>
                )
              }}
            </AutoSizer>
          )}
        </WindowScroller>
      </div>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/80"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  )
}
