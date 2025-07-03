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
    weddingDate: "March 15, 2024",
    location: "Goa Beach Resort",
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg",
    ],
  },
  {
    id: "pre2",
    title: "Beach Engagement",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    slug: "beach-engagement",
    weddingDate: "February 20, 2024",
    location: "Mumbai Coastline",
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501541/VS1_68_rvpn6k.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501542/VS1_72_uzlbd0.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501543/VS1_74_tfejme.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501544/VS1_78_es7hss.jpg",
    ],
  },
  {
    id: "pre3",
    title: "Garden Romance",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
    slug: "garden-romance",
    weddingDate: "January 10, 2024",
    location: "Udaipur Gardens",
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501109/_A2A6598_byfyow.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501109/_A2A6694_xhvb9x.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501109/_A2A7040_k5jcq6.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A7439_lchfpb.jpg",
    ],
  },
  {
    id: "pre4",
    title: "Urban Love Story",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg",
    slug: "urban-love-story",
    weddingDate: "December 5, 2023",
    location: "Delhi Urban Spaces",
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501474/_A2A6313_ghjcfj.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501474/_A2A6537_hgschs.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501474/_A2A6637_kzcgjx.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6515_sxspxz.jpg",
    ],
  },
]

const fashionData = [
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501474/_A2A6313_ghjcfj.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501541/VS1_68_rvpn6k.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501109/_A2A6598_byfyow.jpg",
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
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4">Our Gallery</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore our collection of captured moments across different photography styles
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-full p-1 sm:p-2 shadow-lg w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex gap-1 sm:gap-2">
              <Button
                onClick={() => setActiveCategory("wedding")}
                variant={activeCategory === "wedding" ? "default" : "ghost"}
                className={`rounded-full px-3 sm:px-6 py-2 transition-all text-sm sm:text-base flex-1 sm:flex-none ${
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
                className={`rounded-full px-3 sm:px-6 py-2 transition-all text-sm sm:text-base flex-1 sm:flex-none ${
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
                className={`rounded-full px-3 sm:px-6 py-2 transition-all text-sm sm:text-base flex-1 sm:flex-none ${
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
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light text-gray-800">
            {getCategoryTitle()}
          </h2>
        </div>

        {/* Gallery Grid */}
        {activeCategory === "fashion" ? (
          // Fashion - Direct Image Grid
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12">
            {currentData.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Fashion photography ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        ) : (
          // Wedding and Pre-Wedding - Card Layout
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {currentData.map((item) => (
              <div key={item.id} className="group transition-transform duration-300 hover:scale-105">
                <Link href={`/portfolio/${item.slug}`} className="block">
                  <div className="relative h-80 sm:h-96 lg:h-[400px] overflow-hidden rounded-lg mb-3 sm:mb-4 shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-playfair text-lg sm:text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <ContactSection data={siteData.contact} />
    </section>
  )
}
