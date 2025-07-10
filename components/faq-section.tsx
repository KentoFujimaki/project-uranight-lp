"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "Uranightは本当に無料で使えますか？",
    answer: "はい、基本的な恋愛運診断は完全無料でご利用いただけます。友達追加後すぐに診断を開始でき、追加料金は一切かかりません。より詳細な相性診断などの一部機能は有料オプションとしてご用意しています。"
  },
  {
    question: "個人情報は安全に管理されますか？",
    answer: "お客様の個人情報は最高水準のセキュリティで保護されています。生年月日などの情報は暗号化され、第三者に提供されることは一切ありません。プライバシーポリシーに基づき、安全に管理しています。"
  },
  {
    question: "診断結果はどのくらい正確ですか？",
    answer: "Uranightは伝統的な四柱推命と最新のAI技術を組み合わせることで、高精度な診断を実現しています。28,000人以上のユーザーから★4.8の高評価をいただいており、多くの方に満足していただいています。"
  },
  {
    question: "友達追加後、通知がたくさん来ませんか？",
    answer: "ご安心ください。重要なお知らせや月1回の運勢更新など、必要最小限の通知のみお送りします。通知設定はLINEアプリから簡単に変更できますので、お好みに合わせて調整していただけます。"
  },
  {
    question: "相性診断には相手の同意が必要ですか？",
    answer: "いいえ、相手の方の同意は必要ありません。相性診断は生年月日のみで行いますので、相手の方に知られることなく診断できます。結果は完全に秘密が守られますのでご安心ください。"
  }
]

interface FAQSectionProps {
  onCTAClick: () => void
}

export function FAQSection({ onCTAClick }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <motion.section 
      className="py-20 px-4 bg-black/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl mb-4">
            よくある質問
          </h2>
          <p className="text-gray-300">
            <MessageCircle className="inline w-5 h-5 mr-2" />
            みなさまからよくいただく質問にお答えします
          </p>
        </div>

        <Accordion 
          type="multiple" 
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-base sm:text-lg font-medium pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            他にご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full shadow-lg shadow-green-500/30"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            友達追加して始める
          </Button>
        </div>
      </div>
    </motion.section>
  )
}