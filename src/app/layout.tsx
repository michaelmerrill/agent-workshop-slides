import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Build an Agent with Vercel",
  description:
    "Learn how to go from idea to deployed agent in under an hour using AI SDK, Next.js, and Vercel.",
  openGraph: {
    title: "Build an Agent with Vercel",
    description:
      "Learn how to go from idea to deployed agent in under an hour using AI SDK, Next.js, and Vercel.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build an Agent with Vercel",
    description:
      "Learn how to go from idea to deployed agent in under an hour using AI SDK, Next.js, and Vercel.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
