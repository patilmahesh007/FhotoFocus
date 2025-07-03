import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

// Sample detailed blog data - in a real app, this would come from a CMS or database
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "10-tips-perfect-wedding-photography": {
      id: 1,
      title: "10 Tips for Perfect Wedding Photography",
      excerpt:
        "Discover the essential techniques and tips that will help you capture stunning wedding moments that couples will treasure forever.",
      content: `
        <p>Wedding photography is an art that combines technical skill, creative vision, and the ability to capture fleeting moments of pure emotion. After photographing over 500 weddings, we've learned that perfect wedding photography goes beyond just having the right equipment – it's about understanding the story, anticipating moments, and creating images that will be treasured for generations.</p>

        <h2>1. Scout the Venue in Advance</h2>
        <p>Every venue has its unique character and challenges. We always visit the wedding venue at least once before the big day to understand the lighting conditions, identify the best photo spots, and plan our shooting strategy. This preparation allows us to work efficiently and capture the venue's beauty while telling the couple's story.</p>

        <h2>2. Master Natural Light</h2>
        <p>Natural light is a wedding photographer's best friend. Golden hour shots during sunset create magical, romantic images that couples absolutely love. We plan our timeline to take advantage of the best lighting throughout the day, from the soft morning light during bridal preparations to the warm evening glow during couple portraits.</p>

        <h2>3. Capture Candid Emotions</h2>
        <p>The most treasured wedding photos are often the unposed, candid moments – a father's tear during the ceremony, the bride's laughter with her bridesmaids, or the groom's nervous excitement before walking down the aisle. We blend into the background to capture these authentic emotions as they naturally unfold.</p>

        <h2>4. Focus on Details</h2>
        <p>Wedding details tell the complete story. From the intricate beadwork on the bride's lehenga to the carefully chosen floral arrangements, these elements reflect the couple's personality and the effort put into planning their special day. We dedicate time to photographing rings, invitations, décor, and other meaningful details.</p>

        <h2>5. Work with Multiple Angles</h2>
        <p>Having multiple photographers allows us to capture different perspectives of the same moment. While one photographer focuses on the couple during the ceremony, another captures the reactions of family members. This comprehensive coverage ensures no precious moment is missed.</p>
      `,
      image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
      author: "FhotoFocus Team",
      date: "December 15, 2024",
      category: "Wedding Tips",
      readTime: "8 min read",
      venue: {
        name: "Royal Palace Gardens, Udaipur",
        location: "Udaipur, Rajasthan",
        type: "Heritage Palace",
        capacity: "300-500 guests",
        highlights: ["Lakeside ceremony", "Royal architecture", "Sunset photography", "Traditional Rajasthani décor"],
      },
      functions: [
        {
          name: "Mehendi Ceremony",
          description: "Traditional henna ceremony with vibrant decorations and folk music",
          duration: "4 hours",
          bestShots: ["Intricate henna designs", "Colorful décor", "Candid laughter moments"],
        },
        {
          name: "Sangam Ceremony",
          description: "Musical evening with family performances and celebrations",
          duration: "3 hours",
          bestShots: ["Dance performances", "Family interactions", "Traditional music"],
        },
        {
          name: "Wedding Ceremony",
          description: "Sacred rituals by the lakeside with stunning palace backdrop",
          duration: "2 hours",
          bestShots: ["Ceremonial rituals", "Emotional moments", "Palace architecture"],
        },
        {
          name: "Reception",
          description: "Grand celebration with dinner and entertainment",
          duration: "4 hours",
          bestShots: ["Couple portraits", "Guest interactions", "Evening lighting"],
        },
      ],
      gallery: [
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
      ],
      tags: ["Wedding Photography", "Tips", "Venue", "Lighting", "Candid Photography"],
    },
    "art-of-prewedding-photography": {
      id: 2,
      title: "The Art of Pre-Wedding Photography",
      excerpt:
        "Learn how to create magical pre-wedding sessions that tell your couple's unique love story through creative compositions and lighting.",
      content: `
        <p>Pre-wedding photography has evolved into an art form that allows couples to express their love story in a relaxed, intimate setting. Unlike wedding day photography, pre-wedding sessions offer unlimited time and creative freedom to capture the couple's personality and connection.</p>

        <h2>Understanding Your Couple's Story</h2>
        <p>Every couple has a unique journey, and our pre-wedding sessions are designed to reflect their individual story. We spend time getting to know our couples – how they met, their shared interests, and what makes their relationship special. This understanding helps us create personalized concepts that truly represent them.</p>

        <h2>Location Selection</h2>
        <p>The right location can make or break a pre-wedding shoot. We consider factors like the couple's personality, the season, lighting conditions, and the overall mood they want to achieve. From serene beaches and lush gardens to urban landscapes and heritage sites, each location offers unique opportunities for storytelling.</p>

        <h2>Styling and Wardrobe</h2>
        <p>Wardrobe selection plays a crucial role in pre-wedding photography. We guide our couples in choosing outfits that complement each other and the chosen locations. The key is to select clothing that makes them feel confident and comfortable while looking cohesive in photographs.</p>

        <h2>Creating Natural Interactions</h2>
        <p>The best pre-wedding photos capture genuine emotions and natural interactions between couples. We use various techniques to help couples relax and be themselves – from playing their favorite music to suggesting activities they enjoy together. This approach results in authentic, joyful images.</p>
      `,
      image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
      author: "FhotoFocus Team",
      date: "December 10, 2024",
      category: "Pre-Wedding",
      readTime: "6 min read",
      venue: {
        name: "Goa Beach Resort",
        location: "North Goa",
        type: "Beach Resort",
        capacity: "Intimate sessions",
        highlights: ["Golden hour beach shots", "Tropical landscapes", "Sunset photography", "Casual beach vibes"],
      },
      functions: [
        {
          name: "Beach Session",
          description: "Romantic beach photography during golden hour",
          duration: "2 hours",
          bestShots: ["Silhouette shots", "Candid walking", "Sunset portraits"],
        },
        {
          name: "Resort Grounds",
          description: "Utilizing the beautiful resort architecture and gardens",
          duration: "1.5 hours",
          bestShots: ["Architectural backgrounds", "Garden settings", "Pool area shots"],
        },
      ],
      gallery: [
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
        "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
      ],
      tags: ["Pre-Wedding", "Couple Photography", "Beach Photography", "Golden Hour", "Romance"],
    },
  }

  return blogPosts[slug as keyof typeof blogPosts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-[#fdf5ec] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-[#fdf5ec]">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-amber-600 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
              <span className="text-sm opacity-90">{post.readTime}</span>
            </div>
            <h1 className="font-playfair text-3xl md:text-5xl font-light mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-amber-700 hover:text-amber-800">
            <Link href="/blogs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Venue Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-light mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-700" />
                Featured Venue
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-playfair text-xl font-medium mb-2">{post.venue.name}</h3>
                  <p className="text-gray-600 mb-4">{post.venue.location}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Type:</span>
                      <span className="text-gray-600">{post.venue.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Capacity:</span>
                      <span className="text-gray-600">{post.venue.capacity}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Venue Highlights</h4>
                  <ul className="space-y-2">
                    {post.venue.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-amber-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Functions Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-light mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-700" />
                Wedding Functions
              </h2>

              <div className="space-y-6">
                {post.functions.map((func, index) => (
                  <div key={index} className="border-l-4 border-amber-200 pl-6 pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-playfair text-xl font-medium">{func.name}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{func.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{func.description}</p>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Best Photography Opportunities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {func.bestShots.map((shot, shotIndex) => (
                          <span key={shotIndex} className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs">
                            {shot}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-light mb-6 flex items-center gap-3">
                <Camera className="w-6 h-6 text-amber-700" />
                Photo Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {post.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm hover:bg-amber-100 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-playfair text-xl font-medium mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Reading Time</span>
                  <span className="font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{post.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Venue Type</span>
                  <span className="font-medium">{post.venue.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Functions</span>
                  <span className="font-medium">{post.functions.length}</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white">
              <h3 className="font-playfair text-xl font-medium mb-3">Ready to Plan Your Wedding?</h3>
              <p className="text-amber-100 text-sm mb-4">
                Let us capture your special moments with the same care and artistry featured in this blog.
              </p>
              <Button asChild className="w-full bg-white text-amber-700 hover:bg-gray-100">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
