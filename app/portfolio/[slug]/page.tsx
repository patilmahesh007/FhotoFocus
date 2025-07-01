'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { portfolioData } from '@/config/portfolios'
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"
export default function WeddingPortfolioPage() {
  const { slug } = useParams()
  const portfolio = portfolioData.portfolios.find((p) => p.slug === slug)

  // Commented out music player state
  // const [isPlaying, setIsPlaying] = useState(false)
  // const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  // Commented out effect that initializes and plays audio
  /*
  useEffect(() => {
    if (!portfolio?.audio) return

    const audioElement = new Audio(portfolio.audio)
    audioElement.loop = false
    setAudio(audioElement)

    // Play audio automatically on load
    audioElement.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false)) // Autoplay might fail in some browsers

    audioElement.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audioElement.pause()
      audioElement.removeEventListener('ended', () => {})
    }
  }, [portfolio])
  */

  // Commented out togglePlay function
  /*
  const togglePlay = () => {
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }
  */

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-stone-800 mb-4">Wedding Not Found</h1>
          <p className="text-stone-600">The wedding portfolio you're looking for doesn’t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        .couple-name {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .elegant-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      {/* Commented out Floating Play Button */}
      {/*
      {portfolio.audio && (
        <button
          onClick={togglePlay}
          className="fixed top-16 right-4 md:top-20 md:right-16 lg:top-24 lg:right-44 z-50 w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-all duration-300 shadow-lg"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? (
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-white" />
              <div className="w-1 h-4 bg-white" />
            </div>
          ) : (
            <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
          )}
        </button>
      )}
      */}

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Gallery */}
        <div className="columns-1 md:columns-2 gap-4 mb-16">
          {portfolio.images.map((img, index) => {
            const src = typeof img === 'string' ? img : img.src
            return (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md border border-stone-200"
              >
                <Image
                  src={src}
                  alt={`Wedding photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}
        </div>
      </div>
      <ContactSection data={siteData.contact} />

    </div>
  )
}
