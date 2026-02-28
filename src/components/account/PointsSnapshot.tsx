"use client"

import { useAccountStore } from "@/store/accountStore"

export default function PointsSnapshot() {
  const glowPoints = useAccountStore((state) => state.glowPoints)
  const tier = useAccountStore((state) => state.tier)

  const maxPointsForNextTier = 2000
  const progressPercentage = Math.min(
    (glowPoints / maxPointsForNextTier) * 100,
    100
  )

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Loyalty Points
      </h2>

      <p className="text-3xl font-bold text-gray-900">
        {glowPoints.toLocaleString()}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        {tier}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-black h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        {Math.max(maxPointsForNextTier - glowPoints, 0)} points to next tier
      </p>
    </div>
  )
}