import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

const POLL_OPTIONS: Record<string, readonly string[]> = {
  "workshop-2026-03": ["New to AI", "Used AI tools", "Built AI apps", "Built AI agents"],
  "workshop-cc-experience": ["Never used it", "Tried it once or twice", "Use it regularly", "Power user"],
  "workshop-skills-experience": ["What are skills?", "Heard of them", "Used a few skills", "Built my own"],
};

export const getResults = query({
  args: { pollId: v.string() },
  handler: async (ctx, { pollId }) => {
    const options = POLL_OPTIONS[pollId];
    if (!options) throw new Error(`Unknown pollId: ${pollId}`);

    const votes = await ctx.db
      .query("votes")
      .withIndex("by_poll", (q) => q.eq("pollId", pollId))
      .collect();

    const counts: Record<string, number> = {};
    for (const option of options) {
      counts[option] = 0;
    }
    for (const vote of votes) {
      if (vote.option in counts) {
        counts[vote.option]++;
      }
    }

    return {
      options: options as unknown as string[],
      counts,
      total: votes.length,
    };
  },
});

export const castVote = mutation({
  args: { pollId: v.string(), option: v.string(), voterId: v.string() },
  handler: async (ctx, { pollId, option, voterId }) => {
    const options = POLL_OPTIONS[pollId];
    if (!options) throw new Error(`Unknown pollId: ${pollId}`);
    if (!options.includes(option)) {
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
