'use client'

import React from 'react'
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { portfolioData } from "@/config/portfolios"

// Pre-wedding data
const preWeddingData = [
  {
    id: "pre1",
    title: "Romantic Sunset Session",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047872/IMG_0320_luhtpm.jpg",
    slug: "romantic-sunset-session",
    weddingDate: "March 15, 2024",
    location: "Goa Beach Resort",
    couple: "jenith & jindal",
    description: "A breathtaking pre-wedding session captured during the golden hour at Goa's pristine beaches...",
    story: "jenith and jindal chose the serene beaches of Goa...",
    details: {
      location: "Goa Beach Resort",
      date: "March 15, 2024",
      duration: "4 hours",
      outfits: "3 outfit changes",
    },
    images: [ /* ...image URLs... */ ],
  },
  // ... other preWeddingData items ...
]

// Combine all portfolio data
const allPortfolios = [...portfolioData.portfolios, ...preWeddingData]

export default function PortfolioPage(props: { params: Promise<{ slug: string }> }) {
  // unwrap params
  const { slug } = React.use(props.params)
  const portfolio = allPortfolios.find((p) => p.slug === slug)

  if (!portfolio) {
    notFound()
  }

  // Prepare columns for masonry layout
  const col1: string[] = []
  const col2: string[] = []
  const col3: string[] = []
  portfolio.images?.forEach((img, index) => {
    const src = typeof img === 'string' ? img : img.src
    if (index % 3 === 0) col1.push(src)
    else if (index % 3 === 1) col2.push(src)
    else col3.push(src)
  })

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={portfolio.image2 || "/placeholder.svg"}
          alt={portfolio.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
          <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2">
            {portfolio.couple || portfolio.title}
          </h1>
          <p className="text-lg sm:text-xl opacity-90">{portfolio.category}</p>
        </div>

        <Link
          href="/gallery"
          className="absolute top-4 sm:top-8 left-4 sm:left-8 text-white hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>

      {/* Main Container */}
      <div className="mx-auto w-full lg:w-[95vw] px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 w-full">
            {/* Story Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-playfair text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-stone-800">The Story</h2>
              <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {portfolio.description}
              </p>
              {portfolio.story && (
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">{portfolio.story}</p>
              )}
            </div>

            {/* Image Gallery (Masonry) */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-playfair text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-stone-800">Gallery</h2>

              {/* Mobile View */}
              <div className="block md:hidden space-y-[15px]">
                {portfolio.images.map((image, idx) => (
                  <div key={idx} className="w-full">
                    <Image
                      src={typeof image === 'string' ? image : image.src}
                      alt={`${portfolio.title} - Image ${idx + 1}`}
                      width={800}
                      height={0}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      priority={idx < 2}
                    />
                  </div>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                {/* Column 1 */}
                <div className="flex flex-col gap-[15px]">
                  {col1.map((src, i) => (
                    <Image
                      key={`col1-${i}`}
                      src={src}
                      alt={`${portfolio.title} - col1 image ${i + 1}`}
                      width={800}
                      height={0}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      priority={i < 2}
                    />
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-[15px]">
                  {col2.map((src, i) => (
                    <Image
                      key={`col2-${i}`}
                      src={src}
                      alt={`${portfolio.title} - col2 image ${i + 1}`}
                      width={800}
                      height={0}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  ))}
                </div>

                {/* Column 3 */}
                <div className="hidden lg:flex flex-col gap-[15px]">
                  {col3.map((src, i) => (
                    <Image
                      key={`col3-${i}`}
                      src={src}
                      alt={`${portfolio.title} - col3 image ${i + 1}`}
                      width={800}
                      height={0}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
