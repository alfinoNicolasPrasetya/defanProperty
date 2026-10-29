"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Home } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Perumahan", href: "/perumahan" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = getGeneralInquiryUrl();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-charcoal/5 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-charcoal/5 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
            aria-label="Defan Property Beranda"
          >
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-gold shadow-sm group-hover:bg-navy-light transition-colors">
              <span className="font-serif font-black text-lg tracking-wider">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-navy text-lg sm:text-xl leading-none">
                DEFAN <span className="text-gold font-bold">PROPERTY</span>
              </span>
              <span className="text-[10px] tracking-widest text-muted font-medium uppercase mt-0.5">
                {siteConfig.projectName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                    isActive
                      ? "text-navy font-semibold bg-navy/5"
                      : "text-charcoal/80 hover:text-navy hover:bg-black/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="sm"
              className="gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi</span>
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
              aria-label="Konsultasi WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigasi menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-charcoal/5 bg-white px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-navy text-white font-semibold"
                      : "text-charcoal hover:bg-ivory"
                  )}
                >
                  <span>{link.label}</span>
                  {link.href === "/" && <Home className="w-4 h-4 opacity-70" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-charcoal/10 flex flex-col gap-2">
            <p className="text-xs text-muted">
              Pemasaran Resmi {siteConfig.projectName} · Cisauk
            </p>
            <Button
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="md"
              className="w-full justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
