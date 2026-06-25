import { MapPin, ChevronRight } from "lucide-react";

export function AddressSection() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 px-6 py-5 transition-colors hover:border-muted-foreground/40">
      <div className="flex size-10 items-center justify-center rounded-full bg-muted">
        <MapPin className="size-5 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-muted-foreground">请添加收货地址</p>
        <p className="text-xs text-muted-foreground/60">填写收货信息以便卖家发货</p>
      </div>
      <ChevronRight className="size-4 text-muted-foreground/40" />
    </div>
  );
}
