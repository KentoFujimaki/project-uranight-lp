"use client"

import type React from "react"

import type { FC } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LineIcon } from "@/components/icons"
import { Heart, Users, BookOpen, BrainCircuit, Smartphone, Database, Star, Sparkles, Wand2, Clock, Gift, TrendingUp } from "lucide-react"
import { FloatingCTA } from "@/components/floating-cta"
import { QRCodeModal } from "@/components/qr-code-modal"
import { FAQSection } from "@/components/faq-section"

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
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full twinkle-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

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
          <motion.p
            className="mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 px-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            夜空に散りばめられた星のひかりで、
            <br className="hidden sm:inline" />
            あなただけの愛の物語を照らす運命のサイン。
          </motion.p>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <LineIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">友達追加で無料診断</span>
              <span className="sm:hidden">無料診断</span>
            </Button>
            <p className="mt-4 text-xs sm:text-sm text-yellow-300 animate-pulse">
              <Gift className="inline w-4 h-4 mr-1" />
              期間限定！初回診断無料
            </p>
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
        
        {/* Social Proof Section */}
        <section className="py-12 px-4 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#F7C8B0]" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-bold">{userCount.toLocaleString()}人</p>
                  <p className="text-sm text-gray-300">が利用中</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-400" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-bold">★4.8</p>
                  <p className="text-sm text-gray-300">ユーザー評価</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#F7C8B0]" />
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-bold">3分</p>
                  <p className="text-sm text-gray-300">で診断完了</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <MotionSection className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl">あなただけの愛の物語を紐解く</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              伝統的な占術と最新のAI技術が融合し、あなたの恋愛を多角的に分析。運命の人との出会いから、関係の深化までをサポートします。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
              <FeatureCard
                icon={<Heart className="w-10 h-10 text-[#F7C8B0]" />}
                title="恋愛運診断"
                description="四柱推命に基づき、あなたの基本的な恋愛傾向や運命の流れを詳細に鑑定します。"
                imageSrc="/uranight-compatibility-mockup.png"
              />
              <FeatureCard
                icon={<Users className="w-10 h-10 text-[#F7C8B0]" />}
                title="相性診断"
                description="気になるあの人との相性をAIが多角的に分析。二人の関係をより良くするヒントが見つかります。"
                imageSrc="/uranight-partner-management-mockup.png"
              />
              <FeatureCard
                icon={<BookOpen className="w-10 h-10 text-[#F7C8B0]" />}
                title="パートナー管理"
                description="複数のパートナーとの相性を記録・管理。過去の鑑定結果をいつでも見返せます。"
                imageSrc="/uranight-app-history.png"
              />
            </div>
            <div className="mt-12">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full shadow-lg shadow-green-500/30"
              >
                <LineIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                友達追加で今すぐ診断
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* Uniqueness Section */}
        <MotionSection className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl">Uranightが選ばれる理由</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
              <UniquePoint
                icon={<Wand2 className="w-12 h-12 text-[#F7C8B0]" />}
                title="四柱推命 × AI分析"
                description="古くから伝わる運命学と、最新のAI技術を掛け合わせることで、これまでにない高精度な分析を実現しました。"
              />
              <UniquePoint
                icon={<Smartphone className="w-12 h-12 text-[#F7C8B0]" />}
                title="LINEで完結する手軽さ"
                description="アプリのインストールは不要。LINEさえあれば、いつでもどこでも本格的な占いを手軽に楽しめます。"
              />
              <UniquePoint
                icon={<Database className="w-12 h-12 text-[#F7C8B0]" />}
                title="あなたの恋愛データを記録"
                description="鑑定結果は安全に保存され、あなたの恋愛パターンを分析。パーソナルな恋愛アドバイザーとして寄り添います。"
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
                <LineIcon className="w-5 h-5 mr-2" />
                特典を受け取る
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

        {/* CTA Section */}
        <MotionSection className="py-24 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="font-julius text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
              さあ、あなたの夜空に
              <br className="hidden sm:inline" />
              運命の星を探しにいきましょう
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300">AIはいつでもあなたの味方です。</p>
            <div className="mt-12">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-10 rounded-full shadow-lg shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <LineIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 md:mr-4" />
                友達追加で無料診断を始める
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">30秒で簡単登録・診断スタート</p>
          </div>
        </MotionSection>
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
