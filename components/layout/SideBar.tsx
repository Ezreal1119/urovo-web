"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AppSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={cn(
        "group flex h-full flex-col border-r border-border bg-background/60 backdrop-blur-xl transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3">
        {!collapsed && (
          <span className="text-lg font-italic text-foreground">
            How to ...
          </span>
        )}

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-2">
        <SidebarItem collapsed={collapsed} label="Dashboard" href="/home" />
        <SidebarItem collapsed={collapsed} label="Blog" href="/home" />
        <SidebarItem collapsed={collapsed} label="Projects" href="/home" />
        <SidebarItem collapsed={collapsed} label="Notes" href="/home" />
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 flex justify-center">
        {!collapsed && (
          <div className="text-xs text-foreground/50">© PatrickXu</div>
        )}
      </div>
    </aside>
  );
}

function SidebarItem({
  label,
  collapsed,
  href,
}: {
  label: string;
  collapsed: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-10 items-center rounded-xl px-3 text-sm text-foreground/70 transition-colors hover:bg-muted/50 hover:text-foreground",
        collapsed && "justify-center px-0",
      )}
    >
      <div className="size-4 rounded bg-white/20" />
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
}
