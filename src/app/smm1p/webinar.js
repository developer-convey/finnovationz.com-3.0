"use client";

import { useRef, useState } from "react";
import { FaClock, FaStar, FaCalendarAlt } from "react-icons/fa";

export default function WebinarCard({ scrollToContact }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "Ckn_CLD6rgc"; // Your YouTube Video ID

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
    <section className="bg-[#0D1B2A] py-12 px-6 md:px-16 flex flex-col items-center">
      <div className="md:w-[1080px] w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Video Section */}
        <div className="relative w-full lg:w-[55%]">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border-[1px] border-white">
      {/* Thumbnail (Shown Before Playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} // Dynamic thumbnail
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute bg-[#6C63FF] p-4 rounded-full shadow-lg hover:bg-[#5548D1] transition"
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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=${opts.playerVars.modestbranding}&rel=${opts.playerVars.rel}&controls=${opts.playerVars.controls}&showinfo=${opts.playerVars.showinfo}&fs=${opts.playerVars.fs}&disablekb=${opts.playerVars.disablekb}&iv_load_policy=${opts.playerVars.iv_load_policy}&cc_load_policy=${opts.playerVars.cc_load_policy}&title=${opts.playerVars.title}`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>


          {/* Reserve Button */}
          <div className="mt-4 flex justify-center">
            <button onClick={scrollToContact} className="bg-gradient-to-r from-[#44C4B8] to-[#3A89F8] text-white px-6 py-2 rounded-full text-lg font-medium shadow-md md:w-[300px] transition hover:opacity-80">
              Reserve My Spot Now
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col w-full lg:w-[40%] text-white gap-8">
          {/* Info Boxes */}
          <div className="grid grid-cols-2 gap-5">
  <div className="flex items-center gap-3 bg-white text-[#0D1B2A] px-5 py-3 rounded-lg shadow-md">
    <img src="/t2.svg" alt="Duration" className="w-8 h-8" />
    <span className="text-md font-semibold">90 Minutes</span>
  </div>
  <div className="flex items-center gap-3 bg-white text-[#0D1B2A] px-4 py-3 rounded-lg shadow-md">
    <img src="/t1.svg" alt="Time" className="w-8 h-8" />
    <span className="text-md font-semibold">07:00 PM</span>
  </div>
  <div className="flex items-center gap-3 bg-white text-[#0D1B2A] px-5 py-3 rounded-lg shadow-md">
    <img src="/t3.svg" alt="Rating" className="w-8 h-8" />
    <span className="text-md font-semibold">9.5/10 Rating</span>
  </div>
  <div className="flex items-center gap-3 bg-white text-[#0D1B2A] px-4 py-3 rounded-lg shadow-md">
    <img src="/t4.svg" alt="Date" className="w-8 h-8" />
    <span className="text-md font-semibold">This Sunday</span>
  </div>
</div>


          {/* Enrollment Text */}
          <h2 className="text-2xl text-center text-white font-semibold">
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent">20k+</span> Enrollment Already
          </h2>
          <p className="md:text-sm text-lg text-center text-gray-300">
            Limited Seats Reserve Your Seats Now
          </p>
        </div>
      </div>
    </section>
  );
}
