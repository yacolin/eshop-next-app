import { MessageSquare } from "lucide-react";

export function OrderNote() {
  return (
    <div className="rounded-xl border bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="size-4 text-muted-foreground/40" />
        <span className="text-sm text-muted-foreground/60">选填，给卖家留言</span>
      </div>
    </div>
  );
}
