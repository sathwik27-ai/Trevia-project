'use client';

import Link from 'next/link';
import Image from 'next/image';

const SafetyPage = () => {
  const safetyTips = [
    {
      title: 'Stay Connected',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        'Keep your phone charged and have a local SIM card. Share your itinerary with family or friends.',
    },
    {
      title: 'Document Safety',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        'Keep digital and physical copies of important documents like passport, visa, and insurance.',
    },
    {
      title: 'Health Precautions',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      description:
        'Carry a basic first aid kit, any necessary medications, and drink only bottled or filtered water.',
    },
    {
      title: 'Transportation Safety',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      description:
        'Use registered taxis or ride-sharing apps. For public transport, keep valuables secure and be aware of surroundings.',
    },
    {
      title: 'Cultural Respect',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      description:
        'Research local customs, dress codes, and behaviors, especially when visiting religious sites.',
    },
    {
      title: 'Emergency Contacts',
      icon: (
        <svg
          className="w-12 h-12 text-[#7FD3F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      description:
        'Save important numbers: local emergency (100 for police, 101 for fire, 102 for ambulance), your embassy, and your hotel.',
    },
  ];

  const emergencyContacts = [
    {
      name: 'Police',
      number: '100',
    },
    {
      name: 'Fire',
      number: '101',
    },
    {
      name: 'Ambulance',
      number: '102',
    },
    {
      name: 'Tourist Helpline',
      number: '1363',
    },
    {
      name: 'Women Helpline',
      number: '1091',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0A1B3D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Travel Safety Information
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your safety is our priority. Follow these guidelines to ensure a secure and enjoyable
              journey across India.
            </p>
          </div>
        </div>
      </div>

      {/* Safety Tips Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A1B3D] mb-4">Essential Safety Tips</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these recommendations to ensure a safe and worry-free travel experience in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A1B3D] mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1B3D] mb-4">Emergency Contacts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save these important numbers before your trip.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.name}
                  className="p-6 border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0"
                >
                  <h3 className="text-lg font-semibold text-[#0A1B3D] mb-2">{contact.name}</h3>
                  <p className="text-2xl font-bold text-[#7FD3F7]">{contact.number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Safety Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1B3D] mb-6">Our Safety Features</h2>
            <p className="text-gray-600 mb-6">
              Trevia provides cutting-edge tools to keep you safe during your journey through India:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#7FD3F7] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Real-time Safety Alerts:</span> Receive instant
                  notifications about safety conditions in your area.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#7FD3F7] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Location Sharing:</span> Share your travel
                  itinerary and real-time location with trusted contacts.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#7FD3F7] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">24/7 Support:</span> Access our emergency support
                  team anytime, anywhere during your trip.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#7FD3F7] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Verified Transportation:</span> Book pre-vetted
                  taxis and transportation services through our app.
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/destinations"
                className="bg-[#7FD3F7] text-[#0A1B3D] px-6 py-3 rounded-lg font-semibold hover:bg-[#0A1B3D] hover:text-white transition-colors duration-300 inline-block"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-[400px]">
            <Image
              src="/images/cities/Amritsar.jpg"
              alt="Travel Safety"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3D]/50 to-transparent rounded-xl" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Safe Travel Promise</h3>
              <p>Our commitment to your safety and well-being throughout your journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage; 