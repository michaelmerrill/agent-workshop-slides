import { tool } from "ai";
import { z } from "zod/v4";

const faqDatabase = [
  {
    id: "build-cache",
    question: "How do I clear the build cache?",
    answer:
      "You can clear the build cache by setting the VERCEL_FORCE_NO_BUILD_CACHE=1 environment variable or using 'vercel --force' in CLI.",
    keywords: ["cache", "build", "clear", "force"],
  },
  {
    id: "custom-domain",
    question: "How do I set up a custom domain?",
    answer:
      "Add your domain in Project Settings > Domains, then configure DNS records: A record for apex domain (76.76.19.19) or CNAME for subdomain (cname.vercel-dns.com).",
    keywords: ["domain", "custom", "dns", "cname", "a record"],
  },
  {
    id: "environment-variables",
    question: "How do I set environment variables?",
    answer:
      "Go to Project Settings > Environment Variables. Add variables for different environments (Development, Preview, Production). Use process.env.VARIABLE_NAME in your code.",
    keywords: ["environment", "variables", "env", "process"],
  },
  {
    id: "function-timeout",
    question: "Why are my functions timing out?",
    answer:
      "Hobby plan functions timeout after 10s, Pro plan after 60s. Optimize your code, use connection pooling, and consider Edge Functions for better performance.",
    keywords: ["timeout", "function", "serverless", "performance"],
  },
  {
    id: "deployment-failed",
    question: "Why did my deployment fail?",
    answer:
      "Check the build logs for specific errors. Common issues: missing dependencies, build script errors, environment variables not set, or memory limits exceeded.",
    keywords: ["deployment", "failed", "error", "build", "logs"],
  },
  {
    id: "edge-functions",
    question: "When should I use Edge Functions?",
    answer:
      "Use Edge Functions for: authentication, redirects, A/B testing, geolocation-based responses, and lightweight API endpoints that need low latency.",
    keywords: ["edge", "functions", "performance", "latency", "global"],
  },
  {
    id: "database-connection",
    question: "How do I connect to a database?",
    answer:
      "Use connection pooling (like PlanetScale, Supabase, or Prisma) to avoid connection limits. Store connection strings in environment variables.",
    keywords: ["database", "connection", "pool", "mysql", "postgres"],
  },
  {
    id: "static-files",
    question: "How do I serve static files?",
    answer:
      "Place files in the 'public' directory. They'll be served from the root path. For dynamic imports, use Next.js dynamic imports or proper bundling.",
    keywords: ["static", "files", "public", "assets", "images"],
  },
];

export const queryFAQTool = tool({
  description:
    "Search the FAQ database for answers to common Vercel and infrastructure questions",
  inputSchema: z.object({
    query: z
      .string()
      .describe("The question or issue to search for in the FAQ database"),
  }),
  execute: async ({ query }) => {
    const queryLower = query.toLowerCase();

    // Find FAQ entries that match keywords
    const matchingFAQs = faqDatabase.filter(
      (faq) =>
        faq.keywords.some((keyword) => queryLower.includes(keyword)) ||
        faq.question.toLowerCase().includes(queryLower) ||
        faq.answer.toLowerCase().includes(queryLower),
    );

    if (matchingFAQs.length === 0) {
      return {
        found: false,
        message: "No matching FAQ entries found for this query.",
      };
    }

    // Return the most relevant FAQ entries (up to 3)
    const topMatches = matchingFAQs.slice(0, 3);

    return {
      found: true,
      faqs: topMatches.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      })),
    };
  },
});
