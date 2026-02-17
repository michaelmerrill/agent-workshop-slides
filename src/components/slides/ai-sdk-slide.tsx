'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { Background } from '@/components/background';
import { useNpmDownloads } from '@/hooks/use-npm-downloads';
import { blobUrl } from '@/lib/blob';

const features = [
  'Open Source',
  'Provider Agnostic',
  'Streaming Support',
  'Tool Calling',
  'Structured Output',
  'Multi-modal',
];

export default function AiSdkSlide() {
  const { formatted: downloads } = useNpmDownloads('ai');

  return (
    <Background>
      <div className="grid h-full grid-cols-12">
        {/* left 9 columns - content area */}
        <div className="col-span-9 flex flex-col">
          {/* top row - logo/tagline and features */}
          <div className="grid flex-1 grid-cols-2 border-[#242424] border-b">
            {/* ai sdk branding */}
            <div className="flex flex-col justify-center border-[#242424] border-r px-12">
              <div className="mb-6 flex w-full max-w-[280px] items-center gap-3">
                <span className="font-bold text-6xl text-white">AI</span>
                <span className="rounded-full border-2 border-white px-6 py-2 font-bold text-3xl text-white">
                  SDK
                </span>
              </div>
              <p className="text-xl text-zinc-500">
                Everything you need to build AI-powered applications
              </p>
            </div>

            {/* features */}
            <div className="flex flex-col justify-center px-8 py-8">
              <div className="space-y-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-white"
                  >
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                    <span className="font-mono text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* middle row - downloads and description */}
          <div className="grid grid-cols-2 border-[#242424] border-b">
            {/* stat: downloads */}
            <div className="flex items-center gap-6 border-[#242424] border-r px-8 py-8">
              <h2 className="font-bold text-7xl text-white">{downloads}</h2>
              <p className="max-w-[120px] font-mono text-sm text-zinc-500 leading-tight">
                npm downloads per week
              </p>
            </div>

            {/* description */}
            <div className="flex items-center px-12 py-8">
              <p className="text-base text-zinc-400">
                <span className="font-bold text-white">
                  The best way to build AI apps right now.
                </span>{' '}
                Go from idea to working AI app in minutes with unified APIs
                across all major providers.
              </p>
            </div>
          </div>

          {/* bottom row - stats and quote */}
          <div className="grid grid-cols-12">
            {/* stat #1 */}
            <div className="col-span-3 flex flex-col justify-center border-[#242424] border-r px-8 py-8">
              <h2 className="mb-2 font-bold text-6xl text-white">8+</h2>
              <p className="font-mono text-sm text-zinc-500 leading-tight">
                LLM providers supported
              </p>
            </div>

            {/* stat #2 */}
            <div className="col-span-3 flex flex-col justify-center border-[#242424] border-r px-8 py-8">
              <h2 className="mb-2 font-bold text-6xl text-white">50+</h2>
              <p className="font-mono text-sm text-zinc-500 leading-tight">
                Models available
              </p>
            </div>

            {/* quote */}
            <div className="col-span-6 flex flex-col justify-center px-12 py-8">
              <p className="mb-4 text-sm text-zinc-400 italic">
                &quot;The @aisdk is probably the best way to build an AI app
                right now. You can go from idea to working AI app in 15 mins. It
                has made working with LLMs 10x more enjoyable.&quot;
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">
                  - Developer Community
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* right: provider logos - full height */}
        <div className="col-span-3 flex flex-col border-[#242424] border-t border-r border-l">
          <div className="flex flex-1 items-center justify-center border-[#242424] border-b bg-[#0a0a0a] p-8">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-[#333]">
              {/* browser header with dots */}
              <div className="flex items-center gap-2 border-[#333] border-b bg-black px-4 py-3">
                <div className="h-3 w-3 rounded-full border border-[#444] bg-transparent" />
                <div className="h-3 w-3 rounded-full border border-[#444] bg-transparent" />
                <div className="h-3 w-3 rounded-full border border-[#444] bg-transparent" />
              </div>
              {/* browser content */}
              <div className="relative flex-1 bg-black">
                <Image
                  src={blobUrl('/images/customer-sidebar.png')}
                  alt="Companies using AI SDK"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </div>
          </div>
          <div className="border-[#242424] border-b bg-[#0a0a0a]" />
          <div className="bg-[#0a0a0a]" />
        </div>
      </div>
    </Background>
  );
}
