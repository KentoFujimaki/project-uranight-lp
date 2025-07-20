"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function CompanyPage() {
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
            Company Info
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8">運営企業情報</h2>
            
            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">法人名</h3>
                <p className="text-lg">ロケーションインサイト株式会社</p>
                <p className="text-sm text-gray-300 mt-1">Location Insight Inc.</p>
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
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">代表者</h3>
                <p className="text-lg">藤巻 賢人</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">設立</h3>
                <p className="text-lg">2019年3月28日</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">事業内容</h3>
                <p className="text-lg">AIアプリケーションの開発・運営</p>
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