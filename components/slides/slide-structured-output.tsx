export function SlideStructuredOutput() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl font-bold text-white mb-8">Structured output</h1>

      <div className="flex w-full flex-1">
        <div className="flex flex-col w-full">
          <div className="bg-black/40 rounded-lg p-8 border border-green-400/30 flex-1">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#6b7280]">// All in one call!</span>
                {"\n"}
                <span className="text-[#f75f8f]">const</span> <span className="text-white">result</span>{" "}
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
                <span className="text-white">output</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Output</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">schema</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"      "}
                <span className="text-white">summary</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"      "}
                <span className="text-white">temperature</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">number</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"      "}
                <span className="text-white">recommendation</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">prompt</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">'Get weather for SF'</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#6b7280]">// result.output contains typed data</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
