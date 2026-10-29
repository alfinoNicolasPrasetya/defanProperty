"use client";

import React from "react";
import { Search, RotateCcw } from "lucide-react";
import { Button } from "@/ui/Button";

export interface FilterState {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
  minBedrooms: string;
  minLandArea: string;
  status: string;
  sortBy: string;
}

interface PropertyFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export function PropertyFilters({
  filters,
  onFilterChange,
  onReset,
  totalResults,
}: PropertyFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const isFiltered =
    Boolean(filters.searchQuery) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice) ||
    Boolean(filters.minBedrooms) ||
    Boolean(filters.minLandArea) ||
    filters.status !== "all" ||
    filters.sortBy !== "default";

  return (
    <div className="bg-white rounded-xl p-5 border border-charcoal/10 shadow-subtle mb-8">
      {/* Top Search & Results Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-4 border-b border-charcoal/10">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Cari tipe rumah (Sakura, Rose, Tulip)..."
            value={filters.searchQuery}
            onChange={(e) => handleChange("searchQuery", e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-ivory/60 border border-charcoal/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all text-charcoal"
          />
        </div>

        {/* Status Count and Reset Button */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <span className="text-xs font-semibold text-muted">
            Menampilkan <span className="text-navy font-bold">{totalResults}</span> pilihan unit resmi
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1.5 rounded-md transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-4 text-xs">
        {/* Kamar Tidur */}
        <div>
          <label className="block font-medium text-charcoal/80 mb-1">Kamar Tidur</label>
          <select
            value={filters.minBedrooms}
            onChange={(e) => handleChange("minBedrooms", e.target.value)}
            className="w-full py-2 px-2.5 bg-ivory/60 border border-charcoal/15 rounded-md focus:outline-none focus:ring-1 focus:ring-gold text-charcoal"
          >
            <option value="">Semua (KT)</option>
            <option value="2">Minimal 2 Kamar</option>
          </select>
        </div>

        {/* Luas Tanah Min */}
        <div>
          <label className="block font-medium text-charcoal/80 mb-1">Luas Tanah (LT)</label>
          <select
            value={filters.minLandArea}
            onChange={(e) => handleChange("minLandArea", e.target.value)}
            className="w-full py-2 px-2.5 bg-ivory/60 border border-charcoal/15 rounded-md focus:outline-none focus:ring-1 focus:ring-gold text-charcoal"
          >
            <option value="">Semua Luas</option>
            <option value="60">≥ 60 m²</option>
            <option value="66">≥ 66 m²</option>
            <option value="70">≥ 70 m²</option>
          </select>
        </div>

        {/* Status Unit */}
        <div>
          <label className="block font-medium text-charcoal/80 mb-1">Ketersediaan</label>
          <select
            value={filters.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full py-2 px-2.5 bg-ivory/60 border border-charcoal/15 rounded-md focus:outline-none focus:ring-1 focus:ring-gold text-charcoal"
          >
            <option value="all">Semua Status</option>
            <option value="Tersedia">Tersedia</option>
            <option value="Terbatas">Terbatas</option>
          </select>
        </div>

        {/* Budget Plafon */}
        <div>
          <label className="block font-medium text-charcoal/80 mb-1">Budget Plafon</label>
          <select
            value={filters.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
            className="w-full py-2 px-2.5 bg-ivory/60 border border-charcoal/15 rounded-md focus:outline-none focus:ring-1 focus:ring-gold text-charcoal"
          >
            <option value="">Semua Plafon</option>
            <option value="425000000">&lt; Rp 425 Juta</option>
            <option value="450000000">&lt; Rp 450 Juta</option>
            <option value="480000000">&lt; Rp 480 Juta</option>
          </select>
        </div>

        {/* Urutan */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block font-medium text-charcoal/80 mb-1">Urutkan</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleChange("sortBy", e.target.value)}
            className="w-full py-2 px-2.5 bg-ivory/60 border border-charcoal/15 rounded-md focus:outline-none focus:ring-1 focus:ring-gold text-charcoal"
          >
            <option value="default">Paling Sesuai</option>
            <option value="price-asc">Harga: Rendah ke Tinggi</option>
            <option value="price-desc">Harga: Tinggi ke Rendah</option>
            <option value="land-desc">Luas Tanah: Terbesar</option>
          </select>
        </div>
      </div>
    </div>
  );
}
