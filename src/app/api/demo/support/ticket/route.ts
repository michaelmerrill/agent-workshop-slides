import { createAgentUIStreamResponse } from "ai";
import type { NextRequest } from "next/server";

import { agent } from "@/lib/demo/support/agent";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  return createAgentUIStreamResponse({
    agent,
    uiMessages: messages,
  });
}
