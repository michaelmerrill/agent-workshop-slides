'use client';

import { Background } from '@/components/background';

export default function SkillHowBuildSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">How to build a Skill</h1>
        </div>

        <div className="flex-1 p-8">
          <div className="grid h-full grid-cols-2 gap-8">
            {/* left column: after the work */}
            <div className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#62c073]">
                  01
                </span>
                <h3 className="font-semibold text-xl text-white">
                  After the work
                </h3>
              </div>
              <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-8">
                <p className="mb-6 text-lg text-[#a0a0a0] leading-relaxed">
                  Do the task manually with the agent first. Once it works, ask
                  the agent to save the process as a repeatable skill.
                </p>
                <div className="mt-auto rounded-lg border border-[#242424] bg-black/40 p-6">
                  <pre className="text-base leading-relaxed">
                    <code>
                      <span className="text-[#9ca3af]">
                        {'// after completing the task...'}
                      </span>
                      {'\n\n'}
                      <span className="text-[#62c073]">
                        {'"Great. Now save this as a skill'}
                      </span>
                      {'\n'}
                      <span className="text-[#62c073]">
                        {'  so the whole team can use it."'}
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* right column: before the work */}
            <div className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#52a8ff]">
                  02
                </span>
                <h3 className="font-semibold text-xl text-white">
                  Before the work
                </h3>
              </div>
              <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-8">
                <p className="mb-6 text-lg text-[#a0a0a0] leading-relaxed">
                  Design the skill upfront. Plan the ideal process, gather
                  reference files, write good output examples.
                </p>
                <div className="mt-auto space-y-4">
                  {[
                    'Define trigger + goal',
                    'Map step-by-step process',
                    'Add example outputs',
                    'Iterate on edge cases',
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-lg border border-[#242424] bg-black/40 px-6 py-3"
                    >
                      <span className="font-mono text-sm text-[#52a8ff]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
