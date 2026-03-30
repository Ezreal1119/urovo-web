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
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import { ZoomableImage } from "./ZoomableImage";

export default function Page() {
  return (
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
                  Version
                </PageSectionTitle>
                <PageSectionDescription>
                  Current document version: v1.0
                </PageSectionDescription>
              </div>
            </PageSectionHeader>
          </PageSection>

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

          <PageSection>
            <PageSectionHeader>
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
                  When to Use
                </PageSectionTitle>
                <PageSectionDescription>
                  Typical scenarios where log recording is needed.
                </PageSectionDescription>
              </div>
            </PageSectionHeader>

            <ul className="space-y-3 text-[15px] leading-7 text-foreground/70">
              <li>• Device issues reproduction</li>
              <li>• Debugging system problems</li>
              <li>• Network / modem related troubleshooting</li>
            </ul>
          </PageSection>

          <PageSection id="mtk-log" className="scroll-mt-28">
            <PageSectionHeader>
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
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
                image={{
                  src: "/log_capture/factory_menu.png",
                  className: "h-56",
                  imgClassName: "object-contain",
                }}
              >
                <ul className="space-y-2">
                  <li>
                    • Go to{" "}
                    <span className="inline-flex items-center gap-1 font-semibold">
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

              <StepBlock title="Step 2: Configure Logs">
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

              <StepBlock title="Step 3: Start Recording">
                {
                  <ul className="space-y-2">
                    <li>• Return to main page</li>
                    <li>
                      • Tap <strong>Start</strong>
                    </li>
                  </ul>
                }
              </StepBlock>

              <StepBlock title="Step 4: Reproduce Issue">
                {" "}
                <ul className="space-y-2">
                  <li>• Perform the problem scenario</li>
                  <li>• Logs will continue recording even after reboot</li>
                </ul>
              </StepBlock>

              <StepBlock title="Step 5: Stop Recording">
                {
                  <ul className="space-y-2">
                    <li>
                      • Tap <strong>Stop</strong>
                    </li>
                  </ul>
                }
              </StepBlock>

              <StepBlock title="Step 6: Export Logs">
                {
                  <ul className="space-y-2">
                    <li>• Connect device to PC</li>
                    <li>
                      • Locate:
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-foreground/85">
                        debuglogger
                      </div>
                    </li>
                    <li>• Send the folder to the analysis team</li>
                  </ul>
                }
              </StepBlock>
            </div>
          </PageSection>

          <PageSection id="modem-log" className="scroll-mt-28">
            <PageSectionHeader>
              <div className="space-y-2">
                <PageSectionTitle>
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
                saved to the SD card.
              </p>
            </div>

            <div className="space-y-6">
              <StepBlock title="Step 1: Enable Developer Mode">
                {
                  <ul className="space-y-2">
                    <li>
                      • Go to:
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                        Settings → About Device → Build Number
                      </div>
                    </li>
                    <li>
                      • Tap multiple times until developer mode is enabled
                    </li>
                    <li>
                      • You should see:
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                        “You are already a developer”
                      </div>
                    </li>
                  </ul>
                }
              </StepBlock>

              <StepBlock title="Step 2: Enable USB Debugging">
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

              <StepBlock title="Step 3: Connect to PC">
                {
                  <ul className="space-y-2">
                    <li>• Connect device via USB</li>
                    <li>• Make sure ADB environment is installed on the PC</li>
                  </ul>
                }
              </StepBlock>

              <StepBlock title="Step 4: Pull Logs via ADB">
                {
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/70">
                      Run the following command:
                    </p>

                    <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground/85">
                      <code>adb pull /data/debuglogger modem_log</code>
                    </pre>
                  </div>
                }
              </StepBlock>
            </div>
          </PageSection>
        </PageStack>
      </PageMain>
    </PageContainer>
  );
}

function StepBlock({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image?: {
    src: string;
    className?: string;
    imgClassName?: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-base font-medium text-foreground">{title}</h3>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {/* Left */}
        <div className="text-sm leading-7 text-foreground/70">{children}</div>

        {/* Right */}
        {image && (
          <div
            className={cn(
              "rounded-xl border border-white/10 overflow-hidden",
              image.className,
            )}
          >
            <ZoomableImage
              src={image.src}
              alt={title}
              className={cn("w-full h-full object-cover", image.imgClassName)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
