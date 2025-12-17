"use client"

import type { ReactElement } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize, Plus, X, Type } from "lucide-react"

interface Slide {
  id: number
  title: string
  content: ReactElement
}

export function SlidesPresentation() {
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: 1,
      title: "Announcing AI SDK 6 Beta",
      content: (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h1 className="text-7xl font-bold text-white text-center text-balance">Announcing AI SDK 6 Beta</h1>
          <p className="text-3xl text-gray-300 text-center text-balance">Building Production-Ready AI Agents</p>
          <p className="text-2xl text-gray-400 text-center mt-8">Will Sather, Field Engineering @ Vercel</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Today's Agenda",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-6xl font-bold text-white mb-16">Today's Agenda</h1>
          <div className="space-y-8 text-2xl text-gray-300">
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff]">•</span>
              <div>
                <p className="font-semibold text-white">AI SDK 6 Beta Overview</p>
                <ul className="text-xl text-gray-400 mt-2 list-disc list-inside">
                  <li>Agent Abstraction</li>
                  <li>Tool Execution Approval</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff]">•</span>
              <p>Deep Dive Demo</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff]">•</span>
              <div>
                <p className="font-semibold text-white">Additional Features</p>
                <ul className="text-xl text-gray-400 mt-2 list-disc list-inside">
                  <li>Image Editing Support</li>
                  <li>Reranking Support</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff]">•</span>
              <p>Q&A</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "What's New in AI SDK 6 Beta",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-6xl font-bold text-white mb-16">What's New in AI SDK 6 Beta</h1>
          <div className="space-y-6 text-2xl">
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff] text-3xl">→</span>
              <div>
                <p className="font-semibold text-white">Agent Abstraction</p>
                <p className="text-xl text-gray-400 mt-1">Flexible interface for building agents</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff] text-3xl">→</span>
              <div>
                <p className="font-semibold text-white">Tool Execution Approval</p>
                <p className="text-xl text-gray-400 mt-1">Human-in-the-loop workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff] text-3xl">→</span>
              <div>
                <p className="font-semibold text-white">Structured Output (Stable)</p>
                <p className="text-xl text-gray-400 mt-1">Structured outputs with tool-calling</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff] text-3xl">→</span>
              <div>
                <p className="font-semibold text-white">Reranking Support</p>
                <p className="text-xl text-gray-400 mt-1">Improved search relevance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#52a8ff] text-3xl">→</span>
              <div>
                <p className="font-semibold text-white">Image Editing Support</p>
                <p className="text-xl text-gray-400 mt-1">Coming soon</p>
              </div>
            </div>
          </div>
          {/*<p className="text-lg text-gray-500 mt-16">
            Beta available now • Stable release end of 2025
          </p>*/}
        </div>
      ),
    },
    {
      id: 4,
      title: "Agent Abstraction - Three Key Innovations",
      content: (
        <div className="flex flex-col h-full">
          <h1 className="text-5xl font-bold text-white mb-12">Agent Abstraction</h1>
          {/*<p className="text-2xl text-gray-400 mb-12">Three Key Innovations</p>*/}
          <div className="grid grid-cols-3 gap-8 flex-1">
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Interface</h3>
              <div className="space-y-3 text-lg text-gray-300">
                <p>• Agent is an interface, not a class</p>
                <p>• Build custom implementations</p>
                <p>• Full control over execution flow</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">ToolLoopAgent</h3>
              <div className="space-y-3 text-lg text-gray-300">
                <p>• Production-ready out of the box</p>
                <p>• Automatic tool execution loop</p>
                <p>• Sensible defaults (20 step limit)</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Composable Architecture</h3>
              <div className="space-y-3 text-lg text-gray-300">
                <p>• Mix and match patterns</p>
                <p>• Orchestrators and sub-agents</p>
                <p>• Memory layers and custom logic</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Built for Your Opinions",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Build Your Perfect Agent</h1>
          {/*<p className="text-3xl text-gray-300 text-center mb-16 italic">
            "We provide the flexible abstraction. You bring your architectural opinions."
          </p>*/}
          <div className="bg-black/40 rounded-lg p-8 mb-12 border border-white/20">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#a1a1a1]">// Build your own multi-agent orchestrator</span>
                {"\n"}
                <span className="text-[#f75f8f]">class</span> <span className="text-[#52a8ff]">Orchestrator</span>{" "}
                <span className="text-[#f75f8f]">implements</span> <span className="text-[#52a8ff]">Agent</span>{" "}
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#c472fb]">constructor</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#f75f8f]">private</span> <span className="text-white">subAgents</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Record</span>
                <span className="text-[#a1a1a1]">{"<"}</span>
                <span className="text-[#52a8ff]">string</span>
                <span className="text-[#a1a1a1]">, </span>
                <span className="text-[#52a8ff]">Agent</span>
                <span className="text-[#a1a1a1]">
                  {">)"} {"{}"}
                </span>
                {"\n"}
                {"  "}
                {"\n"}
                {"  "}
                <span className="text-[#f75f8f]">async</span> <span className="text-[#c472fb]">generate</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-white">options</span>
                <span className="text-[#a1a1a1]">) {"{"}</span> <span className="text-[#a1a1a1]">/* your logic */</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#f75f8f]">async</span> <span className="text-[#c472fb]">stream</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-white">options</span>
                <span className="text-[#a1a1a1]">) {"{"}</span> <span className="text-[#a1a1a1]">/* your logic */</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"}"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#f75f8f]">const</span> <span className="text-white">orchestrator</span>{" "}
                <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">new</span>{" "}
                <span className="text-[#52a8ff]">Orchestrator</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">subAgents</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                <span className="text-[#a1a1a1]">/* your subagents */</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
              </code>
            </pre>
          </div>
          {/*<div className="grid grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="font-semibold text-white mb-2">ToolLoopAgent</p>
              <p className="text-sm text-gray-400">Default pattern</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="font-semibold text-white mb-2">Custom Orchestrator</p>
              <p className="text-sm text-gray-400">Multi-agent coordination</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="font-semibold text-white mb-2">Memory-Enhanced</p>
              <p className="text-sm text-gray-400">Persistent context</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="font-semibold text-white mb-2">DurableAgent</p>
              <p className="text-sm text-gray-400">Workflow DevKit integration</p>
            </div>
          </div>*/}
        </div>
      ),
    },
    {
      id: 6,
      title: "Seamless UI Integration",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-5xl font-bold text-white mb-6">Seamless UI Integration</h1>
          {/*<p className="text-2xl text-gray-300 mb-12 italic">
            "Any agent that satisfies the interface works with AI SDK UI — fully type-safe."
          </p>*/}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <div className="bg-black/40 rounded-lg p-6 border border-white/20">
                <pre className="text-xs overflow-auto leading-relaxed">
                  <code>
                    <span className="text-[#a1a1a1]">// Your custom agent</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">class</span> <span className="text-[#52a8ff]">MyCustomAgent</span>{" "}
                    <span className="text-[#f75f8f]">implements</span> <span className="text-[#52a8ff]">Agent</span>{" "}
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">// Your implementation</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#a1a1a1]">// Works with createAgentUIStreamResponse</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">export</span> <span className="text-[#f75f8f]">async</span>{" "}
                    <span className="text-[#f75f8f]">function</span> <span className="text-[#c472fb]">POST</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-white">req</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Request</span>
                    <span className="text-[#a1a1a1]">) {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#f75f8f]">return</span>{" "}
                    <span className="text-[#c472fb]">createAgentUIStreamResponse</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">agent</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">myCustomAgent</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">messages</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">{"});"}</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
              <div className="bg-black/40 rounded-lg p-6 border border-white/20">
                <pre className="text-xs overflow-auto leading-relaxed">
                  <code>
                    <span className="text-[#a1a1a1]">// Type-safe on the client</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">import</span> {"{"}{" "}
                    <span className="text-[#52a8ff]">InferAgentUIMessage</span>{" "}
                    {"}"} <span className="text-[#f75f8f]">from</span>{" "}
                    <span className="text-[#62c073]>"ai"</span>
                    {"\n"}\
                    {"\n"}\
                    <span className="text-[#f75f8f]\">type</span> <span className="text-[#52a8ff]">MyAgentMessage</span>{" "}
                    <span className="text-[#f75f8f]">=</span> {"\n"}
                    {"  "}
                    <span className="text-[#52a8ff]">InferAgentUIMessage</span>
                    <span className="text-[#a1a1a1]">{"<"}</span>
                    <span className="text-[#f75f8f]">typeof</span> <span className="text-white">myCustomAgent</span>
                    <span className="text-[#a1a1a1]">{">;"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                    <span className="text-white">messages</span> <span className="text-[#a1a1a1]">{"}"}</span>{" "}
                    <span className="text-[#f75f8f]">=</span> <span className="text-[#c472fb]">useChat</span>
                    <span className="text-[#a1a1a1]">{"<"}</span>
                    <span className="text-[#52a8ff]">MyAgentMessage</span>
                    <span className="text-[#a1a1a1]">{">();"}</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">// Full autocomplete and type safety!</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
          {/*<p className="text-lg text-center text-gray-400 mt-12">
            Build your agent once, use it everywhere with full type safety
          </p>*/}
        </div>
      ),
    },
    {
      id: 7,
      title: \"Configure Agents at Runtime",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-5xl font-bold text-white mb-6">Dynamic Call Options</h1>
          {/*<p className="text-xl text-gray-300 mb-8">
            Type-safe structured inputs that dynamically modify agent behavior
          </p>*/}
          <div className="bg-black/40 rounded-lg p-6 mb-8 border border-white/20">
            <pre className="text-sm overflow-auto leading-relaxed">
              <code>
                <span className="text-[#f75f8f]">const</span> <span className="text-white">supportAgent</span>{" "}
                <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">new</span>{" "}
                <span className="text-[#52a8ff]">ToolLoopAgent</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">model</span>
                <span className="text-[#f75f8f]">:</span>{" "}
                <span className="text-[#62c073]">'anthropic/claude-haiku-4.5'</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">callOptionsSchema</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">object</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">userId</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">string</span>
                <span className="text-[#a1a1a1]">(),</span>
                {"\n"}
                {"    "}
                <span className="text-white">accountType</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">enum</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">[</span>
                <span className="text-[#62c073]">"free"</span>
                <span className="text-[#a1a1a1]">,</span> <span className="text-[#62c073]">"pro"</span>
                <span className="text-[#a1a1a1]">,</span> <span className="text-[#62c073]">"enterprise"</span>
                <span className="text-[#a1a1a1]">]</span>
                <span className="text-[#a1a1a1]">)</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#c472fb]">prepareCall</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">options</span>
                <span className="text-[#a1a1a1]">,</span> <span className="text-[#f75f8f]">...</span>
                <span className="text-white">settings</span> <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">) </span>
                <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-[#f75f8f]">...</span>
                <span className="text-white">settings</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"    "}
                <span className="text-white">instructions</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-white">settings</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-white">instructions</span> <span className="text-[#f75f8f]">+</span> {"\n"}
                {"      "}
                <span className="text-[#62c073]">{`\\nUser: `}</span>
                <span className="text-[#f75f8f]">${"${"}</span>
                <span className="text-white">options</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-white">userId</span>
                <span className="text-[#f75f8f]">{"}"}</span>
                {"\n"}
                {"       "}
                <span className="text-[#62c073]">Account: </span>
                <span className="text-[#f75f8f]">${"${"}</span>
                <span className="text-white">options</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-white">accountType</span>
                <span className="text-[#f75f8f]">{"}`"}</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#a1a1a1]">{"}),"}</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
                {"\n"}
                {"\n"}
                <span className="text-[#f75f8f]">await</span> <span className="text-white">supportAgent</span>
                <span className="text-[#a1a1a1]">.</span>
                <span className="text-[#c472fb]">generate</span>
                <span className="text-[#a1a1a1]">(</span>
                <span className="text-[#a1a1a1]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">prompt</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"How do I upgrade?"</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                {"  "}
                <span className="text-white">options</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                <span className="text-white">userId</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"user_123"</span>
                <span className="text-[#a1a1a1]">,</span> <span className="text-white">accountType</span>
                <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"free"</span>{" "}
                <span className="text-[#a1a1a1]">{"}"}</span>
                <span className="text-[#a1a1a1]">,</span>
                {"\n"}
                <span className="text-[#a1a1a1]">{"});"}</span>
              </code>
            </pre>
          </div>
          {/*<div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white">Add dynamic context (RAG, user data)</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white">Select models at runtime</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white">Configure tools per request</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white">Provider-specific settings</p>
            </div>
          </div>*/}
        </div>
      ),
    },
    {
      id: 8,
      title: \"Structured Output - Now Production Ready",
      content: (
        <div className="flex flex-col justify-start h-full px-12">
          <h1 className="text-5xl font-bold text-white mb-8">Structured Output (stable)</h1>

          <div className="grid grid-cols-2 gap-8">
            {/* Before - Two separate calls */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-red-400 mb-2">❌ Before: Two Separate Calls</h3>
                <p className="text-sm text-gray-400">Tool calling, then structured output</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-red-400/30 flex-1">
                <pre className="text-xs overflow-auto leading-relaxed">
                  <code>
                    <span className="text-[#6b7280]">// Step 1: Call tool</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span> <span className="text-white">toolResult</span>{" "}
                    <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">generateText</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">model</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#c472fb]">anthropic</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#62c073]">'claude-haiku-4.5'</span>
                    <span className="text-[#a1a1a1]">),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">tools</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                    <span className="text-white">weather</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">weatherTool</span>{" "}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">'Get weather for SF'</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"});"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#6b7280]">// Step 2: Generate structured output</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span> <span className="text-white">structured</span>{" "}
                    <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">generateObject</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">model</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#c472fb]">anthropic</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#62c073]">'claude-haiku-4.5'</span>
                    <span className="text-[#a1a1a1]">),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">schema</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">summary</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">temperature</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">number</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">recommendation</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">`Summarize: </span>
                    <span className="text-[#c472fb]">$</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    <span className="text-white">toolResult</span>
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    <span className="text-[#62c073]">`</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* After - Single call */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-400 mb-2">✅ Now: Single Call</h3>
                <p className="text-sm text-gray-400">Tools + structured output together</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-green-400/30 flex-1">
                <pre className="text-xs overflow-auto leading-relaxed">
                  <code>
                    <span className="text-[#6b7280]">// All in one call!</span>
                    {"\n"}
                    <span className="text-[#f75f8f]">const</span> <span className="text-white">result</span>{" "}
                    <span className="text-[#f75f8f]">=</span> <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">generateText</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">model</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#c472fb]">anthropic</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#62c073]">'claude-haiku-4.5'</span>
                    <span className="text-[#a1a1a1]">),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">tools</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#a1a1a1]">{"{"}</span>{" "}
                    <span className="text-white">weather</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">weatherTool</span>{" "}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">output</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#52a8ff]">Output</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">schema</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"      "}
                    <span className="text-white">summary</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"      "}
                    <span className="text-white">temperature</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">number</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"      "}
                    <span className="text-white">recommendation</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#a1a1a1]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">prompt</span>
                    <span className="text-[#f75f8f]">:</span>{" "}
                    <span className="text-[#62c073]">'Get weather for SF'</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"});"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-[#6b7280]">// result.output contains typed data</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/*<div className="mt-6 text-center">
            <p className="text-lg text-[#52a8ff] font-semibold">
              Multi-step tool calling + structured output in a single call
            </p>
          </div>*/}
        </div>
      ),
    },
    {
      id: 9,
      title: \"Human-in-the-Loop Made Easy",
      content: (
        <div className="flex flex-col justify-start h-full">
          <h1 className="text-5xl font-bold text-white mb-12">Tool Execution Approval</h1>
          {/*<p className="text-2xl text-gray-300 mb-8">Human-in-the-Loop Made Easy</p>*/}
          <div className="">
            <div>
              {/*<h3 className="text-xl font-semibold text-white mb-4">Enable Approval</h3>*/}
              <div className="bg-black/40 rounded-lg p-6 border border-white/20">
                <pre className="text-xs overflow-auto leading-relaxed">
                  <code>
                    <span className="text-[#f75f8f]">export</span> <span className="text-[#f75f8f]">const</span>{" "}
                    <span className="text-white">paymentTool</span> <span className="text-[#f75f8f]">=</span>{" "}
                    <span className="text-[#c472fb]">tool</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">description</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#62c073]">"Process payment"</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">inputSchema</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">object</span>
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">amount</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">number</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">recipient</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-white">z</span>
                    <span className="text-[#a1a1a1]">.</span>
                    <span className="text-[#c472fb]">string</span>
                    <span className="text-[#a1a1a1]">(),</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">{"}),"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">// Dynamic approval logic</span>
                    {"\n"}
                    {"  "}
                    <span className="bg-[#52a8ff]/40 px-1 rounded">
                      <span className="text-[#c472fb]">needsApproval</span>
                      <span className="text-[#f75f8f]">:</span> <span className="text-[#f75f8f]">async</span>{" "}
                      <span className="text-[#a1a1a1]">(</span>
                      <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">amount</span>{" "}
                      <span className="text-[#a1a1a1]">{"}"}</span>
                      <span className="text-[#a1a1a1]">) </span>
                      <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-white">amount</span>{" "}
                      <span className="text-[#f75f8f]">{">"}</span> <span className="text-[#52a8ff]">1000</span>
                    </span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#c472fb]">execute</span>
                    <span className="text-[#f75f8f]">:</span> <span className="text-[#f75f8f]">async</span>{" "}
                    <span className="text-[#a1a1a1]">(</span>
                    <span className="text-[#a1a1a1]">{"{"}</span> <span className="text-white">amount</span>
                    <span className="text-[#a1a1a1]">,</span> <span className="text-white">recipient</span>{" "}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    <span className="text-[#a1a1a1]">) </span>
                    <span className="text-[#f75f8f]">{"=>"}</span> <span className="text-[#a1a1a1]">{"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#f75f8f]">return</span> <span className="text-[#f75f8f]">await</span>{" "}
                    <span className="text-[#c472fb]">processPayment</span>
                    <span className="text-[#a1a1a1]">(</span>
                    {"\n"}
                    {"      "}
                    <span className="text-white">amount</span>
                    <span className="text-[#a1a1a1]">,</span> {"\n"}
                    {"      "}
                    <span className="text-white">recipient</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#a1a1a1]">);</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#a1a1a1]">{"}"}</span>
                    <span className="text-[#a1a1a1]">,</span>
                    {"\n"}
                    <span className="text-[#a1a1a1]">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>
            {/*<div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-4 text-lg text-gray-300">
                <p>• Infrastructure agnostic</p>
                <p>• Dynamic conditions</p>
                <p>• Pause before execution</p>
                <p>• Full control over approval flow</p>
              </div>
            </div>*/}
          </div>
          {/*<p className="text-lg text-center text-gray-400 bg-white/5 rounded-lg p-4 border border-white/10">
            Perfect for high-stakes operations: payments, deletions, external API calls
          </p>*/}
        </div>
      ),
    },
    {
      id: 10,
      title: "Demo Time",
      content: (\
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h1 className="text-8xl font-bold text-white text-center">Demo Time</h1>
          <p className="text-3xl text-gray-300 text-center">Building an agent with tool approval</p>
        </div>
      ),
    },
    {
      id: 11,
      title: "Additional Features",\
      content: (
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
      ),
    },
    {
      id: 12,
      title: "Questions?",
      content: (\
        <div className="flex flex-col items-center justify-center h-full gap-12">
          <h1 className="text-8xl font-bold text-white text-center">Questions?</h1>
          <div className="space-y-6 text-2xl text-gray-300 text-center">
            <p>
              Documentation: <span className="text-[#52a8ff]">ai-sdk.dev</span>
            </p>
            <p>
              GitHub: <span className="text-[#52a8ff]">github.com/vercel/ai</span>
            </p>
            <p>
              Feedback: <span className="text-[#52a8ff]">github.com/vercel/ai/issues</span>
            </p>
          </div>
          <p className="text-lg text-gray-500 mt-12">AI SDK 6 Beta available now • Stable release end of 2025</p>
        </div>
      ),
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false)

  const slideContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {\
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === \"Escape" && isFullscreen) {\
        setIsFullscreen(false)
      }
      if (e.key === "ArrowLeft\" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }
\
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide, isFullscreen])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {\
      setCurrentSlide(currentSlide + 1)
    }
  }
