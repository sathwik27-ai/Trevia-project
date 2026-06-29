import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plan Your Trip - Trevia',
  description: 'Plan your perfect Indian adventure with Trevia. Customize your itinerary based on your travel mood.',
};

export default function PlanTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={inter.className}>{children}</main>
      {/* Footer intentionally removed for immersive experience */}
    </>
  );
} 