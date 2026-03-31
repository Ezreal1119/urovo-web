import * as React from "react";
import { cn } from "@/lib/utils";

export function CodeInline({
  className,
  children,
}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-white/6 px-1.5 font-mono text-[0.9em] text-foreground/90",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function CodeBlock({
  className,
  children,
}: React.ComponentProps<"code">) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        className,
      )}
    >
      <code className="font-mono text-sm leading-7 text-foreground/85">
        {children}
      </code>
    </pre>
  );
}
