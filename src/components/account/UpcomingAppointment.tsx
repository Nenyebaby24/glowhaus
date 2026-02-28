"use client"

import { useAccountStore } from "@/store/accountStore"

export default function UpcomingAppointment() {
  const upcomingAppointment = useAccountStore(
    (state) => state.upcomingAppointment
  )

  if (!upcomingAppointment) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">
          Upcoming Appointment
        </h2>
        <p className="text-sm text-gray-500">
          You have no upcoming appointments.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Upcoming Appointment
      </h2>

      <div className="space-y-2">
        <p className="font-medium text-gray-900">
          {upcomingAppointment.service}
        </p>

        <p className="text-sm text-gray-500">
          {upcomingAppointment.date} • {upcomingAppointment.time}
        </p>

        <p className="text-sm font-semibold text-gray-900">
          ₦{upcomingAppointment.price.toLocaleString()}
        </p>

        <span
          className={`inline-block text-xs px-3 py-1 rounded-full ${
            upcomingAppointment.status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {upcomingAppointment.status}
        </span>
      </div>

      <button className="mt-5 text-sm font-medium text-black underline hover:opacity-70 transition">
        Manage Appointment
      </button>
    </div>
  )
}