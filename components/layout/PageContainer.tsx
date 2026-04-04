"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function PageShell({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const targetRef = React.useRef({ x: 0, y: 0 });
  const currentRef = React.useRef({ x: 0, y: 0 });
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    function animate() {
      const target = targetRef.current;
      const current = currentRef.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      document.documentElement.style.setProperty("--mouse-x", `${current.x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${current.y}px`);

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    targetRef.current.x = e.clientX;
    targetRef.current.y = e.clientY;
  }

  return (
    <div
      data-slot="page-shell"
      onMouseMove={handleMouseMove}
      className={cn("relative min-h-screen text-foreground", className)}
      {...props}
    >
      <div className="pointer-events-none fixed inset-0 -z-20 bg-background" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.06),transparent_55%),radial-gradient(900px_500px_at_80%_0%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(420px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(236,72,153,0.05),transparent_55%)]"
      />
      {children}
    </div>
  );
}

function PageContainer({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="page-container"
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 md:px-6 md:py-10",
        className,
      )}
      {...props}
    />
  );
}

function PageHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="page-header"
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/3 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:px-6 md:py-6",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-content"
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className,
      )}
      {...props}
    />
  );
}

function PageEyebrow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-eyebrow"
      className={cn(
        "text-xs font-medium tracking-[0.14em] uppercase text-foreground/45",
        className,
      )}
      {...props}
    />
  );
}

function PageTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="page-title"
      className={cn(
        "text-3xl md:text-4xl font-semibold tracking-tight",
        "bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}

function PageDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-description"
      className={cn(
        "max-w-2xl text-sm leading-7 text-foreground/60 md:text-[15px]",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-actions"
      className={cn("flex shrink-0 flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

function PageSection({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="page-section"
      className={cn("flex flex-col gap-5", className)}
      {...props}
    />
  );
}

function PageSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-section-header"
      className={cn(
        "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        className,
      )}
      {...props}
    />
  );
}

function PageSectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="page-section-title"
      className={cn(
        "text-lg font-medium tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function PageSectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-section-description"
      className={cn("text-sm leading-6 text-foreground/55", className)}
      {...props}
    />
  );
}

function PageSectionAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-section-action"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function PageGrid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-grid"
      className={cn(
        "grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12",
        className,
      )}
      {...props}
    />
  );
}

function PageMain({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-main"
      className={cn("lg:col-span-8 xl:col-span-9", className)}
      {...props}
    />
  );
}

function PageAside({ className, ...props }: React.ComponentProps<"aside">) {
  return (
    <aside
      data-slot="page-aside"
      className={cn("lg:col-span-4 xl:col-span-3", className)}
      {...props}
    />
  );
}

function PageStack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-stack"
      className={cn("flex flex-col gap-4 md:gap-5", className)}
      {...props}
    />
  );
}

function PageDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-divider"
      className={cn("h-px w-full bg-white/8", className)}
      {...props}
    />
  );
}

export default function AppPageContainer() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <div className="space-y-3">
            <PageEyebrow>Workspace</PageEyebrow>
            <PageTitle>Minimal premium dashboard</PageTitle>
            <PageDescription>
              This demo shows how the page layout primitives work together to
              create a clean, breathable, developer-oriented interface.
            </PageDescription>
          </div>

          <PageHeaderActions>
            <Button variant="outline">Secondary</Button>
            <Button>Primary Action</Button>
          </PageHeaderActions>
        </PageHeaderContent>
      </PageHeader>

      <PageSection>
        <PageSectionHeader>
          <div className="space-y-1">
            <PageSectionTitle>Overview</PageSectionTitle>
            <PageSectionDescription>
              A simple two-column layout with primary content on the left and
              supporting content on the right.
            </PageSectionDescription>
          </div>

          <PageSectionAction>
            <Button variant="ghost">View all</Button>
          </PageSectionAction>
        </PageSectionHeader>

        <PageGrid>
          <PageMain>
            <PageStack>
              <Card>
                <CardHeader>
                  <CardTitle>Main content</CardTitle>
                  <CardDescription>
                    This is the main content area of the page.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70">
                      Use this section for dashboards, articles, notes, or
                      product summaries. It is designed to feel calm, premium,
                      and highly readable.
                    </p>

                    <PageDivider />

                    <p className="text-sm text-foreground/60">
                      The spacing, width, and visual hierarchy are controlled by
                      the page layout components rather than being repeated
                      manually in every page.
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline">Details</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Another section</CardTitle>
                  <CardDescription>
                    Example of a second stacked block inside PageMain.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/70">
                      The PageStack component keeps consistent vertical rhythm
                      between content blocks.
                    </p>
                    <p className="text-sm text-foreground/60">
                      This makes the page easier to maintain and keeps the UI
                      system visually consistent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </PageStack>
          </PageMain>

          <PageAside>
            <PageStack>
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Quick links</CardTitle>
                  <CardDescription>
                    Supporting information or shortcuts.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>Latest posts</li>
                    <li>Popular notes</li>
                    <li>Recent experiments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card size="sm">
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground/70">
                    All systems aligned with the premium dark design system.
                  </p>
                </CardContent>
              </Card>
            </PageStack>
          </PageAside>
        </PageGrid>
      </PageSection>
    </PageContainer>
  );
}

export {
  PageShell,
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageEyebrow,
  PageTitle,
  PageDescription,
  PageHeaderActions,
  PageSection,
  PageSectionHeader,
  PageSectionTitle,
  PageSectionDescription,
  PageSectionAction,
  PageGrid,
  PageMain,
  PageAside,
  PageStack,
  PageDivider,
};
