import React from "react";
import type { Metadata } from "next";
import { CatalogClient } from "@/components/properties/CatalogClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Pilihan Hunian & Katalog Rumah | ${siteConfig.projectName}`,
  description: `Lihat katalog lengkap tipe rumah di ${siteConfig.projectName}, Cisauk, Kabupaten Tangerang. Tersedia pilihan 1 lantai dan 2 lantai dengan spesifikasi terverifikasi.`,
  openGraph: {
    title: `Pilihan Hunian & Katalog Rumah | ${siteConfig.projectName}`,
    description: `Jelajahi denah, luas tanah, dan spesifikasi bangunan rumah di Cisauk bersama ${siteConfig.brandName}.`,
  },
};

export default function PerumahanPage() {
  return <CatalogClient />;
}
