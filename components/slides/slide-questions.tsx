import { Book, Github, MessageCircle } from "lucide-react";

export function SlideQuestions() {
  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white text-center">Q&A</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <Book className="w-4 h-4 text-white" />
            <h3 className="text-xl font-semibold text-white">Documentation</h3>
          </div>
          <a href="https://ai-sdk.dev" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] font-mono hover:underline">ai-sdk.dev</a>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <Github className="w-4 h-4 text-white" />
            <h3 className="text-xl font-semibold text-white">GitHub</h3>
          </div>
          <a href="https://github.com/vercel/ai" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] font-mono hover:underline">github.com/vercel/ai</a>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-4 h-4 text-white" />
            <h3 className="text-xl font-semibold text-white">Feedback</h3>
          </div>
          <a href="https://github.com/vercel/ai/issues" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] font-mono hover:underline">github.com/vercel/ai/issues</a>
        </div>
      </div>
    </div>
  )
}
