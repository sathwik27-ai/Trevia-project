'use client';

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a mock submission - in reality, you'd integrate with your email service
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Travel Tips & Offers
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our newsletter and discover new destinations to inspire the traveler within.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-blue-100">
              Thank you for subscribing! We&apos;ll be in touch soon.
            </p>
          )}

          <p className="mt-6 text-sm text-blue-100">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 