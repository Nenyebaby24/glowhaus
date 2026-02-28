"use client"

import {useStore} from "@/store/useStore"
import ProductCard from "@/components/catalogue/ProductCard"
import Link from "next/link"

export default function WishlistPage() {
  const {wishlistItems} = useStore()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">
        Your Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-serif mb-4">
        Your wishlist is empty
      </h2>

      <p className="text-gray-500 mb-6">
        Browse our collections and save your favourites.
      </p>

      <Link
        href="/shop/hair"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        Start Shopping
      </Link>
    </div>
  )
}