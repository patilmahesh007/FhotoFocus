import Hero from "@/components/Hero"
import About from "@/components/About"
import FeaturedWork from "@/components/FeaturedWork"
import Services from "@/components/Services"
import ContactSection from "@/components/ContactSection"
import { siteData } from "@/config/siteData"
import WeddingGallery from "@/components/WeddingGallery"
import Vid from "@/components/vid"
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero
        image={siteData.hero.mainImage}
        alt={siteData.hero.alt}
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
      />
      <About data={siteData.about} />
      {/* <WeddingGallery /> */}
      <FeaturedWork data={siteData.featuredWork} />
      {/* <Vid /> */}
      <Services data={siteData.services} />
      <ContactSection data={siteData.contact} />
    </div>
  )
}
