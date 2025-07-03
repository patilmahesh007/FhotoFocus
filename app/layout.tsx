import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "FhotoFocus Photography - Capturing Life's Beautiful Moments",
  description:
    "Professional wedding, pre-wedding, and fashion photography services in Mumbai, India. Capturing life's beautiful moments with artistic vision and professional excellence.",
  keywords:
    "wedding photography, pre-wedding photography, fashion photography, Mumbai photographer, India wedding photographer",
  authors: [{ name: "FhotoFocus Photography" }],
  openGraph: {
    title: "FhotoFocus Photography - Capturing Life's Beautiful Moments",
    description: "Professional wedding, pre-wedding, and fashion photography services in Mumbai, India.",
    url: "https://fhotofocusphotography.com",
    siteName: "FhotoFocus Photography",
    images: [
      {
        url: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
        width: 1200,
        height: 630,
        alt: "FhotoFocus Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FhotoFocus Photography - Capturing Life's Beautiful Moments",
    description: "Professional wedding, pre-wedding, and fashion photography services in Mumbai, India.",
    images: ["https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
