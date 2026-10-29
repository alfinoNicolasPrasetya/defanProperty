# DEFAN PROPERTY — GRAND ARTHA MULYA
## Website Pemasaran Properti Premium & Modern (Cisauk, Kab. Tangerang)

Website pribadi dan resmi penjualan properti untuk brand **Defan Property**, memasarkan perumahan **Grand Artha Mulya** di Cisauk, Kabupaten Tangerang, Banten.

Dibangun dengan arsitektur modern **Next.js 14 (App Router)**, **TypeScript**, dan **Tailwind CSS**, mengutamakan estetika luxury real estate, kecepatan akses, responsivitas tinggi, serta orientasi konversi penjualan via WhatsApp.

---

## 🌟 Fitur Utama Website

1. **Brand Identity & Premium Design System**
   - Palet warna luxury real estate:
     - Deep Navy (`#14283D`)
     - Charcoal (`#20252B`)
     - Warm Ivory (`#F7F5F0`)
     - Champagne Gold (`#C6A66B`)
     - Pure White (`#FFFFFF`)
   - Tipografi elegan dan terstruktur (Plus Jakarta Sans / Manrope).
   - Penggunaan aksen emas terukur tanpa berlebihan.

2. **Navigasi & Header Lengkap**
   - Sticky navbar dengan backdrop blur dan shadow halus saat di-scroll.
   - Wordmark logo khas Defan Property.
   - Menu desktop & drawer navigasi mobile responsif.
   - Tombol CTA konsultasi WhatsApp langsung.

3. **Landing Page Beranda (`/`)**
   - **Hero Section**: Eyebrow "DEFAN PROPERTY PRESENTS", headline editorial, pill lokasi, dan CTA ganda.
   - **Project Introduction**: Nilai kawasan Cisauk dan perumahan Grand Artha Mulya.
   - **Lokasi Strategis**: 5 kartu destinasi penting (Stasiun KRL Cisauk, Tol Serbaraja, Mall/Pasar, Faskes, Pendidikan) dengan waktu tempuh terverifikasi dan link peta.
   - **Keunggulan Proyek**: Aksesibilitas, desain modern tropis, kawasan berkembang, dan kemudahan pembelian.
   - **Katalog Unit Unggulan**: Grid 3 kolom desktop, 2 tablet, 1 smartphone dengan spesifikasi lengkap.
   - **Promo Spesial**: Layout editorial dua kolom dengan syarat & ketentuan resmi.
   - **Fasilitas & Lingkungan**: Pemisahan jelas fasilitas internal kawasan vs fasilitas publik sekitar Cisauk.
   - **CTA Penutup**: Konsultasi & Jadwalkan Survei Lokasi.

4. **Halaman Katalog Rumah (`/perumahan`)**
   - Pencarian real-time berdasarkan nama tipe, cluster, atau deskripsi.
   - Filter kamar tidur, luas tanah (LT), ketersediaan unit, dan budget harga maksimal.
   - Pengurutan harga (Rendah–Tinggi, Tinggi–Rendah, Luas Tanah).
   - Empty state informatif dengan tombol Reset Filter dan CTA konsultasi.

5. **Halaman Detail Produk (`/perumahan/[slug]`)**
   - Galeri foto interaktif dengan Lightbox ukuran penuh, navigasi Next/Prev, keyboard shortcut (Esc, panah).
   - Grid spesifikasi utama: Luas Bangunan, Luas Tanah, Kamar Tidur, Kamar Mandi, Lantai, Listrik, Air, Carport.
   - Spesifikasi material bangunan standar SNI (Pondasi, Struktur, Dinding, Rangka Atap, Lantai, Sanitari).
   - Skema pembayaran, booking fee, dan syarat pengajuan KPR.
   - Sticky conversion card dengan tombol WhatsApp khusus yang otomatis menyertakan nama tipe rumah.
   - Rekomendasi tipe rumah lainnya.

