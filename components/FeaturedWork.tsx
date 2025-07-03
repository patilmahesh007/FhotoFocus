import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedWork() {
  const data = {
    title: "Signature Weddings",
    subtitle: "Moments from love stories I've had the privilege to preserve",
    portfolios: [
      {
        id: "1",
        title: "Rutuja & Pratik",
        category: "March 2nd, 2025",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg",
        slug: "Rutuja-and-Pratik",
      },
      {
        id: "2",
        title: "Mihir & kathleen",
        category: "March 20th, 2025",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
        slug: "Mihir-and-kathleen",
      },
      {
        id: "3",
        title: "Shubham & Parmita",
        category: "February 20th, 2025",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
        slug: "Shubham-and-Parmita",
      },
      {
        id: "4",
        title: "Priyanshi & Akshay",
        category: "December 6th, 2024",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
        slug: "Priyanshi-and-Akshay",
      },
    ],
  }

  return (
    <section className="py-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-proxima text-4xl md:text-5xl font-light mb-4">{data.title}</h2>
          <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {data.portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={`/portfolio/${portfolio.slug}`}
              className="group w-full sm:w-[48%] lg:w-[22%]"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                <Image
                  src={portfolio.image || "/placeholder.svg"}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="text-left px-2">
                <h3 className="font-proxima text-xl text-lg font-medium mb-1">{portfolio.title}</h3>
                {/* <p className="text-sm text-gray-600">{portfolio.category}</p> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
