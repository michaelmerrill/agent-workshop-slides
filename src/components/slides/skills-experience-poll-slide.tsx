"use client";

import { PollContent } from "@/components/poll-content";

const POLL_ID = "workshop-skills-experience";
const OPTIONS = ["What are skills?", "Heard of them", "Used a few skills", "Built my own"];

export default function SkillsExperiencePollSlide() {
  return (
    <PollContent
      pollId={POLL_ID}
      question="What&rsquo;s your experience with Skills?"
      options={OPTIONS}
    />
  );
}
