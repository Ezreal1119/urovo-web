"use client";

import * as React from "react";
import { Circle, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DeviceStatus } from "../_lib/types";

const ACTION_ROW_BUTTON_CLASS = "h-12 w-[200px] shrink-0 box-border";

export function ToolCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6 md:py-6">
      <div className="space-y-1.5">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-7 text-foreground/55">{description}</p>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

export function ActionButton({
  icon: Icon,
  label,
  onClick,
  disabled,
  className,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer",
        className,
      )}
    >
      <Icon className="size-4 opacity-80" />
      {label}
    </button>
  );
}

export function FileActionRow({
  file,
  placeholder,
  buttonLabel,
  accept,
  onChange,
}: {
  file: File | null;
  placeholder: string;
  buttonLabel: string;
  accept: string;
  onChange: (file: File | null) => void;
}) {
  const inputId = React.useId();

  return (
    <div className="flex items-center gap-3">
      <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground/55">
        <div className="truncate">{file ? file.name : placeholder}</div>
      </div>

      <div className="shrink-0">
        <label
          htmlFor={inputId}
          className={cn(
            "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white",
            ACTION_ROW_BUTTON_CLASS,
          )}
        >
          <Upload className="size-4 opacity-80" />
          {buttonLabel}
        </label>

        <input
          id={inputId}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
}

export function InstallStatusBanner({
  status,
  message,
  className,
}: {
  status: "idle" | "uploading" | "success" | "error" | "installing";
  message?: string;
  className?: string;
}) {
  const toneClass =
    status === "success"
      ? "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-300"
      : status === "error"
        ? "border-red-500/20 bg-red-500/[0.06] text-red-300"
        : status === "uploading" || status === "installing"
          ? "border-blue-500/20 bg-blue-500/[0.06] text-blue-300"
          : "border-white/10 bg-white/[0.03] text-foreground/60";

  const displayText =
    message?.trim() ||
    (status === "idle"
      ? "No firmware task running."
      : status === "uploading"
        ? "Uploading firmware package..."
        : status === "installing"
          ? "Triggering firmware upgrade..."
          : status === "success"
            ? "Upgrade completed successfully."
            : "Upgrade failed.");

  return (
    <div
      className={cn(
        "flex h-12 items-center rounded-2xl border px-4 text-sm",
        toneClass,
        className,
      )}
    >
      <span className="block min-w-0 truncate">{displayText}</span>
    </div>
  );
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
      <span className="text-foreground/45">{label}</span>
      <span className="text-right text-white">{value}</span>
    </div>
  );
}

export function StatusDot({ status }: { status: DeviceStatus }) {
  return (
    <span
      className={cn(
        "inline-flex size-3 rounded-full",
        status === "connected" &&
          "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]",
        status === "sideload" &&
          "bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.55)]",
        status === "disconnected" && "bg-white/20",
      )}
    >
      <Circle className="hidden" />
    </span>
  );
}
