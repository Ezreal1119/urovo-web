"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Sidebar({ className, ...props }: React.ComponentProps<"aside">) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(
        "hidden h-full w-65 shrink-0 border-r border-white/8 bg-[rgba(12,12,16,0.65)] supports-backdrop-filter:backdrop-blur-xl lg:block",
        className,
      )}
      {...props}
    />
  );
}

function SidebarContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-container"
      className={cn("flex h-full flex-col gap-6 px-4 py-5", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex items-center gap-3 px-1", className)}
      {...props}
    />
  );
}

function SidebarSection({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-section"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function SidebarSectionLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-section-label"
      className={cn(
        "px-2 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/40",
        className,
      )}
      {...props}
    />
  );
}

function SidebarNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="sidebar-nav"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarItem({
  className,
  active,
  icon,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      data-slot="sidebar-item"
      data-active={active}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/65 transition-[background-color,color] duration-200 hover:bg-white/5 hover:text-foreground data-[active=true]:bg-white/6 data-[active=true]:text-foreground",
        className,
      )}
      {...props}
    >
      {icon && (
        <span className="text-foreground/40 group-hover:text-foreground/70 data-[active=true]:text-foreground">
          {icon}
        </span>
      )}
      <span className="truncate">{props.children}</span>
    </Link>
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("mt-auto border-t border-white/8 pt-4", className)}
      {...props}
    />
  );
}

function SidebarDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-divider"
      className={cn("my-2 h-px bg-white/8", className)}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContainer,
  SidebarHeader,
  SidebarSection,
  SidebarSectionLabel,
  SidebarNav,
  SidebarItem,
  SidebarFooter,
  SidebarDivider,
};
