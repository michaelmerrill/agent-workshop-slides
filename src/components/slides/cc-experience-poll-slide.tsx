"use client";

import { PollContent } from "@/components/poll-content";

const POLL_ID = "workshop-cc-experience";
const OPTIONS = ["Never used it", "Tried it once or twice", "Use it regularly", "Power user"];

export default function CcExperiencePollSlide() {
  return (
    <PollContent
      pollId={POLL_ID}
      question="What&rsquo;s your experience with Claude Code?"
      options={OPTIONS}
    />
  );
}
