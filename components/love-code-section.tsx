"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Sparkles, Users, ArrowRight } from "lucide-react"

const loveCodeExamples = [
  { code: "PR", title: "対等×刺激", description: "互いを尊重しながら刺激し合う、成長型の恋愛タイプ", color: "from-purple-400 to-pink-400" },
  { code: "CE", title: "創造×社交", description: "楽しみを創り出し、多くの人と豊かな関係を築く恋愛タイプ", color: "from-blue-400 to-purple-400" },
  { code: "MW", title: "理想×情熱", description: "高い理想を持ちながら情熱的に愛を貫く恋愛タイプ", color: "from-red-400 to-orange-400" },
  { code: "GS", title: "誠実×知性", description: "誠実さと深い知性で安定した愛を育む恋愛タイプ", color: "from-green-400 to-teal-400" },
]

interface LoveCodeSectionProps {
  onCTAClick: () => void
}

export function LoveCodeSection({ onCTAClick }: LoveCodeSectionProps) {
  const [selectedCode, setSelectedCode] = useState<number | null>(null)

  return (
    <motion.section 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl mb-4">
              LOVE CODEで恋愛運を鑑定
            </h2>
          </motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            4000年の歴史を持つ四柱推命の通変星理論をベースに、
            <br className="hidden sm:inline" />
            宿命星（恋愛傾向）×配偶者宮（理想の相手）の科学的分析で、
            <br className="hidden sm:inline" />
            10×10=100通りの恋愛パターンから、あなただけの運命を発見。
          </p>
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center gap-2 mb-6">
            <span className="text-yellow-300">✨</span>
            <p className="text-sm font-bold text-yellow-300">
              あなたの通変星から導くLOVEコードは？今すぐ無料診断
            </p>
          </div>
        </div>

        {/* LOVEコード例 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {loveCodeExamples.map((example, index) => (
            <motion.div
              key={example.code}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                selectedCode === index ? 'ring-2 ring-[#F7C8B0] scale-105' : ''
              }`}
              onClick={() => setSelectedCode(index)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-10 rounded-2xl`} />
              <div className="relative z-10">
                <div className={`text-3xl sm:text-4xl font-julius mb-2 bg-gradient-to-r ${example.color} bg-clip-text text-transparent`}>
                  {example.code}
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">{example.title}</h3>
                <p className="text-xs text-gray-300">{example.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 相性チェック機能のプレビュー */}
        <motion.div
          className="bg-gradient-to-r from-[#6B4F9B]/20 to-[#F7C8B0]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-julius mb-4">
                気になる人との相性も
                <br />
                パーセンテージで表示
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xl font-julius">
                    PR
                  </div>
                  <Heart className="w-6 h-6 text-[#F7C8B0]" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-xl font-julius">
                    GS
                  </div>
                  <div className="ml-auto text-2xl font-bold text-[#F7C8B0]">
                    88%
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  対等な刺激と誠実な知性が絵妙に結びつく組み合わせ。
                  互いを尊重し、深い絆で結ばれる安定した関係です。
                </p>
              </div>
              <Button
                onClick={onCTAClick}
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-base py-3 px-6"
              >
                <Image src="/LINE_Brand_icon.png" alt="LINE" width={20} height={20} className="w-5 h-5 mr-2" />
無料で恋愛運を診断する
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7C8B0]/20 to-[#6B4F9B]/20 rounded-full blur-3xl" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-[#F7C8B0] mx-auto mb-4" />
                    <p className="text-6xl font-julius text-white mb-2">100</p>
                    <p className="text-lg">通りの恋愛タイプ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SNSシェア要素 */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-gray-300 mb-4">
            <Users className="inline w-4 h-4 mr-2" />
            友達とLOVEコードをシェアして盛り上がろう！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #私のLOVEコードはPR
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #Uranight診断
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              #恋愛タイプ診断
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}