\
  const prevSlide = () => {\
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)\
    }\
  }

  const enterFullscreen = () => {
    setIsFullscreen(true)
  }

  const addTextElement = (slideIndex: number) => {
    setSlides((prev) =>
      prev.map((slide, index) => {
        if (index !== slideIndex) return slide

        // Create a new slide content with an additional text element
        const updatedContent = (
          <div key={`slide-content-${slide.id}`} className="flex flex-col items-center justify-start h-full gap-8">
            <h1
              className="text-6xl font-bold text-white text-center text-balance cursor-text hover:bg-white/10 rounded px-4 py-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Presentation Title
            </h1>
            <p
              className="text-2xl text-gray-300 text-center text-balance cursor-text hover:bg-white/10 rounded px-4 py-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Your subtitle or tagline goes here
            </p>
            <p
              key="new-text-element" // Added key property
              className="text-xl text-white text-center cursor-text hover:bg-white/10 rounded px-4 py-2"
              contentEditable
              suppressContentEditableWarning={true}
            >
              New text element
            </p>
          </div>
        )

        return { ...slide, content: updatedContent }
      }),
    )
  }

  const addNewSlide = () => {
    const newSlide: Slide = {
      id: slides.length + 1,
      title: \`Slide ${slides.length + 1}`,\
      content: (
        <div className="flex flex-col items-center justify-start h-full gap-8">
          <h1
            className="text-5xl font-bold text-white text-center text-balance cursor-text hover:bg-white/10 rounded px-4 py-2"
            contentEditable
            suppressContentEditableWarning={true}
          >
            New Slide Title
          </h1>
          <p
            className="text-xl text-gray-300 text-center text-balance cursor-text hover:bg-white/10 rounded px-4 py-2"
            contentEditable
            suppressContentEditableWarning={true}
          >
            Add your content here
          </p>
        </div>
      ),
    }
    setSlides((prev) => [...prev, newSlide])
  }

  const renderSlideContent = (slide: Slide, isEditable = false) => {
    const disableEditing = (element: ReactElement): ReactElement => {\
      if (!React.isValidElement(element)) return element
\
      const props: any = { ...element.props }

      // Remove contentEditable and related editing props for text elements
      if (props.contentEditable) {
        props.contentEditable = false
        props.suppressContentEditableWarning = false\
        // Remove hover effects and cursor styles used for editing
        if (props.className) {
          props.className = props.className.replace("cursor-text", "").replace("hover:bg-white/10", "")
        }
      }

      // Recursively process children
      if (props.children) {
        if (Array.isArray(props.children)) {\
          props.children = props.children.map((child: any) =>\
            React.isValidElement(child) ? disableEditing(child) : child,
          )
        } else if (React.isValidElement(props.children)) {
          props.children = disableEditing(props.children)
        }
      }

      return React.cloneElement(element, props)
    }

    if (isFullscreen) {
      return disableEditing(slide.content)
    }

    return slide.content\
  }

  const renderSlide = () => {
    const slideContent = (
      <div
        ref={slideContainerRef}\
        className="w-full aspect-[16/9] relative"
        style={{
          backgroundImage: "url(/slide-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Area */}
        <div className="absolute inset-0 p-24">
          <div className="w-full h-full p-16 relative">{renderSlideContent(slides[currentSlide], !isFullscreen)}</div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index} // Added key property
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )

    if (isFullscreen) {
      return slideContent
    }

    return (
      <div className=\"rounded-lg p-1 shadow-lg bg-neutral-900">
        {/* Browser Chrome */}
        <div className="rounded-t-lg px-4 py-3 flex items-center gap-3 border-b bg-neutral-900 border-neutral-900">
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="rounded-md px-3 py-1 text-sm text-gray-300 border border-neutral-700 bg-neutral-900">
              vercel.com/slides/presentation
            </div>
          </div>

          {/* Browser Menu Button */}
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-gray-900 rounded-b-lg overflow-hidden">{slideContent}</div>
      </div>
    )
  }

  if (isFullscreen) {
    return (
      <div className=\"fixed inset-0 z-50 bg-black flex items-center justify-center font-sans">
        <div className="w-full h-full max-w-none">{renderSlide()}</div>
      </div>
    )
  }

  return (
    <div className="p-8 font-sans bg-black min-h-screen">
      {/* Header Controls */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between font-sans">
        <div className="flex items-center gap-4 font-sans"></div>
        <div className="flex items-center gap-4 font-sans">
          <span className="text-sm text-gray-300 font-sans">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={enterFullscreen} size="sm">
            <Maximize className="w-4 h-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      {/* Slide Container - Preview Mode */}
      <div className="max-w-6xl mx-auto rounded-lg overflow-hidden font-sans">{renderSlide()}</div>

      {!isFullscreen && slides.length > 1 && (
        <>
          {/* Left Arrow */}
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="secondary"
              size="sm"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Arrow */}
          <div className="fixed right-8 top-1/2 transform translate-y-8 z-30">
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="secondary"
              size="sm"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}

      {!isFullscreen && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
          <div
            className={`bg-neutral-800 border border-neutral-700 rounded-full shadow-lg transition-all duration-200 ${
              isToolbarExpanded ? "px-3 py-2" : "p-3"
            }`}
          >
            {!isToolbarExpanded ? (
              <button
                onClick={() => setIsToolbarExpanded(true)}
                className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
              >
                <Type className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => addTextElement(currentSlide)}
                  className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 h-auto"
                  size="sm"
                >
                  <Type className="w-3 h-3 mr-1" />
                  Add Text
                </Button>
                <button
                  onClick={() => setIsToolbarExpanded(false)}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">My Slide Deck</h3>
          <Button onClick={addNewSlide} size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Slide
          </Button>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id} // Added key property
              onClick={() => setCurrentSlide(index)}
              className={`aspect-[16/9] rounded-lg cursor-pointer border-2 transition-colors ${
                index === currentSlide ? "border-blue-500 bg-blue-500/10" : "border-gray-700 hover:border-gray-500"
              }`}
            >
              <div
                className="w-full h-full rounded-lg relative overflow-hidden"
                style={{
                  backgroundImage: "url(/slide-background.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 p-2 flex items-center justify-center">
                  <div className="text-xs text-white text-center font-bold">{slide.title}</div>
                </div>
              </div>
              <div className="text-xs text-gray-200 mt-1 text-center">Slide {index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {showNotification && (
        <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-40">
          <div className="flex items-start justify-between gap-3">
            <div className="text-sm">
              <div className="font-semibold mb-1">💡 Pro Tip</div>
              <div>Upload your content and v0 will automatically add it to your slides!</div>
            </div>
            <Button
              onClick={() => setShowNotification(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
