"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type AiScope = "ums" | "sdk" | "general";

export function AiLink({
  prompt,
  scope,
  children,
  className,
}: {
  prompt?: string;
  scope?: AiScope;
  children: React.ReactNode;
  className?: string;
}) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent("open-ai-chat", {
        detail: { prompt, scope },
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
