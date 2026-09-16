import type { Metadata } from "next";
import { Syne, Space_Grotesk, Instrument_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Preloader } from "@/components/common/Preloader";
import { GrainOverlay } from "@/components/common/GrainOverlay";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kott.studio"),
  title: "Kott Studio — Web Design, Development & Branding",
  description:
    "Kott Studio is a design and development studio. Websites, apps, tools, automations and brands, designed and built under one roof for clients across the USA and Europe. We draw it, then we build it.",
  applicationName: "Kott Studio",
  authors: [{ name: "Kott Studio", url: "https://kott.studio" }],
  keywords: [
    "design studio",
    "brand identity",
    "web design",
    "web development",
    "UI/UX design",
    "app development",
    "AI automation",
    "visual communications",
    "graphic design",
    "creative studio USA",
    "design studio Europe",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Kott Studio — Web Design, Development & Branding",
    description:
      "Kott Studio is a design and development studio. Websites, apps, tools, automations and brands, designed and built under one roof for clients across the USA and Europe. We draw it, then we build it.",
    url: "https://kott.studio",
    siteName: "Kott Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kott Studio — Web Design, Development & Branding",
    description:
      "Kott Studio is a design and development studio. Websites, apps, tools, automations and brands, designed and built under one roof for clients across the USA and Europe. We draw it, then we build it.",
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
      className={`${syne.variable} ${spaceGrotesk.variable} ${instrumentSans.variable} ${martianMono.variable} antialiased`}
    >
      <body className="bg-ink text-paper selection:bg-accent selection:text-white min-h-screen flex flex-col justify-between">
        <a href="#content" className="skip-link eyebrow">
          skip to content
        </a>
        <GrainOverlay />
        <Preloader />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
