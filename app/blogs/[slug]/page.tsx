"use client"
import React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  Bookmark,
  Share2,
  Eye,
  MessageCircle,
  Filter,
  Grid,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock blog data
const blogData = {
  "Karan-Ashika-fairmont-wedding": {
    title: "Karan  and Ashika's Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
    date: "15 MAR, 2025",
    readTime: "8 min read",
    category: "Wedding",
    author: {
      name: "Abhishek Jain",
      role: "Lead Photographer",
      image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064711/IMG_3027_xfohog.jpg",
      bio: "Founder of FhotoFocus with over 8 years of wedding photography experience.",
    },
    heroImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064711/IMG_3027_xfohog.jpg",
    content: {
      lead: "Karan  and Ashika's wedding at Fairmont & Raffles Jaipur was nothing short of magical. Set against the backdrop of Jaipur's royal heritage, their celebration was a perfect blend of tradition, elegance, and contemporary style.",
      sections: [
        {
          heading: "The Venue: A Royal Setting",
          content:
            "The Fairmont and Raffles Jaipur provided the perfect canvas for this grand celebration. With its stunning architecture and luxurious amenities, every corner offered a new perspective for capturing beautiful moments.",
        },
        {
          heading: "Ceremonies That Touched Hearts",
          content:
            "From the intimate Mehendi ceremony to the grand wedding reception, each event was meticulously planned and beautifully executed. The couple's attention to detail was evident in every aspect of their celebration.",
        },
        {
          heading: "Capturing Emotions",
          content:
            "Our team focused on capturing not just the grand moments, but also the intimate glances, the tears of joy, and the laughter that filled the air. These candid moments truly tell the story of Karan  and Ashika's love.",
        },
      ],
    },
    gallery: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064719/IMG_3889_fwr2i3.jpg",
        caption: "The couple's first look moment",
        category: "ceremony",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064708/IMG_2800_pduec7.jpg",
        caption: "Traditional Mehendi ceremony",
        category: "mehendi",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064717/IMG_3865_unie0y.jpg",
        caption: "Bridal portrait session",
        category: "portraits",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064715/IMG_3093_cgbrt7.jpg",
        caption: "Reception celebration",
        category: "reception",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064712/IMG_3013_cniegm.jpg",
        caption: "Family moments",
        category: "family",
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064711/IMG_3016_aszgym.jpg",
        caption: "Couple's romantic session",
        category: "couple",
      },
    ],
    venue: {
      name: "Fairmont & Raffles Jaipur",
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      description: "A luxury hotel that perfectly blends Rajasthani heritage with modern elegance.",
    },
    photographyDetails: {
      equipment: "Canon EOS R5, Sony A7R IV",
      lenses: "24-70mm f/2.8, 85mm f/1.4, 16-35mm f/2.8",
      style: "Candid, Traditional, Contemporary",
      team: "3 Photographers, 2 Videographers",
    },
    tags: ["Wedding", "Jaipur", "Luxury", "Traditional", "Fairmont", "Raffles"],
    stats: {
      views: 1247,
      likes: 89,
      comments: 23,
    },
  },
}

