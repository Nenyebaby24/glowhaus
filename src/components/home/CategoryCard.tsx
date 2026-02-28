"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

interface Props {
  badge: string
  title: string
  subtitle: string
  image: string
  href: string
  delay: number
}

export default function CategoryCard({
  badge,
  title,
  subtitle,
  image,
  href,
  delay,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <Link href={href}>
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full shadow">
            {badge}
          </div>

          {/* Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition duration-500" />

          <div className="absolute bottom-6 left-6 text-white space-y-2">
            <h3 className="text-2xl font-serif tracking-wide">
              {title}
            </h3>
            <p className="text-sm opacity-90">{subtitle}</p>

            <div className="flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-2">
              Shop Now →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}