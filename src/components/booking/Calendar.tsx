"use client"

import { useState } from "react"

interface Props {
  selectedDate: Date | null
  onSelect: (date: Date) => void
}

export default function Calendar({ selectedDate, onSelect }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()

  const isWeekend = (date: Date) =>
    date.getDay() === 0 || date.getDay() === 6

  const randomWeekdays = [3, 8, 14]

  const isUnavailable = (date: Date) =>
    isWeekend(date) || randomWeekdays.includes(date.getDate())

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate()

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    return new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      i + 1
    )
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                1
              )
            )
          }
        >
          ←
        </button>

        <p className="font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </p>

        <button
          onClick={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1
              )
            )
          }
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const disabled = isUnavailable(day)
          const isSelected =
            selectedDate &&
            day.toDateString() === selectedDate.toDateString()

          const isToday =
            day.toDateString() === today.toDateString()

          return (
            <button
              key={day.toString()}
              disabled={disabled}
              onClick={() => onSelect(day)}
              className={`p-2 rounded-lg text-sm ${
                disabled
                  ? "bg-gray-100 text-gray-400"
                  : isSelected
                  ? "bg-[#C6A85C] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {day.getDate()}
              {isToday && (
                <div className="w-1 h-1 bg-[#C6A85C] rounded-full mx-auto mt-1" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}