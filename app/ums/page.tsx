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
                codeBlockTitle="Frequently Asked Questions:"
                codeBlockDescription="Click any question below to expand the answer."
                askAiScope="ums"
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
                          <div>
                            "Group Management" → "Group Management" →{" "}
                            <ZoomableTextLink
                              href="/products/ums/group/group_bind_device.png"
                              imageAlt="Bind Device"
                            >
                              "Bind Device"
                            </ZoomableTextLink>{" "}
                          </div>
                        ),
                      },
                      {
                        question:
                          'What\'s the difference between "Activation Time" and "Shipment Time" in Bind Device?',
                        answer: (
                          <ul>
                            <li>
                              • <strong>Activation Time:</strong> is the time
                              when the device is{" "}
                              <strong>first seen ONLINE in UMS</strong>.
                            </li>
                            <li>
                              • It represents when the device is{" "}
                              <strong>first activated and connected</strong> to
                              the platform.
                            </li>
                            <li>
                              • <strong>Shipment Time:</strong> is the time when
                              the device is{" "}
                              <strong>
                                first registered (bound) to your account
                              </strong>
                              .
                            </li>
                            <li>
                              • It represents when the device is{" "}
                              <strong>assigned or imported</strong> into your
                              UMS account.
                            </li>
                            <li>
                              • 👉 <strong>In short:</strong>
                            </li>
                            <li>
                              • Activation Time = first time device goes online
                            </li>
                            <li>
                              • Shipment Time = first time device is bound to
                              your account
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I check all published Apps(the ones shown on the App Market) of a group?",
                        answer: (
                          <div>
                            "Group Management" → "Group Management" →{" "}
                            <ZoomableTextLink
                              href="/products/ums/group/group_shelf_app.png"
                              imageAlt="Shelf App"
                            >
                              "Shelf App"
                            </ZoomableTextLink>{" "}
                          </div>
                        ),
                      },
                      {
                        question:
                          "How do I check all deployed Apps of a group?",
                        answer: (
                          <div>
                            "Group Management" → "Group Management" →{" "}
                            <ZoomableTextLink
                              href="/products/ums/group/group_deploy_app.png"
                              imageAlt="Deploy App"
                            >
                              "Deploy App"
                            </ZoomableTextLink>{" "}
                          </div>
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
                          use signature mechanism to achieve this.
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

              <div className="mt-6" />

              <FaqSection
                codeBlockTitle="Frequently Asked Questions:"
                codeBlockDescription="Click any question below to expand the answer."
                askAiScope="ums"
                groups={[
                  {
                    title: "",
                    items: [
                      {
                        question: "How do I upload an APK in UMS?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <strong>
                                "App Store" →{" "}
                                <ZoomableTextLink
                                  href="/products/ums/app/app_app_upload.png"
                                  imageAlt="App Upload"
                                >
                                  "App Upload"
                                </ZoomableTextLink>{" "}
                              </strong>
                              .
                            </li>
                            <li>• Click to upload the APK.</li>
                            <li>
                              • Fill in the{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_app_information.png"
                                imageAlt="App Information"
                              >
                                Application Information
                              </ZoomableTextLink>
                              , such as <strong>Application Name</strong>,{" "}
                              <strong>Application Description</strong>,{" "}
                              <strong>Catalog</strong>, description image, and{" "}
                              <strong>Application Signature</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I modify app information after uploading?",
                        answer: (
                          <p>
                            Yes. After uploading an application, you can modify
                            its information at any time, such as the app
                            description and other metadata.
                          </p>
                        ),
                      },
                      {
                        question: "What are the 3 app upload types in UMS?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_coverage_upgrade.png"
                                imageAlt="Coverage Upgrade"
                              >
                                <strong>Coverage Upgrade</strong>
                              </ZoomableTextLink>{" "}
                              upgrades the official version of the app.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_multiversion_upload.png"
                                imageAlt="Multi-version Upload"
                              >
                                <strong>Multi-version Upload</strong>
                              </ZoomableTextLink>{" "}
                              adds another version without changing the official
                              version.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_grayscale_upgrade.png"
                                imageAlt="Grayscale Upgrade"
                              >
                                <strong>Grayscale Upgrade</strong>
                              </ZoomableTextLink>{" "}
                              releases the app only to selected devices or
                              groups first.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is Coverage Upgrade?",
                        answer: (
                          <ul>
                            <li>
                              • Go to <strong>"Normal Upgrade"</strong> first.
                            </li>
                            <li>
                              • Then select{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_coverage_upgrade.png"
                                imageAlt="Coverage Upgrade"
                              >
                                <strong>Coverage Upgrade</strong>
                              </ZoomableTextLink>{" "}
                              .
                            </li>
                            <li>
                              • Upload a new APK to upgrade the{" "}
                              <strong>official version</strong> of the app.
                            </li>
                            <li>
                              • The version must be <strong>higher</strong> than
                              the current official version.
                            </li>
                            <li>
                              • The signature must remain{" "}
                              <strong>the same</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is the official version of an app?",
                        answer: (
                          <div>
                            The official version is the version shown on the{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_app_market_home.png"
                              imageAlt="Home Page of App Market"
                            >
                              <strong>Home Page of App Market</strong>
                            </ZoomableTextLink>{" "}
                            . It is the main public version users will see
                            first.
                          </div>
                        ),
                      },
                      {
                        question: "What is Multi-version Upload?",
                        answer: (
                          <ul>
                            <li>
                              • Go to <strong>"Normal Upgrade"</strong>.
                            </li>
                            <li>
                              • Select{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_multiversion_upload.png"
                                imageAlt="Upload Multiple versions"
                              >
                                <strong>Upload Multiple versions</strong>
                              </ZoomableTextLink>{" "}
                              .
                            </li>
                            <li>
                              • Upload another APK version without changing the
                              current official version.
                            </li>
                            <li>
                              • This version can still be downloaded from the{" "}
                              <strong>App Detail</strong> page.
                            </li>
                            <li>
                              • It has <strong>no restriction</strong> on
                              version number or signature.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can Multi-version Upload become the official version directly?",
                        answer: (
                          <p>
                            No. A multi-version cannot be turned into the
                            official version directly. You must delete that
                            multi-version first, then use{" "}
                            <strong>Coverage Upgrade</strong> to publish it as
                            the official version.
                          </p>
                        ),
                      },
                      {
                        question: "What is GrayScale Upgrade?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_grayscale_detail.png"
                                imageAlt="Grayscale Upgrade"
                              >
                                <strong>Grayscale Upgrade</strong>
                              </ZoomableTextLink>{" "}
                              is similar to Coverage Upgrade.
                            </li>
                            <li>
                              • It only takes effect on{" "}
                              <strong>selected devices/groups</strong>.
                            </li>
                            <li>
                              • The app signature must be{" "}
                              <strong>the same</strong>.
                            </li>
                            <li>
                              • You can later turn it into the{" "}
                              <strong>official version</strong> if the test
                              result is good.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "Can I adjust or pause a grayscale upgrade?",
                        answer: (
                          <ul>
                            <li>
                              • Yes, you can adjust the grayscale range by
                              adding new SNs or removing existing SNs.
                            </li>
                            <li>
                              • You can also <strong>pause</strong> the
                              grayscale upgrade to stop its effect temporarily.
                            </li>
                            <li>
                              • Later, you can <strong>restore</strong> it
                              whenever needed.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I publish uploaded apps to the App Market?",
                        answer: (
                          <>
                            <p>
                              In the{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_app_list.png"
                                imageAlt="App List"
                              >
                                <strong>"App List"</strong>
                              </ZoomableTextLink>{" "}
                              section, apps on the right side are uploaded but
                              not yet published. You can publish them to the{" "}
                              <strong>App Market</strong> when needed.
                            </p>
                            <div>
                              This can be done via two approaches:{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_add_apps.png"
                                imageAlt="Add Apps"
                              >
                                "Add Apps"
                              </ZoomableTextLink>{" "}
                              &{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_group_shelf.png"
                                imageAlt="Group Shelf"
                              >
                                "Group Shelf"
                              </ZoomableTextLink>{" "}
                            </div>
                          </>
                        ),
                      },
                      {
                        question:
                          'What\'s the difference between publishing an uploaded app by "Add Apps" and by "Group Shelf"?',
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_add_apps.png"
                                imageAlt="Add Apps"
                              >
                                <strong>Add Apps</strong>
                              </ZoomableTextLink>{" "}
                              publishes the uploaded app to{" "}
                              <strong>all groups</strong>.
                            </li>
                            <li>
                              === With <strong>Add Apps</strong>, you cannot
                              later restrict or adjust the target groups.
                            </li>
                            <li>
                              === If new groups are created later, those groups
                              will also be able to download the app from{" "}
                              <strong>App Market</strong>.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_group_shelf.png"
                                imageAlt="Group Shelf"
                              >
                                <strong>Group Shelf</strong>
                              </ZoomableTextLink>{" "}
                              publishes the uploaded app only to the{" "}
                              <strong>selected groups</strong>.
                            </li>
                            <li>
                              === With <strong>Group Shelf</strong>, you can
                              later click <strong>"Adjust"</strong> in the{" "}
                              <strong>Published App List</strong> to modify the
                              target groups.
                            </li>
                            <li>
                              === Only terminals in the selected groups can
                              download the app from <strong>App Market</strong>.
                            </li>
                            <li>
                              === If new groups are created later, they will not
                              see this app in <strong>App Market</strong> unless
                              you adjust the group scope.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What is the difference between the published Apps(left side) and uploaded Apps(right side) in App List?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_published_apps.png"
                                imageAlt="Published Apps"
                              >
                                <strong>Published Apps: </strong>
                              </ZoomableTextLink>{" "}
                              apps that have already been published and can be
                              downloaded directly from the App Market.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_uploaded_apps.png"
                                imageAlt="Uploaded Apps"
                              >
                                <strong>Uploaded Apps: </strong>
                              </ZoomableTextLink>{" "}
                              apps that have been uploaded but are not yet
                              published.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I remove a published app from the App Market?",
                        answer: (
                          <p>
                            Yes. In the App List section, you can{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_remove_app.png"
                              imageAlt="Remove App"
                            >
                              remove
                            </ZoomableTextLink>{" "}
                            an app from the published list whenever needed.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can I decide which group of terminals can download an app from App Market?",
                        answer: (
                          <p>
                            Yes. You can control app visibility and availability
                            by using{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_adjust_group.png"
                              imageAlt="Adjust grouping"
                            >
                              <strong>"Adjust"</strong>
                            </ZoomableTextLink>{" "}
                            to set the grouping, so only selected terminal
                            groups can download the app from the App Market.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can I lock a particular app version and make other versions unavailable?",
                        answer: (
                          <p>
                            Yes. You can fix a particular version and make other
                            versions inaccessible by adjusting the published
                            Apps. Click "Details" → "More versions" → Select the
                            version you want to fix and set its effective group
                            via "Adjust Shelf Group"
                          </p>
                        ),
                      },
                      {
                        question:
                          "How do I deploy applications to terminals remotely?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <strong>
                                "Remote Management" → "Application Management"
                              </strong>
                              .
                            </li>
                            <li>
                              • Create an{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_app_deployment.png"
                                imageAlt="Application Deployment"
                              >
                                <strong>Application Deployment</strong>
                              </ZoomableTextLink>{" "}
                              rule.
                            </li>
                            <li>
                              • Add one or more applications into the rule.
                            </li>
                            <li>
                              • Choose deployment mode and deployment time.
                            </li>
                            <li>
                              • Click <strong>"Push"</strong>, select the target
                              group, and confirm.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What apps can be selected in an Application Deployment rule?",
                        answer: (
                          <p>
                            You can only select applications that have already
                            been <strong>published</strong>. (Existing rules
                            won't be affected.)
                          </p>
                        ),
                      },
                      {
                        question:
                          "What deployment modes are available in Application Deployment?",
                        answer: (
                          <ul>
                            <li>
                              {" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_deploy_mode.png"
                                imageAlt="App Deploy Modes"
                              >
                                <strong>Two Deploy Modes: </strong>
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>
                              • <strong>Silent Installation: </strong>The
                              application will be silently downloaded and
                              installed in the background.
                            </li>
                            <li>
                              • <strong>Download and Prompt: </strong>The
                              application will be automatically downloaded. But
                              a prompt will pop to ask user whether to install
                              that application.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I choose when the deployment takes place?",
                        answer: (
                          <div>
                            Yes. You can deploy <strong>immediately</strong> or{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_deploy_time.png"
                              imageAlt="App Deploy Time"
                            >
                              Select another time
                            </ZoomableTextLink>{" "}
                            based on your needs. The time is based on terminal's
                            time, not UMS's time
                          </div>
                        ),
                      },
                      {
                        question:
                          "Can I start the app automatically after deploying/pushing the App?",
                        answer: (
                          <div>
                            Yes. You can set{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_default_boot.png"
                              imageAlt="Default Boot"
                            >
                              "Default Boot"
                            </ZoomableTextLink>{" "}
                            to "Yes" when adding a Deployment rule to achieve
                            that.
                          </div>
                        ),
                      },
                      {
                        question:
                          "How do I update apps already included in an Application Deployment rule?",
                        answer: (
                          <p>
                            If you upgrade the official version of an app
                            already included in the rule, an{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_deploy_update.png"
                              imageAlt="Update App"
                            >
                              "Update App"
                            </ZoomableTextLink>{" "}
                            button will appear. You can push the update simply
                            by clicking it.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can I prevent malicious applications from being installed? (App Whitelist)",
                        answer: (
                          <div>
                            Yes. You can configure an{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_app_whitelist.png"
                              imageAlt="App Whitelist"
                            >
                              App Whitelist
                            </ZoomableTextLink>{" "}
                            to prevent attacks from malicious applications and
                            allow only approved apps.
                            <p>
                              Note: the deployed apps will be automatically
                              included in the whitelist.
                            </p>
                          </div>
                        ),
                      },
                      {
                        question:
                          "Does Application Whitelist work on both POS and PDA?",
                        answer: (
                          <ul>
                            <li>
                              • No, it only works on <strong>PDA</strong>.
                            </li>
                            <li>
                              • POS uses <strong>APK signature control</strong>.
                            </li>
                            <li>
                              • Only APKs signed with authorized certificates
                              can be installed.
                            </li>
                            <li>
                              • (Except <strong>Non-financial POS</strong>)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What happens to already installed apps after enabling App Whitelist?",
                        answer: (
                          <ul>
                            <li>
                              • Apps NOT in the whitelist will be{" "}
                              <strong>uninstalled after reboot</strong>.
                            </li>
                            <li>• Please use this feature carefully.</li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What happens if I install an app NOT in the whitelist?",
                        answer: (
                          <p>
                            Installation will fail with:
                            <br />
                            <code>
                              Failure [INSTALL_FAILED_INVALID_APK: Scanning
                              Failed.: VerifyInernalSign failed]
                            </code>
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can I block app installation from sources outside App Market?",
                        answer: (
                          <p>
                            Yes. Go to{" "}
                            <strong>
                              "Remote Management" → "Configuration Deployment" →
                              "Function Settings"
                            </strong>{" "}
                            and set{" "}
                            <ZoomableTextLink
                              href="/products/ums/app/app_disable_third_party.png"
                              imageAlt="Disable third party app"
                            >
                              "ThirdPartyApplication Installation Disable"
                            </ZoomableTextLink>{" "}
                            to <strong>Yes</strong>.
                          </p>
                        ),
                      },
                      {
                        question:
                          "What happens if I install third-party apps after disabling it?",
                        answer: (
                          <p>
                            Installation will fail with:
                            <br />
                            <code>
                              Failure [INSTALL_FAILED_INVALID_APK: not allow to
                              install third part app]
                            </code>
                          </p>
                        ),
                      },
                      {
                        question: "Can I uninstall an app remotely?",
                        answer: (
                          <ul>
                            <li>
                              • Go to <strong>"Remote Management"</strong>.
                            </li>
                            <li>
                              • Enter the{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_uninstall_app.png"
                                imageAlt="Uninstall App"
                              >
                                <strong>Package Name / App Name</strong>
                              </ZoomableTextLink>{" "}
                              of the application.
                            </li>
                            <li>• Execute the uninstall action remotely.</li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is the Banner used for?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_banner.png"
                                imageAlt="App banner"
                              >
                                Banner
                              </ZoomableTextLink>{" "}
                              is an image displayed on the{" "}
                              <strong>App Market Home Page</strong>.
                            </li>
                            <li>• It supports a hyperlink.</li>
                            <li>
                              • You can customize it to any URL (e.g. business
                              website).
                            </li>
                            <li>
                              • Users will be redirected once they click the
                              banner.
                            </li>
                            <li>
                              (Note: This requires any browser installed in
                              terminal. e.g. Chrome or U-Browser)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How can I remotely configure an App?",
                        answer: (
                          <ul>
                            <li>
                              • It is recommended to implement{" "}
                              <strong>FileObserver</strong> in your app.
                            </li>
                            <li>
                              • Use{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_file_distribution.png"
                                imageAlt="File Distribution"
                              >
                                File Distribution
                              </ZoomableTextLink>{" "}
                              in UMS to push config files.
                            </li>
                            <li>
                              • The app detects file changes and updates
                              configuration automatically.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How to deploy a web-based app?",
                        answer: (
                          <ul>
                            <li>
                              • Use <strong>UStage</strong> and{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_configuration_management.png"
                                imageAlt="Configuration Management"
                              >
                                Configuration Management
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>
                              • Push a <strong>shortcut</strong> to Enterprise
                              Launcher.
                            </li>
                            <li>
                              • This allows launching web apps like native apps.
                            </li>
                          </ul>
                        ),
                      },
                    ],
                  },
                ]}
              />
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

              <div className="mt-6" />

              <FaqSection
                codeBlockTitle="Frequently Asked Questions:"
                codeBlockDescription="Click any question below to expand the answer."
                askAiScope="ums"
                groups={[
                  {
                    title: "",
                    items: [
                      {
                        question:
                          "What can I see in the Remote Management page?",
                        answer: (
                          <ul>
                            <li>
                              • You can view the online status of terminals.
                              (This is the status of MQTT, which is the Push
                              Service of UMS)
                            </li>
                            <li>
                              • You can also check their network status and
                              battery status.
                            </li>
                            <li>
                              • You can filter terminals by <strong>SN</strong>{" "}
                              or <strong>terminal model</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I check detailed information of a terminal?",
                        answer: (
                          <ul>
                            <li>
                              • Go to <strong>"Remote Management"</strong>.
                            </li>
                            <li>
                              • Click{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_terminal_details.png"
                                imageAlt="Device information"
                              >
                                <strong>Device Information</strong>
                              </ZoomableTextLink>{" "}
                              on the right side of the target terminal.
                            </li>
                            <li>
                              • You can then view firmware version, current
                              location, memory usage, storage usage, network
                              information, and application information(AppName,
                              AppVersion, AppSize).
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I export device information in batch?",
                        answer: (
                          <ul>
                            <li>
                              • Click{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_export_in_batch.png"
                                imageAlt="Batch Manage"
                              >
                                "Batch Manage"
                              </ZoomableTextLink>{" "}
                              .
                            </li>
                            <li>• Select the target group.</li>
                            <li>
                              • Choose <strong>"Export Device Info"</strong>.
                            </li>
                            <li>
                              • Click <strong>"Next"</strong>.
                            </li>
                            <li>
                              • The file will be downloaded automatically in the
                              browser.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I execute remote operations on terminals?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_operate_single.png"
                                imageAlt="Manual Selection"
                              >
                                <strong>Manual Selection: </strong>
                              </ZoomableTextLink>{" "}
                              check the target terminals, then click Operate in
                              Batches .
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_operate_in_batch.png"
                                imageAlt="Operate in Batches"
                              >
                                <strong>By Group: </strong>
                              </ZoomableTextLink>{" "}
                              click <strong>"Batch Manage"</strong>, then select
                              the operation and the target group.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What remote operations are supported in UMS?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_freeze_device.png"
                                imageAlt="Freeze device"
                              >
                                Freeze
                              </ZoomableTextLink>{" "}
                              or unfreeze device
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_push_message.png"
                                imageAlt="Send message"
                              >
                                Send a message
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_file_distribution.png"
                                imageAlt="Push/Distribute/Send a file"
                              >
                                Push/Distribute/Send a file
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/app/app_uninstall_app.png"
                                imageAlt="Uninstall Application"
                              >
                                Uninstall Application
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>• Move devices to another group</li>
                            <li>
                              • Extract system log: only very recent(several
                              minutes) logcat will be recorded. You can download
                              the log{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_remote_log_download.png"
                                imageAlt="Remote Log Download"
                              >
                                Here
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>• Restart device</li>
                            <li>• Shut down device</li>
                            <li>• Ring device</li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I check whether a remote task succeeded or failed?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_operate_log.png"
                                imageAlt="Remote Log"
                              >
                                <strong>"Remote Log"</strong>
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>
                              • Click <strong>"Details"</strong> to check the
                              task status.
                            </li>
                            <li>
                              • You can see whether the task is still running,
                              has succeeded, or has failed.
                            </li>
                            <li>• You can also export the report if needed.</li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is Device Restore used for?",
                        answer: (
                          <ul>
                            <li>
                              {" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_device_restore.png"
                                imageAlt="Device Restore"
                              >
                                <strong>Device Restore: </strong>
                              </ZoomableTextLink>
                            </li>
                            <li>
                              • You can <strong>Factory Reset / Wipe</strong> a
                              terminal if needed.
                            </li>
                            <li>
                              • You can also{" "}
                              <strong>Delete the Lock password</strong> if it
                              was forgotten.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I remotely extract logs or files from a terminal?",
                        answer: (
                          <ul>
                            <li>
                              • Go to <strong>"Log Management"</strong>.
                            </li>
                            <li>
                              • Click <strong>"Add Log Task"</strong>.
                            </li>
                            <li>
                              • Select the{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_log_select_sn.png"
                                imageAlt="Log Target Terminals"
                              >
                                Target Terminals
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>
                              • Choose <strong>UMS log</strong>,{" "}
                              <strong>System log</strong>, or{" "}
                              <strong>Specified File</strong>.
                            </li>
                            <li>
                              ==={" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_ums_log.png"
                                imageAlt="UMS Log"
                              >
                                UMS Log
                              </ZoomableTextLink>
                              : The Log of UMS with the retention time specified
                              in "Remote Management" → "Device Configuration" →
                              "Device log retention time". This Log is helpful
                              for analysis of UMS-related problems.
                            </li>
                            <li>
                              ==={" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_system_log.png"
                                imageAlt="System Log"
                              >
                                System Log
                              </ZoomableTextLink>
                              : You can specify the starting time of the System
                              Log Recording, as well as how long will the System
                              Log Recording be. This Log is helpful for analysis
                              of System-related problems.
                            </li>
                            <li>
                              ==={" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_specified_file.png"
                                imageAlt="Specified File"
                              >
                                Specified File
                              </ZoomableTextLink>
                              : You can extract any specified folder from the
                              terminal(Only whole folder) using this approach.
                              e.g., Log file of your own App.
                            </li>
                            <li>
                              • After the terminal uploads the file, you can
                              download it from the{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_download_log.png"
                                imageAlt="Download Log"
                              >
                                Here
                              </ZoomableTextLink>{" "}
                              anytime.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I push WiFi settings(e.g. Wifi Name/SSID, and password) remotely?",
                        answer: (
                          <div>
                            Yes. In <strong>"Configuration Deployment"</strong>,
                            you can push the WiFi SSID and password to terminals{" "}
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_wifi_settings.png"
                              imageAlt="WiFi settings"
                            >
                              Here
                            </ZoomableTextLink>{" "}
                            so they will connect to that WiFi automatically.
                          </div>
                        ),
                      },
                      {
                        question: "What is WiFi Whitelist used for?",
                        answer: (
                          <div>
                            WiFi Whitelist is used to restrict the terminal’s
                            WiFi options to only the WiFi Names(SSIDs) that you
                            set{" "}
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_wifi_whitelist.png"
                              imageAlt="WiFi Whitelist"
                            >
                              Here
                            </ZoomableTextLink>{" "}
                            . (Pushed WiFi settings will be included
                            automatically)
                          </div>
                        ),
                      },
                      {
                        question:
                          "What basic device settings can I deploy remotely?",
                        answer: (
                          <ul>
                            <li>
                              You can deploy in "Remote Management" →
                              "Configuration Deployment" →{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_function_settings.png"
                                imageAlt="Function Settings"
                              >
                                "Function Settings"
                              </ZoomableTextLink>{" "}
                            </li>
                            <li>• Disable Home Button</li>
                            <li>• Disable Dropdown Menu(Status Bar)</li>
                            <li>• Disable Input Method</li>
                            <li>• Disable third-party installation</li>
                            <li>• Disable USB</li>
                            <li>• Disable ADB(USB debugging)</li>
                            <li>• Disable Bluetooth</li>
                            <li>• Disable WiFi</li>
                            <li>• Disable App Uninstall</li>
                            <li>• Disable third-party installation</li>
                            <li>• And more</li>
                          </ul>
                        ),
                      },
                      {
                        question: "Can I deploy APN settings remotely?",
                        answer: (
                          <p>
                            Yes. UMS supports deploying{" "}
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_apn_settings.png"
                              imageAlt="APN Configuration"
                            >
                              APN Configuration
                            </ZoomableTextLink>{" "}
                            to terminals remotely.
                          </p>
                        ),
                      },
                      {
                        question: "Can I send Android intents through UMS?",
                        answer: (
                          <p>
                            Yes. UMS supports sending{" "}
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_send_script.png"
                              imageAlt="Android Intents"
                            >
                              Android Intents(Activity, Service, Broadcast)
                            </ZoomableTextLink>{" "}
                            when needed. ("Remote Management" → "Configuration
                            Deployment" → "Send Script")
                          </p>
                        ),
                      },
                      {
                        question:
                          "What's the difference between Operation and Deployment Rules?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>Operation:</strong> is a{" "}
                              <strong>one-time task</strong>.
                            </li>
                            <li>
                              === The device executes it once, and the task is
                              completed.
                            </li>
                            <li>
                              === It will{" "}
                              <strong>not run again automatically</strong>.
                            </li>
                            <li>
                              • <strong>Deployment Rules:</strong> represent the{" "}
                              <strong>desired configuration state</strong> of a
                              device.
                            </li>
                            <li>
                              === The device will continuously ensure its
                              configuration matches the pushed rule.
                            </li>
                            <li>
                              === If the device changes its group, it will stop
                              following the old configuration and apply the{" "}
                              <strong>new group's configuration</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I deploy applications remotely or set application whitelist in Remote Management?",
                        answer: (
                          <p>
                            Yes. In{" "}
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_app_management.png"
                              imageAlt="Application Management"
                            >
                              "Application Management"
                            </ZoomableTextLink>{" "}
                            , you can <strong>Deploy Applications</strong> and
                            also set the <strong>App whitelist</strong>.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Does UMS support GPS locationing of terminals or geofencing?",
                        answer: (
                          <ul>
                            <li>
                              • Yes. UMS supports GPS locationing of terminals
                              and geofencing in{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_location_management.png"
                                imageAlt="Location Management"
                              >
                                "Location Management"
                              </ZoomableTextLink>{" "}
                              .
                            </li>
                            <li>• You can monitor terminal locations.</li>
                            <li>
                              • You can set geofencing rule remotely, including
                              Fench Range, Actions(Disable Network,{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_geofencing_lock.png"
                                imageAlt="Geofencing Lock"
                              >
                                "Freeze Device"
                              </ZoomableTextLink>
                              , Ring Device) to be done when out of range,
                              E-Mail that receives notification when out of
                              range.
                            </li>
                            <li>
                              • You can view all the geofencing warning records
                              in the{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_geofencing_warning_records.png"
                                imageAlt="Fench Warning Record"
                              >
                                "Fench Warning Record"
                              </ZoomableTextLink>{" "}
                              page.
                            </li>
                            <li>
                              (Note: the current minimal Fence Radius can be set
                              is 50 meters)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is Device Configuration used for?",
                        answer: (
                          <ul>
                            <li>
                              • You can choose an existing{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_device_configuration.png"
                                imageAlt="Device Configuration"
                              >
                                Device Configuration
                              </ZoomableTextLink>{" "}
                              or use a{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_device_configuration_custom.png"
                                imageAlt="Device Configuration Custom"
                              >
                                Custom one
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>
                              • This controls how terminals communicate with the
                              UMS server and how logs are handled.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What does polling time mean?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_polling_time.png"
                                imageAlt="Polling time"
                              >
                                Polling time
                              </ZoomableTextLink>{" "}
                              means how often terminals send polling
                              requests(https) to the UMS server.
                            </li>
                            <li>
                              • If you want <strong>less data usage</strong>,
                              increase the polling time. (Minimum is 60 minutes)
                            </li>
                            <li>
                              • If you want{" "}
                              <strong>more frequent updates</strong>, decrease
                              the polling time. (Maximum is 1440 minutes)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What does device log retention time mean?",
                        answer: (
                          <div>
                            <ZoomableTextLink
                              href="/products/ums/remote/remote_ums_log_retention_time.png"
                              imageAlt="Device log retention time"
                            >
                              Device log retention time
                            </ZoomableTextLink>{" "}
                            means how long the UMS log is stored on the terminal
                            before being deleted.
                          </div>
                        ),
                      },
                      {
                        question: "What is Stage Management used for?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_configuration_management.png"
                                imageAlt="Stage Management"
                              >
                                Stage Management
                              </ZoomableTextLink>{" "}
                              only works with <strong>U-Stage</strong>.
                            </li>
                            <li>
                              • U-Stage is a specialized configuration app
                              developed by UROVO.
                            </li>
                            <li>
                              • It allows you to push many kinds of
                              configurations beyond the standard options already
                              covered in UMS. (e.g., Settings, Scanner Settings,
                              and etc.)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What can I customize in System Customization?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_boot_animation.png"
                                imageAlt="Boot animation"
                              >
                                Boot animation
                              </ZoomableTextLink>{" "}
                              : You need to upload the animation that is of the
                              correct resolution.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_kiosk_mode.png"
                                imageAlt="Kiosk Mode"
                              >
                                Kiosk Mode
                              </ZoomableTextLink>{" "}
                              : This is used to set a certain App in Kiosk
                              Mode.(Meaning can't exit that App without
                              password)
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_auto_start_application.png"
                                imageAlt="Auto-start application"
                              >
                                Auto-start application
                              </ZoomableTextLink>{" "}
                              : This is used to set a certain App to start
                              automatically when device boots up.
                            </li>
                            <li>
                              • Default launcher: This is used to set an
                              Application as the launcher of the device.
                            </li>
                            <li>
                              ==={" "}
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_custom_desktop.png"
                                imageAlt="Custom Template"
                              >
                                Custom Template
                              </ZoomableTextLink>{" "}
                              : You can upload an Apk which will be set as the
                              default launcher.
                            </li>
                            <li>
                              === Standard Template: This requires the presence
                              of Urovo's Enterprise Launcher. You can upload the
                              configuration file(
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_standard_desktop_file_upload.png"
                                imageAlt="Configuration File Upload"
                              >
                                Configuration File Upload
                              </ZoomableTextLink>
                              ) or use the default template(
                              <ZoomableTextLink
                                href="/products/ums/remote/remote_standard_desktop_standard.png"
                                imageAlt="Standard Configuration"
                              >
                                Standard Configuration
                              </ZoomableTextLink>
                              ) to remotely configure it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "Does UMS support Remote Desktop?",
                        answer: (
                          <ul>
                            <li>
                              • Yes, UMS supports{" "}
                              <strong>Remote Desktop</strong>.
                            </li>
                            <li>
                              • The built-in remote desktop capability is based
                              on <strong>Awesun</strong>.
                            </li>
                            <li>
                              • If you want to integrate a{" "}
                              <strong>
                                third-party Remote Desktop service
                              </strong>
                              , adaptation is required.
                            </li>
                          </ul>
                        ),
                      },
                    ],
                  },
                ]}
              />
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

              <div className="mt-6" />

              <FaqSection
                codeBlockTitle="Frequently Asked Questions:"
                codeBlockDescription="Click any question below to expand the answer."
                askAiScope="ums"
                groups={[
                  {
                    title: "",
                    items: [
                      {
                        question: "What is Authorization Control used for?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_authorization_control.png"
                                imageAlt="Authorization Control"
                              >
                                Authorization Control
                              </ZoomableTextLink>{" "}
                              is used to create and manage{" "}
                              <strong>operator accounts</strong> for your
                              organization.
                            </li>
                            <li>
                              • It allows multiple people to work together in
                              the same UMS organization.
                            </li>
                            <li>
                              • You can also adjust permissions, transfer
                              administrator permission, and remove unused
                              operator accounts.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How do I create an operator account in UMS?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <strong>
                                "Account Center" → "Authorization Control"
                              </strong>
                              .
                            </li>
                            <li>
                              • Click <strong>"Add"</strong>.
                            </li>
                            <li>• Enter the new email address.</li>
                            <li>
                              • Click{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_add_operator.png"
                                imageAlt="Add Operator"
                              >
                                "Confirm"
                              </ZoomableTextLink>{" "}
                              .
                            </li>
                            <li>
                              • The account will be activated after the user
                              confirms registration from the email.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I change the permissions of an operator account?",
                        answer: (
                          <ul>
                            <li>
                              • Yes, you can adjust the{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_operator_permissions.png"
                                imageAlt="Operator Permission"
                              >
                                Permission
                              </ZoomableTextLink>{" "}
                              setup of an operator account at any time.
                            </li>
                            <li>
                              • It is recommended to grant only the permissions
                              that are necessary in order to reduce security
                              risks.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I transfer administrator permission to another account?",
                        answer: (
                          <ul>
                            <li>
                              • Yes, you can{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_transfer_admin.png"
                                imageAlt="transfer administrator permission"
                              >
                                transfer administrator permission
                              </ZoomableTextLink>{" "}
                              to any operator account if needed.
                            </li>
                            <li>
                              • After transfer, your current account will lose
                              administrator permission.
                            </li>
                            <li>
                              • Please be <strong>CAREFUL</strong> before
                              performing this action.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "Can I delete an operator account?",
                        answer: (
                          <p>
                            Yes. If an operator account is no longer needed, you
                            can delete it anytime by clicking the{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_remove_operator.png"
                              imageAlt="Remove Operator"
                            >
                              "Remove"
                            </ZoomableTextLink>{" "}
                            button on the right side.
                          </p>
                        ),
                      },
                      {
                        question:
                          "What is the difference between an operator account and a sub-account?",
                        answer: (
                          <ul>
                            <li>
                              • <strong>Operator account:</strong> belongs to
                              the same organization and helps multiple users
                              work together in the same UMS account.
                            </li>
                            <li>
                              • <strong>Sub-account:</strong> represents another
                              organization and can only manage terminals
                              distributed to that sub-organization.
                            </li>
                            <li>
                              === A sub-account cannot access terminals
                              belonging to other organizations.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "What is a sub-account used for?",
                        answer: (
                          <ul>
                            <li>
                              • A sub-account is used when you want to
                              distribute terminals to another organization and
                              let their people manage those terminals in UMS.
                            </li>
                            <li>
                              • This ensures each organization can only manage
                              its own terminals.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question: "How do I create a sub-account?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <strong>
                                "Sub-account" →{" "}
                                <ZoomableTextLink
                                  href="/products/ums/account/account_create_sub_accounts.png"
                                  imageAlt="Create sub-accounts"
                                >
                                  "Sub-Account Brief"
                                </ZoomableTextLink>
                              </strong>
                            </li>
                            <li>
                              • Then create either a{" "}
                              <strong>controlled sub-account</strong> or an{" "}
                              <strong>independent sub-account</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "How do I distribute terminals to a sub-account?",
                        answer: (
                          <ul>
                            <li>
                              • Go to{" "}
                              <strong>
                                "Device Manager" → "Distribute Device"
                              </strong>
                              .
                            </li>
                            <li>
                              • You can distribute terminals either{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_distribute_device_manually.png"
                                imageAlt="Distribute device manually"
                              >
                                manually
                              </ZoomableTextLink>{" "}
                              one by one or{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_distribute_device_in_batch.png"
                                imageAlt="Distribute devices in batch"
                              >
                                in batch
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>
                              • For batch distribution, download the template,
                              fill in the table, and upload it.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I change the sub-account owner of a terminal after distribution?",
                        answer: (
                          <ul>
                            <li>
                              • Yes. Click{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_distribute_device_replace.png"
                                imageAlt="Replace device"
                              >
                                "Replace the Sub-account"
                              </ZoomableTextLink>
                              .
                            </li>
                            <li>• Select the new sub-organization.</li>
                            <li>
                              • Click <strong>"Distribute"</strong>.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can I revoke terminal distribution from a sub-account?",
                        answer: (
                          <p>
                            Yes. You can revoke the distribution of a terminal
                            by clicking{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_distribute_device_unbind.png"
                              imageAlt="Unbind device"
                            >
                              "Unbind"
                            </ZoomableTextLink>
                            . This applies to both controlled and independent
                            sub-accounts.
                          </p>
                        ),
                      },
                      {
                        question:
                          "What is the difference between a controlled sub-account and an independent sub-account?",
                        answer: (
                          <ul>
                            <li>
                              • The main difference is whether the parent
                              account can still access and manage the
                              sub-account platform.
                            </li>
                            <li>
                              • For a{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_controlled_to_manage.png"
                                imageAlt="Controlled Sub-account To Manage"
                              >
                                Controlled Sub-account
                              </ZoomableTextLink>
                              , the parent account can click{" "}
                              <strong>"To Manage"</strong> and enter the
                              platform.
                            </li>
                            <li>
                              • For an{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_independent_no_operate.png"
                                imageAlt="Independent Sub-account No Operate"
                              >
                                Independent Sub-account
                              </ZoomableTextLink>
                              , there is no <strong>"To Manage"</strong> option,
                              so the parent account cannot enter the platform.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can a controlled sub-account upload applications?",
                        answer: (
                          <p>
                            No. A controlled sub-account cannot upload
                            applications freely. For example, there is{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_controlled_no_app_upload.png"
                              imageAlt="Controlled No App Upload.png"
                            >
                              <strong>NO</strong> "App Upload"
                            </ZoomableTextLink>{" "}
                            option in its platform.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can an independent sub-account upload and publish applications?",
                        answer: (
                          <p>
                            Yes. An independent sub-account can upload and
                            publish applications freely.
                          </p>
                        ),
                      },
                      {
                        question:
                          "What is the difference in account creation between controlled and independent sub-accounts?",
                        answer: (
                          <ul>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_create_independent_account.png"
                                imageAlt="Independent Sub-account No Operate"
                              >
                                Independent Sub-account:
                              </ZoomableTextLink>{" "}
                              you must enter an email address during creation.
                            </li>
                            <li>
                              •{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_create_controlled_account.png"
                                imageAlt="Controlled Sub-account To Manage"
                              >
                                Controlled Sub-account:
                              </ZoomableTextLink>{" "}
                              there is no email field during creation.
                            </li>
                            <li>
                              • If login access is needed for a controlled
                              sub-account, you must enter that platform and
                              create an{" "}
                              <ZoomableTextLink
                                href="/products/ums/account/account_controlled_create_operator.png"
                                imageAlt="Controlled Create Operator"
                              >
                                Operator Account
                              </ZoomableTextLink>{" "}
                              there.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "Can the parent account access a controlled sub-account directly?",
                        answer: (
                          <p>
                            Yes. For a controlled sub-account, the parent
                            account can click{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_controlled_to_manage.png"
                              imageAlt="Controlled Sub-account To Manage"
                            >
                              "To Manage"
                            </ZoomableTextLink>{" "}
                            to enter its platform and perform operations there.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Can the parent account access an independent sub-account directly?",
                        answer: (
                          <p>
                            No. For an independent sub-account, the parent
                            account cannot enter its platform, because there is{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_independent_no_operate.png"
                              imageAlt="Independent Sub-account No Operate"
                            >
                              <strong>NO</strong> "To Manage"
                            </ZoomableTextLink>{" "}
                            option.
                          </p>
                        ),
                      },
                      {
                        question:
                          "Are there different types of controlled sub-accounts?",
                        answer: (
                          <p>
                            Yes. There are{" "}
                            <ZoomableTextLink
                              href="/products/ums/account/account_controlled_four_types.png"
                              imageAlt="Four types Controlled Sub-account"
                            >
                              four types of controlled accounts
                            </ZoomableTextLink>{" "}
                            . Although none of them can upload applications like
                            an independent account, their permissions regarding
                            application publishing are different.
                          </p>
                        ),
                      },
                      {
                        question:
                          'What is the "Completely independent and free App market"(first) controlled-account application mode?',
                        answer: (
                          <ul>
                            <li>
                              • The sub-account can freely choose which
                              applications to publish to App Market.
                            </li>
                            <li>
                              • The selectable range is the{" "}
                              <strong>full uploaded application list</strong> in
                              the parent account.
                            </li>
                            <li>
                              • The sub-account still cannot upload new
                              applications.
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          'What is the "Clone the Apps of the parent account"(second) controlled-account application mode?',
                        answer: (
                          <ul>
                            <li>
                              • The published application list of the
                              sub-account is exactly the same as the parent
                              account.
                            </li>
                            <li>
                              • It updates automatically when the parent updates
                              its publish list.
                            </li>
                            <li>• The sub-account cannot change it.</li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          'What is the "Select from the App market of the parent account"(third) controlled-account application mode?',
                        answer: (
                          <ul>
                            <li>
                              • The sub-account can customize its published
                              application list.
                            </li>
                            <li>
                              • But the selectable range is not the full
                              uploaded application list of the parent account.
                            </li>
                            <li>
                              • The selectable range is only the{" "}
                              <strong>
                                published applications of the parent account
                              </strong>
                              .
                            </li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          'What is the "Parent account sets up Apps for sub-account"(fourth) controlled-account application mode?',
                        answer: (
                          <ul>
                            <li>
                              • The published application list is fully
                              controlled by the parent account.
                            </li>
                            <li>• The sub-account cannot change it at all.</li>
                          </ul>
                        ),
                      },
                      {
                        question:
                          "What is the default controlled-account application mode?",
                        answer: (
                          <p>
                            The <strong>fourth mode</strong> is the default
                            option. You can still change it later and choose the
                            most suitable mode for each sub-organization.
                          </p>
                        ),
                      },
                    ],
                  },
                ]}
              />
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
