"use client";

import React from "react";

function ZoomableTextLink({
  href,
  children,
  imageAlt,
}: {
  href: string;
  children: React.ReactNode;
  imageAlt: string;
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
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <img
            src={href}
            alt={imageAlt}
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

export default ZoomableTextLink;
