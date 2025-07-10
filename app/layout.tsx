import type React from "react"
import type { Metadata } from "next"
import { Julius_Sans_One, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
})

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "Uranight（ウラナイト）- あなたの夜空に運命の星を",
  description:
    "四柱推命とAI分析であなたの恋愛運を診断するLINEミニアプリ「Uranight」。気になる人との相性や運命の流れを、美しい星空と共にお届けします。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn("antialiased", julius.variable, notoSansJp.variable)}>{children}</body>
    </html>
  )
}
