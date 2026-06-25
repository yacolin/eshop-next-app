"use client";

import { Package, type LucideIcon } from "lucide-react";

/**
 * 商品图片画廊 —— 产品详情页与秒杀详情页共用。
 *
 * 展示一张渐变色主图 + 4 个缩略图按钮，点击缩略图切换主图。
 * 主图和缩略图使用 Tailwind 渐变色块模拟图片展示，无需真实图片资源。
 *
 * @param palettes      - 4 组渐变色数组，每组 3 段（from/via/to），对应 4 个图片位
 * @param selectedImage - 当前选中的图片索引（0-3），由父组件维护
 * @param onSelectImage - 缩略图点击回调，接收目标索引
 * @param icon          - 主图中央展示的 Lucide 图标，默认 Package；秒杀页传入 Zap
 */
export function ProductImageGallery({
  palettes,
  selectedImage,
  onSelectImage,
  icon: Icon = Package,
}: {
  palettes: string[][];
  selectedImage: number;
  onSelectImage: (idx: number) => void;
  icon?: LucideIcon;
}) {
  return (
    <div className="space-y-2">
      <div
        className={`flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-linear-to-br ${palettes[selectedImage].join(" ")}`}
      >
        <Icon className="size-28 text-muted-foreground/20" />
      </div>
      <div className="flex gap-2">
        {palettes.map((colors, idx) => {
          const isActive = selectedImage === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectImage(idx)}
              className={`aspect-square w-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                isActive
                  ? "border-primary ring-1 ring-primary/30"
                  : "border-border hover:border-muted-foreground/30"
              }`}
            >
              <div
                className={`flex h-full w-full items-center justify-center bg-linear-to-br ${colors.join(" ")}`}
              >
                <Package className="size-6 text-muted-foreground/20" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
