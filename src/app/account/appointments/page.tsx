"use client"

import { useAccountStore } from "@/store/accountStore"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"

export default function AppointmentsPage() {
  const { appointments, setRating, setBookingService } =
    useAccountStore()

  const router = useRouter()

  const handleBookAgain = (service: string) => {
    setBookingService(service)
    router.push("/booking")
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-semibold mb-6">
        Appointment History
      </h1>

      <div className="space-y-6">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white rounded-2xl shadow-sm p-6 border"
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h2 className="text-lg font-medium">
                  {appt.service}
                </h2>
                <p className="text-sm text-gray-500">
                  {appt.date} · {appt.time}
                </p>
                <p className="text-sm text-gray-500">
                  Stylist: {appt.stylist}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₦{appt.price.toLocaleString()}
                </p>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100">
                  {appt.status}
                </span>
              </div>
            </div>

            {/* Rating Section */}
            {appt.status === "Completed" && !appt.rating && (
              <div className="mt-4">
                <p className="text-sm mb-2">
                  Rate your experience:
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      onClick={() =>
                        setRating(appt.id, star)
                      }
                      className="cursor-pointer text-gray-300 hover:text-yellow-400 transition"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Show existing rating */}
            {appt.rating && (
              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={
                      star <= appt.rating!
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            )}

            {/* Book Again */}
            <div className="mt-6">
              <button
                onClick={() =>
                  handleBookAgain(appt.service)
                }
                className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90 transition"
              >
                Book Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}