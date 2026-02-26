'use client';

import { Background } from '@/components/background';

const principles = [
  {
    label: 'Plan first',
    description:
      'Map the ideal step-by-step process before prompting. Identify knowledge sources and reference files.',
  },
  {
    label: 'Define trigger + goal',
    description:
      'Give the skill a clear name, trigger condition, and a single well-scoped objective.',
  },
  {
    label: 'Specify connectors',
    description:
      'Declare the APIs, tools, and data sources the skill will use upfront.',
  },
  {
    label: 'Detail the steps',
    description:
      'Write each step explicitly, including human-in-the-loop checkpoints and context usage.',
  },
  {
    label: 'Add example outputs',
    description:
      'Good examples dramatically improve quality. Provide multiple variations the agent can reference.',
  },
  {
    label: 'Handle edge cases',
    description:
      'Set rules for errors, missing data, and unexpected inputs. Build in progressive self-learning.',
  },
  {
    label: 'Iterate forever',
    description:
      'Skills are never "finished." Treat skill building like software engineering -- ship, learn, improve.',
  },
];

export default function SkillHowBuildSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            How to build a Skill
          </h1>
        </div>

        <div className="flex flex-1 gap-8 p-8">
          {/* left column: principles */}
          <div className="flex flex-1 flex-col">
            <p className="mb-5 text-lg text-[#a0a0a0] leading-relaxed">
              Skill building is an art -- like software engineering for AI
              agents. It requires thinking about UX, context engineering, and
              edge cases.
            </p>

            <div className="space-y-3">
              {principles.map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-start gap-4 rounded-lg border border-[#242424] bg-black/40 px-5 py-3"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-sm text-[#52a8ff]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="font-medium text-sm text-white">
                      {p.label}
                    </span>
                    <span className="ml-2 text-sm text-[#777]">
                      {p.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right column: terminal code block */}
          <div className="flex w-[420px] shrink-0 flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#62c073]">
                Quick start
              </span>
            </div>
            <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-5 text-base text-[#a0a0a0] leading-relaxed">
                Do the task manually with the agent first. Once it works, ask
                the agent to save the process as a repeatable skill.
              </p>
              <div className="mt-auto space-y-4">
                {/* terminal prompt */}
                <div className="rounded-lg border border-[#242424] bg-black/40 p-5">
                  <pre className="text-sm leading-relaxed">
                    <code>
                      <span className="text-[#62c073]">{'>'}</span>
                      <span className="text-white">{' /skill-create'}</span>
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
                {/* footnote */}
                <p className="text-xs text-[#555] leading-relaxed">
                  Use a skill to create a skill. The agent captures each step,
                  bundles reference files, and writes the SKILL.md for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
