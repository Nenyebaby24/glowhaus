"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";
import { useStore } from "@/store/useStore";
import BookingWizard from "@/components/booking/BookingWizard";
import { services } from "@/lib/dummy-data/services";

interface PageProps {
  params: {
    serviceSlug: string;
  };
}

export default function BookingServicePage({ params }: PageProps) {
  const { serviceSlug } = params;

  const setBookingService = useStore((s) => s.setBookingService);
  const clearBooking = useStore((s) => s.clearBooking);

  // 🔎 Find service by ID
  const service = services.find(
    (s) => s.id === serviceSlug
  );

  // ❌ If invalid service ID
  if (!service) {
    return notFound();
  }

  useEffect(() => {
    // Reset previous booking session
    clearBooking();

    // Set selected service in store
    setBookingService(service);
  }, [service, clearBooking, setBookingService]);

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#faf8f4] py-20 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-cormorant font-semibold">
          Book {service.name}
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {service.description}
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <span className="bg-gray-100 px-4 py-2 rounded-full">
            ⏱ {service.duration}
          </span>

          <span className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
            ₦{service.price.toLocaleString()}
          </span>
        </div>

      </section>

      {/* ================= BOOKING WIZARD ================= */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <BookingWizard />
        </div>
      </section>

    </div>
  );
}