import { cn } from "@/lib/utils"

export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-blush/70 animate-shimmer",
        className
      )}
    />
  )
}