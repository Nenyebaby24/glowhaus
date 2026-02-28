"use client"

import { X } from "lucide-react"

interface Props {
  order: any
  onClose: () => void
}

export default function OrderDetailModal({ order, onClose }: Props) {
  const steps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ]

  const getStepIndex = () => {
    switch (order.status) {
      case "Processing":
        return 1
      case "Shipped":
        return 2
      case "Delivered":
        return 4
      default:
        return 0
    }
  }

  const currentStep = getStepIndex()

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 space-y-6 overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Order {order.id}
          </h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {order.products.map((item: any) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="font-semibold">
                ₦{item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="text-sm text-gray-600">
          <p className="font-medium text-gray-900">
            Delivery Address
          </p>
          <p>12 Admiralty Way, Lekki Phase 1, Lagos</p>
        </div>

        {/* Payment */}
        <div className="text-sm text-gray-600">
          <p className="font-medium text-gray-900">
            Payment Method
          </p>
          <p>Visa •••• 4521</p>
        </div>

        {/* Tracking Timeline */}
        <div>
          <p className="font-medium mb-3">
            Tracking
          </p>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full ${
                    index <= currentStep
                      ? "bg-green-500 animate-pulse"
                      : "bg-gray-300"
                  }`}
                />
                <p
                  className={`text-sm ${
                    index <= currentStep
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full mt-4 bg-black text-white py-3 rounded-xl">
          Track Order
        </button>
      </div>
    </div>
  )
}