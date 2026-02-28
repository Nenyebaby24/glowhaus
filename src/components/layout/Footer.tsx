"use client"

import { Instagram, Music2, Pin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import toast from "react-hot-toast"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("You're on the list! 🌸")
  }

  return (
    <footer className="bg-[#0D0D0D] text-[#C2B8A3] pt-16">
      {/* Row 1 */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-12">
        <div>
          <h2 className="text-3xl text-yellow-600 font-serif">
            GlowHaus
          </h2>
          <p className="mt-4 text-sm">
            Where beauty meets luxury
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-black border border-yellow-700/40 focus:outline-none focus:border-yellow-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-600 text-black font-medium hover:bg-yellow-500 transition"
          >
            Join the Club
          </button>
        </form>
      </div>

      {/* Gold Divider */}
      <div className="border-t border-yellow-700/30" />

      {/* Row 2 */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Shop */}
        <FooterColumn
          title="Shop"
          links={[
            "Hair",
            "Nails",
            "Accessories",
            "Sale",
            "New Arrivals",
          ]}
        />

        {/* Services */}
        <FooterColumn
          title="Services"
          links={[
            "Book Appointment",
            "Services Menu",
            "Gift Cards",
            "Corporate Orders",
          ]}
        />

        {/* Help */}
        <FooterColumn
          title="Help"
          links={[
            "FAQs",
            "Shipping & Returns",
            "Track Order",
            "Contact Us",
            "Size Guide",
          ]}
        />

        {/* Follow */}
        <div>
          <h4 className="text-yellow-600 font-serif mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <SocialIcon>
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon>
              <Music2 size={20} />
            </SocialIcon>
            <SocialIcon>
              <Pin size={20} />
            </SocialIcon>
            <SocialIcon>
              <MessageCircle size={20} />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="border-t border-yellow-700/30" />

      {/* Row 3 */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        <div>© 2025 GlowHaus. All rights reserved.</div>

        <div className="flex gap-6">
          <span className="hover:text-yellow-600 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-yellow-600 cursor-pointer">
            Terms
          </span>
          <span className="hover:text-yellow-600 cursor-pointer">
            Cookie Policy
          </span>
        </div>

        {/* Dummy payment icons */}
        <div className="flex gap-4 items-center">
          <div className="w-10 h-6 bg-gray-700 rounded" />
          <div className="w-10 h-6 bg-gray-600 rounded" />
          <div className="w-10 h-6 bg-gray-500 rounded" />
        </div>
      </div>
    </footer>
  )
}

/* ---------- Sub Components ---------- */

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: string[]
}) {
  return (
    <div>
      <h4 className="text-yellow-600 font-serif mb-4">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li
            key={link}
            className="hover:text-yellow-600 transition cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="hover:text-yellow-600 cursor-pointer transition"
    >
      {children}
    </motion.div>
  )
}