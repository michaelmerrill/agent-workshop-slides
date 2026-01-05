export function Slide03cAgentMaturity() {
  return (
    <div className="flex flex-col h-full -mx-16 -my-16">
      {/* header */}
      <div className="flex items-center gap-4 px-8 py-6 border-b border-[#242424]">
        <span className="text-white text-2xl font-mono -rotate-45">-&gt;</span>
        <h1 className="text-3xl font-bold text-white">Agentic maturity</h1>
      </div>

      {/* chart area */}
      <div className="flex-1 relative px-8">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {/* clip path for area under the line */}
          <defs>
            <clipPath id="underLine">
              <polygon points="0,100 100,10 100,100" />
            </clipPath>
          </defs>

          {/* grid lines clipped to under the diagonal */}
          <g clipPath="url(#underLine)">
            {/* horizontal lines - sparse left, dense right */}
            {[40, 70, 100].map((y) => (
              <line
                key={`h1-${y}`}
                x1="0"
                y1={y}
                x2="33.33"
                y2={y}
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[30, 50, 70, 90].map((y) => (
              <line
                key={`h2-${y}`}
                x1="33.33"
                y1={y}
                x2="66.66"
                y2={y}
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[20, 30, 40, 50, 60, 70, 80, 90].map((y) => (
              <line
                key={`h3-${y}`}
                x1="66.66"
                y1={y}
                x2="100"
                y2={y}
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {/* vertical lines - sparse left, dense right */}
            {[12, 24].map((x) => (
              <line
                key={`v1-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="100"
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[45, 55].map((x) => (
              <line
                key={`v2-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="100"
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[72, 78, 84, 90, 96].map((x) => (
              <line
                key={`v3-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="100"
                stroke="#242424"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>

          {/* ascending line */}
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="10"
            stroke="#A0A0A0"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />

          {/* vertical dashed dividers - stop at diagonal line */}
          <line
            x1="33.33"
            y1="70"
            x2="33.33"
            y2="100"
            stroke="#A0A0A0"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 4"
          />
          <line
            x1="66.66"
            y1="40"
            x2="66.66"
            y2="100"
            stroke="#A0A0A0"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* stage labels row */}
      <div className="relative grid grid-cols-3 bg-[#111] py-6">
        <div className="px-8">
          <span className="font-mono text-white text-base">LLMs that think</span>
        </div>
        <div className="px-8">
          <span className="font-mono text-white text-base">Apps that act</span>
        </div>
        <div className="px-8">
          <span className="font-mono text-white text-base">
            Agents that collaborate
          </span>
        </div>
        {/* arrows aligned with dashed lines */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="flex-1" />
          <div className="flex items-center justify-center w-8">
            <span className="text-[#666] text-xl">-&gt;</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center justify-center w-8">
            <span className="text-[#666] text-xl">-&gt;</span>
          </div>
          <div className="flex-1" />
        </div>
      </div>

      {/* bottom descriptions */}
      <div className="border-t border-[#242424]">
        {/* titles row */}
        <div className="grid grid-cols-3 border-b border-[#242424]">
          <div className="px-8 py-6 border-r border-[#242424]">
            <h2 className="text-2xl font-bold text-white">Assistants</h2>
          </div>
          <div className="px-8 py-6 border-r border-[#242424]">
            <h2 className="text-2xl font-bold text-white">Agents</h2>
          </div>
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Autonomous</h2>
          </div>
        </div>
        {/* descriptions row */}
        <div className="grid grid-cols-3 border-b border-[#242424]">
          <div className="px-8 py-6 border-r border-[#242424]">
            <p className="text-base text-[#a0a0a0]">
              Support chatbots,
              <br />
              AI Assistants.
            </p>
          </div>
          <div className="px-8 py-6 border-r border-[#242424]">
            <p className="text-base text-[#a0a0a0]">
              Automated business processes
              <br />
              and customer actions.
            </p>
          </div>
          <div className="px-8 py-6">
            <p className="text-base text-[#a0a0a0]">
              Teams of specialized agents that share
              <br />
              context and operate autonomously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
