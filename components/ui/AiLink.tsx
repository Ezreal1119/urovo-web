"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function AiLink({
  prompt,
  children,
  className,
}: {
  prompt: string;
  children: React.ReactNode;
  className?: string;
}) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent("open-ai-chat", {
        detail: { prompt },
      }),
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300",
        className,
      )}
    >
      {children}
    </button>
  );
}
