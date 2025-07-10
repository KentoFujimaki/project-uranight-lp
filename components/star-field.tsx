"use client"

import { useEffect, useState } from "react"

// 決定的な疑似乱数生成器
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// 星のデータを生成する関数
function generateStars(count: number) {
  const stars = []
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: seededRandom(i * 2) * 100,
      left: seededRandom(i * 3) * 100,
      size: seededRandom(i * 5) * 2 + 1,
      animationDelay: seededRandom(i * 7) * 5,
      animationDuration: seededRandom(i * 11) * 5 + 5,
    })
  }
  return stars
}

export function StarField() {
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // クライアントサイドでのみ実行
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // 星の数を設定
    const starCount = isMobile ? 30 : 100
    setStars(generateStars(starCount))
  }, [isMobile])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full twinkle-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}