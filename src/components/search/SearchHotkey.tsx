"use client"

import { useEffect } from "react"
import { useSearch } from "@/store/useSearch"

export default function SearchHotkey() {
  const open = useSearch((s) => s.open)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        open()
      }
    }

    window.addEventListener("keydown", down)
    return () => window.removeEventListener("keydown", down)
  }, [open])

  return null
}