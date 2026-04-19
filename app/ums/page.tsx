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
import Link from "next/link";
import ZoomableTextLink from "@/components/ui/ZoomableTextLink";
import { FaqSection } from "@/components/ui/FapSectionProps";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function UmsPage() {
  return (
    <PageShell className="min-h-screen">
      <PageContainer className="gap-0">
        <div id="intro" className="block h-10 -mt-10" aria-hidden />

        <PageHeader className="border-0 bg-transparent px-0 py-0 shadow-none">
          <PageHeaderContent className="flex flex-col items-start">
            <div className="space-y-4">
              <PageTitle className="text-4xl text-white md:text-5xl">
                UMS (Urovo MDM Service)
              </PageTitle>

              <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                Urovo Unified All-in-one device management system (MDM/TMS)
              </PageDescription>
            </div>
          </PageHeaderContent>
        </PageHeader>

        <Divider />

        <PageMain className="mt-8">
          <PageStack className="gap-12">
            <section>
              <div className="rounded-3xl border border-white/10 bg-white/4 px-6 py-6 md:px-8 md:py-7">
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/35">
                    Product Overview
                  </p>

                  <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    End-to-end management for enterprise device operations
                  </h2>

                  <p className="max-w-3xl text-sm leading-7 text-foreground/65 md:text-base">
                    From device registration to device recycling, UMS can
                    realize the full process management for the full life cycle
                    of devices, helping enterprises provide one-stop deployment
                    and management in the process of large-scale upgrade to
                    digitization in the business process.
                  </p>
                </div>
              </div>
            </section>

            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold">
                    Core Capabilities
                  </PageSectionTitle>
                  <PageSectionDescription>
                    Key areas that define the UMS device lifecycle workflow.
                  </PageSectionDescription>
                </div>
              </PageSectionHeader>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CapabilityBlock
                  icon={Smartphone}
                  title="Device Enrollment"
                  description="Register, activate, and organize devices quickly for large-scale deployment."
                />
                <CapabilityBlock
                  icon={Database}
                  title="Application & Content"
                  description="Distribute apps, files, and configurations remotely with centralized control."
                />
                <CapabilityBlock
                  icon={Shield}
                  title="Security Management"
                  description="Enforce policies, protect data, and reduce operational risk across fleets."
                />
                <CapabilityBlock
                  icon={Wrench}
                  title="Remote Support"
                  description="Perform troubleshooting, maintenance, and issue diagnosis without on-site handling."
                />
              </div>
            </PageSection>

            <section className="space-y-3 pb-5">
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
                  UMS Overview Video
                </PageSectionTitle>
                <PageSectionDescription>
                  A quick visual introduction to the UMS platform.
                </PageSectionDescription>
              </div>

              <div className="w-full overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/DtrkYRCYGdQ"
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

            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold text-xl">
                    UMS Related Links
                  </PageSectionTitle>
                </div>
              </PageSectionHeader>

              <div className="flex flex-col divide-y divide-white/5">
                <a
                  href="https://uhomeov.urovo.com/customerui/login"
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
                  <span>UMS Official Website</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/Introduction_to_UMS_20251208192518.pdf"
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
                  <span>UMS Introduction</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/the_guide_book_of_UMS-v3.9.5.pdf"
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
                  <span>UMS User Manual</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/UMS_2.10.6.20251126_aurovo_release_I9000_V3_20251202153732_signed.apk"
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
                    <strong>[APK]</strong> UMS Agent
                  </span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/AppMarket_1.3.6.20240910_20240910091844_release_I9000_V2_signed.apk"
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
                    <strong>[APK]</strong> UMS App Market
                  </span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>
              </div>
            </PageSection>

            <AppStoreBlock
              title="UMS Account Registration"
              description="Create a UMS account to access device management and remote control features."
            >
              <ul className="space-y-2 text-sm leading-7 text-foreground/72">
                <li>
                  • Go to the UMS official website{" "}
                  <a
                    href="https://uhomeov.urovo.com/customerui/login"
                    target="_blank"
                    className="font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                  >
                    HERE
                  </a>
                  .
                </li>

                <li>• Click “Sign Up”.</li>

                <li>
                  • Enter your{" "}
                  <span className="text-white/85">E-mail address</span> and{" "}
                  <span className="text-white/85">password</span> for login.
                </li>

                <li>
                  • Fill in all required fields to complete the registration.
                </li>

                <li>
                  • After your application is reviewed and approved by the UMS
                  team, you can log in to your account.
                </li>
              </ul>
            </AppStoreBlock>

            <Divider />

            <section id="group" className="scroll-mt-20">
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  1. Group Management
                </PageSectionTitle>

                <PageSectionDescription>
                  Organize devices with flexible grouping, binding, and
                  deployment control
                </PageSectionDescription>

                <p className="max-w-3xl pt-2 text-sm leading-7 text-foreground/65 md:text-base">
                  Group Management is the foundation of device organization in
                  UMS. It allows enterprises to structure terminals based on
                  business hierarchy, manage device ownership, and apply
                  configurations or deployments in a controlled and scalable
                  way.
                </p>
              </div>

              <section className="space-y-3 pb-5">
                <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/NibOV3mtuZ8"
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

              <div className="mt-6 space-y-6">
                <AppStoreBlock
                  title="1.1 Group Structure"
                  description="Build hierarchical groups to organize devices."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      The left panel displays the full group structure,
                      including main groups and sub-groups.
                    </p>

                    <p>
                      You can click any group to view its details, such as
                      device count, bound terminals, published applications, and
                      deployment rules.
                    </p>

                    <p>
                      Groups can be created manually using the plus icon, or
                      imported in batch using a predefined Excel template.
                    </p>
                  </div>
                </AppStoreBlock>

                <AppStoreBlock
                  title="1.2 Device Binding"
                  description="Bind devices to groups in batch or manually."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      Devices can be assigned to groups either in batch or
                      individually.
                    </p>

                    <ul className="space-y-2 pl-5 text-foreground/70">
                      <li>
                        <strong>Batch Import</strong> allows you to upload an
                        Excel file containing device SNs and group names, which
                        is also useful for large-scale reassignment.
                      </li>
                      <li>
                        <strong>Manual Binding</strong> lets you add devices one
                        by one by entering the terminal serial number directly.
                      </li>
                    </ul>

                    <p>
                      These methods provide flexibility for both large
                      deployments and precise control.
                    </p>

                    <p>
                      <strong>Please note</strong>: UMS doesn't support users
                      binding terminals to UMS account by themselves currently.
                      Please fill in this{" "}
                      <a
                        href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/device_import_template.xlsx"
                        target="_blank"
                        className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                      >
                        Form
                      </a>{" "}
                      and send to UROVO's responsible Sales.
                    </p>
                  </div>
                </AppStoreBlock>

                <AppStoreBlock
                  title="1.3 Deployment by Group"
                  description="Apply configurations and execute operations based on group scope."
                >
                  <div className="space-y-3 text-sm leading-7 text-foreground/72">
                    <p>
                      Once groups are defined, all operations in UMS can be
                      executed at the group level.
                    </p>

                    <p>
                      For example, application deployment can be pushed to
                      selected groups only, ensuring targeted rollout while
                      keeping other devices unaffected.
                    </p>

                    <p>
                      This group-based control model is essential for
                      large-scale device management.
                    </p>
                  </div>
                </AppStoreBlock>
              </div>

              <div className="mt-6" />

              <FaqSection
                titleClassName={`text-5xl ${playfair.className}`}
                codeBlockTitle="Common Questions:"
                codeBlockDescription="Click any question below to expand the answer."
                groups={[
                  {
                    title: "",
                    items: [
                      {
                        question: "What's the benefit of Group Management?",
                        answer: (
                          <p>
                            You can <strong>Execute Tasks</strong> or{" "}
                            <strong>Push Configuration</strong> to a group of
                            terminals, so all terminals in that group will can
                            execute the same task or have the same
                            configuration.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can I bind terminal(s) to my UMS account by myself?",
                        answer: (
                          <>
                            {" "}
                            <p>
                              UMS doesn't support users binding terminals to UMS
                              account by themselves currently. Please fill in
                              this{" "}
                              <a
                                href="https://cdn.patrick-shenzhen.org/urovo/mdm/ums/device_import_template.xlsx"
                                target="_blank"
                                className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300"
                              >
                                Form
                              </a>{" "}
                              and send to UROVO's responsible Sales. (Only UTMS
                              supports that)
                            </p>
                          </>
                        ),
                      },
                      {
                        question: "How do I create groups or sub-groups?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>One by One: </strong> Click "+" Icon on
                              the right of "All Groups".
                            </li>
                            <li>
                              • <strong>In Batch: </strong> Click "Import"
                              button on the top-left corner, then fill the
                              template table and upload it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I bind terminal(s) with a group that I created?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>One by One: </strong> Click the Group
                              Name first. Then click "Bound Devices", and enter
                              the Serial Number One by One.
                            </li>
                            <li>
                              • <strong>In Batch: </strong> Click "Import
                              Devices" button on the top-left corner, then fill
                              the template table and upload it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How do I change the grouping of terminals?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>One by One: </strong> Go to "Remote
                              Management" → "Remote Management". Then select One
                              or More terminals. Then click "Operate in Batches"
                              → "Move to", and select the new group.
                            </li>
                            <li>
                              • <strong>In Batch: </strong> Click "Import"
                              button on the top-left corner, then fill the
                              template table and upload it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How do I unbind terminals from its group?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>One by One: </strong> Go to "Remote
                              Management" → "Remote Management". Then select One
                              or More terminals. Then click "Operate in Batches"
                              → "Move to", and select the "Ungrouped Devices".
                            </li>
                            <li>
                              • <strong>In Batch: </strong> Click "Import"
                              button on the top-left corner, then fill the
                              template table with the group as "Ungrouped
                              Devices" and upload it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I check all the bound terminals of a group?",
                        answer: (
                          <p>
                            "Group Management" → "Group Management" → "Bind
                            Device"
                          </p>
                        ),
                      },
                      {
                        question:
                          "How do I check all published Apps(the ones shown on the App Market) of a group?",
                        answer: (
                          <p>
                            "Group Management" → "Group Management" → "Shelf
                            App"
                          </p>
                        ),
                      },
                      {
                        question:
                          "How do I check all deployed Apps of a group?",
                        answer: (
                          <p>
                            "Group Management" → "Group Management" → "Deploy
                            App"
                          </p>
                        ),
                      },
                    ],
                  },
                ]}
              />
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
                      title="UMS App Management Tutorial"
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
                  <PageSectionTitle className="font-bold text-xl">
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
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/utms/UTMS_Quick_Operation_Guide_V2.0.pptx"
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
                  <span>UTMS Introduction</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/utms/UTMS_User_Manual_V2.9.9.pdf"
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
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/utms/Privatization_deployment_introduce_of_UTMS.pdf"
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
                  <span>UTMS Deployment Requirements</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/utms/UTMS_2.0.11.20250307_aurovo_release_20250307171427_I9000_V2.apk"
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
                    <strong>[APK]</strong> UTMS Agent
                  </span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/mdm/utms/Appmarket_UTMS_v19_2.0.6.20250117_I9000_V2_20250117102454_signed.apk"
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
                    <strong>[APK]</strong> UTMS App Market
                  </span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>
              </div>
            </PageSection>

            <Divider />

            <FaqSection
              title="6. Q&A"
              titleClassName={`text-5xl ${playfair.className}`}
              description={<>Common questions about UMS / UTMS.</>}
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
                  ],
                },
                {
                  title: "2. After-sales Questions:",
                  items: [
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5">
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
