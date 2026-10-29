import { MessageCircle } from "lucide-react";
export function WaLink({ href, children, variant = "solid", className = "" }: { href: string; children: React.ReactNode; variant?: "solid" | "outline" | "gold"; className?: string }) {
  const v = { solid: "bg-navy text-white hover:bg-charcoal", gold: "bg-gold text-navy hover:bg-[#b8985f]", outline: "border border-current hover:bg-white/10" }[variant];
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${v} ${className}`}>{children}</a>;
}
export function FloatingWhatsApp({ href }: { href: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Defan Property" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-lg transition hover:scale-105"><MessageCircle /></a>;
}
