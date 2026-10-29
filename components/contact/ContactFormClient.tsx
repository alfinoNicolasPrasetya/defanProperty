"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { propertiesData } from "@/data/properties";
import { getContactFormUrl, getGeneralInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unitType: "Tipe 36/60",
    inquiryType: "Tanya Harga & Promo Terbaru",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi";
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Nomor WhatsApp wajib diisi";
    } else if (cleanPhone.length < 9) {
      newErrors.phone = "Nomor WhatsApp minimal 9 digit";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = getContactFormUrl({
      name: formData.name,
      phone: formData.phone,
      unitType: formData.unitType,
      inquiryType: formData.inquiryType,
      message: formData.message,
    });

    // Open WhatsApp directly with structured pre-filled text
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const directWaUrl = getGeneralInquiryUrl();

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
            <li className="font-semibold text-navy">Kontak & Konsultasi</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold/30">
            HUBUNGI SALES ADVISOR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-4">
            Konsultasi Pribadi & Penjadwalan Survei
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Terhubung langsung dengan tim pemasaran resmi <strong className="text-navy">{siteConfig.projectName}</strong> dari {siteConfig.brandName}. Kami siap menjawab pertanyaan harga, ketersediaan unit, simulasi KPR, dan mendampingi kunjungan lokasi Anda.
          </p>
        </div>

        {/* Main Grid: Left Profile & Contact Details (5 cols), Right Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Kolom Profil Sales & Info Kontak */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-card">
              {/* Sales Photo & Identity */}
              <div className="flex items-center gap-4 pb-6 border-b border-charcoal/10">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-ivory shrink-0 border-2 border-gold/40 shadow-subtle">
                  <Image
                    src={siteConfig.salesPhoto}
                    alt={siteConfig.salesName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block">
                    Property Advisor
                  </span>
                  <h3 className="text-xl font-extrabold text-navy">
                    {siteConfig.salesName}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    {siteConfig.salesRole}
                  </p>
                </div>
              </div>

              {/* Contact channels list */}
              <div className="py-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">WhatsApp Konsultasi Cepat:</span>
                    <a
                      href={directWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-navy hover:text-emerald-700 transition-colors"
                    >
                      {siteConfig.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ivory text-navy flex items-center justify-center shrink-0 border border-charcoal/10">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Email Pertanyaan Resmi:</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-navy hover:text-gold-dark transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ivory text-navy flex items-center justify-center shrink-0 border border-charcoal/10">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Wilayah Pemasaran:</span>
                    <span className="font-semibold text-navy block">
                      {siteConfig.marketingArea}
                    </span>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold-dark hover:text-navy hover:underline mt-0.5 font-medium transition-colors"
                    >
                      <span>{siteConfig.fullAddress} (Buka Google Maps)</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ivory text-navy flex items-center justify-center shrink-0 border border-charcoal/10">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Jam Pelayanan Konsultasi:</span>
                    <span className="text-xs text-charcoal/90">
                      {siteConfig.officeHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-2">
                <Button
                  href={directWaUrl}
                  isExternal
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Langsung via WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Trust box */}
            <div className="bg-ivory rounded-2xl p-5 border border-charcoal/10 text-xs text-muted space-y-2">
              <div className="flex items-center gap-2 text-charcoal font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Layanan Bebas Biaya Tambahan</span>
              </div>
              <p>
                Konsultasi pemilihan unit, survei lokasi, serta simulasi angsuran KPR tidak dipungut biaya apapun. Pembayaran booking fee hanya melalui rekening resmi developer.
              </p>
            </div>
          </div>

          {/* Kolom Formulir Konsultasi */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/10 shadow-card">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                FORMULIR KONSULTASI
              </span>
              <h2 className="text-2xl font-extrabold text-navy mb-2">
                Kirim Pesan & Data Kebutuhan
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Isi form berikut untuk langsung tersambung ke WhatsApp kami dengan format pesan terstruktur yang siap dibalas oleh sales advisor.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-navy mb-1.5">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-ivory/40 focus:bg-white transition-all outline-none ${
                      errors.name
                        ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                        : "border-charcoal/15 focus:ring-2 focus:ring-gold"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-navy mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-ivory/40 focus:bg-white transition-all outline-none ${
                      errors.phone
                        ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                        : "border-charcoal/15 focus:ring-2 focus:ring-gold"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-rose-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Tipe Rumah Diminati & Keperluan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="unitType" className="block text-xs font-bold text-navy mb-1.5">
                      Tipe Rumah Diminati
                    </label>
                    <select
                      id="unitType"
                      value={formData.unitType}
                      onChange={(e) =>
                        setFormData({ ...formData, unitType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 text-sm bg-ivory/40 focus:bg-white focus:ring-2 focus:ring-gold outline-none"
                    >
                      {propertiesData.map((prop) => (
                        <option key={prop.id} value={prop.name}>
                          {prop.name} ({prop.unitType})
                        </option>
                      ))}
                      <option value="Belum Menentukan (Ingin Konsultasi)">
                        Belum Menentukan (Ingin Konsultasi)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-bold text-navy mb-1.5">
                      Tujuan Menghubungi
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 text-sm bg-ivory/40 focus:bg-white focus:ring-2 focus:ring-gold outline-none"
                    >
                      <option value="Tanya Harga & Promo Terbaru">
                        Tanya Harga & Promo Terbaru
                      </option>
                      <option value="Jadwalkan Survei Lokasi">
                        Jadwalkan Survei Lokasi
                      </option>
                      <option value="Simulasi Angsuran KPR">
                        Simulasi Angsuran KPR
                      </option>
                      <option value="Konsultasi Spesifikasi & Legalitas">
                        Konsultasi Spesifikasi & Legalitas
                      </option>
                    </select>
                  </div>
                </div>

                {/* Pesan Tambahan */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-navy mb-1.5">
                    Pesan atau Pertanyaan Khusus (Opsional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tuliskan pertanyaan Anda mengenai ketersediaan unit, rencana jadwal kunjungan, atau budget yang diinginkan..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 text-sm bg-ivory/40 focus:bg-white focus:ring-2 focus:ring-gold outline-none resize-none"
                  />
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Lanjutkan Konsultasi via WhatsApp</span>
                  </Button>
                </div>

                <p className="text-[11px] text-muted text-center pt-2">
                  * Setelah mengklik tombol di atas, aplikasi WhatsApp akan otomatis terbuka dengan pesan terstruktur yang siap dikirim.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
