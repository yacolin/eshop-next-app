"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CheckoutHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-10 border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">
        <button
          onClick={() => router.back()}
          className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">确认订单</h1>
      </div>
    </div>
  );
}
