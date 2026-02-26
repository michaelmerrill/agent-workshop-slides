'use client';

import { Background } from '@/components/background';

export default function SkillsTitleSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col items-center justify-center gap-6 p-8">
        <h1 className="text-center font-bold text-8xl text-white">Skills</h1>
        <p className="max-w-2xl text-center text-2xl text-[#a0a0a0] leading-relaxed">
          Reusable, shareable expertise for AI agents
        </p>
      </div>
    </Background>
  );
}
