import type { Metadata } from "next";
import "./globals.css";
import FloatingPhone from "@/components/layout/FloatingPhone";

export const metadata: Metadata = {
  metadataBase: new URL("https://kote.studio"),
  title: "Студія танців на Оболоні | KOTE STUDIO",
  description:
    "Танець - це рух, рух - це життя. Приходь танцювати сьогодні, щоб наповнити своє життя новими барвами. Аргентинське танго, TRX, TaBaTa, стретчинг на Оболоні.",
  keywords: [
    "танго оболонь",
    "танго київ",
    "індивідуальні уроки танго київ",
    "аргентинське танго",
    "kote studio",
    "уроки танго оболонь",
    "мілонга київ",
  ],
  openGraph: {
    title: "Студія танців на Оболоні | KOTE STUDIO",
    description:
      "Танець - це рух, рух - це життя. Приходь танцювати сьогодні, щоб наповнити своє життя новими барвами.",
    url: "https://kote.studio",
    siteName: "Kote Studio",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KOTE STUDIO",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        {children}
        <FloatingPhone />
      </body>
    </html>
  );
}
