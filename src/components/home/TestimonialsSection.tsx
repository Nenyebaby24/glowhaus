"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/lib/testimonials"
import { Rating } from "@/components/ui/Rating"

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 bg-[#FDF8EE]">
      <div className="container mx-auto text-center max-w-3xl">

        <h2 className="font-serif text-4xl mb-12">
          What Our Clients Say
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Rating value={5} />
            </div>

            <p className="text-lg italic mb-6">
              "{testimonials[index].quote}"
            </p>

            <p className="font-semibold">
              {testimonials[index].name}
            </p>

            <span className="text-xs text-[#D4AF37]">
              Verified Purchase
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}