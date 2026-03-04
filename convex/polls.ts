import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

const OPTIONS = [
  "New to AI",
  "Used AI tools",
  "Built AI apps",
  "Built AI agents",
] as const;

export const getResults = query({
  args: { pollId: v.string() },
  handler: async (ctx, { pollId }) => {
    const votes = await ctx.db
      .query("votes")
      .withIndex("by_poll", (q) => q.eq("pollId", pollId))
      .collect();

    const counts: Record<string, number> = {};
    for (const option of OPTIONS) {
      counts[option] = 0;
    }
    for (const vote of votes) {
      if (vote.option in counts) {
        counts[vote.option]++;
      }
    }

    return {
      options: OPTIONS as unknown as string[],
      counts,
      total: votes.length,
    };
  },
});

export const castVote = mutation({
  args: { pollId: v.string(), option: v.string(), voterId: v.string() },
  handler: async (ctx, { pollId, option, voterId }) => {
    if (!OPTIONS.includes(option as (typeof OPTIONS)[number])) {
      throw new Error(`Invalid option: ${option}`);
    }
    const existing = await ctx.db
      .query("votes")
      .withIndex("by_voter", (q) => q.eq("pollId", pollId).eq("voterId", voterId))
      .unique();
    if (existing) {
      await ctx.db.delete(existing._id);
    }
    await ctx.db.insert("votes", { pollId, option, voterId });
  },
});
