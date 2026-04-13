import {
  PageShell,
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageTitle,
  PageDescription,
  PageMain,
  PageStack,
  PageSection,
  PageSectionHeader,
  PageSectionTitle,
  PageSectionDescription,
} from "@/components/layout/PageContainer";
import { Playfair_Display } from "next/font/google";
import Divider from "@/components/ui/divider";
import { Database, Shield, Smartphone, Wrench } from "lucide-react";
import { AiLink } from "@/components/ui/AiLink";
import { requireSignIn } from "@/lib/require-sign-in";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SparePartBlock } from "./SpareParts";
import {
  TriggerEight,
  TriggerEleven,
  TriggerFive,
  TriggerFour,
  TriggerFourteen,
  TriggerNine,
  TriggerOne,
  TriggerSeven,
  TriggerSix,
  TriggerTen,
  TriggerThirteen,
  TriggerThree,
  TriggerTwelve,
  TriggerTwo,
} from "./TriggerModes";
import { TriggerCodeLookup } from "./TriggerCodeLookup";
import { CodeBlock } from "@/components/ui/CodeBlock";
import ZoomableTextLink from "@/components/ui/ZoomableTextLink";
import { FaqSection } from "@/components/ui/FapSectionProps";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export default async function DetailPage() {
  await requireSignIn("/auth-required");

  return (
    <PageShell className="min-h-screen">
      <PageContainer className="gap-0">
        <section
          id="overview"
          className="relative overflow-hidden rounded-[32px] border border-white/10"
        >
          {/* Scene image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/products/pos/i9100/i9100_Scene.jpg')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,12,0.72),rgba(8,8,12,0.9))]" />

          {/* Soft highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.08),transparent_22%)]" />

          {/* Content */}
          <div className="relative z-10 px-6 py-8 md:px-8 md:py-10">
            <PageHeader className="border-0 bg-transparent px-0 py-0 shadow-none">
              <PageHeaderContent className="flex flex-col items-start">
                <div className="space-y-4">
                  <PageTitle className="text-4xl text-white md:text-5xl">
                    i9100 (Commercial Smart POS)
                  </PageTitle>

                  <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                    Breaking through commercial boundaries for all-powerful
                    smart POS terminal.
                  </PageDescription>
                </div>
              </PageHeaderContent>
            </PageHeader>

            <Divider />

            <PageMain className="mt-8">
              <PageStack className="gap-12">
                <PageSection>
                  <PageSectionHeader>
                    <div className="space-y-2">
                      <PageSectionTitle className="font-bold">
                        Core Capabilities
                      </PageSectionTitle>
                      <PageSectionDescription>
                        Key areas that define UROVO's most classic POS.
                      </PageSectionDescription>
                    </div>
                  </PageSectionHeader>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <CapabilityBlock
                      icon={Shield}
                      title="Performance & Stable"
                      description="High-performance quad-core CPU and Android 13 operating system."
                    />
                    <CapabilityBlock
                      icon={Wrench}
                      title="Fast Printing"
                      description="40-mm diameter compartment that supports fast thermal printing."
                    />
                    <CapabilityBlock
                      icon={Database}
                      title="Large Display"
                      description="HD resolution with backlight and brightness level control for a clear view."
                    />
                    <CapabilityBlock
                      icon={Smartphone}
                      title="Financial Certifications"
                      description="PCI PTS 6.x, EMV L1&L2, EMV Contactless L1, PayPass, and PayWave."
                    />
                  </div>
                </PageSection>
              </PageStack>
            </PageMain>
          </div>
        </section>

        <Divider />

        <PageMain className="mt-8">
          <PageStack className="gap-12">
            <section className="space-y-3 pb-5">
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
                  i9100 Overview Video
                </PageSectionTitle>
                <PageSectionDescription>
                  A quick visual introduction to the i9100 product.
                </PageSectionDescription>
              </div>

              <div className="w-full overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/Q_M61bKFcrg"
                    title="i9100 Overview Video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="text-xs text-foreground/40">
                Note: Now i9100 can support up to Android 13.
              </p>
            </section>

            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold text-xl">
                    i9100 Related Links
                  </PageSectionTitle>
                </div>
              </PageSectionHeader>

              <div className="flex flex-col divide-y divide-white/5">
                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Brochure.pdf"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 Brochure</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Specs.pdf"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 Specs</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_User_Manual.pdf"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 User Manual</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Service_Manual_V2.0-20260407144707.pdf"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 Maintenance Manual</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Safe_Mode_Clear_Instruction_2025.docx"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 Safe Mode Clear Manual</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Security_Document.zip"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 Security Document</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/UrovoPosSdk_New_v1.0.24.7z"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>i9100 SDK</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/Aratek_TrustFinger_SDK_For_Android_v3.3.0.3_2024.11.29.zip"
                  target="_blank"
                  className="
                    group flex items-center justify-between
                    py-4
                    text-base font-medium
                    text-foreground/80

                    transition-all duration-200
                    hover:text-white
                    hover:bg-white/[0.03]
                    px-2 -mx-2 rounded-xl
                  "
                >
                  <span>
                    <strong>[Optional]</strong> i9100 FingerPrinter SDK
                  </span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>
              </div>
            </PageSection>

            <Divider />

            <section id="upgrade" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle
                  id="upgrade"
                  className={`text-5xl ${playfair.className}`}
                >
                  1. Firmware upgrade
                </PageSectionTitle>
                <PageSectionDescription>
                  Note: If the terminal is in developer mode, you can simply use
                  the{" "}
                  <Link
                    href="/tools/adb"
                    className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                  >
                    Web ADB tool
                  </Link>{" "}
                  to upgrade the firmware.
                </PageSectionDescription>
                <CodeBlock
                  title="Firmware Upgrade Methods"
                  description="Different ways to upgrade firmware depending on your environment and device capability."
                >
                  <div className="space-y-4 text-sm leading-7 text-foreground/72">
                    {/* download hint */}
                    <p className="text-foreground/60">
                      You can download the firmware upgrade instruction{" "}
                      <a
                        href="https://cdn.patrick-shenzhen.org/urovo/manuals/How_to_upgrade_firmware-OS_UFS_SE.zip"
                        target="_blank"
                        className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                      >
                        here
                      </a>
                      .
                    </p>

                    {/* methods */}
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pink-400/70" />
                        <span>
                          <strong className="text-white/85">
                            1. ADB (Android Official Debug Tool)
                          </strong>
                          : Most recommended. Technical but stable.{" "}
                          <span className="text-foreground/50">
                            [Tutorial as below]
                          </span>
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pink-400/70" />
                        <span>
                          <strong className="text-white/85">
                            2. SD Card + Local Update
                          </strong>
                          : Requires an SD card.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pink-400/70" />
                        <span>
                          <strong className="text-white/85">
                            3. File Transfer + Local Update
                          </strong>
                          : Requires Developer Mode.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pink-400/70" />
                        <span>
                          <strong className="text-white/85">
                            4. File Download + Local Update
                          </strong>
                          : Requires Internet access and Chrome browser.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CodeBlock>
              </div>

              <p className="max-w-3xl pt-4 text-sm leading-7 text-foreground/90 md:text-xl">
                i9100 Firmware upgrade Tutorial (ADB)
              </p>
              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/33_OWDcOjiU"
                      title="i9100 Firmware upgrade Tutorial"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="text-xs text-foreground/40">
                  Note: You can enable subtitles by going to "Settings" →
                  "Captions" → "Auto-translate", then selecting your preferred
                  language.
                </p>
              </section>
            </section>

            <Divider />

            <section id="log" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle
                  id="upgrade"
                  className={`text-5xl ${playfair.className}`}
                >
                  2. Log Capture
                </PageSectionTitle>
                <PageSectionDescription>
                  Record the <strong>Log</strong> of the whole process of an{" "}
                  <strong>Error</strong> occurrence helps us to better analyze
                  and resolve the problem when you encounter any Error during
                  daily usage.
                </PageSectionDescription>
                <CodeBlock title="How to record Log" description="">
                  <div className="space-y-5 text-sm leading-7 text-foreground/72">
                    <ul className="space-y-3">
                      <li>
                        • You may install a{" "}
                        <a
                          href="https://cdn.patrick-shenzhen.org/urovo/apk/UrovoLogHelper_v1.7_signed.apk"
                          target="_blank"
                          className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                        >
                          Log Helper App
                        </a>{" "}
                        to record the Logs and upload easily via Internet. Click{" "}
                        <a
                          href="https://www.youtube.com/watch?v=efFIJ-6nsCY"
                          target="_blank"
                          className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                        >
                          Here
                        </a>{" "}
                        for instruction.
                      </li>

                      <li>
                        • You may also use the{" "}
                        <strong>Internal Log Recorder</strong> to record the
                        Logs. However, you need to extract the Logs manually.
                        Click{" "}
                        <Link
                          href="/instructions/log_capture/mtk"
                          className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                        >
                          Here
                        </Link>{" "}
                        for instruction.
                      </li>
                    </ul>

                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
                      <p className="font-medium text-amber-300">
                        Important Note
                      </p>
                      <p className="mt-2">
                        It is strongly recommended to use your phone to film a
                        video of the whole process at the same time to help us
                        better analyze the log later on.
                      </p>
                    </div>
                  </div>
                </CodeBlock>
              </div>
            </section>

            <Divider />

            <section id="maintenance" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  3. Maintenance
                </PageSectionTitle>
                <PageSectionDescription>
                  You may download the Maintenance Manual PDF{" "}
                  <a
                    href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Service_Manual_V2.0-20260407144707.pdf"
                    target="_blank"
                    className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                  >
                    here
                  </a>
                  .
                </PageSectionDescription>
              </div>

              <p className="max-w-3xl pt-4 text-sm leading-7 text-foreground/90 md:text-xl">
                i9100 Disassemble Tutorial
              </p>
              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/D0GA4ZHtZvo"
                      title="i9100 Disassemble Tutorial"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="text-xs text-foreground/40">
                  Note: You can enable subtitles by going to "Settings" →
                  "Captions" → "Auto-translate", then selecting your preferred
                  language.
                </p>
              </section>

              <p className="max-w-3xl pt-4 text-sm leading-7 text-foreground/90 md:text-xl">
                i9100 Assemble Tutorial
              </p>

              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/WjVoQvA2T2Y"
                      title="i9100 Assemble Tutorial"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="text-xs text-foreground/40">
                  Note: You can enable subtitles by going to "Settings" →
                  "Captions" → "Auto-translate", then selecting your preferred
                  language.
                </p>
              </section>
            </section>

            <Divider />

            <section id="spare" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  4. Spare Parts
                </PageSectionTitle>
                <PageSectionDescription>
                  Common spare parts for maintenance and replacement. Please
                  contact Urovo Sales for ordering.
                </PageSectionDescription>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Mainboard"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/mainboard_front.png",
                      alt: "Mainboard front",
                      description: "Front side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/mainboard_back.png",
                      alt: "Mainboard back",
                      description: "Back side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Battery"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/battery.png",
                      alt: "Battery",
                      description: "Battery",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/battery_cover.png",
                      alt: "Battery Cover",
                      description: "Battery Cover",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Screen Case"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/screen_case_front.png",
                      alt: "Screen case front",
                      description: "Front side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/screen_case_back.png",
                      alt: "Screen case back",
                      description: "Back side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Back Case"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/back_case_front.png",
                      alt: "Back Case Front",
                      description: "Front side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/back_case_back.png",
                      alt: "Back Case Back",
                      description: "Back side",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Printer & Roller"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/printer.png",
                      alt: "Printer",
                      description: "Printer",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/printer_roller.png",
                      alt: "Printer Roller",
                      description: "Printer Roller",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Printer Bracket & Cover"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/printer_bracket.png",
                      alt: "Printer Bracket",
                      description: "Printer Bracket",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                    {
                      src: "/products/pos/i9100/spare/printer_cover.png",
                      alt: "Printer Cover",
                      description: "Printer Cover",
                      previewWidth: 280,
                      previewHeight: 480,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Small Board"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/rtc_battery.png",
                      alt: "RTC Battery",
                      description: "RTC Battery",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/pogopin_bracket.png",
                      alt: "PogoPin Bracket",
                      description: "PogoPin Bracket",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Cameras"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/front_camera.png",
                      alt: "Front Camera",
                      description: "Front Camera",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/rear_camera.png",
                      alt: "Back Camera",
                      description: "Rear Camera",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Speaker & Buzzer"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/speaker.png",
                      alt: "Speaker",
                      description: "Speaker",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/buzzer.png",
                      alt: "Buzzer",
                      description: "Buzzer",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Button Pad & FPC"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/button_pad.png",
                      alt: "Button Pad",
                      description: "Button Pad",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/button_pad_fpc.png",
                      alt: "Button Pad FPC",
                      description: "Button Pad FPC",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="MagCard Reader Head & Flashlight"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/mag_head.png",
                      alt: "MagCard Reader Head",
                      description: "MagCard Reader Head",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/flashlight.png",
                      alt: "Flashlight",
                      description: "Flashlight",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Adapter & Cable"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/adapter.png",
                      alt: "Adapter",
                      description: "Adapter",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/cable.png",
                      alt: "Cable",
                      description: "Cable",
                      previewWidth: 280,
                      previewHeight: 200,
                    },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SparePartBlock
                  title="Zebra Strips & Carbon Particle"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/zebra_strip_long.png",
                      alt: "Zebra Strip Long",
                      description: "Zebra Strip Long",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/zebra_strip_short.png",
                      alt: "Zebra Strip Short",
                      description: "Zebra Strip Short",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/carbon_particle.png",
                      alt: "Carbon Particle",
                      description: "Carbon Particle",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                  ]}
                />

                <SparePartBlock
                  title="Screws"
                  images={[
                    {
                      src: "/products/pos/i9100/spare/shell_screws.png",
                      alt: "Shell Screws",
                      description: "Shell Screws (hexagon socket head)",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/internal_screws.png",
                      alt: "Internal Screws",
                      description: "Internal Screws (Phillips)",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                    {
                      src: "/products/pos/i9100/spare/printer_screws.png",
                      alt: "Printer Screws",
                      description: "Printer Screws (Silver Phillips)",
                      previewWidth: 180,
                      previewHeight: 200,
                    },
                  ]}
                />
              </div>
            </section>

            <Divider />

            <section id="safe_mode" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  5. Safe Mode
                </PageSectionTitle>

                <div className="max-w-4xl text-sm leading-7 text-foreground/55">
                  Please note: Only the terminal in{" "}
                  <ZoomableTextLink
                    href="/products/pos/i9100/safe_mode/safe_mode_yellow_interface.jpg"
                    imageAlt="Yellow interface"
                  >
                    Yellow Safe Mode
                  </ZoomableTextLink>{" "}
                  can be activated using an{" "}
                  <ZoomableTextLink
                    href="/products/pos/others/activation_card.jpg"
                    imageAlt="Activation Card"
                  >
                    Activation Card
                  </ZoomableTextLink>{" "}
                  You may refer to the tutorial video{" "}
                  <a
                    href="https://www.youtube.com/watch?v=tNz9JmlXrc8"
                    target="_blank"
                    className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                  >
                    Here
                  </a>{" "}
                  .
                  <br />
                  If the terminal is in{" "}
                  <ZoomableTextLink
                    href="/products/pos/i9100/safe_mode/safe_mode_red_interface.jpg"
                    imageAlt="Red interface"
                  >
                    Red Safe Mode
                  </ZoomableTextLink>
                  , please refer to the{" "}
                  <a
                    href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Safe_Mode_Clear_Instruction_2025.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                  >
                    Safe_Mode_Clear_Manual
                  </a>{" "}
                  and resolve the physical issue first before you activate the
                  terminal.
                </div>

                <TriggerCodeLookup />
              </div>
            </section>

            <Divider />

            <FaqSection
              id="qa"
              title="6. Q&A"
              titleClassName={`text-5xl ${playfair.className}`}
              description={
                <>
                  Common questions about Urovo i9100, including OS version
                  selection, APK installation, signature requirements, storage
                  access, developer mode, GMS availability, and version
                  identification, and etc.
                </>
              }
              codeBlockTitle=""
              codeBlockDescription="Click any question below to expand the answer."
              groups={[
                {
                  title: "1. General Questions:",
                  items: [
                    {
                      question:
                        "What platform is i9100 using? MTK or Qualcomm?",
                      answer: (
                        <p>
                          It's using MTK's MT8766 CPU, which is Quad-core A53
                          architecture.
                        </p>
                      ),
                    },
                    {
                      question:
                        "What are the differences between the Financial version and the Non-Financial (Industrial) version?",
                      answer: (
                        <>
                          <p>
                            <strong>Financial version:</strong>
                          </p>
                          <ul>
                            <li>
                              • <strong>Product positioning:</strong> It can be
                              used for financial transactions and is compliant
                              with PCI standards.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> It includes a{" "}
                              <strong>Security ChipSet</strong> to meet PCI
                              security standards.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> It includes a
                              Magnetic Card Reader, NFC Reader, and IC Card (SIM
                              Card) Reader to process different kinds of
                              transactions.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> The safe mode
                              mechanism is enabled. If the terminal is
                              disassembled or subjected to a physical attack,
                              safe mode will be triggered, the terminal will be
                              locked, and security data will be wiped.
                            </li>
                            <li>
                              • <strong>Software:</strong> USB file transfer is
                              not allowed under PCI standards.
                            </li>
                            <li>
                              • <strong>Software:</strong> USB debugging (ADB)
                              is restricted. Only <code>adb install</code> is
                              allowed under PCI standards.
                            </li>
                            <li>
                              • <strong>Software:</strong> Only signed
                              applications can be installed under PCI
                              regulations.
                            </li>
                            <li>
                              • <strong>Software:</strong> Only "HardwareTest",
                              "AppInstall", "Camera", and "Settings" are
                              preserved in the app list. Other apps such as
                              "Dialer", "Messages", and "File Explorer" are not
                              included.
                            </li>
                            <li>
                              • <strong>Software:</strong> Google Play Store is{" "}
                              <strong>NOT</strong> supported. (GMS is
                              supported.)
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>Non-Financial (Industrial) version:</strong>
                          </p>
                          <ul>
                            <li>
                              • <strong>Product positioning:</strong> It can be
                              used for SoftPOS or as an Android device with a
                              printer. It can <strong>NOT</strong> be used for
                              financial transactions.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> It does{" "}
                              <strong>NOT</strong> include a{" "}
                              <strong>Security ChipSet</strong> like the
                              Financial terminal.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> It only includes an
                              NFC Reader, with no Magnetic Card Reader or IC
                              Card Reader.
                            </li>
                            <li>
                              • <strong>Hardware:</strong> There is no safe mode
                              mechanism.
                            </li>
                            <li>
                              • <strong>Software:</strong> USB file transfer is
                              allowed.
                            </li>
                            <li>
                              • <strong>Software:</strong> USB debugging (ADB)
                              is fully available.
                            </li>
                            <li>
                              • <strong>Software:</strong> All legitimate APKs
                              can be installed, and no signature is required.
                            </li>
                            <li>
                              • <strong>Software:</strong> GMS and Google Play
                              Store are supported.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "How can I know if a terminal is Financial version or Non-Financial(Industrial) version?",
                      answer: (
                        <>
                          Please go to <strong>"Settings</strong> {"->"}{" "}
                          <strong>"About device"</strong>: check the{" "}
                          <strong>Build number</strong> at the bottom of the
                          page.
                          <br />
                          <br />
                          If the Build Number includes <strong>"FI"</strong>,
                          means it's a Financial terminal.
                          <br />• Example:{" "}
                          <code> SQ29WR_EN_XX_WE_M1_DS_FI_S02_U_220528_01</code>
                          <br />
                          If the Build Number includes <strong>"IN"</strong>,
                          means it's a Non-Financial(Industrial) terminal.
                          <br />• Example:{" "}
                          <code> SQ29WR_EN_XX_WE_M1_DS_IN_R02_U_220704_01</code>
                        </>
                      ),
                    },
                    {
                      question:
                        "Which one should I choose: the Financial version or the Non-Financial (Industrial) version?",
                      answer: (
                        <>
                          <p>
                            <strong>Choose the Financial version if:</strong>
                          </p>
                          <ul>
                            <li>
                              • You need the full capabilities required for
                              financial transactions. (IcCard, Magnetic Strip
                              Card, and NFC Bank Card)
                            </li>
                            <li>
                              • Your terminal needs to handle bank card-related
                              financial transactions, which require compliance
                              with PCI standards.
                            </li>
                            <li>
                              • You plan to use the financial POS in the market
                              with an app that integrates our SDK and passes EMV
                              L3 certification.
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>
                              Choose the Non-Financial (Industrial) version if:
                            </strong>
                          </p>
                          <ul>
                            <li>
                              • You only need <strong>SoftPOS</strong> to handle
                              NFC-based financial transactions, since SoftPOS
                              has already implemented the transaction kernel.
                            </li>
                            <li>
                              • In this SoftPOS case, the POS itself does not
                              need to comply with PCI standards, but it still
                              needs to be sent to the SoftPOS provider for
                              verification before it can be properly used in the
                              market.
                            </li>
                            <li>
                              • The terminal does not need to handle any bank
                              card-related financial transactions.
                            </li>
                            <li>
                              • You want to install any app you need without the
                              restrictions of the Financial version.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "How do I check the Firmware version(Build Number)?",
                      answer: (
                        <>
                          Please check the following path:
                          <br />
                          <strong>Settings → About Phone </strong>
                          [Scroll down to the bottom]
                          <br />
                          <br />
                          <strong>Build number</strong>: means the OS version.
                          <br />
                          <strong>Custom version / UFS</strong>: means custom
                          firmware
                          <br />
                          <strong>SE</strong>: means the firmware version of
                          Secure Element.
                        </>
                      ),
                    },
                    {
                      question:
                        "Can I downgrade or roll back to an older OS version?",
                      answer: (
                        <>
                          No. OS version downgrade is technically not supported.
                        </>
                      ),
                    },
                    {
                      question:
                        "Why did my APK fail to install into the device?",
                      answer: (
                        <>
                          APKs without a signature will fail to install into the
                          financial terminal as per PCI standard. Please sign
                          the APK before installing it.
                        </>
                      ),
                    },
                    {
                      question: "How can I get my APKs signed?",
                      answer: (
                        <>
                          <strong>
                            You can use one of the following methods:
                          </strong>
                          <br />
                          • Share the APK files with the Urovo team and ask for
                          a quick signature.
                          <br />
                          • Apply for an online web signature account from
                          Urovo, so you can sign the APKs by yourself.
                          <br />• Use the{" "}
                          <a
                            href="https://cdn.patrick-shenzhen.org/urovo/tools/PCTool_ALL_IN_ONE.zip"
                            target="_blank"
                            className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                          >
                            PCTool
                          </a>{" "}
                          and credentials(UKey/Digital Certificate) provided by
                          Urovo. Check Tutorial{" "}
                          <a
                            href="https://www.youtube.com/watch?v=k6IvQ-Uh7jc"
                            target="_blank"
                            className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                          >
                            Here
                          </a>{" "}
                          on how to use PCTool.
                        </>
                      ),
                    },
                    {
                      question:
                        "Why has USB MTP / File Transfer / Debugging(ADB) mode disappeared?",
                      answer: (
                        <>
                          This is expected. The{" "}
                          <strong>Standard version</strong> supports{" "}
                          <strong>
                            USB charging mode only & <code>adb install</code>
                          </strong>{" "}
                          in order to avoid internal storage access and further
                          ensure data security.
                        </>
                      ),
                    },
                    {
                      question:
                        "I am a developer. How do I enable USB debugging(ADB) mode and use Android studio without any restriction?",
                      answer: (
                        <>
                          Unlike regular Android device that you can switch on
                          developer mode via Developer Options directly.
                          <br />
                          You need to switch on{" "}
                          <ZoomableTextLink
                            href="/products/pos/others/developer_mode.png"
                            imageAlt="Developer mode"
                          >
                            Developer(Debug) Mode
                          </ZoomableTextLink>{" "}
                          using{" "}
                          <a
                            href="https://cdn.patrick-shenzhen.org/urovo/tools/PCTool_ALL_IN_ONE.zip"
                            target="_blank"
                            className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                          >
                            PCTool
                          </a>{" "}
                          . Please contact Urovo for your
                          credential(UKey/Digital Certificate) first. Check{" "}
                          <a
                            href="https://www.youtube.com/watch?v=k6IvQ-Uh7jc"
                            target="_blank"
                            className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                          >
                            Here
                          </a>{" "}
                          for tutorial.
                          <br />
                          Please note, you need to send the SN to Urovo team
                          before a financial terminal can be switched to
                          developer(debug) mode.
                          <br />
                          (Sample might be in Developer(Debug) mode by default)
                        </>
                      ),
                    },
                    {
                      question:
                        "There is no File Explorer. How can I access the internal or external storage of the device?",
                      answer: (
                        <>
                          In Financial terminals, only{" "}
                          <strong>"HardwareTest"</strong>,{" "}
                          <strong>"AppInstall"</strong>,
                          <strong>"Camera"</strong>, and{" "}
                          <strong>"Settings"</strong> are preserved in the app
                          list.
                          <br />
                          The <strong>File Explorer</strong> app has been
                          hidden. You can access the internal or external
                          storage from:
                          <br />
                          <strong>
                            Settings → Storage → Documents and others
                          </strong>
                        </>
                      ),
                    },
                    {
                      question:
                        "Is this model Google-certified? Why are Google Play Store and other Google apps or services not installed?",
                      answer: (
                        <>
                          i9100 is Google-certified, meaning that it has the
                          ability of using GMS. However, the{" "}
                          <strong>GMS package</strong> is not installed by
                          default for the <strong>Standard OS</strong> for
                          security reason.
                          <br />
                          <br />
                          If needed, you may request it before shipment, or ask
                          the Urovo technical support team for a{" "}
                          <strong>GMS UFS package</strong> and install it
                          manually.
                          <br />
                          <br />
                          Please note that the{" "}
                          <strong>
                            Google Play Store is not meaningful for the Standard
                            OS
                          </strong>
                          , because apps downloaded directly from Google Play
                          are not signed and will fail to install into the
                          system. One of the reasons you might want to have GMS
                          is accessing GMS-related services. For example,
                          Network Provider of LocationManager.
                        </>
                      ),
                    },
                    {
                      question:
                        "What's Google Key? What's the difference between Google Key and GMS?",
                      answer: (
                        <>
                          <p>
                            <strong>Google Key:</strong>
                          </p>
                          <ul>
                            <li>
                              • Google Key is an essential component for using
                              some authentication services of GMS, such as the{" "}
                              <strong>Play Integrity API</strong>, which is
                              required for some <strong>SoftPOS</strong>{" "}
                              solutions.
                            </li>
                            <li>
                              • However, some other GMS-related services, such
                              as the network provider of{" "}
                              <code>LocationManager</code>, do not require a
                              Google Key.
                            </li>
                            <li>
                              • Please check carefully whether the specific GMS
                              service used in your project actually requires a
                              Google Key.
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>GMS (Google Mobile Services):</strong>
                          </p>
                          <ul>
                            <li>
                              • GMS is a firmware package that includes GMS,
                              Google Play, Chrome, and other Google-related
                              applications.
                            </li>
                            <li>
                              • However, Google Play Store does not function as
                              expected on a <strong>Financial terminal</strong>{" "}
                              because of PCI standards.
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>
                              Why is GMS not pre-installed by default?
                            </strong>
                          </p>
                          <ul>
                            <li>
                              • Because Google Play Store has no meaning in
                              Financial terminal, since no application from Play
                              Store is signed. Thus, no App from Play Store can
                              be installed.
                            </li>
                            <li>
                              • To ensure users of financial terminals can only
                              access the applications they need for security
                              reason.
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>
                              Why is Google Key not preloaded by default?
                            </strong>
                          </p>
                          <ul>
                            <li>
                              • On its own, Google Key has no practical meaning
                              without GMS, which is not preloaded by default.
                            </li>
                            <li>
                              • It also involves additional cost.{" "}
                              <strong>GMS is free of charge</strong>, but{" "}
                              <strong>Google Key is not</strong>.
                            </li>
                          </ul>

                          <br />

                          <p>
                            <strong>Recommendation:</strong>
                          </p>
                          <ul>
                            <li>
                              • Please check carefully whether you actually need{" "}
                              <strong>GMS</strong> or even{" "}
                              <strong>Google Key</strong> for your project
                              before requesting them.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "Can I switch between Financial OS and Non-Financial (Industrial) OS?",
                      answer: (
                        <>
                          No. You need to use{" "}
                          <a
                            href="https://cdn.patrick-shenzhen.org/urovo/tools/PCTool_ALL_IN_ONE.zip"
                            target="_blank"
                            className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                          >
                            PCTool
                          </a>{" "}
                          and valid credentials (
                          <strong>UKey / Digital Certificate</strong>) to
                          achieve it.
                        </>
                      ),
                    },
                  ],
                },
                {
                  title: "2. After-sales Questions:",
                  items: [
                    {
                      question: "How do I perform a factory reset?",
                      answer: (
                        <>
                          <p>
                            To perform a <strong>factory reset</strong>, please
                            follow the path below:
                          </p>
                          <br />
                          <strong>
                            Settings → System → Reset options → Erase all data
                            (factory reset) → Erase everything & Reboot
                          </strong>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the terminal cannot be powered on?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Charge the terminal for{" "}
                              <strong>30 minutes</strong> first, then check
                              whether it can be powered on.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/battery.png"
                                imageAlt="Battery"
                              >
                                Battery
                              </ZoomableTextLink>{" "}
                              <strong>ONLY</strong> and check again whether the
                              terminal can be powered on.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/adapter.png"
                                imageAlt="Adapter"
                              >
                                Adapter
                              </ZoomableTextLink>{" "}
                              and{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/cable.png"
                                imageAlt="Cable"
                              >
                                Cable
                              </ZoomableTextLink>{" "}
                              with the original set <strong>ONLY</strong> and
                              check again whether the terminal can be powered
                              on.
                            </li>
                            <li>
                              • Press and hold the <strong>Power button</strong>{" "}
                              and the <strong>Volume Up button</strong> (the one
                              on the right) to check whether the terminal can
                              enter{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/recovery_mode.jpg"
                                imageAlt="Recovery Mode"
                              >
                                Recovery Mode
                              </ZoomableTextLink>{" "}
                              . If it can, please contact the Urovo team for a
                              firmware upgrade.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/mainboard_front.png"
                                imageAlt="Mainboard"
                              >
                                Mainboard
                              </ZoomableTextLink>{" "}
                              <strong>ONLY</strong> and check again whether the
                              terminal can be powered on.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the terminal is not charging?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Check whether the <strong>battery</strong>,{" "}
                              <strong>power adapter</strong>, and{" "}
                              <strong>USB cable</strong> are properly connected,
                              and make sure there is no looseness.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/battery.png"
                                imageAlt="Battery"
                              >
                                Battery
                              </ZoomableTextLink>{" "}
                              <strong>ONLY</strong> and check again whether the
                              terminal can be powered on.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/adapter.png"
                                imageAlt="Adapter"
                              >
                                Adapter
                              </ZoomableTextLink>{" "}
                              and{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/cable.png"
                                imageAlt="Cable"
                              >
                                Cable
                              </ZoomableTextLink>{" "}
                              with the original set <strong>ONLY</strong> and
                              check again whether the terminal can be powered
                              on.
                            </li>
                            <li>
                              • Check whether the <strong>USB port</strong> is
                              damaged. If it is damaged, replace the USB port.
                            </li>
                            <li>
                              • Press and hold the <strong>Power button</strong>{" "}
                              and the <strong>Volume Up button</strong> (the one
                              on the right) to check whether the terminal can
                              enter{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/recovery_mode.jpg"
                                imageAlt="Recovery Mode"
                              >
                                Recovery Mode
                              </ZoomableTextLink>{" "}
                              . If it can, please contact the Urovo team for a
                              firmware upgrade.
                            </li>
                            <li>
                              • Replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/mainboard_front.png"
                                imageAlt="Mainboard"
                              >
                                Mainboard
                              </ZoomableTextLink>{" "}
                              <strong>ONLY</strong> and check again whether the
                              terminal can be powered on.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the terminal does not use cellular data even though a SIM card is inserted?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Perform a <strong>Factory Reset</strong>.
                              <br />
                              <strong>
                                Settings → System → Reset options → Erase all
                                data (factory reset) → Erase everything & Reboot
                              </strong>
                            </li>
                            <li>
                              • Replace the current SIM card with another SIM
                              card that works on other terminals, to check
                              whether the problem is caused by the SIM card
                              itself.
                            </li>
                            <li>
                              • Use the <strong>same SIM card</strong> on two
                              terminals in the <strong>same location</strong>{" "}
                              and compare the performance, to check whether the
                              issue is caused by weak signal strength in that
                              area.
                            </li>
                            <li>
                              • If a good SIM card is inserted but{" "}
                              <strong>no signal bars</strong> are shown at all,
                              that usually means the{" "}
                              <strong>SIM card slot is damaged</strong>.
                            </li>
                            <li>
                              • If a good SIM card is inserted and a{" "}
                              <strong>triangle signal icon</strong> is shown,
                              but there is a{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/signal_bar_triangle_exclamation_mark.png"
                                imageAlt="Developer mode"
                              >
                                Exclamation Mark
                              </ZoomableTextLink>{" "}
                              instead of a signal strength indicator, that means
                              the terminal failed to complete network
                              attachment. This may be because the signal
                              strength is too weak, or because the SIM card is
                              invalid and was rejected by the network provider.
                              Please install this{" "}
                              <a
                                href="https://cdn.patrick-shenzhen.org/urovo/apk/Cellular-Z_20260126164952_signed.apk"
                                target="_blank"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                APP
                              </a>{" "}
                              to check the terminal's signal strength.
                            </li>
                            <li>
                              • If a good SIM card is inserted and a{" "}
                              <strong>triangle signal icon</strong> is shown
                              with <strong>decent signal strength</strong>, but
                              there is still no internet connection, please
                              check whether the <strong>APN settings</strong>{" "}
                              are the same as those on terminals that do not
                              have this problem.
                            </li>
                            <br />
                            <li>
                              You may record the Modem Log and send it to us for
                              further analysis. Please refer to{" "}
                              <Link
                                href="/instructions/log_capture/mtk"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Here
                              </Link>{" "}
                              for instructions on log recording.
                              <br />
                              • Recording process: Insert the SIM card → Start
                              recording → Reboot the device → Wait until the
                              terminal reboots → Continue recording for two more
                              minutes before stop.
                              <br />
                              (The recording will resume automatically after
                              reboot, so you do not need to do anything.)
                              <br />
                              • You need to extract the Modem Log from the
                              terminal. You may refer to the second part of the
                              Log Instruction.
                              <br />
                              (This requires the terminal to be in developer
                              mode.)
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the screen is not working properly?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Restart the terminal first to check whether the
                              problem can be fixed.
                            </li>
                            <li>
                              • Perform a <strong>Factory Reset</strong> to
                              check whether the problem can be fixed.
                              <br />
                              <strong>
                                Settings → System → Reset options → Erase all
                                data (factory reset) → Erase everything & Reboot
                              </strong>
                            </li>
                            <li>
                              • Perform a{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#upgrade"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Firmware Upgrade
                              </Link>{" "}
                              to check whether the problem can be fixed.
                            </li>
                            <li>
                              • If you have tried all the methods above and the
                              problem still persists, replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/screen_case_front.png"
                                imageAlt="Screen Case"
                              >
                                Screen Case
                              </ZoomableTextLink>{" "}
                              to check whether the problem can be fixed.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the buzzer is not working properly?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Check whether the <strong>buzzer</strong> is
                              installed properly.
                            </li>
                            <li>
                              • Check whether the <strong>wiring</strong> and
                              the <strong>interface</strong> are damaged.
                            </li>
                            <li>
                              • If necessary, replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/buzzer.png"
                                imageAlt="Buzzer"
                              >
                                Buzzer
                              </ZoomableTextLink>
                              .
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the Magnetic Card Reader is not working properly?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Make sure there is nothing blocking the card
                              slot, and clean it thoroughly.
                            </li>
                            <li>
                              • Make sure the{" "}
                              <strong>magnetic stripe card</strong> is not
                              damaged.
                            </li>
                            <li>
                              • Open the{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/hardware_test_mag_reader.png"
                                imageAlt="Hardware Test"
                              >
                                Hardware Test
                              </ZoomableTextLink>{" "}
                              app and select MagReader. Then use a good magnetic
                              stripe card to swipe and check whether the{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/hardware_test_mag_reader_detail.png"
                                imageAlt="MagReader Page"
                              >
                                Track Information
                              </ZoomableTextLink>{" "}
                              is shown on the screen.
                            </li>
                            <li>
                              • Restart the terminal to check whether the
                              problem can be fixed.
                            </li>
                            <li>
                              • Perform a <strong>Factory Reset</strong> to
                              check whether the problem can be fixed.
                              <br />
                              <strong>
                                Settings → System → Reset options → Erase all
                                data (factory reset) → Erase everything & Reboot
                              </strong>
                            </li>
                            <li>
                              • Perform a{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#upgrade"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Firmware Upgrade
                              </Link>{" "}
                              to check whether the problem can be fixed.
                            </li>
                            <li>
                              •{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#log"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Record the Log
                              </Link>{" "}
                              and send it to the Urovo team for further
                              analysis.
                              <br />
                              <strong>Record process:</strong> Open{" "}
                              <strong>Hardware Test</strong> and enter the{" "}
                              <strong>MagReader</strong> section → Start
                              recording → Swipe the magnetic stripe card → Stop
                              recording
                            </li>
                            <li>
                              • If you have tried all the methods above and the
                              problem still persists, replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/mag_head.png"
                                imageAlt="MagHead"
                              >
                                MagHead
                              </ZoomableTextLink>{" "}
                              to check whether the problem can be fixed.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the Ic Card (SIM Card) Reader is not working properly?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • Make sure there is nothing blocking the card
                              slot, and clean it thoroughly.
                            </li>
                            <li>
                              • Make sure the <strong>Ic Card</strong> is not
                              damaged.
                            </li>
                            <li>
                              • Open the{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/hardware_test_iccard_reader.png"
                                imageAlt="Hardware Test"
                              >
                                Hardware Test
                              </ZoomableTextLink>{" "}
                              app and select IccReader. Then use a good Ic Card
                              to insert and press "ACTIVATION" and "RESET" in
                              order. After reset, you will see the{" "}
                              <ZoomableTextLink
                                href="/products/pos/others/hardware_test_iccard_reader_detail.png"
                                imageAlt="IccReader Page"
                              >
                                ATR
                              </ZoomableTextLink>{" "}
                              is shown on the screen, which means the Ic Card is
                              responding well.
                            </li>
                            <li>
                              • Restart the terminal to check whether the
                              problem can be fixed.
                            </li>
                            <li>
                              • Perform a <strong>Factory Reset</strong> to
                              check whether the problem can be fixed.
                              <br />
                              <strong>
                                Settings → System → Reset options → Erase all
                                data (factory reset) → Erase everything & Reboot
                              </strong>
                            </li>
                            <li>
                              • Perform a{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#upgrade"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Firmware Upgrade
                              </Link>{" "}
                              to check whether the problem can be fixed.
                            </li>
                            <li>
                              •{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#log"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Record the Log
                              </Link>{" "}
                              and send it to the Urovo team for further
                              analysis.
                              <br />
                              <strong>Record process:</strong> Open{" "}
                              <strong>Hardware Test</strong> and enter the{" "}
                              <strong>IccReader</strong> section → Start
                              recording → Insert the IcCard and click
                              "ACTIVATION" & "RESET" in order → Stop recording
                            </li>
                            <li>
                              • If you have tried all the methods above and the
                              problem still persists, replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/mainboard_front.png"
                                imageAlt="Mainboard"
                              >
                                Mainboard
                              </ZoomableTextLink>{" "}
                              to check whether the problem can be fixed.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      question:
                        "What should I do if the printer is not working properly?",
                      answer: (
                        <>
                          <ul>
                            <li>
                              • If the printer{" "}
                              <strong>does not feed paper</strong>, check
                              whether the printer is loaded properly, whether
                              the roll paper is installed correctly, whether the
                              paper compartment cover and roller are in the
                              correct position, and whether the paper quality
                              matches the specified roll paper.
                            </li>
                            <li>
                              • If the printer <strong>prints blank</strong>,
                              check whether the roll paper is installed
                              correctly.
                            </li>
                            <li>
                              • If the printer{" "}
                              <strong>cannot print at all</strong>, first check
                              for possible program or system issues and restart
                              the device. Also check whether the printing paper
                              is present and complete. If necessary, replace the
                              printer with a normal one for comparison.
                            </li>
                            <li>
                              • If the printer output <strong>stutters</strong>,
                              the <strong>font is unclear</strong>, or the{" "}
                              <strong>color is too light</strong>, check whether
                              the printer roller gear and printer bracket gear
                              are damaged, and check whether there are any
                              foreign objects in the printer gear slot.
                            </li>
                            <li>
                              • Check whether the{" "}
                              <strong>paper compartment cover</strong> is
                              deformed. You can remove the printer roller from
                              the paper compartment cover and install it on the
                              printer bracket for testing. If printing becomes
                              normal, that means the paper compartment cover is
                              deformed and should be replaced.
                            </li>
                            <li>
                              • If the printing result is{" "}
                              <strong>blurred</strong>, also check whether there
                              is any foreign matter on the{" "}
                              <strong>heating head</strong> of the printer.
                            </li>
                            <li>
                              • Perform a{" "}
                              <Link
                                href="/projects/pos/i9100/p9x4m2k8#upgrade"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Firmware Upgrade
                              </Link>{" "}
                              to check whether the problem can be fixed.
                            </li>
                            <li>
                              • If you have checked the items above and the
                              problem still persists, replace the{" "}
                              <ZoomableTextLink
                                href="/products/pos/i9100/spare/printer.png"
                                imageAlt="Printer Module"
                              >
                                Printer Module
                              </ZoomableTextLink>{" "}
                              for further verification.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                  ],
                },
              ]}
            />
          </PageStack>
        </PageMain>
      </PageContainer>
    </PageShell>
  );
}

function CapabilityBlock({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
          <Icon className="size-5 text-foreground/75" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm leading-7 text-foreground/65">{description}</p>
        </div>
      </div>
    </div>
  );
}
