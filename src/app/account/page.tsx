"use client"

import AccountLayout from "@/components/account/AccountLayout"
import AccountSidebar from "@/components/account/AccountSidebar"
import StatCard from "@/components/account/StatCard"
import RecentOrders from "@/components/account/RecentOrders"
import UpcomingAppointment from "@/components/account/UpcomingAppointment"
import PointsSnapshot from "@/components/account/PointsSnapshot"
import { useAccountStore } from "@/store/accountStore"

export default function AccountPage() {
  const {
    name,
    totalOrders,
    glowPoints,
    wishlistCount,
    upcomingAppointment,
  } = useAccountStore()

  return (
    <AccountLayout sidebar={<AccountSidebar />}>

      {/* Welcome */}
      <div className="mb-10">
        <h1 className="text-3xl font-serif">
          Good morning, {name}! ✨
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard icon="📦" label="Total Orders" value={totalOrders} />
        <StatCard icon="💎" label="GlowPoints" value={glowPoints} />
        <StatCard icon="❤️" label="Wishlist Items" value={wishlistCount} />
        <StatCard
          icon="📅"
          label="Next Appointment"
          value={upcomingAppointment?.date || "None"}
        />
      </div>

      <RecentOrders />
      <UpcomingAppointment />
      <PointsSnapshot />

    </AccountLayout>
  )
}