"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(10,10,14,0.72)] supports-backdrop-filter:backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
function NavbarContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-container"
      className={cn(
        "flex h-16 w-full items-center justify-between gap-4 px-4 md:px-6",
        className,
      )}
      {...props}
    />
  );
}

function NavbarLeft({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-left"
      className={cn("flex min-w-0 items-center gap-3", className)}
      {...props}
    />
  );
}

function NavbarCenter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-center"
      className={cn(
        "hidden flex-1 items-center justify-center lg:flex",
        className,
      )}
      {...props}
    />
  );
}

function NavbarRight({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-right"
      className={cn("flex items-center justify-end gap-2", className)}
      {...props}
    />
  );
}

function NavbarBrand({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="navbar-brand"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl px-1 py-1 text-foreground transition-opacity duration-200 hover:opacity-90",
        className,
      )}
      {...props}
    />
  );
}

function NavbarBrandMark({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-brand-mark"
      className={cn(
        "flex size-9 items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

function NavbarBrandText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-brand-text"
      className={cn("flex flex-col leading-none", className)}
      {...props}
    />
  );
}

function NavbarNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navbar-nav"
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function NavbarLink({
  className,
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      draggable="false"
      data-slot="navbar-link"
      data-active={active}
      className={cn(
        "inline-flex h-9 items-center rounded-xl px-3 text-lg text-foreground/65 transition-[background-color,color,border-color] duration-200 hover:bg-white/5 hover:text-foreground data-[active=true]:bg-white/6 data-[active=true]:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function NavbarSearchButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="navbar-search-button"
      variant="outline"
      className={cn(
        "hidden h-9 w-55 justify-start rounded-xl border-white/10 bg-white/3 px-3 text-sm text-foreground/45 hover:bg-white/5 hover:text-foreground md:inline-flex",
        className,
        "cursor-pointer",
      )}
      {...props}
    />
  );
}

function NavbarActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function NavbarDropdownLink({
  label,
  items,
  className,
}: {
  label: string;
  items: Array<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "inline-flex h-9 items-center rounded-xl px-3 text-lg text-foreground/65 transition-[background-color,color,border-color] duration-200 hover:bg-white/5 hover:text-foreground data-[state=open]:bg-white/6 data-[state=open]:text-foreground",
          className,
        )}
      >
        {label}
      </NavigationMenuTrigger>

      <NavigationMenuContent className="w-56 rounded-2xl border border-white/10 bg-[rgba(16,16,22,0.9)] p-1.5 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <ul className="grid gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="block rounded-xl px-2.5 py-2 text-foreground/80 transition-colors hover:bg-white/6 hover:text-foreground focus:bg-white/6 focus:text-foreground outline-none"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

// function NavbarUserMenu() {
//   async function handleSignOut() {
//     try {
//       await fetch("/api/auth/sign-out", {
//         method: "POST",
//         credentials: "include",
//       });

//       window.location.href = "/home";
//     } catch (error) {
//       console.error("Sign out failed:", error);
//     }
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon-sm"
//           className="rounded-xl border border-white/10 bg-white/3 hover:bg-white/6 cursor-pointer"
//         >
//           <Avatar className="size-7">
//             <AvatarImage src="/patrick_selfie.png" alt="User avatar" />
//             <AvatarFallback className="bg-transparent text-xs text-foreground/80">
//               PX
//             </AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         className="w-56 rounded-2xl border border-white/10 bg-[rgba(16,16,22,0.9)] p-1.5 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
//       >
//         <div className="px-2.5 py-2">
//           <p className="text-sm font-medium text-foreground">Patrick Xu</p>
//         </div>

//         <DropdownMenuSeparator className="bg-white/8" />

//         <div className="px-2.5 py-2 flex flex-col gap-1">
//           <p className="text-xs text-foreground/50">
//             <span className="font-bold">E-Mail</span>: patrick@urovo.com
//           </p>
//           <p className="text-xs text-foreground/50">
//             <span className="font-bold">Whatsapp</span>: +86 18807737955
//           </p>
//           <p className="text-xs text-foreground/50">
//             <span className="font-bold">Phone/Wechat</span>: 18807737955
//           </p>
//         </div>

//         <DropdownMenuSeparator className="bg-white/8" />

//         <button
//           type="button"
//           onClick={handleSignOut}
//           className="
//             flex w-full items-center rounded-xl px-2.5 py-2
//             text-sm text-foreground/70
//             transition-colors duration-200
//             hover:bg-white/6 hover:text-white
//             cursor-pointer
//             font-bold
//           "
//         >
//           Sign out
//         </button>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

export {
  Navbar,
  NavbarContainer,
  NavbarLeft,
  NavbarCenter,
  NavbarRight,
  NavbarBrand,
  NavbarBrandMark,
  NavbarBrandText,
  NavbarNav,
  NavbarLink,
  NavbarDropdownLink,
  NavbarSearchButton,
  NavbarActions,
  // NavbarUserMenu,
};
