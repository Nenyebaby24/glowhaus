import GalleryCard from "@/components/gallery/GalleryCard"

export default function MasonryGrid({ items, onOpen }: any) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((item: any, index: number) => (
        <GalleryCard
          key={item.id}
          item={item}
          onClick={() => onOpen(index)}
        />
      ))}
    </div>
  )
}