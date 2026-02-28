export interface Appointment {
  id: string;
  serviceName: string;
  date: string;
  price: number;
  status: "completed" | "cancelled" | "upcoming";
}

export const appointments: Appointment[] = [
  {
    id: "app-1",
    serviceName: "Gel Manicure",
    date: "2025-01-10",
    price: 8500,
    status: "completed",
  },
  {
    id: "app-2",
    serviceName: "Full Sew-In Install",
    date: "2025-01-18",
    price: 25000,
    status: "completed",
  },
  {
    id: "app-3",
    serviceName: "Wig Revamp & Styling",
    date: "2025-02-05",
    price: 15000,
    status: "completed",
  },
  {
    id: "app-4",
    serviceName: "Pedicure & Foot Spa",
    date: "2025-02-12",
    price: 7000,
    status: "completed",
  },
  {
    id: "app-5",
    serviceName: "Silk Press",
    date: "2025-02-20",
    price: 10000,
    status: "completed",
  },
  {
    id: "app-6",
    serviceName: "Full Glam Makeup",
    date: "2025-02-28",
    price: 25000,
    status: "upcoming",
  },
  {
    id: "app-7",
    serviceName: "Nail Repair (Single)",
    date: "2025-03-02",
    price: 1500,
    status: "upcoming",
  },
  {
    id: "app-8",
    serviceName: "Braids (Box Braids, Large)",
    date: "2025-03-10",
    price: 18000,
    status: "upcoming",
  },
  {
    id: "app-9",
    serviceName: "Classic Eyelash Extensions",
    date: "2025-03-15",
    price: 15500,
    status: "upcoming",
  },
  {
    id: "app-10",
    serviceName: "Frontal Customization",
    date: "2025-03-20",
    price: 12000,
    status: "cancelled",
  },
];