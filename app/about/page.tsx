"use client";
import Image from "next/image";

const AboutPage = () => {
  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      image: "/images/cities/delhi.jpg",
      description:
        "Travel enthusiast with 15+ years of experience in Indian tourism.",
    },
    {
      name: "Rahul Verma",
      role: "Head of Technology",
      image: "/images/cities/bangalore.jpg",
      description: "Tech expert specializing in AI-driven travel solutions.",
    },
    {
      name: "Sarah Williams",
      role: "Travel Experience Director",
      image: "/images/cities/mumbai.jpg",
      description:
        "International tourism expert focused on creating unique experiences.",
    },
  ];

  const values = [
    {
      title: "Authentic Experiences",
      description:
        "We believe in providing genuine, local experiences that go beyond typical tourist attractions.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Tourism",
      description:
        "We promote responsible travel that respects local communities and the environment.",
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge technology to make travel planning smarter and more personalized.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0A1B3D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Trevia
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re reimagining how you explore India by combining local
              expertise with cutting-edge technology to create unforgettable
              travel experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1B3D] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                At Trevia, we&apos;re on a mission to make exploring India more
                accessible, personalized, and enriching. We believe that every
                traveler deserves a unique experience that reflects their
                interests while connecting them with the authentic heart of
                India.
              </p>
              <p className="text-gray-600">
                By combining AI-powered planning tools with local expertise,
                we&apos;re creating a new way to discover the incredible diversity
                and rich cultural heritage of India.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/cities/kerala.jpg"
                alt="Trevia Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0A1B3D] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0A1B3D] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#0A1B3D] text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A1B3D] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#7FD3F7] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
