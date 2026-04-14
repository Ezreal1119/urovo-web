import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppNavbar } from "@/components/layout/app-navbar";
import { PageShell } from "@/components/layout/PageContainer";
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

          {/* <AiChatDialog /> */}
          {/* <Toaster
            position="top-right"
            richColors
            toastOptions={{
              className:
                "bg-[rgba(20,20,28,0.9)] border border-white/10 text-white backdrop-blur-xl",
            }}
          /> */}
        </PageShell>
      </body>
    </html>
  );
}
