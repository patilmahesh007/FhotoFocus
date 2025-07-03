import Image from "next/image"
import { Camera, Heart, Award, Users, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-light mb-3 sm:mb-4">About FhotoFocus</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            At FhotoFocus Photography, we believe that iconic stories deserve to be iconically captured.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Founded in 2016 by <strong>Abhishek Jain</strong>, with <strong>Mohit Singh</strong> as our creative
              partner, we are a passionate team specializing in weddings, pre-weddings, fashion and commercial
              photography.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              With over <strong>500 weddings captured</strong>, we bring creativity and care to every project, from
              intimate moments to grand celebrations. Known for thoughtful planning and smooth execution, we deliver
              timeless visuals that truly resonate with your style.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We have worked with families, fashion brands, corporate clients and industry leaders across local and
              international locations. Proud to be part of celebrity weddings and prestigious collaborations, we
              continue to grow with every story we tell.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At FhotoFocus Photography, our commitment remains to create meaningful, lasting images that celebrate
              life's special moments.
            </p>
            <Button asChild className="bg-amber-700 hover:bg-amber-800 w-full sm:w-auto">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          <div className="relative h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg"
              alt="About FhotoFocus Photography"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12">
            Meet Our Founders
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Abhishek Jain */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg"
                  alt="Abhishek Jain"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-playfair text-xl sm:text-2xl font-medium mb-2">Abhishek Jain</h3>
                <p className="text-amber-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Founder & Lea Photographer
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  With 8+ years of experience, Abhishek brings artistic vision and technical expertise to every shoot.
                  His passion for storytelling through photography has made him one of the most sought-after wedding
                  photographers in India.
                </p>
              </div>
            </div>

            {/* Mohit Singh */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg"
                  alt="Mohit Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-playfair text-xl sm:text-2xl font-medium mb-2">Mohit Singh</h3>
                <p className="text-amber-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Creative Partner</p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Mohit's creative eye and innovative approach to photography complement Abhishek's vision perfectly.
                  Together, they create a dynamic duo that captures emotions and moments with unparalleled artistry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {siteData.about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light text-amber-700 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12">
            Our Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Passion</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We pour our heart into every shot, ensuring each image tells a meaningful story.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We strive for perfection in every frame, delivering exceptional quality consistently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Connection</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We build genuine relationships with our clients to capture authentic moments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We embrace new techniques and technologies to create unique visual experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Quality</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We never compromise on quality, ensuring every image meets our high standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3">Adventure</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We travel anywhere to capture your special moments in the most beautiful locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
