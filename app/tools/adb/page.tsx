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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DeviceStatus = "disconnected" | "connecting" | "connected" | "sideload";

type DeviceInfo = {
  serialNo: string;
  buildNumber: string;
  customBuild: string;
};

export default function Page() {
  const adbServiceRef = React.useRef<WebAdbService | null>(null);
  const appendConsole = useConsoleStore((s) => s.append);

  const [status, setStatus] = React.useState<DeviceStatus>("disconnected");
  const [apkInfo, setApkInfo] = React.useState<ApkSignatureResult | null>(null);
  const [recoveryGuideOpen, setRecoveryGuideOpen] = React.useState(false);
  const [usbGuideOpen, setUsbGuideOpen] = React.useState(false);
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo>({
    serialNo: "-",
    buildNumber: "-",
    customBuild: "-",
  });
  const [commandInput, setCommandInput] = React.useState("");
  const [isRunningCommand, setIsRunningCommand] = React.useState(false);
  const [apkFile, setApkFile] = React.useState<File | null>(null);
  const [firmwareFile, setFirmwareFile] = React.useState<File | null>(null);
  const [consoleLines, setConsoleLines] = React.useState<string[]>([
    "[system] Web ADB panel initialized.",
    "[hint] Connect a device to begin.",
  ]);
  const [isRecordingLog, setIsRecordingLog] = React.useState(false);
  const [logSavedDialogOpen, setLogSavedDialogOpen] = React.useState(false);
  const [isLogcatRunning, setIsLogcatRunning] = React.useState(false);
  const [showUsbHint, setShowUsbHint] = React.useState(false);
  const [installStatus, setInstallStatus] = React.useState<
    "idle" | "uploading" | "installing" | "success" | "error"
  >("idle");

  const [installMessage, setInstallMessage] = React.useState(
    "No installation task running.",
  );
  const [isPushingFirmware, setIsPushingFirmware] = React.useState(false);
  const [isTriggeringFirmware, setIsTriggeringFirmware] = React.useState(false);

  const [firmwareStatus, setFirmwareStatus] = React.useState<
    "idle" | "uploading" | "installing" | "success" | "error"
  >("idle");

  const [firmwareMessage, setFirmwareMessage] = React.useState(
    "No firmware task running.",
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
    function handleBeforeUnload(e: BeforeUnloadEvent) {
      if (!isRecordingLog) return;

      e.preventDefault();
      e.returnValue = "";
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isRecordingLog]);

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
    setShowUsbHint(false);
    setIsLogcatRunning(false);
    setDeviceInfo({
      serialNo: "-",
      buildNumber: "-",
      customBuild: "-",
    });
    adbServiceRef.current = null;

    if (reason) {
      appendConsole(reason);
    }
  }

  async function handleConnect() {
    try {
      setShowUsbHint(false);
      setUsbGuideOpen(false);

      setStatus("connecting");

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
      appendConsole(`[device] Model: ${info.customBuild}`);
    } catch (error) {
      setStatus("disconnected");
      setUsbGuideOpen(true);

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
      setShowUsbHint(false);
      setIsLogcatRunning(false);
      setDeviceInfo({
        serialNo: "-",
        buildNumber: "-",
        customBuild: "-",
      });
      appendConsole("[adb] Device disconnected.");
    }
  }

  async function detectIsMtkDevice(): Promise<boolean> {
    if (!adbServiceRef.current || status !== "connected") {
      throw new Error("No device connected.");
    }

    const command = "pm list packages com.debug.loggerui";
    const result = await adbServiceRef.current.run(command);

    return result.includes("package:com.debug.loggerui");
  }

  async function handleStartLog() {
    if (!adbServiceRef.current || status !== "connected") {
      appendConsole("[error] No device connected.");
      return;
    }

    try {
      const isMtkDevice = await detectIsMtkDevice();

      let command = "";

      if (isMtkDevice) {
        const fileName = `SystemLog_${getLogTimestamp()}`;

        command =
          `am broadcast -a action.LOG_CONTROL_SERVICE ` +
          `--ei option 1 ` +
          `--ez android true ` +
          `--ez kernel false ` +
          `--es androidFile "${fileName}" ` +
          `--ei fileMaxSize 10`;

        appendConsole("[log] MTK device detected.");
      } else {
        command =
          `am broadcast ` +
          `-a android.intent.action.UNER_START_LOG ` +
          `-n com.un.logredirect/com.un.logredirect.LogRedirectorReceiver ` +
          `--ez isStart true ` +
          `--ei maxVolume 10`;

        appendConsole("[log] Qualcomm device detected.");
      }

      appendConsole("[log] Starting log recording...");
      appendConsole(`[shell] ${command}`);

      const result = await adbServiceRef.current.run(command);

      if (result) {
        result.split("\n").forEach((line) => appendConsole(line));
      }

      setIsRecordingLog(true);
      appendConsole("[log] Recording started.");
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error
            ? error.message
            : "Failed to start log recording."
        }`,
      );
    }
  }

  async function handleStopLog() {
    if (!adbServiceRef.current || status !== "connected") {
      appendConsole("[error] No device connected.");
      return;
    }

    try {
      const isMtkDevice = await detectIsMtkDevice();

      let command = "";

      if (isMtkDevice) {
        command =
          `am broadcast -a action.LOG_CONTROL_SERVICE ` +
          `--ei option 0 ` +
          `--ez android true ` +
          `--ez kernel false`;

        appendConsole("[log] MTK device detected.");
      } else {
        command =
          `am broadcast ` +
          `-a android.intent.action.UNER_START_LOG ` +
          `-n com.un.logredirect/com.un.logredirect.LogRedirectorReceiver ` +
          `--ez isStart false`;

        appendConsole("[log] Qualcomm device detected.");
      }

      appendConsole("[log] Stopping log recording...");
      appendConsole(`[shell] ${command}`);

      const result = await adbServiceRef.current.run(command);

      if (result) {
        result.split("\n").forEach((line) => appendConsole(line));
      }

      setIsRecordingLog(false);
      setLogSavedDialogOpen(true);
      appendConsole("[log] Recording stopped.");
    } catch (error) {
      appendConsole(
        `[error] ${
          error instanceof Error
            ? error.message
            : "Failed to stop log recording."
        }`,
      );
    }
  }

  function handleRecordSystemLog() {
    appendConsole("[system-log] Feature not implemented yet.");
  }

  function handleDownloadLogcat() {
    appendConsole("[download] Logcat download is not implemented yet.");
  }

  function handleDownloadSystemLog() {
    appendConsole("[download] System Log download is not implemented yet.");
  }

  function handleDownloadEmvLog() {
    appendConsole("[download] EMV Log download is not implemented yet.");
  }

  function handleDownloadUmsLog() {
    appendConsole("[download] UMS Log download is not implemented yet.");
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
    if (!adbServiceRef.current) {
      appendConsole("[error] No device connected.");
      return;
    }

    setRecoveryGuideOpen(true);
    appendConsole("[cmd] reboot recovery");

    adbServiceRef.current.rebootRecovery().catch((error) => {
      appendConsole(
        `[error] ${
          error instanceof Error
            ? error.message
            : "Failed to reboot device into recovery."
        }`,
      );
    });
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

  async function handlePushFirmware() {
    if (!firmwareFile) {
      appendConsole("[error] No firmware package selected.");
      setFirmwareStatus("error");
      setFirmwareMessage("No firmware package selected.");
      return;
    }

    if (!adbServiceRef.current || status !== "connected") {
      appendConsole("[error] No device connected.");
      setFirmwareStatus("error");
      setFirmwareMessage("No device connected.");
      return;
    }

    try {
      setIsPushingFirmware(true);
      setFirmwareStatus("uploading");
      setFirmwareMessage("Pushing firmware package to device...");

      const remotePath = "/sdcard/Download/patch.zip";

      appendConsole(`[firmware] Pushing ${firmwareFile.name} -> ${remotePath}`);

      await adbServiceRef.current.pushFileToPath(firmwareFile, remotePath, {
        onStageChange: () => {
          setFirmwareStatus("uploading");
          setFirmwareMessage("Uploading firmware package...");
        },
      });

      appendConsole("[firmware] Firmware package pushed successfully.");
      setFirmwareStatus("success");
      setFirmwareMessage(
        "Firmware package uploaded to /sdcard/Download/patch.zip",
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to push firmware package.";

      appendConsole(`[error] ${message}`);
      setFirmwareStatus("error");
      setFirmwareMessage(message);
    } finally {
      setIsPushingFirmware(false);
    }
  }

  async function handleTriggerFirmwareUpgrade() {
    if (!adbServiceRef.current || status !== "connected") {
      appendConsole("[error] No device connected.");
      setFirmwareStatus("error");
      setFirmwareMessage("No device connected.");
      return;
    }

    try {
      setIsTriggeringFirmware(true);
      setFirmwareMessage("Sending upgrade broadcast...");

      const command =
        "am broadcast -a com.osupdate.upgraderom --es filePath /storage/emulated/0/Download/patch.zip -f 0x01000000";

      appendConsole("[firmware] Sending upgrade broadcast...");
      appendConsole(`[adb] shell ${command}`);

      const result = await adbServiceRef.current.run(command);

      if (result) {
        result.split("\n").forEach((line) => appendConsole(line));
      }

      setFirmwareStatus("success");
      setFirmwareMessage("Upgrade broadcast sent successfully.");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to trigger firmware upgrade.";

      appendConsole(`[error] ${message}`);
      setFirmwareStatus("error");
      setFirmwareMessage(message);
    } finally {
      setIsTriggeringFirmware(false);
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
                Note: Unfortunately, this tool doesn't support{" "}
                <strong>Financial POS</strong> (unless in Debug mode).
                <br />
                Please refer to{" "}
                <Link
                  href="/links#manual"
                  className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                >
                  HERE
                </Link>{" "}
                for firmware upgrade.
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

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <ActionButton
                        icon={Cable}
                        label={
                          status === "connecting" ? "Connecting..." : "Connect"
                        }
                        onClick={() => {
                          void handleConnect();
                        }}
                        disabled={status !== "disconnected"}
                        className="w-full"
                      />

                      <ActionButton
                        icon={RotateCcw}
                        label="Disconnect"
                        onClick={() => {
                          void handleDisconnect();
                        }}
                        disabled={status !== "connected"}
                        className="w-full"
                      />
                    </div>

                    {/* {showUsbHint && (
                      <div
                        onClick={() => setUsbGuideOpen(true)}
                        className="cursor-pointer rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm text-foreground/80 hover:bg-amber-500/[0.1] transition"
                      >
                        <div className="font-medium text-amber-300">
                          Connection Retry Guide
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                            Unplug USB
                          </span>
                          <span className="text-foreground/30">→</span>
                          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                            Plug in again
                          </span>
                          <span className="text-foreground/30">→</span>
                          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                            Click Connect
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-6 text-foreground/55">
                          If the browser device picker appears but the
                          connection does not complete, replug the USB cable and
                          try again.
                        </p>
                      </div>
                    )} */}

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
                  <InfoRow
                    label="Custom Build"
                    value={deviceInfo.customBuild}
                  />
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
                title="Firmware Upgrade"
                description="Push a firmware package to the device and trigger the system upgrade broadcast."
              >
                <div className="space-y-4">
                  <FileActionRow
                    file={firmwareFile}
                    placeholder="No firmware package selected"
                    buttonLabel="Select Firmware"
                    accept=".zip"
                    onChange={setFirmwareFile}
                  />

                  <InstallStatusBanner
                    status={firmwareStatus}
                    message={firmwareMessage}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <ActionButton
                      icon={Upload}
                      label={isPushingFirmware ? "Pushing..." : "Push Firmware"}
                      onClick={() => {
                        void handlePushFirmware();
                      }}
                      disabled={
                        !firmwareFile ||
                        status !== "connected" ||
                        isPushingFirmware
                      }
                      className="w-full"
                    />

                    <ActionButton
                      icon={Download}
                      label="Trigger Upgrade"
                      onClick={() => {
                        void handleTriggerFirmwareUpgrade();
                      }}
                      disabled={status !== "connected" || isTriggeringFirmware}
                      className="w-full"
                    />
                  </div>

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] px-4 py-4 text-sm leading-7 text-foreground/72">
                    <p className="font-medium text-blue-300">Upgrade Flow</p>

                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-blue-300/70 shrink-0" />
                        <span>
                          <strong>Step 1:</strong> Select the filmware zip file
                          and Click "Push Firmware"
                        </span>
                      </li>

                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-blue-300/70 shrink-0" />
                        <span>
                          <strong>Step 2:</strong> Click "Trigger Upgrade" to
                          start upgrading, the device will restart.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ToolCard>
            </section>
            <section>
              <ToolCard
                title="Log Recorder"
                description="Start or stop log recording, then download logs from the device."
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "size-3 rounded-full",
                          isRecordingLog
                            ? "bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.65)]"
                            : "bg-white/20",
                        )}
                      />

                      <div>
                        <div className="text-sm font-medium text-white">
                          {isRecordingLog ? "Recording" : "Idle"}
                        </div>
                        <div className="text-xs text-foreground/45">
                          {isRecordingLog
                            ? "Log recording is currently running."
                            : "No active log recording task."}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-foreground/45">
                      Save Path:{" "}
                      <span className="font-mono text-foreground/70">
                        /sdcard/ULog/logs/adb/
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <ActionButton
                      icon={Upload}
                      label="Start Log"
                      onClick={() => {
                        void handleStartLog();
                      }}
                      disabled={status !== "connected" || isRecordingLog}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Power}
                      label="Stop Log"
                      onClick={() => {
                        void handleStopLog();
                      }}
                      disabled={status !== "connected" || !isRecordingLog}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Terminal}
                      label="Record System Log"
                      onClick={handleRecordSystemLog}
                      disabled={status !== "connected"}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                    <ActionButton
                      icon={Download}
                      label="Download Logcat"
                      onClick={handleDownloadLogcat}
                      disabled={status !== "connected"}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Download}
                      label="Download System Log"
                      onClick={handleDownloadSystemLog}
                      disabled={status !== "connected"}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Download}
                      label="Download EMV Log"
                      onClick={handleDownloadEmvLog}
                      disabled={status !== "connected"}
                      className="w-full"
                    />

                    <ActionButton
                      icon={Download}
                      label="Download UMS Log"
                      onClick={handleDownloadUmsLog}
                      disabled={status !== "connected"}
                      className="w-full"
                    />
                  </div>
                </div>
              </ToolCard>
            </section>

            <FileExplorerPanel isConnected={status === "connected"} />
          </PageStack>
        </PageMain>
        <Dialog open={recoveryGuideOpen} onOpenChange={setRecoveryGuideOpen}>
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
                      The device is rebooting into recovery mode. Follow the
                      steps below on the device to enter the recovery menu and
                      continue the next action.
                    </DialogDescription>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-foreground/65">
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/35">
                      Note
                    </div>
                    <p className="mt-2">
                      Some models may require several attempts before the
                      recovery menu is shown.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => setRecoveryGuideOpen(false)}
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
                        "Press power key to reboot device"
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
                          <span className="text-foreground/40">
                            (most common)
                          </span>
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
                            <strong>For DT50(S):</strong> + + - - + - + + + + -
                            - - -
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

        <Dialog open={usbGuideOpen} onOpenChange={setUsbGuideOpen}>
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
                      unstable. Follow the steps to reconnect the device
                      properly.
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
                    onClick={() => setUsbGuideOpen(false)}
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
                    If it still fails, close other ADB tools or refresh the
                    page.
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={logSavedDialogOpen} onOpenChange={setLogSavedDialogOpen}>
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
                  The log recording has been stopped. The files were saved to
                  the device path below.
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
                  onClick={() => setLogSavedDialogOpen(false)}
                  className="rounded-xl border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                >
                  Close
                </Button>

                <Button
                  onClick={() => {
                    setLogSavedDialogOpen(false);
                    handleDownloadLogcat();
                  }}
                  className="rounded-xl"
                >
                  Download Logcat
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageContainer>
    </PageShell>
  );
}

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

function getLogTimestamp() {
  const now = new Date();

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}_${hh}_${mi}_${ss}`;
}
