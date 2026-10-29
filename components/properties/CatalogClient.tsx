"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Home, SearchX, MessageCircle } from "lucide-react";
import { propertiesData, PropertyUnit } from "@/data/properties";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { PropertyFilters, FilterState } from "@/components/properties/PropertyFilters";
import { Button } from "@/ui/Button";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

const initialFilters: FilterState = {
  searchQuery: "",
  minPrice: "",
  maxPrice: "",
  minBedrooms: "",
  minLandArea: "",
  status: "all",
  sortBy: "default",
};

export function CatalogClient() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      // Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = property.name.toLowerCase().includes(query);
        const matchesType = property.unitType.toLowerCase().includes(query);
        const matchesCluster = property.clusterName.toLowerCase().includes(query);
        const matchesDesc = property.description.toLowerCase().includes(query);
        if (!matchesName && !matchesType && !matchesCluster && !matchesDesc) {
          return false;
        }
      }

      // Bedrooms
      if (filters.minBedrooms) {
        const minBeds = parseInt(filters.minBedrooms, 10);
        if (property.specs.bedrooms < minBeds) {
          return false;
        }
      }

      // Land Area
      if (filters.minLandArea) {
        const minLT = parseInt(filters.minLandArea, 10);
        if (property.specs.landArea < minLT) {
          return false;
        }
      }

      // Status
      if (filters.status !== "all") {
        if (property.status !== filters.status) {
          return false;
        }
      }

      // Max Price
      if (filters.maxPrice) {
        const max = parseInt(filters.maxPrice, 10);
        if (property.price && property.price > max) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") {
        return (a.price || 0) - (b.price || 0);
      }
      if (filters.sortBy === "price-desc") {
        return (b.price || 0) - (a.price || 0);
      }
      if (filters.sortBy === "land-desc") {
        return b.specs.landArea - a.specs.landArea;
      }
      return 0;
    });
  }, [filters]);

  const handleReset = () => {
    setFilters(initialFilters);
  };

  const whatsappConsultUrl = getGeneralInquiryUrl();

  return (
    <div className="py-10 sm:py-14">
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
            <li className="font-semibold text-navy">Perumahan</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-10 max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold/30">
            KATALOG UNIT
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-4">
            Pilihan Hunian Grand Artha Mulya
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Temukan rumah yang dirancang untuk kebutuhan masa depan keluarga Anda di Cisauk. Seluruh tipe mengutamakan efisiensi tata ruang, pencahayaan alami, dan kualitas material terpercaya.
          </p>
        </div>

        {/* Filters */}
        <PropertyFilters
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleReset}
          totalResults={filteredProperties.length}
        />

        {/* Properties Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 sm:p-16 border border-charcoal/10 text-center max-w-2xl mx-auto shadow-subtle">
            <div className="w-16 h-16 rounded-2xl bg-ivory flex items-center justify-center text-muted mx-auto mb-4 border border-charcoal/10">
              <SearchX className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">
              Tidak Ada Unit yang Sesuai Filter
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Kombinasi pencarian atau filter yang Anda pilih saat ini tidak menemukan unit yang cocok. Silakan reset filter atau konsultasikan preferensi rumah Anda langsung dengan sales advisor kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button onClick={handleReset} variant="outline" size="md">
                <span>Reset Semua Filter</span>
              </Button>
              <Button href={whatsappConsultUrl} isExternal variant="whatsapp" size="md" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan Kebutuhan</span>
              </Button>
            </div>
          </div>
        )}

        {/* Note on Data Transparency */}
        <div className="mt-16 p-4 rounded-xl bg-ivory border border-charcoal/10 text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            * Data unit dan ketersediaan diperbarui secara berkala oleh Defan Property.
          </span>
          <Link
            href="/kontak"
            className="text-gold-dark font-semibold hover:underline shrink-0"
          >
            Punya pertanyaan seputar skema pembayaran? Hubungi Kami →
          </Link>
        </div>
      </div>
    </div>
  );
}
