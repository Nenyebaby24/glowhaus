"use client"

import { useState, useMemo } from "react"
import { reviews as dummyReviews, Review } from "@/lib/dummy-data/reviews"
import ReviewCard from "./ReviewCard"
import WriteReviewModal from "./WriteReviewModal"

interface Props {
  productId: string
  
}

export default function ReviewsSection({ productId }: Props) {
  const [allReviews, setAllReviews] = useState(
    dummyReviews.filter(r => r.productId === productId)
  )

  const [sort, setSort] = useState("recent")
  const [filter, setFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)
  const [modalOpen, setModalOpen] = useState(false)

  const average =
    allReviews.reduce((a, r) => a + r.rating, 0) /
    (allReviews.length || 1)

  const breakdown = [5,4,3,2,1].map(star => {
    const count = allReviews.filter(r => r.rating === star).length
    return {
      star,
      percent: (count / (allReviews.length || 1)) * 100
    }
  })

  const filtered = useMemo(() => {
    let r = [...allReviews]

    if (filter !== "all") {
      if (filter === "3below") {
        r = r.filter(r => r.rating <= 3)
      } else {
        r = r.filter(r => r.rating === Number(filter))
      }
    }

    if (sort === "recent") {
      r.sort((a,b) => +new Date(b.date) - +new Date(a.date))
    }

    if (sort === "highest") {
      r.sort((a,b) => b.rating - a.rating)
    }

    if (sort === "lowest") {
      r.sort((a,b) => a.rating - b.rating)
    }

    return r
  }, [allReviews, sort, filter])

  return (
    <div className="mt-24">
      {/* SUMMARY */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">

        <div>
          <p className="text-6xl font-serif text-[#D4AF37]">
            {average.toFixed(1)}
          </p>
          <p className="text-gray-500 mt-2">
            Based on {allReviews.length} reviews
          </p>
        </div>

        <div className="space-y-3">
          {breakdown.map(b => (
            <div key={b.star} className="flex items-center gap-3">
              <span className="w-6">{b.star}★</span>
              <div className="flex-1 bg-gray-200 h-2">
                <div
                  className="bg-[#D4AF37] h-2"
                  style={{ width: `${b.percent}%` }}
                />
              </div>
              <span className="text-sm text-gray-500">
                {Math.round(b.percent)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select onChange={e => setSort(e.target.value)}>
          <option value="recent">Most Recent</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>

        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="5">5★</option>
          <option value="4">4★</option>
          <option value="3below">3★ & below</option>
        </select>

        <button
          onClick={() => setModalOpen(true)}
          className="ml-auto bg-black text-white px-6 py-2"
        >
          Write a Review
        </button>
      </div>

      {/* REVIEWS */}
      <div className="space-y-8">
        {filtered.slice(0, visibleCount).map(r => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <button
          onClick={() => setVisibleCount(v => v + 6)}
          className="mt-10 border px-6 py-3"
        >
          Load More
        </button>
      )}

      <WriteReviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(newReview: Review) => {
          setAllReviews([newReview, ...allReviews])
        }}
      />
    </div>
  )
}