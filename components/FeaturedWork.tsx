import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Portfolio {
  id: number
  title: string
  location: string
  image: string
  slug: string
}

interface FeaturedWorkData {
  title: string
  subtitle: string
  portfolios: Portfolio[]
}

interface FeaturedWorkProps {
  data: FeaturedWorkData
}

export default function FeaturedWork({ data }: FeaturedWorkProps) {
  if (!data || !data.portfolios) return null

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 text-stone-800">
            {data.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-4">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {data.portfolios.map((portfolio) => (
            <Link key={portfolio.id} href={`/portfolio/${portfolio.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={
                    portfolio.image ||
                    "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg"
                  }
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-playfair text-lg sm:text-xl font-medium mb-1">{portfolio.title}</h3>
                  <p className="text-sm opacity-90">{portfolio.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent w-full sm:w-auto px-8"
          >
            <Link href="/gallery">View All Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
