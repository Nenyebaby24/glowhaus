"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAccountStore } from "@/store/accountStore"

export default function AccountSidebar() {
  const pathname = usePathname()
  const { name, tier } = useAccountStore()

  const links = [
    { name: "Dashboard", href: "/account" },
    { name: "Orders", href: "/account/orders" },
    { name: "Appointments", href: "/account/appointments" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Loyalty", href: "/account/loyalty" },
    { name: "Profile Settings", href: "/account/profile" },
  ]

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      {/* Avatar */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4" />
        <h3 className="font-semibold">{name}</h3>
        <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
          {tier}
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`px-4 py-2 rounded-lg ${
              pathname === link.href
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

    </div>
  )
}