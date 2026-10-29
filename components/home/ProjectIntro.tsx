import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home, MapPin, Check } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/ui/Button";

export function ProjectIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom Visual Editorial (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-card border border-charcoal/10 bg-ivory">
              <Image
                src="/images/properties/sakura-1.jpg"
                alt="Grand Artha Mulya Cisauk Real Unit"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold block mb-1">
                  Foto Asli Proyek
                </span>
                <p className="text-sm font-medium">
                  Grand Artha Mulya — Perumahan Modern & Siap Huni di Kawasan Cisauk.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-navy text-white p-4 sm:p-5 rounded-2xl shadow-floating border border-gold/30 hidden sm:block max-w-[220px]">
              <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">
                Defan Property
              </span>
              <p className="text-xs text-gray-200">
                Pemasaran resmi dengan pendampingan langsung ke lokasi proyek.
              </p>
            </div>
          </div>

          {/* Kolom Narasi Editorial (7 cols) */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold/30">
                TENTANG PROYEK
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-6">
                Lebih dari Sekadar Tempat Tinggal
              </h2>

              <p className="text-base text-muted leading-relaxed mb-5">
                <strong className="text-navy">{siteConfig.projectName}</strong> hadir di Cisauk, Kabupaten Tangerang, mempersembahkan hunian berkualitas siap huni dengan pilihan tipe unggulan: <strong className="text-navy">Sakura (35/60)</strong>, <strong className="text-navy">Rose (40/66)</strong>, dan <strong className="text-navy">Tulip (45/70)</strong>.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                Kawasan Cisauk terus berkembang pesat sebagai salah satu koridor hunian favorit yang berdekatan dengan BSD City. Didukung kemudahan akses transportasi kereta Stasiun KRL Cisauk dan konektivitas ruas Tol Serbaraja.
              </p>

              {/* Point-point terverifikasi */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Harga Plafon Mulai Rp 419,6 Juta</h4>
                    <p className="text-xs sm:text-sm text-muted">
                      Harga terjangkau dengan skema pembiayaan KPR fleksibel melalui bank rekanan terpercaya.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Pilihan Tipe Sakura, Rose, dan Tulip</h4>
                    <p className="text-xs sm:text-sm text-muted">
                      Desain modern tropis dan Scandinavian dengan luas tanah hingga 70 m² dan carport pribadi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Unit Nyata & Survei Lokasi Didampingi</h4>
                    <p className="text-xs sm:text-sm text-muted">
                      Calon pembeli dapat melihat langsung unit fisik yang sudah berdiri serta infrastruktur perumahan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/perumahan" variant="primary" size="md">
                  <span>Jelajahi Pilihan Rumah</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/fasilitas" variant="outline" size="md">
                  <span>Lihat Akses & Fasilitas</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
