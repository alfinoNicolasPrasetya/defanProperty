import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Tag, Calendar, CheckCircle2, ShieldAlert } from "lucide-react";
import { promotionsData } from "@/data/promotions";
import { getPromoInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";

export function PromoSection() {
  const currentPromo = promotionsData[0];
  if (!currentPromo) return null;

  const whatsappPromoUrl = getPromoInquiryUrl(currentPromo.title);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white overflow-hidden shadow-card border border-navy-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Kolom Kiri — Visual Kampanye (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <Image
                src={currentPromo.image}
                alt={currentPromo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy" />

              {/* Promo Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold text-charcoal-900 shadow-md">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{currentPromo.badge}</span>
                </span>
              </div>

              {/* Photo Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-gray-300 drop-shadow">
                  {currentPromo.imageCaption}
                </span>
              </div>
            </div>

            {/* Kolom Kanan — Rincian Penawaran (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-2">
                  PROGRAM KHUSUS DEFAN PROPERTY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-4">
                  {currentPromo.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                  {currentPromo.description}
                </p>

                {/* Syarat & Ketentuan */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold block mb-3">
                    Ketentuan & Fasilitas Promo:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {currentPromo.terms.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Periode Promo */}
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-8">
                  <Calendar className="w-4 h-4 text-gold shrink-0" />
                  <span>{currentPromo.period}</span>
                </div>
              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
                <Button
                  href={whatsappPromoUrl}
                  isExternal
                  variant="whatsapp"
                  size="md"
                  className="gap-2 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Promo via WhatsApp</span>
                </Button>

                {currentPromo.targetUnitSlug && (
                  <Button
                    href={`/perumahan/${currentPromo.targetUnitSlug}`}
                    variant="outline"
                    size="md"
                    className="border-white/20 text-white hover:bg-white/10 justify-center gap-1.5"
                  >
                    <span>Lihat Unit Promo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
