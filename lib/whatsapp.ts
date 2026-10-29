import { siteConfig } from "@/data/site";

export function formatWhatsAppUrl(message: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function getGeneralInquiryUrl(): string {
  const message = `[WA Web] Halo ${siteConfig.brandName}, saya ingin mendapatkan informasi lebih lanjut mengenai ${siteConfig.projectName} di Cisauk. Mohon informasi harga, tipe rumah, dan ketersediaan unit.`;
  return formatWhatsAppUrl(message);
}

export function getPropertyInquiryUrl(propertyName: string, unitType: string): string {
  const message = `[Wa Web] Halo ${siteConfig.brandName}, saya tertarik dengan ${propertyName}, tipe ${unitType}. Mohon informasi harga terbaru, spesifikasi lengkap, dan ketersediaan unit saat ini.`;
  return formatWhatsAppUrl(message);
}

export function getPromoInquiryUrl(promoName: string): string {
  const message = `[Wa Web] Halo ${siteConfig.brandName}, saya ingin menanyakan penawaran spesial untuk promo "${promoName}" di ${siteConfig.projectName}. Mohon informasi syarat, ketentuan, dan masa berlakunya.`;
  return formatWhatsAppUrl(message);
}

export function getSurveyInquiryUrl(propertyName: string = siteConfig.projectName, preferredDate?: string): string {
  const dateText = preferredDate ? ` pada tanggal/hari: ${preferredDate}` : "";
  const message = `[Wa Web] Halo ${siteConfig.brandName}, saya ingin menjadwalkan survei lokasi untuk ${propertyName} di Cisauk${dateText}. Mohon panduan jadwal dan titik temu. Terima kasih.`;
  return formatWhatsAppUrl(message);
}

export interface ContactFormData {
  name: string;
  phone: string;
  unitType?: string;
  inquiryType: string;
  message?: string;
}

export function getContactFormUrl(data: ContactFormData): string {
  const lines = [
    `[WA Web] Halo ${siteConfig.brandName}, saya telah mengisi form konsultasi website:`,
    `Nama: ${data.name}`,
    `No. WhatsApp: ${data.phone}`,
    `Keperluan: ${data.inquiryType}`,
    data.unitType ? `Tipe Rumah Diminati: ${data.unitType}` : null,
    data.message ? `Pesan Tambahan: ${data.message}` : null,
    `\nMohon informasi lebih lanjut. Terima kasih!`,
  ].filter(Boolean);

  return formatWhatsAppUrl(lines.join("\n"));
}
