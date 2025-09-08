"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import Image from "next/image"
import { sendGAEvent } from "@next/third-parties/google"
import { useTikTokModal } from "@/hooks/use-tiktok-modal"
import { QRCodeModal } from "@/components/qr-code-modal"

export function HeroSection() {
  const { isModalOpen, setModalOpen, shouldOpenModal } = useTikTokModal()

  const handleCTAClick = () => {
    try {
      sendGAEvent("event", "cta_click", {
        section: "hero",
        label: "無料で恋愛タイプを診断する",
      })
    } catch {}
    if (shouldOpenModal()) return
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(config.lineAddFriendUrl, "_blank")
    }
  }

  return (
    <section className="relative text-center py-20 px-4 flex flex-col items-center min-h-[90vh] justify-center">
      <QRCodeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10"
      >
        <motion.p 
          className="mb-8 text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-uranight-pink-beige via-white to-uranight-pink-beige bg-clip-text text-transparent font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{ duration: 2, times: [0, 0.5, 0.8, 1] }}
        >
          あなただけの恋愛専門AI占い師
        </motion.p>
        <h1 className="font-julius text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider text-white drop-shadow-[0_0_40px_rgba(247,200,176,0.4)]">
          URANIGHT
        </h1>
      </motion.div>

      <motion.div
        className="mt-16 z-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        whileHover={{ y: -5 }}
      >
        <motion.div 
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/6]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hero_image.png"
            alt="Uranight恋愛AI占い"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 max-w-2xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="space-y-6 mb-10">
          <motion.p 
            className="text-lg sm:text-xl text-uranight-pink-beige"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            ✨ 24時間いつでも、あなたの恋の悩みに寄り添います ✨
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-2 px-2">
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs sm:text-sm">
              #AI恋愛カウンセリング
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs sm:text-sm">
              #相性診断
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs sm:text-sm">
              #恋愛タイプ診断
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          onViewportEnter={() => {
            try {
              sendGAEvent("event", "cta_view", {
                section: "hero",
                label: "無料で恋愛タイプを診断する",
              })
            } catch {}
          }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-line-green to-green-500 hover:from-green-500 hover:to-line-green text-white font-bold text-base sm:text-lg py-5 sm:py-6 px-6 sm:px-10 rounded-full shadow-xl shadow-green-500/40 transition-all duration-300 transform hover:scale-105 sm:hover:scale-110 hover:shadow-green-500/60 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            無料で恋愛タイプを診断する
          </Button>
          
          <p className="text-sm text-gray-400 mt-4">
            今なら初回診断無料・いつでも解約OK
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}