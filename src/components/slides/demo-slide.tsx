'use client';

import { Background } from '@/components/background';

export default function DemoSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-center font-bold text-8xl text-white">Demo</h1>
      </div>
    </Background>
  );
}
