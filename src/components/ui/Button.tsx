import * as React from "react"
import { cn } from "@/lib/utils"

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "dark"
  | "icon"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = "primary", ...props }, ref) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-[#D4AF37] to-[#F6E27A] text-black px-6 py-3 rounded-full hover:opacity-90",

    outline:
      "border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-[#D4AF37]/10",

    ghost:
      "text-[#D4AF37] underline-offset-4 hover:underline",

    dark:
      "bg-[#111111] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-black",

    icon:
      "h-10 w-10 rounded-md bg-[#111111] text-[#D4AF37] hover:bg-black",
  }

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  )
})

Button.displayName = "Button"