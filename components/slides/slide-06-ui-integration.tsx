export function Slide06UIIntegration() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-5xl font-bold text-white mb-6">Seamless UI Integration</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
          <div className="bg-black/40 rounded-lg p-6 border border-white/20">
            <pre className="text-xs overflow-auto leading-relaxed">
              <code>
                <span className="text-[#a1a1a1]">// Your custom agent</span>
                {"\n"}
                <span className="text-[#f75f8f]">class</span> <span className="text-[#52a8ff]">MyCustomAgent</span>{" "}
                <span className="text-[#f75f8f]">implements</span> <span className="text-[#52a8ff]">Agent</span>{" "}
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">// Your implementation</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"}"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#a1a1a1]">// Works with createAgentUIStreamResponse</span>
                {"\n"}
                <span className="text-[#f75f8f]">export</span> <span className="text-[#f75f8f]">async</span>{" "}
                <span className="text-[#f75f8f]">function</span> <span className="text-[#c472fb]">POST</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-white">req</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Request</span>
                <span className="text-[#a1a1a1]">) {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#f75f8f]">return</span>{" "}
                <span className="text-[#c472fb]">createAgentUIStreamResponse</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">agent</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">myCustomAgent</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"    "}
                <span className="text-white">messages</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"});"}</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
          <div className="bg-black/40 rounded-lg p-6 border border-white/20">
            <pre className="text-xs overflow-auto leading-relaxed">
              <code>
                <span className="text-[#a1a1a1]">// Type-safe on the client</span>
                {"\n"}
                <span className="text-[#f75f8f]">import</span> {"{"}{" "}
                <span className="text-[#52a8ff]">InferAgentUIMessage</span> {"}"}{" "}
                <span className="text-[#f75f8f]">from</span> <span className="text-[#62c073]">"ai"</span>
                {"\n"}
                {"\n"}
                <span className="text-[#f75f8f]">type</span> <span className="text-[#52a8ff]">MyAgentMessage</span>{" "}
                <span className="text-[#f75f8f]">=</span> {"\n"}
                {"  "}
                <span className="text-[#52a8ff]">InferAgentUIMessage</span>
                <span className="text-[#a1a1a1]">{"<"}</span>
                <span className="text-[#f75f8f]">typeof</span> <span className="text-white">myCustomAgent</span>
                <span className="text-[#a1a1a1]">{">;"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#f75f8f]">const</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                <span className="text-white">messages</span> <span className="text-[#a1a1a1]">{"}"}</span>{" "}
                <span className="text-[#f75f8f]">=</span> <span className="text-[#c472fb]">useChat</span>
                <span className="text-[#a1a1a1]">{"<"}</span>
                <span className="text-[#52a8ff]">MyAgentMessage</span>
                <span className="text-[#a1a1a1]">{">();"}</span>
                {"\n"}
                <span className="text-[#a1a1a1]">// Full autocomplete and type safety!</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
