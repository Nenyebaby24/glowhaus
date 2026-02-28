"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProgressBar from "./ProgressBar"
import StepDateTime from "./StepDateTime"
import StepReview from "./StepReview"

export default function BookingWizard() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((s) => Math.min(s + 1, 3))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepDateTime nextStep={nextStep} />
      case 2:
        return <StepReview prevStep={prevStep} nextStep={nextStep} />
      case 3:
        return <StepReview prevStep={prevStep} />
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <ProgressBar step={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}