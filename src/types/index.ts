export type Tier = "Bronze" | "Silver" | "Gold" | "Platinum";

export interface Product {
  id: string;
  name: string;
  price: number;
  images?: string[];
  rating?: number;   // For the Star ratings
  reviews?: number;  // Fixes the BestsellerCard error
  category: string;
  description?: string;
  stock?: number;
  isSale?: boolean;
  originalPrice?: number;
  details?: string[];
  slug: string;
  
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface Appointment {
  id: string;
  service: Service;
  date: string;
  time: string;
}

export interface PointTransaction {
  id: string;
  amount: number;
  reason: string;
  date: string;
}