"use client"

import { useStore } from "@/store/useStore"

export default function TopBar() {
  const tier = useStore((s) => s.tier)
  const points = useStore((s) => s.points)

  return (
    <div className="h-[36px] flex items-center justify-between px-6 text-sm bg-black text-white overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        Free delivery on orders over ₦50,000
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <span>My Account</span>
        <span>Track Order</span>
        <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-xs">
          {tier} • {points} pts
        </span>
      </div>
    </div>
  )
}