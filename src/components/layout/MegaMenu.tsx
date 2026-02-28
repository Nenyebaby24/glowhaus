"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Props {
  activeMenu: string | null
  setActiveMenu: (menu: string | null) => void
}

const categories: Record<string, string[]> = {
  hair: ["Wigs", "Weaves", "Extensions", "Closures & Frontals", "Hair Care", "Accessories"],
  nails: ["Press-On Nails", "Gel Kits", "Nail Art", "Tools & Lamps", "Nail Care"],
  accessories: ["Silk & Satin", "Makeup Tools", "Skincare", "Mirrors & Lighting", "Perfume"],
}

export default function MegaMenu({ activeMenu, setActiveMenu }: Props) {
  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
          className="absolute left-0 w-full bg-white shadow-xl p-12 grid grid-cols-3 gap-8"
        >
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {categories[activeMenu].map((item) => (
              <div key={item} className="hover:text-yellow-700 cursor-pointer">
                {item}
              </div>
            ))}
            <button className="mt-4 px-6 py-2 bg-yellow-700 text-white w-fit">
              Shop All {activeMenu}
            </button>
          </div>

          <div className="relative w-full h-60">
            <Image
              src="/featured.jpg"
              alt="Featured"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}