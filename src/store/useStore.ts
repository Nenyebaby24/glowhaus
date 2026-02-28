import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  Product,
  CartItem,
  Service,
  PointTransaction,
  Tier,
} from "../types";

/* ---------------- CART SLICE ---------------- */

interface CartSlice {
  cartItems: CartItem[];
  addToCart: (product: Product, options?: Record<string, string>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

/* ---------------- WISHLIST SLICE ---------------- */

interface WishlistSlice {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
}

/* ---------------- LOYALTY SLICE ---------------- */

interface LoyaltySlice {
  points: number;
  tier: Tier;
  pointsHistory: PointTransaction[];
  addPoints: (amount: number, reason: string) => void;
  redeemPoints: (amount: number) => void;
  tierBenefits: string[];
}

/* ---------------- BOOKING SLICE (UPDATED) ---------------- */

interface Booking {
  service: Service | null;
  date: string | null;
  time: string | null;
  customer: {
    name: string;
    phone: string;
    email: string;
    notes?: string;
    referral?: string;
  };
}

interface BookingSlice {
  booking: Booking;
  bookingHistory: Booking[];
  setBookingService: (service: Service) => void;
  setBookingDateTime: (date: string, time: string) => void;
  setBookingCustomer: (
    data: Partial<Booking["customer"]>
  ) => void;
  confirmBooking: () => void;
  clearBooking: () => void;
}

/* ---------------- UI SLICE ---------------- */

interface UISlice {
  cartOpen: boolean;
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  setCartOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  setMobileMenuOpen: (v: boolean) => void;
}

/* ---------------- USER SLICE ---------------- */

interface UserSlice {
  displayName: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

/* ---------------- RECENTLY VIEWED SLICE ---------------- */

interface RecentlyViewedSlice {
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;
  removeRecentlyViewed: (id: string) => void;
}

/* ---------------- STORE TYPE ---------------- */

type StoreState =
  & CartSlice
  & WishlistSlice
  & LoyaltySlice
  & BookingSlice
  & UISlice
  & UserSlice
  & RecentlyViewedSlice;

/* ---------------- STORE ---------------- */

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({

        /* ---------------- CART ---------------- */

        cartItems: [],

        addToCart: (product, options) =>
          set((state) => {
            const existing = state.cartItems.find(
              (item) => item.product.id === product.id
            );

            if (existing) {
              return {
                cartItems: state.cartItems.map((item) =>
                  item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            }

            return {
              cartItems: [
                ...state.cartItems,
                {
                  id: crypto.randomUUID(),
                  product,
                  quantity: 1,
                  selectedOptions: options,
                },
              ],
            };
          }),

        removeFromCart: (id) =>
          set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
          })),

        updateQuantity: (id, qty) =>
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.id === id ? { ...item, quantity: qty } : item
            ),
          })),

        clearCart: () => set({ cartItems: [] }),

        get cartTotal() {
          return get().cartItems.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          );
        },

        get cartCount() {
          return get().cartItems.reduce(
            (count, item) => count + item.quantity,
            0
          );
        },

        /* ---------------- WISHLIST ---------------- */

        wishlistItems: [],

        addToWishlist: (product) =>
          set((state) => {
            if (state.wishlistItems.some((p) => p.id === product.id)) {
              return state;
            }

            return {
              wishlistItems: [...state.wishlistItems, product],
            };
          }),

        removeFromWishlist: (id) =>
          set((state) => ({
            wishlistItems: state.wishlistItems.filter((p) => p.id !== id),
          })),

        isWishlisted: (id) =>
          get().wishlistItems.some((p) => p.id === id),

        /* ---------------- LOYALTY ---------------- */

        points: 0,
        tier: "Bronze",
        pointsHistory: [],

        addPoints: (amount, reason) =>
          set((state) => {
            const newPoints = state.points + amount;

            const tier: Tier =
              newPoints >= 5000
                ? "Platinum"
                : newPoints >= 2000
                ? "Gold"
                : newPoints >= 1000
                ? "Silver"
                : "Bronze";

            return {
              points: newPoints,
              tier,
              pointsHistory: [
                ...state.pointsHistory,
                {
                  id: crypto.randomUUID(),
                  amount,
                  reason,
                  date: new Date().toISOString(),
                },
              ],
            };
          }),

        redeemPoints: (amount) =>
          set((state) => ({
            points: Math.max(0, state.points - amount),
          })),

        tierBenefits: [
          "Exclusive Discounts",
          "Priority Booking",
          "Birthday Rewards",
        ],

        /* ---------------- BOOKING (UPDATED) ---------------- */

        booking: {
          service: null,
          date: null,
          time: null,
          customer: {
            name: "",
            phone: "",
            email: "",
            notes: "",
            referral: "",
          },
        },

        bookingHistory: [],

        setBookingService: (service) =>
          set((state) => ({
            booking: { ...state.booking, service },
          })),

        setBookingDateTime: (date, time) =>
          set((state) => ({
            booking: { ...state.booking, date, time },
          })),

        setBookingCustomer: (data) =>
          set((state) => ({
            booking: {
              ...state.booking,
              customer: {
                ...state.booking.customer,
                ...data,
              },
            },
          })),

        confirmBooking: () =>
          set((state) => ({
            bookingHistory: [
              ...state.bookingHistory,
              { ...state.booking },
            ],
          })),

        clearBooking: () =>
          set((state) => ({
            booking: {
              service: null,
              date: null,
              time: null,
              customer: {
                name: "",
                phone: "",
                email: "",
                notes: "",
                referral: "",
              },
            },
          })),

        /* ---------------- UI ---------------- */

        cartOpen: false,
        searchOpen: false,
        mobileMenuOpen: false,

        setCartOpen: (v) => set({ cartOpen: v }),
        setSearchOpen: (v) => set({ searchOpen: v }),
        setMobileMenuOpen: (v) => set({ mobileMenuOpen: v }),

        /* ---------------- RECENTLY VIEWED ---------------- */

        recentlyViewed: [],

        addRecentlyViewed: (id) =>
          set((state) => {
            const filtered = state.recentlyViewed.filter(
              (item) => item !== id
            );

            return {
              recentlyViewed: [id, ...filtered].slice(0, 10),
            };
          }),

        removeRecentlyViewed: (id) =>
          set((state) => ({
            recentlyViewed: state.recentlyViewed.filter(
              (item) => item !== id
            ),
          })),

        /* ---------------- USER ---------------- */

        displayName: "Guest User",
        email: "guest@example.com",
        avatar: "",
        isLoggedIn: true,
      }),
      {
        name: "app-storage",
        partialize: (state) => ({
          cartItems: state.cartItems,
          wishlistItems: state.wishlistItems,
          points: state.points,
          tier: state.tier,
          pointsHistory: state.pointsHistory,
          displayName: state.displayName,
          email: state.email,
          avatar: state.avatar,
          isLoggedIn: state.isLoggedIn,
          recentlyViewed: state.recentlyViewed,
        }),
      }
    ),
    { enabled: process.env.NODE_ENV === "development" }
  )
);