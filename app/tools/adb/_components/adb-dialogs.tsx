"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

function StepBox({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-white">
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-foreground/30">→</span>;
}

export function AdbRecoveryGuideDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
              !w-[88vw] !max-w-[1200px]
              !h-[72vh]
              p-0
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[rgba(10,10,14,0.92)]
              text-foreground
              shadow-[0_24px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
      >
        <div className="grid h-full grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-between border-r border-white/10 bg-white/[0.02] px-6 py-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <DialogTitle className="text-3xl font-semibold tracking-tight text-white">
                  Recovery Mode Instruction
                </DialogTitle>

                <DialogDescription className="max-w-sm text-sm leading-7 text-foreground/55">
                  The device is rebooting into recovery mode. Follow the steps
                  below on the device to enter the recovery menu and continue
                  the next action.
                </DialogDescription>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-foreground/65">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/35">
                  Note
                </div>
                <p className="mt-2">
                  Some models may require several attempts before the recovery
                  menu is shown.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => onOpenChange(false)}
                className="h-11 rounded-xl px-5"
              >
                Got it
              </Button>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto px-7 py-7">
            <div className="mb-5 text-base font-medium text-blue-300">
              Recovery Steps
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300/70" />
                <span className="text-foreground/75">
                  Wait until you see{" "}
                  <span className="font-medium text-white">
                    {'"Press power key to reboot device"'}
                  </span>
                  .
                </span>
              </li>

              <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300/70" />
                <div className="space-y-3">
                  <span className="text-foreground/75">
                    Enter the recovery menu using the volume buttons in the
                    following order:
                  </span>

                  <ul className="space-y-2 text-[13px] text-foreground/70">
                    <li className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-white/40" />
                      <span className="font-mono text-white">
                        + - + - + + - -
                      </span>
                      <span className="text-foreground/40">(most common)</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-white/40" />
                      <span className="font-mono text-white">
                        - + - + - - - -
                      </span>
                      <span className="text-foreground/40">
                        (try this if the first fails)
                      </span>
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-white/40" />
                      <span className="font-mono text-white">
                        <strong>For DT50(S):</strong> + + - - + - + + + + - - -
                        -
                      </span>
                    </li>
                  </ul>

                  <p className="text-xs text-foreground/40">
                    Please press the buttons slowly in order.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300/70" />
                <span className="text-foreground/75">
                  Use{" "}
                  <span className="font-medium text-white">
                    Volume Up / Down
                  </span>{" "}
                  to navigate the menu, and use{" "}
                  <span className="font-medium text-white">Power</span> for
                  selection.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdbUsbGuideDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
              !w-[88vw] !max-w-[1000px]
              !h-[60vh]
              p-0
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[rgba(10,10,14,0.92)]
              text-foreground
              shadow-[0_24px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
      >
        <div className="grid h-full grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="flex flex-col justify-between border-r border-white/10 bg-white/[0.02] px-7 py-7">
            <div className="space-y-5">
              <div className="space-y-3">
                <DialogTitle className="text-3xl font-semibold text-white">
                  USB Connection Issue
                </DialogTitle>

                <DialogDescription className="text-sm leading-7 text-foreground/55">
                  The device is currently occupied or the USB connection is
                  unstable. Follow the steps to reconnect the device properly.
                </DialogDescription>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-foreground/65">
                <div className="text-xs uppercase tracking-[0.14em] text-foreground/35">
                  Common Causes
                </div>

                <ul className="mt-3 space-y-2 text-xs">
                  <li>• Another ADB tool is using the device</li>
                  <li>• Previous connection was not released</li>
                  <li>• USB connection became unstable</li>
                  <li>• Device is reconnecting / rebooting</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => onOpenChange(false)}
                className="h-11 rounded-xl px-5"
              >
                Got it
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center px-7 py-7">
            <div className="space-y-6">
              <div className="text-base font-medium text-blue-300">
                Retry Steps
              </div>

              <div className="flex items-center justify-center gap-3 text-sm">
                <StepBox label="Unplug USB" />
                <Arrow />
                <StepBox label="Wait 2s" />
                <Arrow />
                <StepBox label="Plug Again" />
                <Arrow />
                <StepBox label="Click Connect" />
              </div>

              <div className="text-xs text-foreground/50 text-center">
                If it still fails, close other ADB tools(e.g. "adb kill-server",
                close Android Studio)
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdbLogSavedDialog({
  open,
  onOpenChange,
  onDownloadLogcat,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDownloadLogcat: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
      !w-[88vw] !max-w-[760px]
      p-0
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-[rgba(10,10,14,0.92)]
      text-foreground
      shadow-[0_24px_80px_rgba(0,0,0,0.45)]
      backdrop-blur-2xl
    "
      >
        <div className="space-y-5 px-6 py-6">
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-semibold text-white">
              Log Saved
            </DialogTitle>

            <DialogDescription className="text-sm leading-7 text-foreground/55">
              The log recording has been stopped. The files were saved to the
              device path below.
            </DialogDescription>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-foreground/72">
            <div className="text-xs uppercase tracking-[0.14em] text-foreground/35">
              Save Path
            </div>
            <div className="mt-2 font-mono text-white">
              /sdcard/ULog/logs/adb/
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-xl border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              Close
            </Button>

            <Button
              onClick={() => {
                onOpenChange(false);
                onDownloadLogcat();
              }}
              className="rounded-xl"
            >
              Download Logcat
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdbSocketFailDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
          !w-[92vw] !max-w-[720px]
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
        <DialogTitle className="sr-only">Firmware Upgrade Guide</DialogTitle>
        <DialogDescription className="sr-only">
          This terminal does not support Web ADB socket connection.
        </DialogDescription>

        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className="
              absolute right-4 top-4 z-50
              text-foreground/40
              hover:text-white
              transition
            "
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(130,110,255,0.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(70,120,255,0.08),transparent_28%)]" />

          <div className="relative z-10 px-7 py-7 md:px-8 md:py-8">
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  Connection Limitation
                </div>

                <h3 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Web ADB Unavailable
                </h3>

                <p className="text-sm text-foreground/50">
                  This device doesn't support Web Socket connection.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.14em] text-foreground/35">
                    Firmware Upgrade Guide
                  </div>

                  <p className="text-sm leading-7 text-foreground/68">
                    This terminal doesn't support Web ADB. Please refer to the
                    firmware upgrade guide below instead.{" "}
                    <a
                      href="https://cdn.patrick-shenzhen.org/urovo/manuals/How_to_upgrade_firmware-OS_UFS_SE.zip"
                      target="_blank"
                      className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                    >
                      Click Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdbUsbDebugGuideDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
          !w-[92vw] !max-w-[760px]
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
        <DialogTitle className="sr-only">USB Debugging Guide</DialogTitle>
        <DialogDescription className="sr-only">
          USB debugging needs to be enabled before connecting a PDA with Web
          ADB.
        </DialogDescription>

        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className="
              absolute right-4 top-4 z-50
              text-foreground/40
              hover:text-white
              transition
            "
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(130,110,255,0.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(70,120,255,0.08),transparent_28%)]" />

          <div className="relative z-10 px-7 py-7 md:px-8 md:py-8">
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  USB Debugging Required
                </div>

                <div className="space-y-3">
                  <h3 className="max-w-[18ch] text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Enable USB Debugging
                  </h3>

                  <p className="max-w-2xl text-sm leading-7 text-foreground/60">
                    If you are using a PDA, you need to turn on{" "}
                    <span className="font-medium text-white/85">
                      USB debugging
                    </span>{" "}
                    in Developer Options before connecting again. Otherwise,
                    ignore this dialog.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.14em] text-foreground/35">
                    Setup Steps
                  </div>

                  <ol className="space-y-3 text-sm leading-7 text-foreground/72">
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-foreground/55">
                        1
                      </span>
                      <span>
                        Go to <span className="text-white/85">Settings</span> →{" "}
                        <span className="text-white/85">About phone</span>.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-foreground/55">
                        2
                      </span>
                      <span>
                        Keep tapping{" "}
                        <span className="text-white/85">"Build Number"</span>{" "}
                        until you see the message:{" "}
                        <span className="text-white/85">
                          You are now a developer!
                        </span>
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-foreground/55">
                        3
                      </span>
                      <span>
                        Go back to{" "}
                        <span className="text-white/85">Settings</span> →{" "}
                        <span className="text-white/85">System</span> →{" "}
                        <span className="text-white/85">Developer options</span>
                        .
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-foreground/55">
                        4
                      </span>
                      <span>
                        Find{" "}
                        <span className="text-white/85">"USB debugging"</span>{" "}
                        and enable it.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-foreground/55">
                        5
                      </span>
                      <span>Reconnect again.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
