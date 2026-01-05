import Image from "next/image";

export function Slide01Title() {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* title and subtitle */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h1 className="text-7xl font-bold text-white leading-tight max-w-5xl">
          Build an Agent with Vercel
        </h1>
        <p className="text-2xl max-w-3xl leading-relaxed text-[#a0a0a0]">
          Learn how to go from idea to deployed agent in under an hour using AI
          SDK, Next.js, and Vercel.
        </p>
      </div>

      {/* author section with profile pic */}
      <a href="https://x.sather.ws" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 mt-8">
        <Image
          src="/headshot.png"
          alt="Will Sather"
          width={56}
          height={56}
          className="rounded-full object-cover aspect-square"
        />
        <div className="flex items-baseline gap-3 border-b border-transparent group-hover:border-dotted group-hover:border-zinc-500 pb-1">
          <span className="text-2xl font-medium text-white">Will Sather</span>
          <span className="text-base font-mono text-[#a0a0a0]">
            Field Engineer
          </span>
        </div>
      </a>
    </div>
  );
}
