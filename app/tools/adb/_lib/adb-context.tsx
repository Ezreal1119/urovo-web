"use client";

import * as React from "react";
import { getCurrentAdbService, type WebAdbService } from "@/lib/adbService";

export const AdbServiceContext = React.createContext<WebAdbService | null>(null);

export function AdbServiceProvider({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: WebAdbService | null;
}>) {
  return (
    <AdbServiceContext.Provider value={value}>{children}</AdbServiceContext.Provider>
  );
}

export function useAdbService(): WebAdbService | null {
  const ctx = React.useContext(AdbServiceContext);
  if (ctx != null) {
    return ctx;
  }
  if (typeof window === "undefined") {
    return null;
  }
  return getCurrentAdbService();
}
