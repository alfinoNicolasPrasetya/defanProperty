import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, ExternalLink, Instagram, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getGeneralInquiryUrl();

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Kolom 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-charcoal-900 font-bold text-base">
                D
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                DEFAN <span className="text-gold">PROPERTY</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pemasaran terpercaya perumahan <strong className="text-white">{siteConfig.projectName}</strong> di Cisauk, Kabupaten Tangerang. Komitmen kami adalah menyediakan informasi akurat, transparan, dan mendampingi Anda menemukan hunian terbaik.
            </p>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-xs text-gray-300 hover:text-gold pt-1 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="group-hover:underline underline-offset-2">{siteConfig.location} (Buka Google Maps)</span>
            </a>
          </div>

          {/* Kolom 2 — Navigasi */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/perumahan" className="hover:text-gold transition-colors">
                  Katalog Perumahan
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="hover:text-gold transition-colors">
                  Fasilitas & Lingkungan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-gold transition-colors">
                  Hubungi Sales / Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3 — Kontak & Layanan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Kontak Pemasaran
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 block">WhatsApp Resmi:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gold font-medium transition-colors"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 block">Email Informasi:</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white hover:text-gold transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="text-xs text-gray-400 pt-1">
                <span className="text-gray-300 font-semibold block">Wilayah Pemasaran:</span>
                {siteConfig.marketingArea}
              </li>
            </ul>
          </div>

          {/* Kolom 4 — Media Sosial & Transparansi */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Media Sosial & Saluran
            </h3>
            <div className="space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-200 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-200 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram Resmi</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-200 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs bg-white text-black px-1 rounded">TT</span>
                  <span>TikTok Pemasaran</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-400 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                Transparansi: Pastikan pembayaran booking fee hanya melalui rekening resmi developer. Hubungi kontak resmi di atas untuk verifikasi.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {currentYear} {siteConfig.brandName}. Seluruh hak cipta dilindungi. Pemasaran resmi {siteConfig.projectName}, Cisauk.
          </p>
          <p className="text-gray-500">
            Foto yang bertanda referensi merupakan visual ilustrasi arsitektur untuk tujuan estetika & konseptual.
          </p>
        </div>
      </div>
    </footer>
  );
}
