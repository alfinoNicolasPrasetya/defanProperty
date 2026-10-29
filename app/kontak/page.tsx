import React from "react";
import type { Metadata } from "next";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Hubungi Sales & Jadwal Survei | ${siteConfig.brandName}`,
  description: `Hubungi sales advisor resmi ${siteConfig.projectName} Cisauk melalui WhatsApp atau formulir konsultasi. Jadwalkan survei lokasi dan dapatkan informasi simulasi KPR.`,
  openGraph: {
    title: `Kontak & Konsultasi | ${siteConfig.brandName}`,
    description: `Konsultasi gratis rumah idaman di Grand Artha Mulya Cisauk bersama ${siteConfig.brandName}.`,
  },
};

export default function KontakPage() {
  return <ContactFormClient />;
}
