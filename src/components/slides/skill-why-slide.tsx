'use client';

import { Background } from '@/components/background';

const benefits = [
  {
    title: 'Task-specific performance',
    description:
      'Specialized capabilities for document creation, data analysis, and domain-specific work that supplements Claude\'s general knowledge.',
    color: '#62c073',
  },
  {
    title: 'Organizational knowledge capture',
    description:
      'Package your company\'s workflows, best practices, and institutional knowledge for Claude to use consistently across your team.',
    color: '#52a8ff',
  },
  {
    title: 'Easy customization',
    description:
      'Write instructions in Markdown — no coding required. Attach executable scripts for more advanced functionality.',
    color: '#c472fb',
  },
  {
    title: 'Centralized management',
    description:
      'Provision skills organization-wide, ensuring consistent workflows across teams without individual setup.',
    color: '#ffffff',
  },
];

export default function SkillWhySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="border-[#242424] border-b px-8 py-5">
          <h1 className="font-bold text-3xl text-white">
            Why build a skill?
          </h1>
        </div>

        {/* benefits list */}
        <div className="flex flex-1 flex-col justify-center px-8">
          <div className="space-y-8 px-6">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <div
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <h3
                    className="mb-1.5 text-xl font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-base text-[#a0a0a0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
}
