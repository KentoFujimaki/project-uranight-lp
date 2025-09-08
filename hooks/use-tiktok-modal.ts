import { useState, useCallback } from 'react'
import { isTikTok } from '@/lib/utils'

export function useTikTokModal() {
  const [isModalOpen, setModalOpen] = useState(false)

  const shouldOpenModal = useCallback(() => {
    if (isTikTok()) {
      setModalOpen(true)
      return true
    }
    return false
  }, [])

  return { isModalOpen, setModalOpen, shouldOpenModal }
}
