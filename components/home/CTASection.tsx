import React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl, getSurveyInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";

export function CTASection() {
  const generalUrl = getGeneralInquiryUrl();
  const surveyUrl = getSurveyInquiryUrl();

  return (
    <section className="py-20 lg:py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative subtle gold light aura */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MULAI KONSULTASI HARI INI</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
          Langkah Pertama Menuju Rumah Impian Anda
        </h2>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
          Dapatkan informasi tipe rumah, harga terbaru, ketersediaan unit, dan panduan jadwal survei langsung ke lokasi <strong className="text-white">{siteConfig.projectName}</strong> di Cisauk.
        </p>

        {/* Advisor Badge with Defan's Real Photo */}
        <div className="inline-flex items-center gap-3.5 mb-10 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/15 shadow-subtle text-left">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-gold/60 shrink-0">
            <Image
              src={siteConfig.salesPhoto}
              alt={siteConfig.salesName}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-gold block">
              {siteConfig.salesName} — {siteConfig.salesRole}
            </span>
            <span className="text-[11px] text-gray-300 block">
              Pendampingan survei lokasi & simulasi angsuran KPR gratis
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            href={generalUrl}
            isExternal
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto justify-center gap-2.5 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi via WhatsApp</span>
          </Button>

          <Button
            href={surveyUrl}
            isExternal
            variant="gold"
            size="lg"
            className="w-full sm:w-auto justify-center gap-2.5 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>Jadwalkan Survei</span>
          </Button>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Respon cepat via WhatsApp setiap hari · Konsultasi gratis tanpa biaya perantara
        </p>
      </div>
    </section>
  );
}
