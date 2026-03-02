import { tool } from "ai";
import { z } from "zod/v4";

import { db } from "@/lib/demo/transaction/db";

export const transactionsTool = tool({
  description:
    "Fetch all financial transactions from the database. Call this tool first to get transaction data before analyzing for anomalies.",
  inputSchema: z.object({}),
  execute: async () => {
    console.log("[DB] Getting transactions...");
    return db.transactions.get();
  },
});
