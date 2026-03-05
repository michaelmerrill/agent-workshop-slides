'use client';

import { Background } from '@/components/background';

export default function AiGatewaySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            Hands On: Get Model Access
          </h1>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
          <p className="max-w-xl text-center text-lg text-[#a0a0a0] leading-relaxed">
            AI Gateway gives you a single API key to access every major model
            provider.
          </p>

          {/* Primary CTA */}
          <a
            href="https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-lg text-black transition-opacity hover:opacity-90"
          >
            Create API Key
          </a>

          {/* Secondary link */}
          <a
            href="https://vercel.com/docs/ai-gateway/authentication-and-byok/byok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888] underline underline-offset-4 transition-colors hover:text-white"
          >
            Bring Your Own Key
          </a>

          {/* Code snippet */}
          <div className="mt-4 w-full max-w-lg rounded-lg border border-[#242424] bg-black/40 p-5">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-[#888]">{'# Your gateway API key'}</span>
                {'\n'}
                <span className="text-[#62c073]">AI_GATEWAY_API_KEY</span>
                <span className="text-white">{'='}</span>
                <span className="text-[#a0a0a0]">{'<your-key>'}</span>
                {'\n\n'}
                <span className="text-[#888]">{'# Base URL for all providers'}</span>
                {'\n'}
                <span className="text-[#62c073]">AI_GATEWAY_BASE_URL</span>
                <span className="text-white">{'='}</span>
                <span className="text-[#a0a0a0]">{'https://ai-gateway.vercel.sh'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </Background>
  );
}
