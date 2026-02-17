'use client';

import { Background } from '@/components/background';

function LayoutThumbnail({
  variant,
  highlighted = false,
}: {
  variant: 'sidebar-hero' | 'three-col' | 'hero-grid' | 'header-content';
  highlighted?: boolean;
}) {
  const baseClasses =
    'rounded-lg border border-[#333] bg-[#0a0a0a] p-3 flex flex-col gap-2 h-full';

  if (highlighted) {
    return (
      <div className="relative h-full overflow-hidden rounded-lg">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #4ade80 0%, #22d3ee 30%, #f472b6 70%, #fb923c 100%)',
          }}
        />
        <div className="relative flex h-full items-center justify-center">
          <svg
            viewBox="0 0 76 65"
            fill="black"
            className="h-10 w-10"
            role="presentation"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar-hero') {
    return (
      <div className={baseClasses}>
        <div className="flex flex-1 gap-2">
          <div className="w-1/3 rounded border border-[#333]" />
          <div className="w-2/3 rounded border border-[#333]" />
        </div>
        <div className="h-1/3 rounded border border-[#333]" />
      </div>
    );
  }

  if (variant === 'three-col') {
    return (
      <div className={baseClasses}>
        <div className="flex flex-1 gap-2">
          <div className="flex-1 rounded border border-[#333]" />
          <div className="flex-1 rounded border border-[#333]" />
          <div className="flex-1 rounded border border-[#333]" />
        </div>
      </div>
    );
  }

  if (variant === 'hero-grid') {
    return (
      <div className={baseClasses}>
        <div className="h-1/3 rounded border border-[#333]" />
        <div className="flex flex-1 gap-2">
          <div className="flex-1 rounded border border-[#333]" />
          <div className="flex-1 rounded border border-[#333]" />
        </div>
      </div>
    );
  }

  // header-content
  return (
    <div className={baseClasses}>
      <div className="h-1/4 rounded border border-[#333]" />
      <div className="flex-1 rounded border border-[#333]" />
    </div>
  );
}

export default function AgentPerspectivesSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">Perspectives</h1>
        </div>

        {/* content grid */}
        <div className="grid flex-1 grid-cols-2">
          {/* left: perspectives */}
          <div className="flex flex-col border-[#242424] border-r">
            <div className="flex-1 border-[#242424] border-b px-8 py-8">
              <h3 className="mb-6 font-semibold text-2xl text-white">
                User Experiences
              </h3>
              <ul className="space-y-3 text-[#a0a0a0] text-base">
                <li>AI-powered search and recommendations</li>
                <li>Conversational interfaces and copilots</li>
                <li>Personalized content generation</li>
                <li>Smart form completion and validation</li>
              </ul>
            </div>

            <div className="flex-1 px-8 py-8">
              <h3 className="mb-6 font-semibold text-2xl text-white">
                Internal Efficiency
              </h3>
              <ul className="space-y-3 text-[#a0a0a0] text-base">
                <li>Automated code review and documentation</li>
                <li>Workflow automation and task routing</li>
                <li>Data analysis and reporting agents</li>
                <li>Customer support triage and response</li>
              </ul>
            </div>
          </div>

          {/* right: layout grid */}
          <div className="flex flex-col items-center justify-center p-8">
            {/* grid of layouts */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-28 w-28">
                <LayoutThumbnail variant="sidebar-hero" />
              </div>
              <div className="h-28 w-28">
                <LayoutThumbnail variant="three-col" />
              </div>
              <div className="h-28 w-28">
                <LayoutThumbnail variant="hero-grid" highlighted />
              </div>
              <div className="h-28 w-28">
                <LayoutThumbnail variant="header-content" />
              </div>
              <div className="h-28 w-28">
                <LayoutThumbnail variant="hero-grid" />
              </div>
              <div className="h-28 w-28">
                <LayoutThumbnail variant="sidebar-hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
