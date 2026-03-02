import Markdown from "react-markdown";

import type { DataResult } from "@/lib/demo/data/result";

export function DataDisplay({ result }: { result: DataResult }) {
  return (
    <div className="space-y-4">
      {/* answer */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-2 font-mono text-sm uppercase tracking-wider text-muted-foreground">
          Answer
        </div>
        <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
          <Markdown>{result.answer}</Markdown>
        </div>
      </div>

      {/* table */}
      {result.table && result.table.columns.length > 0 && (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {result.table.columns.map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left font-mono text-sm uppercase tracking-wider text-muted-foreground"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.table.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0 hover:bg-muted/30"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-sm text-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
