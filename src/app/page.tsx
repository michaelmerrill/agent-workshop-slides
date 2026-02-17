"use client";

import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import TitleSlide from "@/components/slides/title-slide";
import AgendaSlide from "@/components/slides/agenda-slide";
import AiCloudPrimitivesSlide from "@/components/slides/ai-cloud-primitives-slide";
import AiSdkSlide from "@/components/slides/ai-sdk-slide";
import AgentDefinitionSlide from "@/components/slides/agent-definition-slide";
import AgentDiagramSlide from "@/components/slides/agent-diagram-slide";
import AgentPerspectivesSlide from "@/components/slides/agent-perspectives-slide";
import AgentMaturitySlide from "@/components/slides/agent-maturity-slide";
import LLMInteractionsSlide from "@/components/slides/llm-interactions-slide";
import StructuredOutputSlide from "@/components/slides/structured-output-slide";
import AgentAbstractionSlide from "@/components/slides/agent-abstraction-slide";
import ComposableArchitectureSlide from "@/components/slides/composable-architecture-slide";
import UIIntegrationSlide from "@/components/slides/ui-integration-slide";
import ToolApprovalSlide from "@/components/slides/tool-approval-slide";
import DemoSlide from "@/components/slides/demo-slide";
import QASlide from "@/components/slides/qa-slide";

const slides = [
  { component: TitleSlide, title: "Title" },
  { component: AgendaSlide, title: "Agenda" },
  { component: AgentDefinitionSlide, title: "Agent Definition" },
  { component: AgentDiagramSlide, title: "Agent Diagram" },
  { component: AgentPerspectivesSlide, title: "Agent Perspectives" },
  { component: AgentMaturitySlide, title: "Agent Maturity" },
  { component: AiCloudPrimitivesSlide, title: "AI Cloud Primitives" },
  { component: AiSdkSlide, title: "AI SDK" },
  { component: LLMInteractionsSlide, title: "LLM Interactions" },
  { component: StructuredOutputSlide, title: "Structured Output" },
  { component: AgentAbstractionSlide, title: "Agent Abstraction" },
  { component: ComposableArchitectureSlide, title: "Composable Architecture" },
  { component: UIIntegrationSlide, title: "UI Integration" },
  { component: ToolApprovalSlide, title: "Tool Approval" },
  { component: DemoSlide, title: "Demo" },
  { component: QASlide, title: "Q&A" },
];

// slide dimensions (1.8:1 aspect ratio)
const SLIDE_WIDTH = 1800;
const SLIDE_HEIGHT = 1000;

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideScale, setSlideScale] = useState(1);
  const presentationRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // calculate scale to fit slide in viewport
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const calculateScale = () => {
      const availableWidth = wrapper.offsetWidth;
      const availableHeight = wrapper.offsetHeight;
      if (availableWidth === 0 || availableHeight === 0) return;
      const scaleX = availableWidth / SLIDE_WIDTH;
      const scaleY = availableHeight / SLIDE_HEIGHT;
      setSlideScale(Math.min(scaleX, scaleY) * 0.98);
    };

    const resizeObserver = new ResizeObserver(calculateScale);
    resizeObserver.observe(wrapper);
    calculateScale();

    return () => resizeObserver.disconnect();
  }, [isFullscreen]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      presentationRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNextSlide();
      else if (e.key === "ArrowLeft") goToPrevSlide();
      else if (e.key === "f") toggleFullscreen();
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#18181b]">
      <div
        className="flex h-full w-full flex-col px-1 py-2 sm:px-4"
        ref={presentationRef}
      >
        <div
          ref={wrapperRef}
          className="flex flex-1 items-center justify-center overflow-hidden"
        >
          <div
            className="relative overflow-hidden rounded-lg bg-black shadow-2xl"
            style={{
              width: Math.floor(SLIDE_WIDTH * slideScale),
              height: Math.floor(SLIDE_HEIGHT * slideScale),
            }}
          >
            {/* scaled slide - renders at 1800x1000 then scales to fit */}
            <div
              className="absolute origin-top-left"
              style={{
                width: `${SLIDE_WIDTH}px`,
                height: `${SLIDE_HEIGHT}px`,
                transform: `scale(${slideScale})`,
              }}
            >
              <CurrentSlideComponent />
            </div>
          </div>
        </div>

        {!isFullscreen && (
          <div className="mt-2 grid w-full grid-cols-3 items-center gap-2 sm:mt-4">
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="hidden rounded-full bg-[#18181b] p-1.5 text-zinc-200 hover:bg-zinc-700 sm:block sm:p-2"
                aria-label="Toggle fullscreen"
              >
                <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={goToPrevSlide}
                disabled={currentSlide === 0}
                className="rounded-full bg-[#18181b] p-1.5 text-zinc-200 hover:bg-zinc-700 disabled:opacity-50 sm:p-2"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                type="button"
                onClick={goToNextSlide}
                disabled={currentSlide === slides.length - 1}
                className="rounded-full bg-[#18181b] p-1.5 text-zinc-200 hover:bg-zinc-700 disabled:opacity-50 sm:p-2"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="flex justify-end text-xs text-zinc-400 sm:text-sm">
              {currentSlide + 1}/{slides.length}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
