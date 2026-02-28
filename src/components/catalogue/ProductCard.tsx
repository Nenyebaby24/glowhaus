"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Eye, ShoppingCart } from "lucide-react"
import { useState } from "react"
import {useStore} from "@/store/useStore"


interface Product {
  id: string
  name: string
  images: string[]
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  isNew?: boolean
  isBestseller?: boolean
  isOnSale?: boolean
  inStock?: boolean
  stockCount?: number
}

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

 const { 
  addToCart, 
  wishlistItems, 
  addToWishlist, 
  removeFromWishlist 
} = useStore();
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

const handleToggleWishlist = () => {
  if (isWishlisted) {
    removeFromWishlist(product.id);
  } else {
    addToWishlist(product);
  }
};

  const soldOut = !product.inStock

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-gold-lg transition-shadow duration-300"
      >
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition ${
              soldOut ? "grayscale" : ""
            }`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          />

          {/* BADGES */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {soldOut ? (
              <Badge label="SOLD OUT" color="bg-gray-900" />
            ) : (
              <>
                {product.isNew && (
                  <Badge label="NEW" color="bg-black" />
                )}
                {product.isBestseller && (
                  <Badge
                    label="BESTSELLER"
                    color="bg-rose-500"
                  />
                )}
                {product.isOnSale && (
                  <Badge label="SALE" color="bg-red-600" />
                )}
                {product.stockCount &&
                  product.stockCount < 5 && (
                    <Badge
                      label="LOW STOCK"
                      color="bg-amber-500"
                    />
                  )}
              </>
            )}
          </div>

          {/* WISHLIST */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow"
          >
            <Heart
              size={18}
              className={
                isWishlisted
                  ? "fill-gold text-gold"
                  : "text-gray-600"
              }
            />
          </button>

          {/* HOVER ACTION BAR */}
          <AnimatePresence>
            {hovered && !soldOut && (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-white p-4 flex gap-2"
              >
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium"
                >
                  <ShoppingCart size={16} className="inline mr-2" />
                  Add to Cart
                </button>

                <button
                  onClick={() => setQuickViewOpen(true)}
                  className="px-4 border rounded-lg"
                >
                  <Eye size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h3 className="font-serif text-lg line-clamp-2">
            {product.name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-500">
              ({product.reviews})
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg">
              ₦{product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className=" text-taupe line-through text-sm">
                ₦{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              soldOut
                ? alert("Notify feature coming soon")
                : addToCart(product)
            }
            className="lg:hidden w-full mt-3 py-2 border rounded-lg text-sm font-medium"
          >
            {soldOut ? "Notify Me" : "Add to Cart"}
          </button>
        </div>
      </motion.div>

      {/* QUICK VIEW MODAL */}
      <AnimatePresence>
        {quickViewOpen && (
          <QuickViewModal
            product={product}
            onClose={() => setQuickViewOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className={`text-white text-xs px-3 py-1 rounded-full font-medium ${color}`}
    >
      {label}
    </span>
  )
}

function QuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart } = useStore()

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full"
      >
        <img
          src={product.images[0]}
          className="aspect-[3/4] object-cover rounded-lg mb-4"
        />

        <h2 className="font-serif text-2xl mb-2">
          {product.name}
        </h2>

        <p className="text-gold font-bold mb-4">
          ₦{product.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Add to Cart
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full text-sm underline"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )
}