6. **Halaman Fasilitas (`/fasilitas`)**
   - Filter tab kategori (Semua, Internal Kawasan, Transportasi & Tol, Belanja, Kesehatan, Pendidikan).
   - Panduan rute moda KRL dan kendaraan pribadi via Tol Serbaraja.
   - Tombol pembuka Google Maps untuk verifikasi titik lokasi.

7. **Halaman Kontak & Profil Sales (`/kontak`)**
   - Kartu profil sales resmi (Defan - Property Advisor).
   - Formulir konsultasi interaktif dengan validasi nomor telepon dan nama.
   - Otomatis mengarahkan ke WhatsApp dengan pesan terformat rapi sesuai isian form.

8. **Integrasi WhatsApp Terpusat (`lib/whatsapp.ts`)**
   - Nomor resmi: `+62 851-8172-5913` (`6285181725913`).
   - Helper modular untuk pesan umum, pesan khusus unit, tanya promo, jadwal survei, dan formulir kontak.
   - Floating WhatsApp button di sudut kanan bawah yang accessible dan tidak menutupi UI/form.

9. **SEO & Standar Performa**
   - Dynamic Metadata, Open Graph, Sitemap (`/sitemap.xml`), dan Robots (`/robots.txt`).
   - 100% Valid Static Site Generation (SSG) dengan build super cepat.

---

## 📁 Struktur Direktori

```
defan-property/
├── app/
│   ├── layout.tsx                # Root layout dengan font, navbar, footer, floating WA
│   ├── page.tsx                  # Beranda / Landing Page utama
│   ├── perumahan/
│   │   ├── page.tsx              # Katalog perumahan dengan filter
│   │   └── [slug]/
│   │       └── page.tsx          # Detail unit perumahan dinamis
│   ├── fasilitas/
│   │   └── page.tsx              # Halaman fasilitas internal & publik
│   ├── kontak/
│   │   └── page.tsx              # Halaman profil sales & form kontak WA
│   ├── not-found.tsx             # Halaman 404 elegan
│   ├── sitemap.ts                # Generator sitemap otomatis
│   ├── robots.ts                 # Generator robots.txt
│   └── globals.css               # Tailwind CSS & konfigurasi styling
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectIntro.tsx
│   │   ├── LocationSection.tsx
│   │   ├── ProjectHighlights.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── PromoSection.tsx
│   │   ├── FacilitiesOverview.tsx
│   │   └── CTASection.tsx
│   ├── properties/
│   │   ├── CatalogClient.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyFilters.tsx
│   │   ├── PropertyGallery.tsx
│   │   └── PropertySpecifications.tsx
│   ├── facilities/
│   │   └── FacilitiesClient.tsx
│   ├── contact/
│   │   └── ContactFormClient.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       └── Badge.tsx
├── data/
│   ├── site.ts                   # Informasi brand, sales, WA, alamat
│   ├── properties.ts             # Data unit rumah, spesifikasi, foto, harga
│   ├── promotions.ts             # Data penawaran promo resmi
│   ├── facilities.ts             # Data fasilitas internal & eksternal
│   ├── locations.ts              # Data destinasi strategis & jarak
│   └── highlights.ts             # Keunggulan proyek terverifikasi
├── lib/
│   ├── whatsapp.ts               # Helper pembentuk URL WhatsApp terpusat
│   └── utils.ts                  # Format mata uang & Tailwind merge
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🛠️ Cara Menjalankan Project

### 1. Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Mode Production Build
```bash
npm run build
npm run start
```

---

## 📝 Pengelolaan Data Proyek

Semua informasi proyek disimpan secara terpusat di direktori `data/` sehingga pemilik atau staf marketing dapat memperbarui harga, ketersediaan unit, atau nomor kontak tanpa perlu mengubah komponen UI:

- **Ubah nomor WhatsApp, nama sales, atau kontak:** Edit `data/site.ts`.
- **Tambah / perbarui tipe rumah & spesifikasi:** Edit `data/properties.ts`.
- **Ubah promo yang sedang berlangsung:** Edit `data/promotions.ts`.
- **Tambah destinasi atau fasilitas sekitar:** Edit `data/facilities.ts` dan `data/locations.ts`.
