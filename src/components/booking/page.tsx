"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/lib/dummy-data/services"

type TabValue = "all" | "hair" | "nails" | "beauty"

const tabs: { label: string; value: TabValue }[] = [
  { label: "All", value: "all" },
  { label: "Hair Services", value: "hair" },
  { label: "Nail Services", value: "nails" },
  { label: "Beauty Services", value: "beauty" },
]

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("all")

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab)

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#faf8f4] py-24 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-cormorant font-semibold mb-4">
          Book Your Glow Session
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional hair, nail & beauty services at your fingertips
        </p>

        {/* Decorative Gold Line */}
        <div className="mt-10 flex justify-center">
          <div className="w-40 h-[3px] bg-yellow-600 rounded-full" />
        </div>

      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-12">

        <div className="flex gap-8 border-b relative">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className="relative pb-4 text-sm md:text-base font-medium"
            >
              {tab.label}

              {activeTab === tab.value && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-yellow-600"
                />
              )}
            </button>
          ))}
        </div>

      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Placeholder Image */}
              <div className="w-full h-56 bg-gray-100" />

              <div className="p-6 space-y-4">

                <h3 className="font-playfair text-xl font-semibold">
                  {service.name}
                </h3>

                <div className="flex justify-between items-center text-sm">

                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    ⏱ {service.duration}
                  </span>

                  <span className="text-yellow-600 font-semibold">
                    From ₦{service.price.toLocaleString()}
                  </span>

                </div>

                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>

                {/* Dynamic Tags */}
                <div className="flex gap-2 flex-wrap">

                  {service.name.toLowerCase().includes("bridal") && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      bridal
                    </span>
                  )}

                  {service.price >= 20000 && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      popular
                    </span>
                  )}

                </div>

                <Link
                  href={`/booking/${service.id}`}
                  className="block text-center bg-yellow-600 text-white py-3 rounded-md mt-4"
                >
                  Book Now
                </Link>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#faf8f4] py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-playfair font-semibold mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">
                Choose Your Service
              </h3>
              <p className="text-gray-600 text-sm">
                Browse and select your preferred beauty service.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-semibold mb-2">
                Pick a Date & Time
              </h3>
              <p className="text-gray-600 text-sm">
                Choose a convenient date and time slot.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold mb-2">
                Show Up & Glow
              </h3>
              <p className="text-gray-600 text-sm">
                Arrive at your session and enjoy your transformation.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}