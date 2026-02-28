import { cn } from "@/lib/utils"

export type BadgeVariant =
  | "new"
  | "bestseller"
  | "sale"
  | "low-stock"
  | "sold-out"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariant
}

export function Badge({ variant, className, ...props }: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    new: "bg-[#D4AF37] text-black",
    bestseller: "bg-[#8E2A4D] text-white",
    sale: "bg-[#5A1E4A] text-white",
    "low-stock": "bg-amber-500 text-black",
    "sold-out": "bg-[#9C8F82] text-white opacity-70",
  }

  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}