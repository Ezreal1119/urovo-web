"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ViewKey =
  | "front"
  | "left"
  | "right"
  | "back"
  | "top"
  | "bottom"
  | "angleA"
  | "angleB";

type ProductSpinHeroProps = {
  className?: string;
  productPreview?: string;
  title?: string;
  subtitle?: string;
  images: Record<ViewKey, string>;
};

const VIEW_LABELS: Record<ViewKey, string> = {
  front: "Front",
  left: "Left",
  right: "Right",
  back: "Back",
  top: "Top",
  bottom: "Bottom",
  angleA: "Angle A",
  angleB: "Angle B",
};

export function ProductSpinHero({
  className,
  productPreview = "Interactive Product Preview",
  title = "Industrial Android Terminal",
  subtitle = "Pseudo-3D product showcase with lightweight interaction.",
  images,
}: ProductSpinHeroProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [activeView, setActiveView] = React.useState<ViewKey>("angleA");
  const [isHovering, setIsHovering] = React.useState(false);
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  React.useEffect(() => {
    if (isHovering) return;

    const sequence: ViewKey[] = [
      "front",
      "left",
      "right",
      "back",
      "top",
      "bottom",
      "angleA",
      "angleB",
    ];
    let index = 0;

    const timer = window.setInterval(() => {
      index = (index + 1) % sequence.length;
      setActiveView(sequence[index]);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [isHovering]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    setMouse({
      x: Math.max(0, Math.min(100, px)),
      y: Math.max(0, Math.min(100, py)),
    });

    const leftZone = px < 22;
    const rightZone = px > 78;
    const topZone = py < 22;
    const bottomZone = py > 78;
    const centerX = px > 38 && px < 62;
    const centerY = py > 30 && py < 70;

    let next: ViewKey = "front";

    if (leftZone) next = "left";
    else if (rightZone) next = "right";
    else if (topZone) next = "top";
    else if (bottomZone) next = "bottom";
    else if (centerX && centerY) next = "front";
    else if (px < 50) next = "angleA";
    else next = "angleB";

    setActiveView(next);
  }

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
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/60">
            {productPreview}
          </div>

          <div className="space-y-3">
            {/* Title + Details */}
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {title}
              </h2>

              <Link
                href="/projects/pos/i9100"
                draggable="false"
                className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500/80 to-purple-500/80 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)]"
              >
                More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Subtitle */}
            <p className="max-w-xl text-sm leading-7 text-foreground/60 md:text-base">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                "front",
                "left",
                "right",
                "back",
                "top",
                "bottom",
                "angleA",
                "angleB",
              ] as ViewKey[]
            ).map((key) => (
              <button
                key={key}
                type="button"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveView(key);
                }}
                onClick={() => setActiveView(key)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-xs transition",
                  activeView === key
                    ? "border-white/15 bg-white/[0.08] text-white"
                    : "border-white/8 bg-white/[0.03] text-foreground/55 hover:bg-white/[0.05] hover:text-foreground",
                )}
              >
                {VIEW_LABELS[key]}
              </button>
            ))}
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

        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setActiveView("angleA");
          }}
          onMouseMove={handleMouseMove}
          className="group relative min-h-[520px] rounded-[28px] border border-white/8 bg-[rgba(8,8,12,0.58)] backdrop-blur-xl"
          style={
            {
              "--mouse-x": `${mouse.x}%`,
              "--mouse-y": `${mouse.y}%`,
            } as React.CSSProperties
          }
        >
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_50%_110%,rgba(77,130,255,0.10),transparent_28%)]" />

          <div className="pointer-events-none absolute inset-x-10 bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.48),transparent_70%)] blur-2xl" />

          <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-foreground/65 backdrop-blur">
            {VIEW_LABELS[activeView]}
          </div>

          <div className="relative h-full min-h-[520px] w-full">
            {(Object.keys(images) as ViewKey[]).map((key) => (
              <div
                key={key}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out",
                  activeView === key
                    ? "opacity-100 scale-100"
                    : "pointer-events-none opacity-0 scale-[0.985]",
                )}
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: isHovering
                      ? `rotateX(${(50 - mouse.y) * 0.04}deg) rotateY(${(mouse.x - 50) * 0.05}deg)`
                      : "rotateX(0deg) rotateY(0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={images[key]}
                    alt={key}
                    fill
                    priority={key === "angleA" || key === "front"}
                    className="object-contain p-6 md:p-8 drop-shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4">
            <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[11px] text-foreground/50 backdrop-blur">
              hover left / right / top / bottom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
