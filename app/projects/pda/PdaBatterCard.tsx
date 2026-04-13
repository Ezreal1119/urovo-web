"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PdaProduct = {
  slug: string;
  name: string;
  description: string;
  image: string;
  eyebrow?: string;
};

const PDA_PRODUCTS: PdaProduct[] = [
  {
    slug: "",
    name: "DT630",
    eyebrow: "Premium PDA",
    description:
      "Revolutionizing Workstyles with Intelligent Enterprise Mobility。",
    image: "/products/pda/dt630/dt630.png",
  },
];

function PdaBattleCard({
  product,
  index,
}: {
  product: PdaProduct;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-white/10",
        "bg-white/[0.03] p-4 md:p-5",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        "transition-all duration-300 hover:border-white/15 hover:bg-white/[0.045]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-80",
          index % 2 === 0
            ? "bg-[radial-gradient(700px_280px_at_15%_50%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(500px_240px_at_85%_20%,rgba(59,130,246,0.10),transparent_35%)]"
            : "bg-[radial-gradient(700px_280px_at_20%_30%,rgba(168,85,247,0.08),transparent_42%),radial-gradient(520px_240px_at_80%_75%,rgba(255,255,255,0.05),transparent_35%)]",
        )}
      />

      <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left image area */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[rgba(8,8,12,0.55)] min-h-[260px] md:min-h-[320px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.10),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-x-12 bottom-6 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),transparent_70%)] blur-2xl" />

          <Link
            href={`/projects/pda/${product.slug}`}
            className="relative flex h-full min-h-[260px] items-center justify-center p-6 md:min-h-[320px] md:p-8"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              className={cn(
                "h-auto max-h-[220px] w-auto object-contain md:max-h-[280px]",
                "drop-shadow-[0_24px_60px_rgba(0,0,0,0.42)]",
                "transition-transform duration-500 group-hover:scale-[1.03]",
              )}
            />
          </Link>
        </div>

        {/* Right content */}
        <div className="min-w-0 space-y-4 px-1 md:px-2">
          {product.eyebrow ? (
            <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/40">
              {product.eyebrow}
            </div>
          ) : null}

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {product.name}
            </h3>

            <p className="max-w-xl text-sm leading-7 text-foreground/60 md:text-[15px]">
              {product.description}
            </p>
          </div>

          <div className="pt-2">
            <Link
              href={`/projects/pda/${product.slug}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border border-white/10",
                "bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground/75",
                "transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white",
              )}
            >
              View Details
              <ArrowRight className="size-4 transition-transform duration-300 hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PdaBattleCards() {
  return (
    <div className="flex flex-col gap-5">
      {PDA_PRODUCTS.map((product, index) => (
        <PdaBattleCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
