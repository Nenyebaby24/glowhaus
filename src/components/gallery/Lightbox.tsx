"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface LightboxProps {
  items: any[]
  index: number
  onClose: () => void
  setIndex: (index: number) => void
}

export default function Lightbox({
  items,
  index,
  onClose,
  setIndex,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const currentItem = items[index]

  const prev = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1)
  }

  const next = () => {
    setIndex(index === items.length - 1 ? 0 : index + 1)
  }

  /* ---------------- Keyboard Controls ---------------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [index])

  /* ---------------- Swipe Controls ---------------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    if (distance > 50) next()
    if (distance < -50) prev()

    touchStartX.current = null
    touchEndX.current = null
  }

  /* ---------------- Share ---------------- */
  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ✕
      </button>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-4xl"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-6 text-white text-4xl"
      >
        ›
      </button>

      {/* IMAGE */}
      <div
        className="relative w-[90%] max-w-4xl h-[70vh]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={currentItem.image}
          alt={currentItem.title}
          fill
          className="object-contain"
        />
      </div>

      {/* CAPTION + ACTIONS */}
      <div className="absolute bottom-10 text-center text-white">
        <p className="mb-4">
          Client: Jane Doe · Service: Silk Press & Style · by GlowHaus
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleShare}
            className="border px-4 py-2 rounded-full"
          >
            Share
          </button>

          <a
            href={currentItem.image}
            download
            className="border px-4 py-2 rounded-full"
          >
            Download
          </a>
        </div>
      </div>

    </div>
  )
}