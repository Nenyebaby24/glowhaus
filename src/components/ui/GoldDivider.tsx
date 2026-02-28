interface GoldDividerProps {
  ornament?: React.ReactNode
}

export function GoldDivider({ ornament }: GoldDividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-[#D4AF37]" />
      {ornament && <div>{ornament}</div>}
      <div className="flex-1 h-px bg-[#D4AF37]" />
    </div>
  )
}