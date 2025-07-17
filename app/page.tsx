"use client"

import type React from "react"

import type { FC } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, BrainCircuit, Smartphone, Database, Star, Sparkles, Wand2, Clock, Gift, TrendingUp, ArrowRight, Check, ChevronDown } from "lucide-react"
import { FloatingCTA } from "@/components/floating-cta"
import { QRCodeModal } from "@/components/qr-code-modal"
import { FAQSection } from "@/components/faq-section"
import { StarField } from "@/components/star-field"
import { LoveCodeSection } from "@/components/love-code-section"
import { CalendarFeature } from "@/components/calendar-feature"
import { FinalCTASection } from "@/components/final-cta-section"

const MotionSection: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
)

export default function UranightLandingPage() {
  const [qrModalOpen, setQrModalOpen] = useState(false)
  const [userCount, setUserCount] = useState(28543)
  
  // ユーザー数のアニメーション
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleCTAClick = () => {
    // モバイルならディープリンク、PCならQRコード
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open("https://line.me/R/ti/p/@uranight", "_blank")
    } else {
      setQrModalOpen(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen text-white font-noto relative">
      <StarField />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-center py-24 md:py-32 px-4 flex flex-col items-center min-h-[80vh] justify-center overflow-hidden">
          <div className="absolute inset-0 bg-aurora">
            <div className="aurora-layer aurora-layer-1"></div>
            <div className="aurora-layer aurora-layer-2"></div>
            <div className="aurora-layer aurora-layer-3"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-julius text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[4px] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] drop-shadow-[0_0_60px_rgba(200,180,255,0.3)]">Uranight</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light">あなたの夜空に運命の星を</p>
          </motion.div>
          <motion.div
            className="mt-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-8 space-y-6">
              {/* 問いかけ - フォーカス効果 */}
              <div className="text-center transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-1">
                  運命の人は、もう現れているかもしれません
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F7C8B0] to-transparent mx-auto"></div>
              </div>
              
              {/* メインメッセージ - 透明感 */}
              <div className="text-center py-4 bg-white/5 backdrop-blur-sm rounded-2xl border-l-2 border-r-2 border-[#F7C8B0]/30">
                <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed px-4">
                  AI × 四柱推命が導く、あなたの恋愛未来図
                </p>
              </div>
              
              {/* サブメッセージ - シンプル */}
              <div className="text-center space-y-2">
                <p className="text-sm sm:text-base text-gray-200/90">
                  出会い・片思い・結婚時期まで、1分で本格診断
                </p>
                <p className="text-xs sm:text-sm text-gray-300/80">
                  24時間いつでも、恋愛の全てをサポート
                </p>
              </div>
              
              {/* ハッシュタグ - バッジスタイル */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm text-white/90">
                  #恋愛運鑑定
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm text-white/90">
                  #相性診断
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm text-white/90">
                  #運勢カレンダー
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm text-white/90">
                  #AIチャット24H
                </div>
              </div>
            </div>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* リリース記念キャンペーン */}
              <div className="text-center mb-4">
                <p className="text-xs sm:text-sm text-yellow-400 font-medium animate-pulse">
                  <span className="inline-flex items-center gap-1">
                    <span>🎉</span> 先行リリース記念！早期登録特典あり
                  </span>
                </p>
              </div>
              
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                {/* アニメーション効果 */}
                <span className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative flex items-center justify-center">
                  <Image src="/LINE_Brand_icon.png" alt="LINE" width={28} height={28} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3" />
                  無料で恋愛運を診断する
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
                <span className="inline-flex items-center gap-1">
                  <span>🔒</span> 月額980円上限・いつでも解約OK
                </span>
              </p>
              
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px]">
              <Image
                src="/uranight-love-fortune-mockup.png"
                alt="Uranight App Mockup"
                fill
                className="object-contain rounded-3xl shadow-2xl shadow-[#F7C8B0]/20 border-2 border-white/20"
                priority
              />
            </div>
          </motion.div>
        </section>
        
        {/* LOVEコードセクション */}
        <LoveCodeSection onCTAClick={handleCTAClick} />

        {/* Features Section */}
        <MotionSection className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl">あなただけの愛の物語を紐解く</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              従来の占いサービスの「高額請求」「占い師による品質のばらつき」「依存リスク」を解決。
              <br className="hidden sm:inline" />
              AI技術により一貫性のある分析と、月額980円の安心価格で健全な恋愛サポートを実現します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
              <FeatureCard
                icon={<Star className="w-10 h-10 text-[#F7C8B0]" />}
                title="無料で本格鑑定"
                description="初回の恋愛運鑑定は完全無料。LOVEコード診断であなたの恋愛タイプを今すぐチェック。"
                imageSrc="/uranight-compatibility-mockup.png"
              />
              <FeatureCard
                icon={<BrainCircuit className="w-10 h-10 text-[#F7C8B0]" />}
                title="24時間セルフカウンセリング"
                description="チャット形式で悩みを分解→行動提案までワンストップ。人に言えない恋愛相談も、LINEミニアプリで気軽に24時間365日対応。"
                imageSrc="/uranight-partner-management-mockup.png"
              />
              <FeatureCard
                icon={<Heart className="w-10 h-10 text-[#F7C8B0]" />}
                title="相性診断"
                description="気になる人との相性を％で表示。複数人との相性を一覧管理できます。"
                imageSrc="/uranight-app-history.png"
              />
            </div>
            <div className="mt-12">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full shadow-lg shadow-green-500/30"
              >
                <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                無料で恋愛運を診断する
              </Button>
            </div>
            {/* 運勢カレンダー機能 */}
            <CalendarFeature onCTAClick={handleCTAClick} />
          </div>
        </MotionSection>

        {/* Uniqueness Section */}
        <MotionSection className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl">3つの核心価値</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Uranightが提供する、他にはない価値
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
              <UniquePoint
                icon={<Smartphone className="w-12 h-12 text-[#F7C8B0]" />}
                title="安心の定額制と健全な利用"
                description="月額980円の上限設定で、従来の「1分●円」や100万円超の高額請求とは無縁。依存を防ぐ設計と、使うほど精度が上がるパーソナライズ機能で健全に継続。"
              />
              <UniquePoint
                icon={<Wand2 className="w-12 h-12 text-[#F7C8B0]" />}
                title="データドリブン四柱推命"
                description="四柱推命の統計的な特性とAIの相性は抜群。数万件の鑑定ログをAIが学習し、従来の手動占いの「当たり外れ」を統計補正。同じ質問でもブレない、一貫性のある回答を実現。"
              />
              <UniquePoint
                icon={<BrainCircuit className="w-12 h-12 text-[#F7C8B0]" />}
                title="24時間セルフカウンセリング"
                description="チャット形式で悩みを分解→行動提案までワンストップ。人に言えない恋愛相談も、LINEミニアプリで気軽に24時間365日対応。"
              />
            </div>
            <div className="mt-12 p-6 bg-gradient-to-r from-[#F7C8B0]/20 to-[#6B4F9B]/20 rounded-2xl backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl font-bold mb-2">
                <Gift className="inline w-6 h-6 mr-2 text-[#F7C8B0]" />
                今だけの特別オファー！
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                友達追加で以下の特典をプレゼント：
              </p>
              <ul className="text-left text-sm sm:text-base space-y-2 mb-6">
                <li>✨ あなたの恋愛運勢レポート（通常1,980円→無料）</li>
                <li>💕 相性診断1回無料クーポン</li>
                <li>📅 毎月の恋愛運カレンダー</li>
              </ul>
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold w-full sm:w-auto"
              >
                <Image src="/LINE_Brand_icon.png" alt="LINE" width={20} height={20} className="w-5 h-5 mr-2" />
                無料で恋愛運を診断する
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* How to Use Section */}
        <MotionSection className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl">簡単3ステップで始める</h2>
            <div className="relative mt-16 max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 hidden md:block"></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                <HowToStep
                  step="1"
                  title="LINEで友だち追加"
                  description="まずはUranight公式アカウントを友だち追加。ここから全てが始まります。"
                  icon={<Sparkles className="w-10 h-10 text-[#F7C8B0]" />}
                />
                <HowToStep
                  step="2"
                  title="情報を入力"
                  description="あなたと、気になるお相手の生年月日などを入力。秘密は厳守します。"
                  icon={<BrainCircuit className="w-10 h-10 text-[#F7C8B0]" />}
                />
                <HowToStep
                  step="3"
                  title="診断結果を見る"
                  description="AIが即座に分析。あなただけの運命の物語が、美しい星空と共に現れます。"
                  icon={<Star className="w-10 h-10 text-[#F7C8B0]" />}
                />
              </div>
            </div>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <FAQSection onCTAClick={handleCTAClick} />

        {/* Final CTA Section */}
        <FinalCTASection onCTAClick={handleCTAClick} />
      </main>

      <footer className="text-center py-8 px-4 bg-black/30 backdrop-blur-sm">
        <p className="font-julius text-lg">Uranight</p>
        <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            利用規約
          </a>
          <a href="#" className="hover:text-white transition-colors">
            プライバシーポリシー
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-500">&copy; 2025 Uranight. All Rights Reserved.</p>
      </footer>
      <FloatingCTA />
      <QRCodeModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </div>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
  imageSrc,
}: { icon: React.ReactNode; title: string; description: string; imageSrc: string }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white/10 h-full flex flex-col"
    whileHover={{
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(247, 200, 176, 0.1), 0 8px 10px -6px rgba(247, 200, 176, 0.1)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex-grow">
      <div className="mx-auto bg-[#6B4F9B]/50 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-julius text-lg sm:text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
    </div>
    <div className="mt-4 sm:mt-6">
      <div className="relative w-[140px] h-[280px] sm:w-[160px] sm:h-[320px] md:w-[180px] md:h-[360px] mx-auto">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} Mockup`}
          fill
          className="object-contain rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </motion.div>
)

const UniquePoint = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="mb-4">{icon}</div>
    <h3 className="font-julius text-lg sm:text-xl mb-2 text-white">{title}</h3>
    <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
  </div>
)

const HowToStep = ({
  step,
  title,
  description,
  icon,
}: { step: string; title: string; description: string; icon: React.ReactNode }) => (
  <div className="relative z-10 flex flex-col items-center text-center px-4">
    <div className="relative mb-4">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#6B4F9B] to-[#F7C8B0] flex items-center justify-center text-white text-2xl sm:text-3xl font-bold font-julius shadow-lg">
        {step}
      </div>
      <div className="absolute -top-2 -right-2 scale-75 sm:scale-100">{icon}</div>
    </div>
    <h3 className="font-julius text-lg sm:text-xl mt-4 mb-2 text-white">{title}</h3>
    <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
  </div>
)
