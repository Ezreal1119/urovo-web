"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProtectedMoreButton({
  scope,
  workerUrl = "https://auth-worker.18807737955-70f.workers.dev",
  buttonText = "More",
  className,
}: {
  scope: string;
  workerUrl?: string;
  buttonText?: string;
  className?: string;
}) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  async function handleUnlock() {
    if (!password.trim()) return;

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const res = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scope,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Unlock failed.");
      }

      setOpen(false);
      setPassword("");
      router.push(data.path);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unlock failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDialogChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setPassword("");
      setErrorMessage("");
      setIsSubmitting(false);
      setShowPassword(false);
    }
  }

  return (
    <>
      <button
        type="button"
        draggable={false}
        onClick={() => setOpen(true)}
        className={
          className ??
          "group mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500/80 to-purple-500/80 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)] cursor-pointer"
        }
      >
        {buttonText}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DialogContent
          className="
            max-w-[460px]
            rounded-3xl
            border border-white/10
            bg-[rgba(10,10,14,0.92)]
            p-0
            text-foreground
            shadow-[0_24px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          <DialogTitle className="sr-only">Unlock Detail Page</DialogTitle>
          <DialogDescription className="sr-only">
            Enter password to unlock detail page.
          </DialogDescription>

          <div className="border-b border-white/10 bg-white/[0.02] px-6 py-5">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground/45">
                Private Access
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Enter Password
              </h3>
              <p className="text-sm leading-7 text-foreground/55">
                This detail page is hidden. Enter the correct password to
                continue.
              </p>
            </div>
          </div>

          <div className="space-y-5 px-6 py-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/75">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isSubmitting) {
                      void handleUnlock();
                    }
                  }}
                  placeholder="Enter password"
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] pr-14 text-foreground placeholder:text-foreground/35"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/[0.06]"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1.8"
                      className="h-[15px] w-[15px]"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.58 10.58a2 2 0 102.83 2.83" />
                      <path d="M9.88 4.24A10.94 10.94 0 0112 4c5.05 0 9.27 3.11 10 8-.29 1.94-1.18 3.65-2.52 5" />
                      <path d="M6.61 6.61C4.62 8.03 3.29 9.89 3 12c.73 4.89 4.95 8 10 8 2.1 0 4.05-.54 5.72-1.49" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1.8"
                      className="h-[15px] w-[15px]"
                    >
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </div>
            ) : null}

            <div className="flex items-center gap-3 pt-1">
              <Button
                variant="outline"
                onClick={() => handleDialogChange(false)}
                className="h-11 rounded-xl border-white/10 bg-white/[0.03] px-5 hover:bg-white/[0.06]"
              >
                Cancel
              </Button>

              <Button
                onClick={handleUnlock}
                disabled={!password.trim() || isSubmitting}
                className="h-11 rounded-xl px-5 cursor-pointer"
              >
                {isSubmitting ? "Checking..." : "Unlock"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
