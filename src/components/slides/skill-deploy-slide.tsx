'use client';

import { Background } from '@/components/background';

const steps = [
  {
    number: '01',
    label: 'Publish',
    color: '#62c073',
    description:
      'Push your skill folder to a GitHub repo -- public or private. That\'s it. It\'s live.',
    code: (
      <>
        <span className="text-[#9ca3af]">{'# push to GitHub'}</span>
        {'\n'}
        <span className="text-[#c472fb]">git</span>
        <span className="text-white">{' push origin main'}</span>
      </>
    ),
  },
  {
    number: '02',
    label: 'Install',
    color: '#52a8ff',
    description:
      'One command. No build step, no npm publish, no config.',
    code: (
      <>
        <span className="text-[#c472fb]">npx</span>
        <span className="text-white">{' skills add '}</span>
        <span className="text-[#62c073]">{'<org/repo>'}</span>
      </>
    ),
  },
  {
    number: '03',
    label: 'Use',
    color: '#c472fb',
    description:
      'Claude picks it up automatically. Your whole team, org, or the community benefits instantly.',
    code: (
      <>
        <span className="text-[#9ca3af]">{'# that\'s it -- start using it'}</span>
        {'\n'}
        <span className="text-[#62c073]">{'>'}</span>
        <span className="text-white">{' /my-new-skill'}</span>
      </>
    ),
  },
];

export default function SkillDeploySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            How to deploy a Skill
          </h1>
          <span className="ml-auto rounded-full border border-[#333] bg-[#0a0a0a] px-4 py-1 font-mono text-sm text-[#a0a0a0]">
            Ship it like any other open source tool
          </span>
        </div>

        <div className="flex flex-1 flex-col p-8">
          {/* 3-step grid */}
          <div className="grid flex-1 grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col rounded-lg border border-[#242424] bg-black/40"
              >
                <div className="border-[#242424] border-b px-6 py-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="font-mono text-sm"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="font-semibold text-2xl text-white">
                      {step.label}
                    </h3>
                  </div>
                  <p className="text-base text-[#a0a0a0] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex flex-1 items-center px-6 py-5">
                  <div className="w-full rounded-lg border border-[#242424] bg-black/60 p-5">
                    <pre className="text-sm leading-relaxed">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* npm analogy footer */}
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 px-6 py-4">
            <p className="text-center text-base text-[#a0a0a0] leading-relaxed">
              If you&apos;ve ever published an npm package, you already know how
              to deploy a skill.{' '}
              <span className="text-white">
                Skills are to AI what npm packages are to Node
              </span>{' '}
              -- someone solves a problem well, publishes it, and everyone else
              gets that expertise for free.
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
}
