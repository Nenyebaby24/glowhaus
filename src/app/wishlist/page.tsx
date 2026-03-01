"use client"

import { useState, useMemo } from "react"
import { useStore } from "@/store/useStore"
import ProductCard from "@/components/catalogue/ProductCard"
import Link from "next/link"
import { Heart } from "lucide-react"
import toast from "react-hot-toast"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useStore()

  const [sort, setSort] = useState("date")

  /* ---------------- SORTING ---------------- */

  const sortedItems = useMemo(() => {
    if (!wishlistItems) return []

    switch (sort) {
      case "low":
        return [...wishlistItems].sort((a, b) => a.price - b.price)
      case "high":
        return [...wishlistItems].sort((a, b) => b.price - a.price)
      case "category":
        return [...wishlistItems].sort((a, b) =>
          a.category!.localeCompare(b.category!)
        )
      default:
        return [...wishlistItems]
    }
  }, [wishlistItems, sort])

  /* ---------------- REMOVE WITH UNDO ---------------- */

  const handleRemove = (product: any) => {
    removeFromWishlist(product.id)

    toast.success("Removed from wishlist", {
      action: {
        label: "Undo",
        onClick: () => addToWishlist(product),
      },
    })
  }

  /* ---------------- MOVE TO CART ---------------- */

  const handleMoveToCart = (product: any) => {
    addToCart(product)
    removeFromWishlist(product.id)
    toast.success("Moved to cart")
  }

  /* ---------------- SHARE ---------------- */

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success("Wishlist link copied!")
  }

  /* ---------------- EMPTY STATE ---------------- */

  if (!wishlistItems || wishlistItems.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
        <h1 className="text-4xl font-serif">
          My Wishlist ({wishlistItems.length} items)
        </h1>

        <div className="flex gap-4 items-center">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="date">Date Added</option>
            <option value="low">Price Low–High</option>
            <option value="high">Price High–Low</option>
            <option value="category">Category</option>
          </select>

          <button
            onClick={handleShare}
            className="border px-4 py-2 rounded-lg"
          >
            Share Wishlist
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedItems.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlist
            onRemove={() => handleRemove(product)}
            onMoveToCart={() => handleMoveToCart(product)}
          />
        ))}
      </div>

      {/* RECOMMENDATIONS */}
      <Recommendations wishlistItems={wishlistItems} />
    </div>
  )
}

/* ================= EMPTY STATE ================= */

function EmptyState() {
  return (
    <div className="text-center py-24">
      <Heart
        size={120}
        className="mx-auto text-yellow-500 mb-6"
      />

      <h2 className="text-3xl font-serif mb-4">
        Your wishlist is empty
      </h2>

      <p className="text-gray-500 mb-8">
        Browse our collections and save your favourites.
      </p>

      <Link
        href="/shop/hair"
        className="inline-block bg-black text-white px-8 py-3 rounded-xl"
      >
        Browse our collections
      </Link>
    </div>
  )
}

/* ================= RECOMMENDATIONS ================= */

function Recommendations({ wishlistItems }: any) {
  if (!wishlistItems.length) return null

  const recommended = wishlistItems.slice(0, 4)

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-serif mb-8">
        You Might Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommended.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}