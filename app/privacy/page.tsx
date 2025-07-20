"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">プライバシーポリシー</h2>
              <p className="text-gray-300 text-sm">最終更新日：2025年1月17日</p>
            </div>
            
            <div className="space-y-6 text-white">
              <section>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ロケーションインサイト株式会社（以下「当社」といいます。）は、本サービス「Uranight」（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第1条（個人情報）</h3>
                <p className="text-gray-300 leading-relaxed">
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第2条（個人情報の収集方法）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>当社は、ユーザーが利用登録をする際に以下の情報をお尋ねすることがあります。</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>生年月日</li>
                    <li>性別</li>
                    <li>LINEユーザーID</li>
                    <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第3条（個人情報を収集・利用する目的）</h3>
                <p className="text-gray-300 mb-2">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                  <li>本サービスの提供・運営のため</li>
                  <li>ユーザーからのお問い合わせに回答するため</li>
                  <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                  <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                  <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第4条（利用目的の変更）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</p>
                  <p>2. 利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第5条（個人情報の第三者提供）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第6条（個人情報の開示）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあります。</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                    <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                    <li>その他法令に違反することとなる場合</li>
                  </ul>
                  <p>2. 前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第7条（個人情報の訂正および削除）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。</p>
                  <p>2. 当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</p>
                  <p>3. 当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第8条（個人情報の利用停止等）</h3>
                <p className="text-gray-300 leading-relaxed">
                  当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、その旨本人に通知します。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第9条（プライバシーポリシーの変更）</h3>
                <div className="space-y-2 text-gray-300">
                  <p>1. 本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</p>
                  <p>2. 当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">第10条（お問い合わせ窓口）</h3>
                <p className="text-gray-300 leading-relaxed">
                  本ポリシーに関するお問い合わせは、LINEアプリ内のお問い合わせフォームまでお願いいたします。
                </p>
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