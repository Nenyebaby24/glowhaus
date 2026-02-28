"use client"

import { useEffect, useState } from "react"
import { useSearch } from "@/store/useSearch"
import { products } from "@/lib/dummy-data/products"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function SearchOverlay() {
  const { isOpen, close, query, setQuery } = useSearch()
  const router = useRouter()

  const [results, setResults] = useState(products)
  const [loading, setLoading] = useState(false)

  // ESC to close
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [close])

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    setLoading(true)

    const timer = setTimeout(() => {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const goToSearch = () => {
    router.push(`/search?q=${query}`)
    close()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 p-8"
        >
          <div className="max-w-2xl mx-auto">
            <input
              autoFocus
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-b border-gray-600 text-white text-2xl pb-4 outline-none"
            />

            {loading && (
              <div className="mt-6 text-gray-400">Searching...</div>
            )}

            {!loading && results.length > 0 && (
              <div className="mt-6 space-y-4">
                {results.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      router.push(`/product/${p.slug}`)
                      close()
                    }}
                    className="flex items-center gap-4 cursor-pointer hover:bg-white/5 p-2 rounded"
                  >
                    <img
                      src={p.images[0]}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="text-white">{p.name}</p>
                      <p className="text-sm text-gray-400">
                        ${p.price}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  onClick={goToSearch}
                  className="text-[#D4AF37] mt-4"
                >
                  View all results →
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}