"use client";

import * as React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
            <NavigationMenu>
              <NavigationMenuList className="gap-1.5">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavbarLink
                      href="/home"
                      active={pathname.startsWith("/home")}
                    >
                      Home
                    </NavbarLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavbarDropdownLink
                  label="PDA"
                  items={[
                    { href: "/projects/pda/RT40S", label: "RT40S" },
                    { href: "/projects/pda/DT50S", label: "DT50(S)" },
                    { href: "/projects/pda/DT66", label: "DT66" },
                  ]}
                />

                <NavbarDropdownLink
                  label="POS"
                  items={[
                    { href: "/projects/pos/i9600", label: "i9600" },
                    { href: "/projects/pos/i9200", label: "i9200" },
                    { href: "/projects/pos/i9100", label: "i9100" },
                    { href: "/projects/pos/i5300", label: "i5300" },
                    { href: "/projects/pos/i5300l", label: "i5300L" },
                  ]}
                />

                <NavbarDropdownLink
                  label="Tools"
                  items={[{ href: "/tools/adb", label: "Web ADB Tool" }]}
                />

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavbarLink
                      href="/ums"
                      active={pathname.startsWith("/ums")}
                    >
                      UMS
                    </NavbarLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavbarLink
                      href="/links"
                      active={pathname.startsWith("/links")}
                    >
                      Links
                    </NavbarLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              className="hidden md:inline-flex cursor-pointer"
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
