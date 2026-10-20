import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naslin Akfili | Frontend Developer",
  description:
    "Frontend developer based in Aceh, Indonesia. Explore Naslin Akfili's portfolio of responsive websites built with Next.js, React, and TypeScript.",
  authors: [{ name: "Naslin Akfili" }],
  creator: "Naslin Akfili",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Naslin Akfili Portfolio",
    title: "Naslin Akfili | Frontend Developer",
    description:
      "Frontend developer based in Aceh, Indonesia. Explore Naslin Akfili's portfolio of responsive websites built with Next.js, React, and TypeScript.",
  },
  twitter: {
    card: "summary",
    title: "Naslin Akfili | Frontend Developer",
    description:
      "Frontend developer based in Aceh, Indonesia. Explore Naslin Akfili's portfolio of responsive websites built with Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
