'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  category: 'Popular' | 'Cultural' | 'Adventure' | 'Wildlife';
  fullDescription?: string;
  activities?: Array<{
    name: string;
    description: string;
    duration: string;
    price: string;
  }>;
  bestTimeToVisit?: string;
  howToReach?: string;
}

const destinationsData: Record<string, Destination> = {
  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Experience the royal heritage and vibrant culture of India\'s largest state.',
    image: '/images/cities/Rajasthan.jpg',
    highlights: ['Amber Fort', 'Thar Desert', 'City Palace', 'Mehrangarh Fort'],
    category: 'Cultural',
    fullDescription: 'Rajasthan, the Land of Kings, is a vibrant state where tradition and royal heritage come alive in magnificent forts and palaces. Experience the warm hospitality, rich culture, and colorful festivals while exploring ancient architectures and vast desert landscapes.',
    activities: [
      {
        name: 'Desert Safari',
        description: 'Experience the thrill of a camel safari in the Thar Desert with overnight camping under the stars.',
        duration: '1-2 days',
        price: '₹4,000 per person',
      },
      {
        name: 'Palace Tours',
        description: 'Guided tours of magnificent palaces including City Palace, Amber Fort, and Mehrangarh Fort.',
        duration: '4-6 hours',
        price: '₹2,500 per person',
      },
      {
        name: 'Cultural Evening',
        description: 'Traditional Rajasthani dance, music, and dinner experience in a heritage setting.',
        duration: '3-4 hours',
        price: '₹3,500 per person',
      },
    ],
    bestTimeToVisit: 'October to March is the best time to visit Rajasthan when the weather is pleasant and perfect for sightseeing.',
    howToReach: 'Jaipur International Airport is the main gateway. The state is well-connected by trains and buses from major Indian cities.',
  },
  kerala: {
    id: 'kerala',
    name: 'Kerala',
    description: 'Discover the serene backwaters and lush landscapes of God\'s Own Country.',
    image: '/images/cities/kerala.jpg',
    highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Fort Kochi', 'Wayanad Wildlife'],
    category: 'Popular',
    fullDescription: 'Kerala, known as God\'s Own Country, is a tropical paradise of palm-lined beaches, serene backwaters, emerald tea plantations, and exotic wildlife. The state offers a perfect blend of natural beauty, cultural heritage, and ayurvedic wellness traditions.',
    activities: [
      {
        name: 'Houseboat Cruise',
        description: 'Cruise through the peaceful backwaters of Alleppey on a traditional houseboat with overnight stay.',
        duration: '1-2 days',
        price: '₹8,000 per night',
      },
      {
        name: 'Tea Plantation Tour',
        description: 'Guided tour of Munnar\'s scenic tea gardens with tea tasting experience.',
        duration: '3-4 hours',
        price: '₹1,800 per person',
      },
      {
        name: 'Kathakali Performance',
        description: 'Experience the classical dance drama of Kerala with elaborate costumes and makeup.',
        duration: '2 hours',
        price: '₹1,200 per person',
      },
    ],
    bestTimeToVisit: 'September to March offers pleasant weather ideal for exploring beaches, hill stations, and backwaters.',
    howToReach: 'Kochi, Thiruvananthapuram, and Calicut have international airports. The state is well-connected by trains from major cities.',
  },
  himachal: {
    id: 'himachal',
    name: 'Himachal Pradesh',
    description: 'Explore the majestic Himalayas and charming hill stations.',
    image: '/images/cities/himachal.jpg',
    highlights: ['Shimla', 'Manali', 'Dharamshala', 'Spiti Valley'],
    category: 'Adventure',
    fullDescription: 'Himachal Pradesh, nestled in the western Himalayas, is a mountainous state known for its scenic beauty, snow-capped peaks, and adventure opportunities. From colonial hill stations to remote valleys, it offers diverse experiences for nature lovers and thrill-seekers alike.',
    activities: [
      {
        name: 'Paragliding in Bir Billing',
        description: 'Experience the thrill of paragliding from one of the world\'s highest paragliding sites.',
        duration: '15-30 minutes',
        price: '₹2,500 per person',
      },
      {
        name: 'Trekking in Parvati Valley',
        description: 'Guided trek through picturesque villages, forests and mountain landscapes.',
        duration: '2-5 days',
        price: '₹12,000 per person',
      },
      {
        name: 'River Rafting in Kullu',
        description: 'White water rafting adventure on the Beas River with different rapids levels.',
        duration: '1-3 hours',
        price: '₹1,800 per person',
      },
    ],
    bestTimeToVisit: 'March to June for pleasant weather, October to February for snow experiences, and July to September for lush green landscapes.',
    howToReach: 'Airports at Shimla, Kullu, and Dharamshala connect to Delhi. The region is accessible by road from Delhi and Chandigarh.',
  },
  goa: {
    id: 'goa',
    name: 'Goa',
    description: 'Relax on pristine beaches and experience vibrant nightlife.',
    image: '/images/cities/goa.jpg',
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Spice Plantations'],
    category: 'Popular',
    fullDescription: 'Goa, India\'s smallest state, is famous for its pristine beaches, vibrant nightlife, Portuguese heritage, and laid-back atmosphere. Beyond the beaches, explore spice plantations, wildlife sanctuaries, and colonial architecture in this tropical paradise.',
    activities: [
      {
        name: 'Water Sports Package',
        description: 'Try parasailing, jet skiing, banana boat rides, and more at popular beaches.',
        duration: '2-3 hours',
        price: '₹2,000 per person',
      },
      {
        name: 'Spice Plantation Tour',
        description: 'Guided tour of aromatic spice plantations with traditional Goan lunch.',
        duration: '3-4 hours',
        price: '₹1,500 per person',
      },
      {
        name: 'Sunset Cruise',
        description: 'Cruise along the Mandovi River with live music, dance performances, and dinner.',
        duration: '2 hours',
        price: '₹1,200 per person',
      },
    ],
    bestTimeToVisit: 'November to February offers perfect weather with pleasant temperatures and minimal rainfall.',
    howToReach: 'Dabolim Airport connects Goa to major Indian cities and international destinations. Trains from Mumbai, Delhi, and Bangalore regularly serve Goa.',
  },
  karnataka: {
    id: 'karnataka',
    name: 'Karnataka',
    description: 'Visit ancient temples and tech hubs in this diverse state.',
    image: '/images/cities/karnataka.jpg',
    highlights: ['Hampi', 'Mysore Palace', 'Coorg', 'Bandipur National Park'],
    category: 'Cultural',
    fullDescription: 'Karnataka offers a fascinating blend of ancient heritage and modern innovation. From the ruins of Hampi to the tech corridors of Bangalore, from misty hills of Coorg to the architectural marvels of Mysore, the state presents diverse experiences for every traveler.',
    activities: [
      {
        name: 'Mysore Palace Tour',
        description: 'Guided tour of the magnificent Mysore Palace with its intricate architecture and historical artifacts.',
        duration: '2-3 hours',
        price: '₹1,200 per person',
      },
      {
        name: 'Coffee Plantation Experience',
        description: 'Tour of Coorg coffee estates with insights into coffee production and tasting sessions.',
        duration: '4 hours',
        price: '₹1,800 per person',
      },
      {
        name: 'Hampi Archaeological Tour',
        description: 'Explore the UNESCO World Heritage Site with expert guides explaining the historical significance.',
        duration: 'Full day',
        price: '₹2,500 per person',
      },
    ],
    bestTimeToVisit: 'October to February offers pleasant weather across most regions of Karnataka.',
    howToReach: 'Bangalore International Airport is the main gateway. The state has extensive rail and road networks connecting all major destinations.',
  },
  'madhya-pradesh': {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description: 'Witness incredible wildlife and historical monuments.',
    image: '/images/cities/madhyapradesh.jpg',
    highlights: ['Khajuraho Temples', 'Bandhavgarh Tiger Reserve', 'Orchha Fort', 'Sanchi Stupa'],
    category: 'Wildlife',
    fullDescription: 'Madhya Pradesh, located in the heart of India, is known for its rich wildlife, ancient temples, and historical monuments. From the erotic sculptures of Khajuraho to the dense tiger reserves, the state offers a diverse range of experiences for history enthusiasts and wildlife lovers.',
    activities: [
      {
        name: 'Tiger Safari',
        description: 'Jeep safari in Bandhavgarh or Kanha National Park with expert naturalists to spot tigers and other wildlife.',
        duration: '3-4 hours',
        price: '₹3,500 per person',
      },
      {
        name: 'Khajuraho Temple Complex Tour',
        description: 'Guided tour of the UNESCO World Heritage Site famous for its nagara-style architectural symbolism.',
        duration: '4-5 hours',
        price: '₹2,000 per person',
      },
      {
        name: 'River Boating in Bhedaghat',
        description: 'Boat ride through marble rocks of Narmada River with spectacular views.',
        duration: '1-2 hours',
        price: '₹1,200 per person',
      },
    ],
    bestTimeToVisit: 'October to March is ideal for wildlife safaris and sightseeing with comfortable temperatures.',
    howToReach: 'Airports at Bhopal, Indore, Jabalpur, and Khajuraho connect to major Indian cities. The state has good rail and road connections.',
  },
};

