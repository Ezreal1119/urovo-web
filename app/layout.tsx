import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppNavbar } from "@/components/layout/Navbar";
import { PageShell } from "@/components/layout/PageContainer";
import AppSidebar from "@/components/layout/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P@trick-Urovo",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="h-full">
        <PageShell className="h-screen">
          <div className="grid h-full grid-rows-[auto_1fr]">
            <AppNavbar />

            <div className="flex min-h-0">
              <AppSidebar />
              <main className="min-h-0 flex-1">{children}</main>
            </div>
          </div>
        </PageShell>
      </body>
    </html>
  );
}
