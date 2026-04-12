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

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function LinksPage() {
  return (
    <PageShell className="h-screen">
      <PageContainer className="gap-0">
        <PageHeader className="border-0 bg-transparent shadow-none px-0 py-0">
          <PageHeaderContent className="flex flex-col items-start">
            <div className="space-y-4">
              <PageTitle className="text-4xl md:text-5xl text-white">
                Utility Links
              </PageTitle>

              <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                Download manuals, SDKs, Windows tools, and drivers for UROVO
                products.
              </PageDescription>
            </div>
          </PageHeaderContent>
        </PageHeader>

        <Divider />

        <PageMain className="mt-8">
          <PageStack>
            <PageSection id="manual" className="scroll-mt-20">
              <PageSectionHeader>
                <PageSectionTitle className={`text-2xl ${playfair.className}`}>
                  User Manual
                </PageSectionTitle>
                <PageSectionDescription>
                  Firmware upgrade instructions and related documentation.
                </PageSectionDescription>
              </PageSectionHeader>

              <div className="space-y-4">
                <ResourceItem
                  title="Firmware_upgrade"
                  href="https://cdn.patrick-shenzhen.org/urovo/manuals/How_to_upgrade_firmware-OS_UFS_SE.zip"
                  description="Instruction on how to upgrade firmware of UROVO POS/PDA. Four methods are provided. Please read README.txt for details."
                />
              </div>
            </PageSection>

            <PageSection id="sdk" className="scroll-mt-20">
              <PageSectionHeader>
                <PageSectionTitle className={`text-2xl ${playfair.className}`}>
                  SDK
                </PageSectionTitle>
                <PageSectionDescription>
                  Android SDK packages for POS, PDA, RFID, fingerprint, and
                  other modules.
                </PageSectionDescription>
              </PageSectionHeader>

              <div className="space-y-4">
                <ResourceItem
                  title="POS"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/UrovoPosSdk_New_v1.0.24.7z"
                  description="Android SDK (including demo code and API document) for UROVO POS. [UrovoPosSdk_New_v1.0.24]"
                />
                <ResourceItem
                  title="PDA"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/SDK_ReleaseforAndroid_v4.2.0618.rar"
                  description="Android SDK (including demo code and API document) for UROVO PDA. [SDK_ReleaseforAndroid_v4.2.0618]"
                />
                <ResourceItem
                  title="Scanner"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/Scanner-SDK-20241121.zip"
                  description="Note: This SDK can not be imported together with PDA SDK, will crash otherwise. [Scanner-SDK-20241121.zip]"
                />
                <ResourceItem
                  title="RFID"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/UHF_SDK_Development_Documentation_v2.5.1230.zip"
                  description="Android SDK (including demo code and API document) for UROVO RFID module. [UHF_SDK_v2.5.1230]"
                />
                <ResourceItem
                  title="K329"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/K329-SDK_20250626.zip"
                  description="Android SDK (including demo code and API document) for UROVO RFID module. [UHF_SDK_v2.5.1230]"
                />
                <ResourceItem
                  title="K388Pro"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/K388-Print.rar"
                  description="Android SDK (including demo code and API document) for UROVO K388Pro. [K388-Print]"
                />
                <ResourceItem
                  title="FingerPrint"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/Aratek_TrustFinger_SDK_For_Android_v3.3.0.3_2024.11.29.zip"
                  description="Android SDK (including demo code and API document) for UROVO fingerprint module. [Aratek_TrustFinger_v3.3.0.3_2024.11.29]"
                />
                <ResourceItem
                  title="D81Plus-D91_Non_RFID"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/D81Plus-D91_2412.zip"
                  description="Android SDK (including demo code and API document) for UROVO D81Plus. [D81Plus-D91_2412]"
                />
                <ResourceItem
                  title="D81R_RFID"
                  href="https://cdn.patrick-shenzhen.org/urovo/sdk/D81R-RFID_2412.zip"
                  description="Android SDK (including demo code and API document) for UROVO D81R. [D81R-RFID_2412]"
                />
              </div>
            </PageSection>

            <PageSection id="tools" className="scroll-mt-20">
              <PageSectionHeader>
                <PageSectionTitle className={`text-2xl ${playfair.className}`}>
                  Windows Tools
                </PageSectionTitle>
                <PageSectionDescription>
                  Utilities for debug mode, app signing, SN loading, and Google
                  key operations.
                </PageSectionDescription>
              </PageSectionHeader>

              <div className="space-y-4">
                <ResourceItem
                  title="PCTool"
                  href="https://cdn.patrick-shenzhen.org/urovo/tools/PCTool_ALL_IN_ONE.zip"
                  description="Windows tool for switching on debug mode and app signing. [PCTool_ALL_IN_ONE_V3.25.1216.1]"
                />
                <ResourceItem
                  title="SNTool_MTK"
                  href="https://mega.nz/file/W9JFGbJA#o7v7y77UbyRG3sVMgoGZM0-txvXfKGZjula5LjL9sBc"
                  description="Windows tool for loading SN, IMEI, and Google key for MTK terminals. [SNTool_MTK_V2.25.1018.01]"
                />
                <ResourceItem
                  title="SNTool_Qualcomm"
                  href="https://mega.nz/file/j4RVSB6B#VYB2SPuHVj2E6YDxH8yp0uRBocqVncLFETK7HpiIWpY"
                  description="Windows tool for loading SN, IMEI, and Google key for Qualcomm terminals. [SNTool_QUALCOMM_V2.25.1018.01]"
                />
                <ResourceItem
                  title="Windows_Env"
                  href="https://mega.nz/file/fwwgyJSb#hsksM13xFtwzKcsEyUwUiSUJEpq4zeMovEd6jK29XfI"
                  description="Dependency files required by UROVO Windows tools."
                />
              </div>
            </PageSection>

            <PageSection id="drivers" className="scroll-mt-20">
              <PageSectionHeader>
                <PageSectionTitle className={`text-2xl ${playfair.className}`}>
                  Drivers
                </PageSectionTitle>
                <PageSectionDescription>
                  Drivers for MTK, Qualcomm, and UniSoc terminals.
                </PageSectionDescription>
              </PageSectionHeader>

              <div className="space-y-4">
                <ResourceItem
                  title="MTK_driver"
                  href="https://cdn.patrick-shenzhen.org/urovo/drivers/MTK-Driver-v5.2307.zip"
                  description="Driver for UROVO MTK terminals. [MTK-Driver-v5.2307]"
                />
                <ResourceItem
                  title="Qualcomm_driver"
                  href="https://cdn.patrick-shenzhen.org/urovo/drivers/Qualcomm_USB_Driver_v1.0.zip"
                  description="Driver for UROVO Qualcomm terminals. [Qualcomm_USB_Driver_v1.0]"
                />
                <ResourceItem
                  title="UniSoc_driver"
                  href="https://cdn.patrick-shenzhen.org/urovo/drivers/Driver_R4.20.4201.zip"
                  description="Driver for UROVO UniSoc terminals. [Driver_R4.20.4201]"
                />
              </div>
            </PageSection>

            <PageSection id="others" className="scroll-mt-20">
              <PageSectionHeader>
                <PageSectionTitle className={`text-2xl ${playfair.className}`}>
                  Others
                </PageSectionTitle>
                <PageSectionDescription>
                  Other useful Tools you might want.
                </PageSectionDescription>
              </PageSectionHeader>

              <div className="space-y-4">
                <ResourceItem
                  title="ADB"
                  href="https://developer.android.com/tools/releases/platform-tools"
                  description="Android Debug Bridge, which is used for debugging Android devices. [platform-tools]"
                />
              </div>
            </PageSection>
          </PageStack>
        </PageMain>
      </PageContainer>
    </PageShell>
  );
}

function ResourceItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl 
        border border-white/10 
        bg-white/5 
        p-4 
        transition-all duration-200
        hover:bg-white/10 
        hover:border-white/20
        hover:-translate-y-0.5
      "
    >
      <div className="flex flex-col gap-2">
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block w-fit
            text-base font-medium 
            text-white
            transition-colors
            hover:text-pink-400
          "
        >
          {title}
        </Link>

        <p className="text-sm leading-6 text-foreground/60">{description}</p>
      </div>
    </div>
  );
}
