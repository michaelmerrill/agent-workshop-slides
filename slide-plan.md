# AI SDK 6 Beta - Slide Deck Structure

## Slide 1: Title Slide

**Title:** Announcing AI SDK 6 Beta
**Subtitle:** Building Production-Ready AI Agents
**Speaker:** Nico Albanese, AI SDK @ Vercel

---

## Slide 2: Agenda

**Title:** Today's Agenda

- AI SDK 6 Beta Overview
  - Agent Abstraction
  - Tool Execution Approval
- Deep Dive Demo
- Additional Features
  - Image Editing Support
  - Reranking Support
- Q&A

---

## Slide 3: AI SDK 6 Beta - What's Shipping

**Title:** What's New in AI SDK 6 Beta

**Key Points:**

- **Agent Abstraction** - Flexible interface for building agents
- **Tool Execution Approval** - Human-in-the-loop workflows
- **Structured Output (Stable)** - Structured outputs with tool-calling
- **Reranking Support** - Improved search relevance
- **Image Editing Support** - Coming soon

**Note:** Beta available now • Stable release end of 2025

---

## Slide 4: Agent Abstraction

**Title:** Agent Abstraction - Three Key Innovations

**Visual Layout:** Three columns

**Column 1: Flexible Interface**

- `Agent` is an interface, not a class
- Build custom implementations
- Full control over execution flow

**Column 2: Production-Ready Default**

- `ToolLoopAgent` out of the box
- Automatic tool execution loop (with control - `prepareStep`, `stopWhen`)
- Sensible defaults (20 step limit)

**Column 3: Composable Architecture**

- Mix and match patterns
- Orchestrators and sub-agents
- Memory layers and custom logic

---

## Slide 5: Flexible Abstraction Philosophy

**Title:** Built for Your Opinions

**Main Message:**
"We provide the flexible abstraction. You bring your architectural opinions."

**Visual Layout:** Center focus with surrounding examples

**Center:**

