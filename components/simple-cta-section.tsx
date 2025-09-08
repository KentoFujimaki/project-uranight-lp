"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { useState } from "react"
import { isTikTok } from "@/lib/utils"
import { QRCodeModal } from "@/components/qr-code-modal"

export function SimpleCtaSection() {
  const [openModal, setOpenModal] = useState(false)

  const handleCTAClick = () => {
    try {
      sendGAEvent("event", "cta_click", {
        section: "simple",
        label: "無料で恋愛タイプを診断する",
      })
    } catch {}

    if (isTikTok()) {
      setOpenModal(true)
      return
    }
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(config.lineAddFriendUrl, "_blank")
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4">
      <QRCodeModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          今すぐ恋愛運を変える
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
          AIがあなたの恋愛傾向を分析し、
          <br className="hidden sm:block" />
          最適なアドバイスをお届けします
        </p>

        <div className="space-y-3 sm:space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <p className="text-base sm:text-lg">初回診断は完全無料</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <p className="text-base sm:text-lg">3分で恋愛タイプが分かる</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <p className="text-base sm:text-lg">いつでも解約可能</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onViewportEnter={() => {
            try {
              sendGAEvent("event", "cta_view", {
                section: "simple",
                label: "無料で恋愛タイプを診断する",
              })
            } catch {}
          }}
        >
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-line-green hover:bg-line-green/90 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-7 md:py-8 px-6 sm:px-8 md:px-12 rounded-full shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-300 w-full max-w-sm sm:max-w-md mx-auto"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3 md:mr-4 flex-shrink-0" />
            <span className="whitespace-nowrap">無料で恋愛タイプを診断する</span>
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6">
          ※LINEアプリが開きます
        </p>
      </motion.div>
    </section>
  )
}