import { FAQAccordion } from "./faq-accordion";
import { V0Accordion } from "./v0-accordion";

export function ToolsSection() {
  return (
    <div className="rounded-lg border border-border bg-card backdrop-blur-sm">
      <div className="p-6 pb-4">
        <div className="mb-4 font-mono font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Support Tools
        </div>
      </div>

      <div className="px-6 pb-6">
        <FAQAccordion />
        <V0Accordion />
      </div>
    </div>
  );
}
