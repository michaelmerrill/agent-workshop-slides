"use client";

import { PollContent } from "@/components/poll-content";

const POLL_ID = "workshop-2026-03";
const OPTIONS = ["New to AI", "Used AI tools", "Built AI apps", "Built AI agents"];

export default function PollSlide() {
  return (
    <PollContent
      pollId={POLL_ID}
      question="What&rsquo;s your experience with AI?"
      options={OPTIONS}
    />
  );
}
