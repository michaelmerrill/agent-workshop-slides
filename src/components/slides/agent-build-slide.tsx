'use client';

import { useState } from 'react';
import { Background } from '@/components/background';

const terminalSnippet = `mkdir workshop-demo
cd workshop-demo
claude`;

const promptSnippet = `Make a homepage for a fictional ecommerce brand that sells bed and bath products. Use nextjs.`;

const followUpSteps = [
  {
    type: 'terminal' as const,
    label: 'Install frontend-design skill',
    text: 'npx skills add https://github.com/anthropics/skills --skill frontend-design',
  },
  {
    type: 'prompt' as const,
    label: 'Use the skill',
    text: '/frontend-design how can we improve the design of this site?',
  },
  {
    type: 'terminal' as const,
    label: 'Install AI SDK & AI Elements skills',
    text: 'npx skills add https://github.com/vercel/ai --skill ai-sdk\nnpx skills add https://github.com/vercel/ai-elements --skill ai-elements',
  },
  {
    type: 'prompt' as const,
    label: 'Add AI chat widget',
    text: 'Add a floating AI shopping assistant chat widget to the home page using Vercel AI SDK, AI Gateway, and ai-elements UI components. Add AI_GATEWAY_API_KEY to .env.local. Use "anthropic/claude-sonnet-4-6" for the model.',
  },
];

export default function AgentBuildSlide() {
  const [copied, setCopied] = useState<string | null>(null);

  function handleCopy(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">
            Hands on: build with your agent
          </h1>
        </div>

        <div className="flex flex-1 gap-8 p-8">
          {/* left column: Get Started */}
          <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 px-10 py-8">
            <div
              className="mb-6 h-1.5 w-16 rounded-full"
              style={{ backgroundColor: '#62c073' }}
            />
            <h2 className="font-bold text-2xl text-white">Get Started</h2>
            <p className="mt-2 text-lg text-[#a0a0a0]">
              Create a project and launch your agent
            </p>

            <div className="mt-auto space-y-4">
              {/* terminal commands */}
              <div className="flex flex-col rounded-lg border border-[#242424] bg-black/40 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs text-[#888]">Terminal</p>
                  <button
                    type="button"
                    onClick={() => handleCopy(terminalSnippet, 'terminal')}
                    className="rounded border border-[#333] bg-[#0a0a0a] px-2.5 py-1 font-mono text-xs text-[#a0a0a0] transition-colors hover:border-white/20 hover:text-white"
                  >
                    {copied === 'terminal' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-[#62c073]">{'mkdir'}</span>
                    <span className="text-white">{' workshop-demo'}</span>
                    {'\n'}
                    <span className="text-[#62c073]">{'cd'}</span>
                    <span className="text-white">{' workshop-demo'}</span>
                    {'\n'}
                    <span className="text-[#62c073]">{'claude'}</span>
                  </code>
                </pre>
              </div>

              {/* prompt */}
              <div className="flex flex-col rounded-lg border border-[#242424] bg-black/40 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs text-[#888]">
                    Your first prompt
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(promptSnippet, 'prompt')}
                    className="rounded border border-[#333] bg-[#0a0a0a] px-2.5 py-1 font-mono text-xs text-[#a0a0a0] transition-colors hover:border-white/20 hover:text-white"
                  >
                    {copied === 'prompt' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-[#c472fb]">
                      {'Make a homepage for a fictional ecommerce brand that sells bed and bath products. Use nextjs.'}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* right column: Keep Going */}
          <div className="flex w-[480px] shrink-0 flex-col">
            <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-1 font-bold text-lg text-white">
                Keep Going
              </h3>
              <p className="mb-5 text-sm text-[#a0a0a0]">
                Install skills &amp; add AI features
              </p>

              <div className="space-y-3">
                {followUpSteps.map((step, i) => {
                  const color =
                    step.type === 'terminal' ? '#62c073' : '#c472fb';
                  const badge =
                    step.type === 'terminal' ? 'Terminal' : 'Prompt';
                  return (
                    <div
                      key={i}
                      className="flex flex-col rounded-lg border border-[#242424] bg-black/40 px-4 py-3"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold"
                            style={{
                              color,
                              backgroundColor: `${color}15`,
                              border: `1px solid ${color}30`,
                            }}
                          >
                            {badge}
                          </span>
                          <span className="text-xs text-[#a0a0a0]">
                            {step.label}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopy(step.text, `followup-${i}`)
                          }
                          className="shrink-0 rounded border border-[#333] bg-[#0a0a0a] px-2 py-0.5 font-mono text-[10px] text-[#a0a0a0] transition-colors hover:border-white/20 hover:text-white"
                        >
                          {copied === `followup-${i}` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <pre
                        className="text-xs leading-relaxed"
                        style={{ color, whiteSpace: 'pre-wrap' }}
                      >
                        {step.text}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
