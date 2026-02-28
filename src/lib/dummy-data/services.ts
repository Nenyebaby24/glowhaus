export interface Service {
  id: string;
  name: string;
  category: "hair" | "nails" | "beauty";
  price: number;
  duration: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "svc-1",
    name: "Full Sew-In Install",
    category: "hair",
    price: 25000,
    duration: "3hrs",
    description: "Professional sew-in with flawless finish.",
  },
  {
    id: "svc-2",
    name: "Braids (Box Braids, Large)",
    category: "hair",
    price: 18000,
    duration: "4hrs",
    description: "Neat and long-lasting protective style.",
  },
  {
    id: "svc-3",
    name: "Gel Manicure",
    category: "nails",
    price: 8500,
    duration: "1hr",
    description: "Long-lasting gel manicure.",
  },
  {
    id: "svc-4",
    name: "Bridal Package",
    category: "beauty",
    price: 120000,
    duration: "5hrs",
    description: "Complete bridal glam experience.",
  },

  {
    id: "svc-5",
    name: "Wig Revamp & Styling",
    category: "hair",
    price: 15000,
    duration: "2hrs",
    description: "Deep wash, conditioning, and professional styling for your old wigs.",
  },
  {
    id: "svc-6",
    name: "Acrylic Full Set",
    category: "nails",
    price: 12500,
    duration: "1.5hrs",
    description: "Full acrylic extensions with tips and basic gel polish.",
  },
  {
    id: "svc-7",
    name: "Silk Press",
    category: "hair",
    price: 10000,
    duration: "1.5hrs",
    description: "Smooth, bouncy straight hair for natural textures using heat protection.",
  },
  {
    id: "svc-8",
    name: "Pedicure & Foot Spa",
    category: "nails",
    price: 7000,
    duration: "1hr",
    description: "Soothing soak, exfoliation, and nail grooming for tired feet.",
  },
  {
    id: "svc-9",
    name: "Frontal Customization",
    category: "hair",
    price: 12000,
    duration: "1hr",
    description: "Bleaching knots and plucking for the most natural hairline look.",
  },
  {
    id: "svc-10",
    name: "Classic Eyelash Extensions",
    category: "beauty",
    price: 15500,
    duration: "2hrs",
    description: "One-on-one lash application for a natural everyday enhancement.",
  },
  {
    id: "svc-11",
    name: "Full Glam Makeup",
    category: "beauty",
    price: 25000,
    duration: "1.5hrs",
    description: "Perfect for birthdays or events; includes lashes and highlight/contour.",
  },
  {
    id: "svc-12",
    name: "Natural Hair Wash & Treat",
    category: "hair",
    price: 8000,
    duration: "1hr",
    description: "Detox wash followed by a deep conditioning steam treatment.",
  },
  {
    id: "svc-13",
    name: "Nail Repair (Single)",
    category: "nails",
    price: 1500,
    duration: "20mins",
    description: "Quick fix for a single broken acrylic or gel nail.",
  },
  {
    id: "svc-14",
    name: "Micro-Blading Touch-up",
    category: "beauty",
    price: 45000,
    duration: "2hrs",
    description: "Refresh your brow pigment and shape for long-lasting definition.",
  },
  {
    id: "svc-15",
    name: "Braid Removal & Detangle",
    category: "hair",
    price: 5000,
    duration: "1.5hrs",
    description: "Safe take-down of braids to minimize breakage and hair loss.",
  },
];