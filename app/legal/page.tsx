"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function LegalPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-white hover:text-uranight-pink-beige transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            トップページに戻る
          </Link>

          <h1 className="font-julius text-4xl sm:text-5xl text-white mb-12">
            Legal Information
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8">特定商取引法に基づく表記</h2>
            
            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">販売業者</h3>
                <p className="text-lg">ロケーションインサイト株式会社</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">運営統括責任者</h3>
                <p className="text-lg">藤巻 賢人</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">所在地</h3>
                <p className="text-lg">
                  〒101-0051<br />
                  東京都千代田区神田神保町2丁目3番地1
                </p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">電話番号</h3>
                <p className="text-lg">03-6206-4314</p>
                <p className="text-sm text-gray-300 mt-1">※お問い合わせはLINEアプリ内よりお願いいたします</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">販売価格</h3>
                <p className="text-lg">月額980円（税込）</p>
                <p className="text-sm text-gray-300 mt-1">※初回診断は無料</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">商品代金以外の必要料金</h3>
                <p className="text-lg">通信料金（お客様のご負担となります）</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">支払方法</h3>
                <p className="text-lg">LINEアプリ内課金</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">支払時期</h3>
                <p className="text-lg">サービス利用開始時</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">サービスの提供時期</h3>
                <p className="text-lg">お支払い確認後、即時利用可能</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">返品・キャンセルについて</h3>
                <p className="text-lg">
                  デジタルコンテンツの性質上、返品・返金はお受けできません。<br />
                  解約はいつでも可能です。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
    </>
  )
}