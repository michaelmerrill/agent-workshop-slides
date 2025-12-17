export function Slide04AgentAbstraction() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl font-bold text-white mb-12">Agent Abstraction</h1>
      <div className="grid grid-cols-3 gap-8 flex-1">
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Flexible Interface</h3>
          <div className="space-y-3 text-lg text-gray-300">
            <p>• Agent is an interface, not a class</p>
            <p>• Build custom implementations</p>
            <p>• Full control over execution flow</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">ToolLoopAgent</h3>
          <div className="space-y-3 text-lg text-gray-300">
            <p>• Production-ready out of the box</p>
            <p>• Automatic tool execution loop</p>
            <p>• Sensible defaults (20 step limit)</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Composable Architecture</h3>
          <div className="space-y-3 text-lg text-gray-300">
            <p>• Mix and match patterns</p>
            <p>• Orchestrators and sub-agents</p>
            <p>• Memory layers and custom logic</p>
          </div>
        </div>
      </div>
    </div>
  )
}
