"use client";

import { useChat } from "@ai-sdk/react";
import {
  DefaultChatTransport,
  lastAssistantMessageIsCompleteWithApprovalResponses,
} from "ai";
import { ExternalLink, Sparkles } from "lucide-react";
import { type FormEvent, useState } from "react";

import { AskV0ToolView } from "@/components/demo/support/ask-v0-tool-view";
import { QueryFAQToolView } from "@/components/demo/support/query-faq-tool-view";
import { RespondToTicketToolView } from "@/components/demo/support/respond-to-ticket-tool-view";
import { ToolsSection } from "@/components/demo/support/tools-section";
import type { SupportAgentUIMessage } from "@/lib/demo/support/agent";
import { generateTicketId } from "@/lib/demo/support/generate";
import { sampleTickets } from "@/lib/demo/support/support";

const sampleEmails = [
  "jim@example.com",
  "sarah@example.com",
  "mike@example.com",
  "lisa@example.com",
  "john@example.com",
  "emma@example.com",
  "david@example.com",
  "anna@example.com",
];

export default function ChatPage() {
  const [started, setStarted] = useState(false);

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submittedTicket, setSubmittedTicket] = useState<{
    title: string;
    email: string;
    body: string;
  } | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const { messages, sendMessage, addToolApprovalResponse, setMessages } =
    useChat<SupportAgentUIMessage>({
      transport: new DefaultChatTransport({
        api: "/api/demo/support/ticket",
      }),
      sendAutomaticallyWhen:
        lastAssistantMessageIsCompleteWithApprovalResponses,
    });

  const generateSampleTicket = () => {
    const sample =
      sampleTickets[Math.floor(Math.random() * sampleTickets.length)];
    const sampleEmail =
      sampleEmails[Math.floor(Math.random() * sampleEmails.length)];
    setTitle(sample.title);
    setBody(sample.body);
    setEmail(sampleEmail);
    setMessages([]);
    setStarted(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    setStarted(true);

    e.preventDefault();
    if (!title.trim() || !email.trim() || !body.trim()) return;

    // Store submitted ticket info and generate ticket ID
    setSubmittedTicket({ title, email, body });
    const newTicketId = generateTicketId();
    setTicketId(newTicketId);

    await sendMessage(
      {
        role: "user",
        parts: [
          {
            type: "text",
            text: `Support Ticket.

      Email: ${email}
      Title: ${title}
      Body: ${body}
       `,
          },
        ],
      },
      {
        body: { title, email, body },
      },
    );

    // Clear form after submission
    setTitle("");
    setEmail("");
    setBody("");
  };

  const createNewTicket = () => {
    setMessages([]);
    setStarted(false);
    setSubmittedTicket(null);
    setTicketId(null);
  };

  return (
    <div className="text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {!started && (
          <>
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="mb-4 font-bold font-mono text-5xl tracking-tight">
                Support Agent
              </h1>
              <p className="text-muted-foreground text-lg">
                Get AI-powered support for your Vercel and infrastructure
                questions
              </p>
            </div>

            <div className="mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block font-mono text-muted-foreground text-sm"
                  >
                    Title
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Brief description of your issue"
                      className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground backdrop-blur-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={generateSampleTicket}
                      className="inline-flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-3 text-purple-500 dark:text-purple-300 transition-colors hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      disabled={started}
                    >
                      <Sparkles className="h-4 w-4" />
                      Generate
                    </button>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-muted-foreground text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground backdrop-blur-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    required
                  />
                </div>

                {/* Body Field */}
                <div>
                  <label
                    htmlFor="body"
                    className="mb-2 block font-mono text-muted-foreground text-sm"
                  >
                    Description
                  </label>
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Please provide detailed information about your issue..."
                    rows={6}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground backdrop-blur-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={started}
                    className="rounded-lg border border-border bg-card px-8 py-4 font-medium font-mono text-lg text-foreground backdrop-blur-sm transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {started ? "Creating..." : "Create Ticket"}
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {submittedTicket && (
          <>
            {/* Inbox Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="font-bold font-mono text-3xl tracking-tight">
                  Support Inbox
                </h1>
                <p className="text-muted-foreground text-sm">
                  Ticket #{ticketId || "Processing..."}
                </p>
              </div>
            </div>

            {/* Conversation Thread */}
            <div className="mt-8 space-y-8">
              {/* Original Message */}
              <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                    <div className="font-mono text-blue-500 dark:text-blue-300 text-sm">
                      {submittedTicket.email.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {submittedTicket.email}
                    </div>
                    <div className="text-muted-foreground text-sm">User</div>
                  </div>
                </div>
                <div className="mb-2 font-medium text-foreground">
                  {submittedTicket.title}
                </div>
                <div className="whitespace-pre-wrap text-muted-foreground text-sm leading-relaxed">
                  {submittedTicket.body}
                </div>
              </div>
            </div>
          </>
        )}

        {started && messages.length === 0 && submittedTicket && (
          <div className="rounded-lg border border-border bg-muted/50 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"></div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Vercel Agent</div>
                <div className="text-muted-foreground text-sm">
                  Analyzing the support ticket...
                </div>
              </div>
            </div>
          </div>
        )}

        {messages.length > 0 && submittedTicket && (
          <div
            className={`mt-8 rounded-lg p-6 backdrop-blur-sm ${
              messages.some(
                (msg) =>
                  msg.role === "assistant" &&
                  msg.parts.some(
                    (part) =>
                      part.type === "tool-respondToTicketTool" &&
                      part.state === "output-available",
                  ),
              )
                ? "border border-green-500/30 bg-green-500/5"
                : "border border-border bg-card"
            }`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <div className="font-mono text-sm text-foreground">V</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Vercel Agent</div>
                <div className="text-muted-foreground text-sm">
                  Working on your request
                </div>
              </div>
            </div>

            <div className="ml-6 space-y-1">
              {messages.map((message) => (
                <div key={message.id}>
                  {message.role === "assistant" &&
                    message.parts.map((part, partIndex) => (
                      <div key={partIndex.toString()}>
                        {part.type === "tool-queryFAQTool" && (
                          <QueryFAQToolView invocation={part} />
                        )}

                        {part.type === "tool-askV0Tool" && (
                          <AskV0ToolView invocation={part} />
                        )}

                        {part.type === "tool-respondToTicketTool" && (
                          <>
                            <RespondToTicketToolView
                              invocation={part}
                              addToolApprovalResponse={addToolApprovalResponse}
                            />
                            {part.state === "output-available" &&
                              part.input?.content && (
                                <div className="-ml-6 mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                                  <div className="max-w-none text-green-700 dark:text-green-200 text-sm">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: part.input.content
                                          .replace(
                                            /```([\s\S]*?)```/g,
                                            "<pre><code>```$1```</code></pre>",
                                          )
                                          .replace(
                                            /`([^`]+)`/g,
                                            "<code>`$1`</code>",
                                          )
                                          .replace(
                                            /\[(.*?)\]\((.*?)\)/g,
                                            '<a href="$2" class="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 underline">$1</a>',
                                          )
                                          .replace(/\n/g, "<br>"),
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                          </>
                        )}

                        {part.type.startsWith("tool-") &&
                          !part.type.match(
                            /tool-(queryFAQTool|askV0Tool|respondToTicketTool)/,
                          ) && (
                            <div className="flex items-center gap-2 py-1">
                              <div className="text-green-500 dark:text-green-400">✓</div>
                              <div className="text-muted-foreground text-sm">
                                🛠️ {part.type.replace("tool-", "")}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {started && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={createNewTicket}
              className="rounded-lg border border-border bg-card px-8 py-4 font-medium font-mono text-lg text-foreground backdrop-blur-sm transition-all hover:bg-accent"
            >
              Create New Ticket
            </button>
          </div>
        )}

        {!started && (
          <div className="mt-24">
            <ToolsSection />
          </div>
        )}
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
          href="https://github.com/vercel-saleseng/demo/tree/main/apps/support-agent"
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
