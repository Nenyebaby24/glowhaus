// src/lib/dummy-data/hero.ts

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string[]; // Your code uses .map() on title, so this must be an array
  subtext: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const h = (query: string) =>
  `https://images.unsplash.com/photo-${query}?auto=format&fit=crop&q=80&w=800`;

export const slides: HeroSlide[] = [
  {
    id: "s1",
    eyebrow: "PREMIUM HAIR COLLECTION",
    title: ["Unleash Your", "Inner Goddess"],
    subtext: "Experience the luxury of high-grade Brazilian and Indian textures tailored just for you.",
    image: h("1624330186716-435e2b090740"),
    ctaPrimary: "Shop Hair",
    ctaSecondary: "Book Install",
  },
  {
    id: "s2",
    eyebrow: "MASTERFUL NAIL ART",
    title: ["Precision In", "Every Detail"],
    subtext: "From classic French tips to avant-garde 3D art, your hands deserve the best treatment.",
    image: h("1604654894610-df63bc536371"),
    ctaPrimary: "Explore Nails",
    ctaSecondary: "View Gallery",
  },
  {
    id: "s3",
    eyebrow: "GLAMOUR & BEAUTY",
    title: ["Defined By", "Your Natural Glow"],
    subtext: "Discover professional beauty services and accessories that elevate your daily routine.",
    image: h("1522335789203-aabd1fc54bc9"),
    ctaPrimary: "Shop Beauty",
    ctaSecondary: "Book Glam",
  },
];