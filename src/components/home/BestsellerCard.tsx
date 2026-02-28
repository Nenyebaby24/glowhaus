"use client"

import { Product } from "@/lib/dummy-data/products"
import { Rating } from "@/components/ui/Rating"
import { Button } from "@/components/ui/Button"
import { Heart, ShoppingCart } from "lucide-react"

export default function BestsellerCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-[#8E2A4D] text-white text-xs px-3 py-1 rounded-full">
          BESTSELLER
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <Button variant="icon">
            <ShoppingCart size={18} />
          </Button>
          <Button variant="icon">
            <Heart size={18} />
          </Button>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="font-serif text-lg">{product.name}</h3>

        <div className="flex items-center gap-2">
          <Rating value={product.rating} />
          <span className="text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>

        <p className="text-[#D4AF37] font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  )
}