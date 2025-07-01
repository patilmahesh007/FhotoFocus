interface ServicesProps {
  data: {
    title: string
    services: Array<{
      name: string
      description: string
      icon: string
    }>
  }
}

export default function Services({ data }: ServicesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-light">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.services.map((service, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-sans text-xl font-medium">{service.name}</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
