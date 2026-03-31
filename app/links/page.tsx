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
      <PageContainer>
        <PageHeader className="border-0 bg-transparent shadow-none px-0 py-0">
          <PageHeaderContent className="flex flex-col items-start">
            <div className="space-y-4">
              <PageTitle className="text-4xl md:text-5xl text-white">
                Links
              </PageTitle>

              <PageDescription className="max-w-3xl text-base leading-8 text-foreground/60">
                Download manuals, SDKs, Windows tools, and drivers for UROVO
                products.
              </PageDescription>
            </div>
          </PageHeaderContent>
        </PageHeader>

        <Divider />

        <PageMain>
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
                  href="https://mega.nz/file/TtZnHSYb#dKCT3-yCwnuU1FO52A9hTmeSERdCrO0hdUbFrDfFgRE"
                  description="Instruction on how to upgrade firmware of UROVO products. Four methods are provided. Please read README.txt for details."
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
                  href="https://mega.nz/file/qxojlZAL#PSZc4n0weIgltLkyXQ3Q-4tRFmT1EAQ4DYmeq5Ify-c"
                  description="Android SDK (including demo code and API document) for UROVO POS. [UrovoPosSdk_New_v1.0.24]"
                />
                <ResourceItem
                  title="PDA"
                  href="https://mega.nz/file/29RD2TxL#w2cLbJiXF1EHw3OlVXmOeuPaxFRXvcu-8e182uADB58"
                  description="Android SDK (including demo code and API document) for UROVO PDA. [SDK_ReleaseforAndroid_v4.2.0618]"
                />
                <ResourceItem
                  title="K388Pro"
                  href="https://mega.nz/file/KxJDwQjQ#K1SL41nq9QFonmvobrmhrePxiw5KQ3z1oYG1i__f98g"
                  description="Android SDK (including demo code and API document) for UROVO K388Pro. [K388-Print]"
                />
                <ResourceItem
                  title="RFID"
                  href="https://mega.nz/file/7gIhCZDa#3R0WCknLVr27UA7jT3SJR7q1fXDLsYypQWgXctKb9_M"
                  description="Android SDK (including demo code and API document) for UROVO RFID module. [UHF_SDK_v2.5.1230]"
                />
                <ResourceItem
                  title="FingerPrint"
                  href="https://mega.nz/file/29hynawb#VL-phT3i396GxdDqKxIkDGSPcPFyPsINNqkDFgAtOJg"
                  description="Android SDK (including demo code and API document) for UROVO fingerprint module. [Aratek_TrustFinger_v3.3.0.3_2024.11.29]"
                />
                <ResourceItem
                  title="D81Plus-D91_Non_RFID"
                  href="https://mega.nz/file/qwQ3SKyD#sUsje5IGAkv_QgehqgVcs0sFzyD6aMgftPQ_BYHyN8Q"
                  description="Android SDK (including demo code and API document) for UROVO D81Plus. [D81Plus-D91_2412]"
                />
                <ResourceItem
                  title="D81R_RFID"
                  href="https://mega.nz/file/2xojBa6Z#6fSqUzs4RQl0F5rjQ4D9C5v5_lQIUVvqAXBoerE17Zc"
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
                  href="https://mega.nz/file/X5JxlKTS#HJX-lgUeLl1dhq0CQrCrt0WFz-CzbfTr-9N3T4PS-2M"
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
                  href="https://mega.nz/file/LgomlKgL#454LYevFl4tY8e1gu0JONP6GyiCwO7q3w1lVJNymY98"
                  description="Driver for UROVO MTK terminals. [MTK-Driver-v5.2307]"
                />
                <ResourceItem
                  title="Qualcomm_driver"
                  href="https://mega.nz/file/v85AmKzI#I-uBy6RxZDCShjiL1Jin5JAX_il6MA840P0taO6iYZQ"
                  description="Driver for UROVO Qualcomm terminals. [Qualcomm_USB_Driver_v1.0]"
                />
                <ResourceItem
                  title="UniSoc_driver"
                  href="https://mega.nz/file/nlBUFSRB#2TkLdIIUaX_VPPtKRx5123QONsgYEZ7RApXOcZ1_NLs"
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
