"use client"

import { useEffect, useState } from "react"

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const updateStatus = () => setIsOffline(!navigator.onLine)

    updateStatus()

    window.addEventListener("online", updateStatus)
    window.addEventListener("offline", updateStatus)

    return () => {
      window.removeEventListener("online", updateStatus)
      window.removeEventListener("offline", updateStatus)
    }
  }, [])

  if (!isOffline) return null

  return (
    <div className="fixed top-0 left-0 w-full bg-gold text-noir text-sm text-center py-2 z-50">
      You're offline — some features may not work ✨
    </div>
  )
}