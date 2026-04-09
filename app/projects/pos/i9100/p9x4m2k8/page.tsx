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

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export default async function DetailPage() {
  await requireSignIn("/auth-required");

  return (
    <PageShell className="min-h-screen">
      <PageContainer className="gap-0">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10">
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
                      description="A high-performance quad-core processor and Android 13 operating system."
                    />
                    <CapabilityBlock
                      icon={Wrench}
                      title="Fast Printing"
                      description="40-mm diameter compartment that supports fast thermal printing."
                    />
                    <CapabilityBlock
                      icon={Database}
                      title="Large Display"
                      description="HD resolution rate with backlight and brightness level control for a clear view."
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

            <section id="group" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  1. Maintenance
                </PageSectionTitle>
              </div>

              <p className="max-w-3xl pt-4 text-sm leading-7 text-foreground/65 md:text-xl">
                i9100 Disassemble Manual
              </p>
              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/D0GA4ZHtZvo"
                      title="UMS Group Management Tutorial"
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

              <p className="max-w-3xl pt-4 text-sm leading-7 text-foreground/65 md:text-xl">
                i9100 Assemble Manual
              </p>

              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/WjVoQvA2T2Y"
                      title="UMS Group Management Tutorial"
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

            <section id="app" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  2. App Management
                </PageSectionTitle>

                <PageSectionDescription>
                  Including "App Upload", "App List", and "Application
                  Deployment"
                </PageSectionDescription>

                <p className="max-w-3xl pt-2 text-sm leading-7 text-foreground/65 md:text-base">
                  The App Store section is one of the core functions of UMS. It
                  covers the complete workflow of application upload, version
                  publishing, App Market visibility, and remote deployment,
                  helping enterprises manage application delivery in a flexible
                  and controlled way.
                </p>
              </div>

              <section className="mt-6 space-y-3 pb-5">
                <div className="w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/xLEUUJlfJdw"
                      title="UMS Overview Video"
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

              <div className="mt-6 space-y-6">
                <AppStoreBlock
                  title="2.1 App Upload"
                  description="Upload applications and manage different release types."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      In the App Upload page, you can upload APKs, define
                      application information, and modify it later when needed.
                    </p>

                    <p>
                      UMS supports three upload types:{" "}
                      <strong>Coverage Upgrade</strong>,{" "}
                      <strong>Multi-version Upload</strong>, and{" "}
                      <strong>GrayScale Upload</strong>.
                    </p>

                    <ul className="space-y-2 pl-5 text-foreground/70">
                      <li>
                        <strong>Coverage Upgrade</strong> updates the official
                        version shown on the home page of the App Market. It
                        requires a higher version and the same signature.
                      </li>
                      <li>
                        <strong>Multi-version Upload</strong> adds additional
                        versions without changing the official version. These
                        versions can be accessed in the App detail page.
                      </li>
                      <li>
                        <strong>GrayScale Upload</strong> allows staged rollout
                        to selected devices and can later be turned into the
                        official version.
                      </li>
                    </ul>
                  </div>
                </AppStoreBlock>

                <AppStoreBlock
                  title="2.2 App List"
                  description="Manage published applications and App Market visibility."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      The App List section separates published applications from
                      uploaded but unpublished ones.
                    </p>

                    <p>
                      Published applications can be downloaded directly from the
                      App Market, while unpublished versions remain available
                      for internal publishing and management.
                    </p>

                    <p>
                      You can also control which terminal groups can access an
                      application, and fix a specific version to make other
                      versions inaccessible.
                    </p>
                  </div>
                </AppStoreBlock>

                <AppStoreBlock
                  title="2.3 Application Deployment"
                  description="Deploy published applications remotely to device groups."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      Application Deployment is managed through Remote
                      Management and Application Management.
                    </p>

                    <p>
                      You can create deployment rules with one or more published
                      applications, choose either{" "}
                      <strong>Silent Installation</strong> or{" "}
                      <strong>Download and Prompt</strong>, and apply them to
                      target groups.
                    </p>

                    <p>
                      UMS also supports application updates, whitelist control,
                      and remote uninstall, helping enterprises maintain
                      consistency and security across terminals.
                    </p>
                  </div>
                </AppStoreBlock>

                <AppStoreBlock
                  title="2.4 Other features"
                  description="Set App Whitelist or uninstall an App remotely for better security."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <li>
                      Set an App Whitelist in "Application Management" of
                      "Remote Management" section
                      <ul className="pl-3 space-y-1 mt-1">
                        <li>
                          ◦ This is only effective in PDA product. POS products
                          use signature mechanism to{" "}
                          <AiLink
                            prompt="What's Application signture in Android POS product? Can an App be installed without the specified signature as per PCI?"
                            className="font-bold"
                          >
                            achieve this.
                          </AiLink>
                        </li>
                        <li>
                          ◦ After the application whitelist is enabled,
                          non-whitelisted applications will be uninstalled after
                          reboot! Please operate carefully!
                        </li>
                        <li>
                          ◦ If you manually install a new application, please
                          update the application white list, otherwise the
                          application will fail to install.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Uninstall an App remotely in "Remote Management" section
                      <ul className="pl-3 space-y-1 mt-1">
                        <li>
                          ◦ You can perform this for a single terminal or do it
                          in groups.
                        </li>
                      </ul>
                    </li>
                  </div>
                </AppStoreBlock>
              </div>
            </section>

            <Divider />

            <section id="remote" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  3. Remote Management
                </PageSectionTitle>

                <PageSectionDescription>
                  Monitor devices, execute operations remotely, and deploy
                  configurations at scale
                </PageSectionDescription>

                <p className="max-w-3xl pt-2 text-sm leading-7 text-foreground/65 md:text-base">
                  Remote Management is the operational core of UMS. It provides
                  real-time device visibility, batch operations, remote file
                  extraction, and large-scale configuration deployment for
                  enterprise terminals.
                </p>
              </div>

              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/UtHbkkDFMsk"
                      title="UMS Remote Management Tutorial"
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

              <div className="mt-10 space-y-6">
                <AppStoreBlock
                  title="3.1 Device Monitoring"
                  description="View terminal status and key device information at a glance."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>
                      • Real-time online status, network status, and battery
                      level
                    </li>
                    <li>• Filter devices by SN or model</li>
                    <li>
                      • Detailed device info: firmware version, location, memory
                      & storage
                    </li>
                    <li>• Batch export device information via Batch Manage</li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="3.2 Remote Operations"
                  description="Execute actions on devices individually or in groups."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Freeze / unfreeze devices</li>
                    <li>• Send messages or files</li>
                    <li>• Install or uninstall applications</li>
                    <li>• Move devices between groups</li>
                    <li>• Reboot, power off, or ring devices</li>
                    <li>• Extract system logs remotely</li>
                    <li>
                      • View task results in Remote Log (success / failed /
                      running)
                    </li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="3.3 Remote Log & File Extraction"
                  description="Extract logs and files from devices remotely."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Create log extraction tasks</li>
                    <li>• Support UMS log and system log</li>
                    <li>• Extract specified files via file path</li>
                    <li>
                      • Download uploaded files directly from the platform
                    </li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="3.4 Restore & Configuration"
                  description="Reset devices and deploy configurations remotely."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Reset devices remotely</li>
                    <li>• Remove lock password if forgotten</li>
                    <li>• Push WiFi SSID and password</li>
                    <li>• Configure WiFi whitelist</li>
                    <li>• Deploy APN settings</li>
                    <li>• Send Android intents remotely</li>
                    <li>• Manage app deployment and App whitelist</li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="3.5 Advanced Remote Control"
                  description="Advanced control over device behavior and system customization."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Geofencing and location-based device locking</li>
                    <li>• Email alerts for out-of-area devices</li>
                    <li>• Configure polling interval and log retention</li>
                    <li>• State Management with U Stage integration</li>
                    <li>• Customize boot animation and launcher</li>
                    <li>• Set kiosk mode and auto-start applications</li>
                  </ul>
                </AppStoreBlock>
              </div>
            </section>

            <Divider />

            <section id="account" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  4. Account Management
                </PageSectionTitle>

                <PageSectionDescription>
                  Manage users, permissions, and multi-organization access
                  control
                </PageSectionDescription>

                <p className="max-w-3xl pt-2 text-sm leading-7 text-foreground/65 md:text-base">
                  Account Management in UMS allows you to manage operator
                  access, distribute devices across organizations, and enforce
                  strict permission isolation between different parties.
                </p>
              </div>

              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/nkPxqLHZeBM"
                      title="UMS Account Management Tutorial"
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

              <div className="mt-10 space-y-6">
                <AppStoreBlock
                  title="4.1 Operator Accounts"
                  description="Create and manage internal users with permission control."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Create operator accounts via email invitation</li>
                    <li>• Account activation through email confirmation</li>
                    <li>• Configure permissions to control access scope</li>
                    <li>
                      • Transfer administrator permission to another account
                    </li>
                    <li>• Remove unused operator accounts anytime</li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="4.2 Sub-Account & Device Distribution"
                  description="Distribute terminals to different organizations with isolation."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>• Create controlled or independent sub-accounts</li>
                    <li>• Sub-accounts can only access assigned devices</li>
                    <li>• Ensure isolation between different organizations</li>
                    <li>• Distribute devices via Device Manager</li>
                    <li>
                      • Support manual and batch distribution (template upload)
                    </li>
                    <li>• Replace device ownership between sub-accounts</li>
                    <li>• Unbind devices from sub-accounts when needed</li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="4.3 Controlled vs Independent Sub-Accounts"
                  description="Different levels of platform access and operational control."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>
                      • Controlled: parent account can access via "To Manage"
                    </li>
                    <li>
                      • Independent: no parent access to the sub-account
                      platform
                    </li>
                    <li>
                      • Controlled: restricted application upload capability
                    </li>
                    <li>
                      • Independent: can upload and publish applications freely
                    </li>
                    <li>
                      • Independent: requires email during account creation
                    </li>
                    <li>
                      • Controlled: no email required, operator accounts created
                      inside
                    </li>
                  </ul>
                </AppStoreBlock>

                <AppStoreBlock
                  title="4.4 Application Control (Controlled Accounts)"
                  description="Define how sub-accounts manage and publish applications."
                >
                  <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                    <li>
                      • Mode 1: Full control of publishing (select from all
                      uploaded apps)
                    </li>
                    <li>
                      • Mode 2: Fully synchronized with parent publish list
                      (read-only)
                    </li>
                    <li>
                      • Mode 3: Custom publish list (limited to parent's
                      published apps)
                    </li>
                    <li>
                      • Mode 4: Fully controlled by parent (no modification
                      allowed)
                    </li>
                    <li>• Default mode: Mode 4 (fully controlled by parent)</li>
                  </ul>
                </AppStoreBlock>
              </div>
            </section>

            <Divider />

            <section id="utms" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  5. UTMS (Private UMS)
                </PageSectionTitle>
              </div>
            </section>

            <div className="mt-6">
              <UTMSHighlightCard />
            </div>

            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold">
                    UTMS Related Links
                  </PageSectionTitle>
                </div>
              </PageSectionHeader>

              <div className="flex flex-col divide-y divide-white/5">
                <a
                  href="http://39.101.193.145:9898/customerui/login"
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
                  <span>UTMS Demo website</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://mega.nz/file/PhQiBASL#fFhCHk0eFoQUjzD87a2g6buinm1CxuxlOerGPz7k6lg"
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
                  <span>UTMS User Manual</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://mega.nz/folder/3loFxJZb#tt1ArBCX6w4AmPsSkpN3dw"
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
                  <span>UTMS Agent & UTMS App Market</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>
              </div>
            </PageSection>
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

function UTMSHighlightCard() {
  return (
    <div
      className="
      relative
      rounded-2xl
      border border-blue-500/25
      bg-blue-500/[0.06]
      px-6 py-6
      overflow-hidden
    "
    >
      {/* subtle glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-x-0 top-0 h-20
          bg-[radial-gradient(60%_100%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]
        "
      />

      <div className="relative space-y-4">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-white">
            UTMS (Private Deployment version of UMS)
          </h3>

          <span
            className="
            rounded-md
            bg-blue-500/15
            px-2 py-0.5
            text-[11px]
            font-semibold
            tracking-wide
            text-blue-300
          "
          >
            PRIVATE
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3 text-sm leading-7 text-foreground/70">
          <p>
            UTMS is the private deployment version of UMS, designed for
            enterprises that require full control over data, security, and
            system architecture.
          </p>

          <p>
            It enables organizations to operate within their own infrastructure,
            ensuring higher security standards, flexible customization, and
            complete ownership of device management workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

function AppStoreBlock({
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
