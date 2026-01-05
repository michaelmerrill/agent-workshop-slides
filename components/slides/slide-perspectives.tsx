export function SlidePerspectives() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 px-8 py-6 border-b border-[#242424]">
        <h1 className="text-3xl font-bold text-white">Perspectives</h1>
      </div>

      <div className="flex-1 p-8">

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">User Experiences</h3>
          <p className="text-lg text-[#a0a0a0]">AI Native product features</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Internal Efficiency</h3>
          <p className="text-lg text-[#a0a0a0]">Productivity agents, automate workflows, internal tools</p>
        </div>
      </div>
      </div>
    </div>
  )
}
