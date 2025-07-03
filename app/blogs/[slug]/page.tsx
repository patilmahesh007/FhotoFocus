import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Eye,
  Grid,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "wedding-photography-trends-2024": {
    id: 1,
    title: "Top Wedding Photography Trends for 2024",
    slug: "wedding-photography-trends-2024",
    excerpt:
      "Discover the latest trends shaping wedding photography in 2024, from candid moments to creative compositions.",
    content: `
      <p>Wedding photography continues to evolve, and 2024 brings exciting new trends that couples are embracing for their special day. As a professional wedding photographer, I've observed these emerging styles that are reshaping how we capture love stories.</p>
      
      <h2>1. Authentic Candid Moments</h2>
      <p>Gone are the days of overly posed shots. Couples are increasingly seeking photographers who can capture genuine emotions and spontaneous moments. This trend focuses on storytelling through natural interactions, laughter, and tears of joy.</p>
      
      <h2>2. Film Photography Revival</h2>
      <p>There's a beautiful resurgence of film photography in weddings. The organic grain, rich colors, and timeless quality of film create images that feel both nostalgic and contemporary.</p>
      
      <h2>3. Drone Photography Integration</h2>
      <p>Aerial shots are becoming more accessible and popular, offering unique perspectives of venues and ceremonies. However, it's important to use them tastefully and in compliance with local regulations.</p>
      
      <h2>4. Intimate Micro-Weddings</h2>
      <p>The trend toward smaller, more intimate celebrations has influenced photography styles, with a focus on close-up details and emotional connections between fewer guests.</p>
      
      <h2>5. Sustainable Photography Practices</h2>
      <p>Eco-conscious couples are choosing photographers who embrace sustainable practices, from digital delivery methods to environmentally friendly printing options.</p>
    `,
    author: {
      name: "Vishal Shirke",
      avatar: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
      bio: "Professional wedding photographer with over 10 years of experience capturing love stories across India and internationally.",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Photography Tips",
    tags: ["Wedding Photography", "Trends", "2024", "Photography Tips"],
    featuredImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    gallery: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    ],
    likes: 124,
    comments: 18,
    shares: 32,
    views: 1250,
  },
  "pre-wedding-shoot-guide": {
    id: 2,
    title: "The Ultimate Pre-Wedding Shoot Guide",
    slug: "pre-wedding-shoot-guide",
    excerpt:
      "Everything you need to know about planning the perfect pre-wedding photoshoot, from location selection to styling tips.",
    content: `
      <p>Pre-wedding shoots have become an integral part of the wedding journey, offering couples a chance to get comfortable with their photographer and create beautiful memories before the big day.</p>
      
      <h2>Planning Your Pre-Wedding Shoot</h2>
      <p>The key to a successful pre-wedding shoot lies in thorough planning. Start by discussing your vision with your photographer at least 2-3 months before your wedding date.</p>
      
      <h2>Choosing the Perfect Location</h2>
      <p>Location sets the mood for your entire shoot. Consider places that hold special meaning for your relationship - where you first met, had your first date, or got engaged.</p>
      
      <h2>Styling and Wardrobe Tips</h2>
      <p>Coordinate your outfits without being too matchy. Choose colors that complement each other and the location. Bring multiple outfit options for variety.</p>
      
      <h2>Best Times for Shooting</h2>
      <p>Golden hour (the hour before sunset) provides the most flattering natural light. Early morning shoots can also be magical with soft, diffused lighting.</p>
    `,
    author: {
      name: "Vishal Shirke",
      avatar: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
      bio: "Professional wedding photographer with over 10 years of experience capturing love stories across India and internationally.",
    },
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Pre-Wedding",
    tags: ["Pre-Wedding", "Photography Guide", "Couples", "Planning"],
    featuredImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    gallery: [
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
    ],
    likes: 89,
    comments: 12,
    shares: 24,
    views: 890,
  },
}

const relatedPosts = [
  {
    id: 3,
    title: "Destination Wedding Photography Tips",
    slug: "destination-wedding-photography",
    excerpt: "Essential tips for capturing beautiful destination weddings.",
    featuredImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    publishedAt: "2024-01-05",
    readTime: "5 min read",
    category: "Destination Weddings",
  },
  {
    id: 4,
    title: "Monsoon Wedding Photography",
    slug: "monsoon-wedding-photography",
    excerpt: "How to create stunning photos during monsoon weddings.",
    featuredImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    publishedAt: "2024-01-01",
    readTime: "7 min read",
    category: "Seasonal Photography",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back Button */}
        <Link
          href="/blogs"
          className="absolute top-24 md:top-32 left-4 md:left-6 z-10 bg-white/90 hover:bg-white text-gray-900 px-3 py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Blogs</span>
          <span className="sm:hidden">Back</span>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-3 md:mb-4 bg-white/20 text-white border-white/30">{post.category}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 md:mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 max-w-2xl">{post.excerpt}</p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Social Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm md:text-base">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm md:text-base">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm md:text-base">{post.shares}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share:</span>
                <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div
                className="prose prose-gray max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-h2:text-xl prose-h2:md:text-2xl prose-p:text-sm prose-p:md:text-base"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs md:text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-0">Photo Gallery</h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {post.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-light mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Subscribe to our newsletter for the latest photography tips and wedding inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 text-sm md:text-base">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">{post.author.name}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Professional Photographer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{post.author.bio}</p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <button className="text-gray-600 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blogs/${relatedPost.slug}`} className="block group">
                    <div className="flex gap-3 md:gap-4">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.featuredImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-sm md:text-base line-clamp-2 mb-1">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{relatedPost.readTime}</span>
                          <span>•</span>
                          <span>{relatedPost.category}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6">Categories</h3>
              <div className="space-y-2">
                {[
                  "Wedding Photography",
                  "Pre-Wedding",
                  "Destination Weddings",
                  "Photography Tips",
                  "Behind the Scenes",
                ].map((category) => (
                  <Link
                    key={category}
                    href={`/blogs?category=${category.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base py-1"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
