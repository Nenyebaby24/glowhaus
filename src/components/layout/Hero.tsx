"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { slides } from "@/lib/dummy-data/hero"

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#FDF8EE] h-[85vh] md:h-screen">
      {/* Gold Decorative Orbs */}
      <div className="absolute w-40 h-40 bg-[#D4AF37]/10 rounded-full top-10 left-10 blur-3xl" />
      <div className="absolute w-60 h-60 bg-[#D4AF37]/10 rounded-full bottom-20 right-20 blur-3xl" />

      <div className="container mx-auto h-full px-6 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full grid md:grid-cols-2 gap-10 items-center"
          >
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <p className="text-[#D4AF37] tracking-[0.2em] text-sm font-medium">
                {slides[index].eyebrow}
              </p>

              <h1 className="font-serif text-4xl md:text-6xl leading-tight">
                {slides[index].title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-gray-600 max-w-md">
                {slides[index].subtext}
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/shop">
                  <Button variant="primary">
                    {slides[index].ctaPrimary}
                  </Button>
                </Link>

                <Link href="/services">
                  <Button variant="outline">
                    {slides[index].ctaSecondary}
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-4">
                <span>✓ Authentic Products</span>
                <span>✓ Free Returns</span>
                <span>✓ Next Day Delivery</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src={slides[index].image}
                alt="Beauty Hero"
                className="rounded-2xl shadow-xl float"
              />

              {/* Floating Mini Cards */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-sm">
                ⭐ 4.9 Rating — 2,000+ reviews
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-sm">
                💅 Book Today — Slots available
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-[#D4AF37]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}