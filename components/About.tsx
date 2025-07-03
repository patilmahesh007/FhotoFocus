// Image URLs Object - replace or add missing entries as needed
const imageUrls = {
  portraitGirl: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg", // Top Left
  landscapeCross: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501472/_A2A6442_m9ufby.jpg", // Top Middle
  coupleHappy: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg", // Top Right Large
  weddingCeremony: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg", // Bottom Left Large
  weddingDetails: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg", // Bottom Right Small
  extraImage: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
  weddingPortraitCloseup: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg", // Extra Image
  romanceLogo: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501540/VS1_66_rf2nxp.jpg", // Background with overlay
}

// Simple helper to render an image or fallback if missing
const RenderImageOrFallback = ({ src, alt, className }) => {
  if (!src) {
    console.warn(`Missing image URL for "${alt}"`)
    return (
      <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className || ""}`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    )
  }
  return <img src={src || "/placeholder.svg"} alt={alt} className={className} />
}

const MasonryGrid = () => {
  return (
    <div className="min-h-screen bg-[#e1b5320d] p-2 sm:p-4 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Masonry Grid Layout */}
        <div className="hidden md:grid grid-cols-12 gap-4" style={{ height: "90vh" }}>
          {/* Top Left - Portrait Girl */}
          <div className="col-span-3 row-span-3">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <RenderImageOrFallback
                src={imageUrls.portraitGirl}
                alt="Portrait Girl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Top Middle - Landscape/Cross */}
          <div className="col-span-3 row-span-3">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <RenderImageOrFallback
                src={imageUrls.landscapeCross}
                alt="Landscape Cross"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Top Right - Couple Happy with "Blogg" */}
          <div className="col-span-6 row-span-6">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-white relative">
              <img
                src={imageUrls.coupleHappy || "/placeholder.svg"}
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-6xl font-bold mb-2 opacity-90">Blogg</h2>
                  <div className="text-sm opacity-70">Happy Couple</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Wedding Ceremony */}
          <div className="col-span-6 row-span-6">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <RenderImageOrFallback
                src={imageUrls.weddingCeremony}
                alt="Wedding Ceremony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Right Top - Romance Logo with Overlay */}
          <div className="col-span-3 row-span-3">
            <div
              className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url('${imageUrls.romanceLogo}')` }}
            ></div>
          </div>

          {/* Bottom Right Bottom - Wedding Details */}
          <div className="col-span-3 row-span-3">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <RenderImageOrFallback
                src={imageUrls.weddingDetails}
                alt="Wedding Details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Note: extraImage removed from desktop */}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Mobile - Couple with Blogg */}
          <div className="h-80 relative border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
            <img
              src={imageUrls.coupleHappy || "/placeholder.svg"}
              alt="Happy Couple"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-2 opacity-90">Blogg</h2>
                <div className="text-sm opacity-70">Happy Couple</div>
              </div>
            </div>
          </div>

          {/* Mobile - Two column row */}
          <div className="grid grid-cols-2 gap-4 h-48">
            <RenderImageOrFallback
              src={imageUrls.portraitGirl}
              alt="Portrait Girl"
              className="w-full h-full object-cover"
            />
            <RenderImageOrFallback
              src={imageUrls.landscapeCross}
              alt="Landscape Cross"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile - Wedding Ceremony */}
          <div className="h-64 border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
            <RenderImageOrFallback
              src={imageUrls.weddingCeremony}
              alt="Wedding Ceremony"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile - Romance Logo & Wedding Details */}
          <div className="grid grid-cols-2 gap-4 h-40">
            <div
              className="relative border-2 border-gray-300 rounded-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url('${imageUrls.romanceLogo}')` }}
            ></div>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <RenderImageOrFallback
                src={imageUrls.weddingDetails}
                alt="Wedding Details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile - Extra Image (visible only on mobile) */}
          <div className="h-40 border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
            <RenderImageOrFallback src={imageUrls.extraImage} alt="Extra" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasonryGrid
