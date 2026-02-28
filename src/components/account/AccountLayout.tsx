export default function AccountLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FDF8EE] pt-24">
      <div className="container mx-auto px-6 flex gap-10">

        {/* Sidebar */}
        <div className="hidden lg:block w-[240px]">
          {sidebar}
        </div>

        {/* Main */}
        <div className="flex-1">
          {children}
        </div>

      </div>
    </div>
  )
}