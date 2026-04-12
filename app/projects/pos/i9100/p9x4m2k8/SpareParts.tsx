"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

type SparePartImage = {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
  previewWidth?: number;
  previewHeight?: number;
};

export function SparePartBlock({
  title,
  images = [],
}: {
  title: string;
  images?: SparePartImage[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>

      <div
        className={cn(
          "grid gap-4",
          images.length === 1 && "grid-cols-1",
          images.length === 2 && "grid-cols-2",
          images.length >= 3 && "grid-cols-3",
        )}
      >
        {images.map((img, i) => {
          const previewWidth = img.previewWidth ?? 320;
          const previewHeight = img.previewHeight ?? 420;

          return (
            <div key={i} className="rounded-xl bg-black/30 p-4">
              <div className="flex flex-col items-center">
                {/* fixed preview area */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: `${img.previewWidth ?? 280}px`,
                    height: `${img.previewHeight ?? 520}px`,
                  }}
                >
                  <ZoomableImage
                    src={img.src}
                    alt={img.alt || title}
                    className={cn(
                      "max-h-full max-w-full w-auto object-contain",
                      img.className,
                    )}
                  />
                </div>

                {/* fixed caption slot */}
                <div className="mt-3 flex h-6 w-full items-center justify-center">
                  {img.description ? (
                    <p className="text-center text-xs leading-none text-foreground/45">
                      {img.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
