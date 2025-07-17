"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLineAdd = () => {
    // LINE友達追加のディープリンク
    window.open("https://line.me/R/ti/p/@uranight", "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && !isMinimized && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:bottom-6"
        >
          <div className="bg-gradient-to-r from-[#00C300] to-[#00B300] rounded-full shadow-2xl shadow-green-500/50 p-1">
            <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
              <Button
                onClick={handleLineAdd}
                className="bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base flex items-center gap-2 sm:gap-3 p-0"
              >
                <Image src="/LINE_Brand_icon.png" alt="LINE" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm">今なら無料診断！</div>
                  <div className="text-sm sm:text-base">恋愛運を診断する</div>
                </div>
              </Button>
              <button
                onClick={() => setIsMinimized(true)}
                className="ml-4 text-white/70 hover:text-white transition-colors"
                aria-label="閉じる"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}