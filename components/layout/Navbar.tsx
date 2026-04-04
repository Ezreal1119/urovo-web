"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search, Bell } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const playfair = Playfair_Display({
  subsets: ["latin"],
});
const SEARCH_ITEMS = [
  { label: "Home", href: "/home", keywords: ["home"] },

  { label: "UMS", href: "/ums", keywords: ["ums", "mdm", "tms"] },
  {
    label: "UMS / App Management",
    href: "/ums#app-management",
    keywords: ["app", "app store", "upload", "deployment"],
  },
  {
    label: "UMS / Group Management",
    href: "/ums#group",
    keywords: ["group", "sub-group", "binding"],
  },
  {
    label: "UMS / Remote Management",
    href: "/ums#remote",
    keywords: ["remote", "log", "device monitoring", "configuration"],
  },
  {
    label: "UMS / Account Management",
    href: "/ums#account",
    keywords: ["account", "authorization", "sub-account", "operator"],
  },

  { label: "Links", href: "/links", keywords: ["links", "download", "sdk"] },

  {
    label: "PDA / RT40S",
    href: "/projects/pda/RT40S",
    keywords: ["pda", "rt40s"],
  },
  {
    label: "PDA / DT50(S)",
    href: "/projects/pda/DT50S",
    keywords: ["pda", "dt50", "dt50s"],
  },
  {
    label: "PDA / DT66",
    href: "/projects/pda/DT66",
    keywords: ["pda", "dt66"],
  },

  {
    label: "POS / i5300(L)",
    href: "/projects/pos/i5300",
    keywords: ["pos", "i5300", "i5300l"],
  },
  {
    label: "POS / i9100",
    href: "/projects/pos/i9100",
    keywords: ["pos", "i9100"],
  },
  {
    label: "POS / i9200",
    href: "/projects/pos/i9200",
    keywords: ["pos", "i9200"],
  },
  {
    label: "Android / Debug",
    href: "/tools/adb",
    keywords: ["adb"],
  },
];

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
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Link
            href="#"
            className={cn(
              "inline-flex h-9 items-center rounded-xl px-3 text-lg text-foreground/65 transition-[background-color,color,border-color] duration-200 hover:bg-white/5 hover:text-foreground",
              className,
            )}
          >
            {label}
          </Link>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          sideOffset={0}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="w-56 rounded-2xl bg-[rgba(16,16,22,0.9)] p-1.5 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function NavbarUserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-xl border border-white/10 bg-white/3 hover:bg-white/6"
        >
          <Avatar className="size-7">
            <AvatarImage src="/patrick_selfie.png" alt="User avatar" />
            <AvatarFallback className="bg-transparent text-xs text-foreground/80">
              PX
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 rounded-2xl border border-white/10 bg-[rgba(16,16,22,0.9)] p-1.5 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <div className="px-2.5 py-2">
          <p className="text-sm font-medium text-foreground">
            Patrick Xu @ 2026
          </p>
        </div>
        <DropdownMenuSeparator className="bg-white/8" />
        <div className="px-2.5 py-2 flex flex-col gap-1">
          <p className="text-xs text-foreground/50">
            <span className="font-bold">E-Mail</span>: patrick@urovo.com
          </p>
          <p className="text-xs text-foreground/50">
            <span className="font-bold">Whatsapp</span>: +86 18807737955
          </p>
          <p className="text-xs text-foreground/50">
            <span className="font-bold">Phone/Wechat</span>: 18807737955
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavbarSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return [];
    }

    return SEARCH_ITEMS.filter((item) => {
      const haystack = [item.label, ...item.keywords].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  function handleSelect(href: string) {
    onOpenChange(false);
    setQuery("");

    const [targetPath, hash] = href.split("#");

    if (targetPath === pathname && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(href);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[92vw] max-w-2xl
          rounded-3xl
          border border-white/10
          bg-[rgba(10,10,14,0.88)]
          p-0
          text-foreground
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <DialogTitle className="sr-only">Search pages and sections</DialogTitle>
        <DialogDescription className="sr-only">
          Search pages and jump to sections across the site.
        </DialogDescription>

        <div className="relative flex items-center">
          <Search className="absolute left-4 size-4 text-foreground/45" />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                if (results.length > 0) {
                  handleSelect(results[0].href);
                }
              }
            }}
            placeholder="Search pages or sections..."
            className="
      w-full rounded-2xl border border-white/10 bg-white/[0.04]
      py-3 pl-10 pr-10 text-sm text-foreground outline-none
      placeholder:text-foreground/35
    "
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              className="
        absolute right-3 flex size-6 items-center justify-center
        rounded-md text-foreground/40 transition
        hover:bg-white/10 hover:text-foreground
      "
            >
              ✕
            </button>
          )}
        </div>

        <div className="max-h-[420px] overflow-y-auto p-2">
          {query === "" ? (
            <div className="px-4 py-8 text-sm text-foreground/40">
              Start typing to search...
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-sm text-foreground/40">
              No results found.
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="
                    flex w-full items-center justify-between rounded-2xl px-4 py-3
                    text-left transition-all duration-200
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-xs text-foreground/40">
                      {item.href}
                    </div>
                  </div>

                  <span className="ml-4 text-foreground/30">↗</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function NavbarContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit() {
    if (!title.trim() || !content.trim() || !email.trim()) return;

    setSubmitted(true);

    setTimeout(() => {
      setTitle("");
      setContent("");
      setEmail("");
      setSubmitted(false);
      onOpenChange(false);
    }, 1200);
  }

  const isDisabled = !title.trim() || !content.trim() || !email.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          !w-[88vw] !max-w-[1180px]
          !h-[72vh]
          p-0
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[rgba(10,10,14,0.92)]
          text-foreground
          shadow-[0_24px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <DialogTitle className="sr-only">Contact Me</DialogTitle>
        <DialogDescription className="sr-only">
          Send a message with title, content, and email.
        </DialogDescription>

        <div className="grid h-full grid-cols-[0.82fr_1.18fr]">
          {/* Left panel */}
          <div className="flex flex-col justify-between border-r border-white/10 bg-white/[0.02] px-7 py-7">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight text-white">
                  Contact Me
                </h3>

                <p className="max-w-sm text-sm leading-7 text-foreground/55">
                  Send me a message for project discussion, business
                  communication, or technical collaboration.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-foreground/65">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/35">
                  Direct Contact
                </div>

                <div className="mt-3 space-y-2">
                  <div>
                    <div className="text-xs text-foreground/35">Email</div>
                    <div className="text-sm text-white">patrick@urovo.com</div>
                  </div>

                  <div>
                    <div className="text-xs text-foreground/35">WhatsApp</div>
                    <div className="text-sm text-white">+86 18807737955</div>
                  </div>

                  <div>
                    <div className="text-xs text-foreground/35">
                      Phone / WeChat
                    </div>
                    <div className="text-sm text-white">18807737955</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] px-4 py-4 text-sm leading-6 text-foreground/70">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                  Note
                </div>
                <p className="mt-2">
                  Please leave a clear title and enough project context so I can
                  reply efficiently.
                </p>
              </div>

              {submitted && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3 text-sm text-emerald-300">
                  Submitted successfully.
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-6">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="h-11 rounded-xl border-white/10 bg-white/[0.03] px-5 hover:bg-white/[0.06]"
              >
                Cancel
              </Button>

              <Button
                onClick={handleSubmit}
                disabled={isDisabled}
                className="h-11 rounded-xl px-5"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Right panel */}
          <div className="min-h-0 overflow-y-auto px-7 py-7">
            <div className="space-y-5">
              <div>
                <div className="text-base font-medium text-blue-300">
                  Message Form
                </div>
                <p className="mt-1 text-sm text-foreground/45">
                  Fill in the information below and send your message.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Title
                  </label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the title"
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Content
                  </label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your message"
                    className="min-h-[260px] rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Email
                  </label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AppNavbar() {
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
  NavbarSearchButton,
  NavbarActions,
  NavbarUserMenu,
  AppNavbar,
};
