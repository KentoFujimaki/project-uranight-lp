"use client"

import { motion } from "framer-motion"
import { Calendar, Heart, TrendingUp, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CalendarFeatureProps {
  onCTAClick: () => void
}

export function CalendarFeature({ onCTAClick }: CalendarFeatureProps) {
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"]
  const sampleDates = [
    { day: 15, luck: "excellent", label: "大吉" },
    { day: 18, luck: "good", label: "吉" },
    { day: 22, luck: "excellent", label: "大吉" },
    { day: 27, luck: "normal", label: "普通" },
  ]

  return (
    <motion.div
      className="mt-16 bg-gradient-to-r from-[#6B4F9B]/20 to-[#F7C8B0]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-[#F7C8B0]" />
            <h3 className="text-xl sm:text-2xl font-julius">運勢カレンダー</h3>
          </div>
          <p className="text-gray-300 mb-6">
            デートに最適な日をアドバイス。告白のタイミングも占術で分析します。
          </p>
          
          {/* カレンダーサンプル */}
          <div className="bg-white/5 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-7 gap-1 text-xs sm:text-sm">
              {weekDays.map(day => (
                <div key={day} className="text-center p-2 text-gray-400">
                  {day}
                </div>
              ))}
              {[...Array(31)].map((_, i) => {
                const date = i + 1
                const dateInfo = sampleDates.find(d => d.day === date)
                return (
                  <div
                    key={date}
                    className={`text-center p-2 rounded ${
                      dateInfo
                        ? dateInfo.luck === "excellent"
                          ? "bg-[#F7C8B0]/30 text-[#F7C8B0] font-bold"
                          : dateInfo.luck === "good"
                          ? "bg-[#6B4F9B]/30 text-[#6B4F9B]"
                          : "bg-white/10"
                        : ""
                    }`}
                  >
                    {date}
                    {dateInfo && (
                      <div className="text-xs mt-1">{dateInfo.label}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#F7C8B0]" />
              <span>恋愛運が高まる日を事前にお知らせ</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#6B4F9B]" />
              <span>年運・月運・日運の総合判断</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-400" />
              <span>避けるべき日も事前に把握</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7C8B0]/40 to-[#6B4F9B]/40 rounded-full blur-3xl" />
            <motion.div
              className="relative z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="w-32 h-32 text-white/80" />
            </motion.div>
          </div>
          <p className="mt-6 text-lg font-bold mb-4">
            最適なタイミングで
            <br />
            恋愛を成功に導く
          </p>
          <Button
            onClick={onCTAClick}
            className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={20} height={20} className="w-5 h-5 mr-2" />
無料で恋愛運を診断する
          </Button>
        </div>
      </div>
    </motion.div>
  )
}