"use client";

import { Minus, Plus } from "lucide-react";

/**
 * 商品数量选择器 —— 产品/秒杀详情页共用。
 *
 * 左右两个按钮（- / +）调节数量，中间显示当前值。
 * 数量在 [min, max] 区间内循环，超出边界时按钮无效果（不变灰）。
 *
 * @param quantity - 当前数量值，由父组件维护
 * @param onChange - 数量变化回调，接收更新后的数值
 * @param min      - 最小值（默认 1），- 按钮不会低于此值
 * @param max      - 最大值（默认 99），+ 按钮不会超过此值
 */
export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: {
  quantity: number;
  onChange: (q: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Quantity</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(Math.max(min, quantity - 1))}
          className="flex size-9 cursor-pointer items-center justify-center rounded-l-lg border transition-colors hover:bg-muted"
          aria-label="Decrease quantity"
        >
          <Minus className="size-3.5" />
        </button>
        <span className="flex h-9 w-12 items-center justify-center border-y text-sm font-medium tabular-nums">
          {quantity}
        </span>
        <button
          onClick={() => onChange(Math.min(max, quantity + 1))}
          className="flex size-9 cursor-pointer items-center justify-center rounded-r-lg border transition-colors hover:bg-muted"
          aria-label="Increase quantity"
        >
          <Plus className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
