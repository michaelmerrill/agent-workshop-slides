'use client';

import { useState } from 'react';
import { Background } from '@/components/background';

const keychainSnippet = `security add-generic-password -a "$USER" -s "ANTHROPIC_AUTH_TOKEN" \\
  -w "your-ai-gateway-api-key"`;

const configSnippet = `{
  "apiKeyHelper": "security find-generic-password -a \\"$USER\\" -s \\"ANTHROPIC_AUTH_TOKEN\\" -w",
  "env": {
    "ANTHROPIC_BASE_URL": "https://ai-gateway.vercel.sh",
    "ANTHROPIC_API_KEY": ""
  }
}`;

const supportedAgents = [
  { name: 'Claude Code', url: 'https://www.claude.com/product/claude-code' },
  { name: 'Conductor', url: 'https://www.conductor.build/' },
  { name: 'Roo Code', url: 'https://roocode.com/' },
  { name: 'Cline', url: 'https://cline.bot/' },
  { name: 'Blackbox AI', url: 'https://blackbox.ai/' },
  { name: 'Crush', url: 'https://github.com/charmbracelet/crush' },
  { name: 'OpenCode', url: 'https://opencode.ai/' },
];

export default function AgentSetupSlide() {
  const [copied, setCopied] = useState<string | null>(null);

  function handleCopy(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <Background>
      <div className="flex h-full flex-col">
        {/* header */}
        <div className="flex items-center gap-4 border-[#242424] border-b px-8 py-6">
          <h1 className="font-bold text-3xl text-white">
            Hands on: set up your agent
          </h1>
        </div>

        <div className="flex flex-1 gap-8 p-8">
          {/* left column: Claude Code card */}
          <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 px-10 py-8">
            <div
              className="mb-6 h-1.5 w-16 rounded-full"
              style={{ backgroundColor: '#c472fb' }}
            />
            <h2 className="font-bold text-2xl text-white">Claude Code</h2>
            <p className="mt-2 text-lg text-[#a0a0a0]">
              AI agent in your terminal
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://code.claude.com/docs/en/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-[#333] bg-[#0a0a0a] px-3 py-1.5 text-xs text-[#52a8ff] transition-colors hover:border-white/20 hover:bg-white/10"
              >
                Download
              </a>
              <a
                href="https://vercel.com/docs/agent-resources/coding-agents/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-[#333] bg-[#0a0a0a] px-3 py-1.5 text-xs text-[#52a8ff] transition-colors hover:border-white/20 hover:bg-white/10"
              >
                Setup Docs
              </a>
            </div>

            {/* snippets */}
            <div className="mt-auto space-y-4">
              {/* keychain snippet */}
              <div className="flex flex-col rounded-lg border border-[#242424] bg-black/40 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs text-[#888]">
                    Store API key in macOS Keychain
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(keychainSnippet, 'keychain')}
                    className="rounded border border-[#333] bg-[#0a0a0a] px-2.5 py-1 font-mono text-xs text-[#a0a0a0] transition-colors hover:border-white/20 hover:text-white"
                  >
                    {copied === 'keychain' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-[#62c073]">{'security'}</span>
                    <span className="text-white">{' add-generic-password -a '}</span>
                    <span className="text-[#c472fb]">{'"$USER"'}</span>
                    <span className="text-white">{' -s '}</span>
                    <span className="text-[#c472fb]">{'"ANTHROPIC_AUTH_TOKEN"'}</span>
                    <span className="text-white">{' \\'}</span>
                    {'\n'}
                    <span className="text-white">{'  -w '}</span>
                    <span className="text-[#c472fb]">{'"your-ai-gateway-api-key"'}</span>
                  </code>
                </pre>
              </div>

              {/* config snippet */}
              <div className="flex flex-col rounded-lg border border-[#242424] bg-black/40 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs text-[#888]">
                    ~/.claude/settings.json
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(configSnippet, 'config')}
                    className="rounded border border-[#333] bg-[#0a0a0a] px-2.5 py-1 font-mono text-xs text-[#a0a0a0] transition-colors hover:border-white/20 hover:text-white"
                  >
                    {copied === 'config' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-[#888]">{'{'}</span>
                    {'\n'}
                    <span className="text-[#c472fb]">{'  "apiKeyHelper"'}</span>
                    <span className="text-white">{': '}</span>
                    <span className="text-[#62c073]">{'"security find-generic-password -a "$USER" -s "ANTHROPIC_AUTH_TOKEN" -w"'}</span>
                    <span className="text-white">{','}</span>
                    {'\n'}
                    <span className="text-[#c472fb]">{'  "env"'}</span>
                    <span className="text-white">{': {'}</span>
                    {'\n'}
                    <span className="text-[#c472fb]">{'    "ANTHROPIC_BASE_URL"'}</span>
                    <span className="text-white">{': '}</span>
                    <span className="text-[#62c073]">{'"https://ai-gateway.vercel.sh"'}</span>
                    <span className="text-white">{','}</span>
                    {'\n'}
                    <span className="text-[#c472fb]">{'    "ANTHROPIC_API_KEY"'}</span>
                    <span className="text-white">{': '}</span>
                    <span className="text-[#62c073]">{'""'}</span>
                    {'\n'}
                    <span className="text-white">{'  }'}</span>
                    {'\n'}
                    <span className="text-[#888]">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* right column: Supported Agents */}
          <div className="flex w-[420px] shrink-0 flex-col">
            <a
              href="https://vercel.com/docs/agent-resources/coding-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3"
            >
              <span className="rounded-full border border-[#333] bg-[#0a0a0a] px-3 py-1 font-mono text-sm text-[#62c073] transition-colors hover:border-white/20 hover:bg-white/10">
                All Coding Agents Docs &rarr;
              </span>
            </a>

            <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-1 font-bold text-lg text-white">
                Supported Agents
              </h3>
              <p className="mb-5 text-sm text-[#a0a0a0]">
                Any of these agents work with Vercel AI Gateway
              </p>

              <div className="space-y-3">
                {supportedAgents.map((agent, i) => (
                  <a
                    key={agent.name}
                    href={agent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-[#242424] bg-black/40 px-5 py-3 transition-colors hover:border-white/20"
                  >
                    <span className="shrink-0 font-mono text-sm text-[#52a8ff]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-sm text-white">
                      {agent.name}
                    </span>
                  </a>
                ))}

                {/* Codex - coming soon */}
                <div className="flex items-center gap-4 rounded-lg border border-[#242424] bg-black/40 px-5 py-3 opacity-60">
                  <span className="shrink-0 font-mono text-sm text-[#52a8ff]">
                    {String(supportedAgents.length + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium text-sm text-white">Codex</span>
                  <span className="ml-auto rounded-full border border-[#333] bg-[#0a0a0a] px-2 py-0.5 text-xs text-[#a0a0a0]">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
