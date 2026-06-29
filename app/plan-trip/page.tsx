'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define our travel mood options - reduced to 4
const travelMoods = [
  {
    id: 'adventure',
    title: 'Adventure',
    description: 'Thrilling activities and outdoor experiences',
    icon: '/images/icons/adventure.svg',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'culture',
    title: 'Culture',
    description: 'Immerse in local traditions, arts, and history',
    icon: '/images/icons/culture.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'relaxation',
    title: 'Relaxation',
    description: 'Peaceful retreats and rejuvenating experiences',
    icon: '/images/icons/relaxation.svg',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'spiritual',
    title: 'Spiritual',
    description: 'Sacred sites and mindful experiences',
    icon: '/images/icons/spiritual.svg',
    color: 'from-green-400 to-emerald-500',
  }
];

// Define our main feature options
const plannerFeatures = [
  {
    id: 'itinerary',
    title: 'AI Itinerary',
    description: 'Generate a day-by-day plan customized to your preferences',
    icon: '/images/icons/itinerary.svg',
  },
  {
    id: 'local-discovery',
    title: 'Local Discovery',
    description: 'Find hidden gems, festivals, and authentic experiences',
    icon: '/images/icons/discovery.svg',
  },
  {
    id: 'budget',
    title: 'Budget Planning',
    description: 'Track expenses and find options that match your budget',
    icon: '/images/icons/budget.svg',
  },
  {
    id: 'safety',
    title: 'Safety Guide',
    description: 'Regional safety tips and emergency information',
    icon: '/images/icons/safety.svg',
  },
];

const PlanTripPage = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Function to handle mood selection
  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setShowForm(true);
  };

  // Function to go back to mood selection
  const handleBackToMoods = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background - improved HD quality */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.85) saturate(1.2) contrast(1.1)',
              transform: 'scale(1.01)' // Slight zoom to avoid white edges during transitions
            }}
          >
            <source src="/videos/india-travel-background.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Enhanced overlay gradient for better text contrast and logo blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40 backdrop-filter backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-screen flex flex-col justify-between">
        {/* Logo Section - made more prominent and better blended */}
        <div className="text-center mb-8 mt-8">
          <div className="flex justify-center">
            {/* We're keeping the logo but enhancing how it blends */}
            <Link href="/" className="relative cursor-pointer transition-transform hover:scale-105">
              <div className="absolute -inset-4 bg-black/20 rounded-xl backdrop-blur-sm -z-10"></div>
              <Image
                src="/images/logo2.jpg"
                alt="Trevia"
                width={300}
                height={150}
                className="mix-blend-screen drop-shadow-lg"
                style={{
                  filter: 'brightness(1.3) contrast(1.3) saturate(1.1)',
                  transform: 'scale(1.02)'
                }}
              />
            </Link>
          </div>
        </div>

        {!showForm ? (
          /* Mood Selection Section - now horizontal at bottom */
          <div className="mt-auto pb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-4 drop-shadow-md">What&apos;s your travel mood?</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Select a mood that best describes the experience you&apos;re looking for
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {travelMoods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className="group relative bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-xl overflow-hidden transition-all duration-300 h-48 md:h-56 border border-white/30 hover:shadow-lg hover:shadow-[#7FD3F7]/20 transform hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white">
                    <div className="mb-4 p-3 rounded-full bg-white/30 group-hover:bg-white/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Image src={mood.icon} alt={mood.title} width={40} height={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#7FD3F7]">{mood.title}</h3>
                    <p className="text-center text-white/90">{mood.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Planning Tools Section */
          <div className="space-y-12 mt-auto pb-12">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handleBackToMoods}
                className="flex items-center text-white hover:text-[#7FD3F7] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Travel Moods
              </button>
              <div className="text-white bg-[#0A1B3D]/50 backdrop-blur-md rounded-full px-4 py-1">
                Selected: <span className="font-semibold capitalize">{selectedMood}</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-4 drop-shadow-md">
                Start Planning Your Trip
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Choose a planning tool to begin crafting your perfect Indian adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {plannerFeatures.map((feature) => (
                <Link
                  key={feature.id}
                  href={`/plan-trip/${feature.id}?mood=${selectedMood}`}
                  className="group relative bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-xl overflow-hidden transition-all duration-300 border border-white/30 flex flex-col items-center p-6 h-48 md:h-56 hover:shadow-lg hover:shadow-[#7FD3F7]/20 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D]/50 to-[#7FD3F7]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="mb-4 p-4 rounded-full bg-white/30 group-hover:bg-white/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative z-10">
                    <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#7FD3F7] transition-colors relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-center text-white/90 group-hover:text-white transition-colors text-sm relative z-10">
                    {feature.description}
                  </p>
                  <div className="mt-auto text-white mt-4 relative z-10 transition-all duration-300 group-hover:translate-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanTripPage; 