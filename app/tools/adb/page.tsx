"use client";

import * as React from "react";
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
  PageShell,
  PageStack,
  PageTitle,
} from "@/components/layout/PageContainer";
import Divider from "@/components/ui/divider";
import {
  Cable,
  Circle,
  Download,
  Power,
  RefreshCw,
  RotateCcw,
  ShieldAlert,
  Terminal,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WebAdbService } from "@/lib/adbService";
import {
  ApkSignatureResult,
  detectUrovoSignature,
} from "@/lib/apkSignatureDetector";
import { useConsoleStore } from "@/lib/consoleStore";
import { FileExplorerPanel } from "./FileExplorerPanel";

type DeviceStatus = "disconnected" | "connecting" | "connected" | "sideload";

type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  model: string;
};

export default function Page() {
  const adbServiceRef = React.useRef<WebAdbService | null>(null);
  const appendConsole = useConsoleStore((s) => s.append);

  const [status, setStatus] = React.useState<DeviceStatus>("disconnected");
  const [apkInfo, setApkInfo] = React.useState<ApkSignatureResult | null>(null);
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo>({
    serialNo: "-",
    buildNumber: "-",
    model: "-",
  });
  const [commandInput, setCommandInput] = React.useState("");
  const [isRunningCommand, setIsRunningCommand] = React.useState(false);
  const [apkFile, setApkFile] = React.useState<File | null>(null);
  const [firmwareFile, setFirmwareFile] = React.useState<File | null>(null);
  const [consoleLines, setConsoleLines] = React.useState<string[]>([
    "[system] Web ADB panel initialized.",
    "[hint] Connect a device to begin.",
  ]);
  const [isLogcatRunning, setIsLogcatRunning] = React.useState(false);
  const [installStatus, setInstallStatus] = React.useState<
    "idle" | "uploading" | "installing" | "success" | "error"
  >("idle");

  const [installMessage, setInstallMessage] = React.useState(
    "No installation task running.",
  );

  const consoleRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    consoleRef.current?.scrollTo({
      top: consoleRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [consoleLines]);

  React.useEffect(() => {
    const usb = (navigator as Navigator & { usb?: EventTarget }).usb;
    if (!usb) return;

    function handleUsbDisconnect() {
      if (status === "disconnected") return;
      markDisconnected("[usb] Device disconnected.");
    }

    usb.addEventListener("disconnect", handleUsbDisconnect);

    return () => {
      usb.removeEventListener("disconnect", handleUsbDisconnect);
    };
  }, [status]);

  React.useEffect(() => {
    if (status !== "connected") return;
    if (!adbServiceRef.current) return;

    const timer = window.setInterval(async () => {
      try {
        await adbServiceRef.current?.getProp("ro.serialno");
      } catch {
        markDisconnected("[adb] Connection lost.");
      }
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [status]);

  React.useEffect(() => {
    if (adbServiceRef.current) {
      (window as any).adbService = adbServiceRef.current;
    }
  }, []);

  function markDisconnected(reason?: string) {
    setStatus("disconnected");
    setIsLogcatRunning(false);
    setDeviceInfo({
      serialNo: "-",
      buildNumber: "-",
      model: "-",
    });
    adbServiceRef.current = null;

    if (reason) {
      appendConsole(reason);
    }
  }

  async function handleConnect() {
    try {
      if (!adbServiceRef.current) {
        adbServiceRef.current = new WebAdbService();
      }

      appendConsole("[adb] Requesting USB device...");
      await adbServiceRef.current.connect();
      (window as any).adbService = adbServiceRef.current;

      setStatus("connected");
      appendConsole("[adb] Device connected.");

      const info = await adbServiceRef.current.getDeviceInfo();
      setDeviceInfo(info);

      appendConsole(`[device] SN: ${info.serialNo}`);
      appendConsole(`[device] Build Number: ${info.buildNumber}`);
      appendConsole(`[device] Model: ${info.model}`);
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error ? error.message : "Failed to connect device."
        }`,
      );
      console.error(error);
    }
  }

  async function handleDisconnect() {
    try {
      await adbServiceRef.current?.disconnect();
    } finally {
      delete (window as any).adbService;
      setStatus("disconnected");
      setIsLogcatRunning(false);
      setDeviceInfo({
        serialNo: "-",
        buildNumber: "-",
        model: "-",
      });
      appendConsole("[adb] Device disconnected.");
    }
  }
  function handleEnterSideload() {
    setStatus("sideload");
    appendConsole("[adb] Device entered sideload mode.");
  }

  async function handleInstallApk() {
    if (!apkFile) {
      appendConsole("[error] No APK selected.");
      setInstallStatus("error");
      setInstallMessage("No APK selected.");
      return;
    }

    if (!adbServiceRef.current || status === "disconnected") {
      appendConsole("[error] No device connected.");
      setInstallStatus("error");
      setInstallMessage("No device connected.");
      return;
    }

    try {
      setInstallStatus("uploading");
      setInstallMessage(`Uploading ${apkFile.name}...`);
      appendConsole(`[install] Installing APK: ${apkFile.name}`);

      const result = await adbServiceRef.current.installApk(apkFile, {
        onStageChange: (stage) => {
          if (stage === "uploading") {
            setInstallStatus("uploading");
            setInstallMessage(`Uploading ${apkFile.name}...`);
          }

          if (stage === "installing") {
            setInstallStatus("installing");
            setInstallMessage("APK uploaded. Installing on device...");
          }
        },
      });

      if (result) {
        result.split("\n").forEach((line) => appendConsole(line));
      }

      if (/success/i.test(result)) {
        setInstallStatus("success");
        setInstallMessage("APK installed successfully.");
      } else {
        setInstallStatus("error");
        setInstallMessage(result || "APK installation failed.");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to install APK.";

      appendConsole(`[error] ${message}`);
      setInstallStatus("error");
      setInstallMessage(message);
    }
  }

  function handleFirmwareSideload() {
    if (!firmwareFile) {
      appendConsole("[error] No firmware package selected.");
      return;
    }
    if (status !== "sideload") {
      appendConsole("[error] Device is not in sideload mode.");
      return;
    }

    appendConsole(`[sideload] Starting firmware upgrade: ${firmwareFile.name}`);
    appendConsole("[sideload] Waiting for transfer...");
  }

  async function handlePowerOff() {
    try {
      if (!adbServiceRef.current) {
        appendConsole("[error] No device connected.");
        return;
      }

      appendConsole("[cmd] power off");
      await adbServiceRef.current.powerOff();
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error ? error.message : "Failed to power off device."
        }`,
      );
    }
  }

  async function handleRebootRecovery() {
    try {
      if (!adbServiceRef.current) {
        appendConsole("[error] No device connected.");
        return;
      }

      appendConsole("[cmd] power off");
      await adbServiceRef.current.rebootRecovery();
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error ? error.message : "Failed to power off device."
        }`,
      );
    }
  }

  async function handleReboot() {
    try {
      if (!adbServiceRef.current) {
        appendConsole("[error] No device connected.");
        return;
      }

      appendConsole("[cmd] reboot");
      await adbServiceRef.current.reboot();
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error ? error.message : "Failed to reboot device."
        }`,
      );
    }
  }

  const handleApkSelect = async (file: File) => {
    try {
      const result = await detectUrovoSignature(file);
      setApkInfo(result);
    } catch {
      setApkInfo(null);
    }
  };

  async function handleRecovery() {
    try {
      if (!adbServiceRef.current) {
        appendConsole("[error] No device connected.");
        return;
      }

      appendConsole("[cmd] reboot recovery");
      await adbServiceRef.current.rebootRecovery();
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error
            ? error.message
            : "Failed to reboot device into recovery."
        }`,
      );
    }
  }

  function handleToggleLogcat() {
    if (status === "disconnected") {
      appendConsole("[error] No device connected.");
      return;
    }

    if (isLogcatRunning) {
      setIsLogcatRunning(false);
      appendConsole("[logcat] Stopped.");
    } else {
      setIsLogcatRunning(true);
      appendConsole("[logcat] Started.");
      appendConsole("[logcat] -------- beginning of main");
    }
  }

  function clearConsole() {
    setConsoleLines(["[system] Console cleared."]);
  }
  function isValidAdbCommand(command: string) {
    const trimmed = command.trim();

    if (!trimmed) {
      return { valid: false, reason: "Command is empty." };
    }

    const blockedPrefixes = [
      "kill-server",
      "start-server",
      "pair",
      "tcpip",
      "usb",
      "connect",
      "disconnect",
      "mdns",
      "root",
      "unroot",
    ];

    const allowedPrefixes = [
      "shell ",
      "reboot",
      "reboot ",
      "push ",
      "pull ",
      "install ",
      "uninstall ",
      "logcat",
      "bugreport",
      "wait-for-",
      "jdwp",
      "reverse ",
      "forward ",
    ];

    if (
      blockedPrefixes.some(
        (prefix) => trimmed === prefix || trimmed.startsWith(prefix + " "),
      )
    ) {
      return {
        valid: false,
        reason: `Command "${trimmed}" is blocked in this panel.`,
      };
    }

    if (
      allowedPrefixes.some(
        (prefix) => trimmed === prefix.trim() || trimmed.startsWith(prefix),
      )
    ) {
      return { valid: true, reason: "" };
    }

    return {
      valid: false,
      reason: `Command "${trimmed}" is not in the allowed adb command list.`,
    };
  }

  async function handleRunCommand() {
    const trimmed = commandInput.trim();

    if (!adbServiceRef.current || status === "disconnected") {
      appendConsole("[error] No device connected.");
      return;
    }

    const validation = isValidAdbCommand(trimmed);
    if (!validation.valid) {
      appendConsole(`[error] ${validation.reason}`);
      return;
    }

    try {
      setIsRunningCommand(true);
      appendConsole(`[adb] Running command: adb ${trimmed}`);

      const result = await adbServiceRef.current.run(trimmed);

      if (result) {
        result.split("\n").forEach((line) => {
          appendConsole(line);
        });
      } else {
        appendConsole("[adb] Command completed with no output.");
      }

      setCommandInput("");
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error ? error.message : "Failed to run adb command."
        }`,
      );
    } finally {
      setIsRunningCommand(false);
    }
  }

  function handleCommandKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      void handleRunCommand();
    }
  }

  return (
    <PageShell className="min-h-screen">
      <PageContainer className="gap-0">
        <PageHeader className="border-0 bg-transparent px-0 py-0 shadow-none">
          <PageHeaderContent className="flex flex-col items-start">
            <div id="adb" className="space-y-4">
              <PageTitle className="text-4xl text-white md:text-5xl">
                Web ADB Tool
              </PageTitle>

              <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                A browser-based control panel for Android Debug Bridge developed
                by AI Patrick.
              </PageDescription>
            </div>
          </PageHeaderContent>
        </PageHeader>

        <Divider />

        <PageMain className="mt-8">
          <PageStack className="gap-6">
            {/* Row 1 */}
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <ToolCard
                title="Connection Status"
                description="Connect to a device and monitor the current ADB state."
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="flex items-center gap-3">
                      <StatusDot status={status} />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {status === "connected"
                            ? "Connected"
                            : status === "connecting"
                              ? "Connecting..."
                              : status === "sideload"
                                ? "Sideload Mode"
                                : "Disconnected"}
                        </div>

                        <div className="text-xs text-foreground/45">
                          {status === "connected"
                            ? "ADB device is available."
                            : status === "connecting"
                              ? "Waiting for USB authorization and ADB handshake."
                              : status === "sideload"
                                ? "Ready for firmware sideload."
                                : "No active device session."}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex items-center gap-2 rounded-full px-3 py-1 text-xs border",

                        status === "connected" &&
                          "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300",

                        status === "connecting" &&
                          "border-amber-400/20 bg-amber-400/[0.08] text-amber-300",

                        status === "disconnected" &&
                          "border-white/10 bg-white/[0.03] text-foreground/55",

                        status === "sideload" &&
                          "border-blue-400/20 bg-blue-400/[0.08] text-blue-300",
                      )}
                    >
                      <span
                        className={cn(
                          "size-2 rounded-full",

                          status === "connected" && "bg-emerald-400",
                          status === "connecting" &&
                            "bg-amber-400 animate-pulse",
                          status === "disconnected" && "bg-white/30",
                          status === "sideload" && "bg-blue-400",
                        )}
                      />

                      <span>
                        {status === "connected"
                          ? "Live"
                          : status === "connecting"
                            ? "Connecting"
                            : status === "sideload"
                              ? "Sideload"
                              : "Offline"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <ActionButton
                      icon={RefreshCw}
                      label="Reboot"
                      onClick={() => {
                        void handleReboot();
                      }}
                      disabled={status !== "connected"}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Power}
                      label="Shutdown"
                      onClick={() => {
                        void handlePowerOff();
                      }}
                      disabled={status !== "connected"}
                      className="w-full"
                    />

                    <ActionButton
                      icon={RotateCcw}
                      label="Recovery"
                      onClick={() => {
                        void handleRebootRecovery();
                      }}
                      disabled={status !== "connected"}
                      className="w-full"
                    />
                  </div>
                </div>
              </ToolCard>

              <ToolCard
                title="Device Info"
                description="Basic property summary from the connected device."
              >
                <div className="space-y-3 text-sm leading-7 text-foreground/72">
                  <InfoRow label="SN" value={deviceInfo.serialNo} />
                  <InfoRow
                    label="Build Number"
                    value={deviceInfo.buildNumber}
                  />
                  <InfoRow label="Model" value={deviceInfo.model} />
                </div>
              </ToolCard>
            </section>

            {/* Row 2 */}
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <ToolCard
                title="ADB Install"
                description="Upload a local APK to install or check UROVO V3 signature"
              >
                <div className="space-y-4">
                  <FileActionRow
                    file={apkFile}
                    placeholder="No APK selected"
                    buttonLabel="Select APK"
                    accept=".apk"
                    onChange={(file) => {
                      setApkFile(file);
                      setApkInfo(null);

                      if (file) {
                        void handleApkSelect(file);
                      }
                    }}
                  />

                  <InstallStatusBanner
                    status={installStatus}
                    message={installMessage}
                  />

                  <div>
                    <ActionButton
                      icon={Upload}
                      label={
                        installStatus === "uploading"
                          ? "Uploading..."
                          : installStatus === "installing"
                            ? "Installing..."
                            : "Install APK"
                      }
                      onClick={() => {
                        void handleInstallApk();
                      }}
                      disabled={
                        installStatus === "uploading" ||
                        installStatus === "installing"
                      }
                      className={cn(
                        "w-full h-12 text-base font-medium",
                        "bg-blue-500/[0.08] hover:bg-blue-500/[0.12]",
                        "border border-blue-400/20",
                        "text-blue-200",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                        "transition-all duration-200",
                        "cursor-pointer",
                      )}
                    />
                  </div>

                  {apkInfo && (
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs space-y-1">
                      {apkInfo.hasUrovoV3 ? (
                        <>
                          <div className="text-emerald-300 font-medium">
                            ✓ UROVO V3 Signature Detected
                          </div>
                          <div className="text-foreground/70">
                            Subject CN: {apkInfo.subjectCN}
                          </div>
                          <div className="text-foreground/70">
                            Issuer CN: {apkInfo.issuerCN}
                          </div>
                          <div className="text-foreground/60">
                            Valid: {apkInfo.validFrom} → {apkInfo.validTo}
                          </div>
                        </>
                      ) : (
                        <div className="text-red-300 font-medium">
                          ✗ No UROVO V3 Signature
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ToolCard>

              <ToolCard
                title="Sideload"
                description="Upload a firmware package and start sideload when the device is ready."
              >
                <div className="space-y-4">
                  <FileActionRow
                    file={firmwareFile}
                    placeholder="No firmware package selected"
                    buttonLabel="Select Firmware"
                    accept=".zip"
                    onChange={setFirmwareFile}
                  />

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] px-4 py-4 text-sm leading-7 text-foreground/72">
                    <p className="font-medium text-blue-300">Sideload Rule</p>
                    <p className="mt-2">
                      Firmware upgrade is only available when the device is in{" "}
                      <strong>sideload mode</strong>.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <ActionButton
                      icon={Download}
                      label="Start Sideload"
                      onClick={handleFirmwareSideload}
                      disabled={status !== "sideload"}
                    />
                  </div>
                </div>
              </ToolCard>
            </section>
            <FileExplorerPanel />
          </PageStack>
        </PageMain>
      </PageContainer>
    </PageShell>
  );
}

function ToolCard({
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

function ActionButton({
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

function FileActionRow({
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
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="flex-1 min-w-0 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground/55">
        <div className="truncate">{file ? file.name : placeholder}</div>
      </div>

      <div className="shrink-0">
        <label
          htmlFor={inputId}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white"
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

function InstallStatusBanner({
  status,
  message,
}: {
  status: "idle" | "uploading" | "installing" | "success" | "error";
  message: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm transition-all",
        status === "idle" &&
          "border-white/10 bg-white/[0.02] text-foreground/50",
        status === "uploading" &&
          "border-blue-500/30 bg-blue-500/[0.06] text-blue-300",
        status === "installing" &&
          "border-amber-500/30 bg-amber-500/[0.06] text-amber-300",
        status === "success" &&
          "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-300",
        status === "error" &&
          "border-red-500/30 bg-red-500/[0.06] text-red-300",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-wider opacity-70">
          {status}
        </span>
        <span className="truncate">{message}</span>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
      <span className="text-foreground/45">{label}</span>
      <span className="text-right text-white">{value}</span>
    </div>
  );
}

function StatusDot({ status }: { status: DeviceStatus }) {
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
