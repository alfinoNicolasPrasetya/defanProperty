export interface StrategicDestination {
  id: string;
  category: "Stasiun Kereta" | "Gerbang Tol" | "Pusat Perbelanjaan" | "Pendidikan" | "Kesehatan";
  name: string;
  duration: string;
  distance ? : string;
  transitMode: "Mobil / Motor" | "KRL / Shuttle";
  note: string;
  image: string;
  mapUrl ? : string;
  mapQuery ? : string;
}

export const strategicDestinations: StrategicDestination[] = [{
    id: "loc-school",
    category: "Pendidikan",
    name: "Annajah Islamic School",
    duration: "5 Menit",
    transitMode: "Mobil / Motor",
    note: "Institusi pendidikan Islam terdekat untuk putra-putri Anda dengan kurikulum unggulan.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.app.goo.gl/ahx3SkYfkTPioSJy7",
    mapQuery: "Annajah Islamic School Cisauk",
  },
  {
    id: "loc-hospital",
    category: "Kesehatan",
    name: "RS Selaras Cisauk",
    duration: "7 Menit",
    transitMode: "Mobil / Motor",
    note: "Rumah sakit terdekat dengan layanan IGD 24 jam, poli spesialis, dan fasilitas rawat inap modern.",
    image: "/images/facilities/rs-selaras.jpg",
    mapQuery: "RS Selaras Cisauk Tangerang",
  },
  {
    id: "loc-station",
    category: "Stasiun Kereta",
    name: "Stasiun KRL Cisauk & Intermoda BSD",
    duration: "10 Menit",
    transitMode: "Mobil / Motor",
    note: "Konektivitas cepat KRL Commuter Line rute Tanah Abang & terminal terpadu Intermoda BSD.",
    image: "/images/facilities/Stasiun CIsauk.jpg",
    mapQuery: "Stasiun Cisauk Tangerang",
  },
  {
    id: "loc-toll",
    category: "Gerbang Tol",
    name: "Gerbang Tol Serbaraja (Cisauk / Legok)",
    duration: "15 Menit",
    transitMode: "Mobil / Motor",
    note: "Pintu tol Serpong–Balaraja yang menghubungkan langsung ke JORR 2 dan Bandara Soekarno-Hatta.",
    image: "/images/facilities/tol-serbaraja.jpg",
    mapUrl: "https://maps.app.goo.gl/5higSxyj6L7zKmNr7",
    mapQuery: "Gerbang Tol Serbaraja Cisauk",
  },
  {
    id: "loc-mall-aeon",
    category: "Pusat Perbelanjaan",
    name: "AEON Mall BSD City",
    duration: "15 Menit",
    transitMode: "Mobil / Motor",
    note: "Pusat perbelanjaan dan lifestyle modern terlengkap dengan supermarket Jepang, bioskop, dan kuliner.",
    image: "/images/facilities/aeon-mall.png",
    mapQuery: "AEON Mall BSD City",
  },
  {
    id: "loc-mall-breeze",
    category: "Pusat Perbelanjaan",
    name: "The Breeze BSD City",
    duration: "20 Menit",
    transitMode: "Mobil / Motor",
    note: "Kawasan lifestyle terbuka hijau tepi danau dengan ragam kafe, restoran, dan area hiburan.",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
    mapQuery: "The Breeze BSD City",
  },
];