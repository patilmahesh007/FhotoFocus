import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactData {
  title: string
  subtitle: string
  phone: string
  email: string
  address: string
  social: {
    instagram: string
    youtube: string
  }
}

interface ContactSectionProps {
  data: ContactData
}

export default function ContactSection({ data }: ContactSectionProps) {
  if (!data) return null

  return (
    <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & CTA Column */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4">FhotoFocus</h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{data.subtitle}</p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <h3 className="font-playfair text-lg sm:text-xl font-medium mb-3 sm:mb-4">Get in Touch</h3>

            <div className="space-y-3 sm:space-y-4">
              <Link
                href={`tel:${data.phone}`}
                className="flex items-center space-x-3 text-stone-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:text-amber-300" />
                <span className="text-sm sm:text-base">{data.phone}</span>
              </Link>

              <Link
                href={`mailto:${data.email}`}
                className="flex items-center space-x-3 text-stone-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:text-amber-300" />
                <span className="text-sm sm:text-base">{data.email}</span>
              </Link>

              <div className="flex items-center space-x-3 text-stone-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="text-sm sm:text-base">{data.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation & Social Column */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <h3 className="font-playfair text-lg sm:text-xl font-medium mb-3 sm:mb-4">Quick Links</h3>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Link href="/gallery" className="text-stone-300 hover:text-white transition-colors text-sm sm:text-base">
                Gallery
              </Link>
              <Link href="/about" className="text-stone-300 hover:text-white transition-colors text-sm sm:text-base">
                About Us
              </Link>
              <Link href="/blogs" className="text-stone-300 hover:text-white transition-colors text-sm sm:text-base">
                Blogs
              </Link>
              <Link
                href="/achievements"
                className="text-stone-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                Achievements
              </Link>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-sm sm:text-base">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <Link
                  href={data.social.instagram}
                  target="_blank"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <Link
                  href={data.social.youtube}
                  target="_blank"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-stone-400 text-xs sm:text-sm">© 2024 FhotoFocus Photography. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
