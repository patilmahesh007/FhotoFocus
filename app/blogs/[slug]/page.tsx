"use client"

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
  "aashka-shanil-fairmont-wedding": {
    title: "Aashka and Shanil's Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
    date: "15 MAR, 2025",
    readTime: "8 min read",
    category: "Wedding",
    author: {
      name: "Abhishek Jain",
      role: "Lead Photographer",
      image: "/placeholder.svg?height=60&width=60",
      bio: "Founder of FhotoFocus with over 8 years of wedding photography experience.",
    },
    heroImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    content: {
      lead: "Aashka and Shanil's wedding at Fairmont & Raffles Jaipur was nothing short of magical. Set against the backdrop of Jaipur's royal heritage, their celebration was a perfect blend of tradition, elegance, and contemporary style.",
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
            "Our team focused on capturing not just the grand moments, but also the intimate glances, the tears of joy, and the laughter that filled the air. These candid moments truly tell the story of Aashka and Shanil's love.",
        },
      ],
    },
    gallery: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
        caption: "The couple's first look moment",
        category: "ceremony",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501500/_J7A3451_qwerty.jpg",
        caption: "Traditional Mehendi ceremony",
        category: "mehendi",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501501/_J7A3452_fashion.jpg",
        caption: "Bridal portrait session",
        category: "portraits",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501502/_J7A3453_goa.jpg",
        caption: "Reception celebration",
        category: "reception",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
        caption: "Family moments",
        category: "family",
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501500/_J7A3451_qwerty.jpg",
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
  const [showNewsletter, setShowNewsletter] = useState(false)

  const blog = blogData[params.slug as keyof typeof blogData]

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
    return <div>Blog post not found</div>
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

        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Meta */}
              <div className="flex items-center gap-6 mb-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {blog.category}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Lead */}
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
                {blog.content.lead}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Social Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isLiked ? "bg-red-100 text-red-600" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  <span>{blog.stats.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isBookmarked ? "bg-amber-100 text-amber-600" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                  <span>Save</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
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
                <div key={index} className="mb-12">
                  <h2 className="font-playfair text-3xl font-light text-stone-800 mb-6">{section.heading}</h2>
                  <p className="text-stone-600 leading-relaxed text-lg font-light">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Photography Details */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-200">
              <h3 className="font-playfair text-2xl font-light text-stone-800 mb-6">Photography Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">Equipment Used</h4>
                  <p className="text-stone-600 font-light">{blog.photographyDetails.equipment}</p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">Lenses</h4>
                  <p className="text-stone-600 font-light">{blog.photographyDetails.lenses}</p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">Photography Style</h4>
                  <p className="text-stone-600 font-light">{blog.photographyDetails.style}</p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">Team Size</h4>
                  <p className="text-stone-600 font-light">{blog.photographyDetails.team}</p>
                </div>
              </div>
            </div>

            {/* Venue Information */}
            <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="font-playfair text-2xl font-light text-stone-800 mb-4">Venue Information</h3>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-medium text-stone-700 mb-2">{blog.venue.name}</h4>
                  <p className="text-stone-600 mb-2">{blog.venue.location}</p>
                  <p className="text-stone-600 font-light">{blog.venue.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-600">{blog.venue.rating}</div>
                  <div className="text-sm text-stone-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-playfair text-3xl font-light text-stone-800">Wedding Gallery</h3>
                <div className="flex items-center gap-4">
                  {/* Filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-stone-500" />
                    <select
                      value={galleryFilter}
                      onChange={(e) => setGalleryFilter(e.target.value)}
                      className="bg-white border border-stone-200 rounded-lg px-3 py-1 text-sm"
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
                className={`grid gap-4 ${
                  viewMode === "masonry" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {filteredGallery.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                      viewMode === "masonry" && index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    } ${viewMode === "masonry" && index % 5 === 2 ? "md:row-span-2" : ""}`}
                  >
                    <div
                      className={`relative ${
                        viewMode === "masonry" && index === 0
                          ? "h-96"
                          : viewMode === "masonry" && index % 5 === 2
                            ? "h-80"
                            : "h-64"
                      }`}
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-light">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 text-white text-center">
              <h3 className="font-playfair text-2xl font-light mb-4">Stay Updated</h3>
              <p className="text-white/80 mb-6 font-light">
                Subscribe to our newsletter for the latest wedding photography tips and featured stories.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Subscribe</Button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-stone-200 text-stone-700">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Author */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={blog.author.image || "/placeholder.svg"}
                  alt={blog.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-stone-800">{blog.author.name}</h4>
                  <p className="text-sm text-stone-600">{blog.author.role}</p>
                </div>
              </div>
              <p className="text-stone-600 text-sm font-light">{blog.author.bio}</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4">Table of Contents</h4>
              <nav className="space-y-2">
                {blog.content.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-sm text-stone-600 hover:text-stone-800 transition-colors duration-200"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Posts */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4">Related Stories</h4>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200">
              <h4 className="font-medium text-stone-800 mb-4">Share This Story</h4>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
                  Facebook
                </button>
                <button className="flex-1 bg-sky-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-sky-600 transition-colors duration-200">
                  Twitter
                </button>
                <button className="flex-1 bg-pink-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-pink-700 transition-colors duration-200">
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
