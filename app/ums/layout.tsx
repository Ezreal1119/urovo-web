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
          { label: "UMS Intro", href: "/ums#Intro" },
          { label: "1. Group Management", href: "/ums#group" },
          { label: "2. App Management", href: "/ums#app" },
          { label: "3. Remote Management", href: "/ums#remote" },
          { label: "4. Account Management", href: "/ums#account" },
          { label: "5. UTMS(Private UMS)", href: "/ums#utms" },
        ]}
      />

      <main className="ml-64 flex justify-center">
        <div className="w-full max-w-5xl px-8">{children}</div>
      </main>
    </div>
  );
}
