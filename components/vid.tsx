"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Expand } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  location?: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoPortfolio() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
  const [progress, setProgress] = useState<Record<number, number>>({});
  const [volume, setVolume] = useState<Record<number, number>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos: VideoItem[] = [
    {
      id: 1,
      title: "TAMANNA&DAN",
      subtitle: "Vishal Shirke Photography",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      videoUrl:
        "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
    },
    {
      id: 2,
      title: "ALISHA&RAHUL",
      subtitle: "Amalfi Coast, Italy",
      location: "Vishal Shirke photography",
      thumbnail:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      videoUrl:
        "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
    },
    {
      id: 3,
      title: "SID SALONI",
      subtitle: "Trailer // Bangkok",
      location: "Vishal Shirke photography",
      thumbnail:
        "https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=800&h=600&fit=crop",
      videoUrl:
        "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
    },
    {
      id: 4,
      title: "ZINA&ZAIN",
      subtitle: "",
      location: "Vishal Shirke photography",
      thumbnail:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      videoUrl:
        "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
    },
  ];

  // Setup timeupdate listeners once videos refs are ready
  useEffect(() => {
    const listeners: (() => void)[] = [];

    videos.forEach((video, idx) => {
      const vid = videoRefs.current[idx];
      if (!vid) return;

      const onTimeUpdate = () => {
        if (vid.duration) {
          const percent = (vid.currentTime / vid.duration) * 100;
          setProgress((prev) => ({ ...prev, [video.id]: percent }));
        }
      };
      vid.addEventListener("timeupdate", onTimeUpdate);
      listeners.push(() => vid.removeEventListener("timeupdate", onTimeUpdate));
    });

    return () => {
      listeners.forEach((remove) => remove());
    };
  }, [videos]);

  const initializeVideo = (videoId: number, index: number) => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx !== index) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    const vid = videoRefs.current[index];
    if (!vid) return;

    vid.volume = volume[videoId] ?? 1;
    vid.muted = mutedVideos[videoId] ?? false;

    vid.play().catch(console.error);

    setPlayingVideo(videoId);
  };

  const togglePlay = (videoId: number, index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (playingVideo === videoId) {
      vid.pause();
      setPlayingVideo(null);
    } else {
      initializeVideo(videoId, index);
    }
  };

  const toggleMute = (videoId: number) => {
    const isMuted = mutedVideos[videoId] ?? false;
    setMutedVideos((prev) => ({ ...prev, [videoId]: !isMuted }));

    const index = videos.findIndex((v) => v.id === videoId);
    const vid = videoRefs.current[index];
    if (vid) vid.muted = !isMuted;
  };

  const handleProgressChange = (videoId: number, index: number, value: number) => {
    const vid = videoRefs.current[index];
    if (vid?.duration) {
      vid.currentTime = (value / 100) * vid.duration;
      setProgress((prev) => ({ ...prev, [videoId]: value }));
    }
  };

  const requestFullscreen = (index: number) => {
    const video = videoRefs.current[index];
    if (video?.requestFullscreen) {
      video.requestFullscreen().catch(console.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((video, idx) => {
          const isPlaying = playingVideo === video.id;
          return (
            <div
              key={video.id}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Background thumbnail shown only if video is NOT playing */}
              {!isPlaying && (
                <div
                  className="relative w-full h-60 sm:h-80 md:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                  onClick={() => initializeVideo(video.id, idx)}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center flex-col">
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-2">
                      {video.title}
                    </h2>
                    {video.subtitle && !video.subtitle.includes("HOUSE") && (
                      <p className="text-white text-sm sm:text-lg md:text-xl font-light tracking-wide">
                        {video.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Video element always rendered but hidden if not playing */}
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                className={`w-full h-60 sm:h-80 md:h-96 object-cover ${
                  isPlaying ? "block" : "hidden"
                }`}
                playsInline
                muted={mutedVideos[video.id]}
                onClick={() => togglePlay(video.id, idx)}
                onDoubleClick={() => requestFullscreen(idx)}
                src={video.videoUrl}
              />

              {/* Controls overlay only visible when playing or on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transition-opacity duration-300 ${
                  isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(video.id, idx);
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress[video.id] || 0}
                    onChange={(e) =>
                      handleProgressChange(video.id, idx, +e.target.value)
                    }
                    className="flex-1 mx-2 accent-white"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(video.id);
                    }}
                  >
                    {mutedVideos[video.id] ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      requestFullscreen(idx);
                    }}
                  >
                    <Expand className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
