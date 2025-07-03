import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import { portfolioData } from "@/config/portfolios"

// Pre-wedding data
const preWeddingData = [
  {
    id: "pre1",
    title: "Romantic Sunset Session",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    slug: "romantic-sunset-session",
    weddingDate: "March 15, 2024",
    location: "Goa Beach Resort",
    couple: "Kavya & Rohit",
    description:
      "A breathtaking pre-wedding session captured during the golden hour at Goa's pristine beaches. Kavya and Rohit's love story unfolds against the backdrop of endless ocean views and romantic sunsets.",
    story:
      "Kavya and Rohit chose the serene beaches of Goa for their pre-wedding shoot, wanting to capture their love story in a setting that reflected their free-spirited nature. The session began during the golden hour, with the couple walking hand-in-hand along the shoreline as waves gently lapped at their feet.",
    details: {
      location: "Goa Beach Resort",
      date: "March 15, 2024",
      duration: "4 hours",
      outfits: "3 outfit changes",
    },
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
    couple: "Ananya & Karan",
    description:
      "An enchanting engagement session along Mumbai's scenic coastline, capturing the couple's playful spirit and deep connection against the dramatic backdrop of crashing waves.",
    story:
      "Ananya and Karan's engagement session was a celebration of their adventurous love story. Set against Mumbai's rugged coastline, the shoot captured their playful banter and tender moments.",
    details: {
      location: "Mumbai Coastline",
      date: "February 20, 2024",
      duration: "3 hours",
      outfits: "2 outfit changes",
    },
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501541/VS1_68_rvpn6k.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501542/VS1_72_uzlbd0.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501543/VS1_74_tfejme.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501544/VS1_78_es7hss.jpg",
    ],
  },
]

// Combine all portfolio data
const allPortfolios = [...portfolioData.portfolios, ...preWeddingData]

export default function PortfolioPage({ params }: { params: { slug: string } }) {
  const portfolio = allPortfolios.find((p) => p.slug === params.slug)

  if (!portfolio) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={portfolio.image || "/placeholder.svg"}
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

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
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

            {/* Image Gallery */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-playfair text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-stone-800">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {portfolio.images?.map((image, index) => (
                  <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${portfolio.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-24">
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-stone-800">
                Session Details
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center text-stone-600">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-amber-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{portfolio.location}</span>
                </div>

                <div className="flex items-center text-stone-600">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-amber-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{portfolio.weddingDate || portfolio.details?.date}</span>
                </div>

                {portfolio.details?.duration && (
                  <div className="flex items-center text-stone-600">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-amber-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{portfolio.details.duration}</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-medium mb-3 sm:mb-4 text-stone-800 text-sm sm:text-base">
                  Ready to capture your story?
                </h4>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-sm sm:text-base">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
