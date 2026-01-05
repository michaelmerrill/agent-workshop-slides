export function SlideLLMInteractions() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 px-8 py-6 border-b border-[#242424]">
        <h1 className="text-3xl font-bold text-white">LLM interactions</h1>
      </div>

      <div className="flex-1 p-8">

      <div className="flex w-full flex-1">
        <div className="flex flex-col w-full">
          <div className="bg-black/40 rounded-lg p-8 border border-[#242424] flex-1">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#6b7280]">// Step 1: Call tool</span>
                {"\n"}
                <span className="text-[#f75f8f]">const</span> <span className="text-white">toolResult</span>{" "}
                <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">await</span>{" "}
                <span className="text-[#c472fb]">generateText</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">model</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#c472fb]">anthropic</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#62c073]">'claude-haiku-4.5'</span>
                <span className="text-[#a1a1a1]">),</span>
                {"\n"}
                {"  "}
                <span className="text-white">tools</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                <span className="text-white">weather</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">weatherTool</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">prompt</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">'Get weather for SF'</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#6b7280]">// Step 2: Generate structured output</span>
                {"\n"}
                <span className="text-[#f75f8f]">const</span> <span className="text-white">structured</span>{" "}
                <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">await</span>{" "}
                <span className="text-[#c472fb]">generateObject</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">model</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#c472fb]">anthropic</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#62c073]">'claude-haiku-4.5'</span>
                <span className="text-[#a1a1a1]">),</span>
                {"\n"}
                {"  "}
                <span className="text-white">schema</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">summary</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">temperature</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">number</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">recommendation</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">prompt</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">`Summarize: </span>
                <span className="text-[#c472fb]">$</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                <span className="text-white">toolResult</span>
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#62c073]">`</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
