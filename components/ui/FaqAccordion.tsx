"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

/** Accordion — §C.9. Native <details> would lose the rotate-icon animation,
 * so this is a small controlled list that matches the spec exactly. */
export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-3">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div
            key={item.q}
            className="rounded-md border border-border bg-card overflow-hidden transition-shadow duration-smooth ease-smooth hover:shadow-card"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold text-body text-hsq-black">
                {item.q}
              </span>
              <ChevronDown
                aria-hidden
                className={cn(
                  "h-5 w-5 shrink-0 text-hsq-gold transition-transform duration-fast ease-smooth",
                  open && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-fast ease-smooth",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-body-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
