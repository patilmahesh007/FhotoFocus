import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Perfect Wedding Photography",
    excerpt:
      "Discover the essential techniques and tips that will help you capture stunning wedding moments that couples will treasure forever.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    author: "FhotoFocus Team",
    date: "December 15, 2024",
    category: "Wedding Tips",
    slug: "10-tips-perfect-wedding-photography",
  },
  {
    id: 2,
    title: "The Art of Pre-Wedding Photography",
    excerpt:
      "Learn how to create magical pre-wedding sessions that tell your couple's unique love story through creative compositions and lighting.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    author: "FhotoFocus Team",
    date: "December 10, 2024",
    category: "Pre-Wedding",
    slug: "art-of-prewedding-photography",
  },
  {
    id: 3,
    title: "Choosing the Perfect Wedding Venue",
    excerpt:
      "A comprehensive guide to selecting the ideal venue for your special day, considering lighting, space, and photographic opportunities.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
    author: "FhotoFocus Team",
    date: "December 5, 2024",
    category: "Wedding Planning",
    slug: "choosing-perfect-wedding-venue",
  },
  {
    id: 4,
    title: "Fashion Photography Trends 2024",
    excerpt:
      "Explore the latest trends in fashion photography and how to incorporate contemporary styles into your portrait sessions.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
    author: "FhotoFocus Team",
    date: "November 28, 2024",
    category: "Fashion",
    slug: "fashion-photography-trends-2024",
  },
  {
    id: 5,
    title: "Capturing Emotions: The Heart of Photography",
    excerpt:
      "Understanding how to capture genuine emotions and candid moments that make photographs truly memorable and meaningful.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
    author: "FhotoFocus Team",
    date: "November 20, 2024",
    category: "Photography Tips",
    slug: "capturing-emotions-heart-of-photography",
  },
  {
    id: 6,
    title: "Destination Wedding Photography Guide",
    excerpt:
      "Everything you need to know about planning and executing stunning destination wedding photography sessions around the world.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
    author: "FhotoFocus Team",
    date: "November 15, 2024",
    category: "Destination Weddings",
    slug: "destination-wedding-photography-guide",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">Our Blog</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, tips, and stories from the world of photography. Stay updated with the latest trends and
            techniques.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-light mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <Button asChild className="bg-amber-700 hover:bg-amber-800">
                    <Link href={`/blogs/${blogPosts[0].slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800">
                    <Link href={`/blogs/${post.slug}`}>
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
