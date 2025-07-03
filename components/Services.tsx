import Image from "next/image"
import { Check } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  image: string
}

interface ServicesData {
  title: string
  subtitle: string
  services: Service[]
}

interface ServicesProps {
  data: ServicesData
}

export default function Services({ data }: ServicesProps) {
  if (!data || !data.services) return null

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 text-stone-800">
            {data.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-4">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src={
                    service.image || "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg"
                  }
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-stone-800">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features?.map((feature, index) => (
                    <li key={index} className="flex items-start text-stone-600">
                      <Check className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
