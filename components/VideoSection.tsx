"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoItem {
  id: number
  title: string
  subtitle: string
  thumbnail: string
  videoUrl: string
}

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({})
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videos: VideoItem[] = [
    {
      id: 1,
      title: "WEDDING HIGHLIGHTS",
      subtitle: "Romantic Moments Captured",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 2,
      title: "PRE-WEDDING STORY",
      subtitle: "Love in Every Frame",
      thumbnail: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    },
    {
      id: 3,
      title: "ENGAGEMENT SESSION",
      subtitle: "The Beginning of Forever",
      thumbnail: "https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=800&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
    },
    {
      id: 4,
      title: "COUPLE PORTRAITS",
      subtitle: "Timeless Elegance",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
  ]

  const initializeVideo = (videoId: number, index: number) => {
    // Pause all other videos
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return
      if (idx !== index) {
        vid.pause()
        vid.currentTime = 0
      }
    })

    const vid = videoRefs.current[index]
    if (!vid) return

    vid.muted = mutedVideos[videoId] ?? false
    vid.play().catch(console.error)
    setPlayingVideo(videoId)
  }

  const togglePlay = (videoId: number, index: number) => {
    const vid = videoRefs.current[index]
    if (!vid) return

    if (playingVideo === videoId) {
      vid.pause()
      setPlayingVideo(null)
    } else {
      initializeVideo(videoId, index)
    }
  }

  const toggleMute = (videoId: number, index: number) => {
    const isMuted = mutedVideos[videoId] ?? false
    setMutedVideos((prev) => ({ ...prev, [videoId]: !isMuted }))

    const vid = videoRefs.current[index]
    if (vid) vid.muted = !isMuted
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">Our Video Stories</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the magic of our cinematography through these beautiful wedding stories
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, idx) => {
            const isPlaying = playingVideo === video.id
            return (
              <div
                key={video.id}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail - shown when video is not playing */}
                {!isPlaying && (
                  <div
                    className="relative w-full h-64 sm:h-72 md:h-80 bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                    onClick={() => initializeVideo(video.id, idx)}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center flex-col">
                      {/* Play Button */}
                      <div className="mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                        </div>
                      </div>

                      {/* Video Title */}
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wider mb-2 text-center px-4">
                        {video.title}
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide text-center px-4">
                        {video.subtitle}
                      </p>
                    </div>
                  </div>
                )}

                {/* Video Element */}
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className={`w-full h-64 sm:h-72 md:h-80 object-cover ${isPlaying ? "block" : "hidden"}`}
                  playsInline
                  muted={mutedVideos[video.id]}
                  onClick={() => togglePlay(video.id, idx)}
                  src={video.videoUrl}
                  onEnded={() => setPlayingVideo(null)}
                />

                {/* Video Controls - shown when playing */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePlay(video.id, idx)
                        }}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <Pause className="w-6 h-6" />
                      </button>

                      <div className="flex-1 mx-4">
                        <h4 className="text-white text-sm font-medium">{video.title}</h4>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute(video.id, idx)
                        }}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {mutedVideos[video.id] ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-gray-600 mb-6">Ready to create your own cinematic love story?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base font-medium">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