const DestinationPage = () => {
  const params = useParams();
  const destination = destinationsData[params.id as string];

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A1B3D] mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">The destination you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/destinations"
            className="inline-block bg-[#7FD3F7] text-[#0A1B3D] px-6 py-3 rounded-lg font-medium hover:bg-[#0A1B3D] hover:text-white transition-colors duration-300"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="inline-block bg-[#7FD3F7] text-[#0A1B3D] px-4 py-1 rounded-full text-sm font-medium mb-4">
              {destination.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{destination.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-[#0A1B3D] mb-4">About {destination.name}</h2>
              <p className="text-gray-600 mb-6">{destination.fullDescription}</p>
              <div className="grid grid-cols-2 gap-4">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-[#0A1B3D] font-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0A1B3D] mb-6">Popular Activities</h2>
              <div className="space-y-6">
                {destination.activities?.map((activity) => (
                  <div
                    key={activity.name}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold text-[#0A1B3D] mb-2">{activity.name}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Duration: {activity.duration}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Price: {activity.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">Best Time to Visit</h2>
              <p className="text-gray-600">{destination.bestTimeToVisit}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">How to Reach</h2>
              <p className="text-gray-600">{destination.howToReach}</p>
            </div>

            <div className="bg-[#0A1B3D] rounded-xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Explore More</h2>
              <p className="text-gray-300 mb-6">
                Discover other amazing destinations across India.
              </p>
              <Link
                href="/destinations"
                className="block w-full bg-[#7FD3F7] text-[#0A1B3D] text-center px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors duration-300"
              >
                View All Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage; 