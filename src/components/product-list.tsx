import { fetchProducts } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function formatPrice(cents: number) {
  return `¥${(cents / 100).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export async function ProductList() {
  let data: Awaited<ReturnType<typeof fetchProducts>>;
  let error: string | null = null;

  try {
    data = await fetchProducts(20);
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
  }

  if (error) {
    return (
      <Card className="mx-auto mt-8 max-w-md">
        <CardContent className="text-center text-destructive">
          <p className="font-medium">Failed to load products</p>
          <p className="mt-1 text-sm">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Products</h2>
        {data!.has_more && <span className="text-sm text-muted-foreground">Scroll for more</span>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data!.list.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{formatPrice(product.min_price)}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
