"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { LoveAiFeatures } from "@/components/love-ai-features"
import { SimpleCtaSection } from "@/components/simple-cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { sendGAEvent } from "@next/third-parties/google"

export default function Home() {
  useEffect(() => {
    try {
      // Next.jsのApp Routerではルート変更検知を使わず、初回表示のpage_view送信のみ行う
      // （/appはSSRとクライアントの混在のため、過剰送信を避ける）
      sendGAEvent("event", "page_view", { page_path: "/" })
    } catch {
      // GA未設定時にエラーにならないようガード
    }
  }, [])
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <HeroSection />
        <LoveAiFeatures />
        <SimpleCtaSection />
        <FloatingCTA />
      </main>
      <Footer />
    </>
  )
}