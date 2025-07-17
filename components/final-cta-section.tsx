"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface FinalCTASectionProps {
  onCTAClick: () => void
}

export function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "本当に無料ですか？",
      answer: "はい、初回の恋愛運診断とLOVEコード診断は完全無料です。"
    },
    {
      question: "診断にかかる時間は？",
      answer: "約3分で診断が完了します。生年月日を入力するだけの簡単操作です。"
    },
    {
      question: "個人情報は安全ですか？",
      answer: "SSL暗号化通信で保護されており、第三者への提供は一切ありません。"
    }
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f224b] via-[#6b4f9b] to-[#f7c8b0] opacity-90" />

      <div className="relative z-10 container mx-auto text-center">
        <motion.h2
          className="font-julius text-3xl sm:text-4xl md:text-5xl mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          今すぐ、運命を変える一歩を
        </motion.h2>

        <motion.p
          className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          あなたのLOVEコードが、新しい恋愛の扉を開きます
        </motion.p>

        {/* 3ステップ表示 */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="bg-[#F7C8B0] text-[#1f224b] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
            <span className="text-sm">LINE友だち追加</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="bg-[#F7C8B0] text-[#1f224b] w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
            <span className="text-sm">生年月日入力</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="bg-[#F7C8B0] text-[#1f224b] w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
            <span className="text-sm">診断結果GET!</span>
          </div>
        </motion.div>

        {/* メインCTA */}
        <motion.div
          className="transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={onCTAClick}
            className="bg-[#00C300] hover:bg-[#00B300] text-white text-lg sm:text-xl font-bold py-6 px-8 sm:px-12 rounded-full shadow-2xl inline-flex items-center gap-3"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={32} height={32} className="w-8 h-8" />
無料で恋愛運を診断する
          </Button>
        </motion.div>

        {/* マイクロコピー */}
        <motion.p
          className="mt-4 text-xs text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          ※LINEアプリが開きます。いつでもブロック解除可能です。
        </motion.p>

        {/* よくある質問 */}
        <motion.div
          className="mt-16 max-w-md mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-lg font-bold mb-4 text-center">よくあるご質問</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <button
                  className="w-full text-left flex justify-between items-center cursor-pointer text-sm font-medium"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-xs text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}