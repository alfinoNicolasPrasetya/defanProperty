import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trees, ShieldCheck, Compass, Train, Car, Store } from "lucide-react";
import { facilitiesData } from "@/data/facilities";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export function FacilitiesOverview() {
  const internalFacilities = facilitiesData.filter((f) => f.category === "internal");
  const externalFacilities = facilitiesData.filter((f) => f.category !== "internal").slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory/50 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="LINGKUNGAN & FASILITAS"
            title="Kenyamanan Kawasan dan Fasilitas Sekitar"
            subtitle="Menyajikan pemisahan jelas antara fasilitas internal di dalam lingkungan perumahan dengan sarana publik di area Cisauk dan BSD City."
          />

          <div className="shrink-0 hidden md:block">
            <Button href="/fasilitas" variant="outline" size="md">
              <span>Jelajahi Seluruh Fasilitas</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 1. Fasilitas Internal */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
            <h3 className="text-lg font-bold text-navy">
              Fasilitas Internal Lingkungan Perumahan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internalFacilities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-navy mb-2">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-charcoal/5 text-[11px] font-semibold text-emerald-700">
                  Lingkungan Kawasan Grand Artha Mulya
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Fasilitas Publik di Sekitar */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-navy"></span>
            <h3 className="text-lg font-bold text-navy">
              Fasilitas Publik & Transportasi Sekitar Cisauk
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalFacilities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-charcoal/10 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                {item.imageUrl && (
                  <div className="relative aspect-[16/9] w-full bg-charcoal/5">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {item.distanceOrTime && (
                      <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        {item.distanceOrTime}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-gold-dark block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-navy mb-2">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/5 text-xs text-muted flex items-center justify-between">
                    <span>{item.locationName || "Area Sekitar"}</span>
                    <span className="text-gray-400">Fasilitas Publik</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Button href="/fasilitas" variant="outline" size="md" className="w-full justify-center">
            <span>Jelajahi Seluruh Fasilitas</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
