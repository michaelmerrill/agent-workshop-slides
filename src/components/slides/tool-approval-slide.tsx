'use client';

import { Background } from '@/components/background';

export default function ToolApprovalSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">ToolLoopAgent options</h1>
        </div>

        <div className="flex-1 p-8">
          <div className="grid h-full grid-cols-2 gap-6">
            {/* Dynamic call options */}
            <div className="flex flex-col">
              <h3 className="mb-4 font-semibold text-xl text-white">
                Dynamic call options
              </h3>
              <div className="flex-1 rounded-lg border border-[#242424] bg-black/40 p-8">
                <pre className="overflow-auto text-base leading-relaxed">
                  <code>
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">agent</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#f75f8f]">new</span>{" "}
                    <span className="text-[#52a8ff]">ToolLoopAgent</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">model</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">
                      "anthropic/claude-sonnet-4.5"
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">callOptionsSchema</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">userId</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#d4d4d4]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">accountType</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">enum</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">[</span>
                    <span className="text-[#62c073]">"free"</span>
                    <span className="text-[#d4d4d4]">,</span>{" "}
                    <span className="text-[#62c073]">"pro"</span>
                    <span className="text-[#d4d4d4]">]</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#d4d4d4]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="rounded bg-[#333] px-1">
                      <span className="text-[#c472fb]">prepareCall</span>
                      <span className="text-[#f75f8f]">:</span>{" "}
                      <span className="text-[#d4d4d4]">(</span>
                      <span className="text-[#d4d4d4]">{"{"}</span>{" "}
                      <span className="text-white">options</span>
                      <span className="text-[#d4d4d4]">,</span>{" "}
                      <span className="text-[#f75f8f]">...</span>
                      <span className="text-white">settings</span>{" "}
                      <span className="text-[#d4d4d4]">{"}"}</span>
                      <span className="text-[#d4d4d4]">) </span>
                      <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                      <span className="text-[#d4d4d4]">(</span>
                      <span className="text-[#d4d4d4]">{"{"}</span>
                      {"\n"}
                      {"    "}
                      <span className="text-[#f75f8f]">...</span>
                      <span className="text-white">settings</span>
                      <span className="text-[#d4d4d4]">,</span>
                      {"\n"}
                      {"    "}
                      <span className="text-white">instructions</span>
                      <span className="text-[#f75f8f]">:</span>{" "}
                      <span className="text-white">settings</span>
                      <span className="text-[#d4d4d4]">.</span>
                      <span className="text-white">instructions</span>{" "}
                      <span className="text-[#f75f8f]">+</span>{" "}
                      <span className="text-[#62c073]">{"`"}</span>
                      <span className="text-[#62c073]">{`\\n`}</span>
                      {"\n"}
                      {"       "}
                      <span className="text-[#62c073]">User: </span>
                      <span className="text-[#f75f8f]">${"${"}</span>
                      <span className="text-white">options</span>
                      <span className="text-[#d4d4d4]">.</span>
                      <span className="text-white">userId</span>
                      <span className="text-[#f75f8f]">{"}"}</span>
                      {"\n"}
                      {"       "}
                      <span className="text-[#62c073]">Account: </span>
                      <span className="text-[#f75f8f]">${"${"}</span>
                      <span className="text-white">options</span>
                      <span className="text-[#d4d4d4]">.</span>
                      <span className="text-white">accountType</span>
                      <span className="text-[#62c073]">{"`"}</span>
                      <span className="text-[#d4d4d4]">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"}),"}</span>
                    </span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Tool execution approval */}
            <div className="flex flex-col">
              <h3 className="mb-4 font-semibold text-xl text-white">
                Tool execution approval
              </h3>
              <div className="flex-1 rounded-lg border border-[#242424] bg-black/40 p-8">
                <pre className="overflow-auto text-base leading-relaxed">
                  <code>
                    <span className="text-[#f75f8f]">export</span>{" "}
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">paymentTool</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#c472fb]">tool</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">description</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">"Process payment"</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">inputSchema</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">amount</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">number</span>
                    <span className="text-[#d4d4d4]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">recipient</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#d4d4d4]">(),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#d4d4d4]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="rounded bg-[#333] px-1">
                      <span className="text-[#c472fb]">needsApproval</span>
                      <span className="text-[#f75f8f]">:</span>{" "}
                      <span className="text-[#f75f8f]">async</span>{" "}
                      <span className="text-[#d4d4d4]">(</span>
                      <span className="text-[#d4d4d4]">{"{"}</span>{" "}
                      <span className="text-white">amount</span>{" "}
                      <span className="text-[#d4d4d4]">{"}"}</span>
                      <span className="text-[#d4d4d4]">) </span>
                      <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                      <span className="text-white">amount</span>{" "}
                      <span className="text-[#f75f8f]">{">"}</span>{" "}
                      <span className="text-[#52a8ff]">1000</span>
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#c472fb]">execute</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#f75f8f]">async</span>{" "}
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>{" "}
                    <span className="text-white">amount</span>
                    <span className="text-[#d4d4d4]">,</span>{" "}
                    <span className="text-white">recipient</span>{" "}
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">) </span>
                    <span className="text-[#f75f8f]">{"=>"}</span>{" "}
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#f75f8f]">return</span>{" "}
                    <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">processPayment</span>
                    <span className="text-[#d4d4d4]">(</span>
                    {"\n"}
                    {"      "}
                    <span className="text-white">amount</span>
                    <span className="text-[#d4d4d4]">,</span> {"\n"}
                    {"      "}
                    <span className="text-white">recipient</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#d4d4d4]">);</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
