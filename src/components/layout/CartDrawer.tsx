"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useStore } from "@/store/useStore"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

export default function CartDrawer() {
  const {
    cartItems,
    cartTotal,
    cartCount,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
  } = useStore()

  const FREE_DELIVERY_THRESHOLD = 50000
  const glowPointsEarned = Math.floor(cartTotal / 100)

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[420px] bg-white z-50 flex flex-col shadow-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-semibold">
                My Bag ({cartCount} items)
              </h2>
              <button onClick={() => setCartOpen(false)}>
                <X />
              </button>
            </div>

            {/* Content */}
            {cartItems.length === 0 ? (
              /* Empty State */
              <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
                <ShoppingBag size={80} className="text-yellow-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Your bag is empty
                </h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-yellow-600 font-medium"
                >
                  Start Shopping →
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      {/* Thumbnail */}
                      <div className="w-[60px] h-[80px] bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.product.images?.[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium text-sm">
                              {item.product.name}
                            </p>
                            {item.selectedOptions && (
                              <p className="text-xs text-gray-500">
                                {Object.values(item.selectedOptions).join(" — ")}
                              </p>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              removeFromCart(item.id)
                              toast("Item removed", { icon: "🗑️" })
                            }}
                          >
                            <X size={16} />
                          </button>
                        </div>

                        {/* Quantity + Price */}
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="px-2 py-1"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="px-2 py-1"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <span className="font-semibold text-sm">
                            ₦
                            {(
                              item.product.price * item.quantity
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t p-6 space-y-4 sticky bottom-0 bg-white">
                  {/* Subtotal */}
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>₦{cartTotal.toLocaleString()}</span>
                  </div>

                  {/* Delivery Logic */}
                  {cartTotal >= FREE_DELIVERY_THRESHOLD ? (
                    <p className="text-green-600 text-sm">
                      🚚 Free delivery on this order!
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Add ₦
                      {(
                        FREE_DELIVERY_THRESHOLD - cartTotal
                      ).toLocaleString()}{" "}
                      more for free delivery
                    </p>
                  )}

                  {/* Loyalty Preview */}
                  <p className="text-sm text-gray-600">
                    You'll earn {glowPointsEarned} GlowPoints on this order ✨
                  </p>

                  {/* Buttons */}
                  <div className="space-y-3 pt-2">
                    <Link
                      href="/cart"
                      className="block w-full text-center border border-black py-3 rounded-md"
                      onClick={() => setCartOpen(false)}
                    >
                      View Full Cart
                    </Link>

                    <Link
                      href="/cart"
                      className="block w-full text-center bg-yellow-600 text-white py-3 rounded-md font-semibold"
                      onClick={() => setCartOpen(false)}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}