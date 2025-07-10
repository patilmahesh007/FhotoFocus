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
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047872/IMG_0320_luhtpm.jpg",
    slug: "romantic-sunset-session",
    weddingDate: "March 15, 2024",
    location: "Goa Beach Resort",
    couple: "jenith & jindal",
    description:
      "A breathtaking pre-wedding session captured during the golden hour at Goa's pristine beaches. jindal and jindal's love story unfolds against the backdrop of endless ocean views and romantic sunsets.",
    story:
      "jenith and jindal chose the serene beaches of Goa for their pre-wedding shoot, wanting to capture their love story in a setting that reflected their free-spirited nature. The session began during the golden hour, with the couple walking hand-in-hand along the shoreline as waves gently lapped at their feet.",
    details: {
      location: "Goa Beach Resort",
      date: "March 15, 2024",
      duration: "4 hours",
      outfits: "3 outfit changes",
    },
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047897/IMG_0343_e5izfx.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047895/IMG_0342_tesqlm.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047891/IMG_0340_2_1_qqrpdm.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047890/IMG_0339_jyjmvf.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047888/IMG_0337_qadnsa.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047886/IMG_0335_xt9ik1.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047884/IMG_0333_nutpg9.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047883/IMG_0332_utcxx1.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047875/IMG_0324_tn0h8y.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047876/IMG_0325_holemv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047878/IMG_0327_h0j2dm.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047871/IMG_0318_ehwhcq.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047868/IMG_0316_wbrtss.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047864/IMG_0313_q7j0jp.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047873/IMG_0322_jj1jtu.jpg"
    ],
  },
  {
    id: "pre2",
    title: "Beach Engagement",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047846/IMG_0297_z0axal.jpg",
    slug: "beach-engagement",
    weddingDate: "February 20, 2024",
    location: "Mumbai Coastline",
    couple: "Raj & Saloni",
    description:
      "An enchanting engagement session along Mumbai's scenic coastline, capturing the couple's playful spirit and deep connection against the dramatic backdrop of crashing waves.",
    story:
      "Raj and Saloni's engagement session was a celebration of their adventurous love story. Set against Mumbai's rugged coastline, the shoot captured their playful banter and tender moments.",
    details: {
      location: "Mumbai Coastline",
      date: "February 20, 2024",
      duration: "3 hours",
      outfits: "2 outfit changes",
    },
    images: [
       "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047861/IMG_0311_gx6tji.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047859/IMG_0310_vsrl50.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047858/IMG_0309_p6f5qv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047857/IMG_0308_armoz5.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047862/IMG_0312_zhnz5z.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047856/IMG_0307_jjazsf.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047854/IMG_0305_kz4gkl.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047853/IMG_0304_snvgzw.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047852/IMG_0303_b4azna.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047851/IMG_0302_ssnon1.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047850/IMG_0301_cqfmjv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047849/IMG_0300_fogj9y.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047847/IMG_0298_xmfwsu.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047846/IMG_0297_z0axal.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047848/IMG_0299_jhfmza.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047845/IMG_0296_ft7zwd.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047844/IMG_0295_yd82qz.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047843/IMG_0294_v0pj9c.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047838/IMG_0289_fdlxzl.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047836/IMG_0288_pa9e0i.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047834/IMG_0286_picl0w.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047831/IMG_0283_akaeyn.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047831/IMG_0284_oeqt0n.jpg"
    ],
  },
  {
    id: "pre3",
    title: "Beach Engagement",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047543/IMG_0351_qqzdyw.jpg",
    slug: "garden-romance",
    weddingDate: "February 20, 2024",
    location: "Mumbai Coastline",
    couple: "Anjali & Praful",
    description:
      "An enchanting engagement session along Mumbai's scenic coastline, capturing the couple's playful spirit and deep connection against the dramatic backdrop of crashing waves.",
    story:
      "Anjali and Praful's engagement session was a celebration of their adventurous love story. Set against Mumbai's rugged coastline, the shoot captured their playful banter and tender moments.",
    details: {
      location: "Mumbai Coastline",
      date: "February 20, 2024",
      duration: "3 hours",
      outfits: "2 outfit changes",
    },
    images: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047566/IMG_0385_lagf2u.webp",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047565/IMG_0383_yhzxvt.webp",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047564/IMG_0381_x9vroz.webp",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047563/IMG_0380_guuror.webp",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047560/IMG_0373_zaj0km.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047560/IMG_0372_amkxnv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047561/IMG_0374_aejxe2.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047562/IMG_0379_lj2j5g.webp",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047558/IMG_0371_qi5icq.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047557/IMG_0370_tueqlq.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047556/IMG_0367_jvjgoj.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047554/IMG_0365_ika3nk.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047556/IMG_0369_mtgnq8.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047555/IMG_0366_fyub0e.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047552/IMG_0363_smxfmh.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047549/IMG_0359_mytx70.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047546/IMG_0356_aqjpm6.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047543/IMG_0351_qqzdyw.jpg"

    ],
  },
  {
    id: "pre4",
    title: "Beach Engagement",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047931/ABJ_1009_jvokfx.jpg",
    slug: "urban-love-story",
    weddingDate: "February 20, 2024",
    location: "Mumbai Coastline",
    couple: "Yash & Shreya",
    description:
      "An enchanting engagement session along Mumbai's scenic coastline, capturing the couple's playful spirit and deep connection against the dramatic backdrop of crashing waves.",
    story:
      "Yash and Shreya's engagement session was a celebration of their adventurous love story. Set against Mumbai's rugged coastline, the shoot captured their playful banter and tender moments.",
    details: {
      location: "Mumbai Coastline",
      date: "February 20, 2024",
      duration: "3 hours",
      outfits: "2 outfit changes",
    },
    images: [
       "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047861/IMG_0311_gx6tji.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047859/IMG_0310_vsrl50.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047858/IMG_0309_p6f5qv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047857/IMG_0308_armoz5.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047862/IMG_0312_zhnz5z.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047856/IMG_0307_jjazsf.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047854/IMG_0305_kz4gkl.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047853/IMG_0304_snvgzw.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047852/IMG_0303_b4azna.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047851/IMG_0302_ssnon1.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047850/IMG_0301_cqfmjv.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047849/IMG_0300_fogj9y.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047847/IMG_0298_xmfwsu.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047846/IMG_0297_z0axal.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047848/IMG_0299_jhfmza.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047845/IMG_0296_ft7zwd.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047844/IMG_0295_yd82qz.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047843/IMG_0294_v0pj9c.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047838/IMG_0289_fdlxzl.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047836/IMG_0288_pa9e0i.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047834/IMG_0286_picl0w.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047831/IMG_0283_akaeyn.jpg",
  "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752047831/IMG_0284_oeqt0n.jpg"
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
    <div className="min-h-screen  bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={portfolio.image2 || "/placeholder.svg"}
          alt={portfolio.title}
          fill
          className="object-cover "
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
