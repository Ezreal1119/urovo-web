import Link from "next/link";
import { PageShell } from "../layout/PageContainer";

export default function AuthRequiredPage() {
  return (
    <PageShell>
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(130,110,255,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(70,120,255,0.08),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.03),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center px-6 py-10 md:px-8">
          <div className="w-full max-w-2xl">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_75%_80%,rgba(77,130,255,0.10),transparent_24%)]" />

              <div className="relative z-10 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  Protected Access
                </div>

                {/* Title + Description */}
                <div className="space-y-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Sign In Required
                  </h1>

                  <p className="mx-auto max-w-xl text-sm leading-8 text-foreground/60 md:text-base">
                    Please sign in using the account provided by Urovo by
                    clicking the{" "}
                    <span className="font-medium text-white/85">“Sign in”</span>{" "}
                    button in the top-right corner.
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-auto h-px w-24 bg-white/10" />

                {/* CTA Button */}
                <div className="flex justify-center gap-3">
                  {/* Back to Home */}
                  <Link
                    href="/home"
                    className="
      inline-flex items-center justify-center
      h-11 px-6
      rounded-xl
      border border-white/10
      bg-white/[0.05]
      text-sm font-medium text-foreground/80
      transition-all duration-200
      hover:bg-white/[0.08]
      hover:text-white
    "
                  >
                    Back to Home
                  </Link>

                  {/* Sign In (Primary) */}
                  <button
                    type="button"
                    onClick={() => {
                      // 触发 navbar 的 sign in dialog
                      window.dispatchEvent(new Event("open-sign-in"));
                    }}
                    className="
      inline-flex items-center justify-center
      h-11 px-6
      rounded-xl
      bg-white
      text-sm font-semibold text-black
      transition-all duration-200
      hover:bg-white/90
      hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]
    "
                  >
                    Sign in
                  </button>
                </div>

                {/* Footer hint */}
                <p className="text-xs uppercase tracking-[0.16em] text-foreground/35">
                  Authorized users only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
