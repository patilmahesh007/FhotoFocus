import Image from "next/image"

interface AboutData {
  title: string
  description: string
  fullDescription: string
  stats: Array<{
    number: string
    label: string
  }>
}

interface AboutProps {
  data: AboutData
}

export default function About({ data }: AboutProps) {
  if (!data) return null

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-stone-800">
              {data.title}
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">{data.description}</p>
            <p className="text-stone-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">{data.fullDescription}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {data.stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-light text-amber-700 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-stone-600 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg"
                alt="About FhotoFocus Photography"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
