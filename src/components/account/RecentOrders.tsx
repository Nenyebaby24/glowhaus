"use client"

import { useAccountStore } from "@/store/accountStore"

export default function RecentOrders() {
  const { orders } = useAccountStore()

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      {orders.slice(0, 3).map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center py-3 border-b last:border-none"
        >
          <div>
            <p className="font-medium">#{order.id}</p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">₦{order.total.toLocaleString()}</p>
            <p className="text-xs text-green-600">{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}