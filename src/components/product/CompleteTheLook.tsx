"use client"

import { useStore } from "@/store/useStore"
import { products } from "@/lib/dummy-data/products"

export default function CompleteTheLook() {
  const addToCart = useStore(s => s.addToCart)

  const bundle = products.filter(p =>
    ["wig-cap", "edge-control", "satin-bonnet"].includes(p.slug)
  )

  const handleAddAll = () => {
    bundle.forEach(product => {
      addToCart({ ...product, quantity: 1 } as any)
    })
    alert("Bundle added to cart ✨")
  }

  return (
    <div className="mt-24">
      <h2 className="text-2xl font-serif mb-6">
        Complete the Look
      </h2>

      <div className="flex gap-6 overflow-x-auto">
        {bundle.map(product => (
          <div key={product.id} className="min-w-[200px] border p-4">
            <img src={product.images[0]} className="h-32 w-full object-cover mb-3" />
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-[#D4AF37]">${product.price}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddAll}
        className="mt-6 bg-black text-white px-6 py-3"
      >
        Add All to Cart
      </button>
    </div>
  )
}