import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "aashka-shanil-fairmont-wedding",
    title: "Aashka and Shanil's Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
    excerpt:
      "Aashka and Shanil's wedding at Fairmont & Raffles Jaipur was a spectacular celebration of love, tradition, and grandeur. From intimate ceremonies to grand celebrations, every moment was captured with artistic precision.",
    date: "15 MAR, 2025",
    readTime: "8 min read",
    category: "Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "priya-arjun-udaipur-prewedding",
    title: "Priya & Arjun's Romantic Pre-Wedding Session in Udaipur",
    excerpt:
      "A dreamy pre-wedding shoot in the City of Lakes, capturing the essence of romance against the backdrop of majestic palaces and serene waters.",
    date: "08 MAR, 2025",
    readTime: "6 min read",
    category: "Pre-Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501500/_J7A3451_qwerty.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "fashion-editorial-mumbai",
    title: "Contemporary Fashion Editorial: Urban Elegance in Mumbai",
    excerpt:
      "An exploration of modern fashion photography in Mumbai's urban landscape, blending contemporary style with architectural beauty.",
    date: "02 MAR, 2025",
    readTime: "5 min read",
    category: "Fashion",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501501/_J7A3452_fashion.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "destination-wedding-goa",
    title: "Beachside Bliss: A Destination Wedding in Goa",
    excerpt:
      "Sun, sand, and celebration - capturing the magic of a beachside wedding in Goa with its perfect blend of tradition and tropical paradise.",
    date: "25 FEB, 2025",
    readTime: "7 min read",
    category: "Wedding",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501502/_J7A3453_goa.jpg",
    featured: false,
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#f5f1eb]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-6xl md:text-8xl font-light mb-6 text-stone-800 tracking-wide">Blogs</h1>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Stories behind the lens, insights from our photography journey, and the beautiful moments we've captured.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-20">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-stone-500 font-light tracking-wide">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="px-3 py-1 bg-stone-200 rounded-full text-xs font-medium">{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="font-playfair text-3xl lg:text-5xl font-light leading-tight text-stone-800">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-stone-600 text-lg font-light leading-relaxed">{post.excerpt}</p>

                {/* Read More */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-900 transition-colors duration-300 group"
                >
                  <span className="tracking-wide">READ MORE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
 
      </div>
    </div>
  )
}
