"use client";

import { AdbServiceProvider } from "@/app/tools/adb/_lib/adb-context";
import { FloatingConsole } from "@/app/tools/adb/FloatingConsole";
import { getCurrentAdbService } from "@/lib/adbService";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adbService =
    typeof window !== "undefined" ? getCurrentAdbService() : null;

  return (
    <AdbServiceProvider value={adbService}>
      {children}
      <FloatingConsole />
    </AdbServiceProvider>
  );
}
