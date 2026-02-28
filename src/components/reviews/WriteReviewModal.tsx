"use client"

import { useState } from "react"
import type { Review } from "@/lib/dummy-data/reviews"

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (review: Review) => void
}

export default function WriteReviewModal({
  open,
  onClose,
  onSubmit
}: Props) {

  const [rating, setRating] = useState(0)
  const [headline, setHeadline] = useState("")
  const [body, setBody] = useState("")

  if (!open) return null

  const handleSubmit = () => {
    if (body.length < 20) return alert("Minimum 20 characters")

    const newReview: Review = {
      id: crypto.randomUUID(),
      productId: "silk-straight-wig",
      name: "You",
      rating,
      headline,
      body,
      date: new Date().toISOString(),
      verified: true,
      helpfulYes: 0,
      helpfulNo: 0,
    }

    onSubmit(newReview)
    onClose()
    alert("Review submitted for moderation ✨")
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 w-full max-w-lg">

        <h3 className="text-xl font-semibold mb-6">
          Write a Review
        </h3>

        <div className="flex gap-2 mb-4">
          {[1,2,3,4,5].map(star => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="text-2xl"
            >
              {star <= rating ? "★" : "☆"}
            </button>
          ))}
        </div>

        <input
          placeholder="Headline"
          value={headline}
          onChange={e => setHeadline(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <textarea
          placeholder="Write your review..."
          value={body}
          onChange={e => setBody(e.target.value)}
          className="w-full border p-2 mb-4"
          rows={4}
        />

        <div className="flex justify-between">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-2"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}