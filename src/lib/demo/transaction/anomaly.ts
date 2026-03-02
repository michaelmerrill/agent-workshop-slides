import { z } from "zod/v4";

export const anomalyResultSchema = z.object({
  anomalies: z.array(
    z.object({
      transactionId: z
        .string()
        .describe("exact transaction id from the data, e.g. txn_033"),
      description: z.string(),
    }),
  ),
  summary: z.string(),
});
export type AnomalyResult = z.infer<typeof anomalyResultSchema>;
