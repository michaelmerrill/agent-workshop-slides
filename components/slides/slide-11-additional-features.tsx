export function Slide11AdditionalFeatures() {
  return (
    <div className="flex flex-col justify-start h-full">
      <h1 className="text-5xl font-bold text-white mb-16">Additional Features</h1>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-white/5 rounded-lg p-10 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6">Reranking Support</h3>
          <div className="space-y-4 text-xl text-gray-300">
            <p>• Improve search relevance (great for RAG)</p>
            <p>• Specialized reranking models</p>
            <p>• Better than embedding similarity</p>
            <p>• Providers: Cohere, Amazon Bedrock, Together.ai</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-10 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6">Image Editing Support</h3>
          <div className="space-y-4 text-xl text-gray-300">
            <p>• Image-to-image transformations</p>
            <p>• Multi-modal editing</p>
            <p>• Text-prompted modifications</p>
            <p>• Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
