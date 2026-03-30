"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function ZoomableImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onClick={() => setOpen(true)}
        className={cn(
          "h-full w-full cursor-zoom-in object-cover select-none",
          className,
        )}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="
              max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl
              transition-transform duration-300
              scale-95 animate-in zoom-in-95
              select-none
            "
          />
        </div>
      )}
    </>
  );
}

type GalleryImage = {
  src: string;
  alt?: string;
  className?: string;
};

export function ZoomableGallery({
  images,
  gridClassName,
  imageClassName,
}: {
  images: GalleryImage[];
  gridClassName?: string;
  imageClassName?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
      }
      if (e.key === "ArrowRight") {
        setOpenIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, images.length]);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center",
          gridClassName,
        )}
      >
        {images.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt ?? `Preview ${index + 1}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onClick={() => setOpenIndex(index)}
            className={cn(
              "h-full w-full cursor-zoom-in rounded-xl border border-white/10 object-cover select-none",
              imageClassName,
              image.className,
            )}
          />
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <img
            src={images[openIndex].src}
            alt={images[openIndex].alt ?? `Preview ${openIndex + 1}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl transition-transform duration-300 scale-95 animate-in zoom-in-95 select-none"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  setOpenIndex((prev) =>
                    prev === null
                      ? 0
                      : (prev - 1 + images.length) % images.length,
                  );
                }}
                className="absolute left-6 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20"
              >
                ←
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % images.length,
                  );
                }}
                className="absolute right-6 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20"
              >
                →
              </button>

              <div className="absolute bottom-6 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
                {openIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
