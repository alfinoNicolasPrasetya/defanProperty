import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full",
            isDark
              ? "bg-gold/15 text-gold border border-gold/30"
              : "bg-navy/5 text-gold-dark border border-gold/30"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg leading-relaxed",
            isDark ? "text-gray-300" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
