'use client';

import { Background } from '@/components/background';

const demos = [
  {
    number: '01',
    name: 'Transaction Agent',
    path: '/demo/transaction',
    color: '#62c073',
    description: 'AI-powered anomaly detection on financial transactions',
  },
  {
    number: '02',
    name: 'Support Agent',
    path: '/demo/support',
    color: '#52a8ff',
    description: 'AI-powered support ticket resolution',
  },
  {
    number: '03',
    name: 'Data Agent',
    path: '/demo/data',
    color: '#c472fb',
    description: 'Analytics data querying via Vercel Sandbox',
  },
];

export default function DemoSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Demo</h1>
        </div>

        {/* three-column card layout */}
        <div className="grid flex-1 grid-cols-3">
          {demos.map((demo, i) => (
            <a
              key={demo.number}
              href={demo.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col px-8 py-8 transition-colors hover:bg-white/5${
                i < demos.length - 1 ? ' border-[#242424] border-r' : ''
              }`}
            >
              {/* colored accent line */}
              <div
                className="mb-6 h-1 w-12 rounded-full"
                style={{ backgroundColor: demo.color }}
              />

              {/* numbered badge */}
              <span className="mb-3 font-mono text-sm text-[#888]">
                {demo.number}
              </span>

              {/* agent name */}
              <h2 className="font-bold text-xl text-white">{demo.name}</h2>

              {/* description */}
              <p className="mt-2 text-base text-[#a0a0a0]">
                {demo.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Background>
  );
}
