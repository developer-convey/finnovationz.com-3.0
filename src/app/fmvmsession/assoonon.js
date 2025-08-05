"use client";
import React from 'react';
import Link from 'next/link';

// Array to hold the logo data
const logos = [
  {
    name: 'The Economic Times',
    src: 'https://cdn.brandfetch.io/idVKoEIatJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748355972468',
    href: '#',
  },
  {
    name: 'Mint',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mint_%28newspaper%29_logo.svg/2560px-Mint_%28newspaper%29_logo.svg.png',
    href: '#',
  },
  {
    name: 'Business World',
    src: 'https://static.businessworld.in/bw-main-logo.png',
    href: '#',
  },
  {
    name: 'Telangana Today',
    src: 'https://telanganatoday.com/wp-content/themes/telangana-today-main/images/tt-logo-1.png',
    href: '#',
  },
  {
    name: 'The Japan Times',
    src: 'https://www.japantimes.co.jp/theme_japantimes/images/logo.svg',
    href: '#',
  },
];

const FeaturedOn = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto  ">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Featured On
        </h1>

        {/* Scroll container with overflow hidden */}
        <div className="relative overflow-hidden">
          {/* Logo wrapper for continuous scrolling */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* Original logos */}
            {logos.map((logo) => (
              <Link
                key={`original-${logo.name}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-4"
              >
                <img
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={logo.src}
                  alt={logo.name}
                  width={158}
                  height={48}
                />
              </Link>
            ))}
            {/* Duplicated logos for seamless loop */}
            {logos.map((logo) => (
              <Link
                key={`duplicate-${logo.name}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-4"
              >
                <img
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={logo.src}
                  alt={logo.name}
                  width={158}
                  height={48}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for scrolling animation */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        /* Ensure responsiveness for mobile */
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 15s; /* Faster scroll on mobile for better UX */
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedOn;