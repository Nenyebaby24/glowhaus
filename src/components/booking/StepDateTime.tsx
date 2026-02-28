"use client"

import { useState } from "react"
import Calendar from "./Calendar"
import TimeSlots from "./TimeSlots"
import { useStore } from "@/store/useStore"

interface Props {
  nextStep: () => void
}

export default function StepDateTime({ nextStep }: Props) {
  const { setBookingDateTime } = useStore()

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleNext = () => {
    if (!selectedDate || !selectedTime) return

    setBookingDateTime(
      selectedDate.toDateString(),
      selectedTime
    )

    nextStep()
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Select Date & Time
      </h2>

      <Calendar
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
      />

      {selectedDate && (
        <TimeSlots
          selectedTime={selectedTime}
          onSelect={setSelectedTime}
        />
      )}

      <button
        onClick={handleNext}
        disabled={!selectedDate || !selectedTime}
        className="mt-8 bg-[#C6A85C] text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  )
}