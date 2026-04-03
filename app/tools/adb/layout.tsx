import { FloatingConsole } from "@/app/tools/adb/FloatingConsole";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FloatingConsole />
    </>
  );
}
