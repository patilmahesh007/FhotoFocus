import Image from "next/image"
import { Award, Trophy, Star, Users, Camera, Heart } from "lucide-react"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: "Best Wedding Photographer 2024",
    organization: "Indian Wedding Photography Awards",
    year: "2024",
    description: "Recognized for exceptional creativity and technical excellence in wedding photography.",
    icon: Trophy,
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
  },
  {
    id: 2,
    title: "Excellence in Portrait Photography",
    organization: "Professional Photographers Association",
    year: "2023",
    description: "Awarded for outstanding work in portrait and fashion photography.",
    icon: Award,
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
  },
  {
    id: 3,
    title: "Featured in Vogue Weddings",
    organization: "Vogue India",
    year: "2023",
    description: "Our work was featured in Vogue Weddings magazine for innovative wedding photography.",
    icon: Star,
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
  },
  {
    id: 4,
    title: "Top 10 Wedding Photographers",
    organization: "WeddingWire India",
    year: "2022",
    description: "Listed among the top 10 wedding photographers in India for consistent quality and service.",
    icon: Camera,
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
  },
]

const statistics = [
  {
    number: "500+",
    label: "Weddings Captured",
    icon: Heart,
  },
  {
    number: "1000+",
    label: "Happy Couples",
    icon: Users,
  },
  {
    number: "15+",
    label: "Awards Won",
    icon: Trophy,
  },
  {
    number: "8+",
    label: "Years Experience",
    icon: Star,
  },
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">Our Achievements</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recognition and milestones that reflect our commitment to excellence in photography and client satisfaction.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <stat.icon className="w-8 h-8 text-amber-700" />
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards and Recognition */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-center mb-12">Awards & Recognition</h2>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <achievement.icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="font-playfair text-2xl md:text-3xl font-medium text-gray-800">{achievement.title}</h3>

                  <p className="text-amber-700 font-medium">{achievement.organization}</p>

                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-center mb-12">What Our Clients Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "FhotoFocus captured our wedding day perfectly. Every emotion, every moment was beautifully preserved.
                Their attention to detail is unmatched!"
              </p>
              <div className="font-medium text-gray-800">- Priya & Arjun</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Professional, creative, and incredibly talented. Our pre-wedding shoot was an amazing experience, and
                the photos exceeded all expectations."
              </p>
              <div className="font-medium text-gray-800">- Sneha & Vikram</div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
