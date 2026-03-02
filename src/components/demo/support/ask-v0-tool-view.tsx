import type { Tool, UIToolInvocation } from "ai";
import { CheckCircle } from "lucide-react";

interface AskV0ToolViewProps {
  invocation: UIToolInvocation<Tool>;
}

export function AskV0ToolView({ invocation }: AskV0ToolViewProps) {
  if (invocation.state === "output-available") {
    return (
      <div className="flex items-center gap-2 py-1">
        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
        <div className="text-muted-foreground text-sm">Asking v0</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 py-1">
      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground border-dashed"></div>
      <div className="text-muted-foreground text-sm">Asking v0</div>
    </div>
  );
}
