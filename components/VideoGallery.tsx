"use client"

interface Video {
  id: string
  title: string
  thumbnail: string
  url: string
}

interface VideoGalleryProps {
  videos: Video[]
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video) => (
        <div key={video.id} className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <video controls poster={video.thumbnail} className="w-full h-full object-cover">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="font-playfair text-xl font-medium">{video.title}</h3>
        </div>
      ))}
    </div>
  )
}
