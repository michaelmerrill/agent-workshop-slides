export function Slide03WhatsNew() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-6xl font-bold text-white mb-16">What's New in AI SDK 6 Beta</h1>
      <div className="space-y-6 text-2xl">
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff] text-3xl">→</span>
          <div>
            <p className="font-semibold text-white">Agent Abstraction</p>
            <p className="text-xl text-gray-400 mt-1">Flexible interface for building agents</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff] text-3xl">→</span>
          <div>
            <p className="font-semibold text-white">Tool Execution Approval</p>
            <p className="text-xl text-gray-400 mt-1">Human-in-the-loop workflows</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff] text-3xl">→</span>
          <div>
            <p className="font-semibold text-white">Structured Output (Stable)</p>
            <p className="text-xl text-gray-400 mt-1">Structured outputs with tool-calling</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff] text-3xl">→</span>
          <div>
            <p className="font-semibold text-white">Reranking Support</p>
            <p className="text-xl text-gray-400 mt-1">Improved search relevance</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-[#52a8ff] text-3xl">→</span>
          <div>
            <p className="font-semibold text-white">Image Editing Support</p>
            <p className="text-xl text-gray-400 mt-1">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
