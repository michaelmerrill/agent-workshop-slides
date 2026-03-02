import { NextResponse } from "next/server";

import { agent } from "@/lib/demo/transaction/agent";

export async function POST() {
  try {
    const { output } = await agent.generate({
      prompt: `Please analyze my financial transactions and detect any anomalies or suspicious activities. Get the transactions data first, then provide structured results with anomalies and summary.`,
    });

    return NextResponse.json(output);
  } catch (error) {
    console.error("Error in anomaly detection:", error);

    return NextResponse.json(
      { error: "Failed to detect anomalies" },
      { status: 500 },
    );
  }
}
