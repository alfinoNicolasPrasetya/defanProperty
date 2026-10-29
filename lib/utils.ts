import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | null | undefined): string {
  if (price === null || price === undefined || isNaN(price)) {
    return "Hubungi Kami";
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceShort(price: number | null | undefined): string {
  if (price === null || price === undefined || isNaN(price)) {
    return "Hubungi Sales";
  }
  if (price >= 1_000_000_000) {
    const miliar = price / 1_000_000_000;
    return `Rp ${miliar % 1 === 0 ? miliar.toFixed(0) : miliar.toFixed(1)} Miliar`;
  }
  if (price >= 1_000_000) {
    const juta = price / 1_000_000;
    return `Rp ${juta % 1 === 0 ? juta.toFixed(0) : juta.toFixed(0)} Juta`;
  }
  return formatPrice(price);
}
