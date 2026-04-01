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

type DeviceStatus = "disconnected" | "connected" | "sideload";

type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  model: string;
};

export default function Page() {
  const adbServiceRef = React.useRef<WebAdbService | null>(null);

  const [status, setStatus] = React.useState<DeviceStatus>("disconnected");
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo>({
    serialNo: "-",
    buildNumber: "-",
    model: "-",
  });
  const [apkFile, setApkFile] = React.useState<File | null>(null);
  const [firmwareFile, setFirmwareFile] = React.useState<File | null>(null);
  const [consoleLines, setConsoleLines] = React.useState<string[]>([
    "[system] Web ADB panel initialized.",
    "[hint] Connect a device to begin.",
  ]);

  const [isLogcatRunning, setIsLogcatRunning] = React.useState(false);

  const consoleRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    consoleRef.current?.scrollTo({
      top: consoleRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [consoleLines]);

  async function handleConnect() {
    try {
      if (!adbServiceRef.current) {
        adbServiceRef.current = new WebAdbService();
      }

      appendConsole("[adb] Requesting USB device...");
      await adbServiceRef.current.connect();

      setStatus("connected");
      appendConsole("[adb] Device connected.");

      const info = await adbServiceRef.current.getDeviceInfo();
      setDeviceInfo(info);

      appendConsole(`[device] SN: ${info.serialNo}`);
      appendConsole(`[device] Build Number: ${info.buildNumber}`);
      appendConsole(`[device] Model: ${info.model}`);
    } catch (error) {
      appendConsole(
        `[error] ${error instanceof Error ? error.message : "Failed to connect device."}`,
      );
      console.error(error);
    }
  }

  async function handleDisconnect() {
    try {
      await adbServiceRef.current?.disconnect();
    } finally {
      setStatus("disconnected");
      setDeviceInfo({
        serialNo: "-",
        buildNumber: "-",
        model: "-",
      });
      appendConsole("[adb] Device disconnected.");
    }
  }

  function appendConsole(line: string) {
    setConsoleLines((prev) => [...prev, line]);
  }

  function mockConnect() {
    setStatus("connected");
    appendConsole("[adb] Device connected.");
    appendConsole("[adb] Model: UROVO Demo Device");
    appendConsole("[adb] Serial: DEMO123456");
  }

  function mockDisconnect() {
    setStatus("disconnected");
    setIsLogcatRunning(false);
    appendConsole("[adb] Device disconnected.");
  }

  function mockEnterSideload() {
    setStatus("sideload");
    appendConsole("[adb] Device entered sideload mode.");
  }

  function handleInstallApk() {
    if (!apkFile) {
      appendConsole("[error] No APK selected.");
      return;
    }
    if (status === "disconnected") {
      appendConsole("[error] No device connected.");
      return;
    }
    appendConsole(`[install] Installing APK: ${apkFile.name}`);
    appendConsole("[install] Installation task queued.");
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

  function handlePowerOff() {
    appendConsole("[cmd] power off");
  }

  function handleReboot() {
    appendConsole("[cmd] reboot");
  }

  function handleRecovery() {
    appendConsole("[cmd] reboot recovery");
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

  return (
    <PageContainer className="gap-0">
      <PageHeader className="border-0 bg-transparent px-0 py-0 shadow-none">
        <PageHeaderContent className="flex flex-col items-start">
          <div className="space-y-4">
            <PageTitle className="text-4xl text-white md:text-5xl">
              Web ADB Tool
            </PageTitle>

            <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
              A browser-based control panel for ADB connection, APK
              installation, firmware sideload, device actions, and logcat.
            </PageDescription>
          </div>
        </PageHeaderContent>
      </PageHeader>

      <Divider />

      <PageMain className="mt-8">
        <PageStack className="gap-8">
          <section>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-6 md:px-8 md:py-7">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/35">
                  Browser Control Panel
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Lightweight device operations directly from the browser
                </h2>

                <p className="max-w-3xl text-sm leading-7 text-foreground/65 md:text-base">
                  This tool provides a simplified web-based ADB workflow for
                  connection status, APK installation, firmware sideload, reboot
                  actions, and logcat inspection.
                </p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
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
                            : status === "sideload"
                              ? "Sideload Mode"
                              : "Disconnected"}
                        </div>
                        <div className="text-xs text-foreground/45">
                          {status === "connected"
                            ? "ADB device is available."
                            : status === "sideload"
                              ? "Ready for firmware sideload."
                              : "No active device session."}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/55">
                      Demo
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <ActionButton
                      icon={Cable}
                      label="Connect"
                      onClick={() => {
                        void handleConnect();
                      }}
                    />

                    <ActionButton
                      icon={RotateCcw}
                      label="Disconnect"
                      onClick={() => {
                        void handleDisconnect();
                      }}
                    />
                    <ActionButton
                      icon={ShieldAlert}
                      label="Enter Sideload"
                      onClick={mockEnterSideload}
                    />
                  </div>
                </div>
              </ToolCard>

              <ToolCard
                title="APK Install"
                description="Upload a local APK package and trigger installation."
              >
                <div className="space-y-4">
                  <FilePicker
                    label="Select APK"
                    accept=".apk"
                    file={apkFile}
                    onChange={setApkFile}
                  />

                  <div className="flex flex-wrap gap-3">
                    <ActionButton
                      icon={Upload}
                      label="Install APK"
                      onClick={handleInstallApk}
                    />
                  </div>
                </div>
              </ToolCard>

              <ToolCard
                title="Firmware Upgrade"
                description="Upload a firmware package for sideload upgrade."
              >
                <div className="space-y-4">
                  <FilePicker
                    label="Select Firmware Package"
                    accept=".zip"
                    file={firmwareFile}
                    onChange={setFirmwareFile}
                  />

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] px-4 py-4 text-sm leading-7 text-foreground/72">
                    <p className="font-medium text-blue-300">Sideload Rule</p>
                    <p className="mt-2">
                      Firmware upgrade is only available when the device is in{" "}
                      <strong>sideload mode</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <ActionButton
                      icon={Download}
                      label="Start Sideload"
                      onClick={handleFirmwareSideload}
                      disabled={status !== "sideload"}
                    />
                  </div>
                </div>
              </ToolCard>
            </div>

            <div className="space-y-6">
              <ToolCard
                title="Device Actions"
                description="Run common power and reboot operations."
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <ActionButton
                    icon={Power}
                    label="Power Off"
                    onClick={handlePowerOff}
                  />
                  <ActionButton
                    icon={RefreshCw}
                    label="Reboot"
                    onClick={handleReboot}
                  />
                  <ActionButton
                    icon={ShieldAlert}
                    label="Recovery Mode"
                    onClick={handleRecovery}
                    className="sm:col-span-2"
                  />
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

              <ToolCard
                title="Logcat"
                description="Start or stop logcat streaming and inspect output."
              >
                <div className="flex flex-wrap gap-3">
                  <ActionButton
                    icon={Terminal}
                    label={isLogcatRunning ? "Stop Logcat" : "Start Logcat"}
                    onClick={handleToggleLogcat}
                  />
                  <ActionButton
                    icon={RotateCcw}
                    label="Clear Console"
                    onClick={clearConsole}
                  />
                </div>
              </ToolCard>
            </div>
          </section>

          <PageSection>
            <PageSectionHeader>
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
                  Console
                </PageSectionTitle>
                <PageSectionDescription>
                  Command output, installation result, sideload logs, and logcat
                  stream.
                </PageSectionDescription>
              </div>
            </PageSectionHeader>

            <div
              ref={consoleRef}
              className="h-[420px] overflow-y-auto rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-sm leading-7 text-foreground/80"
            >
              {consoleLines.map((line, index) => (
                <div key={`${line}-${index}`}>{line}</div>
              ))}
            </div>
          </PageSection>
        </PageStack>
      </PageMain>
    </PageContainer>
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
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <Icon className="size-4 opacity-80" />
      {label}
    </button>
  );
}

function FilePicker({
  label,
  accept,
  file,
  onChange,
}: {
  label: string;
  accept: string;
  file: File | null;
  onChange: (file: File | null) => void;
}) {
  const inputId = React.useId();

  return (
    <div className="space-y-3">
      <label
        htmlFor={inputId}
        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-white/[0.07] hover:text-white"
      >
        <Upload className="size-4 opacity-80" />
        {label}
      </label>

      <input
        id={inputId}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />

      <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground/55">
        {file ? file.name : "No file selected"}
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
