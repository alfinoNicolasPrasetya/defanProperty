import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, isExternal, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-navy text-white hover:bg-navy-light focus-visible:ring-navy shadow-subtle hover:shadow-card active:scale-[0.99]",
      gold:
        "bg-gold text-charcoal-900 font-semibold hover:bg-gold-light focus-visible:ring-gold shadow-subtle hover:shadow-card active:scale-[0.99]",
      secondary:
        "bg-ivory text-charcoal hover:bg-ivory-dark focus-visible:ring-charcoal/20 border border-charcoal/10",
      outline:
        "border border-navy/20 bg-transparent text-navy hover:bg-navy/5 focus-visible:ring-navy",
      ghost:
        "bg-transparent text-charcoal hover:bg-charcoal/5 focus-visible:ring-charcoal/20",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:ring-[#25D366] shadow-subtle hover:shadow-card font-semibold active:scale-[0.99]",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
