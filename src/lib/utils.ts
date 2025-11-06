import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  const merged = twMerge(clsx(inputs))
  return typeof merged === "string" ? merged : String(merged)
}
