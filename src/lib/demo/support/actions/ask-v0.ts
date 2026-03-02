"use server";

import { generateText } from "ai";

export async function askV0(query: string) {
  try {
    const { text } = await generateText({
      model: "vercel/v0-1.5-md",
      system:
        "You are v0, Vercel's AI assistant. You provide expert technical guidance on deployment, infrastructure, web development, and Vercel platform-specific issues. Be concise, practical, and solution-oriented in your responses.",
      prompt: query,
    });
    return { success: true, text };
  } catch (error) {
    console.error("Error calling v0:", error);
    return {
      success: false,
      text: "Sorry, I couldn't connect to v0 right now. Please try again later.",
    };
  }
}
