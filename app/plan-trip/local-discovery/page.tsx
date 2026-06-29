'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Hidden gems data structure
interface LocalExperience {
  id: string;
  title: string;
  location: string;
  description: string;
  type: 'Festival' | 'Food' | 'Cultural' | 'Natural' | 'Adventure';
  image: string;
  season: string;
  rating: number;
}

// Sample data for local experiences
const localExperiences: LocalExperience[] = [
  {
    id: '1',
    title: 'Hornbill Festival',
    location: 'Nagaland',
    description: 'Experience the vibrant "Festival of Festivals" celebrating Naga heritage through music, dance, and cultural performances.',
    type: 'Festival',
    image: '/images/cities/hornbill.jpg',
    season: 'December',
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Spiti Valley Monastery Trek',
    location: 'Himachal Pradesh',
    description: 'Trek through remote villages to ancient monasteries perched on hilltops with breathtaking Himalayan views.',
    type: 'Adventure',
    image: '/images/cities/himachal.jpg',
    season: 'June-September',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Kaas Plateau Flower Valley',
    location: 'Maharashtra',
    description: 'Witness the magical transformation of this UNESCO World Heritage site as it blooms with thousands of wildflowers.',
    type: 'Natural',
    image: '/images/cities/kaas.jpg',
    season: 'August-September',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Malana Village Experience',
    location: 'Himachal Pradesh',
    description: 'Visit one of India\'s oldest democracies with unique customs, architecture and traditions isolated from the outside world.',
    type: 'Cultural',
    image: '/images/cities/himachal.jpg',
    season: 'May-October',
    rating: 4.6,
  },
  {
    id: '5',
    title: 'Theyyam Ritual Performance',
    location: 'Kerala',
    description: 'Witness the ancient ritual dance form where performers embody deities through elaborate costumes and intense movements.',
    type: 'Cultural',
    image: '/images/cities/kerala.jpg',
    season: 'November-May',
    rating: 4.9,
  },
  {
    id: '6',
    title: 'Hyderabadi Home Cooking Class',
    location: 'Telangana',
    description: 'Learn authentic Hyderabadi recipes from local families who share culinary secrets passed down for generations.',
    type: 'Food',
    image: '/images/cities/hyderabad.jpg',
    season: 'Year-round',
    rating: 4.8,
  },
];

const LocalDiscoveryPage = () => {
  const searchParams = useSearchParams();
  const mood = searchParams.get('mood');

  const [filters, setFilters] = useState({
    type: 'all',
    season: 'all',
    searchTerm: '',
  });

  // Filter experiences based on mood and other filters
  const filteredExperiences = localExperiences.filter(exp => {
    // Apply type filter
    if (filters.type !== 'all' && exp.type !== filters.type) {
      return false;
    }

    // Apply season filter
    if (filters.season !== 'all' && !exp.season.toLowerCase().includes(filters.season.toLowerCase())) {
      return false;
    }

    // Apply search filter
    if (filters.searchTerm && !exp.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !exp.location.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !exp.description.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0A1B3D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/plan-trip" className="text-gray-300 hover:text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Local Discovery</h1>
              <p className="text-gray-300 mt-2">Uncover hidden gems and authentic experiences</p>
              {mood && (
                <span className="inline-block mt-2 bg-[#7FD3F7] text-[#0A1B3D] px-3 py-1 rounded-full text-sm font-medium">
                  {mood.charAt(0).toUpperCase() + mood.slice(1)} Mood
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and filter controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search experiences
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name, location or description"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={filters.searchTerm}
                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Experience type
              </label>
              <select
                id="type"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="all">All Types</option>
                <option value="Festival">Festivals</option>
                <option value="Food">Food</option>
                <option value="Cultural">Cultural</option>
                <option value="Natural">Natural</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>

            <div>
              <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-1">
                Season
              </label>
              <select
                id="season"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={filters.season}
                onChange={(e) => setFilters({ ...filters, season: e.target.value })}
              >
                <option value="all">All Seasons</option>
                <option value="Year-round">Year-round</option>
                <option value="Winter">Winter (Dec-Feb)</option>
                <option value="Summer">Summer (Mar-Jun)</option>
                <option value="Monsoon">Monsoon (Jul-Sep)</option>
                <option value="Autumn">Autumn (Oct-Nov)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Experiences list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  {exp.image ? (
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">{exp.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-[#0A1B3D]">{exp.title}</h3>
                    <span className="bg-[#7FD3F7]/20 text-[#0A1B3D] text-xs px-2 py-1 rounded">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Best time: {exp.season}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{exp.description}</p>
                  <button className="w-full bg-[#0A1B3D] text-white py-2 rounded-lg hover:bg-[#0A1B3D]/90 transition-colors">
                    Add to Itinerary
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No experiences found</h3>
              <p className="text-gray-500">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LocalDiscoveryPageWrapper = () => (
  <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
    <LocalDiscoveryPage />
  </Suspense>
);

export default LocalDiscoveryPageWrapper; 