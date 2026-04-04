import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppNavbar } from "@/components/layout/Navbar";
import { PageShell } from "@/components/layout/PageContainer";
import { AiChatDialog } from "./ai/AiChatDialog";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urovo-Tech",
  description: "Demo layout built with custom layout primitives",
  icons: {
    icon: "/patrick.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased dark`}>
      <body className="h-full">
        <PageShell>
          <div className="grid min-h-screen grid-rows-[auto_1fr]">
            <AppNavbar />
            <div className="flex min-h-0 flex-1 pt-16">
              <main className="min-h-0 flex-1">{children}</main>
            </div>
          </div>

          <AiChatDialog />
        </PageShell>
      </body>
    </html>
  );
}
