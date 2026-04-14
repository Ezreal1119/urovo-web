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
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#overview",
          },
          {
            label: "1. Firmware upgrade",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#upgrade",
          },
          {
            label: "2. Log Capture",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#log",
          },
          {
            label: "3. Maintenance",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#maintenance",
          },
          {
            label: "4. Spare Parts",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#spare",
          },
          {
            label: "5. Safe Mode",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#safe_mode",
          },
          {
            label: "6. Q&A",
            href: "/projects/pos/i9100/0c7b3083-bfa4-427f-9f47-65386d11e974#qa",
          },
        ]}
      />

      <main className="ml-52 flex justify-center">
        <div className="w-full max-w-7xl px-8">{children}</div>
      </main>
    </div>
  );
}
