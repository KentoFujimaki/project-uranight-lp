"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { QrCode, Smartphone } from "lucide-react"

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#1F224B] to-[#6B4F9B] border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-center font-julius text-2xl tracking-wide">
            LINEで友達追加
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="bg-white p-4 rounded-2xl">
            <QrCode className="w-48 h-48 text-black" />
            <p className="text-center text-black text-xs mt-2">※実際のQRコードに置き換えてください</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">QRコードを読み取るか</p>
            <p className="text-sm text-gray-300">下のボタンから友達追加してください</p>
          </div>

          <Button
            onClick={() => window.open("https://line.me/R/ti/p/@uranight", "_blank")}
            className="bg-[#00C300] hover:bg-[#00B300] text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg shadow-green-500/30 w-full max-w-xs"
          >
            <Image src="/LINE_Brand_icon.png" alt="LINE" width={24} height={24} className="w-6 h-6 mr-3" />
            LINEで友達追加する
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Smartphone className="w-4 h-4" />
            <span>スマートフォンからタップで簡単追加</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}