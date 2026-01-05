export function Slide04bPerspectives() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl font-bold text-white mb-8">Perspectives</h1>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* left column */}
        <div className="border-t border-[#242424] pt-8">
          <h2 className="text-4xl font-bold text-white mb-4">User Experiences</h2>
          <p className="text-2xl text-[#a0a0a0]">AI Native product features</p>
        </div>

        {/* right column */}
        <div className="border-t border-[#242424] pt-8">
          <h2 className="text-4xl font-bold text-white mb-4">Internal Efficiency</h2>
          <p className="text-2xl text-[#a0a0a0]">Productivity agents, automate workflows, internal tools</p>
        </div>
      </div>
    </div>
  )
}
