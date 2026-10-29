import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#14283D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://defanproperty.com"),
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.projectName} Cisauk - Hunian Modern`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: `Website pemasaran resmi ${siteConfig.projectName} di Cisauk, Kabupaten Tangerang oleh ${siteConfig.brandName}. Pilihan tipe rumah modern, lokasi strategis dekat stasiun KRL Cisauk & tol.`,
  keywords: [
    "Defan Property",
    "Grand Artha Mulya",
    "Rumah Cisauk Tangerang",
    "Perumahan Dekat Stasiun Cisauk",
    "Rumah Dekat BSD",
    "Rumah 1 Lantai Cisauk",
    "Rumah 2 Lantai Tangerang",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://defanproperty.com",
    title: `${siteConfig.brandName} | ${siteConfig.projectName} Cisauk`,
    description: `Temukan hunian impian Anda di Grand Artha Mulya Cisauk. Konsultasi unit dan jadwal survei bersama ${siteConfig.brandName}.`,
    siteName: siteConfig.brandName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col font-sans bg-ivory text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
