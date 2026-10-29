import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, Layers, MessageCircle, ArrowRight } from "lucide-react";
import { PropertyUnit } from "@/data/properties";
import { formatPrice } from "@/lib/utils";
import { getPropertyInquiryUrl } from "@/lib/whatsapp";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

interface PropertyCardProps {
  property: PropertyUnit;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const primaryImage =
    property.images.find((img) => img.isPrimary) || property.images[0];
  const whatsappUrl = getPropertyInquiryUrl(property.clusterName, property.name);

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-charcoal/10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Image Container with aspect ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory">
        {primaryImage?.url ? (
          <Image
            src={primaryImage.url}
            alt={`${property.name} - ${property.clusterName}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm">
            Visual sedang dipersiapkan
          </div>
        )}

        {/* Gradient overlay for badges readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wide bg-navy/90 text-white backdrop-blur-sm border border-white/10">
            {property.unitType}
          </span>
          {property.isPromo && property.promoBadge && (
            <span className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wide bg-gold text-charcoal-900 shadow-sm">
              {property.promoBadge}
            </span>
          )}
        </div>

        {/* Status indicator */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-black/60 text-white/90 backdrop-blur-sm">
            Status: {property.status}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-muted mb-1">
            <span>{property.clusterName}</span>
            <span>{property.location}</span>
          </div>

          <h3 className="text-xl font-bold text-navy group-hover:text-gold-dark transition-colors">
            <Link href={`/perumahan/${property.slug}`}>
              {property.name}
            </Link>
          </h3>

          {/* Price display */}
          <div className="mt-2.5 mb-4">
            <span className="text-xs text-muted block">
              {property.priceNote || "Harga Mulai Dari:"}
            </span>
            <div className="text-xl font-extrabold text-navy">
              {property.price ? formatPrice(property.price) : "Hubungi Sales"}
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-charcoal/10 text-xs text-charcoal/80 mb-4">
            <div className="flex items-center gap-1.5" title="Luas Bangunan (LB) / Luas Tanah (LT)">
              <Maximize2 className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>
                LB {property.specs.buildingArea} m² / LT {property.specs.landArea} m²
              </span>
            </div>
            <div className="flex items-center gap-1.5" title="Kamar Tidur & Kamar Mandi">
              <Bed className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{property.specs.bedrooms} KT</span>
              <span className="text-gray-300">|</span>
              <Bath className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{property.specs.bathrooms} KM</span>
            </div>
            <div className="flex items-center gap-1.5" title="Jumlah Lantai">
              <Layers className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{property.specs.floors} Lantai</span>
            </div>
            <div className="flex items-center gap-1.5" title="Kapasitas Listrik">
              <span className="text-gold font-bold text-xs">⚡</span>
              <span>{property.specs.electricity || "Listrik SNI"}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button
            href={`/perumahan/${property.slug}`}
            variant="outline"
            size="sm"
            className="w-full justify-center gap-1 text-xs"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>

          <Button
            href={whatsappUrl}
            isExternal
            variant="whatsapp"
            size="sm"
            className="w-full justify-center gap-1 text-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Tanya WA</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
