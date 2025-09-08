import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// in-app browser detection (simple UA-based)
function getUserAgent(userAgent?: string): string {
  return (userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '')).toLowerCase()
}

export function isInAppBrowser(userAgent?: string): boolean {
  const ua = getUserAgent(userAgent)
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
  const ua = getUserAgent(userAgent)
  return ua.includes('tiktok')
}
