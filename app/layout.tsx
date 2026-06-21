import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mehedi.me"),
  alternates: {
    canonical: "https://mehedi.me",
  },
  title: "Mehedi Hasan — Software QA Engineer",
  description:
    "Mehedi Hasan is a Software QA Engineer specializing in automation testing, AI/LLM validation, and end-to-end quality assurance for web, mobile, and IoT applications.",
  keywords:
    "Mehedi Hasan, Software QA Engineer, Quality Assurance, Automation Testing, Playwright, Appium, API Testing, CI/CD, Agile, BDD, TDD",
  openGraph: {
    locale: "en_US",
    siteName: "Mehedi Hasan",
    type: "website",
    title: "Mehedi Hasan — Software QA Engineer",
    description:
      "Mehedi Hasan is a Software QA Engineer specializing in automation testing, AI/LLM validation, and end-to-end quality assurance for web, mobile, and IoT applications.",
    url: "https://mehedi.me",
    images: [
      {
        url: "/avatar.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan — Software QA Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
