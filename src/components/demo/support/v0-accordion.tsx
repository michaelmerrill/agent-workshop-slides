"use client";

import { useState } from "react";

import { askV0 } from "@/lib/demo/support/actions/ask-v0";

export function V0Accordion() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await askV0(query);
    setResponse(result.text);
    setLoading(false);
  };

  return (
    <details className="border-b border-border">
      <summary className="flex cursor-pointer items-center gap-3 py-4 list-none">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <span className="font-mono text-muted-foreground text-sm">v0</span>
          </div>
          <span className="font-mono text-foreground">Ask v0</span>
        </div>
      </summary>
      <div className="pb-4">
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <input
                id="v0-query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Why is my deployment stuck on building?"
                className="flex-1 rounded border border-border bg-card px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring/30"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="rounded bg-muted px-4 py-2 text-muted-foreground text-sm hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Asking v0..." : "Ask v0"}
              </button>
            </div>
          </form>

          {response && (
            <div className="rounded border border-purple-500/20 bg-purple-500/5 p-3">
              <div className="whitespace-pre-wrap text-muted-foreground text-sm">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </details>
  );
}
