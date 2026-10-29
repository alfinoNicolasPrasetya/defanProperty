export interface ProjectHighlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const projectHighlights: ProjectHighlight[] = [
  {
    id: "hl-access",
    icon: "Compass",
    title: "Aksesibilitas Komuter Cisauk",
    description:
      "Lokasi yang terhubung ke jaringan Stasiun KRL Cisauk dan Tol Serbaraja, mempermudah mobilitas harian para pekerja menuju Jakarta dan Tangerang Selatan.",
  },
  {
    id: "hl-design",
    icon: "Home",
    title: "Desain Modern Tropis & Efisien",
    description:
      "Tata ruang dirancang dengan siling tinggi, bukaan ventilasi silang, dan pencahayaan alami yang optimal untuk kenyamanan serta efisiensi energi.",
  },
  {
    id: "hl-growth",
    icon: "TrendingUp",
    title: "Kawasan Berkembang Pesat",
    description:
      "Cisauk berada dalam koridor pertumbuhan hunian terpadu yang berdekatan dengan BSD City, didukung perkembangan fasilitas publik yang terus meluas.",
  },
  {
    id: "hl-purchase",
    icon: "BadgePercent",
    title: "Kemudahan Kepemilikan & Konsultasi",
    description:
      "Layanan pendampingan konsultasi transparan dari Defan Property, mulai dari pemilihan unit, penjelasan skema pembayaran, hingga simulasi KPR.",
  },
];
