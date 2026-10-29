import React from "react";
import type { Metadata } from "next";
import { FacilitiesClient } from "@/components/facilities/FacilitiesClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Fasilitas & Lingkungan Sekitar | ${siteConfig.projectName} Cisauk`,
  description: `Informasi lengkap fasilitas internal perumahan ${siteConfig.projectName} serta akses transportasi stasiun KRL Cisauk, gerbang tol, pusat perbelanjaan, dan faskes terdekat.`,
  openGraph: {
    title: `Fasilitas & Aksesibilitas | ${siteConfig.projectName}`,
    description: `Kenali fasilitas internal kawasan dan sarana publik di Cisauk & BSD City yang mengelilingi perumahan Grand Artha Mulya.`,
  },
};

export default function FasilitasPage() {
  return <FacilitiesClient />;
}
