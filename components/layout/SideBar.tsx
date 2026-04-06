"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Divider from "../ui/divider";

export default function AppSidebar({
  title,
  items,
}: {
  title?: string;
  items: { label: string; href: string }[];
}) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={cn(
        "group self-start flex flex-col border-r border-border bg-background/60 backdrop-blur-xl transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center justify-between px-3 py-3">
        {!collapsed && (
          <span className={`text-lg font-bold text-foreground`}>
            {title ?? "Sidebar"}
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
      <Divider />
      <nav className="flex flex-col gap-1 px-2">
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            collapsed={collapsed}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-2 px-3 py-3 flex justify-center">
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

export function FixedSidebar({
  title,
  items,
}: {
  title?: string;
  items: { label: string; href: string }[];
}) {
  return (
    <aside
      className={cn(
        "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-52",
        "group flex flex-col border-r border-border bg-background/60 backdrop-blur-xl transition-all duration-300",
      )}
    >
      <div className="flex items-center justify-between px-3 py-3">
        <span className="text-lg font-bold text-foreground">
          {title ?? "Sidebar"}
        </span>
      </div>

      <Divider />
      <nav className="flex flex-col gap-1 px-2">
        {items.map((item) => (
          <FixedSidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>

      <div className="mt-auto flex justify-center px-3 py-3">
        <div className="text-xs text-foreground/50">© PatrickXu</div>
      </div>
    </aside>
  );
}

function FixedSidebarItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-10 items-center rounded-xl px-3 text-sm text-foreground/70 transition-colors hover:bg-muted/50 hover:text-foreground",
      )}
    >
      <div className="size-4 rounded bg-white/20" />
      <span className="ml-3">{label}</span>
    </Link>
  );
}
