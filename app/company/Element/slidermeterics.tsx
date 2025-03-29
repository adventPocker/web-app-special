"use client"

import type React from "react"
import { useRef } from "react"

const StatsSection = () => {
  const stats = [
    { number: "10", label: "Years", hasPlus: false },
    { number: "10", label: "Movies", hasPlus: true },
    { number: "10", label: "Awards", hasPlus: true },
    { number: "100", label: "Artist Collaboration", hasPlus: true },
    { number: "10", label: "Film Makers", hasPlus: true },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle drag scrolling for touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    const slider = sliderRef.current
    if (!slider) return

    const startX = e.touches[0].clientX
    const scrollLeft = slider.scrollLeft

    const handleTouchMove = (e: TouchEvent) => {
      if (!slider) return
      const x = e.touches[0].clientX
      const walk = (x - startX) * 2 // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }

    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)
  }
  const gradientTextStyle = {
    background:
      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="w-full pt-[70px] pb-12  e overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile slider view */}
        <div
          ref={sliderRef}
          className="md:hidden flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
        >
          <div className="flex space-x-8 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex-none w-[160px] flex flex-col items-center snap-center">
                <h3 className="text-[#FDB478] text-4xl font-light mb-2">
                  {stat.number}
                  {stat.hasPlus && <span>+</span>}
                </h3>
                <p className="text-[#FDB478] text-xl font-light whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className=" text-4xl font-light mb-2 font-ClashGrotesk-Medium" style={gradientTextStyle}>
                {stat.number}
                {stat.hasPlus && <span>+</span>}
              </h3>
              <p className=" text-xl font-medium font-ClashGrotesk-Medium" style={gradientTextStyle}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

