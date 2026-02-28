"use client"

import { useState } from "react"
import OrderDetailModal from "@/components/account/orders/OrderDetailModal"
import { useAccountStore } from "@/store/accountStore"

const [selectedOrder, setSelectedOrder] = useState<any>(null)

const statusStyles: Record<
  "Processing" | "Shipped" | "Delivered" | "Cancelled",
  string
> = {
  Processing: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-rose-100 text-rose-700",
}

export default function OrdersPage() {
  const orders = useAccountStore((state) => state.orders)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Orders</h1>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-4">Order #</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="text-sm">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4 text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4">{order.items}</td>
                <td className="px-6 py-4 font-semibold">
                  ₦{order.total.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-sm font-medium underline hover:opacity-70 transition"
                    >
                 View Order
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-sm p-5 space-y-3"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{order.id}</p>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  statusStyles[order.status]
                }`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              {order.date}
            </p>

            <div className="flex justify-between text-sm">
              <span>{order.items} item(s)</span>
              <span className="font-semibold">
                ₦{order.total.toLocaleString()}
              </span>
            </div>

            <button className="text-sm font-medium underline hover:opacity-70 transition">
              View Order
            </button>
          </div>
        ))}
      </div>
      {selectedOrder && (
      <OrderDetailModal
       order={selectedOrder}
       onClose={() => setSelectedOrder(null)}
       />
         )}
    </div>
    
  )
}