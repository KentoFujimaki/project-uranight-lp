import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// in-app browser detection (simple UA-based)
export function isInAppBrowser(userAgent?: string): boolean {
  const ua = (userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '')).toLowerCase()
  if (!ua) return false
  return (
    ua.includes('fb_iab') ||
    ua.includes('instagram') ||
    ua.includes('line') ||
    ua.includes('wechat') ||
    ua.includes('twitter') ||
    ua.includes('tiktok') ||
    ua.includes('wv')
  )
}

export function isTikTok(userAgent?: string): boolean {
  const ua = (userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '')).toLowerCase()
  return ua.includes('tiktok')
}
