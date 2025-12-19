import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agent Webinar Slides",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  metadataBase:
    process.env.NODE_ENV === "development"
      ? new URL("http://localhost:3000")
      : new URL("https://agent-webinar-slides.vercel.app"),
  openGraph: {
    title: "Agent Webinar Slides",
    description: "Created with v0",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Webinar Slides",
    description: "Created with v0",
    images: ["/og.png"],
  },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "bg-sidebar text-foreground antialiased",
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "development" && <VercelToolbar />}{" "}
      </body>
    </html>
  );
}
