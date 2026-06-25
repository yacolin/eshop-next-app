import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

/**
 * 服务承诺条 —— 产品/秒杀详情页底部公用。
 *
 * 三列网格展示固定服务承诺（7 天退换、包邮、正品保障）。
 * 纯静态展示组件，无 props，无交互。
 * 使用 bg-card/50 底色 + border 卡片样式，与页面整体风格统一。
 */
export function ServicePromises() {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl border bg-card/50 p-3 text-center text-xs text-muted-foreground">
      <div className="flex flex-col items-center gap-1">
        <RotateCcw className="size-4" />
        7-day return
      </div>
      <div className="flex flex-col items-center gap-1">
        <Truck className="size-4" />
        Free shipping
      </div>
      <div className="flex flex-col items-center gap-1">
        <ShieldCheck className="size-4" />
        Authentic
      </div>
    </div>
  );
}
