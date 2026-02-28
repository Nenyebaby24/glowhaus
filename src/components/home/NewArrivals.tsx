"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/lib/dummy-data/products"
import BestsellerCard from "./BestsellerCard"

const tabs = ["all", "hair", "nails", "accessories"] as const
type Tab = typeof tabs[number]

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState<Tab>("all")

  const filtered = products.filter(p => {
    if (!p.isNew) return false
    if (activeTab === "all") return true
    return p.category === activeTab
  })

  return (
    <section className="py-24 px-6 bg-[#FDF8EE]">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl mb-6">
            New Arrivals
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-2 transition ${
                  activeTab === tab
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map(product => (
              <BestsellerCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/new"
            className="text-[#D4AF37] font-medium"
          >
            Shop All New Arrivals →
          </a>
        </div>
      </div>
    </section>
  )
}