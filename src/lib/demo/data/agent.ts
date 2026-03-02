import { ToolLoopAgent, stepCountIs, tool } from "ai";
import { createBashTool } from "bash-tool";
import { Sandbox } from "@vercel/sandbox";
import { z } from "zod/v4";

import { dataResultSchema, type DataResult } from "@/lib/demo/data/result";
import { USERS_CSV, VISITS_CSV, EVENTS_CSV } from "@/lib/demo/data/data";

const TOOL_DESCRIPTION = `Execute bash commands to query CSV data files in the workspace directory.

Available CSV files (already in working directory):
- users.csv: columns are id, name, email, signup_date, plan
- visits.csv: columns are id, user_id, page, timestamp, duration_seconds, referrer
- events.csv: columns are id, user_id, event_type, element, page, timestamp

Example bash commands:
- cat users.csv - view file contents
- tail -n +2 users.csv | wc -l - count data rows (skip header)
- tail -n +2 users.csv | awk -F',' '{print $5}' | sort | uniq -c - count users by plan
- tail -n +2 events.csv | awk -F',' '{print $4}' | sort | uniq -c | sort -rn - count by element
- tail -n +2 visits.csv | awk -F',' '{sum[$3]+=$5; count[$3]++} END {for(p in sum) print p, sum[p]/count[p]}' - avg duration by page`;

async function createBashTools(sandbox: Sandbox) {
  const { tools } = await createBashTool({
    sandbox,
    extraInstructions: TOOL_DESCRIPTION,
    onBeforeBashCall: ({ command }) => {
      console.log("[Bash] Running:", command);
      return undefined;
    },
    onAfterBashCall: ({ command, result }) => {
      const status =
        result.exitCode === 0 ? "OK" : `FAILED (${result.exitCode})`;
      console.log(`[Bash] ${status}:`, command.slice(0, 100));
      if (result.exitCode !== 0 && result.stderr) {
        console.log("[Bash] stderr:", result.stderr.slice(0, 200));
      }
      return undefined;
    },
  });

  return { bashTool: tools.bash, readFileTool: tools.readFile };
}

// finalize tool - call this to return the final answer
const finalizeTool = tool({
  description:
    "Call this tool to submit your final answer after analyzing the data with bash commands. Include a table if it helps illustrate the answer.",
  inputSchema: dataResultSchema,
  execute: async (input) => input,
});

export async function createDataAgent(sandbox: Sandbox) {
  // create workspace directory and write data files there (bash-tool expects /vercel/sandbox/workspace)
  console.log("[Sandbox] Creating workspace directory...");
  await sandbox.mkDir("workspace");

  console.log("[Sandbox] Writing CSV files...");
  await sandbox.writeFiles([
    { path: "workspace/users.csv", content: Buffer.from(USERS_CSV) },
    { path: "workspace/visits.csv", content: Buffer.from(VISITS_CSV) },
    { path: "workspace/events.csv", content: Buffer.from(EVENTS_CSV) },
  ]);

  // verify files were written to workspace
  const lsResult = await sandbox.runCommand("ls", ["-la", "/vercel/sandbox/workspace"]);
  console.log("[Sandbox] Workspace files:", await lsResult.stdout());
  if (lsResult.exitCode !== 0) {
    console.error("[Sandbox] ls failed:", await lsResult.stderr());
  }

  const { bashTool, readFileTool } = await createBashTools(sandbox);

  return new ToolLoopAgent({
    model: "anthropic/claude-opus-4.5",
    tools: {
      bash: bashTool,
      readFile: readFileTool,
      finalize: finalizeTool,
    },
    stopWhen: [
      (ctx) =>
        ctx.steps.some((step) =>
          step.toolResults?.some((t) => t.toolName === "finalize"),
        ),
      stepCountIs(10),
    ],
    prepareStep: ({ stepNumber }) => {
      console.log("[Agent] prepareStep called, step:", stepNumber);
      // force bash tool on first step
      if (stepNumber === 0) {
        return { toolChoice: { type: "tool", toolName: "bash" } };
      }
      return {};
    },
    instructions: `You are a data analyst agent. Answer questions about website analytics by querying CSV files with bash commands.

CSV files available in the workspace:
- users.csv: id, name, email, signup_date, plan (10 users)
- visits.csv: id, user_id, page, timestamp, duration_seconds, referrer (20 visits)
- events.csv: id, user_id, event_type, element, page, timestamp (20 events)

Workflow:
1. Run bash commands to query the CSV data (files are in current directory)
2. Analyze the results
3. Run more bash commands if needed
4. Call finalize with your answer and optional data table

Bash tips:
- Use tail -n +2 to skip the CSV header row
- Use awk -F',' to parse comma-separated fields
- Field numbers: $1=first column, $2=second, etc.

IMPORTANT: You must run bash commands to get actual data before calling finalize.`,
  });
}

// extract result from agent output
export function extractDataResult(result: {
  steps?: Array<{ toolResults?: Array<{ toolName: string; output: unknown }> }>;
}): DataResult | null {
  for (const step of result.steps ?? []) {
    for (const toolResult of step.toolResults ?? []) {
      if (toolResult.toolName === "finalize") {
        return toolResult.output as DataResult;
      }
    }
  }
  return null;
}
