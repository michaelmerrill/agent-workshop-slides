'use client';

import { Book, Github, MessageCircle } from 'lucide-react';

import { Background } from '@/components/background';

export default function QASlide() {
  return (
    <Background>
      <div className="flex h-full flex-col p-8">
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-center font-bold text-8xl text-white">Q&A</h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-3">
              <Book className="h-4 w-4 text-white" />
              <h3 className="font-semibold text-xl text-white">Documentation</h3>
            </div>
            <a
              href="https://ai-sdk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#a0a0a0] hover:underline"
            >
              ai-sdk.dev
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-3">
              <Github className="h-4 w-4 text-white" />
              <h3 className="font-semibold text-xl text-white">GitHub</h3>
            </div>
            <a
              href="https://github.com/vercel/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#a0a0a0] hover:underline"
            >
              github.com/vercel/ai
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-white" />
              <h3 className="font-semibold text-xl text-white">Feedback</h3>
            </div>
            <a
              href="https://github.com/vercel/ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#a0a0a0] hover:underline"
            >
              github.com/vercel/ai/issues
            </a>
          </div>
        </div>
      </div>
    </Background>
  );
}
