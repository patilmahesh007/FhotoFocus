import Hero from "@/components/Hero"
import About from "@/components/About"
import FeaturedWork from "@/components/FeaturedWork"
import Services from "@/components/Services"
import VideoSection from "@/components/VideoSection"
import ContactSection from "@/components/ContactSection"
import { siteData } from "@/config/siteData"

export default function HomePage() {
  return (
    <main>
      <Hero
        image={siteData.hero.mainImage}
        alt={siteData.hero.alt}
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
      />
      <About data={siteData.about} />
      <FeaturedWork data={siteData.featuredWork} />
      <Services data={siteData.services} />
      <VideoSection />
      <ContactSection data={siteData.contact} />
    </main>
  )
}
