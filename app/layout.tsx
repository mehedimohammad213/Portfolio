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
  title: "mehedi ",
  description:
    "mehedi  is a Front-End Software Engineer, founder, and Quality nerd.",
  keywords:
    "mehedi , Front-end Engineer, Project Leader, Web Development, Web3, Decentralized Applications, Quality Assurance, Software Engineering, Blockchain, Cryptography",
  openGraph: {
    locale: "en_US",
    siteName: "mehedi ",
    type: "website",
    title: "mehedi ",
    description:
      "mehedi  is a Front-End Software Engineer, founder, and Quality nerd.",
    url: "https://mehedi.me",
    images: [
      {
        url: "./og-large-meik.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mehedi ",
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
