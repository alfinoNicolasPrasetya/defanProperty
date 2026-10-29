import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 text-center border border-charcoal/10 shadow-card">
        <span className="text-4xl sm:text-5xl font-black text-gold block mb-2">404</span>
        <h1 className="text-xl sm:text-2xl font-bold text-navy mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-8">
          Halaman atau unit properti yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke katalog atau beranda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto gap-2">
            <Home className="w-4 h-4" />
            <span>Ke Beranda</span>
          </Button>
          <Button href="/perumahan" variant="outline" size="md" className="w-full sm:w-auto gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Katalog Unit</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
