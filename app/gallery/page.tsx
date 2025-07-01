import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/config/portfolios";
import Header from "@/components/Header";
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"
export default function FeaturedWork() {
  const { title, subtitle, portfolios } = portfolioData;

  return (
    <section className="pt-20 bg-[#fdf5ec]">

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-light mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={`/portfolio/${encodeURIComponent(portfolio.slug)}`}
              className="group w-full sm:w-[48%] lg:w-[22%]"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="text-left px-2">
                <h3 className="font-playfair text-lg font-medium mb-1">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-600">{portfolio.category}</p>
              </div>
            </Link>
          ))}
        </div>


      </div>
      <ContactSection data={siteData.contact} />

    </section>
  );
}
