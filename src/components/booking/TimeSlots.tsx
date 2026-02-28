"use client"

interface Props {
  selectedTime: string | null
  onSelect: (time: string) => void
}

const timeSlots = [
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
]

export default function TimeSlots({ selectedTime, onSelect }: Props) {
  const bookedSlots = ["11:00AM"]

  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {timeSlots.map((slot) => {
        const isBooked = bookedSlots.includes(slot)
        const isSelected = selectedTime === slot

        return (
          <button
            key={slot}
            disabled={isBooked}
            onClick={() => onSelect(slot)}
            className={`p-2 rounded-lg text-sm border ${
              isBooked
                ? "bg-gray-100 text-gray-400"
                : isSelected
                ? "bg-[#C6A85C] text-white"
                : "hover:border-[#C6A85C]"
            }`}
          >
            {slot}
            {isBooked && <div className="text-xs">Booked</div>}
          </button>
        )
      })}
    </div>
  )
}