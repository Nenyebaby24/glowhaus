import * as React from "react"
import { cn } from "@/lib/utils"

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg bg-[#FDF8EE] px-4 py-2 text-black",
        "focus:outline-none focus:ring-2 focus:ring-[#D4AF37]",
        className
      )}
      {...props}
    />
  )
})

TextInput.displayName = "TextInput"
export default TextInput