export interface PropertySpecification {
  landArea: number; // m² (LT)
  buildingArea: number; // m² (LB)
  dimensions ? : string; // e.g. "6 x 10 m", "6 x 11 m", "7 x 10 m"
  bedrooms: number;
  bathrooms: number;
  floors: number;
  electricity ? : string;
  waterSource ? : string;
  carport ? : number;
  foundation ? : string;
  structure ? : string;
  Plafond ? : string;
  walls ? : string;
  roof ? : string;
  flooring ? : string;
  sanitary ? : string;
  light ? : string;
}

export interface PropertyUnit {
  id: string;
  slug: string;
  name: string;
  clusterName: string;
  unitType: string;
  price: number | null;
  priceNote ? : string;
  location: string;
  isFeatured ? : boolean;
  isPromo ? : boolean;
  promoBadge ? : string;
  status: "Tersedia" | "Terbatas" | "Segera Hadir" | "Sold Out";
  images: {
    url: string;
    caption: string;
    isPrimary ? : boolean;
  } [];
  floorPlanImage ? : string;
  specs: PropertySpecification;
  description: string;
  features: string[];
  bookingFee ? : number;
  paymentSchemes ? : string[];
  updatedAt: string;
}

export const propertiesData: PropertyUnit[] = [{
    id: "gam-sakura-35-60",
    slug: "sakura-35-60",
    name: "Tipe Sakura (35/60)",
    clusterName: "Grand Artha Mulya",
    unitType: "1 Lantai Modern Siap Huni",
    price: 419600000,
    priceNote: "Harga Plafon KPR",
    location: "Cisauk, Kab. Tangerang",
    isFeatured: true,
    isPromo: true,
    promoBadge: "Promo Perdana",
    status: "Tersedia",
    floorPlanImage: "/images/properties/sakura-layout.jpg",
    images: [{
        url: "/images/properties/sakura-1.jpg",
        caption: "Fasad asli unit rumah Tipe Sakura (35/60) di Grand Artha Mulya Cisauk — Siap Huni",
        isPrimary: true,
      },
      {
        url: "/images/properties/sakura-layout.jpg",
        caption: "Denah 3D Isometric Tata Ruang Desain Rumah Type 35/60 (Dimensi 6x10 Meter)",
      },
      {
        url: "/images/properties/sakura-bedroom.jpg",
        caption: "Desain interior kamar tidur utama bernuansa hangat dengan pencahayaan alami optimal",
      },
      {
        url: "/images/properties/sakura-bathroom.jpg",
        caption: "Desain interior kamar mandi modern dengan cermin LED bulat dan shower partisi",
      },
    ],
    specs: {
      landArea: 60,
      buildingArea: 35,
      dimensions: "6 x 10 Meter",
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
      electricity: "1.300 VA",
      waterSource: "Sumur Pantek / Bor Bersih",
      carport: 1,
      foundation: "Cakar Ayam Beton Bertulang",
      Plafond: "Gypsum Rangka Holow",
      walls: "Bata Ringan (Hebel) Plester Aci + Cat Finishing",
      roof: "Rangka Baja Ringan & Genteng Beton",
      flooring: "Granit 60 X 60",
      sanitary: "Kloset Duduk & Shower",
      light: "Down Light",
    },
    description: "Tipe Sakura (35/60) adalah hunian modern minimalis siap huni di Grand Artha Mulya, Cisauk. Berdiri di atas lahan 6x10 meter (LT 60 m², LB 35 m²), tata ruangnya dirancang sangat efisien: 2 kamar tidur nyaman, ruang tamu dan ruang makan terpadu yang lapang, toilet/kamar mandi modern di bagian tengah, carport 1 mobil, teras, serta taman depan hijau yang asri.",
    features: [
      "Denah 3D Resmi Type 35/60 (Dimensi 6 x 10 Meter)",
      "Foto Fasad Asli Proyek (Unit Siap Huni)",
      "2 Kamar Tidur (Kamar Utama Depan & Kamar Tidur 2 Belakang)",
      "1 Toilet / Kamar Mandi Modern",
      "Dapur & Ruang Makan Terpadu",
      "Ruang Tamu Terbuka dengan Bukaan Jendela Lebar",
      "Carport 1 Mobil, Teras Depan & Area Taman Hijau",
      "Jalan Lingkungan Paving Rapi & Bebas Kumuh",
    ],
    bookingFee: 100000,
    paymentSchemes: [
      "KPR Bank Rekanan (Plafon Rp 419.600.000)",
      "Cash Keras (Diskon Spesial Langsung)",
      "Cash Bertahap Developer",
    ],
    updatedAt: "2026-10-29",
  },
  {
    id: "gam-rose-40-66",
    slug: "rose-40-66",
    name: "Tipe Rose (40/66)",
    clusterName: "Grand Artha Mulya",
    unitType: "1 Lantai Kontemporer",
    price: 443900000,
    priceNote: "Harga Plafon KPR",
    location: "Cisauk, Kab. Tangerang",
    isFeatured: true,
    isPromo: true,
    promoBadge: "Paling Diminati",
    status: "Tersedia",
    floorPlanImage: "/images/properties/rose-layout.jpg",
    images: [{
        url: "/images/properties/rose-1.jpg",
        caption: "Visual kawasan dan fasad kontemporer Tipe Rose (40/66) Grand Artha Mulya",
        isPrimary: true,
      },
      {
        url: "/images/properties/rose-layout.jpg",
        caption: "Denah 3D Isometric Tata Ruang Desain Rumah Tipe Rose (Dimensi 6x11 Meter)",
      },
      {
        url: "/images/properties/rose-livingroom.jpg",
        caption: "Desain interior ruang keluarga & ruang tamu lapang dengan bukaan kaca lebar ke arah carport",
      },
      {
        url: "/images/properties/rose-bedroom.jpg",
        caption: "Desain interior kamar tidur 2 bernuansa Japandi hangat dengan meja belajar dan wardrobe terpadu",
      },
    ],
    specs: {
      landArea: 66,
      buildingArea: 40,
      dimensions: "6 x 11 Meter",
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
      electricity: "1.300 VA",
      waterSource: "Sumur Pantek / Bor Bersih",
      carport: 1,
      foundation: "Batu Kali & Beton Bertulang",
      Plafond: "Gypsum Rangka Hollow",
      walls: "Bata Ringan Plester Aci + Cat Weatherproof",
      roof: "Rangka Baja Ringan & Genteng Flat Minimalis",
      flooring: "Granit 60 X 60",
      sanitary: "Kloset Duduk & Shower Standar SNI",
      light: "Down Light",
    },
    description: "Tipe Rose (40/66) menghadirkan luas bangunan 40 m² dan luas tanah 66 m² (dimensi 6x11 meter). Dilengkapi ruang keluarga ekstra luas, 2 kamar tidur leluasa, area dapur & ruang makan terhubung dengan halaman belakang untuk sirkulasi udara maksimal, carport, teras, dan taman depan yang tertata apik.",
    features: [
      "Denah 3D Resmi Tipe Rose (Dimensi 6 x 11 Meter)",
      "Luas Tanah Ekstra (66 m²)",
      "Ruang Tamu & Ruang Keluarga Super Lapang",
      "2 Kamar Tidur Berukuran Lega",
      "1 Toilet / Kamar Mandi Modern",
      "Dapur & Ruang Makan dengan Akses Halaman Belakang",
      "Carport 1 Mobil & Area Penghijauan Depan",
    ],
    bookingFee: 100000,
    paymentSchemes: [
      "KPR Bank Rekanan (Plafon Rp 443.900.000)",
      "Cash Keras (Diskon Spesial)",
      "Cash Bertahap",
    ],
    updatedAt: "2026-10-29",
  },
  {
    id: "gam-tulip-45-70",
    slug: "tulip-45-70",
    name: "Tipe Tulip (45/70)",
    clusterName: "Grand Artha Mulya",
    unitType: "1 Lantai Scandinavian",
    price: 475400000,
    priceNote: "Harga Plafon KPR",
    location: "Cisauk, Kab. Tangerang",
    isFeatured: true,
    isPromo: true,
    promoBadge: "Tipe Unggulan",
    status: "Tersedia",
    floorPlanImage: "/images/properties/tulip-layout.jpg",
    images: [
      {
        url: "/images/properties/tulip-1.jpg",
        caption: "Fasad asli Tipe Tulip (45/70) bergaya Scandinavian modern dengan aksen batu alam mewah",
        isPrimary: true,
      },
      {
        url: "/images/properties/tulip-layout.jpg",
        caption: "Denah 3D Isometric Desain Rumah Tipe Tulip (LT 70m²) dengan Inner Courtyard / Taman Tengah Asri",
      },
    ],
    specs: {
      landArea: 70,
      buildingArea: 45,
      dimensions: "7 x 10 Meter",
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
      electricity: "1.300 VA",
      waterSource: "Sumur Pantek / Bor Bersih",
      carport: 1,
      foundation: "Batu Kali & Cakar Ayam",
      Plafond: "Beton Bertulang Standar SNI",
      walls: "Bata Ringan Plester Aci + Aksen Batu Alam Tekstur Alami",
      roof: "Gable Roof Scandinavian & Rangka Baja Ringan",
      flooring: "Granit 60x60",
      sanitary: "Kloset Duduk & Shower Standar Premium",
      light: "Down Light",
    },
    description: "Tipe Tulip (45/70) adalah tipe unggulan eksklusif dengan arsitektur Scandinavian beratap pelana modern yang megah dan berkelas. Berdiri di atas lahan 70 m², keunggulan unik tipe ini adalah hadirnya Inner Courtyard / Taman Terbuka di bagian tengah belakang antara kamar tidur dan dapur, menghadirkan pencahayaan alami melimpah serta sirkulasi udara tropis yang segar ke seluruh penjuru rumah.",
    features: [
      "Denah 3D Resmi Tipe Tulip (Luas Tanah 70 m²)",
      "Inner Courtyard / Taman Tengah Terbuka Unik & Asri",
      "Foto Fasad Asli Desain Scandinavian Eksklusif",
      "Aksen Dinding Batu Alam Alami & Estetis",
      "Luas Bangunan 45 m² & Luas Tanah 70 m²",
      "2 Kamar Tidur Luas dengan Bukaan Jendela ke Taman",
      "Lantai Granit Tile 60x60 Mewah",
      "Carport Cor Paving & Taman Depan Asri",
    ],
    bookingFee: 100000,
    paymentSchemes: [
      "KPR Bank Rekanan (Plafon Rp 475.400.000)",
      "Cash Keras",
      "Cash Bertahap Developer",
    ],
    updatedAt: "2026-10-29",
  },
];