export interface GalleryItem {
  id: string;
  category: "hair" | "nails" | "makeup" | "accessories";
  image: string;
  beforeAfter: boolean;
  title: string;
}

const g = (query: string) =>
  `https://source.unsplash.com/800x800/?${query}`;

export const gallery: GalleryItem[] = [
  // ================= HAIR (12) =================
  { id: "g1", category: "hair", image: g("box braids hairstyle"), beforeAfter: true, title: "Large Box Braids" },
  { id: "g2", category: "hair", image: g("silk press hair"), beforeAfter: true, title: "Silk Press Finish" },
  { id: "g3", category: "hair", image: g("lace wig install"), beforeAfter: true, title: "HD Lace Install" },
  { id: "g4", category: "hair", image: g("curly wig styled"), beforeAfter: false, title: "Deep Wave Wig" },
  { id: "g5", category: "hair", image: g("hair coloring salon"), beforeAfter: true, title: "Full Head Colour" },
  { id: "g6", category: "hair", image: g("knotless braids"), beforeAfter: true, title: "Knotless Braids" },
  { id: "g7", category: "hair", image: g("straight hair weave"), beforeAfter: false, title: "Bone Straight Install" },
  { id: "g8", category: "hair", image: g("bridal hairstyle"), beforeAfter: false, title: "Bridal Updo" },
  { id: "g9", category: "hair", image: g("natural curls styled"), beforeAfter: true, title: "Defined Natural Curls" },
  { id: "g10", category: "hair", image: g("pixie cut hairstyle"), beforeAfter: false, title: "Chic Pixie Cut" },
  { id: "g11", category: "hair", image: g("frontal wig melt"), beforeAfter: true, title: "Frontal Melt" },
  { id: "g12", category: "hair", image: g("hair steam treatment"), beforeAfter: true, title: "Deep Conditioning Treatment" },

  // ================= NAILS (10) =================
  { id: "g13", category: "nails", image: g("gel manicure nude"), beforeAfter: false, title: "Nude Gel Set" },
  { id: "g14", category: "nails", image: g("french tip nails"), beforeAfter: false, title: "Classic French Tips" },
  { id: "g15", category: "nails", image: g("acrylic nail art"), beforeAfter: true, title: "Acrylic Art Design" },
  { id: "g16", category: "nails", image: g("floral nail art"), beforeAfter: false, title: "Floral Nail Art" },
  { id: "g17", category: "nails", image: g("luxury pedicure spa"), beforeAfter: true, title: "Luxury Pedicure" },
  { id: "g18", category: "nails", image: g("ombre nails"), beforeAfter: false, title: "Ombre Press-On" },
  { id: "g19", category: "nails", image: g("red gel polish"), beforeAfter: false, title: "Bold Red Gel" },
  { id: "g20", category: "nails", image: g("bridal nail set"), beforeAfter: false, title: "Bridal Nail Glam" },
  { id: "g21", category: "nails", image: g("glitter acrylic nails"), beforeAfter: false, title: "Glitter Acrylic" },
  { id: "g22", category: "nails", image: g("minimalist nail design"), beforeAfter: false, title: "Minimalist Design" },

  // ================= MAKEUP (10) =================
  { id: "g23", category: "makeup", image: g("full glam makeup"), beforeAfter: true, title: "Full Glam Look" },
  { id: "g24", category: "makeup", image: g("bridal makeup portrait"), beforeAfter: true, title: "Bridal Makeup" },
  { id: "g25", category: "makeup", image: g("soft glam makeup"), beforeAfter: false, title: "Soft Glam" },
  { id: "g26", category: "makeup", image: g("natural makeup look"), beforeAfter: true, title: "Natural Glow" },
  { id: "g27", category: "makeup", image: g("eyelash extensions close up"), beforeAfter: true, title: "Classic Lash Extensions" },
  { id: "g28", category: "makeup", image: g("smokey eye makeup"), beforeAfter: false, title: "Smokey Eye Glam" },
  { id: "g29", category: "makeup", image: g("bold lipstick makeup"), beforeAfter: false, title: "Statement Lips" },
  { id: "g30", category: "makeup", image: g("editorial makeup look"), beforeAfter: false, title: "Editorial Shoot" },
  { id: "g31", category: "makeup", image: g("makeup transformation before after"), beforeAfter: true, title: "Makeup Transformation" },
  { id: "g32", category: "makeup", image: g("glowing skin facial result"), beforeAfter: true, title: "Facial Glow Result" },

  // ================= ACCESSORIES (8) =================
  { id: "g33", category: "accessories", image: g("silk pillowcase luxury"), beforeAfter: false, title: "Silk Pillowcase" },
  { id: "g34", category: "accessories", image: g("makeup brush set"), beforeAfter: false, title: "Luxury Brush Set" },
  { id: "g35", category: "accessories", image: g("vanity mirror with lights"), beforeAfter: false, title: "Vanity Setup" },
  { id: "g36", category: "accessories", image: g("jade roller skincare"), beforeAfter: false, title: "Jade Roller Set" },
  { id: "g37", category: "accessories", image: g("hair bonnet satin"), beforeAfter: false, title: "Satin Bonnet" },
  { id: "g38", category: "accessories", image: g("perfume bottle gold"), beforeAfter: false, title: "Gold Atomiser" },
  { id: "g39", category: "accessories", image: g("hair scrunchies satin"), beforeAfter: false, title: "Satin Scrunchies" },
  { id: "g40", category: "accessories", image: g("beauty flatlay aesthetic"), beforeAfter: false, title: "Luxury Beauty Flatlay" },
];