import {
  Truck,
  ShieldCheck,
  RefreshCw,
  Gem,
} from "lucide-react"

const items = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Next-day delivery within Lagos, 2-3 days nationwide",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    desc: "All products are genuine and quality-verified",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "14-day hassle-free return policy",
  },
  {
    icon: Gem,
    title: "Loyalty Rewards",
    desc: "Earn points on every purchase",
  },
]

export default function TrustSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center relative">

        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="relative px-6"
            >
              <Icon
                className="mx-auto mb-4 text-[#D4AF37]"
                size={36}
              />
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>

              {/* Divider */}
              {i !== items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#D4AF37]/40" />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}