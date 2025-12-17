export function Slide02Agenda() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-6xl font-bold text-white mb-16">Today's Agenda</h1>
      <div className="space-y-8 text-2xl text-gray-300">
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff]">•</span>
          <div>
            <p className="font-semibold text-white">AI SDK 6 Beta Overview</p>
            <ul className="text-xl text-gray-400 mt-2 list-disc list-inside">
              <li>Agent Abstraction</li>
              <li>Tool Execution Approval</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff]">•</span>
          <p>Deep Dive Demo</p>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff]">•</span>
          <div>
            <p className="font-semibold text-white">Additional Features</p>
            <ul className="text-xl text-gray-400 mt-2 list-disc list-inside">
              <li>Image Editing Support</li>
              <li>Reranking Support</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff]">•</span>
          <p>Q&A</p>
        </div>
      </div>
    </div>
  )
}
