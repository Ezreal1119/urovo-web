"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SEARCH_ITEMS } from "@/components/layout/navbar-search-items";

export function NavbarSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return [];
    }

    return SEARCH_ITEMS.filter((item) => {
      const haystack = [item.label, ...item.keywords].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  function handleSelect(href: string) {
    onOpenChange(false);
    setQuery("");

    const [targetPath, hash] = href.split("#");

    if (targetPath === pathname && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(href);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[92vw] max-w-2xl
          rounded-3xl
          border border-white/10
          bg-[rgba(10,10,14,0.88)]
          p-0
          text-foreground
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <DialogTitle className="sr-only">Search pages and sections</DialogTitle>
        <DialogDescription className="sr-only">
          Search pages and jump to sections across the site.
        </DialogDescription>

        <div className="relative flex items-center">
          <Search className="absolute left-4 size-4 text-foreground/45" />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                if (results.length > 0) {
                  handleSelect(results[0].href);
                }
              }
            }}
            placeholder="Search pages or sections..."
            className="
      w-full rounded-2xl border border-white/10 bg-white/[0.04]
      py-3 pl-10 pr-10 text-sm text-foreground outline-none
      placeholder:text-foreground/35
    "
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              className="
        absolute right-3 flex size-6 items-center justify-center
        rounded-md text-foreground/40 transition
        hover:bg-white/10 hover:text-foreground
      "
            >
              ✕
            </button>
          )}
        </div>

        <div className="max-h-[420px] overflow-y-auto p-2">
          {query === "" ? (
            <div className="px-4 py-8 text-sm text-foreground/40">
              Start typing to search...
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-sm text-foreground/40">
              No results found.
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="
                    flex w-full items-center justify-between rounded-2xl px-4 py-3
                    text-left transition-all duration-200
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-xs text-foreground/40">
                      {item.href}
                    </div>
                  </div>

                  <span className="ml-4 text-foreground/30">↗</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
