import Hero from '@/app/components/Hero';
import WhyTrevia from '@/app/components/WhyTrevia';
import HowItWorks from '@/app/components/HowItWorks';
import Testimonials from '@/app/components/Testimonials';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Popular destinations for the Featured Destinations section
  const popularDestinations = [
    {
      name: 'Rajasthan',
      id: 'rajasthan',
      image: '/images/cities/Rajasthan.jpg',
      description: 'Experience royal heritage and vibrant culture',
    },
    {
      name: 'Kerala',
      id: 'kerala',
      image: '/images/cities/kerala.jpg',
      description: 'Discover serene backwaters and lush landscapes',
    },
    {
      name: 'Himachal Pradesh',
      id: 'himachal',
      image: '/images/cities/himachal.jpg',
      description: 'Explore the majestic Himalayas and hill stations',
    },
  ];

  return (
    <main>
      <Hero />

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B3D] mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after travel destinations across incredible India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <div
                key={destination.name}
                className="group relative rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1B3D]/80 group-hover:to-[#0A1B3D]/90 transition-all duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="mb-4 opacity-90">{destination.description}</p>
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="inline-block bg-[#7FD3F7] text-[#0A1B3D] px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block border-2 border-[#0A1B3D] text-[#0A1B3D] px-6 py-3 rounded-lg font-semibold hover:bg-[#0A1B3D] hover:text-white transition-colors duration-300"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Trevia */}
      <WhyTrevia />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1B3D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#7FD3F7]/20 rounded-xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Start Your Indian Adventure?
                </h2>
                <p className="text-gray-200 mb-8">
                  Let Trevia&apos;s AI-powered platform create your perfect itinerary with local insights
                  and personalized recommendations.
                </p>
                <Link
                  href="/destinations"
                  className="inline-block bg-white text-[#0A1B3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#7FD3F7] transition-colors duration-300"
                >
                  Explore Destinations
                </Link>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/cities/goa.jpg"
                  alt="Indian Travel"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
