export interface Promotion {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  terms: string[];
  period: string;
  image: string;
  imageCaption: string;
  targetUnitSlug?: string;
  isOfficialActive: boolean;
}

export const promotionsData: Promotion[] = [
  {
    id: "promo-perdana-gam",
    badge: "Promo Plafon Perdana",
    title: "Program Kepemilikan Rumah Grand Artha Mulya",
    headline: "Miliki Rumah Idaman Siap Huni Mulai Plafon Rp 419,6 Juta di Cisauk",
    description:
      "Dapatkan penawaran promo plafon KPR menarik untuk Tipe Sakura (35/60), Tipe Rose (40/66), dan Tipe Tulip (45/70). Proses pengajuan KPR didampingi penuh oleh sales advisor resmi Defan Property hingga serah terima unit.",
    terms: [
      "Harga plafon mulai dari Rp 419.600.000 untuk Tipe Sakura (35/60)",
      "Pilihan tipe lain: Rose (40/66) Rp 443.900.000 & Tulip (45/70) Rp 475.400.000",
      "Skema cicilan dan persetujuan KPR mengikuti syarat & ketentuan bank rekanan",
      "Konsultasi berkas dan pendampingan survei lokasi 100% bebas biaya",
    ],
    period: "Periode Berjalan (Hubungi Sales untuk Update Kuota Unit)",
    image: "/images/properties/sakura-1.jpg",
    imageCaption: "Unit Asli Siap Huni Grand Artha Mulya Cisauk",
    targetUnitSlug: "sakura-35-60",
    isOfficialActive: true,
  },
];
