"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <footer className="relative z-10 text-center py-8 px-4 bg-black/30 backdrop-blur-sm border-t border-white/10">
      <p className="font-julius text-lg text-white">Uranight</p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-gray-400">
        {!isHome && (
          <Link href="/" className="hover:text-white transition-colors font-medium">
            ホーム
          </Link>
        )}
        <Link href="/company" className="hover:text-white transition-colors">
          運営企業情報
        </Link>
        <Link href="/legal" className="hover:text-white transition-colors">
          特定商取引法に基づく表記
        </Link>
        <Link href="/terms" className="hover:text-white transition-colors">
          利用規約
        </Link>
        <Link href="/privacy" className="hover:text-white transition-colors">
          プライバシーポリシー
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-500">&copy; 2025 Uranight. All Rights Reserved.</p>
    </footer>
  )
}