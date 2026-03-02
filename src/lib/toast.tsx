"use client"

import toast from "react-hot-toast"
import { motion } from "framer-motion"

type ToastVariant =
  | "gold"
  | "rose"
  | "neutral"
  | "blue"
  | "green"
  | "red"
  | "plum"
  | "gold-special"

interface ToastAction {
  label: string
  fn: () => void
}

const variantStyles: Record<ToastVariant, string> = {
  gold: "border-gold",
  "gold-special":
    "border-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]",
  rose: "border-rose-400",
  neutral: "border-gray-400",
  blue: "border-blue-500",
  green: "border-green-500",
  red: "border-red-500",
  plum: "border-purple-600",
}

let activeToasts: string[] = []

export function glowToast(
  message: string,
  {
    icon,
    subtext,
    variant = "gold",
    action,
  }: {
    icon?: string
    subtext?: string
    variant?: ToastVariant
    action?: ToastAction
  }
): string {
  if (activeToasts.length >= 3) {
    toast.dismiss(activeToasts[0])
    activeToasts.shift()
  }

  const id = toast.custom((t) => (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className={`bg-ivory border-l-4 ${
        variantStyles[variant]
      } rounded-xl px-5 py-4 shadow-gold flex items-center gap-3 min-w-[280px]`}
    >
      {icon && <span className="text-xl">{icon}</span>}

      <div className="flex-1">
        <p className="font-medium text-noir text-sm">
          {message}
        </p>
        {subtext && (
          <p className="text-taupe text-xs mt-0.5">
            {subtext}
          </p>
        )}
      </div>

      {action && (
        <button
          onClick={() => {
            action.fn()
            toast.dismiss(t.id)
          }}
          className="text-gold text-sm font-medium ml-auto"
        >
          {action.label}
        </button>
      )}
    </motion.div>
  ))

  activeToasts.push(id)

  setTimeout(() => {
    activeToasts = activeToasts.filter((tid) => tid !== id)
  }, 3500)

  return id  // 👈 IMPORTANT
}
