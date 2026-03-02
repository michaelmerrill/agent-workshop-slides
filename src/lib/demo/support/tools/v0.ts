import { generateText, tool } from "ai";
import { z } from "zod/v4";

export const askV0Tool = tool({
  description:
    "Ask v0 (Vercel's AI) for technical guidance on deployment, infrastructure, and Vercel-specific issues",
  inputSchema: z.object({
    query: z
      .string()
      .describe("The technical question or issue description to ask v0 about"),
  }),
  execute: async ({ query }) => {
    try {
      const { text } = await generateText({
        model: "vercel/v0-1.5-md",
        system:
          "You are v0, Vercel's AI assistant. You provide expert technical guidance on deployment, infrastructure, web development, and Vercel platform-specific issues. Be concise, practical, and solution-oriented in your responses.",
        prompt: query,
      });

      return text;
    } catch (error) {
      console.error("Error calling v0:", error);
      return `Sorry, I couldn't connect to v0 right now. Please try again later or contact support if the issue persists.`;
    }
  },
});
