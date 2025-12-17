"use client"

import type { ReactElement } from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

import { Slide01Title } from "./slides/slide-01-title"
import { Slide02Agenda } from "./slides/slide-02-agenda"
import { Slide03WhatsNew } from "./slides/slide-03-whats-new"
import { Slide04AgentAbstraction } from "./slides/slide-04-agent-abstraction"
import { Slide05BuildPerfectAgent } from "./slides/slide-05-build-perfect-agent"
import { Slide06SeamlessUI } from "./slides/slide-06-seamless-ui"
import { Slide07DynamicCallOptions } from "./slides/slide-07-dynamic-call-options"
import { Slide08StructuredOutput } from "./slides/slide-08-structured-output"
import { Slide09ToolApproval } from "./slides/slide-09-tool-approval"
import { Slide10Demo } from "./slides/slide-10-demo"
import { Slide11AdditionalFeatures } from "./slides/slide-11-additional-features"
import { Slide12Questions } from "./slides/slide-12-questions"

interface Slide {
  id: number
  title: string
  content: ReactElement
}

export function SlidesPresentation() {
  const [slides] = useState<Slide[]>([
    { id: 1, title: "Announcing AI SDK 6 Beta", content: <Slide01Title /> },
    { id: 2, title: "Today's Agenda", content: <Slide02Agenda /> },
    { id: 3, title: "What's New in AI SDK 6 Beta", content: <Slide03WhatsNew /> },
    { id: 4, title: "Agent Abstraction - Three Key Innovations", content: <Slide04AgentAbstraction /> },
    { id: 5, title: "Built for Your Opinions", content: <Slide05BuildPerfectAgent /> },
    { id: 6, title: "Seamless UI Integration", content: <Slide06SeamlessUI /> },
    { id: 7, title: "Configure Agents at Runtime", content: <Slide07DynamicCallOptions /> },
    { id: 8, title: "Structured Output - Now Production Ready", content: <Slide08StructuredOutput /> },
    { id: 9, title: "Human-in-the-Loop Made Easy", content: <Slide09ToolApproval /> },
    { id: 10, title: "Demo Time", content: <Slide10Demo /> },
    { id: 11, title: "Additional Features", content: <Slide11AdditionalFeatures /> },
    { id: 12, title: "Questions?", content: <Slide12Questions /> },
  ])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slideContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide, isFullscreen, slides.length])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      slideContainerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Slides</h2>
          <p className="text-sm text-gray-400">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                currentSlide === index ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-xs font-medium shrink-0">{index + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="relative w-full aspect-video bg-gray-900 rounded mb-2 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${index === 0 ? "/title.svg" : "/blank.svg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="relative h-full p-2 text-[6px] overflow-hidden">{slide.content}</div>
                  </div>
                  <p className="text-xs truncate">{slide.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative" ref={slideContainerRef}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${currentSlide === 0 ? "/title.svg" : "/blank.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative h-full p-16 overflow-auto">{slides[currentSlide].content}</div>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 border-t border-gray-700 p-4 flex items-center justify-between">
          <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <Button onClick={toggleFullscreen} variant="outline" size="sm">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>

          <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
