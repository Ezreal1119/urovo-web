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
          {
            label: "i9100 Overview",
            href: "/projects/pos/i9100/p9x4m2k8#overview",
          },
          {
            label: "1. Firmware upgrade",
            href: "/projects/pos/i9100/p9x4m2k8#upgrade",
          },
          {
            label: "2. Log Capture",
            href: "/projects/pos/i9100/p9x4m2k8#log",
          },
          {
            label: "3. Maintenance",
            href: "/projects/pos/i9100/p9x4m2k8#maintenance",
          },
          {
            label: "4. Spare Parts",
            href: "/projects/pos/i9100/p9x4m2k8#spare",
          },
          {
            label: "5. Safe Mode",
            href: "/projects/pos/i9100/p9x4m2k8#safe_mode",
          },
          {
            label: "6. Q&A",
            href: "/projects/pos/i9100/p9x4m2k8#qa",
          },
        ]}
      />

      <main className="ml-52 flex justify-center">
        <div className="w-full max-w-7xl px-8">{children}</div>
      </main>
    </div>
  );
}
