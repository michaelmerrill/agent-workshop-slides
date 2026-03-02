import { NextResponse } from "next/server";
import { Sandbox } from "@vercel/sandbox";

import { createDataAgent, extractDataResult } from "@/lib/demo/data/agent";

export async function POST(request: Request) {
  const { question } = await request.json();

  if (!question || typeof question !== "string") {
    return NextResponse.json({ error: "question required" }, { status: 400 });
  }

  const sandbox = await Sandbox.create({ timeout: 60_000 });

  try {
    console.log("[Route] Creating agent...");
    const agent = await createDataAgent(sandbox);

    console.log("[Route] Running agent with question:", question);
    const result = await agent.generate({
      prompt: question,
    });

    console.log("[Route] Agent steps:", result.steps?.length);

    const output = extractDataResult(result);
    console.log("[Route] Output:", JSON.stringify(output, null, 2));

    if (!output) {
      return NextResponse.json(
        { error: "Agent did not produce a result" },
        { status: 500 },
      );
    }

    return NextResponse.json(output);
  } catch (error) {
    console.error("[Route] Agent error:", error);
    return NextResponse.json(
      { error: "Failed to process question" },
      { status: 500 },
    );
  } finally {
    await sandbox.stop();
  }
}
