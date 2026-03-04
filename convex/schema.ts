import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  votes: defineTable({
    pollId: v.string(),
    option: v.string(),
    voterId: v.string(),
  })
    .index("by_poll", ["pollId"])
    .index("by_voter", ["pollId", "voterId"]),
});
