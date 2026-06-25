"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Props {
  totalAmount: number;
  loading?: boolean;
  onClick?: () => void;
}

export function SubmitButton({ totalAmount, loading, onClick }: Props) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">合计</span>
        <span className="text-2xl font-bold text-primary">{formatPrice(totalAmount)}</span>
      </div>
      <Button
        size="lg"
        className="w-full cursor-pointer text-base"
        onClick={onClick}
        disabled={loading}
      >
        {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
        提交订单
      </Button>
    </div>
  );
}
