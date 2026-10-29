import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { propertiesData } from "@/data/properties";
import { PropertyCard } from "@/properties/PropertyCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export function FeaturedProperties() {
  const featuredList = propertiesData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory/40 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="PILIHAN UNIT UNGGULAN"
            title="Temukan Hunian yang Sesuai dengan Kebutuhan Anda"
            subtitle="Jelajahi pilihan tipe rumah di Grand Artha Mulya, dirancang dengan fungsionalitas ruang optimal dan spesifikasi material berkualitas."
          />

          <div className="shrink-0 hidden md:block">
            <Button href="/perumahan" variant="outline" size="md">
              <span>Lihat Semua Pilihan</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 3-Column Grid Desktop, 2 Tablet, 1 Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Button href="/perumahan" variant="outline" size="md" className="w-full justify-center">
            <span>Lihat Semua Pilihan Rumah</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
