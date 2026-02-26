'use client';

import { Background } from '@/components/background';

const comparisons = [
  {
    before: 'AI forgets your standards every session',
    after: 'Encode your best practices permanently',
  },
  {
    before: 'Knowledge dies when the tab closes',
    after: 'Write once, deploy forever',
  },
  {
    before: 'Only one developer has the context',
    after: 'Share via Git, whole team benefits',
  },
  {
    before: 'AI produces inconsistent output quality',
    after: 'Every run meets the same high bar',
  },
];

const patterns = [
  {
    title: 'Code Generation Templates',
    description:
      "Enforce how new components, services, and tests are scaffolded. Every generated file matches your team's conventions automatically.",
    color: '#62c073',
  },
  {
    title: 'Refactoring & Transformation',
    description:
      'Encode migration rules — class components to hooks, API upgrades, new error handling patterns. The skill captures what "done right" looks like.',
    color: '#52a8ff',
  },
  {
    title: 'Project-Specific Context',
    description:
      "Give the AI knowledge it can't infer: which internal libraries to prefer, naming conventions, architecture decisions. A living contributor guide the AI actually reads.",
    color: '#c472fb',
  },
];

export default function SkillWhySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            Why build a Skill?
          </h1>
        </div>

        {/* main content area - uses flex-1 to fill remaining space */}
        <div className="flex flex-1 flex-col">
          {/* top section: before / after comparisons */}
          <div className="flex flex-1 flex-col justify-center border-[#242424] border-b">
            <div className="grid grid-cols-4">
              {comparisons.map((item, i) => (
                <div
                  key={item.before}
                  className={`flex flex-col gap-4 px-6 py-5 ${i < 3 ? 'border-[#242424] border-r' : ''}`}
                >
                  {/* before */}
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-[#666] uppercase">
                      Before
                    </span>
                    <p className="mt-1.5 text-sm text-[#a0a0a0] leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  {/* arrow */}
                  <div className="flex items-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-[#444]"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path
                        d="M8 3v10M4 9l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* after */}
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-white uppercase">
                      After
                    </span>
                    <p className="mt-1.5 text-sm text-white leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom section: common patterns */}
          <div className="flex flex-1 flex-col justify-center">
            {/* section label */}
            <div className="border-[#242424] border-b px-6 py-3">
              <span className="font-mono text-xs text-[#666]">
                Common patterns
              </span>
            </div>

            {/* three use-case pattern cards */}
            <div className="grid flex-1 grid-cols-3">
              {patterns.map((pattern, i) => (
                <div
                  key={pattern.title}
                  className={`flex flex-col justify-center px-6 py-5 ${i < 2 ? 'border-[#242424] border-r' : ''}`}
                >
                  <div
                    className="mb-3 h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: pattern.color }}
                  />
                  <h3 className="mb-1.5 font-semibold text-base text-white">
                    {pattern.title}
                  </h3>
                  <p className="text-[13px] text-[#a0a0a0] leading-relaxed">
                    {pattern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
