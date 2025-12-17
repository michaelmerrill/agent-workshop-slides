"use client"

import React from "react"

import type { ReactElement } from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

import {
  Slide01Title,
  Slide02Agenda,
  Slide03WhatsNew,
  Slide04AgentAbstraction,
  Slide05BuildAgent,
  Slide06UIIntegration,
  Slide07DynamicOptions,
  Slide08StructuredOutput,
  Slide09ToolApproval,
  Slide10Demo,
  Slide11AdditionalFeatures,
  Slide12Questions,
} from "@/components/slides"

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
    { id: 4, title: "Agent Abstraction", content: <Slide04AgentAbstraction /> },
    { id: 5, title: "Build Your Perfect Agent", content: <Slide05BuildAgent /> },
    { id: 6, title: "Seamless UI Integration", content: <Slide06UIIntegration /> },
    { id: 7, title: "Dynamic Call Options", content: <Slide07DynamicOptions /> },
    { id: 8, title: "Structured Output (stable)", content: <Slide08StructuredOutput /> },
    { id: 9, title: "Tool Execution Approval", content: <Slide09ToolApproval /> },
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

  const enterFullscreen = () => {
    setIsFullscreen(true)
  }

  const renderSlideContent = (slide: Slide, isEditable = false) => {
    const disableEditing = (element: ReactElement): ReactElement => {
      if (!React.isValidElement(element)) return element

      const props: any = { ...element.props }

      // Remove contentEditable and related editing props for text elements
      if (props.contentEditable) {
        props.contentEditable = false
        props.suppressContentEditableWarning = false
        // Remove hover effects and cursor styles used for editing
        if (props.className) {
          props.className = props.className.replace("cursor-text", "").replace("hover:bg-white/10", "")
        }
      }

      // Recursively process children
      if (props.children) {
        if (Array.isArray(props.children)) {
          props.children = props.children.map((child: any) =>
            React.isValidElement(child) ? disableEditing(child) : child,
          )
        } else if (React.isValidElement(props.children)) {
          props.children = disableEditing(props.children)
        }
      }

      return React.cloneElement(element, props)
    }

    if (isFullscreen) {
      return disableEditing(slide.content)
    }

    return slide.content
  }

  const renderSlide = () => {
    const slideContent = (
      <div
        ref={slideContainerRef}
        className="w-full aspect-[16/9] relative"
        style={{
          backgroundImage: `url(${currentSlide === 0 ? "/title.svg" : "/blank.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Area */}
        <div className="absolute inset-0 p-24">
          <div className="w-full h-full p-16 relative">{renderSlideContent(slides[currentSlide], !isFullscreen)}</div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index} // Added key property
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )

    if (isFullscreen) {
      return slideContent
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
        <div className="bg-gray-900 rounded-b-lg overflow-hidden">{slideContent}</div>
      </div>
    )
  }

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center font-sans">
        <div className="w-full h-full max-w-none">{renderSlide()}</div>
      </div>
    )
  }

  return (
    <div className="p-8 font-sans bg-black min-h-screen">
      {/* Header Controls */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between font-sans">
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
      <div className="max-w-6xl mx-auto rounded-lg overflow-hidden font-sans">{renderSlide()}</div>

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

      {!isFullscreen && (
        <div className="fixed left-4 top-8 z-30">
          <button></button>
        </div>
      )}

      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">My Slide Deck</h3>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id} // Added key property
              onClick={() => setCurrentSlide(index)}
              className={`aspect-[16/9] rounded-lg cursor-pointer border-2 transition-colors ${
                index === currentSlide ? "border-blue-500 bg-blue-500/10" : "border-gray-700 hover:border-gray-500"
              }`}
            >
              <div
                className="w-full h-full rounded-lg relative overflow-hidden"
                style={{
                  backgroundImage: `url(${index === 0 ? "/title.svg" : "/blank.svg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 p-2 flex items-center justify-center">
                  <div className="text-xs text-white text-center font-bold">{slide.title}</div>
                </div>
              </div>
              <div className="text-xs text-gray-200 mt-1 text-center">Slide {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
