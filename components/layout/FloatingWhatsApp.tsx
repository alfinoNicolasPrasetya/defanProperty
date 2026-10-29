"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getGeneralInquiryUrl();

  return (
    <aside aria-label="Floating WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-charcoal px-3.5 py-2 rounded-xl shadow-floating border border-charcoal/10 text-xs font-medium max-w-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Tanya {siteConfig.projectName}? Chat sekarang</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded focus:outline-none"
            aria-label="Tutup petunjuk WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-floating hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat WhatsApp Defan Property mengenai Grand Artha Mulya"
      >
        <span className="sr-only">Hubungi via WhatsApp</span>
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </aside>
  );
}
