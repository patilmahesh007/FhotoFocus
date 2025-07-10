"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Achievements", href: "/achievements" },
  { name: "About Us", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Body lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  const isHome = pathname === "/"
  const iconColor =
    isHome && !isScrolled ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"
  const textColor =
    isHome && !isScrolled ? "text-white hover:text-gray-200" : "text-gray-900 hover:text-gray-600"

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 h-20 md:h-28 z-[9999] flex items-center transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#eee1d0] backdrop-blur-sm border-b border-gray-100 shadow-sm"
            : "bg-transparent border-0 shadow-none"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between w-full px-4 lg:px-8">
          {/* Left Navigation */}
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 lg:flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 transition-colors ${textColor} ${
                  pathname === item.href ? "border-b-2 border-amber-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <div className="flex items-center h-full">
            <Link href="/" className="relative flex items-center">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1752142129/WhatsApp_Image_2025-07-01_at_11.53.06_44026133_meknv6.jpg"
                  alt="FhotoFocus Photography Logo"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
              <span className="sr-only">FhotoFocus Photography Home</span>
            </Link>
          </div>

          {/* Right: Social + CTA + Mobile Menu Toggle */}
          <div className="flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Link
                href="https://www.instagram.com/fhotofocusphotography/"
                className={iconColor}
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-4 xl:px-6 py-2">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className={`-m-2.5 p-2.5 transition-colors ${iconColor}`}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-[10000]" onClick={() => setMobileMenuOpen(false)} />

          {/* Slide-in Drawer */}
          <div className="fixed top-0 right-0 z-[10001] h-full w-full sm:w-4/5 max-w-sm bg-white shadow-lg px-4 py-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <div className="relative w-10 h-10">
                  <Image
                    src="https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501584/_J7A8868_da7lor.jpg"
                    alt="FhotoFocus Photography Logo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-medium text-gray-900 hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href ? "bg-amber-50 text-amber-700" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <Link
                  href="https://www.instagram.com/fhotofocusphotography/"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
              <Button asChild className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
