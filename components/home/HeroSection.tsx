import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";

export function HeroSection() {
  const whatsappUrl = getGeneralInquiryUrl();

  return (
    <section className="relative w-full bg-navy overflow-hidden">
      {/* Background Real Project Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/properties/tulip-1.jpg"
          alt="Grand Artha Mulya Cisauk Real Project Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 filter brightness-95"
        />
        {/* Gradients to guarantee high contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow & Location Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40">
              DEFAN PROPERTY PRESENTS
            </span>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 hover:text-gold bg-white/10 hover:bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Grand Artha Mulya · Cisauk, Kab. Tangerang</span>
            </a>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Temukan Rumah untuk Cerita Baru Anda
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Kenali <span className="text-white font-semibold">{siteConfig.projectName}</span> di Cisauk, Kabupaten Tangerang. Tersedia pilihan unit <strong className="text-gold">Sakura</strong>, <strong className="text-gold">Rose</strong>, dan <strong className="text-gold">Tulip</strong> dengan harga plafon mulai dari <strong className="text-white">Rp 419,6 Juta</strong>.
          </p>

          {/* Value points badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-300 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
              <span>Unit Siap Huni & Real Project</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
              <span>Akses Dekat KRL Cisauk & Tol</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
              <span>Konsultasi & Simulasi KPR Transparan</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href="/perumahan"
              variant="gold"
              size="lg"
              className="gap-2.5 justify-center shadow-lg"
            >
              <span>Lihat Pilihan Rumah</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              className="gap-2.5 justify-center shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi via WhatsApp</span>
            </Button>
          </div>

          {/* Note */}
          <p className="mt-8 text-[11px] text-gray-400">
            * Pilihan tipe rumah resmi: Sakura (35/60), Rose (40/66), dan Tulip (45/70). Dapatkan simulasi angsuran resmi langsung dari konsultan kami.
          </p>
        </div>
      </div>
    </section>
  );
}
