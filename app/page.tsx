"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { LoveAiFeatures } from "@/components/love-ai-features"
import { SimpleCtaSection } from "@/components/simple-cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"

export default function Home() {
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