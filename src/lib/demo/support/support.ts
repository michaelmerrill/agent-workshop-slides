import { z } from "zod/v4";

export const supportTicketSchema = z.object({
  title: z.string().min(1, "Title is required"),
  email: z.email("Valid email is required"),
  body: z
    .string()
    .min(10, "Please provide more details (at least 10 characters)"),
});

export const ticketStatusSchema = z.enum(["pending", "active", "resolved"]);

export const supportRecommendationSchema = z.object({
  suggestedResponse: z
    .string()
    .describe(
      "Professional email-style support response. Use markdown ONLY for links [text](url) and code `commands`. Write in natural paragraphs, no bold text or bullet points.",
    ),
  suggestedStatus: ticketStatusSchema.describe(
    "What status the ticket should be marked as given the response... (Active = Respond, but keep open) (Resolved = Mark as complete with response))",
  ),
});

export const supportResponseSchema = z.object({
  ticketId: z.string(),
  response: z.string(),
  status: ticketStatusSchema,
});

export const supportFinalResponseSchema = z.object({
  ticketId: z.string(),
  response: z.string(),
  status: ticketStatusSchema,
});

export type SupportTicket = z.infer<typeof supportTicketSchema>;
export type TicketStatus = z.infer<typeof ticketStatusSchema>;
export type SupportRecommendation = z.infer<typeof supportRecommendationSchema>;
export type SupportResponse = z.infer<typeof supportResponseSchema>;
export type SupportFinalResponse = z.infer<typeof supportFinalResponseSchema>;

export const sampleTickets = [
  {
    title: "Next.js build failing with TypeScript errors",
    body: "My Next.js 16 TypeScript app builds locally but fails on Vercel with 'TS2307: Cannot find module' errors for my components. Using app directory structure with TypeScript 5.6.",
  },
  {
    title: "Environment variables not loading in production",
    body: "My NEXT_PUBLIC_ environment variables are undefined in production build on Vercel, but work in development. I've set them in the Vercel dashboard and redeployed.",
  },
  {
    title: "Custom domain SSL certificate issues",
    body: "Added my domain to Vercel project but getting 'SSL handshake failed' errors. Domain shows as 'Valid Configuration' in dashboard but HTTPS doesn't work.",
  },
  {
    title: "Image optimization failing with 500 errors",
    body: "Next.js Image component returns 500 errors in production. Using next/image with external images, works locally but fails on Vercel with 'Image optimization error'.",
  },
  {
    title: "Build cache causing stale TypeScript compilation",
    body: "Vercel build cache seems to be using old TypeScript files. Made changes to types but getting compilation errors for code that should now be valid. Local builds work fine.",
  },
];
