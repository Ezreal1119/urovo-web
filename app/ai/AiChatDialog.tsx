"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function AiChatDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="
            fixed bottom-6 right-6 z-40
            inline-flex items-center gap-3
            rounded-full
            border border-white/10
            bg-white/[0.08]
            px-4 py-2
            text-base font-medium text-white
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all duration-200
            hover:bg-white/[0.12]
            hover:shadow-[0_16px_50px_rgba(0,0,0,0.45)]
            hover:-translate-y-0.5
          "
        >
          <span className="tracking-[0.01em]">Ask AI</span>

          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10">
            <img
              src="/qwen-icon.svg"
              alt="AI avatar"
              className="h-full w-full object-cover"
            />
          </span>
        </button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent
        className="
          w-[92vw]
          sm:max-w-5xl
          h-[68vh]
          p-0
          overflow-hidden

          rounded-3xl
          border border-white/10
          bg-[linear-gradient(180deg,rgba(10,10,12,0.92),rgba(10,10,12,0.96))]
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(168,85,247,0.08),transparent_70%)]"
        />
        <DialogTitle className="sr-only">AI Assistant</DialogTitle>
        <div className="flex h-full flex-col">
          {/* ===== Header ===== */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="text-sm font-medium text-foreground">
              Urovo AI Assistant
            </div>
            <div className="mt-1 text-xs text-foreground/50">
              Ask about Urovo's Products
            </div>
          </div>

          {/* ===== Messages Area ===== */}
          <div className="flex-1 overflow-y-auto px-7 py-8 space-y-5">
            {/* assistant */}
            <div className="flex items-start gap-3 max-w-[75%]">
              {/* Avatar */}
              <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/10">
                <img
                  src="/patrick_selfie.png"
                  alt="AI Avatar"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bubble */}
              <div className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-foreground/78">
                Hi, This is AI Patrick from Urovo. How can I help you today?
                <br />
                [Hey, SpongeBob! Let's go catch jellyfish!]
              </div>
            </div>

            {/* user */}
            <div className="ml-auto max-w-[72%] rounded-2xl border border-white/8 bg-white/[0.08] px-4 py-3 text-sm leading-7 text-foreground">
              How to capture logs on UROVO device?
            </div>

            {/* assistant */}
            <div className="max-w-[68%] rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-foreground/78">
              You can capture logs using adb logcat or built-in log tools...
            </div>
          </div>

          {/* ===== Input Area ===== */}
          <div className="border-t border-white/8 px-5 py-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="flex items-end gap-3">
                <Textarea
                  placeholder="Ask anything..."
                  className="
                    min-h-[36px]
                    py-1.5
                    max-h-[140px]
                    resize-none
                    border-0
                    bg-transparent
                    px-2 py-2
                    text-sm leading-6 text-foreground
                    placeholder:text-foreground/35
                    focus-visible:ring-0
                    focus-visible:outline-none
                  "
                />

                <Button
                  className="
                    h-11 rounded-xl px-5
                    bg-pink-500/90 text-white
                    shadow-[0_8px_24px_rgba(236,72,153,0.22)]
                    transition-all duration-200
                    hover:bg-pink-500 hover:shadow-[0_10px_30px_rgba(236,72,153,0.28)]
                  "
                >
                  Send
                </Button>
              </div>

              <div className="mt-2 px-2 text-[11px] text-foreground/30">
                Enter to send · Shift + Enter for newline
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
