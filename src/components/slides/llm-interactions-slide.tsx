"use client";

import { Background } from "@/components/background";

export default function LLMInteractionsSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Structured Output</h1>
        </div>

        <div className="flex-1 p-8">
          <div className="grid h-full grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h3 className="mb-4 font-semibold text-xl text-white">
                Individual LLM Interactions
              </h3>
              <div className="flex-1 rounded-lg border border-[#242424] bg-black/40 p-8">
                <pre className="overflow-auto text-base leading-relaxed">
                  <code>
                    <span className="text-[#9ca3af]">// step 1: call tool</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">toolResult</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">generateText</span>
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
                    <span className="text-white">tools</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#d4d4d4]">{"{"}</span>{" "}
                    <span className="text-white">weather</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">weatherTool</span>{" "}
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">'Get weather for SF'</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#9ca3af]">
                      // step 2: generate structured output
                    </span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">structured</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">generateObject</span>
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
                    <span className="text-white">schema</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">summary</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#d4d4d4]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">temperature</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-white">z</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">number</span>
                    <span className="text-[#d4d4d4]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">recommendation</span>
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
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">`Summarize: </span>
                    <span className="text-[#c472fb]">$</span>
                    <span className="text-[#d4d4d4]">{"{"}</span>
                    <span className="text-white">toolResult</span>
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#62c073]">`</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </Background>
  );
}
