'use client';

import { useState } from 'react';
import Image from 'next/image';

const ExploreIndia = () => {
  const destinations = [
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      image: 'https://source.unsplash.com/800x600/?mumbai,gateway',
      tip: 'Experience the vibrant street food scene at Chowpatty Beach.',
    },
    {
      city: 'Jaipur',
      state: 'Rajasthan',
      image: 'https://source.unsplash.com/800x600/?jaipur,palace',
      tip: 'Visit Amer Fort during sunrise for breathtaking views.',
    },
    {
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      image: 'https://source.unsplash.com/800x600/?varanasi,ganges',
      tip: 'Experience the spiritual evening aarti at Dashashwamedh Ghat.',
    },
    {
      city: 'Kerala',
      state: 'Backwaters',
      image: 'https://source.unsplash.com/800x600/?kerala,backwaters',
      tip: 'Take a traditional houseboat tour through the serene backwaters.',
    },
    {
      city: 'Agra',
      state: 'Uttar Pradesh',
      image: 'https://source.unsplash.com/800x600/?agra,tajmahal',
      tip: 'Visit the Taj Mahal during full moon nights for a magical experience.',
    },
    {
      city: 'Goa',
      state: 'Beaches',
      image: 'https://source.unsplash.com/800x600/?goa,beach',
      tip: 'Explore the Portuguese architecture in Old Goa.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore India</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the diverse beauty and rich culture of India through our curated destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.city}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={destination.image}
                  alt={destination.city}
                  fill
                  unoptimized
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                  }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {destination.city}
                  <span className="text-sm font-normal ml-2 opacity-80">{destination.state}</span>
                </h3>
                <p
                  className={`text-sm transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    }`}
                >
                  {destination.tip}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreIndia; 