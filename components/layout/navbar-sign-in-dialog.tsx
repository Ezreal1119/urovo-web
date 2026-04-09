"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NavbarSignInDialog({
  open,
  onOpenChange,
  onSuccess,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}) {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const isDisabled = !username.trim() || !password.trim() || submitting;

  async function handleSignIn(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (isDisabled) return;

    try {
      setSubmitting(true);
      setError("");

      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Sign in failed.");
      }

      toast.success("Signed in", {
        description: "Welcome back. " + username,
      });

      setUsername("");
      setPassword("");
      setShowPassword(false);
      onOpenChange(false);
      onSuccess?.();
      router.push("/home");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Sign in failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          !w-[92vw] !max-w-[520px]
          p-0
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[rgba(10,10,14,0.94)]
          text-foreground
          shadow-[0_24px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <DialogTitle className="sr-only">Sign In</DialogTitle>
        <DialogDescription className="sr-only">
          Sign in using the account provided by Urovo.
        </DialogDescription>

        <div className="relative overflow-hidden px-7 py-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(130,110,255,0.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(70,120,255,0.08),transparent_28%)]" />

          <form className="relative z-10 space-y-6" onSubmit={handleSignIn}>
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                Authorized Access
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-semibold tracking-tight text-white">
                  Sign In
                </h3>
                <p className="text-sm leading-7 text-foreground/55">
                  Use the account provided by Urovo to access protected content.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/75">
                  Username
                </label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/75">
                  Password
                </label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] pr-12 text-foreground placeholder:text-foreground/35"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-foreground/45 transition hover:text-white"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            ) : null}

            <div className="flex items-center gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="h-11 rounded-xl border-white/10 bg-white/[0.03] px-5 hover:bg-white/[0.06] cursor-pointer"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isDisabled}
                className="h-11 rounded-xl px-5 cursor-pointer"
              >
                {submitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
