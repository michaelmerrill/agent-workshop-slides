"use client";

import { useState } from "react";
import { ArrowLeft, Loader2, Send } from "lucide-react";

import type { DataResult } from "@/lib/demo/data/result";
import { PREBAKED_QUESTIONS } from "@/lib/demo/data/data";
import { DataDisplay } from "@/components/demo/data/data-display";

export function QueryForm() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DataResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (q: string) => {
    if (!q.trim()) return;

    setSubmittedQuestion(q);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/demo/data/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });

      if (!response.ok) {
        throw new Error("Failed to get answer");
      }

      const data = await response.json();
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedQuestion(null);
    setQuestion("");
    setResult(null);
    setError(null);
  };

  // show question + response view
  if (submittedQuestion) {
    return (
      <div className="space-y-6">
        {/* back button + question */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ask another question
          </button>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-lg font-medium">{submittedQuestion}</div>
          </div>
        </div>

        {/* loading state */}
        {loading && (
          <div className="flex items-center gap-2 py-8 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Analyzing data...</span>
          </div>
        )}

        {/* error */}
        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-500">
            {error}
          </div>
        )}

        {/* result */}
        {result && <DataDisplay result={result} />}
      </div>
    );
  }

  // show input view
  return (
    <div className="space-y-6">
      {/* prebaked questions */}
      <div className="flex flex-wrap gap-2">
        {PREBAKED_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => {
              setQuestion(q);
              handleSubmit(q);
            }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
          >
            {q}
          </button>
        ))}
      </div>

      {/* custom question input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(question);
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the data..."
          className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!question.trim()}
          className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          Ask
        </button>
      </form>
    </div>
  );
}
