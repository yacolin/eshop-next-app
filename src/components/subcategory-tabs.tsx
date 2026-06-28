"use client";

import { useRouter } from "next/navigation";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import type { Category } from "@/types/product";

interface Props {
  categoryId: number;
  subcategories: Category[];
  currentSub: string | null;
}

export function SubcategoryTabs({ categoryId, subcategories, currentSub }: Props) {
  const router = useRouter();
  const activeSub = currentSub ?? String(subcategories[0]?.id);

  return (
    <div className="mb-6 overflow-x-auto overflow-y-hidden">
      <ButtonGroup>
        {subcategories.map((sub) => (
          <Button
            key={sub.id}
            variant={activeSub === String(sub.id) ? "default" : "outline"}
            onClick={() =>
              router.replace(`/category/${categoryId}?sub=${sub.id}`, { scroll: false })
            }
          >
            {sub.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
