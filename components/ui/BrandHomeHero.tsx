"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone, CreditCard, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typewriter } from "./Typewriter";

type EntryCardProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  eyebrow?: string;
};

function EntryCard({
  href,
  icon: Icon,
  title,
  description,
  eyebrow,
}: EntryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10",
        "bg-white/[0.03] px-5 py-5 transition-all duration-300",
        "hover:border-white/15 hover:bg-white/[0.045]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="space-y-3">
          {eyebrow ? (
            <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/40">
              {eyebrow}
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Icon className="size-4 text-foreground/70" />
            </div>

            <h3 className="text-lg font-medium text-white">{title}</h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-foreground/60">
            {description}
          </p>
        </div>

        <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground">
          <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}

export function BrandHomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(130,110,255,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(70,120,255,0.10),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Left copy */}
          <div className="min-w-0 space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              Industrial Android Devices
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-semibold text-white md:text-4xl">
                <span className="block">Industrial PDA &amp; POS products</span>
                <span className="block text-foreground/70">
                  <span className="inline-block min-w-[20ch]">
                    built for{" "}
                    <Typewriter
                      texts={[
                        "retail operations.",
                        "logistics workflows.",
                        "field deployment.",
                        "global markets.",
                        "financial services.",
                      ]}
                    />
                  </span>
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-foreground/60 md:text-lg">
                Rugged handheld terminals and smart POS systems designed for
                retail, logistics, and field deployment — reliable,
                cost-efficient, and ready for scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects/pda"
                className={cn(
                  "inline-flex h-11 items-center rounded-2xl border border-white/10",
                  "bg-transparent px-5 text-sm font-medium text-foreground/70",
                  "transition-all duration-200 hover:bg-white/[0.04] hover:text-white",
                )}
              >
                Explore PDA
              </Link>

              <Link
                href="/projects/pos"
                className={cn(
                  "inline-flex h-11 items-center rounded-2xl border border-white/10",
                  "bg-transparent px-5 text-sm font-medium text-foreground/70",
                  "transition-all duration-200 hover:bg-white/[0.04] hover:text-white",
                )}
              >
                Explore POS
              </Link>
              <Link
                href="/ums"
                className={cn(
                  "inline-flex h-11 items-center rounded-2xl border border-white/10",
                  "bg-transparent px-5 text-sm font-medium text-foreground/70",
                  "transition-all duration-200 hover:bg-white/[0.04] hover:text-white",
                )}
              >
                Explore UMS
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-full min-w-0 w-full self-stretch">
            <div className="relative w-full min-h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(111,124,255,0.16),transparent_26%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.05),transparent_28%)]" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between px-2 pt-1">
                  <div className="text-xs uppercase tracking-[0.16em] text-foreground/40">
                    Brand Entry
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/50">
                    UROVO
                  </div>
                </div>

                <div className="relative flex min-h-[440px] items-center justify-center rounded-[28px] border border-white/8 bg-[rgba(8,8,12,0.42)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_50%_95%,rgba(95,116,255,0.12),transparent_30%)]" />

                  <div className="pointer-events-none absolute inset-x-10 bottom-10 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),transparent_70%)] blur-2xl" />

                  <div className="relative flex items-center justify-center">
                    <Link
                      href="https://en.urovo.com"
                      target="_blank"
                      className="relative z-10"
                    >
                      <Image
                        src="/urovo_standard.png"
                        alt="UROVO"
                        width={760}
                        height={760}
                        draggable={false}
                        className={cn(
                          "max-h-[420px] md:max-h-[470px] w-auto object-contain",
                          "drop-shadow-[0_28px_80px_rgba(0,0,0,0.48)]",
                          "select-none pointer-events-auto",
                        )}
                        priority
                      />
                    </Link>
                  </div>

                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-foreground/45 backdrop-blur">
                    Pioneer of Industry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-foreground/40">
          © PatrickXu
        </div>
      </div>
    </section>
  );
}
