import { create } from "zustand"

export interface WishlistItem {
  id: string
  name: string
  image: string
  price: number
  category: "hair" | "nails" | "beauty"
  dateAdded: number
  inStock: boolean
}

interface WishlistState {
  items: WishlistItem[]
  removeItem: (id: string) => void
  restoreItem: (item: WishlistItem) => void
  moveToCart: (item: WishlistItem) => void
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [
    {
      id: "W1",
      name: "Silk Press Kit",
      image: "/images/product-1.jpg",
      price: 25000,
      category: "hair",
      dateAdded: Date.now() - 100000,
      inStock: true,
    },
    {
      id: "W2",
      name: "Luxury Gel Polish",
      image: "/images/product-2.jpg",
      price: 18000,
      category: "nails",
      dateAdded: Date.now() - 500000,
      inStock: false,
    },
  ],

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  restoreItem: (item) =>
    set((state) => ({
      items: [item, ...state.items],
    })),

  moveToCart: (item) => {
    console.log("Moved to cart:", item)
    set((state) => ({
      items: state.items.filter((i) => i.id !== item.id),
    }))
  },
}))