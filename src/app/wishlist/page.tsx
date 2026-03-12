"use client"

import { useState, useMemo } from "react"
import { useStore } from "@/store/useStore"
import ProductCard from "@/components/catalogue/ProductCard"
import toast from "react-hot-toast"
import EmptyState from "@/components/ui/EmptyState"
import HeartIllustration from "@/components/ui/HeartIllustration"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart, addToWishlist } = useStore()
  const [sort, setSort] = useState("date")

  // --- SORTING LOGIC ---
  const sortedItems = useMemo(() => {
    if (!wishlistItems) return []
    const items = [...wishlistItems]
    switch (sort) {
      case "low": return items.sort((a, b) => a.price - b.price)
      case "high": return items.sort((a, b) => b.price - a.price)
      case "category": return items.sort((a, b) => (a.category || "").localeCompare(b.category || ""))
      default: return items
    }
  }, [wishlistItems, sort])

  // --- HANDLERS ---
  const handleRemove = (product: any) => {
    removeFromWishlist(product.id)
    toast((t) => (
      <div className="flex justify-between items-center gap-4">
        <span>Removed from wishlist</span>
        <button
          onClick={() => { addToWishlist(product); toast.dismiss(t.id); }}
          className="underline font-semibold"
        > Undo </button>
      </div>
    ))
  }

  const handleMoveToCart = (product: any) => {
    addToCart(product)
    removeFromWishlist(product.id)
    toast.success("Moved to cart")
  }

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <EmptyState
        icon={<HeartIllustration />}
        title="Nothing saved yet"
        description="Browse our collections and save your favourites."
        ctaLabel="Browse Hair"
        ctaHref="/hair"
      />
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
        <h1 className="text-4xl font-serif">My Wishlist ({wishlistItems.length})</h1>
        <div className="flex gap-4">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-4 py-2 rounded-lg text-sm">
            <option value="date">Date Added</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product as any}
            isWishlist
            onRemove={() => handleRemove(product)}
            onMoveToCart={() => handleMoveToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}
