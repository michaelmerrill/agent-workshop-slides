export function Slide05BuildAgent() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-5xl font-bold text-white mb-8 text-center">Build Your Perfect Agent</h1>
      <div className="bg-black/40 rounded-lg p-8 mb-12 border border-white/20">
        <pre className="text-sm overflow-auto leading-relaxed">
          <code>
            <span className="text-[#a1a1a1]">// Build your own multi-agent orchestrator</span>
            {"\n"}
            <span className="text-[#f75f8f]">class</span> <span className="text-[#52a8ff]">Orchestrator</span>{" "}
            <span className="text-[#f75f8f]">implements</span> <span className="text-[#52a8ff]">Agent</span>{" "}
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-[#c472fb]">constructor</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#f75f8f]">private</span> <span className="text-white">subAgents</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Record</span>
            <span className="text-[#a1a1a1]">{"<"}</span>
            <span className="text-[#52a8ff]">string</span>
            <span className="text-[#a1a1a1]">, </span>
            <span className="text-[#52a8ff]">Agent</span>
            <span className="text-[#a1a1a1]">
              {">)"} {"{}"}
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="text-[#f75f8f]">async</span> <span className="text-[#c472fb]">generate</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-white">options</span>
            <span className="text-[#a1a1a1]">) {"{"}</span> <span className="text-[#a1a1a1]">/* your logic */</span>{" "}
            <span className="text-[#a1a1a1]">{"}"}</span>
            {"\n"}
            {"  "}
            <span className="text-[#f75f8f]">async</span> <span className="text-[#c472fb]">stream</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-white">options</span>
            <span className="text-[#a1a1a1]">) {"{"}</span> <span className="text-[#a1a1a1]">/* your logic */</span>{" "}
            <span className="text-[#a1a1a1]">{"}"}</span>
            {"\n"}
            <span className="text-[#a1a1a1]">{"}"}</span>
            {"\n"}
            {"\n"}
            <span className="text-[#f75f8f]">const</span> <span className="text-white">orchestrator</span>{" "}
            <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">new</span>{" "}
            <span className="text-[#52a8ff]">Orchestrator</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-white">subAgents</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
            <span className="text-[#a1a1a1]">/* your subagents */</span> <span className="text-[#a1a1a1]">{"}"}</span>
            {"\n"}
            <span className="text-[#a1a1a1]">{"});"}</span>
          </code>
        </pre>
      </div>
    </div>
  )
}
