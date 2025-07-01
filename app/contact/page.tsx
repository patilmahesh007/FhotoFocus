import ContactForm from "@/components/ContactForm"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "#eee1d0" }}>
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-2xl mx-auto">
          {/* <h1 className="font-playfair text-4xl md:text-6xl text-center mb-12">Contact Us</h1> */}
          <ContactForm />
        </div>
      </div>
      <ContactSection data={siteData.contact} />
    </div>
  )
}
