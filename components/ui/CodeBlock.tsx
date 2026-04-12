import React from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  title,
  description,
  children,
  titleClassName,
  titleStyle,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6 md:py-6">
      <div className="space-y-1.5">
        <h3
          className={cn(
            "text-xl font-semibold tracking-tight text-white",
            titleClassName,
          )}
          style={titleStyle}
        >
          {title}
        </h3>
        <p className="text-sm leading-7 text-foreground/55">{description}</p>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}
