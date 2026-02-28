"use client"

import { Star } from "lucide-react"
import { useState } from "react"

interface RatingProps {
  value?: number
  interactive?: boolean
  onChange?: (value: number) => void
}

export function Rating({
  value = 0,
  interactive = false,
  onChange,
}: RatingProps) {
  const [hover, setHover] = useState<number | null>(null)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = hover ?? value

        return (
          <Star
            key={star}
            size={20}
            className={`cursor-pointer transition ${
              star <= filled
                ? "fill-[#D4AF37] text-[#D4AF37]"
                : "text-gray-300"
            }`}
            onMouseEnter={() => interactive && setHover(star)}
            onMouseLeave={() => interactive && setHover(null)}
            onClick={() => interactive && onChange?.(star)}
          />
        )
      })}
    </div>
  )
}