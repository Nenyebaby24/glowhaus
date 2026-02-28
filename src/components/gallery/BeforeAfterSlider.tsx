"use client"

import { useState, useRef } from "react"
import Image from "next/image"

export default function BeforeAfterSlider({ before, after }: any) {
  const [position, setPosition] = useState(50)
  const ref = useRef<HTMLDivElement>(null)

  const update = (clientX: number) => {
    const rect = ref.current!.getBoundingClientRect()
    const percent = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percent)))
  }

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl"
      onMouseMove={(e) => e.buttons === 1 && update(e.clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <Image src={before} alt="before" fill className="object-cover" />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image src={after} alt="after" fill className="object-cover" />
      </div>

      <div
        className="absolute top-0 h-full w-1 bg-white"
        style={{ left: `${position}%` }}
      />

      <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs px-3 py-1 rounded-full">
        Before
      </span>

      <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
        After
      </span>
    </div>
  )
}