import { create } from "zustand"

/* ------------------ ORDER TYPES ------------------ */

interface OrderItem {
  id: string
  name: string
  image: string
  quantity: number
  price: number
}

interface Order {
  id: string
  date: string
  items: number
  total: number
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  products: OrderItem[]
}

/* ------------------ APPOINTMENT TYPES ------------------ */

/* For upcoming appointment (keep your original simple structure) */
interface Appointment {
  service: string
  date: string
  time: string
  price: number
  status: "Confirmed" | "Pending"
}

/* For appointments history page */
interface AppointmentHistory {
  id: string
  service: string
  date: string
  time: string
  stylist: string
  price: number
  status: "Completed" | "Confirmed" | "Pending" | "Cancelled"
  rating?: number
}

/* ------------------ ACCOUNT STATE ------------------ */

interface AccountState {
  name: string
  tier: string
  glowPoints: number
  wishlistCount: number
  totalOrders: number

  orders: Order[]

  upcomingAppointment: Appointment | null

  /* NEW */
  appointments: AppointmentHistory[]

  setRating: (id: string, rating: number) => void
  setBookingService: (service: string) => void
}

/* ------------------ STORE ------------------ */

export const useAccountStore = create<AccountState>((set) => ({
  name: "Jane Doe",
  tier: "Gold Member",
  glowPoints: 1250,
  wishlistCount: 8,
  totalOrders: 12,

  /* ------------------ ORDERS ------------------ */

  orders: [
    {
      id: "GH-1023",
      date: "Mar 10, 2026",
      items: 2,
      total: 45000,
      status: "Delivered",
      products: [
        {
          id: "P1",
          name: "Silk Press Kit",
          image: "/images/product-1.jpg",
          quantity: 1,
          price: 25000,
        },
        {
          id: "P2",
          name: "Hair Serum",
          image: "/images/product-2.jpg",
          quantity: 1,
          price: 20000,
        },
      ],
    },
    {
      id: "GH-1018",
      date: "Feb 28, 2026",
      items: 1,
      total: 25000,
      status: "Shipped",
      products: [
        {
          id: "P3",
          name: "Deep Conditioner",
          image: "/images/product-3.jpg",
          quantity: 1,
          price: 25000,
        },
      ],
    },
    {
      id: "GH-1011",
      date: "Feb 15, 2026",
      items: 3,
      total: 78000,
      status: "Processing",
      products: [
        {
          id: "P4",
          name: "Edge Control",
          image: "/images/product-4.jpg",
          quantity: 2,
          price: 15000,
        },
        {
          id: "P5",
          name: "Curl Reviver Spray",
          image: "/images/product-5.jpg",
          quantity: 1,
          price: 48000,
        },
      ],
    },
  ],

  /* ------------------ UPCOMING APPOINTMENT ------------------ */

  upcomingAppointment: {
    service: "Gel Manicure",
    date: "Mar 15, 2026",
    time: "2:00 PM",
    price: 15000,
    status: "Confirmed",
  },

  /* ------------------ APPOINTMENT HISTORY ------------------ */

  appointments: [
    {
      id: "A1",
      service: "Gel Manicure",
      date: "Feb 10, 2026",
      time: "2:00 PM",
      stylist: "Amara",
      price: 15000,
      status: "Completed",
    },
    {
      id: "A2",
      service: "Silk Press",
      date: "Jan 20, 2026",
      time: "11:00 AM",
      stylist: "Chioma",
      price: 25000,
      status: "Completed",
      rating: 5,
    },
    {
      id: "A3",
      service: "Facial Treatment",
      date: "Mar 15, 2026",
      time: "1:00 PM",
      stylist: "Lola",
      price: 18000,
      status: "Confirmed",
    },
  ],

  /* ------------------ ACTIONS ------------------ */

  setRating: (id, rating) =>
    set((state) => ({
      appointments: state.appointments.map((appt) =>
        appt.id === id ? { ...appt, rating } : appt
      ),
    })),

  setBookingService: (service) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedService", service)
    }
  },
}))