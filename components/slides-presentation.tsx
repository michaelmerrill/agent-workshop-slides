"use client";

import type { ReactElement } from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import {
  SlideTitle,
  SlideAgenda,
  SlideWhatsNew,
  SlideAgentDiagram,
  SlidePerspectives,
  SlideAgentMaturity,
  SlideLLMInteractions,
  SlideAgentAbstraction,
  SlideBuildAgent,
  SlideUIIntegration,
  SlideStructuredOutput,
  SlideToolApproval,
  SlideDemo,
  SlideQuestions,
} from "@/components/slides";
import { Background } from "@/components/background";

interface Slide {
  id: number;
  content: ReactElement;
}

export function SlidesPresentation() {
  const [slides] = useState<Slide[]>([
    { id: 1, content: <SlideTitle /> },
    { id: 2, content: <SlideAgenda /> },
    { id: 3, content: <SlideWhatsNew /> },
    { id: 4, content: <SlideAgentDiagram /> },
    { id: 5, content: <SlidePerspectives /> },
    { id: 6, content: <SlideAgentMaturity /> },
    { id: 7, content: <SlideLLMInteractions /> },
    { id: 8, content: <SlideStructuredOutput /> },
    { id: 9, content: <SlideAgentAbstraction /> },
    { id: 10, content: <SlideBuildAgent /> },
    { id: 11, content: <SlideUIIntegration /> },
    { id: 13, content: <SlideToolApproval /> },
    { id: 14, content: <SlideDemo /> },
    { id: 15, content: <SlideQuestions /> },
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
    const slideContent = (
      <div
        ref={slideContainerRef}
        className="w-full aspect-[16/9] relative"
      >
        <Background slideNumber={currentSlide + 1} totalSlides={slides.length}>{slides[currentSlide].content}</Background>
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

          <button onClick={enterFullscreen} className="text-gray-400 hover:text-white transition-colors">
            <Maximize className="w-4 h-4" />
          </button>
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
    <div className="p-8 font-sans bg-black min-h-screen flex items-center justify-center">
      {/* Slide Container - Preview Mode */}
      <div className="w-full max-w-7xl rounded-lg overflow-hidden font-sans">
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
