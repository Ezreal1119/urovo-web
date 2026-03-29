import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-clip-padding text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform,filter] duration-200 outline-none select-none focus-visible:border-ring/40 focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive/40 aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/30 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/90 text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_6px_20px_rgba(0,0,0,0.28),0_0_24px_rgba(236,72,153,0.12)] hover:bg-primary hover:brightness-110",
        outline:
          "border-white/10 bg-white/[0.03] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:bg-white/[0.06] hover:border-white/15 aria-expanded:bg-white/[0.06] aria-expanded:border-white/15",
        secondary:
          "border-white/8 bg-white/[0.05] text-foreground/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] hover:bg-white/[0.08] hover:text-foreground aria-expanded:bg-white/[0.08]",
        ghost:
          "border-transparent bg-transparent text-foreground/75 hover:bg-white/[0.05] hover:text-foreground aria-expanded:bg-white/[0.05] aria-expanded:text-foreground",
        destructive:
          "border-transparent bg-destructive/12 text-destructive shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-destructive/18 focus-visible:border-destructive/30 focus-visible:ring-destructive/20 dark:bg-destructive/18 dark:hover:bg-destructive/24",
        link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline hover:text-primary/90",
      },
      size: {
        default:
          "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-lg px-3 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-2 px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-9",
        "icon-xs":
          "size-7 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
