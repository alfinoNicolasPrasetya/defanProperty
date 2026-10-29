export interface FacilityItem {
  id: string;
  name: string;
  category: "internal" | "public_transport" | "public_health" | "public_education" | "public_shopping";
  categoryLabel: string;
  scope: "Internal Kawasan" | "Fasilitas Sekitar (Cisauk & Sekitarnya)";
  description: string;
  distanceOrTime ? : string;
  locationName ? : string;
  imageUrl ? : string;
  mapUrl ? : string;
  iconName: string;
  verified: boolean;
}

export const facilitiesData: FacilityItem[] = [
  // Fasilitas Internal Perumahan
  {
    id: "fac-road",
    name: "Akses Jalan Lingkungan Paving Rapi",
    category: "internal",
    categoryLabel: "Fasilitas Internal Perumahan",
    scope: "Internal Kawasan",
    description: "Infrastruktur jalan lingkungan perumahan yang rapi, bersih, dan nyaman untuk lalu lalang kendaraan penghuni Grand Artha Mulya.",
    imageUrl: "/images/facilities/pavling.jpeg",
    iconName: "Compass",
    verified: true,
  },
  {
    id: "fac-drainage",
    name: "Sistem Drainase Terpadu",
    category: "internal",
    categoryLabel: "Fasilitas Internal Perumahan",
    scope: "Internal Kawasan",
    description: "Saluran pembuangan air tertata rapi di depan setiap unit rumah untuk kenyamanan dan kebersihan kawasan perumahan.",
    imageUrl: "/images/facilities/Drainase.png",
    iconName: "ShieldCheck",
    verified: true,
  },
  {
    id: "fac-greenery",
    name: "Area Penghijauan & Taman Asri",
    category: "internal",
    categoryLabel: "Fasilitas Internal Perumahan",
    scope: "Internal Kawasan",
    description: "Taman depan di setiap unit rumah serta tanaman peneduh untuk menciptakan udara sejuk dan lingkungan asri.",
    imageUrl: "/images/facilities/Penghijauan.jpg",
    iconName: "Trees",
    verified: true,
  },

  // Transportasi & Akses
  {
    id: "fac-st-cisauk",
    name: "Stasiun KRL Cisauk & Intermoda BSD",
    category: "public_transport",
    categoryLabel: "Transportasi & Akses Komuter",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Stasiun KRL Commuter Line rute Rangkasbitung Tanah Abang terhubung langsung dengan terminal Intermoda BSD untuk mobilitas cepat pekerja ke Jakarta.",
    distanceOrTime: "± 10 Menit",
    locationName: "Cisauk, Tangerang",
    imageUrl: "/images/facilities/stasiuncisauk.jpg",
    iconName: "Train",
    verified: true,
  },
  {
    id: "fac-toll-serbaraja",
    name: "Gerbang Tol Serbaraja (Cisauk / Legok)",
    category: "public_transport",
    categoryLabel: "Transportasi & Akses Komuter",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Jalan tol baru Serpong–Balaraja yang menghubungkan langsung area Cisauk dengan jaringan Tol JORR 2 dan Bandara Internasional Soekarno-Hatta.",
    distanceOrTime: "± 15 Menit",
    locationName: "Tol Serbaraja Pintu Cisauk/Legok",
    imageUrl: "/images/facilities/tol-serbaraja.jpg",
    mapUrl: "https://maps.app.goo.gl/5higSxyj6L7zKmNr7",
    iconName: "Car",
    verified: true,
  },

  // Kesehatan
  {
    id: "fac-rs-selaras",
    name: "RS Selaras Cisauk",
    category: "public_health",
    categoryLabel: "Fasilitas Kesehatan",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Rumah sakit terdekat yang melayani Instalasi Gawat Darurat (IGD) 24 jam, poli dokter spesialis, laboratorium, dan rawat inap modern bagi keluarga.",
    distanceOrTime: "± 7 Menit",
    locationName: "Jl. Raya Cisauk, Tangerang",
    imageUrl: "/images/facilities/rs-selaras.jpg",
    iconName: "HeartPulse",
    verified: true,
  },

  // Pusat Perbelanjaan & Lifestyle
  {
    id: "fac-aeon",
    name: "AEON Mall BSD City",
    category: "public_shopping",
    categoryLabel: "Pusat Perbelanjaan & Lifestyle",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Pusat perbelanjaan dan rekreasi keluarga modern kelas dunia dengan supermarket Jepang, bioskop XXI, food court, dan aneka tenant retail ternama.",
    distanceOrTime: "± 15 Menit",
    locationName: "BSD City, Tangerang",
    imageUrl: "/images/facilities/aeon-mall.png",
    iconName: "Store",
    verified: true,
  },
  {
    id: "fac-the-breeze",
    name: "The Breeze BSD City",
    category: "public_shopping",
    categoryLabel: "Pusat Perbelanjaan & Lifestyle",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Kawasan lifestyle terbuka hijau (open-air lifestyle center) tepi danau dengan ragam restoran pilihan, kafe, supermarket ranch market, dan cinema.",
    distanceOrTime: "± 20 Menit",
    locationName: "BSD Green Office Park",
    imageUrl: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
    iconName: "ShoppingBag",
    verified: true,
  },

  // Pendidikan
  {
    id: "fac-annajah",
    name: "Annajah Islamic School",
    category: "public_education",
    categoryLabel: "Institusi Pendidikan",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Lembaga pendidikan Islam modern terdekat dengan kurikulum terpadu untuk mendidik generasi cerdas dan berakhlak mulia di kawasan Cisauk.",
    distanceOrTime: "± 5 Menit",
    locationName: "Cisauk, Kab. Tangerang",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.app.goo.gl/ahx3SkYfkTPioSJy7",
    iconName: "GraduationCap",
    verified: true,
  },
  {
    id: "fac-prasetiya",
    name: "Universitas Prasetiya Mulya BSD",
    category: "public_education",
    categoryLabel: "Institusi Pendidikan",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Kampus bisnis dan inovasi terkemuka di Indonesia dengan fasilitas akademik bertaraf internasional yang mudah dijangkau dari Cisauk.",
    distanceOrTime: "± 15–20 Menit",
    locationName: "BSD City",
    imageUrl: "/images/facilities/prasetiya-mulya.webp",
    iconName: "GraduationCap",
    verified: true,
  },
  {
    id: "fac-atmajaya",
    name: "Universitas Katolik Indonesia Atma Jaya BSD",
    category: "public_education",
    categoryLabel: "Institusi Pendidikan",
    scope: "Fasilitas Sekitar (Cisauk & Sekitarnya)",
    description: "Kampus 3 Unika Atma Jaya modern yang berlokasi strategis di BSD City dekat dengan stasiun Cisauk dan koridor perkantoran.",
    distanceOrTime: "± 15–20 Menit",
    locationName: "BSD City",
    imageUrl: "/images/facilities/atma-jaya.webp",
    iconName: "GraduationCap",
    verified: true,
  },
];