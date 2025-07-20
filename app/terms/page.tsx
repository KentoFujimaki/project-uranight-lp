"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">利用規約</h2>
              <p className="text-gray-300 text-sm">最終更新日：2025年1月17日</p>
            </div>
            
            <div className="space-y-6 text-white">
              <section>
                <h3 className="text-xl font-bold mb-3">第1条（適用）</h3>
                <p className="text-gray-300 leading-relaxed">
                  本規約は、ロケーションインサイト株式会社（以下「当社」といいます。）が提供するサービス「Uranight」（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第2条（利用登録）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、本サービスの利用登録をすることができます。</p>
                  <p>2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>虚偽の事項を届け出た場合</li>
                    <li>その他、当社が利用登録を相当でないと判断した場合</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第3条（料金および支払方法）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. ユーザーは、本サービスの利用にあたり、当社が別途定める利用料金を支払うものとします。</p>
                  <p>2. 料金の支払いは、LINEアプリ内課金システムを通じて行うものとします。</p>
                  <p>3. ユーザーが利用料金の支払いを遅滞した場合、年14.6％の割合による遅延損害金を支払うものとします。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第4条（禁止事項）</h3>
                <p className="text-gray-300 mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第5条（本サービスの提供の停止等）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第6条（著作権）</h3>
                <p className="text-gray-300 leading-relaxed">
                  本サービスによって提供される占い結果、アドバイス、その他のコンテンツの著作権は当社に帰属します。ユーザーは個人的な利用の範囲を超えて、これらを使用することはできません。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第7条（免責事項）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
                  <p>2. 本サービスは娯楽を目的とした占いサービスであり、その結果について当社は一切の責任を負いません。</p>
                  <p>3. 当社は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第8条（サービス内容の変更等）</h3>
                <p className="text-gray-300 leading-relaxed">
                  当社は、ユーザーへの事前の通知なく、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第9条（利用規約の変更）</h3>
                <p className="text-gray-300 leading-relaxed">
                  当社は、ユーザーに通知することなく、本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲示したときから効力を生じるものとします。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第10条（準拠法・裁判管轄）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 本規約の解釈にあたっては、日本法を準拠法とします。</p>
                  <p>2. 本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
    </>
  )
}