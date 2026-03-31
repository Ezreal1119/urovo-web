import Link from "next/link";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function UmsPage() {
  return (
    <PageShell className="min-h-screen">
      <PageContainer className="gap-0">
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
              <div className="mt-6">
                <UTMSHighlightCard />
              </div>
            </PageSection>

            <section className="space-y-3 pb-5">
              <div className="space-y-2">
                <PageSectionTitle className="font-bold">
                  Product Overview Video
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
            </section>

            <Divider />

            <section>
              <div className="space-y-2">
                <PageSectionTitle className={`text-5xl ${playfair.className}`}>
                  1. App Store
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

              <div className="mt-10 space-y-6">
                <AppStoreBlock
                  title="1.1 App Upload"
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
                  title="1.2 App List"
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
                  title="1.3 Application Deployment"
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
              </div>
            </section>
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
