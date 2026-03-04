import { ExternalLink } from "lucide-react";

import { QueryForm } from "@/components/demo/data/query-form";

export default function DataAgentPage() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <div className="mx-auto max-w-4xl flex-1 px-6 py-20">
        {/* header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
              💾
            </div>
            <h1 className="text-3xl font-bold">Data Agent</h1>
          </div>
          <p className="text-muted-foreground">
            Ask questions about website analytics data. The agent uses a Vercel
            Sandbox to query CSV files with bash commands.
          </p>
        </div>

        <QueryForm />
      </div>

      <footer className="border-t border-border px-6 py-6 text-center text-muted-foreground">
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Vercel
          <ExternalLink className="h-4 w-4" />
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://github.com/michaelmerrill/agent-workshop-slides/tree/main/src/app/demo/data"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Repository
          <ExternalLink className="h-4 w-4" />
        </a>
      </footer>
    </div>
  );
}
