"use client";

import { Background } from "@/components/background";

export default function StructuredOutputSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Structured output</h1>
        </div>

        <div className="flex-1 p-8">
          <div className="grid h-full grid-cols-2 gap-8">
            {/* left column - explanatory text */}
            <div className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-8">
              <h3 className="mb-6 font-semibold text-xl text-white">
                Why Structured Output?
              </h3>
              <div className="space-y-4 text-lg text-[#a0a0a0]">
                <p>Guarantees the shape of LLM responses using a Zod schema</p>
                <p>Type-safe results — no parsing or validation needed</p>
                <p>Combine tools and structured output in a single call</p>
                <p>The model calls tools, then formats the final answer to match your schema</p>
              </div>
            </div>

            {/* right column - code block */}
            <div className="rounded-lg border border-[#242424] bg-black/40 p-8">
              <pre className="overflow-auto text-base leading-relaxed">
                <code>
                  <span className="text-[#9ca3af]">// tools + structured output in one call</span>
                  {"\n"}
                  <span className="text-[#f75f8f]">const</span>{" "}
                  <span className="text-white">result</span>{" "}
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
                  <span className="text-white">output</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-[#52a8ff]">Output</span>
                  <span className="text-[#d4d4d4]">.</span>
                  <span className="text-[#c472fb]">object</span>
                  <span className="text-[#d4d4d4]">(</span>
                  <span className="text-[#d4d4d4]">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">schema</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-white">z</span>
                  <span className="text-[#d4d4d4]">.</span>
                  <span className="text-[#c472fb]">object</span>
                  <span className="text-[#d4d4d4]">(</span>
                  <span className="text-[#d4d4d4]">{"{"}</span>
                  {"\n"}
                  {"      "}
                  <span className="text-white">summary</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-white">z</span>
                  <span className="text-[#d4d4d4]">.</span>
                  <span className="text-[#c472fb]">string</span>
                  <span className="text-[#d4d4d4]">(),</span>
                  {"\n"}
                  {"      "}
                  <span className="text-white">temperature</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-white">z</span>
                  <span className="text-[#d4d4d4]">.</span>
                  <span className="text-[#c472fb]">number</span>
                  <span className="text-[#d4d4d4]">(),</span>
                  {"\n"}
                  {"      "}
                  <span className="text-white">recommendation</span>
                  <span className="text-[#f75f8f]">:</span>{" "}
                  <span className="text-white">z</span>
                  <span className="text-[#d4d4d4]">.</span>
                  <span className="text-[#c472fb]">string</span>
                  <span className="text-[#d4d4d4]">(),</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#d4d4d4]">{"}),"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#d4d4d4]">{"}),"}</span>
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
                    // result.output contains typed data
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
