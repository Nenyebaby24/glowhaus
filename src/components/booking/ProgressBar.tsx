"use client"
import { motion } from "framer-motion"

interface Props {
  step: number
}

export default function ProgressBar({ step }: Props) {
  const percentage = (step / 3) * 100

  return (
    <div className="mb-8">
      <p className="text-sm text-gray-600">
        Step {step} of 3
      </p>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <motion.div
          className="bg-[#C6A85C] h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  )
}