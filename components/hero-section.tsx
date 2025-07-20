"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import Image from "next/image"

export function HeroSection() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(config.lineAddFriendUrl, "_blank")
    }
  }

  return (
    <section className="relative text-center py-20 px-4 flex flex-col items-center min-h-[90vh] justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10"
      >
        <h1 className="font-julius text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          Uranight
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
          あなただけの恋愛専門AI占い師
        </p>
      </motion.div>

      <motion.div
        className="mt-12 max-w-2xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="space-y-6 mb-10">
          <p className="text-lg sm:text-xl text-uranight-pink-beige">
            24時間いつでも、あなたの恋の悩みに寄り添います
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #AI恋愛カウンセリング
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #相性診断
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #恋愛タイプ診断
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-line-green hover:bg-line-green/90 text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-6 h-6 mr-3" />
            無料で恋愛タイプを診断する
          </Button>
          
          <p className="text-sm text-gray-400 mt-4">
            今なら初回診断無料・いつでも解約OK
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px]">
          <Image
            src="/uranight-love-fortune-mockup.png"
            alt="Uranight恋愛AI占い"
            fill
            className="object-contain rounded-3xl shadow-2xl shadow-uranight-pink-beige/20"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}