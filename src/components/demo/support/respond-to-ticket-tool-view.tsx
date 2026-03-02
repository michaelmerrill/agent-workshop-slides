import type {
  ChatAddToolApproveResponseFunction,
  Tool,
  UIToolInvocation,
} from "ai";
import { CheckCircle } from "lucide-react";

interface RespondToTicketToolViewProps {
  invocation: UIToolInvocation<Tool>;
  addToolApprovalResponse?: ChatAddToolApproveResponseFunction;
}

export function RespondToTicketToolView({
  invocation,
  addToolApprovalResponse,
}: RespondToTicketToolViewProps) {
  if (invocation.state === "approval-requested") {
    return (
      <div className="my-4 rounded border border-yellow-500/30 p-4">
        <div className="mb-3 font-medium text-sm text-yellow-600 dark:text-yellow-300">
          Approval Required
        </div>
        <div className="mb-4 rounded bg-muted p-3">
          <div className="mb-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
            Response to Send:
          </div>
          <div className="whitespace-pre-wrap text-sm text-foreground">
            {invocation.input?.content}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {invocation.input?.status === "resolved" && (
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                <span className="font-medium text-green-500 dark:text-green-400 text-sm">
                  Will resolve ticket
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                addToolApprovalResponse?.({
                  id: invocation.approval?.id,
                  approved: false,
                })
              }
              className="rounded px-3 py-1.5 text-sm bg-red-500/20 text-red-600 dark:text-red-300 hover:bg-red-500/30"
            >
              Deny
            </button>
            <button
              type="button"
              onClick={() =>
                addToolApprovalResponse?.({
                  id: invocation.approval.id,
                  approved: true,
                })
              }
              className="rounded px-3 py-1.5 text-sm bg-green-500/20 text-green-600 dark:text-green-300 hover:bg-green-500/30"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (invocation.state === "output-available") {
    return (
      <div className="flex items-center gap-2 py-1">
        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
        <div className="text-muted-foreground text-sm">Response Sent</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 py-1">
      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground border-dashed"></div>
      <div className="text-muted-foreground text-sm">Preparing Response</div>
    </div>
  );
}
