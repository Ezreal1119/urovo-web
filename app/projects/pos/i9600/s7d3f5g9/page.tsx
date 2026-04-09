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
              backgroundImage: "url('/products/pos/i9600/i9600_Scene.png')",
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
                    i9600 (Flagship Smart POS)
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
            <PageSection>
              <PageSectionHeader>
                <div className="space-y-2">
                  <PageSectionTitle className="font-bold text-xl">
                    i9600 Related Links
                  </PageSectionTitle>
                </div>
              </PageSectionHeader>

              <div className="flex flex-col divide-y divide-white/5">
                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9600/i9600_Brochure.pdf"
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
                  <span>i9600 Brochure</span>
                  <span className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-80">
                    →
                  </span>
                </a>

                <a
                  href="https://cdn.patrick-shenzhen.org/urovo/products/i9600/i9600_Specs.pdf"
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
                  <span>i9600 Specs</span>
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
                  <span>i9600 SDK</span>
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
