'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use directly from cities directory
  const backgrounds = [
    '/images/cities/Amritsar.jpg',
    '/images/cities/Rajasthan.jpg',
    '/images/cities/kerala.jpg',
    '/images/cities/himachal.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Background Images - Absolute positioned to take full screen */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 1 }}
        >
          <Image
            src={bg}
            alt="India landscapes"
            fill
            className="object-cover" 
            sizes="100vw"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Explore India with <span className="text-[#7FD3F7]">AI-Powered</span> Travel Planning
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Discover personalized itineraries, local insights, and smart recommendations for your perfect Indian adventure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/destinations"
            className="px-8 py-4 bg-[#7FD3F7] text-[#0A1B3D] rounded-lg font-semibold hover:bg-white transition-colors duration-300 text-lg"
          >
            Explore Destinations
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0A1B3D] transition-colors duration-300 text-lg"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce" style={{ zIndex: 10 }}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 