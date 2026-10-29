import React from "react";
import { Compass, Home, TrendingUp, BadgePercent } from "lucide-react";
import { projectHighlights } from "@/data/highlights";
import { SectionHeading } from "@/ui/SectionHeading";

export function ProjectHighlights() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return Compass;
      case "Home":
        return Home;
      case "TrendingUp":
        return TrendingUp;
      case "BadgePercent":
        return BadgePercent;
      default:
        return Home;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NILAI LEBIH"
          title="Keunggulan Utama Grand Artha Mulya"
          subtitle="Setiap aspek perumahan dipersiapkan untuk memberikan kenyamanan tinggal jangka panjang, kepraktisan akses kerja, dan proses transaksi yang terpercaya."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projectHighlights.map((hl) => {
            const Icon = getIcon(hl.icon);
            return (
              <div
                key={hl.id}
                className="p-6 rounded-2xl bg-ivory/50 border border-charcoal/10 hover:border-gold/40 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-subtle">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy mb-2.5">
                    {hl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {hl.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/5">
                  <span className="text-[11px] font-semibold text-gold-dark tracking-wide uppercase">
                    Terverifikasi
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
