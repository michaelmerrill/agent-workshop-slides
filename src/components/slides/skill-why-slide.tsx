'use client';

import { Background } from '@/components/background';

const patterns = [
  {
    title: 'Enforce Standards',
    description:
      'Encode your engineering standards so the agent enforces them automatically on every review.',
    color: '#62c073',
  },
  {
    title: 'Automate Pipelines',
    description:
      'Wrap multi-step operations into a single repeatable command that returns structured output.',
    color: '#52a8ff',
  },
  {
    title: 'Protect Systems',
    description:
      'Validate against your design tokens before allowing changes. Suggest the nearest approved option on failure.',
    color: '#c472fb',
  },
];

export default function SkillWhySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Why build a Skill?</h1>
        </div>

        <div className="flex flex-1 flex-col">
          {/* top: value props */}
          <div className="grid grid-cols-3 border-[#242424] border-b">
            <div className="border-[#242424] border-r px-8 py-6">
              <span className="font-mono text-sm text-[#666]">Before</span>
              <p className="mt-2 text-lg text-[#a0a0a0]">
                Pasting prompts every session
              </p>
            </div>
            <div className="border-[#242424] border-r px-8 py-6">
              <span className="font-mono text-sm text-[#666]">Before</span>
              <p className="mt-2 text-lg text-[#a0a0a0]">
                Knowledge dies when the tab closes
              </p>
            </div>
            <div className="px-8 py-6">
              <span className="font-mono text-sm text-[#666]">Before</span>
              <p className="mt-2 text-lg text-[#a0a0a0]">
                Only one developer has the context
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-[#242424] border-b">
            <div className="border-[#242424] border-r px-8 py-6">
              <span className="font-mono text-sm text-white">After</span>
              <p className="mt-2 text-lg text-white">
                Install capabilities like packages
              </p>
            </div>
            <div className="border-[#242424] border-r px-8 py-6">
              <span className="font-mono text-sm text-white">After</span>
              <p className="mt-2 text-lg text-white">
                Write once, deploy forever
              </p>
            </div>
            <div className="px-8 py-6">
              <span className="font-mono text-sm text-white">After</span>
              <p className="mt-2 text-lg text-white">
                Share via Git, whole team benefits
              </p>
            </div>
          </div>

          {/* bottom: three patterns */}
          <div className="grid flex-1 grid-cols-3">
            {patterns.map((pattern) => (
              <div
                key={pattern.title}
                className="flex flex-col border-[#242424] border-r px-8 py-8 last:border-r-0"
              >
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ backgroundColor: pattern.color }}
                />
                <h3 className="mb-3 font-semibold text-xl text-white">
                  {pattern.title}
                </h3>
                <p className="text-base text-[#a0a0a0] leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
}
