'use client';

import { Background } from '@/components/background';

export default function AgendaSlide() {
  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* top section with badge */}
        <div className="flex-1 px-12 py-12">
          <span className="rounded-full bg-white px-8 py-3 font-medium text-2xl text-black">
            Agenda
          </span>
        </div>

        {/* agenda grid - edge to edge */}
        <div className="grid grid-cols-2 border-[#242424] border-t">
          {/* left column */}
          <div>
            {/* item 01 */}
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-medium text-3xl text-[#888]">01</span>
              </div>
              <div className="flex flex-1 items-center px-6">
                <span className="font-semibold text-2xl text-white">
                  What is an Agent
                </span>
              </div>
            </div>

            {/* item 02 */}
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-medium text-3xl text-[#888]">02</span>
              </div>
              <div className="flex flex-1 items-center px-6">
                <span className="font-semibold text-2xl text-white">
                  Why build an Agent
                </span>
              </div>
            </div>

            {/* item 03 */}
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-medium text-3xl text-[#888]">03</span>
              </div>
              <div className="flex flex-1 items-center px-6">
                <span className="font-semibold text-2xl text-white">
                  How to build an Agent
                </span>
              </div>
            </div>

            {/* item 04 */}
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-medium text-3xl text-[#888]">04</span>
              </div>
              <div className="flex flex-1 items-center px-6">
                <span className="font-semibold text-2xl text-white">
                  How to deploy an Agent
                </span>
              </div>
            </div>
          </div>

          {/* right column - empty with grid lines */}
          <div className="border-[#242424] border-l">
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-bold text-3xl text-transparent">00</span>
              </div>
              <div className="flex flex-1 items-center px-6" />
            </div>
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-bold text-3xl text-transparent">00</span>
              </div>
              <div className="flex flex-1 items-center px-6" />
            </div>
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-bold text-3xl text-transparent">00</span>
              </div>
              <div className="flex flex-1 items-center px-6" />
            </div>
            <div className="flex items-stretch border-[#242424] border-b">
              <div className="w-24 shrink-0 border-[#242424] border-r" />
              <div className="flex w-24 items-center justify-center border-[#242424] border-r py-6">
                <span className="font-bold text-3xl text-transparent">00</span>
              </div>
              <div className="flex flex-1 items-center px-6" />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
