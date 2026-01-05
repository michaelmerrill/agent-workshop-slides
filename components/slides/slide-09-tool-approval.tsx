export function Slide09ToolApproval() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl font-bold text-white mb-8">
        ToolLoopAgent options
      </h1>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Dynamic call options */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dynamic call options
          </h2>
          <div className="bg-black/40 rounded-lg p-8 border border-white/20 flex-1">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#f75f8f]">const</span>{" "}
                <span className="text-white">agent</span>{" "}
                <span className="text-[#f75f8f]">=</span>{" "}
                <span className="text-[#f75f8f]">new</span>{" "}
                <span className="text-[#52a8ff]">ToolLoopAgent</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">model</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-[#62c073]">
                  'anthropic/claude-haiku-4.5'
                </span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">callOptionsSchema</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">userId</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">accountType</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">enum</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">[</span>
                <span className="text-[#62c073]">"free"</span>
                <span className="text-[#a1a1a1]">,</span>{" "}
                <span className="text-[#62c073]">"pro"</span>
                <span className="text-[#a1a1a1]">]</span>
                <span className="text-[#a1a1a1]">)</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="bg-[#52a8ff]/40 px-1 rounded">
                  <span className="text-[#c472fb]">prepareCall</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-[#a1a1a1]">(</span>
                  <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                  <span className="text-white">options</span>
                  <span className="text-[#a1a1a1]">,</span>{" "}
                  <span className="text-[#f75f8f]">...</span>
                  <span className="text-white">settings</span>{" "}
                  <span className="text-[#a1a1a1]">{"}"}</span>
                  <span className="text-[#a1a1a1]">) </span>
                  <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                  <span className="text-[#a1a1a1]">(</span>
                  <span className="text-[#a1a1a1]">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#f75f8f]">...</span>
                  <span className="text-white">settings</span>
                  <span className="text-[#a1a1a1]">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">instructions</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-white">settings</span>
                  <span className="text-[#a1a1a1]">.</span>
                  <span className="text-white">instructions</span>{" "}
                  <span className="text-[#f75f8f]">+</span>{" "}
                  <span className="text-[#62c073]">{"`"}</span>
                  <span className="text-[#62c073]">{`\\n`}</span>
                  {"\n"}
                  {"       "}
                  <span className="text-[#62c073]">User: </span>
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
                  <span className="text-[#62c073]">{"`"}</span>
                  <span className="text-[#a1a1a1]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a1a1a1]">{"}),"}</span>
                </span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Tool execution approval */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Tool execution approval
          </h2>
          <div className="bg-black/40 rounded-lg p-8 border border-white/20 flex-1">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#f75f8f]">export</span>{" "}
                <span className="text-[#f75f8f]">const</span>{" "}
                <span className="text-white">paymentTool</span>{" "}
                <span className="text-[#f75f8f]">=</span>{" "}
                <span className="text-[#c472fb]">tool</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">description</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-[#62c073]">"Process payment"</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">inputSchema</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">amount</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">number</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">recipient</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="bg-[#52a8ff]/40 px-1 rounded">
                  <span className="text-[#c472fb]">needsApproval</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-[#f75f8f]">async</span>{" "}
                  <span className="text-[#a1a1a1]">(</span>
                  <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                  <span className="text-white">amount</span>{" "}
                  <span className="text-[#a1a1a1]">{"}"}</span>
                  <span className="text-[#a1a1a1]">) </span>
                  <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                  <span className="text-white">amount</span>{" "}
                  <span className="text-[#f75f8f]">{">"}</span>{" "}
                  <span className="text-[#52a8ff]">1000</span>
                </span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c472fb]">execute</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-[#f75f8f]">async</span>{" "}
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                <span className="text-white">amount</span>
                <span className="text-[#a1a1a1]">,</span>{" "}
                <span className="text-white">recipient</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">) </span>
                <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-[#f75f8f]">return</span>{" "}
                <span className="text-[#f75f8f]">await</span>{" "}
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
  );
}
