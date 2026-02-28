"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { X } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  category: string
  tags?: string[]
  isNew?: boolean
  isBestseller?: boolean
  isOnSale?: boolean
  inStock?: boolean
  images: string[]
}

interface Props {
  title: string
  bannerImage: string
  products: Product[]
}

export default function CategoryLayout({
  title,
  bannerImage,
  products,
}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // -------------------
  // STATE
  // -------------------
  const [sort, setSort] = useState(searchParams.get("sort") || "newest")
  const [rating, setRating] = useState<number | null>(
    searchParams.get("rating")
      ? Number(searchParams.get("rating"))
      : null
  )
  const [inStock, setInStock] = useState(
    searchParams.get("inStock") === "true"
  )
  const [badge, setBadge] = useState<string | null>(
    searchParams.get("badge")
  )
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("min")) || 0
  )
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("max")) || 100000
  )
  const [drawerOpen, setDrawerOpen] = useState(false)

  // -------------------
  // SYNC URL
  // -------------------
  useEffect(() => {
    const params = new URLSearchParams()

    if (sort) params.set("sort", sort)
    if (rating) params.set("rating", rating.toString())
    if (inStock) params.set("inStock", "true")
    if (badge) params.set("badge", badge)
    if (minPrice) params.set("min", minPrice.toString())
    if (maxPrice !== 100000) params.set("max", maxPrice.toString())

    router.replace(`?${params.toString()}`)
  }, [sort, rating, inStock, badge, minPrice, maxPrice, router])

  // -------------------
  // FILTER + SORT
  // -------------------
  const filtered = useMemo(() => {
    let result = [...products]

    result = result.filter(
      p => p.price >= minPrice && p.price <= maxPrice
    )

    if (rating) {
      result = result.filter(p => p.rating >= rating)
    }

    if (inStock) {
      result = result.filter(p => p.inStock)
    }

    if (badge === "new") {
      result = result.filter(p => p.isNew)
    }

    if (badge === "bestseller") {
      result = result.filter(p => p.isBestseller)
    }

    if (badge === "sale") {
      result = result.filter(p => p.isOnSale)
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "popular":
        result.sort((a, b) => b.reviews - a.reviews)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    return result
  }, [products, sort, rating, inStock, badge, minPrice, maxPrice])

  const clearAll = () => {
    setSort("newest")
    setRating(null)
    setInStock(false)
    setBadge(null)
    setMinPrice(0)
    setMaxPrice(100000)
  }

  return (
    <div>
      {/* HERO */}
      <div
        className="relative h-[260px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 text-white">
          <p className="text-sm opacity-80">Home › {title}</p>
          <h1 className="text-5xl font-serif">{title}</h1>
          <p className="mt-2 text-sm">
            Showing {filtered.length} products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex gap-10">
        {/* SIDEBAR DESKTOP */}
        <aside className="hidden lg:block w-[260px] sticky top-24">
          <FilterContent
            sort={sort}
            setSort={setSort}
            rating={rating}
            setRating={setRating}
            inStock={inStock}
            setInStock={setInStock}
            badge={badge}
            setBadge={setBadge}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">
          {/* ACTIVE FILTERS */}
          <div className="flex flex-wrap gap-3 mb-6">
            {rating && (
              <Chip
                label={`${rating}★ & Up`}
                onRemove={() => setRating(null)}
              />
            )}
            {inStock && (
              <Chip
                label="In Stock"
                onRemove={() => setInStock(false)}
              />
            )}
            {badge && (
              <Chip
                label={badge.toUpperCase()}
                onRemove={() => setBadge(null)}
              />
            )}
            {(rating || inStock || badge) && (
              <button
                onClick={clearAll}
                className="text-sm underline"
              >
                Clear All
              </button>
            )}
          </div>

          {/* MOBILE FILTER BUTTON */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden mb-6 border px-4 py-2 rounded-full"
          >
            Filters
          </button>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => (
              <div key={product.id}>
                <img
                  src={product.images[0]}
                  className="aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="font-serif mt-3">
                  {product.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden flex items-end">
          <div className="bg-white w-full p-6 rounded-t-2xl">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <X onClick={() => setDrawerOpen(false)} />
            </div>
            <FilterContent
              sort={sort}
              setSort={setSort}
              rating={rating}
              setRating={setRating}
              inStock={inStock}
              setInStock={setInStock}
              badge={badge}
              setBadge={setBadge}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------------- CHIP ---------------- */

function Chip({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
      {label}
      <X size={14} className="cursor-pointer" onClick={onRemove} />
    </div>
  )
}

/* ---------------- FILTER CONTENT ---------------- */

interface FilterContentProps {
  sort: string
  setSort: (value: string) => void
  rating: number | null
  setRating: (value: number | null) => void
  inStock: boolean
  setInStock: (value: boolean) => void
  badge: string | null
  setBadge: (value: string | null) => void
  minPrice: number
  maxPrice: number
  setMinPrice: (value: number) => void
  setMaxPrice: (value: number) => void
}

function FilterContent({
  sort,
  setSort,
  rating,
  setRating,
  inStock,
  setInStock,
  badge,
  setBadge,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">Sort By</h4>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  )
}