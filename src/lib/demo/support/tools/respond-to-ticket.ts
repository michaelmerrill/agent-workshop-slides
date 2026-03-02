import { tool } from "ai";
import { z } from "zod/v4";

import { ticketStatusSchema } from "@/lib/demo/support/support";

export const respondToTicketTool = tool({
  description: "Respond to a support ticket with optional status change",
  inputSchema: z.object({
    content: z.string().describe("The response content to send to the ticket"),
    status: ticketStatusSchema
      .optional()
      .describe("Optional status to change the ticket to"),
  }),
  needsApproval: true, // Just a single line to add built-in tool approval
  execute: async ({ content, status }) => {
    console.log(`Responded to ticket with: ${content}`);

    if (status) {
      console.log(`Changed ticket status to: ${status}`);
      return {
        success: true,
        message: `Response sent: ${content}. Status changed to: ${status}`,
      };
    }

    return {
      success: true,
      message: `Response sent: ${content}`,
    };
  },
});
