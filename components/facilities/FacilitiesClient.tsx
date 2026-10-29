"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  Train,
  Car,
  Store,
  HeartPulse,
  GraduationCap,
  Trees,
  Compass,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { facilitiesData, FacilityItem } from "@/data/facilities";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl, getSurveyInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "internal" | "public_transport" | "public_shopping" | "public_health" | "public_education";

const CATEGORIES: { key: CategoryFilter; label: string; icon: any }[] = [
  { key: "all", label: "Semua Fasilitas", icon: Compass },
  { key: "internal", label: "Internal Kawasan", icon: ShieldCheck },
  { key: "public_transport", label: "Transportasi & Tol", icon: Train },
  { key: "public_shopping", label: "Belanja & Pasar", icon: Store },
  { key: "public_health", label: "Kesehatan & RS", icon: HeartPulse },
  { key: "public_education", label: "Pendidikan & Kampus", icon: GraduationCap },
];

export function FacilitiesClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredFacilities = facilitiesData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Train":
        return Train;
      case "Car":
        return Car;
      case "Store":
        return Store;
      case "ShoppingBag":
        return Store;
      case "HeartPulse":
        return HeartPulse;
      case "Stethoscope":
        return HeartPulse;
      case "GraduationCap":
        return GraduationCap;
      case "Trees":
        return Trees;
      case "ShieldCheck":
        return ShieldCheck;
      default:
        return Compass;
    }
  };

  const whatsappInquiry = getGeneralInquiryUrl();
  const surveyUrl = getSurveyInquiryUrl();

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-navy flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li className="font-semibold text-navy">Fasilitas & Lingkungan</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12 max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold/30">
            LINGKUNGAN & KONEKTIVITAS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-4">
            Fasilitas Kawasan & Kemudahan Sekitar
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Eksplorasi infrastruktur internal <strong className="text-navy">{siteConfig.projectName}</strong> serta ragam fasilitas publik unggulan di kawasan Cisauk dan BSD City yang menunjang mobilitas dan kenyamanan hidup Anda.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border",
                  isActive
                    ? "bg-navy text-white border-navy shadow-subtle"
                    : "bg-white text-charcoal/80 border-charcoal/10 hover:border-gold/40 hover:bg-ivory/50"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-gold" : "text-muted")} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredFacilities.map((item) => {
            const Icon = getIcon(item.iconName);
            const isInternal = item.category === "internal";

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-charcoal/10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual */}
                {item.imageUrl ? (
                  <div className="relative aspect-[16/10] w-full bg-ivory">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    <div className="absolute top-3 left-3">
                      <span
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-bold tracking-wide backdrop-blur-md border",
                          isInternal
                            ? "bg-gold text-charcoal-900 border-gold-dark/20"
                            : "bg-navy/90 text-white border-white/10"
                        )}
                      >
                        {item.scope}
                      </span>
                    </div>

                    {item.distanceOrTime && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{item.distanceOrTime}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2.5 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{item.locationName || "Area Cisauk & Sekitarnya"}</span>
                    </div>
                    {item.locationName && (
                      <a
                        href={
                          item.mapUrl ||
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            item.name + " " + item.locationName
                          )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold-dark hover:text-navy font-semibold transition-colors"
                      >
                        <span>Peta</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Peta & Panduan Arah */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/10 shadow-card mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                PANDUAN LOKASI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
                Akses Menuju Grand Artha Mulya Cisauk
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Berada di Kecamatan Cisauk, Kabupaten Tangerang, kawasan ini dapat diakses secara praktis melalui rute utama Jalan Raya Cisauk–Lapan, koridor BSD City, maupun exit tol Serpong–Balaraja terdekat.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 mb-8">
                <div className="p-3.5 rounded-xl bg-ivory/80 border border-charcoal/10">
                  <strong className="text-navy block mb-0.5">Rute Kereta Commuter Line:</strong>
                  Turun di Stasiun KRL Cisauk, lanjutkan perjalanan ± 10–15 menit menggunakan transportasi daring atau angkutan lokal menuju lokasi.
                </div>
                <div className="p-3.5 rounded-xl bg-ivory/80 border border-charcoal/10">
                  <strong className="text-navy block mb-0.5">Rute Kendaraan Pribadi / Tol:</strong>
                  Gunakan Tol JORR 2 / ruas Tol Serpong–Balaraja dan keluar di Gerbang Tol Legok atau koridor BSD Barat.
                </div>
              </div>

              <Button
                href={surveyUrl}
                isExternal
                variant="primary"
                size="md"
                className="gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Minta Panduan Rute & Jadwal Survei</span>
              </Button>
            </div>

            {/* Visual Direction Card */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ivory border border-charcoal/10 shadow-subtle flex flex-col items-center justify-center p-6 text-center">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Ilustrasi peta dan rute jalan Cisauk"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
                <div className="relative z-10 text-white max-w-sm">
                  <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">Grand Artha Mulya</h4>
                  <p className="text-xs text-gray-200 mb-4">
                    Kecamatan Cisauk, Kabupaten Tangerang, Banten
                  </p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold text-charcoal-900 font-bold text-xs shadow-md hover:bg-gold-light transition-colors"
                  >
                    <span>Buka Titik Area di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ingin Memastikan Jarak dan Kondisi Lingkungan?
          </h3>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto mb-8">
            Tim Defan Property siap mendampingi Anda langsung ke lokasi perumahan agar Anda dapat melihat suasana lingkungan, akses jalan, dan tipe rumah secara nyata.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={whatsappInquiry}
              isExternal
              variant="whatsapp"
              size="md"
              className="gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </Button>
            <Button
              href={surveyUrl}
              isExternal
              variant="gold"
              size="md"
              className="gap-2 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwalkan Survei Bersama Sales</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
