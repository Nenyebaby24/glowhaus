"use client"

import { useState } from "react"
import Image from "next/image"
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider"

export default function GalleryCard({ item, onClick }: any) {
  const [likes, setLikes] = useState(48)

  return (
    <div className="relative group break-inside-avoid cursor-pointer">

      {item.beforeAfter ? (
        <BeforeAfterSlider before={item.image} after={item.image} />
      ) : (
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      <div
        onClick={onClick}
        className="absolute inset-0 bg-black/50 opacity-0 
                   group-hover:opacity-100 transition 
                   flex items-center justify-center"
      >
        <div className="text-white text-center">
          <p className="uppercase text-xs mb-2">{item.category}</p>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setLikes((prev) => prev + 1)
            }}
          >
            ❤ {likes}
          </button>

          <p className="mt-2">🔍</p>
        </div>
      </div>

    </div>
  )
}