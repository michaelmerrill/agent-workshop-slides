export function SlideAgentAbstraction() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl font-bold text-white mb-8">Agent abstraction</h1>
      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* left column - stacked boxes */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Flexible Interface
            </h3>
            <div className="space-y-3 text-lg text-[#a0a0a0]">
              <p>• Agent is an interface, not a class</p>
              <p>• Build custom implementations</p>
              <p>• Full control over execution flow</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Composable Architecture
            </h3>
            <div className="space-y-3 text-lg text-[#a0a0a0]">
              <p>• Mix and match patterns</p>
              <p>• Orchestrators and sub-agents</p>
              <p>• Memory layers and custom logic</p>
            </div>
          </div>
        </div>

        {/* right column - code block */}
        <div className="bg-black/40 rounded-lg p-8 border border-white/20">
          <pre className="text-sm overflow-auto leading-relaxed">
            <code>
              <span className="text-[#a1a1a1]">// Define the agent</span>
              {"\n"}
              <span className="text-[#f75f8f]">export</span>{" "}
              <span className="text-[#f75f8f]">const</span>{" "}
              <span className="text-white">weatherAgent</span>{" "}
              <span className="text-[#f75f8f]">=</span>{" "}
              <span className="text-[#f75f8f]">new</span>{" "}
              <span className="text-[#52a8ff]">ToolLoopAgent</span>
              <span className="text-[#a1a1a1]">({"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-white">model</span>
              <span className="text-[#f75f8f]">:</span>{" "}
              <span className="text-[#62c073]">
                "anthropic/claude-sonnet-4.5"
              </span>
              <span className="text-[#a1a1a1]">,</span>
              {"\n"}
              {"  "}
              <span className="text-white">instructions</span>
              <span className="text-[#f75f8f]">:</span>{" "}
              <span className="text-[#62c073]">
                'You are a helpful weather assistant.'
              </span>
              <span className="text-[#a1a1a1]">,</span>
              {"\n"}
              {"  "}
              <span className="text-white">tools</span>
              <span className="text-[#f75f8f]">:</span>{" "}
              <span className="text-[#a1a1a1]">{"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-white">weather</span>
              <span className="text-[#f75f8f]">:</span>{" "}
              <span className="text-white">weatherTool</span>
              <span className="text-[#a1a1a1]">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#a1a1a1]">{"}"}</span>
              <span className="text-[#a1a1a1]">,</span>
              {"\n"}
              <span className="text-[#a1a1a1]">{"});"}</span>
              {"\n"}
              {"\n"}
              <span className="text-[#a1a1a1]">// Use the agent</span>
              {"\n"}
              <span className="text-[#f75f8f]">const</span>{" "}
              <span className="text-white">result</span>{" "}
              <span className="text-[#f75f8f]">=</span>{" "}
              <span className="text-[#f75f8f]">await</span>{" "}
              <span className="text-white">weatherAgent</span>
              <span className="text-[#a1a1a1]">.</span>
              <span className="text-[#c472fb]">generate</span>
              <span className="text-[#a1a1a1]">({"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-white">prompt</span>
              <span className="text-[#f75f8f]">:</span>{" "}
              <span className="text-[#62c073]">
                'What is the weather in San Francisco?'
              </span>
              <span className="text-[#a1a1a1]">,</span>
              {"\n"}
              <span className="text-[#a1a1a1]">{"});"}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
