import Image from "next/image"

export function SlideAgentDiagram() {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/agent.png"
        alt="Agent diagram"
        width={1200}
        height={800}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  )
}
