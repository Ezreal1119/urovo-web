import * as React from "react";

import { cn } from "@/lib/utils";

function PageShell({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-shell"
      className={cn(
        "min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.08),transparent_55%),radial-gradient(900px_500px_at_80%_0%,rgba(59,130,246,0.06),transparent_50%)] bg-background text-foreground",
        className,
      )}
      {...props}
    />
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
        "text-2xl font-medium tracking-tight text-foreground md:text-3xl",
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
