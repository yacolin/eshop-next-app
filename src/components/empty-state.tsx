import { Package } from "lucide-react";

export function EmptyState({ message = "No items available." }: { message?: string }) {
  return (
    <div className="rounded-xl border bg-card px-6 py-10 text-center">
      <Package className="mx-auto mb-3 size-8 text-muted-foreground/25" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
