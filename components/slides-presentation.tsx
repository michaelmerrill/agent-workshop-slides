"use client";

import React from "react";

import type { ReactElement } from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import {
  Slide01Title,
  Slide02Agenda,
  Slide03WhatsNew,
  Slide03bAgentDiagram,
  Slide04bPerspectives,
  Slide03cAgentMaturity,
  Slide04AgentAbstraction,
  Slide05BuildAgent,
  Slide06UIIntegration,
  Slide07DynamicOptions,
  Slide08StructuredOutput,
  Slide09ToolApproval,
  Slide10Demo,
  Slide12Questions,
} from "@/components/slides";

interface Slide {
  id: number;
  title: string;
  content: ReactElement;
}

export function SlidesPresentation() {
  const [slides] = useState<Slide[]>([
    { id: 1, title: "Build an Agent with Vercel", content: <Slide01Title /> },
    { id: 2, title: "Agenda", content: <Slide02Agenda /> },
    {
      id: 3,
      title: "What is an Agent",
      content: <Slide03WhatsNew />,
    },
    { id: 4, title: "Agent Diagram", content: <Slide03bAgentDiagram /> },
    { id: 5, title: "Perspectives", content: <Slide04bPerspectives /> },
    { id: 6, title: "Agent Maturity", content: <Slide03cAgentMaturity /> },
    { id: 7, title: "Agent Abstraction", content: <Slide04AgentAbstraction /> },
    {
      id: 8,
      title: "Build Your Perfect Agent",
      content: <Slide05BuildAgent />,
    },
    {
      id: 9,
      title: "Seamless UI Integration",
      content: <Slide06UIIntegration />,
    },
    {
      id: 10,
      title: "Dynamic Call Options",
      content: <Slide07DynamicOptions />,
    },
    {
      id: 11,
      title: "Structured Output (stable)",
      content: <Slide08StructuredOutput />,
    },
    {
      id: 12,
      title: "Tool Execution Approval",
      content: <Slide09ToolApproval />,
    },
    { id: 13, title: "Demo", content: <Slide10Demo /> },
    { id: 14, title: "Questions?", content: <Slide12Questions /> },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slideContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, isFullscreen, slides.length]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const enterFullscreen = () => {
    setIsFullscreen(true);
  };

  const renderSlide = () => {
    const getBackgroundImage = () => {
      if (currentSlide === 0) return "/title.svg";
      if (currentSlide === 1) return "/agenda.svg";
      if (currentSlide === 5) return "/agent-maturity.svg";
      return "/blank.svg";
    };

    const slideContent = (
      <div
        ref={slideContainerRef}
        className="w-full aspect-[16/9] relative"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Area */}
        <div className="absolute inset-0 p-24">
          <div className="w-full h-full p-16 relative">
            {slides[currentSlide].content}
          </div>
        </div>

        {isFullscreen && slides.length > 1 && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index} // Added key property
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );

    if (isFullscreen) {
      return slideContent;
    }

    return (
      <div className="rounded-lg p-1 shadow-lg bg-neutral-900">
        {/* Browser Chrome */}
        <div className="rounded-t-lg px-4 py-3 flex items-center gap-3 border-b bg-neutral-900 border-neutral-900">
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="rounded-md px-3 py-1 text-sm text-gray-300 border border-neutral-700 bg-neutral-900">
              vercel.com/slides/presentation
            </div>
          </div>

          {/* Browser Menu Button */}
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-gray-900 rounded-b-lg overflow-hidden">
          {slideContent}
        </div>
      </div>
    );
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center font-sans">
        <div className="w-full h-full max-w-none">{renderSlide()}</div>
      </div>
    );
  }

  return (
    <div className="p-8 font-sans bg-black min-h-screen">
      {/* Header Controls */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between font-sans">
        <div className="flex items-center gap-4 font-sans"></div>
        <div className="flex items-center gap-4 font-sans">
          <span className="text-sm text-gray-300 font-sans">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={enterFullscreen} size="sm">
            <Maximize className="w-4 h-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      {/* Slide Container - Preview Mode */}
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden font-sans">
        {renderSlide()}
      </div>

      {!isFullscreen && slides.length > 1 && (
        <>
          {/* Left Arrow */}
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="secondary"
              size="sm"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Arrow */}
          <div className="fixed right-8 top-1/2 transform translate-y-8 z-30">
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="secondary"
              size="sm"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
