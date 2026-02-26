'use client';

import { Background } from '@/components/background';

export default function SkillDeploySlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">How to deploy a Skill</h1>
        </div>

        <div className="flex-1">
          <div className="grid h-full grid-cols-3">
            {/* Public */}
            <div className="flex flex-col border-[#242424] border-r">
              <div className="border-[#242424] border-b px-8 py-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#62c073]" />
                  <h3 className="font-semibold text-2xl text-white">Public</h3>
                </div>
                <p className="text-base text-[#a0a0a0]">
                  Push to GitHub. Anyone can install with a single command. No
                  npm publish, no build step.
                </p>
              </div>
              <div className="flex flex-1 items-center px-8 py-6">
                <div className="w-full rounded-lg border border-[#242424] bg-black/40 p-6">
                  <pre className="text-base leading-relaxed">
                    <code>
                      <span className="text-[#9ca3af]">{'# install a public skill'}</span>
                      {'\n'}
                      <span className="text-[#c472fb]">npx</span>
                      <span className="text-white">{' skills add \\'}</span>
                      {'\n'}
                      <span className="text-[#62c073]">{'  github-user/repo'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Private (Submodules) */}
            <div className="flex flex-col border-[#242424] border-r">
              <div className="border-[#242424] border-b px-8 py-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#52a8ff]" />
                  <h3 className="font-semibold text-2xl text-white">
                    Git Submodules
                  </h3>
                </div>
                <p className="text-base text-[#a0a0a0]">
                  Pin skills as submodules in your monorepo. Version-locked and
                  auditable.
                </p>
              </div>
              <div className="flex flex-1 items-center px-8 py-6">
                <div className="w-full rounded-lg border border-[#242424] bg-black/40 p-6">
                  <pre className="text-base leading-relaxed">
                    <code>
                      <span className="text-[#9ca3af]">{'# add as submodule'}</span>
                      {'\n'}
                      <span className="text-[#c472fb]">git</span>
                      <span className="text-white">{' submodule add \\'}</span>
                      {'\n'}
                      <span className="text-[#62c073]">{'  git@github.com:org/'}</span>
                      {'\n'}
                      <span className="text-[#62c073]">{'  skills.git'}</span>
                      {'\n'}
                      <span className="text-white">{'  .skills/shared'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Private Repos */}
            <div className="flex flex-col">
              <div className="border-[#242424] border-b px-8 py-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#c472fb]" />
                  <h3 className="font-semibold text-2xl text-white">
                    Private Repos
                  </h3>
                </div>
                <p className="text-base text-[#a0a0a0]">
                  Use a GitHub private repo to share skills within your
                  organization.
                </p>
              </div>
              <div className="flex flex-1 items-center px-8 py-6">
                <div className="w-full rounded-lg border border-[#242424] bg-black/40 p-6">
                  <pre className="text-base leading-relaxed">
                    <code>
                      <span className="text-[#9ca3af]">{'# install from private'}</span>
                      {'\n'}
                      <span className="text-[#c472fb]">npx</span>
                      <span className="text-white">{' skills add \\'}</span>
                      {'\n'}
                      <span className="text-[#62c073]">{'  org/internal-skills'}</span>
                      {'\n\n'}
                      <span className="text-[#9ca3af]">{'# team members get'}</span>
                      {'\n'}
                      <span className="text-[#9ca3af]">{'# the same expertise'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
