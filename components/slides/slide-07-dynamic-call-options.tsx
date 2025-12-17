export function Slide07DynamicCallOptions() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-5xl font-bold text-white mb-6">Dynamic Call Options</h1>
      <div className="bg-black/40 rounded-lg p-6 mb-8 border border-white/20">
        <pre className="text-sm overflow-auto leading-relaxed">
          <code>
            <span className="text-[#f75f8f]">const</span> <span className="text-white">supportAgent</span>{" "}
            <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">new</span>{" "}
            <span className="text-[#52a8ff]">ToolLoopAgent</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-white">model</span>
            <span className="text-[#f75f8f]">:</span>{" "}
            <span className="text-[#62c073]">'anthropic/claude-haiku-4.5'</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            {"  "}
            <span className="text-white">callOptionsSchema</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-[#c472fb]">object</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"    "}
            <span className="text-white">userId</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-[#c472fb]">string</span>
            <span className="text-[#a1a1a1]">(),</span>
            {"\n"}
            {"    "}
            <span className="text-white">accountType</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-[#c472fb]">enum</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">[</span>
            <span className="text-[#62c073]">"free"</span>
            <span className="text-[#a1a1a1]">,</span> <span className="text-[#62c073]">"pro"</span>
            <span className="text-[#a1a1a1]">,</span> <span className="text-[#62c073]">"enterprise"</span>
            <span className="text-[#a1a1a1]">]</span>
            <span className="text-[#a1a1a1]">)</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#a1a1a1]">{"}),"}</span>
            {"\n"}
            {"  "}
            <span className="text-[#c472fb]">prepareCall</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">options</span>
            <span className="text-[#a1a1a1]">,</span> <span className="text-[#f75f8f]">...</span>
            <span className="text-white">settings</span> <span className="text-[#a1a1a1]">{"}"}</span>
            <span className="text-[#a1a1a1]">) </span>
            <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"    "}
            <span className="text-[#f75f8f]">...</span>
            <span className="text-white">settings</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            {"    "}
            <span className="text-white">instructions</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-white">settings</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-white">instructions</span> <span className="text-[#f75f8f]">+</span> {"\n"}
            {"      "}
            <span className="text-[#62c073]">{`\\nUser: `}</span>
            <span className="text-[#f75f8f]">${"${"}</span>
            <span className="text-white">options</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-white">userId</span>
            <span className="text-[#f75f8f]">{"}"}</span>
            {"\n"}
            {"       "}
            <span className="text-[#62c073]">Account: </span>
            <span className="text-[#f75f8f]">${"${"}</span>
            <span className="text-white">options</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-white">accountType</span>
            <span className="text-[#f75f8f]">{"}`"}</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#a1a1a1]">{"}),"}</span>
            {"\n"}
            <span className="text-[#a1a1a1]">{"});"}</span>
            {"\n"}
            {"\n"}
            <span className="text-[#f75f8f]">await</span> <span className="text-white">supportAgent</span>
            <span className="text-[#a1a1a1]">.</span>
            <span className="text-[#c472fb]">generate</span>
            <span className="text-[#a1a1a1]">(</span>
            <span className="text-[#a1a1a1]">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-white">prompt</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"How do I upgrade?"</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            {"  "}
            <span className="text-white">options</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
            <span className="text-white">userId</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"user_123"</span>
            <span className="text-[#a1a1a1]">,</span> <span className="text-white">accountType</span>
            <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"free"</span>{" "}
            <span className="text-[#a1a1a1]">{"}"}</span>
            <span className="text-[#a1a1a1]">,</span>
            {"\n"}
            <span className="text-[#a1a1a1]">{"});"}</span>
          </code>
        </pre>
      </div>
    </div>
  )
}
