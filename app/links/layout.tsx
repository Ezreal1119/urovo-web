import { FixedSidebar } from "@/components/layout/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <FixedSidebar
        title="Navigate to"
        items={[
          { label: "User Manual", href: "/links#manual" },
          { label: "SDK", href: "/links#sdk" },
          { label: "Windows Tools", href: "/links#tools" },
          { label: "Drivers", href: "/links#drivers" },
        ]}
      />

      <main className="ml-64 flex justify-center">
        <div className="w-full max-w-5xl px-8">{children}</div>
      </main>
    </div>
  );
}
