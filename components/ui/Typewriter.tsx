"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
};

export function Typewriter({
  texts,
  speed = 60,
  deleteSpeed = 30,
  pauseTime = 1500,
  className,
}: TypewriterProps) {
  const [index, setIndex] = React.useState(0);
  const [display, setDisplay] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[index];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // typing
      if (display.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplay(currentText.slice(0, display.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      // deleting
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(currentText.slice(0, display.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={cn("inline-flex items-baseline whitespace-nowrap", className)}>
      <span>{display || "\u00A0"}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] bg-white/90 animate-pulse" />
    </span>
  );
}