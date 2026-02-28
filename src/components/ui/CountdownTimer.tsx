"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CountdownUnit {
  value: number
  label: "DAYS" | "HRS" | "MINS" | "SECS"
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    setMounted(true)

    // Calculate end date ONLY on client
    const endDate =
      new Date().getTime() + 3 * 24 * 60 * 60 * 1000

    const updateTime = () => {
      setTimeLeft(endDate - Date.now())
    }

    updateTime()

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Prevent SSR mismatch
  if (!mounted) return null

  const calculateUnits = (): CountdownUnit[] => {
    const total = Math.max(timeLeft, 0)

    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const mins = Math.floor((total / (1000 * 60)) % 60)
    const secs = Math.floor((total / 1000) % 60)

    return [
      { value: days, label: "DAYS" },
      { value: hours, label: "HRS" },
      { value: mins, label: "MINS" },
      { value: secs, label: "SECS" },
    ]
  }

  return (
    <div className="flex gap-6">
      {calculateUnits().map((unit) => (
        <div key={unit.label} className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-3xl font-serif text-[#D4AF37]"
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>
          </AnimatePresence>

          <p className="text-xs text-gray-400">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  )
}