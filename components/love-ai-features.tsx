"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import Image from "next/image"

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "恋愛タイプ診断",
    description: "AI分析であなたの恋愛傾向を徹底解析。自分でも気づかない恋愛パターンが明らかに。"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "24時間恋愛相談",
    description: "深夜の不安も即座に解決。AIカウンセラーがいつでもあなたの恋の悩みに寄り添います。"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "相性診断",
    description: "気になる人との相性を即座に診断。複数の相手との相性も一覧で確認できます。"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "恋愛運カレンダー",
    description: "デートに最適な日、告白のタイミングなど、恋愛に特化した運勢を毎日お届け。"
  }
]

export function LoveAiFeatures() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(config.lineAddFriendUrl, "_blank")
    }
  }

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-julius text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            恋愛の全てをサポート
          </h2>
          <p className="text-lg text-gray-300">
            最新のAI技術で、あなたの恋を成功に導きます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-uranight-pink-beige/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-uranight-purple/50 rounded-full p-3 text-uranight-pink-beige">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-julius text-xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-uranight-pink-beige/20 to-uranight-purple/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-lg text-white mb-6">
              今なら初回診断が<span className="text-uranight-pink-beige font-bold text-xl">完全無料</span>
            </p>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-line-green hover:bg-line-green/90 text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg shadow-green-500/30"
            >
              <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-6 h-6 mr-3" />
              無料で恋愛タイプを診断する
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}