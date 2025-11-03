import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Use when we want to add or merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
