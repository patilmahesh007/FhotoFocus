import Image from "next/image"
import { Camera, Heart, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">About FhotoFocus</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate storytellers dedicated to capturing life's most precious moments with artistry and authenticity.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-light">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for capturing authentic emotions and timeless moments, FhotoFocus has grown from a
              small photography studio to one of India's most trusted wedding and portrait photography teams.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that every couple has a unique story to tell, and our mission is to preserve those precious
              moments in a way that reflects your personality, style, and the love you share.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over 8 years of experience and 500+ weddings captured, we've had the privilege of being part of
              countless love stories across India and beyond.
            </p>
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg"
              alt="About FhotoFocus Photography"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                We capture genuine emotions and real moments, not just posed pictures.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium">Artistry</h3>
              <p className="text-gray-600 text-sm">
                Every photograph is crafted with artistic vision and technical excellence.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium">Connection</h3>
              <p className="text-gray-600 text-sm">
                We build relationships with our clients to understand their unique story.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for perfection in every aspect of our service and delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-center mb-12">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative h-64 w-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg"
                  alt="Lead Photographer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium">Lead Photographer</h3>
              <p className="text-amber-700 font-medium">Founder & Creative Director</p>
              <p className="text-gray-600 text-sm">
                With 8+ years of experience, specializing in wedding and portrait photography with a unique artistic
                vision.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative h-64 w-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg"
                  alt="Second Photographer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium">Second Photographer</h3>
              <p className="text-amber-700 font-medium">Senior Photographer</p>
              <p className="text-gray-600 text-sm">
                Expert in candid photography and capturing spontaneous moments that tell beautiful stories.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative h-64 w-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium">Creative Director</h3>
              <p className="text-amber-700 font-medium">Post-Production & Design</p>
              <p className="text-gray-600 text-sm">
                Responsible for the artistic post-processing and album design that brings your memories to life.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-center mb-12">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-amber-100 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <span className="font-bold text-amber-700">1</span>
              </div>
              <h3 className="font-playfair text-lg font-medium">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We start with understanding your vision, style preferences, and special requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-amber-100 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <span className="font-bold text-amber-700">2</span>
              </div>
              <h3 className="font-playfair text-lg font-medium">Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed planning of the shoot timeline, locations, and key moments to capture.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-amber-100 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <span className="font-bold text-amber-700">3</span>
              </div>
              <h3 className="font-playfair text-lg font-medium">Capture</h3>
              <p className="text-gray-600 text-sm">
                Professional photography with attention to every detail and emotion.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-amber-100 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <span className="font-bold text-amber-700">4</span>
              </div>
              <h3 className="font-playfair text-lg font-medium">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Carefully edited photos delivered in high resolution with beautiful presentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
