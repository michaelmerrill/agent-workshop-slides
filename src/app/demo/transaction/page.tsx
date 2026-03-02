import { ExternalLink } from "lucide-react";

import { Header } from "@/components/demo/transaction/header";
import { TransactionList } from "@/components/demo/transaction/transaction-list";
import { db } from "@/lib/demo/transaction/db";

export default async function TransactionPage() {
  const transactions = await db.transactions.get();

  return (
    <div className="text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Header />

        <TransactionList transactions={transactions} />
      </div>

      <footer className="border-border border-t px-6 py-12 text-center text-muted-foreground">
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Vercel
          <ExternalLink className="h-4 w-4" />
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://github.com/vercel-saleseng/demo/tree/main/apps/transaction-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Repository
          <ExternalLink className="h-4 w-4" />
        </a>
      </footer>
    </div>
  );
}