const relatedPosts = [
  {
    id: 1,
    title: "Priya & Arjun's Romantic Pre-Wedding Session",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501500/_J7A3451_qwerty.jpg",
    slug: "priya-arjun-udaipur-prewedding",
  },
  {
    id: 2,
    title: "Contemporary Fashion Editorial in Mumbai",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501501/_J7A3452_fashion.jpg",
    slug: "fashion-editorial-mumbai",
  },
]

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [galleryFilter, setGalleryFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry")

const { slug } = React.use(params)
const blog = blogData[slug as keyof typeof blogData]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Blog post not found</h1>
          <Link href="/blogs" className="text-amber-600 hover:text-amber-700">
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  const filteredGallery =
    galleryFilter === "all" ? blog.gallery : blog.gallery.filter((img) => img.category === galleryFilter)

  const galleryCategories = ["all", ...Array.from(new Set(blog.gallery.map((img) => img.category)))]

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-stone-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image src={blog.heroImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Navigation - Fixed positioning to avoid navbar overlap */}
        <div className="absolute top-24 md:top-32 left-4 md:left-6 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Blogs</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-4 md:mb-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm md:text-base">{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm md:text-base">{blog.readTime}</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs md:text-sm">
                  {blog.category}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-4 md:mb-6">
                {blog.title}
              </h1>

              {/* Lead */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
                {blog.content.lead}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3 space-y-8 md:space-y-12">
            {/* Social Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    isLiked ? "bg-red-100 text-red-600" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  <span>{blog.stats.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    isBookmarked ? "bg-amber-100 text-amber-600" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                  <span className="hidden sm:inline">Save</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-all duration-300 text-sm md:text-base">
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-stone-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{blog.stats.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blog.stats.comments}</span>
                </div>
              </div>
            </div>

            {/* Article Sections */}
            <div className="prose prose-lg max-w-none">
              {blog.content.sections.map((section, index) => (
                <div key={index} className="mb-8 md:mb-12">
                  <h2 className="font-playfair text-2xl md:text-3xl font-light text-stone-800 mb-4 md:mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-base md:text-lg font-light">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Photography Details */}
         
            {/* Venue Information */}
            <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-4 md:p-8 border border-amber-200">
              <h3 className="font-playfair text-xl md:text-2xl font-light text-stone-800 mb-4">Venue Information</h3>
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-medium text-stone-700 mb-2">{blog.venue.name}</h4>
                  <p className="text-stone-600 mb-2 text-sm md:text-base">{blog.venue.location}</p>
                  <p className="text-stone-600 font-light text-sm md:text-base">{blog.venue.description}</p>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xl md:text-2xl font-bold text-amber-600">{blog.venue.rating}</div>
                  <div className="text-xs md:text-sm text-stone-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-light text-stone-800">Wedding Gallery</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-stone-500" />
                    <select
                      value={galleryFilter}
                      onChange={(e) => setGalleryFilter(e.target.value)}
                      className="bg-white border border-stone-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {galleryCategories.map((category) => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center bg-stone-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("masonry")}
                      className={`p-2 rounded ${viewMode === "masonry" ? "bg-white shadow-sm" : ""}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div
                className={`grid gap-3 md:gap-4 ${
                  viewMode === "masonry" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {filteredGallery.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                      viewMode === "masonry" && index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    } ${viewMode === "masonry" && index % 5 === 2 ? "sm:row-span-2" : ""}`}
                  >
                    <div
                      className={`relative ${
                        viewMode === "masonry" && index === 0
                          ? "h-64 sm:h-96"
                          : viewMode === "masonry" && index % 5 === 2
                            ? "h-48 sm:h-80"
                            : "h-48 sm:h-64"
                      }`}
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs md:text-sm font-light">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
      
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* Author */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-stone-200">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Image
                  src={blog.author.image || "/placeholder.svg"}
                  alt={blog.author.name}
                  width={50}
                  height={50}
                  className="rounded-full w-12 h-12 md:w-15 md:h-15 object-cover"
                />
                <div>
                  <h4 className="font-medium text-stone-800 text-sm md:text-base">{blog.author.name}</h4>
                  <p className="text-xs md:text-sm text-stone-600">{blog.author.role}</p>
                </div>
              </div>
              <p className="text-stone-600 text-xs md:text-sm font-light">{blog.author.bio}</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4 text-sm md:text-base">Table of Contents</h4>
              <nav className="space-y-2">
                {blog.content.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-xs md:text-sm text-stone-600 hover:text-stone-800 transition-colors duration-200"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Posts */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4 text-sm md:text-base">Related Stories</h4>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs md:text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4 text-sm md:text-base">Share This Story</h4>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 md:gap-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-xs md:text-sm hover:bg-blue-700 transition-colors duration-200">
                  Facebook
                </button>
                <button className="flex-1 bg-sky-500 text-white py-2 px-3 rounded-lg text-xs md:text-sm hover:bg-sky-600 transition-colors duration-200">
                  Twitter
                </button>
                <button className="flex-1 bg-pink-600 text-white py-2 px-3 rounded-lg text-xs md:text-sm hover:bg-pink-700 transition-colors duration-200">
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
