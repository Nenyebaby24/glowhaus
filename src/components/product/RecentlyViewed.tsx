"use client"

import { useStore } from "@/store/useStore"
import { products } from "@/lib/dummy-data/products"

interface Props {
  currentId: string
}

export default function RecentlyViewed({ currentId }: Props) {
  const { recentlyViewed, removeRecentlyViewed } = useStore()

  const items = recentlyViewed
    .filter(id => id !== currentId)
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)

  if (!items.length) return null

  return (
    <div className="mt-24 border-t pt-10">
      <h2 className="text-xl font-serif mb-6">
        Recently Viewed
      </h2>

      <div className="flex gap-6 overflow-x-auto">
        {items.map(product => (
          <div key={product!.id} className="min-w-[160px] relative">
            <button
              onClick={() => removeRecentlyViewed(product!.id)}
              className="absolute top-1 right-1 text-xs"
            >
              ✕
            </button>

            <img
              src={product!.images[0]}
              className="h-32 w-full object-cover"
            />
            <p className="text-sm mt-2">{product!.name}</p>
            <p className="text-sm text-[#D4AF37]">
              ${product!.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}