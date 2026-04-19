import { FixedSidebar } from "@/components/layout/SideBar";
import { AiChatDialog } from "@/components/ui/AiChatDialog";

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
          { label: "UMS Intro", href: "/ums#intro" },
          { label: "1. Group Manage", href: "/ums#group" },
          { label: "2. App Manage", href: "/ums#app" },
          { label: "3. Remote Manage", href: "/ums#remote" },
          { label: "4. Account Manage", href: "/ums#account" },
          { label: "5. UTMS(Private)", href: "/ums#utms" },
        ]}
      />

      <main className="ml-52 flex justify-center">
        <div className="w-full max-w-6xl px-8">{children}</div>
      </main>
      <AiChatDialog scope="ums" />
    </div>
  );
}
