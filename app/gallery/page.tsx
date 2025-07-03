"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/config/portfolios"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

// Sample data for Pre-wedding and Fashion categories
const preWeddingData = [
  {
    id: "pre1",
    title: "Romantic Sunset Session",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    slug: "romantic-sunset-session",
  },
  {
    id: "pre2",
    title: "Beach Engagement",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    slug: "beach-engagement",
  },
  {
    id: "pre3",
    title: "Garden Romance",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
    slug: "garden-romance",
  },
  {
    id: "pre4",
    title: "Urban Love Story",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg",
    slug: "urban-love-story",
  },
]

const fashionData = [
  {
    id: "fashion1",
    title: "Editorial Elegance",
    category: "Fashion",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
    slug: "editorial-elegance",
  },
  {
    id: "fashion2",
    title: "Modern Minimalism",
    category: "Fashion",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
    slug: "modern-minimalism",
  },
  {
    id: "fashion3",
    title: "Vintage Glamour",
    category: "Fashion",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg",
    slug: "vintage-glamour",
  },
  {
    id: "fashion4",
    title: "Street Style",
    category: "Fashion",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
    slug: "street-style",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("wedding")

  const getPortfolioData = () => {
    switch (activeCategory) {
      case "wedding":
        return portfolioData.portfolios
      case "prewedding":
        return preWeddingData
      case "fashion":
        return fashionData
      default:
        return portfolioData.portfolios
    }
  }

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "wedding":
        return "Wedding Photography"
      case "prewedding":
        return "Pre-Wedding Sessions"
      case "fashion":
        return "Fashion Photography"
      default:
        return "Wedding Photography"
    }
  }

  const currentData = getPortfolioData()

  return (
    <section className="pt-20 bg-[#fdf5ec] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-light mb-4">Our Gallery</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of captured moments across different photography styles
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex gap-2">
              <Button
                onClick={() => setActiveCategory("wedding")}
                variant={activeCategory === "wedding" ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 transition-all ${
                  activeCategory === "wedding"
                    ? "bg-amber-700 text-white hover:bg-amber-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Wedding
              </Button>
              <Button
                onClick={() => setActiveCategory("prewedding")}
                variant={activeCategory === "prewedding" ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 transition-all ${
                  activeCategory === "prewedding"
                    ? "bg-amber-700 text-white hover:bg-amber-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Pre-Wedding
              </Button>
              <Button
                onClick={() => setActiveCategory("fashion")}
                variant={activeCategory === "fashion" ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 transition-all ${
                  activeCategory === "fashion"
                    ? "bg-amber-700 text-white hover:bg-amber-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Fashion
              </Button>
            </div>
          </div>
        </div>

        {/* Category Title */}
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-gray-800">{getCategoryTitle()}</h2>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="group w-full sm:w-[48%] lg:w-[22%] transition-transform duration-300 hover:scale-105"
            >
              {activeCategory === "wedding" ? (
                <Link href={`/portfolio/${item.slug}`} className="block">
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-4 shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-playfair text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </Link>
              ) : (
                <div className="block cursor-pointer">
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-4 shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-playfair text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </section>
  )
}
