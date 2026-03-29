import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-xl border border-white/10 bg-white/3 px-3.5 py-2 text-base text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-[background-color,border-color,color,box-shadow] duration-200 outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground/40 hover:border-white/14 hover:bg-white/4 focus-visible:border-ring/40 focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-white/6 disabled:bg-white/2 disabled:text-foreground/40 disabled:opacity-50 aria-invalid:border-destructive/40 aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-sm dark:border-white/10 dark:bg-white/3 dark:hover:border-white/14 dark:hover:bg-white/4 dark:focus-visible:border-ring/40 dark:focus-visible:bg-white/5 dark:disabled:bg-white/2 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/30",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
