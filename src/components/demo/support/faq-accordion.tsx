export function FAQAccordion() {
  return (
    <details className="border-b border-border">
      <summary className="flex cursor-pointer items-center gap-3 py-4 list-none">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
            <span className="font-mono text-blue-500 dark:text-blue-400 text-sm">?</span>
          </div>
          <span className="font-mono text-foreground">FAQ Database</span>
        </div>
      </summary>
      <div className="pb-4">
        <div className="space-y-3 text-muted-foreground text-sm">
          <p>
            Our knowledge base contains answers to the most frequently asked
            questions about Vercel and web infrastructure.
          </p>
          <div className="rounded border border-blue-500/20 bg-blue-500/5 p-3">
            <div className="mb-2 font-medium font-mono text-blue-500 dark:text-blue-400 text-xs uppercase tracking-wider">
              Common Topics
            </div>
            <ul className="space-y-1 text-xs">
              <li>• Build cache clearing</li>
              <li>• Custom domain setup</li>
              <li>• Environment variables</li>
              <li>• Function timeouts</li>
              <li>• Database connections</li>
              <li>• Static file serving</li>
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
}