\`\`\`typescript
// Build your own multi-agent orchestrator
class Orchestrator implements Agent {
  constructor(private subAgents: Record<string, Agent>) {}
  
  async generate(options) { /* your logic */ }
  
  async stream(options) { /* your logic */ }
}

const orchestrator = new Orchestrator({
  subAgents: { /* your subagents */ }
});
\`\`\`

**Surrounding Examples (in circles/boxes):**

**Top Left:** ToolLoopAgent (Default)

- Simple tool calling loop
- Great for most use cases

**Top Right:** Custom Orchestrator

- Multi-agent coordination
- Specialist delegation

**Bottom Left:** Memory-Enhanced Agent

- Persistent context
- Learning over time

**Bottom Right:** DurableAgent

- Workflow DevKit integration
- Built by the Workflow team
- Interruption & resumption

**Footer Note:** "Build on the abstraction that fits your needs"

---

## Slide 6: UI Integration & Type Safety

**Title:** Seamless UI Integration

**Main Message:**
"Any agent that satisfies the interface works with AI SDK UI — fully type-safe."

**Visual Layout:** Flow diagram

**Left Side: Backend**

\`\`\`typescript
// Your custom agent
class MyCustomAgent implements Agent {
  // Your implementation
}

// Works with createAgentUIStreamResponse
export async function POST(req: Request) {
  return createAgentUIStreamResponse({
    agent: myCustomAgent,
    messages,
  });
}
\`\`\`

**Right Side: Frontend**

\`\`\`typescript
// Type-safe on the client
import { InferAgentUIMessage } from "ai";

type MyAgentMessage = InferAgentUIMessage<typeof myCustomAgent>;

const { messages } = useChat<MyAgentMessage>();
// Full autocomplete and type safety!
\`\`\`

**Bottom Banner:**
"Build your agent once, use it everywhere with full type safety"

---

## Slide 7: Dynamic Call Options

**Title:** Configure Agents at Runtime

**Main Feature:**
Type-safe structured inputs that dynamically modify agent behavior

**Code Example:**

\`\`\`typescript
const supportAgent = new ToolLoopAgent({
  model: 'anthropic/claude-haiku-4.5',
  callOptionsSchema: z.object({
    userId: z.string(),
    accountType: z.enum(["free", "pro", "enterprise"]),
  }),
  prepareCall: ({ options, ...settings }) => ({
    ...settings,
    instructions:
      settings.instructions +
      `\nUser: ${options.userId}
       Account: ${options.accountType}`,
  }),
});

// Type-safe and required!
await supportAgent.generate({
  prompt: "How do I upgrade?",
  options: { userId: "user_123", accountType: "free" },
});
\`\`\`

**Benefits:**

- Add dynamic context (RAG, user data)
- Select models at runtime
- Configure tools per request
- Provider-specific settings

---

## Slide 8: Structured Output (Stable)

**Title:** Structured Output - Now Production Ready

**Main Points:**

**What Changed:**

- Previously: Only `generateObject` / `streamObject` (no tools)
- Now: `ToolLoopAgent` combines both

**Code Example:**

\`\`\`typescript
const agent = new ToolLoopAgent({
  model: 'anthropic/claude-haiku-4.5',
  tools: { weather: weatherTool },
  output: Output.object({
    schema: z.object({
      summary: z.string(),
      temperature: z.number(),
      recommendation: z.string(),
    }),
  }),
});
\`\`\`

**Result:** Multi-step tool calling + structured output

---

## Slide 9: Tool Execution Approval

**Title:** Human-in-the-Loop Made Easy

**Visual Layout:** Two-column

**Left Column: Enable Approval**

\`\`\`typescript
export const paymentTool = tool({
  description: "Process payment",
  inputSchema: z.object({
    amount: z.number(),
    recipient: z.string(),
  }),
  // Dynamic approval logic
  needsApproval: async ({ amount }) => amount > 1000,
  execute: async ({ amount, recipient }) => {
    return await processPayment(amount, recipient);
  },
});
\`\`\`

**Right Column: Key Features**

- Infrastructure agnostic
- Dynamic conditions
- Pause before execution
- Full control over approval flow

**Bottom Banner:**
"Perfect for high-stakes operations: payments, deletions, external API calls"

---

## Slide 10: Demo Transition

**Title:** Let's See It In Action

**Visual:** Large centered text
"Demo Time"

**Subtitle:** Building an agent with tool approval

---

## Slide 11: What Else We're Shipping

**Title:** Additional Features

**Visual Layout:** Two-column cards

**Left Card: Reranking Support**

- Improve search relevance (great for RAG)
- Specialized reranking models
- Better than embedding similarity
- Providers: Cohere, Amazon Bedrock, Together.ai

**Right Card: Image Editing Support**

- Image-to-image transformations
- Multi-modal editing
- Text-prompted modifications
- Coming soon

---

## Slide 12: Q&A

**Title:** Questions?

**Visual:**

- Large Q&A text centered
- Links below:
  - Documentation: sdk.vercel.ai
  - GitHub: github.com/vercel/ai
  - Feedback: github.com/vercel/ai/issues

**Footer:**
AI SDK 6 Beta available now • Stable release end of 2025

---

## Design Notes:

**Overall Style:**

- Clean, minimal design
- Use Vercel brand colors (black, white, accent colors)
- Code snippets with syntax highlighting
- Consistent font hierarchy (titles bold, body text regular)

**Typography:**

- Titles: Large, bold, sentence case
- Body: Clear, readable size
- Code: Monospace, adequate contrast

**Visual Elements:**

- Use iconography for key features
- Diagrams for architectural concepts
- Highlight boxes for important notes
- Progress indicators if needed

This structure provides a clear narrative arc: introduce the features, dive deep into each one, demonstrate with a demo, showcase additional features, and close with Q&A.
