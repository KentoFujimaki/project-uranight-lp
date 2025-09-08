"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { QrCode, Smartphone } from "lucide-react"
import { config } from "@/lib/config"
import { isTikTok } from "@/lib/utils"

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const inTikTok = isTikTok(ua)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#1F224B] to-[#6B4F9B] border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-center font-julius text-2xl tracking-wide">
            LINEで友達追加
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-4">
          {/* 案内テキスト（TikTokなどのインアプリブラウザ向け） */}
          {inTikTok && (
            <p className="text-xs text-center text-gray-300 leading-5 px-4">
              TikTokアプリ内ブラウザでは正常に遷移できない場合があります。<br />
              右上のメニューから「ブラウザで開く」を選択するか、下のQRコードをご利用ください。
            </p>
          )}

          {/* QRコード（本番QRへ差し替え推奨） */}
          <div className="bg-white p-4 rounded-2xl">
            {/* ここに本番のQRコード画像URLを設定してください */}
            <Image src="/placeholder.svg" alt="LINE友だち追加QR" width={192} height={192} />
            <p className="text-center text-black text-xs mt-2">※QRコードが読み取れない場合はボタンをタップ</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">QRコードを読み取るか</p>
            <p className="text-sm text-gray-300">下のボタンから友達追加してください</p>
          </div>

          {/* 公式「友だち追加」ボタン（画像+lin.ee） */}
          <a href={config.lineAddFriendUrl} target="_blank" rel="noopener noreferrer" className="block">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height={36} />
          </a>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Smartphone className="w-4 h-4" />
            <span>スマートフォンからタップで簡単追加</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}