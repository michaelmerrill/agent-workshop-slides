'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';

import { Background } from '@/components/background';
import { blobUrl } from '@/lib/blob';

export default function AiCloudPrimitivesSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <Sparkles size={24} className="text-white" />
          <h1 className="font-bold text-3xl text-white">
            AI Cloud primitives
          </h1>
        </div>

        {/* main 4-column grid */}
        <div className="grid flex-1 grid-cols-4">
          {/* column 1: vercel sandbox */}
          <div className="flex flex-col border-[#242424] border-r">
            {/* sandbox section */}
            <div className="flex flex-1 flex-col">
              <div className="px-6 pt-6">
                <h2 className="font-bold text-white text-xl">
                  Vercel Sandbox
                </h2>
                <p className="mt-2 text-[#a0a0a0] text-base">
                  Run untrusted code.
                  <br />
                  Built for agentic compute
                </p>
              </div>

              {/* code block */}
              <div className="flex flex-1 items-end justify-end overflow-hidden">
                <Image
                  src={blobUrl('/images/sandbox.png')}
                  alt="Sandbox code example"
                  width={800}
                  height={400}
                  className="h-auto w-[120%] translate-x-12 translate-y-4 object-contain object-top-left"
                />
              </div>
            </div>

            {/* active cpu pricing section */}
            <div className="border-[#242424] border-t px-6 py-6">
              <h2 className="font-bold text-white text-xl">
                Active CPU pricing
              </h2>
              <p className="mt-2 text-[#a0a0a0] text-base">
                Pay for what
                <br />
                you actually use.
              </p>

              {/* cpu graph */}
              <div className="relative mt-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={blobUrl('/images/fluid-graph.png')}
                  alt="Fluid compute pricing graph"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* column 2: vercel workflows + vercel agent */}
          <div className="flex flex-col border-[#242424] border-r">
            {/* workflows section */}
            <div className="border-[#242424] border-b px-6 py-6">
              <h2 className="font-bold text-white text-xl">
                Vercel Workflows
              </h2>
              <p className="mt-2 text-[#a0a0a0] text-base">
                Make any TypeScript
                <br />
                Function Durable
              </p>
            </div>

            {/* agent section */}
            <div className="flex flex-1 flex-col">
              <div className="px-6 pt-6">
                <h2 className="font-bold text-white text-xl">Vercel Agent</h2>
                <p className="mt-2 text-[#a0a0a0] text-base">
                  Build fast, focused
                  <br />
                  AI agents for production
                </p>
              </div>

              {/* incident image */}
              <div className="flex flex-1 items-center justify-end overflow-hidden">
                <Image
                  src={blobUrl('/images/ai-incident.png')}
                  alt="Incident investigation"
                  width={600}
                  height={400}
                  className="h-[90%] w-auto translate-x-4 object-contain"
                />
              </div>
            </div>
          </div>

          {/* column 3: ai sdk 6.0 */}
          <div className="flex flex-col border-[#242424] border-r">
            <div className="flex flex-1 flex-col">
              <div className="px-6 pt-6">
                <h2 className="font-bold text-white text-xl">AI SDK 6.0</h2>
                <p className="mt-2 text-[#a0a0a0] text-base">
                  Build smarter AI apps
                  <br />
                  with less boilerplate
                </p>
              </div>

              {/* code block */}
              <div className="mt-4 flex flex-1 items-center justify-end overflow-hidden">
                <Image
                  src={blobUrl('/images/ai-sdk-5.png')}
                  alt="AI SDK 6.0 code example"
                  width={600}
                  height={400}
                  className="h-[80%] w-auto translate-x-8 rounded-lg object-cover object-left"
                />
              </div>
            </div>
          </div>

          {/* column 4: ai gateway */}
          <div className="flex flex-col">
            <div className="px-6 py-4">
              <h2 className="font-bold text-white text-xl">AI Gateway</h2>
              <p className="mt-2 text-[#a0a0a0] text-base">
                Tons of AI models.
                <br />
                Zero API keys.
              </p>
            </div>

            {/* gateway image */}
            <div className="flex flex-1 items-center justify-center overflow-hidden">
              <Image
                src={blobUrl('/images/ai-gateway-models.png')}
                alt="AI Gateway models"
                width={400}
                height={300}
                className="h-full w-[99.5%] object-cover"
              />
            </div>

            {/* fluid compute text */}
            <div className="border-[#242424] border-t px-6 py-6">
              <h2 className="font-bold text-white text-xl">
                Higher defaults and
                <br />
                limits for Vercel Functions
                <br />
                running Fluid compute
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
