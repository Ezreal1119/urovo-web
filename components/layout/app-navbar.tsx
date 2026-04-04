"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { NavbarContactDialog } from "@/components/layout/navbar-contact-dialog";
import { NavbarSearchDialog } from "@/components/layout/navbar-search-dialog";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarBrandMark,
  NavbarBrandText,
  NavbarCenter,
  NavbarContainer,
  NavbarDropdownLink,
  NavbarLeft,
  NavbarLink,
  NavbarNav,
  NavbarRight,
  NavbarSearchButton,
  NavbarUserMenu,
} from "./Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function AppNavbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <Navbar>
      <NavbarContainer>
        <NavbarLeft>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-xl lg:hidden"
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </Button>

          <NavbarBrand href="/home">
            <NavbarBrandMark>
              <Image
                src="/patrick.png"
                alt="P@trick logo"
                width={50}
                height={50}
                className="opacity-90"
              />
            </NavbarBrandMark>
            <NavbarBrandText>
              <span
                className={`text-md tracking-tight text-foreground ${playfair.className}`}
              >
                Urovo-Tech
              </span>
              <span className="text-xs text-foreground/45">
                Notes, tools, and experiments
              </span>
            </NavbarBrandText>
          </NavbarBrand>
        </NavbarLeft>

        <NavbarCenter>
          <NavbarNav>
            <NavbarLink href="/home" active={pathname.startsWith("/home")}>
              Home
            </NavbarLink>

            <NavbarDropdownLink label="PDA">
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pda/RT40S">RT40S</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pda/DT50S">DT50(S)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pda/DT66">DT66</Link>
              </DropdownMenuItem>
            </NavbarDropdownLink>

            <NavbarDropdownLink label="POS">
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pos/i5300">i5300(L)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pos/i9100">i9100</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-xl text-foreground/80 focus:bg-white/6 focus:text-foreground"
              >
                <Link href="/projects/pos/i9200">i9200</Link>
              </DropdownMenuItem>
            </NavbarDropdownLink>

            <NavbarLink href="/ums" active={pathname.startsWith("/ums")}>
              UMS
            </NavbarLink>

            <NavbarLink href="/tools" active={pathname.startsWith("/tools")}>
              Tools
            </NavbarLink>

            <NavbarLink href="/links" active={pathname.startsWith("/links")}>
              Links
            </NavbarLink>
          </NavbarNav>
        </NavbarCenter>

        <NavbarRight>
          <NavbarSearchButton onClick={() => setSearchOpen(true)}>
            <Search className="mr-2 size-4" />
            Search...
          </NavbarSearchButton>

          <NavbarActions>
            {/* <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-xl border border-white/10 bg-white/3 hover:bg-white/6"
            >
              <Bell />
              <span className="sr-only">Notifications</span>
            </Button> */}

            <Button
              className="hidden md:inline-flex"
              onClick={() => setContactOpen(true)}
            >
              Contact
            </Button>

            <NavbarUserMenu />
          </NavbarActions>
        </NavbarRight>
      </NavbarContainer>
      <NavbarSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <NavbarContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </Navbar>
  );
}
