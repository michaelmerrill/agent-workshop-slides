'use client';

import { ExternalLink, Github, Globe } from 'lucide-react';

import { Background } from '@/components/background';

const resources = [
  {
    icon: Globe,
    title: 'skills.sh',
    description:
      'The community registry. Browse, search, and install skills others have built. This is where individual knowledge becomes a community asset.',
    href: 'https://skills.sh',
    linkLabel: 'skills.sh',
    color: '#62c073',
  },
  {
    icon: Github,
    title: 'vercel-labs/skills',
    description:
      'Official skills from Vercel Labs. Production-ready examples covering common workflows, integrations, and best practices.',
    href: 'https://github.com/vercel-labs/skills',
    linkLabel: 'github.com/vercel-labs/skills',
    color: '#52a8ff',
  },
  {
    icon: Github,
    title: 'anthropics/skills',
    description:
      'Skills from Anthropic. Reference implementations and patterns for building with Claude.',
    href: 'https://github.com/anthropics/skills',
    linkLabel: 'github.com/anthropics/skills',
    color: '#c472fb',
  },
];

export default function SkillDiscoverSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            Discover Skills
          </h1>
        </div>

        <div className="flex flex-1 flex-col p-8">
          <p className="mb-8 max-w-3xl text-lg text-[#a0a0a0] leading-relaxed">
            The registry model turns individual knowledge into a community
            asset. Browse skills others have built, install with one command,
            and start using them instantly.
          </p>

          <div className="grid flex-1 grid-cols-3 gap-6">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="flex flex-col rounded-lg border border-[#242424] bg-black/40"
                >
                  <div className="flex flex-1 flex-col px-6 py-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon
                        className="h-5 w-5"
                        style={{ color: r.color }}
                      />
                      <h3 className="font-semibold text-2xl text-white">
                        {r.title}
                      </h3>
                    </div>
                    <p className="flex-1 text-base text-[#a0a0a0] leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                  <div className="border-[#242424] border-t px-6 py-4">
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-white"
                      style={{ color: r.color }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {r.linkLabel}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Background>
  );
}
