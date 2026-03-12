"use client"

import Link from "next/link"
import React from "react"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

export default function EmptyState({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Icon Container */}
      <div className="mb-8 flex justify-center items-center text-gold opacity-80">
        <div className="w-32 h-32 md:w-40 md:h-40">
          {icon}
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl md:text-4xl font-cormorant mb-3 text-noir">
        {title}
      </h2>
      
      <p className="text-zinc-500 max-w-sm mb-10 font-sans leading-relaxed">
        {description}
      </p>

      {/* Conditional CTA Button */}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="bg-black text-white px-10 py-4 rounded-full text-sm font-medium 
                     hover:bg-gold transition-all duration-500 ease-in-out 
                     shadow-sm hover:shadow-gold-lg uppercase tracking-widest"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  )
}