import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  image: string
  alt: string
  title: string
  subtitle: string
}

export default function Hero({ image, alt, title, subtitle }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752064692/IMG_5085_sp4gof.jpg"
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
          {subtitle}
        </p>
      
      </div>
    </section>
  )
}
