export default function StatCard({
  icon,
  label,
  value,
}: {
  icon: string
  label: string
  value: string | number
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <p className="text-2xl mb-3">{icon}</p>
      <p className="text-gray-500 text-sm">{label}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  )
}