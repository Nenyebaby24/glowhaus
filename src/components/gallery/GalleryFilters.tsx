export default function GalleryFilters({ active, onChange }: any) {
  const filters = ["all", "hair", "nails", "makeup", "accessories"]

  return (
    <div className="flex justify-center gap-6 flex-wrap mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`capitalize px-4 py-2 rounded-full transition 
          ${active === filter 
            ? "bg-black text-white" 
            : "bg-white text-gray-700 hover:bg-gray-100"}`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}