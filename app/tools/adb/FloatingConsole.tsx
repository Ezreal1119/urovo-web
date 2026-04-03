"use client";

import * as React from "react";
import { useConsoleStore } from "@/lib/consoleStore";
import { cn } from "@/lib/utils";
import { TerminalSquare, X, Trash2, Play } from "lucide-react";

export function FloatingConsole() {
  const [open, setOpen] = React.useState(false);
  const { logs, hasNew, markRead } = useConsoleStore();

  React.useEffect(() => {
    if (open) {
      markRead();
    }
  }, [open, logs, markRead]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          markRead();
        }}
        style={{
          position: "fixed",
          top: 76,
          right: 24,
          zIndex: 9999,
        }}
        className={cn(
          "group relative size-14 rounded-full cursor-pointer",
          "flex items-center justify-center",
          "border border-white/10 bg-[rgba(12,12,18,0.78)]",
          "backdrop-blur-xl",
          "shadow-[0_12px_40px_rgba(0,0,0,0.4)]",
          "transition-all duration-200",
          "hover:scale-[1.04] hover:bg-[rgba(16,16,24,0.88)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(60%_60%_at_50%_35%,rgba(59,130,246,0.22),transparent_100%)] opacity-80" />
        <TerminalSquare className="relative size-5 text-foreground/80 transition-colors group-hover:text-white" />

        {!open && hasNew && (
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
          </span>
        )}
      </button>

      {open && <ConsoleDialog onClose={() => setOpen(false)} />}
    </>
  );
}

function ConsoleDialog({ onClose }: { onClose: () => void }) {
  const { logs, clear } = useConsoleStore();
  const appendConsole = useConsoleStore((s) => s.append);

  const [cmd, setCmd] = React.useState("");
  const [isComposing, setIsComposing] = React.useState(false);

  const logRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  React.useEffect(() => {
    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs]);

  async function handleExec() {
    if (!cmd.trim()) return;

    const adbService = (window as any).adbService;

    if (!adbService) {
      appendConsole("[error] adb not connected");
      return;
    }

    try {
      appendConsole(`$ ${cmd}`);

      const res = await adbService.run(cmd);

      appendConsole(res || "[adb]: ");
    } catch (e) {
      appendConsole("[error] " + String(e));
    }

    setCmd("");
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 backdrop-blur-sm">
      <div
        className="
          relative flex h-[72vh] w-[92vw] max-w-5xl flex-col overflow-hidden
          rounded-3xl border border-white/10
          bg-[linear-gradient(180deg,rgba(10,10,14,0.96),rgba(12,12,18,0.94))]
          shadow-[0_24px_80px_rgba(0,0,0,0.55)]
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(59,130,246,0.12),transparent_72%)]"
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <TerminalSquare className="size-4 text-blue-300/90" />
              <div className="text-sm font-medium text-white">
                Terminal Console
              </div>
            </div>
            <p className="text-xs text-foreground/45">
              Live command output and shell interaction
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clear}
              className="
                inline-flex items-center gap-2 rounded-xl border border-white/10
                bg-white/[0.04] px-3 py-2 text-xs text-foreground/70
                transition hover:bg-white/[0.07] hover:text-white
              "
            >
              <Trash2 className="size-3.5" />
              Clear
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                inline-flex items-center justify-center rounded-xl border border-white/10
                bg-white/[0.04] p-2 text-foreground/70
                transition hover:bg-white/[0.07] hover:text-white
              "
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Log Area */}
        <div
          ref={logRef}
          className="
            relative flex-1 overflow-auto px-4 py-4
            font-mono text-xs leading-6
            bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.00))]
          "
        >
          {logs.length === 0 ? (
            <div className="flex h-full items-center justify-center text-foreground/30">
              No logs yet.
            </div>
          ) : (
            <div className="space-y-1">
              {logs.map((l, i) => (
                <ConsoleLine key={i} text={l} />
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-white/10 bg-black/20 px-4 py-3">
          <div className="mb-2 text-[11px] text-foreground/35">
            You are already in the shell. Press Enter to run, Esc to close.
          </div>

          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !isComposing &&
                  !e.nativeEvent.isComposing
                ) {
                  e.preventDefault();
                  void handleExec();
                }
              }}
              placeholder="Enter shell command here..."
              className="
                flex-1 rounded-2xl border border-white/10 bg-white/[0.04]
                px-4 py-3 text-sm text-foreground outline-none
                placeholder:text-foreground/30
                focus:border-blue-400/25 focus:bg-white/[0.05]
              "
            />

            <button
              type="button"
              onClick={() => {
                void handleExec();
              }}
              className="
                inline-flex items-center gap-2 rounded-2xl border border-blue-400/20
                bg-blue-500/[0.08] px-4 py-3 text-sm font-medium text-blue-200
                transition hover:bg-blue-500/[0.12]
              "
            >
              <Play className="size-4" />
              Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsoleLine({ text }: { text: string }) {
  const tone = text.startsWith("[error]")
    ? "text-red-300"
    : text.startsWith("[adb]")
      ? "text-blue-200"
      : text.startsWith("[device]")
        ? "text-emerald-200"
        : text.startsWith("$")
          ? "text-amber-200"
          : "text-foreground/72";

  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.04] bg-white/[0.02] px-3 py-2 whitespace-pre-wrap break-words font-mono",
        tone,
      )}
    >
      {text}
    </div>
  );
}
