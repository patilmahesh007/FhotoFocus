"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

import blackLogo from "@/public/blacklogo.png";
import whiteLogo from "@/public/whitelogo.png";

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // track scroll for transparent→colored header
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  // showWhite only matters for text/icon color on Home unscrolled
  const showWhite = isHome && !isScrolled;

  const textColor = showWhite
    ? "text-white hover:text-gray-200"
    : "text-gray-900 hover:text-gray-600";
  const iconColor = showWhite
    ? "text-white hover:text-gray-200"
    : "text-gray-700 hover:text-black";

  return (
    <>
      {/* ========== HEADER BAR ========== */}
      <header
        className={`fixed top-0 left-0 right-0 h-28 z-[9999] transition-all duration-300 flex items-center ${isScrolled
            ? "bg-[#eee1d0] backdrop-blur-sm border-b border-gray-100 shadow-sm"
            : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between w-full px-4 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1 items-center h-full">
            <Link href="/" className="relative w-28 h-14 flex items-center">
          <span
  className={`font-playfair text-3xl font-bold tracking-tight transition-colors duration-300 ${
    isScrolled ? "text-black" : "text-white"
  }`}
>
  VSPF
</span>
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 transition-colors ${textColor}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social + CTA on desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <Link
              href="https://www.instagram.com/vishalshirkephotography/"
              className={iconColor}
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Button
              asChild
              className="ml-4 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* ========== MOBILE MENU OVERLAY & PANEL ========== */}
      {mobileMenuOpen && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[10000]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* slide-in panel */}
          <div className="fixed top-0 right-0 z-[10001] h-full w-4/5 sm:w-[400px] bg-white shadow-lg px-4 py-4 overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-28 h-10">
                  <Image
                    src={blackLogo}
                    alt="Vishal Shirke Photography"
                    fill
                    className="object-contain"
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

            <div className="mt-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.instagram.com/vishalshirkephotography/"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            
            </div>

            <Button
              asChild
              className="mt-6 w-full bg-amber-700 hover:bg-amber-800 text-white"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
