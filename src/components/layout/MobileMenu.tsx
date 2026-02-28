"use client"

import { motion } from "framer-motion"
import { useStore } from "@/store/useStore"
import { X } from "lucide-react"

export default function MobileMenu() {
  const setMobileMenuOpen = useStore((s) => s.setMobileMenuOpen)

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 h-screen w-full bg-[#FAF7F2] z-50 p-6"
    >
      <div className="flex justify-end">
        <X onClick={() => setMobileMenuOpen(false)} />
      </div>

      <div className="mt-12 flex flex-col gap-6 text-xl">
        <span>Hair</span>
        <span>Nails</span>
        <span>Accessories</span>
        <span>Book</span>
        <span>Gallery</span>
        <span>Sale</span>
      </div>

      <div className="absolute bottom-10 flex flex-col gap-4">
        <span>Account</span>
        <span>Wishlist</span>
        <span>Book Appointment</span>
      </div>
    </motion.div>
  )
}