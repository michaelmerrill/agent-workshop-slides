'use client';

import { Background } from '@/components/background';

export default function SkillDefinitionSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">What is a Skill?</h1>
        </div>

        <div className="flex flex-1">
          {/* left: definition */}
          <div className="flex flex-1 flex-col border-[#242424] border-r">
            <div className="px-8 py-8">
              <p className="mb-8 max-w-xl text-2xl text-white leading-relaxed">
                A skill is a folder that gives agents knowledge and capabilities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 rounded border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#62c073]">
                    SKILL.md
                  </span>
                  <p className="text-lg text-[#a0a0a0]">
                    Natural language instructions the agent reads and follows. Written
                    in plain English, no coding required.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 rounded border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#52a8ff]">
                    scripts/
                  </span>
                  <p className="text-lg text-[#a0a0a0]">
                    The executable layer. Node.js, Python, or Bash scripts that run
                    real logic and return structured output.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 rounded border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#c472fb]">
                    resources/
                  </span>
                  <p className="text-lg text-[#a0a0a0]">
                    Reference files: style guides, example outputs, design tokens, API
                    specs. Ground truth for the agent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right: folder structure visual */}
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="w-full max-w-sm rounded-lg border border-[#242424] bg-black/40 p-8">
              <pre className="text-base leading-loose">
                <code>
                  <span className="text-white">my-skill/</span>
                  {'\n'}
                  <span className="text-[#666]">{'  \u251C\u2500\u2500 '}</span>
                  <span className="text-[#62c073]">SKILL.md</span>
                  {'\n'}
                  <span className="text-[#666]">{'  \u251C\u2500\u2500 '}</span>
                  <span className="text-[#52a8ff]">scripts/</span>
                  {'\n'}
                  <span className="text-[#666]">{'  \u2502   \u251C\u2500\u2500 '}</span>
                  <span className="text-[#a0a0a0]">validate.ts</span>
                  {'\n'}
                  <span className="text-[#666]">{'  \u2502   \u2514\u2500\u2500 '}</span>
                  <span className="text-[#a0a0a0]">deploy.sh</span>
                  {'\n'}
                  <span className="text-[#666]">{'  \u2514\u2500\u2500 '}</span>
                  <span className="text-[#c472fb]">resources/</span>
                  {'\n'}
                  <span className="text-[#666]">{'      \u251C\u2500\u2500 '}</span>
                  <span className="text-[#a0a0a0]">tokens.json</span>
                  {'\n'}
                  <span className="text-[#666]">{'      \u2514\u2500\u2500 '}</span>
                  <span className="text-[#a0a0a0]">examples.md</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
