import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vice Details | Premium Mobile Car Detailing in South Florida",
  description:
    "Premium mobile car detailing that comes to you. Serving Broward & Miami-Dade County. Interior, exterior, and full detail packages.",
  keywords: [
    "mobile car detailing",
    "car detailing south florida",
    "broward county detailing",
    "miami dade detailing",
    "premium car wash",
    "auto detailing",
  ],
  openGraph: {
    title: "Vice Details | Premium Mobile Car Detailing",
    description:
      "We travel to you. Professional interior & exterior detailing at your home, office, or apartment.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
