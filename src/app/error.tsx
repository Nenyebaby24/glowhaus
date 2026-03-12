"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDF8EE] text-center px-6">

      <div className="mb-6 text-3xl font-playfair text-gold">
        GlowHaus
      </div>

      <div className="w-24 h-[2px] bg-gold mb-8" />

      <h1 className="text-4xl font-cormorant text-gold mb-4">
        Something went wrong on our end.
      </h1>

      <p className="text-noir/70 mb-8">
        We're fixing it!
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-gold text-noir px-6 py-3 rounded-full"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="border border-gold text-gold px-6 py-3 rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}