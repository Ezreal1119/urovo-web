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
import { cn } from "@/lib/utils";
import { Play, Settings, Square } from "lucide-react";
import {
  ZoomableGallery,
  ZoomableImage,
} from "../../../../components/ui/ZoomableImage";
import ExternalLink from "@/components/ui/ExternalLink";
import { CodeInline } from "@/components/ui/code";
import { AiLink } from "@/components/ui/AiLink";
import ZoomableTextLink from "@/components/ui/ZoomableTextLink";

export default function Page() {
  return (
    <PageShell>
      <PageContainer className="gap-0">
        <PageHeader className="border-0 bg-transparent shadow-none px-0 py-0">
          <PageHeaderContent className="flex flex-col items-start">
            <div className="space-y-4">
              <PageTitle className="text-4xl md:text-5xl text-white">
                How to Record System Logs (MTK)
              </PageTitle>

              <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                A step-by-step guide for recording system logs on MTK devices.
              </PageDescription>
            </div>
          </PageHeaderContent>
        </PageHeader>

        <Divider />

        <PageMain className="mt-8">
          <PageStack className="gap-10">
            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold">
                    Purpose
                  </PageSectionTitle>
                  <PageSectionDescription>
                    This guide explains how to record system logs on MTK
                  </PageSectionDescription>
                </div>
              </PageSectionHeader>
            </PageSection>

            <PageSection id="mtk-log" className="scroll-mt-28">
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold text-3xl">
                    Part 1: Record Logs (MTK Devices)
                  </PageSectionTitle>
                  <PageSectionDescription>
                    Follow these steps to capture offline logs on MTK devices.
                  </PageSectionDescription>
                </div>
              </PageSectionHeader>

              <div className="space-y-6">
                <StepBlock
                  title="Step 1: Open Offline Log Tool"
                  images={[
                    {
                      src: "/log_capture/settings_factory_menu.png",
                      alt: "Settings Factory Menu",
                    },
                    {
                      src: "/log_capture/factory_menu.png",
                      alt: "Factory menu",
                    },
                  ]}
                >
                  <ul className="space-y-2">
                    <li>
                      • Go to{" "}
                      <span className="inline-flex items-center gap-1 font-semibold translate-y-0.5">
                        <Settings className="size-4 opacity-80" />
                        Settings
                      </span>
                    </li>
                    <li>
                      • Press key combination:
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-foreground/85">
                        Volume + - + - + + - -
                      </div>
                    </li>
                    <li>
                      • Select <strong>Offline Log(*#3333#*)</strong>
                    </li>
                  </ul>
                </StepBlock>

                <StepBlock
                  title="Step 2: Configure Logs"
                  images={[
                    {
                      src: "/log_capture/mtk_debuglogger.png",
                      alt: "MTK Debugger",
                    },
                    {
                      src: "/log_capture/mtk_debuglogger_settings.png",
                      alt: "MTK Debugger Settings",
                    },
                  ]}
                >
                  {" "}
                  <ul className="space-y-2">
                    <li>
                      • Tap <strong>Settings icon (top right)</strong>
                    </li>
                    <li>• Enable all log types</li>
                    <li>
                      • Make sure <strong>all options are checked</strong>
                    </li>
                  </ul>
                </StepBlock>

                <StepBlock
                  title="Step 3: Start Recording"
                  images={[
                    {
                      src: "/log_capture/mtk_debuglogger_start_record.png",
                      alt: "MTK Debugger",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>• Return to main page</li>
                      <li>
                        • Tap{" "}
                        <span className="inline-flex items-center gap-1 font-semibold translate-y-0.5">
                          <Play className="size-4 opacity-80" />
                          Start
                        </span>
                      </li>
                    </ul>
                  }
                </StepBlock>

                <StepBlock title="Step 4: Reproduce Issue" variant="highlight">
                  {" "}
                  <ul className="space-y-2">
                    <li>
                      • Perform the problem scenario while the Log recorder is
                      running on the background
                    </li>
                    <li>• Logs will continue recording even after reboot</li>
                  </ul>
                </StepBlock>

                <StepBlock
                  title="Step 5: Stop Recording"
                  images={[
                    {
                      src: "/log_capture/mtk_debuglogger_stop_record.png",
                      alt: "MTK Debugger",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>
                        • Tap{" "}
                        <span className="inline-flex items-center gap-1 font-semibold translate-y-0.5">
                          <Square className="size-4 opacity-80" />
                          Stop
                        </span>
                      </li>
                    </ul>
                  }
                </StepBlock>

                <StepBlock
                  title="Step 6: Export Logs"
                  images={[
                    {
                      src: "/log_capture/debug_log_file.png",
                      alt: "Debug Log File",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>
                        • Connect device to PC (Make sure to switch to "File
                        Transfer" Mode)
                      </li>
                      <li>
                        • Location of Log Files:
                        <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-foreground/85">
                          debuglogger
                        </div>
                      </li>
                      <li>• Send the whole Folder to the Urovo Tech team</li>
                      <li>
                        <strong>Please Note:</strong>
                        <br />
                        {"  "}If the device is a{" "}
                        <strong>Financial POS terminal</strong> and{" "}
                        <strong>NOT</strong> in{" "}
                        <ZoomableTextLink
                          href="/log_capture/developer_mode.png"
                          imageAlt="Yellow interface"
                        >
                          Developer(Debug) Mode
                        </ZoomableTextLink>{" "}
                        , you can <strong>NOT</strong> extract the file using
                        USB transfer due to its unique security requirements.
                        <br />
                        Please refer to this{" "}
                        <a
                          href="https://cdn.patrick-shenzhen.org/urovo/manuals/Log_Capture_Instruction_SD_Card.pdf"
                          target="_blank"
                          className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                        >
                          Document
                        </a>{" "}
                        for extracting the log from a Financial POS terminal
                        using an SD Card.
                      </li>
                    </ul>
                  }
                </StepBlock>
              </div>
            </PageSection>

            <PageSection id="modem-log" className="scroll-mt-28">
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold text-3xl">
                    Part 2: Network / Modem Logs (Optional)
                  </PageSectionTitle>
                  <PageSectionDescription>
                    Additional steps for collecting modem-related logs through
                    ADB.
                  </PageSectionDescription>
                </div>
              </PageSectionHeader>

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 px-4 py-4 text-sm leading-7 text-foreground/75">
                <p className="font-medium text-foreground">Background</p>
                <p className="mt-2">
                  Due to Android security restrictions, some modem logs are not
                  saved to the Root directory("/sdcard/") of the terminal.
                </p>
              </div>

              <div className="space-y-6">
                <StepBlock
                  title="Step 1: Enable Developer Mode [Note: Only applicable to PDA, POS no need]"
                  images={[
                    {
                      src: "/log_capture/build_number.png",
                      alt: "Build Number",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>
                        • Go to:
                        <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                          Settings → About Device → Build Number
                        </div>
                      </li>
                      <li>
                        • Tap <strong>MULTIPLE</strong> times until developer
                        mode is enabled
                      </li>
                      <li>
                        • You should see:
                        <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                          “You are already a developer”
                        </div>
                      </li>
                      <li>
                        <strong>Please note:</strong>
                        <br />
                        Financial POS terminal has to be switched to{" "}
                        <ZoomableTextLink
                          href="/log_capture/developer_mode.png"
                          imageAlt="Yellow interface"
                        >
                          Developer(Debug) Mode
                        </ZoomableTextLink>{" "}
                        before you can extract the modem log from it. Please use{" "}
                        <a
                          href="https://cdn.patrick-shenzhen.org/urovo/tools/PCTool_ALL_IN_ONE.zip"
                          target="_blank"
                          className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                        >
                          PCTool
                        </a>{" "}
                        to achieve that.
                      </li>
                    </ul>
                  }
                </StepBlock>

                <StepBlock
                  title="Step 2: Enable USB Debugging [Note: Only applicable to PDA, POS no need]"
                  images={[
                    {
                      src: "/log_capture/developer_options.png",
                      alt: "Developer Options",
                    },
                    {
                      src: "/log_capture/usb_debugging.png",
                      alt: "USB Debugging",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>
                        • Go to:
                        <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                          Settings → System → Developer Options
                        </div>
                      </li>
                      <li>
                        • Enable <strong>USB Debugging</strong>
                      </li>
                    </ul>
                  }
                </StepBlock>

                <StepBlock
                  title="Step 3: Connect to PC"
                  images={[
                    {
                      src: "/log_capture/adb_powershell.png",
                      alt: "ADB Powershell",
                    },
                    {
                      src: "/log_capture/adb_version.png",
                      alt: "ADB Version",
                    },
                  ]}
                >
                  {
                    <ul className="space-y-2">
                      <li>• Connect device via USB</li>
                      <li>
                        • Make sure ADB environment is installed on the PC
                        <ul className="pl-6 space-y-1 mt-1">
                          <li>
                            ◦ Download{" "}
                            <a
                              href="https://developer.android.com/tools/releases/platform-tools"
                              target="_blank"
                              className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                            >
                              ADB
                            </a>{" "}
                            if not installed
                          </li>
                          <li>◦ Unzip the file, and enter the that folder</li>
                          <li>
                            ◦ Type <CodeInline>powershell</CodeInline> in the
                            file path section, then press{" "}
                            <strong>"Enter"</strong> button on the keyboard. The
                            Powershell will pop up.
                          </li>
                          <li>
                            ◦ Verify installation with{" "}
                            <CodeInline>.\adb --version</CodeInline>
                          </li>
                          <li>
                            ◦ Then you can use ADB by sending command with
                            prefix of
                            <CodeInline>.\adb</CodeInline>
                          </li>
                          <li>
                            ◦ For example: use{" "}
                            <CodeInline>.\adb devices</CodeInline> to check if
                            any Android device is connected
                          </li>
                        </ul>
                      </li>
                      <li>
                        Note: if you prefer to configure the System Environment,{" "}
                        <AiLink prompt="How to configure ADB system environment on Windows?">
                          Click here
                        </AiLink>
                      </li>
                    </ul>
                  }
                </StepBlock>

                <StepBlock title="Step 4: Pull Logs via ADB">
                  {
                    <div className="space-y-3">
                      <p className="text-sm text-foreground/70">
                        • Run the following command:
                      </p>

                      <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground/85">
                        <code>adb pull /data/debuglogger modem_log</code>
                      </pre>
                      <p className="text-sm text-foreground/70">
                        • Then you should find a file called{" "}
                        <strong>"modem_log"</strong> in the workding folder
                      </p>
                    </div>
                  }
                </StepBlock>
              </div>
            </PageSection>
          </PageStack>
        </PageMain>
      </PageContainer>
    </PageShell>
  );
}

function StepBlock({
  title,
  children,
  images,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  images?: {
    src: string;
    alt?: string;
    className?: string;
  }[];
  variant?: "default" | "highlight";
}) {
  const hasImages = !!images && images.length > 0;
  const isSingleImage = images?.length === 1;

  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-white/5 p-5",
        variant === "highlight"
          ? "border-blue-500/30 bg-blue-500/8 shadow-[0_0_0_1px_rgba(59,130,246,0.08)]"
          : "border-white/10",
      )}
    >
      {variant === "highlight" && (
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-blue-400/80" />
      )}

      <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
        {title}
        {variant === "highlight" && (
          <span className="rounded-md bg-blue-500/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-blue-300">
            IMPORTANT
          </span>
        )}
      </h3>

      {!hasImages && (
        <div className="mt-4 text-sm leading-7 text-foreground/70">
          {children}
        </div>
      )}

      {hasImages && isSingleImage && (
        <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-start">
          <div className="text-sm leading-7 text-foreground/70">{children}</div>

          <div className="justify-self-center">
            <div className="rounded-xl border border-white/10 bg-black/10 p-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
                <ZoomableImage
                  src={images[0].src}
                  alt={images[0].alt ?? title}
                  className={cn(
                    "max-h-70 max-w-full w-auto object-contain",
                    images[0].className,
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {hasImages && !isSingleImage && (
        <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-start">
          <div className="text-sm leading-7 text-foreground/70">{children}</div>

          <div className="rounded-xl border border-white/10 bg-black/10 p-4">
            <ZoomableGallery
              images={images}
              gridClassName="grid-cols-1 sm:grid-cols-2 gap-4"
              imageClassName="h-[260px] w-full rounded-xl border border-white/10 bg-black/20 p-2 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
