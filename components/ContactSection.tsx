import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Phone } from "lucide-react"

interface ContactSectionProps {
  data: {
    title: string
    subtitle: string
    email: string
    phone: string
    social: {
      instagram: string
      youtube: string
    }
  }
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Grid: left = intro, right = contact card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Title & subtitle */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-light mb-4">{data.title}</h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0">{data.subtitle}</p>
          </div>

          {/* Right: Contact Info Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
            {/* Email */}
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-700 rounded-full mr-4 flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <a href={`mailto:${data.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                  {data.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-700 rounded-full mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Phone</h3>
                <a href={`tel:${data.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {data.phone}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6" />

            {/* Social */}
            <div className="text-center">
              <h3 className="font-medium text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center gap-6">
                {/* Instagram */}
                <a
                  href={data.social.instagram}
                  className="p-2 bg-gray-700 rounded-full hover:bg-amber-600 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                {/* YouTube */}
                <a
                  href={data.social.youtube}
                  className="p-2 bg-gray-700 rounded-full hover:bg-amber-600 transition-colors"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Inline SVG for YouTube icon */}
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a2.997 2.997 0 00-2.115-2.117C19.611 3.5 12 3.5 12 3.5s-7.611 0-9.383.569a2.997 2.997 0 00-2.115 2.117A31.88 31.88 0 000 12a31.88 31.88 0 00.502 5.814 2.997 2.997 0 002.115 2.117c1.772.569 9.383.569 9.383.569s7.611 0 9.383-.569a2.997 2.997 0 002.115-2.117A31.88 31.88 0 0024 12a31.88 31.88 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 w-full sm:w-auto">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.shrishtiwebsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            ShrishtiWebSolutions.com
          </a>
          . All rights reserved.
        </div>
      </div>
    </section>
  )
}
