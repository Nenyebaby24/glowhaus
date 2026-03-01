// /lib/toastTriggers.ts

import { glowToast } from "./toast"

export const Toasts = {
  addToCart: () =>
    glowToast("Added to your bag! 🛍️", {
      icon: "🛍️",
      variant: "gold",
    }),

  removeFromCart: (undo: () => void) =>
    glowToast("Item removed", {
      variant: "neutral",
      action: {
        label: "Undo",
        fn: undo,
      },
    }),

  addToWishlist: () =>
    glowToast("Saved to wishlist ❤️", {
      variant: "rose",
      icon: "❤️",
    }),

  removeFromWishlist: () =>
    glowToast("Removed from wishlist", {
      variant: "neutral",
    }),

  alreadyInWishlist: () =>
    glowToast("Already in your wishlist!", {
      variant: "blue",
    }),

  reviewSubmitted: () =>
    glowToast("Review submitted — thank you! ✨", {
      variant: "gold",
    }),

  promoApplied: () =>
    glowToast("Promo GLOW10 applied — 10% off! 🎉", {
      variant: "green",
    }),

  invalidPromo: () =>
    glowToast("That code isn't valid. Try again.", {
      variant: "red",
    }),

  bookingConfirmed: () =>
    glowToast("Booking confirmed! Check your email. 📅", {
      variant: "gold",
    }),

  newsletterSignup: () =>
    glowToast("You're on the list! Welcome to GlowHaus 🌸", {
      variant: "gold",
    }),

  profileSaved: () =>
    glowToast("Profile updated ✨", {
      variant: "gold",
    }),

  linkCopied: () =>
    glowToast("Link copied to clipboard!", {
      variant: "blue",
    }),

  pointsRedeemed: () =>
    glowToast("₦500 off applied from GlowPoints 💎", {
      variant: "plum",
    }),

  badgeEarned: () =>
    glowToast("New achievement unlocked! 🏆", {
      variant: "gold-special",
    }),
}