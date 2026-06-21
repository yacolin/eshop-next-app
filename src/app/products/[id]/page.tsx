import { notFound } from 'next/navigation'
import Link from 'next/link'
import { fetchProductById } from '@/lib/api'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

interface Props {
  params: Promise<{ id: string }>
}

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const productId = Number(id)

  if (isNaN(productId)) {
    notFound()
  }

  let product
  try {
    product = await fetchProductById(productId)
  } catch {
    notFound()
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
