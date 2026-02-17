'use client';

import { Background } from '@/components/background';

function DiagramBox({
  label,
  variant,
}: {
  label: string;
  variant: 'trigger' | 'llm' | 'tool' | 'output';
}) {
  const styles = {
    trigger: 'border-violet-500/60 bg-[#0a0a0a]',
    llm: 'border-zinc-500 bg-[#0a0a0a]',
    tool: 'border-blue-500/60 bg-[#0a0a0a]',
    output: 'border-green-500/60 bg-[#0a0a0a]',
  };

  const textStyles = {
    trigger: 'text-violet-300',
    llm: 'text-white',
    tool: 'text-blue-300',
    output: 'text-green-300',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg border ${styles[variant]} px-6 py-4`}
    >
      <span className={`font-mono text-base ${textStyles[variant]}`}>
        {label}
      </span>
    </div>
  );
}

export default function AgentDiagramSlide() {
  return (
    <Background>
      <div className="flex h-full items-center justify-center">
        <div className="relative h-[480px] w-[700px]">
          {/* svg connections - behind boxes */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 700 480"
            fill="none"
            role="presentation"
          >
            {/* trigger to llm */}
            <line
              x1="130"
              y1="0"
              x2="130"
              y2="160"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* llm to output (dashed) */}
            <line
              x1="130"
              y1="250"
              x2="130"
              y2="480"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.6"
            />

            {/* llm to tools - curved lines */}
            <path
              d="M 250 200 C 370 200, 420 65, 520 65"
              stroke="#3b82f6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 250 200 L 520 205"
              stroke="#3b82f6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 250 200 C 370 200, 420 345, 520 345"
              stroke="#3b82f6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
          </svg>

          {/* trigger */}
          <div className="absolute top-0 left-[40px] w-[180px]">
            <DiagramBox label="Trigger" variant="trigger" />
          </div>

          {/* llm */}
          <div className="absolute top-[160px] left-[10px] w-[240px]">
            <div className="flex items-center justify-center rounded-lg border border-zinc-500 bg-[#0a0a0a] px-8 py-8">
              <span className="font-mono text-2xl text-white">LLM</span>
            </div>
          </div>

          {/* output */}
          <div className="absolute bottom-0 left-[40px] w-[180px]">
            <DiagramBox label="Output" variant="output" />
          </div>

          {/* tools */}
          <div className="absolute top-[40px] right-0 w-[180px]">
            <DiagramBox label="Tool A" variant="tool" />
          </div>
          <div className="absolute top-[180px] right-0 w-[180px]">
            <DiagramBox label="Tool B" variant="tool" />
          </div>
          <div className="absolute top-[320px] right-0 w-[180px]">
            <DiagramBox label="Tool C" variant="tool" />
          </div>
        </div>
      </div>
    </Background>
  );
}
