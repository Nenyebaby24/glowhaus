"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { useStore } from "@/store/useStore"
import type { Product } from "@/types"
import ReviewsSection from "@/components/reviews/ReviewsSection"

import RelatedProducts from "@/components/product/RelatedProducts"
import CompleteTheLook from "@/components/product/CompleteTheLook"
import RecentlyViewed from "@/components/product/RecentlyViewed"

interface Props {
  product: Product
}

export default function ProductDetail({ product }: Props) {
  const addToCart = useStore(s => s.addToCart)
  const toggleWishlist = useStore(s => s.toggleWishlist)
  const wishlistItems = useStore(s => s.wishlistItems)
  const addRecentlyViewed = useStore(s => s.addRecentlyViewed)

  const [selectedImage, setSelectedImage] = useState(product.images?.[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedLength, setSelectedLength] = useState<string | null>(null)
  const [selectedShade, setSelectedShade] = useState<string | null>(null)

  const [emblaRef] = useEmblaCarousel()

  const isWishlisted = wishlistItems.some(item => item.id === product.id)

  const stock = product.stock ?? 10

  useEffect(() => {
    if (product?.id) {
      addRecentlyViewed(product.id)
    }
  }, [product?.id, addRecentlyViewed])

  const handleAdd = () => {
    addToCart(product, {
      quantity: quantity.toString(),
      selectedLength: selectedLength || "",
      selectedShade: selectedShade || "",
    })
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT — GALLERY */}
        <div>

          {/* Main Image + Zoom */}
          <div className="relative">
           <Zoom>
              <img
                alt={product.name}
                src={selectedImage}
                className="w-full h-auto object-cover rounded-lg cursor-zoom-in"
              />
            </Zoom>
              
            

            {/* Badge */}
            {product.isSale && (
              <span className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 text-xs">
                SALE
              </span>
            )}

            {/* Wishlist */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
            >
              {isWishlisted ? "♥" : "♡"}
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {product.images || [].map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

        {/* RIGHT — INFO PANEL */}
        <div className="lg:sticky lg:top-24 space-y-6">

          <h1 className="text-4xl font-serif">
            {product.name}
          </h1>

          <p className="text-3xl text-[#D4AF37] font-semibold">
            ${product.price}
            {product.originalPrice && (
              <span className="line-through text-gray-400 ml-3 text-lg">
                ${product.originalPrice}
              </span>
            )}
          </p>

          {/* Stock */}
          <p className={`text-sm ${
            stock < 5 ? "text-amber-600" : "text-green-600"
          }`}>
            {stock === 0
              ? "✗ Sold Out"
              : stock < 5
              ? `⚠ Only ${stock} left!`
              : `✓ In Stock — ${stock} remaining`}
          </p>

          {/* Length Options */}
          {product.category === "hair" && (
            <div>
              <p className="mb-2 font-medium">Length</p>
              <div className="flex gap-3 flex-wrap">
                {["14", "16", "18", "20", "22", "24"].map(len => (
                  <button
                    key={len}
                    onClick={() => setSelectedLength(len)}
                    className={`px-4 py-2 border rounded-full ${
                      selectedLength === len
                        ? "bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {len}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="border px-3 py-1"
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(q => Math.min(stock, q + 1))}
              className="border px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Add to Bag */}
          <button
            onClick={handleAdd}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold"
          >
            Add to Bag
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className="w-full border py-4"
          >
            Add to Wishlist
          </button>

          {/* Accordions */}
          <details open>
            <summary className="font-semibold cursor-pointer">
              Description
            </summary>
            <p className="mt-3 text-gray-600">
              {product.description}
            </p>
          </details>

          <details>
            <summary className="font-semibold cursor-pointer">
              Product Details
            </summary>
            <ul className="mt-3 list-disc ml-6 text-gray-600">
              {product.details?.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </details>

        </div>
      </div>

      <div id="reviews" className="mt-24">
        <ReviewsSection productId={product.slug} />
      </div>

      <RelatedProducts
        category={product.category}
        currentId={product.id}
      />

      {product.category === "hair" && (
        <CompleteTheLook />
      )}

      <RecentlyViewed currentId={product.id} />
    </div>
  )
}