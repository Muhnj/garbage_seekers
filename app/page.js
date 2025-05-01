'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Head>
        <title>Garbage seekers system</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="relative min-h-screen overflow-hidden font-sans text-[#1e3a8a]">
        {/* Video Background */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover opacity-50 -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/clean-city.mp4" type="video/mp4" />
          <source src="/videos/clean-city.webm" type="video/webm" />
          <img src="/images/clean-city-fallback.jpg" alt="Clean city background" />
        </video>

        <div className="relative bg-white/90 m-4 rounded-xl p-6 md:p-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <div className="text-2xl font-bold text-[hsl(122,59%,35%)]">
              Garbage<span className="text-[hsl(122,59%,35%)]">Seekers</span>
            </div>
            <div className="flex space-x-2">
              <Link
                href="/login"
                className="border-2 border-[hsl(122,59%,35%)] text-[hsl(122,59%,35%)] px-4 py-2 rounded-md font-semibold"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[hsl(122,59%,35%)] text-white px-4 py-2 rounded-md font-semibold"
              >
                Register
              </Link>
            </div>
          </header>

          {/* Hero */}
          <section className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Efficient Waste Collection For A Cleaner Community
            </h1>
            <p className="text-lg text-[hsl(122,59%,35%)]">
              Book garbage pickup in just 3 simple steps and contribute to a cleaner environment
            </p>
          </section>

          {/* Steps */}
          <section className="grid md:grid-cols-3 gap-6 mb-10">
            <Link
              href="/register"
              className="flex flex-col items-center p-6 bg-[hsl(122,59%,35%)] text-white rounded-lg shadow-md hover:scale-105 transition transform"
            >
              <div className="text-3xl mb-3">
                <i className="fas fa-user-plus" />
              </div>
              <h3 className="text-xl font-semibold mb-1">1. Create Account</h3>
              <p className="text-sm">Register in less than 2 minutes to get started</p>
            </Link>

            <div
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transition transform cursor-pointer"
              onClick={() => alert('This would navigate to: Schedule Pickup')}
            >
              <div className="text-3xl text-[hsl(122,59%,35%)] mb-3">
                <i className="fas fa-calendar-alt" />
              </div>
              <h3 className="text-xl font-semibold mb-1">2. Schedule Pickup</h3>
              <p className="text-sm text-gray-600">Choose date, time and location for collection</p>
            </div>

            <div
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transition transform cursor-pointer"
              onClick={() => (window.location.href = '/register')}
            >
              <div className="text-3xl text-[hsl(122,59%,35%)] mb-3">
                <i className="fas fa-money-bill-wave" />
              </div>
              <h3 className="text-xl font-semibold mb-1">3. Secure Payment</h3>
              <p className="text-sm text-gray-600">Pay conveniently via mobile money or card</p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mb-8">
            <Link
              href="/register"
              className="bg-[hsl(122,59%,35%)] text-white py-3 px-6 rounded-md text-lg font-bold"
            >
              Get Started Now
            </Link>
          </section>

          {/* Footer */}
          <footer className="bg-[hsl(122,59%,35%)] text-white text-center py-4 mt-auto text-sm rounded-md">
            <div className="flex justify-center gap-4 mb-2">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <p>&copy; 2025 Garbage Seekers. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
