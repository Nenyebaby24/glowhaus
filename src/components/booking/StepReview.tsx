"use client"

import { useStore } from "@/store/useStore"

interface Props {
  prevStep?: () => void
  nextStep?: () => void
}

export default function StepReview({ prevStep }: Props) {
  const { booking, confirmBooking } = useStore()

  const handleConfirm = () => {
    confirmBooking()
    alert("Booking Confirmed 🎉")
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Review & Confirm
      </h2>

      <div className="border p-6 rounded-xl space-y-3">
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        24-hour notice required for cancellations.
      </p>

      <div className="flex justify-between mt-8">
        {prevStep && (
          <button
            onClick={prevStep}
            className="px-4 py-2 border rounded-lg"
          >
            ← Back
          </button>
        )}

        <button
          onClick={handleConfirm}
          className="bg-[#C6A85C] text-white px-6 py-3 rounded-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}