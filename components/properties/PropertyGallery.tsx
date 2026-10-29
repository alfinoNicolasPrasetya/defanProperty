"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  url: string;
  caption: string;
  isPrimary?: boolean;
}

interface PropertyGalleryProps {
  images: GalleryImage[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[activeIndex] || images[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[16/10] bg-ivory rounded-2xl flex items-center justify-center text-muted text-sm border border-charcoal/10">
        Galeri foto sedang dipersiapkan
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main Large Image Container */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-charcoal/5 shadow-subtle border border-charcoal/10 group">
        <Image
          src={currentImage.url}
          alt={currentImage.caption || `${title} - Foto ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-all duration-300 group-hover:scale-[1.01]"
        />

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Controls: Zoom Button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/80 hover:bg-white text-navy backdrop-blur-md shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gold"
          title="Buka Foto Penuh (Lightbox)"
          aria-label="Lihat foto ukuran penuh"
        >
          <Maximize className="w-4 h-4" />
        </button>

        {/* Navigation Arrows for large display */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-navy backdrop-blur-md shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-navy backdrop-blur-md shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Caption Bar */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <p className="text-xs sm:text-sm font-medium drop-shadow bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg max-w-xl">
            {currentImage.caption}
          </p>
          <span className="text-xs font-semibold bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg shrink-0">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Verified Real Unit Tag */}
      <div className="flex items-center gap-1.5 text-xs text-muted px-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>Foto fasad menampilkan unit nyata & kawasan perumahan Grand Artha Mulya Cisauk.</span>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 pt-1">
          {images.map((img, idx) => (
            <button
              key={img.url + idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-gold",
                activeIndex === idx
                  ? "border-gold shadow-md scale-[1.02]"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
              aria-label={`Pilih foto ${idx + 1}`}
            >
              <Image
                src={img.url}
                alt={img.caption || `Thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
            <div className="text-sm sm:text-base font-semibold">
              <span>{title}</span>
              <span className="text-gray-400 ml-2">
                ({activeIndex + 1} dari {images.length})
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Tutup foto penuh"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Image */}
          <div className="relative flex-1 max-w-6xl w-full mx-auto my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={currentImage.url}
                alt={currentImage.caption || `${title} Full`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div className="text-center text-sm text-gray-300 max-w-2xl mx-auto">
            {currentImage.caption}
          </div>
        </div>
      )}
    </div>
  );
}
