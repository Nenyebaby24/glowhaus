"use client"

import { useState } from "react"
import type { Review } from "@/lib/dummy-data/reviews"

export default function ReviewCard({ review }: { review: Review }) {
  const [yes, setYes] = useState(review.helpfulYes)
  const [no, setNo] = useState(review.helpfulNo)

  return (
    <div className="border-b pb-8">

      <div className="flex justify-between">
        <div>
          <p className="font-semibold">{review.name}</p>
          {review.verified && (
            <span className="text-xs text-[#D4AF37]">
              ✓ Verified Purchase
            </span>
          )}
        </div>

        <span className="text-sm text-gray-400">
          {review.date}
        </span>
      </div>

      <div className="mt-2">
        {"★".repeat(review.rating)}
        {"☆".repeat(5 - review.rating)}
      </div>

      <h4 className="font-semibold mt-3">
        {review.headline}
      </h4>

      <p className="text-gray-600 mt-2">
        {review.body}
      </p>

      <div className="mt-4 text-sm text-gray-500 flex gap-6">
        <button onClick={() => setYes(y => y + 1)}>
          👍 Yes ({yes})
        </button>
        <button onClick={() => setNo(n => n + 1)}>
          👎 No ({no})
        </button>
      </div>
    </div>
  )
}