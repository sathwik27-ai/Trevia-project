'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  category: 'Popular' | 'Cultural' | 'Adventure' | 'Wildlife';
}

const destinations: Destination[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Experience the royal heritage and vibrant culture of India\'s largest state.',
    image: '/images/cities/Rajasthan.jpg',
    highlights: ['Amber Fort', 'Thar Desert', 'City Palace', 'Mehrangarh Fort'],
    category: 'Cultural',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Discover the serene backwaters and lush landscapes of God\'s Own Country.',
    image: '/images/cities/kerala.jpg',
    highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Fort Kochi', 'Wayanad Wildlife'],
    category: 'Popular',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    description: 'Explore the majestic Himalayas and charming hill stations.',
    image: '/images/cities/himachal.jpg',
    highlights: ['Shimla', 'Manali', 'Dharamshala', 'Spiti Valley'],
    category: 'Adventure',
  },
  {
    id: 'goa',
    name: 'Goa',
    description: 'Relax on pristine beaches and experience vibrant nightlife.',
    image: '/images/cities/goa.jpg',
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Spice Plantations'],
    category: 'Popular',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    description: 'Visit ancient temples and tech hubs in this diverse state.',
    image: '/images/cities/karnataka.jpg',
    highlights: ['Hampi', 'Mysore Palace', 'Coorg', 'Bandipur National Park'],
    category: 'Cultural',
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description: 'Witness incredible wildlife and historical monuments.',
    image: '/images/cities/madhyapradesh.jpg',
    highlights: ['Khajuraho Temples', 'Bandhavgarh Tiger Reserve', 'Orchha Fort', 'Sanchi Stupa'],
    category: 'Wildlife',
  },
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0A1B3D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Explore India&apos;s Finest Destinations
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover the diverse landscapes, rich culture, and unforgettable experiences across India&apos;s
            most beautiful destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link
              href={`/destinations/${destination.id}`}
              key={destination.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#7FD3F7] text-[#0A1B3D] px-3 py-1 rounded-full text-sm font-medium">
                      {destination.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#0A1B3D] mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#0A1B3D]">Highlights:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-600 text-sm">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage; 