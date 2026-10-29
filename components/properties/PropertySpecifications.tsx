import React from "react";
import { PropertySpecification } from "@/data/properties";
import {
  Maximize2,
  Bed,
  Bath,
  Layers,
  Zap,
  Droplets,
  Car,
  Home,
  CheckCircle2,
  Ruler,
} from "lucide-react";

interface PropertySpecificationsProps {
  specs: PropertySpecification;
  features?: string[];
}

export function PropertySpecifications({ specs, features }: PropertySpecificationsProps) {
  const mainSpecs = [
    {
      label: "Luas Bangunan (LB)",
      value: `${specs.buildingArea} m²`,
      icon: Maximize2,
    },
    {
      label: "Luas Tanah (LT)",
      value: `${specs.landArea} m²`,
      icon: Maximize2,
    },
    specs.dimensions
      ? {
          label: "Dimensi Lahan",
          value: specs.dimensions,
          icon: Ruler,
        }
      : null,
    {
      label: "Kamar Tidur",
      value: `${specs.bedrooms} Ruang`,
      icon: Bed,
    },
    {
      label: "Kamar Mandi",
      value: `${specs.bathrooms} Ruang`,
      icon: Bath,
    },
    {
      label: "Jumlah Lantai",
      value: `${specs.floors} Lantai`,
      icon: Layers,
    },
    {
      label: "Kapasitas Listrik",
      value: specs.electricity || "Listrik PLN SNI",
      icon: Zap,
    },
    {
      label: "Sumber Air",
      value: specs.waterSource || "Sumur Pantek / Bor",
      icon: Droplets,
    },
    {
      label: "Area Carport",
      value: specs.carport ? `${specs.carport} Mobil` : "1 Mobil",
      icon: Car,
    },
  ].filter(Boolean) as { label: string; value: string; icon: any }[];

  const structuralSpecs = [
    { label: "Pondasi", value: specs.foundation },
    { label: "Struktur", value: specs.structure },
    { label: "Plafon", value: specs.Plafond },
    { label: "Dinding", value: specs.walls },
    { label: "Rangka & Atap", value: specs.roof },
    { label: "Lantai", value: specs.flooring },
    { label: "Sanitari", value: specs.sanitary },
    { label: "Penerangan", value: specs.light },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="space-y-8">
      {/* Grid Spesifikasi Pokok */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
          <Home className="w-5 h-5 text-gold" />
          <span>Dimensi & Tata Ruang Utama</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {mainSpecs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-ivory/60 border border-charcoal/10 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-muted mb-2">
                  <Icon className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-navy">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keunggulan Unit */}
      {features && features.length > 0 && (
        <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-subtle">
          <h3 className="text-base font-bold text-navy mb-4">
            Fitur & Keunggulan Desain Ruang
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/90">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabel Spesifikasi Teknis Material */}
      {structuralSpecs.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-navy mb-4">
            Spesifikasi Material Bangunan
          </h3>
          <div className="rounded-xl border border-charcoal/10 overflow-hidden bg-white shadow-subtle">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-charcoal/10">
                {structuralSpecs.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-ivory/40"}
                  >
                    <td className="py-3 px-4 font-semibold text-charcoal/80 w-1/3 text-xs sm:text-sm">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-charcoal text-xs sm:text-sm">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted mt-2">
            * Spesifikasi teknis standar developer dan dapat disesuaikan pada saat pelaksanaan konstruksi tanpa mengurangi kualitas bangunan.
          </p>
        </div>
      )}
    </div>
  );
}
