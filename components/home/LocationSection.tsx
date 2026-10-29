import React from "react";
import Image from "next/image";
import { Train, Car, ShoppingBag, HeartPulse, GraduationCap, Clock, ExternalLink, MapPin } from "lucide-react";
import { strategicDestinations } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/ui/SectionHeading";

export function LocationSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Stasiun Kereta":
        return Train;
      case "Gerbang Tol":
        return Car;
      case "Pusat Perbelanjaan":
        return ShoppingBag;
      case "Kesehatan":
        return HeartPulse;
      case "Pendidikan":
        return GraduationCap;
      default:
        return MapPin;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory/50 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="AKSESIBILITAS & KONEKTIVITAS"
          title="Terhubung dengan Berbagai Destinasi Penting"
          subtitle="Kenali akses dari Grand Artha Mulya menuju sarana transportasi umum, jalan tol, pusat belanja, dan fasilitas publik di sekitar koridor Cisauk."
          align="center"
          className="mb-14"
        />

        {/* Grid Kartu Destinasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicDestinations.map((dest) => {
            const Icon = getCategoryIcon(dest.category);
            const mapsUrl =
              dest.mapUrl ||
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                dest.mapQuery || dest.name
              )}`;

            return (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-charcoal/10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/9] w-full bg-charcoal/5 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Badge Category */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-navy/90 text-white backdrop-blur-sm border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-gold" />
                      <span>{dest.category}</span>
                    </span>
                  </div>

                  {/* Prominent Duration Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-sm font-extrabold">{dest.duration}</span>
                    </div>
                    {dest.distance && (
                      <span className="text-xs text-gray-200 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                        {dest.distance}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                      {dest.note}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Moda: {dest.transitMode}</span>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-dark hover:text-navy font-semibold transition-colors"
                    >
                      <span>Cek Peta</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note & Direct Maps Action */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-charcoal/10 shadow-subtle text-xs text-muted max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left leading-relaxed flex-1">
            * Estimasi waktu tempuh dihitung menggunakan kendaraan pribadi dalam kondisi lalu lintas normal berdasarkan referensi pemetaan rute sekitar Cisauk. Durasi aktual dapat berubah sesuai situasi lalu lintas dan kondisi cuaca.
          </p>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy hover:bg-navy-soft text-white font-bold text-xs tracking-wide transition-all shadow-md shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Buka Lokasi Proyek di Google Maps</span>
            <ExternalLink className="w-3 h-3 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
