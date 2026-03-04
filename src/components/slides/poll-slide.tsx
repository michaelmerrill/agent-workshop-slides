"use client";

import { useQuery, useMutation } from "convex/react";
import { useCallback, useEffect, useState } from "react";

import { api } from "../../../convex/_generated/api";
import { Background } from "@/components/background";

const POLL_ID = "workshop-2026-03";
const OPTIONS = [
  "New to AI",
  "Used AI tools",
  "Built AI apps",
  "Built AI agents",
];

function getVoterId(): string {
  const key = `poll-voter-${POLL_ID}`;
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function PollSlide() {
  const results = useQuery(api.polls.getResults, { pollId: POLL_ID });
  const castVote = useMutation(api.polls.castVote);
  const [voted, setVoted] = useState<string | null>(null);
  const [voterId, setVoterId] = useState<string | null>(null);

  useEffect(() => {
    setVoterId(getVoterId());
    const stored = localStorage.getItem(`poll-voted-${POLL_ID}`);
    if (stored) setVoted(stored);
  }, []);

  const handleVote = useCallback(
    async (option: string) => {
      if (!voterId) return;
      if (option === voted) return;
      await castVote({ pollId: POLL_ID, option, voterId });
      localStorage.setItem(`poll-voted-${POLL_ID}`, option);
      setVoted(option);
    },
    [voted, voterId, castVote],
  );

  const counts = results?.counts ?? {};
  const total = results?.total ?? 0;

  return (
    <Background>
      <div className="flex h-full flex-col items-center justify-center px-16">
        <span className="mb-4 rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-sm text-zinc-400">
          Quick Poll
        </span>
        <h2 className="mb-2 text-center font-bold text-5xl text-white">
          What&apos;s your experience with AI?
        </h2>
        <p className="mb-12 text-center text-xl text-zinc-400">
          Vote below &mdash; results update in real-time
        </p>

        <div className="flex w-full max-w-3xl flex-col gap-4">
          {OPTIONS.map((option) => {
            const count = counts[option] ?? 0;
            const pct = total > 0 ? Math.round((count / total) * 100) : 0;
            const isSelected = voted === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleVote(option)}
                className={`group relative overflow-hidden rounded-xl border px-6 py-5 text-left transition-all ${
                  isSelected
                    ? "border-white/30 bg-white/10"
                    : voted
                      ? "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-800/60"
                      : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-800/60"
                }`}
              >
                {/* animated fill bar */}
                {voted && (
                  <div
                    className="absolute inset-y-0 left-0 bg-white/[0.07] transition-all duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span
                    className={`text-xl ${isSelected ? "font-semibold text-white" : "text-zinc-300"}`}
                  >
                    {option}
                  </span>
                  {voted && (
                    <span className="font-mono text-lg text-zinc-400">
                      {count} ({pct}%)
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {voted && (
          <p className="mt-8 text-base text-zinc-500">
            {total} {total === 1 ? "vote" : "votes"} so far
          </p>
        )}
      </div>
    </Background>
  );
}
