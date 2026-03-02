import { z } from "zod/v4";

export const dataResultSchema = z.object({
  answer: z.string().describe("natural language answer to the question"),
  table: z
    .object({
      columns: z.array(z.string()).describe("column headers"),
      rows: z
        .array(z.array(z.string()))
        .describe("row data as string arrays"),
    })
    .optional()
    .describe("optional data table to display"),
});

export type DataResult = z.infer<typeof dataResultSchema>;
