import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Home,
  MessageCircle,
  Calendar,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  CreditCard,
  Building,
  ArrowRight,
  Info,
  Compass,
  ExternalLink,
} from "lucide-react";
import { propertiesData, PropertyUnit } from "@/data/properties";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";
import {
  getPropertyInquiryUrl,
  getSurveyInquiryUrl,
} from "@/lib/whatsapp";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { PropertySpecifications } from "@/components/properties/PropertySpecifications";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/ui/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return propertiesData.map((prop) => ({
    slug: prop.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const property = propertiesData.find((p) => p.slug === params.slug);
  if (!property) {
    return {
      title: "Unit Tidak Ditemukan",
    };
  }

  return {
    title: `${property.name} - ${property.clusterName} Cisauk`,
    description: `Detail spesifikasi dan harga ${property.name} (${property.unitType}) di ${siteConfig.projectName}, Cisauk. Luas Tanah ${property.specs.landArea}m², Luas Bangunan ${property.specs.buildingArea}m², ${property.specs.bedrooms} Kamar Tidur.`,
    openGraph: {
      title: `${property.name} | ${siteConfig.projectName} Cisauk`,
      description: property.description,
      images: property.images[0]?.url ? [{ url: property.images[0].url }] : [],
    },
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = propertiesData.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const otherProperties = propertiesData
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  const whatsappInquiryUrl = getPropertyInquiryUrl(
    property.clusterName,
    property.name
  );
  const surveyUrl = getSurveyInquiryUrl(
    `${property.clusterName} (${property.name})`
  );

  return (
    <div className="py-10 sm:py-14 bg-ivory/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-muted flex-wrap">
            <li>
              <Link href="/" className="hover:text-navy flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li>
              <Link href="/perumahan" className="hover:text-navy transition-colors">
                Perumahan
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li className="font-semibold text-navy">{property.name}</li>
          </ol>
        </nav>

        {/* Title Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-charcoal/10">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                {property.clusterName}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy/10 text-navy">
                {property.unitType}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Status: {property.status}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              {property.name}
            </h1>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted hover:text-navy mt-2 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span className="group-hover:underline underline-offset-2">
                {property.location} · Kecamatan Cisauk, Tangerang (Buka Google Maps)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-dark opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-white p-5 rounded-2xl border border-charcoal/10 shadow-subtle shrink-0 min-w-[280px]">
            <span className="text-xs text-muted block mb-0.5">
              {property.priceNote || "Harga Mulai Dari:"}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-navy">
              {property.price ? formatPrice(property.price) : "Hubungi Sales"}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Pendampingan KPR & Promo Developer</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Gallery & Details (8 cols), Right Sticky Conversion Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gallery, Specs, Purchase Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Gallery with Lightbox */}
            <PropertyGallery images={property.images} title={property.name} />

            {/* Description Editorial */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10 shadow-subtle">
              <h2 className="text-xl font-bold text-navy mb-4">
                Tentang {property.name}
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Dedicated Denah & Tata Ruang Card (Jika Tersedia) */}
            {property.floorPlanImage && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10 shadow-subtle space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-charcoal/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-1">
                      DESAIN LAYOUT RESMI
                    </span>
                    <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                      <Compass className="w-5 h-5 text-gold" />
                      <span>Denah & Tata Ruang 3D {property.name}</span>
                    </h3>
                  </div>
                  {property.specs.dimensions && (
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-navy/5 text-navy border border-navy/15 self-start sm:self-auto">
                      Dimensi Kavling: {property.specs.dimensions}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Tata letak ruangan efisien dengan sirkulasi udara optimal: 2 kamar tidur terpisah, ruang tamu, dapur & ruang makan, toilet di area tengah, serta teras, carport, dan taman depan.
                </p>

                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-ivory/50 border border-charcoal/10 shadow-inner group">
                  <Image
                    src={property.floorPlanImage}
                    alt={`Denah Tata Ruang 3D ${property.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            )}

            {/* Building Specifications */}
            <PropertySpecifications
              specs={property.specs}
              features={property.features}
            />

            {/* Skema & Persyaratan Pembelian */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10 shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gold" />
                <span>Informasi & Skema Pembelian</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-ivory/60 border border-charcoal/10">
                  <span className="text-xs text-muted block mb-1">Booking Fee</span>
                  <span className="text-base font-bold text-navy">
                    {property.bookingFee ? formatPrice(property.bookingFee) : "Hubungi Sales"}
                  </span>
                  <span className="text-[11px] text-muted block mt-1">
                    *Mengamankan nomor unit
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-ivory/60 border border-charcoal/10">
                  <span className="text-xs text-muted block mb-1">Metode Bayar</span>
                  <span className="text-base font-bold text-navy">
                    Cash & KPR
                  </span>
                  <span className="text-[11px] text-muted block mt-1">
                    Pilihan fleksibel
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-ivory/60 border border-charcoal/10">
                  <span className="text-xs text-muted block mb-1">Simulasi Angsuran</span>
                  <span className="text-base font-bold text-navy">
                    KPR Bank Rekanan
                  </span>
                  <span className="text-[11px] text-muted block mt-1">
                    Syariah & Konvensional
                  </span>
                </div>
              </div>

              {property.paymentSchemes && property.paymentSchemes.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-navy mb-2">
                    Pilihan Skema Pembayaran:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal/80">
                    {property.paymentSchemes.map((scheme, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>{scheme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Persyaratan pengajuan KPR meliputi KTP, Kartu Keluarga, NPWP, slip gaji 3 bulan terakhir / rekening koran, dan surat keterangan kerja. Defan Property siap mendampingi proses berkas hingga akad.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Lead Conversion Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-charcoal/10 shadow-card">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                KONSULTASI UNIT
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                Tertarik dengan {property.name}?
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-6">
                Dapatkan penawaran harga terbaru, ketersediaan blok unit, dan jadwalkan survei ke lokasi bersama konsultan kami.
              </p>

              {/* Action WhatsApp Buttons */}
              <div className="space-y-3">
                <Button
                  href={whatsappInquiryUrl}
                  isExternal
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center gap-2 py-3 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Harga Unit Ini</span>
                </Button>

                <Button
                  href={whatsappInquiryUrl}
                  isExternal
                  variant="gold"
                  size="md"
                  className="w-full justify-center gap-2 py-3 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cek Ketersediaan Blok</span>
                </Button>

                <Button
                  href={surveyUrl}
                  isExternal
                  variant="outline"
                  size="md"
                  className="w-full justify-center gap-2 py-3"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Jadwalkan Survei Lokasi</span>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-5 border-t border-charcoal/10 space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tanpa Biaya Konsultasi & Survei</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Didampingi Langsung oleh {siteConfig.salesName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bantuan Perhitungan Simulasi Cicilan KPR</span>
                </div>
              </div>
            </div>

            {/* Sales Profile Card with Real Photo */}
            <div className="bg-ivory rounded-2xl p-5 border border-charcoal/10 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-navy shrink-0 border-2 border-gold/40 shadow-sm">
                <Image
                  src={siteConfig.salesPhoto}
                  alt={siteConfig.salesName}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block">
                  Property Advisor Resmi
                </span>
                <h4 className="text-sm font-extrabold text-navy">{siteConfig.salesName}</h4>
                <p className="text-xs text-muted">{siteConfig.whatsappDisplay}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Recommendations */}
        {otherProperties.length > 0 && (
          <div className="mt-24 pt-12 border-t border-charcoal/10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-1">
                  REKOMENDASI LAIN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Pilihan Tipe Rumah Lainnya
                </h2>
              </div>
              <Link
                href="/perumahan"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                <span>Lihat Semua Tipe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
