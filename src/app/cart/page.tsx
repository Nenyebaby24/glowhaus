"use client"

import { useStore } from "@/store/useStore"
import ProductCard from "@/components/catalogue/ProductCard"
import EmptyState from "@/components/ui/EmptyState"
import ShoppingBagIllustration from "@/components/ui/ShoppingBagIllustration"
import Link from "next/link"

export default function CartPage() {
  const { cartItems, removeFromCart, cartTotal } = useStore()

  if (!cartItems || cartItems.length === 0) {
    return (
      <EmptyState
        icon={<ShoppingBagIllustration />}
        title="Your bag is empty"
        description="Looks like you haven’t added anything yet."
        ctaLabel="Start Shopping"
        ctaHref="/hair"
      />
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-10">Shopping Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item: any) => (
            <ProductCard 
              key={item.id} 
              product={item.product} 
              onRemove={() => removeFromCart(item.id)} 
            />
          ))}
        </div>
        <div className="bg-zinc-50 rounded-3xl p-8 h-fit border border-zinc-100">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between text-lg font-medium mb-8">
            <span>Subtotal</span>
            <span>₦{cartTotal.toLocaleString()}</span>
          </div>
          <Link href="/checkout" className="block w-full bg-black text-white text-center py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-colors">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}