export function Slide09ToolApproval() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-5xl font-bold text-white mb-12">Tool Execution Approval</h1>
      <div className="">
        <div>
          <div className="bg-black/40 rounded-lg p-6 border border-white/20">
            <pre className="text-xs overflow-auto leading-relaxed">
              <code>
                <span className="text-[#f75f8f]">export</span> <span className="text-[#f75f8f]">const</span>{" "}
                <span className="text-white">paymentTool</span> <span className="text-[#f75f8f]">=</span>{" "}
                <span className="text-[#c472fb]">tool</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">description</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"Process payment"</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">inputSchema</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">amount</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">number</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">recipient</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">// Dynamic approval logic</span>
                {"\n"}
                {"  "}
                <span className="bg-[#52a8ff]/40 px-1 rounded">
                  <span className="text-[#c472fb]">needsApproval</span>
                  <span className="text-[#f75f8f]">:</span> <span className="text-[#f75f8f]">async</span>{" "}
                  <span className="text-[#a1a1a1]">(</span>
                  <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">amount</span>{" "}
                  <span className="text-[#a1a1a1]">{"}"}</span>
                  <span className="text-[#a1a1a1]">) </span>
                  <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-white">amount</span>{" "}
                  <span className="text-[#f75f8f]">{">"}</span> <span className="text-[#52a8ff]">1000</span>
                </span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c472fb]">execute</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#f75f8f]">async</span>{" "}
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">amount</span>
                <span className="text-[#a1a1a1]">,</span> <span className="text-white">recipient</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">) </span>
                <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-[#f75f8f]">return</span> <span className="text-[#f75f8f]">await</span>{" "}
                <span className="text-[#c472fb]">processPayment</span>
                <span className="text-[#a1a1a1]">(</span>
                {"\n"}
                {"      "}
                <span className="text-white">amount</span>
                <span className="text-[#a1a1a1]">,</span> {"\n"}
                {"      "}
                <span className="text-white">recipient</span>
                {"\n"}
                {"    "}
                <span className="text-[#a1a1a1]">);</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
