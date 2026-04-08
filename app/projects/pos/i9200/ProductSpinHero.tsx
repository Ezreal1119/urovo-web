"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ProductHeroProps = {
  className?: string;
  productPreview?: string;
  title?: string;
  subtitle?: string;
  image: string;
};

export function ProductHero({
  className,
  productPreview = "Product Preview",
  title = "Industrial Android Terminal",
  subtitle = "A professional smart POS terminal designed for modern retail and payment scenarios.",
  image,
}: ProductHeroProps) {
  const highlights = [
    { label: "Processor", value: "Quad-core A53 2.0 GHz" },
    { label: "OS", value: "Android 13" },
    { label: "Memory", value: "2GB + 16GB" },
    { label: "Display", value: '5.5" 720×1280' },
    { label: "Printer", value: "58mm Thermal Printer; 60-70 mm/s" },
    { label: "Payment", value: "Magstripe / IC / NFC" },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(86,86,150,0.16),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(77,130,255,0.10),transparent_22%)]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_1.25fr] lg:items-center">
        {/* Left content */}
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/60">
            {productPreview}
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {title}
              </h2>

              <Link
                href="/projects/pos/i9100/details"
                className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500/80 to-purple-500/80 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)]"
              >
                More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <p className="max-w-xl text-sm leading-7 text-foreground/60 md:text-base">
              {subtitle}
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.16em] text-foreground/35">
              Spec Highlights
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <div className="text-[11px] uppercase tracking-[0.12em] text-foreground/35">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-white/90">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="group relative min-h-[520px] rounded-[28px] border border-white/8 bg-[rgba(8,8,12,0.58)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_50%_110%,rgba(77,130,255,0.10),transparent_28%)]" />

          <div className="pointer-events-none absolute inset-x-10 bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.48),transparent_70%)] blur-2xl" />

          <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-foreground/65 backdrop-blur">
            Product View
          </div>

          <div className="relative h-full min-h-[520px] w-full">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain p-6 md:p-8 drop-shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
