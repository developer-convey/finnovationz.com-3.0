'use client';

import React from 'react';

export default function FeaturedPage() {
    const images = [
        "/f4.png",
        "/f3.svg",
        "/f1.png",
        "/f2.jpg",
      ];
  return (
    <div>
    <section className=" bg-white px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      Partners Who Trust Us
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-5 flex items-center justify-center bg-white shadow hover:shadow-md transition-shadow"
          >
            <img
              src={src}
              alt={`Featured Logo ${index + 1}`}
              className="max-h-30 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>

    </div>
  );
}
