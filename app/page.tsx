import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectIntro } from "@/components/home/ProjectIntro";
import { LocationSection } from "@/components/home/LocationSection";
import { ProjectHighlights } from "@/components/home/ProjectHighlights";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { PromoSection } from "@/components/home/PromoSection";
import { FacilitiesOverview } from "@/components/home/FacilitiesOverview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectIntro />
      <LocationSection />
      <ProjectHighlights />
      <FeaturedProperties />
      <PromoSection />
      <FacilitiesOverview />
      <CTASection />
    </>
  );
}
