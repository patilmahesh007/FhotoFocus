"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface HeroProps {
  image: string
  alt: string
  title?: string
  subtitle?: string
}

export default function Hero({ image, alt, title, subtitle }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover object-center filter brightness-50"
          priority
          quality={95}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">
          {title && (
            <h1 className="font-playfair1 text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-wide">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl font-light tracking-wider opacity-90">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="text-white hover:text-gray-300 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
