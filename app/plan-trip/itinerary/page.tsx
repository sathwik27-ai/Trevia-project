'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';


// Sample itinerary data structure
interface DayActivity {
  time: string;
  activity: string;
  description: string;
  location?: string;
  cost?: string;
  image?: string;
}

interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities: DayActivity[];
}

const ItineraryPage = () => {
  const searchParams = useSearchParams();
  const mood = searchParams.get('mood');

  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    duration: '3-5',
    travelers: '2',
    interests: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);

  const destinations = [
    'Rajasthan',
    'Kerala',
    'Himachal Pradesh',
    'Goa',
    'Karnataka',
    'Madhya Pradesh',
  ];

  const interestOptions = [
    'Cultural Experiences',
    'Adventure Activities',
    'Wildlife',
    'Food & Cuisine',
    'Historical Sites',
    'Spiritual Places',
    'Beach Activities',
    'Mountain Trekking',
  ];

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const generateItinerary = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real app, this would be an API call to an AI service
    // For now, we'll simulate with a timeout and mock data
    setTimeout(() => {
      const mockItinerary: ItineraryDay[] = [
        {
          day: 1,
          date: '2023-06-15',
          title: 'Arrival & Cultural Immersion',
          activities: [
            {
              time: '09:00 AM',
              activity: 'Arrival & Check-in',
              description: 'Arrive at your hotel and get settled in',
              location: 'Hotel Taj Palace',
              cost: '₹0 (pre-booked)'
            },
            {
              time: '12:00 PM',
              activity: 'Local Cuisine Experience',
              description: 'Enjoy authentic local cuisine at a popular restaurant',
              location: 'Spice Route Restaurant',
              cost: '₹1,200 for two'
            },
            {
              time: '03:00 PM',
              activity: 'Heritage Walking Tour',
              description: 'Explore the cultural heritage of the area with a guided walking tour',
              location: 'Old City Area',
              cost: '₹800 per person'
            },
            {
              time: '07:00 PM',
              activity: 'Cultural Performance',
              description: 'Experience traditional dance and music performance',
              location: 'Cultural Center',
              cost: '₹1,500 per person'
            }
          ]
        },
        {
          day: 2,
          date: '2023-06-16',
          title: 'Adventure & Nature',
          activities: [
            {
              time: '08:00 AM',
              activity: 'Breakfast & Prep',
              description: 'Enjoy a hearty breakfast before your adventure activities',
              location: 'Hotel Restaurant',
              cost: 'Included in stay'
            },
            {
              time: '10:00 AM',
              activity: 'Trekking Experience',
              description: 'Trek through beautiful natural terrain with a guide',
              location: 'Nearby Hills',
              cost: '₹1,200 per person'
            },
            {
              time: '01:00 PM',
              activity: 'Picnic Lunch',
              description: 'Enjoy a picnic lunch amidst nature',
              location: 'Scenic Viewpoint',
              cost: '₹600 per person'
            },
            {
              time: '04:00 PM',
              activity: 'Wildlife Safari',
              description: 'Spot local wildlife in their natural habitat',
              location: 'Wildlife Sanctuary',
              cost: '₹2,000 per person'
            }
          ]
        },
        {
          day: 3,
          date: '2023-06-17',
          title: 'Relaxation & Reflection',
          activities: [
            {
              time: '09:00 AM',
              activity: 'Yoga Session',
              description: 'Start your day with a rejuvenating yoga session',
              location: 'Hotel Garden',
              cost: '₹500 per person'
            },
            {
              time: '11:00 AM',
              activity: 'Spa Treatment',
              description: 'Enjoy a traditional Ayurvedic spa treatment',
              location: 'Wellness Center',
              cost: '₹3,000 per person'
            },
            {
              time: '02:00 PM',
              activity: 'Local Market Visit',
              description: 'Shop for souvenirs and local crafts',
              location: 'Artisan Market',
              cost: 'Variable'
            },
            {
              time: '07:00 PM',
              activity: 'Farewell Dinner',
              description: 'Enjoy a special dinner to conclude your trip',
              location: 'Rooftop Restaurant',
              cost: '₹2,000 for two'
            }
          ]
        }
      ];

      setItinerary(mockItinerary);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0A1B3D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/plan-trip" className="text-gray-300 hover:text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI Itinerary Planner</h1>
              {mood && (
                <div className="mt-2 text-[#7FD3F7]">
                  Based on your <span className="capitalize font-medium">{mood}</span> travel mood
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!itinerary ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-[#0A1B3D] mb-6">
                Help Us Plan Your Perfect Trip
              </h2>

              <form onSubmit={generateItinerary} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Where would you like to go?
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FD3F7] focus:border-transparent"
                    required
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    When do you want to start?
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FD3F7] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Trip duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FD3F7] focus:border-transparent"
                  >
                    <option value="3-5">3-5 days</option>
                    <option value="6-8">6-8 days</option>
                    <option value="9-12">9-12 days</option>
                    <option value="13+">13+ days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Number of travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FD3F7] focus:border-transparent"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5+">5+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Select your interests
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="h-5 w-5 text-[#7FD3F7] rounded focus:ring-[#7FD3F7]"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium ${loading ? 'bg-gray-400' : 'bg-[#0A1B3D] hover:bg-[#0A1B3D]/90'
                    } transition-colors`}
                >
                  {loading ? 'Generating Itinerary...' : 'Generate My AI Itinerary'}
                </button>

                {loading && (
                  <div className="text-center mt-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#7FD3F7] border-t-transparent"></div>
                    <p className="mt-2 text-gray-600">
                      Our AI is crafting your personalized itinerary...
                    </p>
                  </div>
                )}
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold text-[#0A1B3D] mb-6">
                  How Our AI Creates Your Itinerary
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#7FD3F7]/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1B3D]">
                        Personalization
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Our AI analyzes your preferences, chosen travel mood, and interests to create a tailored experience just for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#7FD3F7]/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1B3D]">
                        Balanced Planning
                      </h3>
                      <p className="text-gray-600 mt-1">
                        We create schedules that balance activities, relaxation, and cultural experiences, ensuring you don&apos;t miss the best each destination has to offer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#7FD3F7]/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1B3D]">
                        Budget Optimization
                      </h3>
                      <p className="text-gray-600 mt-1">
                        We recommend experiences that provide the best value, with options across various price points to fit your budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#7FD3F7]/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1B3D]">
                        Local Insights
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Our recommendations include both popular attractions and hidden gems, powered by insights from local experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1B3D]">
                    Your Custom {formData.destination} Itinerary
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {formData.duration} days • {formData.travelers} traveler(s) • {mood ? `${mood} mood` : ''}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="inline-flex items-center px-4 py-2 border border-[#0A1B3D] text-[#0A1B3D] rounded-lg hover:bg-[#0A1B3D] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Save Itinerary
                  </button>
                  <button className="inline-flex items-center px-4 py-2 bg-[#7FD3F7] text-[#0A1B3D] rounded-lg hover:bg-[#7FD3F7]/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print or Share
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex overflow-x-auto space-x-4 pb-4">
                  {itinerary.map((day) => (
                    <button
                      key={day.day}
                      className="flex-shrink-0 px-4 py-2 border-2 border-[#0A1B3D] rounded-lg text-[#0A1B3D] font-medium hover:bg-[#0A1B3D] hover:text-white transition-colors"
                    >
                      Day {day.day}: {day.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#0A1B3D] p-6 text-white">
                  <h3 className="text-xl font-bold">Day {day.day}: {day.title}</h3>
                  <p className="text-gray-300 mt-1">{day.date}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <div className="w-24 flex-shrink-0 text-[#0A1B3D] font-medium">
                          {activity.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[#0A1B3D]">
                            {activity.activity}
                          </h4>
                          <p className="text-gray-600 mt-1">
                            {activity.description}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                            {activity.location && (
                              <div className="flex items-center mr-4 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {activity.location}
                              </div>
                            )}
                            {activity.cost && (
                              <div className="flex items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {activity.cost}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 flex justify-between">
                  <button className="text-[#0A1B3D] hover:text-[#7FD3F7] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <button className="text-[#0A1B3D] hover:text-[#7FD3F7] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-[#7FD3F7]/10 rounded-xl p-6 border border-[#7FD3F7]/30">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#7FD3F7] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1B3D]">
                    Expert Tip
                  </h3>
                  <p className="text-gray-600 mt-1">
                    This itinerary is fully customizable! You can adjust activities, add personal preferences, or request alternative options. Use the edit buttons to make changes to each day&apos;s plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const ItineraryPageWrapper = () => (
  <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
    <ItineraryPage />
  </Suspense>
);

export default ItineraryPageWrapper; 