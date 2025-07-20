"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function SimpleCtaSection() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(config.lineAddFriendUrl, "_blank")
    }
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className="font-julius text-3xl sm:text-4xl md:text-5xl text-white mb-6">
          今すぐ恋愛運を変える
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          AIがあなたの恋愛傾向を分析し、
          <br />
          最適なアドバイスをお届けします
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-5 h-5" />
            <p className="text-lg">初回診断は完全無料</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-5 h-5" />
            <p className="text-lg">3分で恋愛タイプが分かる</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-uranight-pink-beige">
            <ArrowRight className="w-5 h-5" />
            <p className="text-lg">いつでも解約可能</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-line-green hover:bg-line-green/90 text-white font-bold text-xl py-8 px-12 rounded-full shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={32} height={32} className="w-8 h-8 mr-4" />
            無料で恋愛タイプを診断する
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6">
          ※LINEアプリが開きます
        </p>
      </motion.div>
    </section>
  )
}