"use client";

import { useRef, useState } from "react";
import { FaClock, FaStar, FaCalendarAlt } from "react-icons/fa";

export default function videoplay() {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = "g-auo0coHtc"; // Your YouTube Video ID
  
    const opts = {
      playerVars: {
        autoplay: 1, // Auto-play when the video loads
        modestbranding: 1, // Removes YouTube branding
        rel: 0, // Prevents showing related videos at the end
        controls: 0, // Hides player controls
        showinfo: 0, // Hides video title and uploader info
        fs: 0, // Disables fullscreen button
        disablekb: 1, // Disables keyboard shortcuts
        iv_load_policy: 3, // Hides annotations
        cc_load_policy: 0, // Hides closed captions
        title: 0, // Hides the title
      },
    };
  return (
    <div className="bg-black pt-[100px]">
      <div className="relative mx-auto   md:w-[1200px] md:h-[500px] h-[200px] rounded-lg overflow-hidden border-[1px] border-white">
      {/* Thumbnail (Shown Before Playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <img
            src={`https://websitevideos2020.s3.ap-south-1.amazonaws.com/Blue+and+Red+Gradient+Modern+Multi+Purpose+YouTube+Thumbnail.png`} // Dynamic thumbnail
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute bg-blue-400 border-blue-400 border-2 p-4 rounded-full shadow-lg  transition"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* YouTube Video (Appears After Click) */}
      {isPlaying && (
        <iframe
          className="w-full h-full"
          src={`https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/SMM%20FINAL%2027%20FEB%202025%20.mp4`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>

    </div>
  )
}
