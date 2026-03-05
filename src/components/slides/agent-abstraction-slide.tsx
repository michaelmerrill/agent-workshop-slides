'use client';

import { Background } from '@/components/background';

export default function AgentAbstractionSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Agent abstraction</h1>
        </div>

        <div className="flex-1 p-8">
          <div className="grid h-full grid-cols-2 gap-8">
            {/* left column - card */}
            <div className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 font-semibold text-xl text-white">
                Flexible Interface
              </h3>
              <div className="space-y-3 text-lg text-[#a0a0a0]">
                <p>Agent is an interface, not a class</p>
                <p>Build custom implementations</p>
                <p>Full control over execution flow</p>
              </div>
            </div>

            {/* right column - code block */}
            <div className="rounded-lg border border-[#242424] bg-black/40 p-8">
                <pre className="overflow-auto text-base leading-relaxed">
                  <code>
                    <span className="text-[#9ca3af]">// define the agent</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">export</span>{" "}
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">weatherAgent</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#f75f8f]">new</span>{" "}
                    <span className="text-[#52a8ff]">ToolLoopAgent</span>
                    <span className="text-[#d4d4d4]">({"{"}</span>
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
                    <span className="text-white">instructions</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">
                      'You are a helpful assistant.'
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">tools</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#d4d4d4]">{"{"}</span>{" "}
                    <span className="text-white">weather</span>
                    <span className="text-[#d4d4d4]">,</span>{" "}
                    <span className="text-white">calendar</span>{" "}
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#9ca3af]">// use the agent</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">result</span>{" "}
                    <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-white">weatherAgent</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#c472fb]">generate</span>
                    <span className="text-[#d4d4d4]">({"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">
                      'What is the weather?'
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                    {"\n"}
                    <span className="text-[#d4d4d4]">{"});"}</span>
                  </code>
                </pre>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
