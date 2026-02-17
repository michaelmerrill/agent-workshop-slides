'use client';

import { Background } from '@/components/background';

export default function AgentDefinitionSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col justify-center px-16">
        <span className="mb-6 block font-serif text-8xl text-zinc-600">
          &ldquo;
        </span>
        <p className="max-w-4xl text-3xl text-white leading-relaxed">
          Agents are large language models (LLMs) that use tools in a loop to
          accomplish tasks.
        </p>
      </div>
    </Background>
  );
}
