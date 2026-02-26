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
      'Enforce how new components, services, and tests are scaffolded. Every generated file matches your team\'s conventions automatically.',
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
      'Give the AI knowledge it can\'t infer: which internal libraries to prefer, naming conventions, architecture decisions. A living contributor guide the AI actually reads.',
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

        {/* top section: before / after comparisons */}
        <div className="border-[#242424] border-b">
          {/* before row */}
          <div className="grid grid-cols-4">
            {comparisons.map((item, i) => (
              <div
                key={`before-${i}`}
                className={`px-8 pt-6 pb-4 ${i < 3 ? 'border-[#242424] border-r' : ''}`}
              >
                <span className="font-mono text-xs tracking-wider text-[#666] uppercase">
                  Before
                </span>
                <p className="mt-2 text-base text-[#a0a0a0] leading-relaxed">
                  {item.before}
                </p>
              </div>
            ))}
          </div>

          {/* arrow indicator row */}
          <div className="grid grid-cols-4">
            {comparisons.map((_, i) => (
              <div
                key={`arrow-${i}`}
                className={`flex items-center px-8 py-1 ${i < 3 ? 'border-[#242424] border-r' : ''}`}
              >
                <svg
                  width="16"
                  height="16"
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
            ))}
          </div>

          {/* after row */}
          <div className="grid grid-cols-4">
            {comparisons.map((item, i) => (
              <div
                key={`after-${i}`}
                className={`px-8 pt-2 pb-6 ${i < 3 ? 'border-[#242424] border-r' : ''}`}
              >
                <span className="font-mono text-xs tracking-wider text-white uppercase">
                  After
                </span>
                <p className="mt-2 text-base text-white leading-relaxed">
                  {item.after}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* section label */}
        <div className="border-[#242424] border-b px-8 py-4">
          <span className="font-mono text-sm text-[#666]">
            Common patterns
          </span>
        </div>

        {/* bottom section: three use-case patterns */}
        <div className="grid flex-1 grid-cols-3">
          {patterns.map((pattern, i) => (
            <div
              key={pattern.title}
              className={`flex flex-col px-8 py-6 ${i < 2 ? 'border-[#242424] border-r' : ''}`}
            >
              <div
                className="mb-4 h-1 w-10 rounded-full"
                style={{ backgroundColor: pattern.color }}
              />
              <h3 className="mb-2 font-semibold text-lg text-white">
                {pattern.title}
              </h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Background>
  );
}
