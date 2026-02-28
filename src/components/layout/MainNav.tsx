"use client"

import Link from "next/link"
import { Heart, ShoppingBag, Search, Menu } from "lucide-react"
import { useStore } from "@/store/useStore"
import { useSearch } from "@/store/useSearch"

interface Props {
  setActiveMenu: (menu: string | null) => void
}

export default function MainNav({ setActiveMenu }: Props) {
  const cartCount = useStore((s) => s.cartCount)
  const wishlistCount = useStore((s) => s.wishlistItems.length)
  const setCartOpen = useStore((s) => s.setCartOpen)
  const setMobileMenuOpen = useStore((s) => s.setMobileMenuOpen)
  const open = useSearch((s) => s.open)

  return (
    <div className="h-[72px] flex items-center justify-between px-6">
      {/* Mobile hamburger */}
      <div className="md:hidden">
        <Menu onClick={() => setMobileMenuOpen(true)} />
      </div>

      {/* Logo */}
      <Link href="/" className="text-3xl text-yellow-700 font-serif">
        GlowHaus
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {["Hair", "Nails", "Accessories"].map((item) => (
          <div
            key={item}
            onMouseEnter={() => setActiveMenu(item.toLowerCase())}
            onMouseLeave={() => setActiveMenu(null)}
            className="cursor-pointer"
          >
            {item}
          </div>
        ))}
        <Link href="/book">Book</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/sale">Sale</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Search className="hidden md:block cursor-pointer" onClick={open} />

        <div className="relative">
          <Heart />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              {wishlistCount}
            </span>
          )}
        </div>

        <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
          <ShoppingBag />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}