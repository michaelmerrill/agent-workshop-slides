import type {
  SupportFinalResponse,
  SupportRecommendation,
  SupportTicket,
} from "./support";

export interface GenerateOptions {
  ticket: SupportTicket;
}

export interface ApproveOptions {
  ticket: SupportTicket;
  approvedResponse: string;
  shouldClose: boolean;
  ticketId: string;
}

/**
 * Generate a support recommendation for a ticket
 */
export async function generateSupportRecommendation(
  options: GenerateOptions,
): Promise<SupportRecommendation> {
  const response = await fetch("/agents/support/api/workflows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options.ticket),
  });

  if (!response.ok) {
    throw new Error("Failed to create support ticket");
  }

  return await response.json();
}

/**
 * Approve and send a support response
 */
export async function approveSupportResponse(
  options: ApproveOptions,
): Promise<SupportFinalResponse> {
  const response = await fetch("/agents/support/api/workflows/approve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  if (!response.ok) {
    throw new Error("Failed to approve response");
  }

  return await response.json();
}

/**
 * Generate a unique ticket ID
 */
export function generateTicketId(): string {
  return `TKT-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`.toUpperCase();
}
