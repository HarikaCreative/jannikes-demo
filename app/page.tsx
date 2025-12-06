'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CateringMenus from '@/components/CateringMenus';
import RetreatChef from '@/components/RetreatChef';
import Yoga from '@/components/Yoga';
import ArtfulBalance from '@/components/ArtfulBalance';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-16 w-16"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catering" className="text-brun hover:text-cerise transition-colors font-medium">
                Catering
              </a>
              <a href="#retreat" className="text-brun hover:text-cerise transition-colors font-medium">
                Retreat Chef
              </a>
              <a href="#yoga" className="text-brun hover:text-cerise transition-colors font-medium">
                Yoga
              </a>
              <a href="#artful-balance" className="text-brun hover:text-cerise transition-colors font-medium">
                Artful Balance
              </a>
              <a href="#kontakt" className="text-brun hover:text-cerise transition-colors font-medium">
                Kontakt
              </a>
              <button
                onClick={() => setShowBookingModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-cerise to-rosa text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Be om tilbud
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-brun">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero onBooking={() => setShowBookingModal(true)} />
        <About />
        <CateringMenus onBooking={() => setShowBookingModal(true)} />
        <RetreatChef />
        <Yoga />
        <ArtfulBalance />
        <Reviews />
        <Gallery />
        <Contact showModal={showBookingModal} onClose={() => setShowBookingModal(false)} />
      </main>

      {/* Footer */}
      <footer className="bg-brun text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-20 w-20 mb-4"
              />
              <p className="text-sm text-cream/80">
                Fargerik mat. Varme mennesker. Kreative opplevelser.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>E-post: jannike@jannikes.no</li>
                <li>Tlf: 930 33 966</li>
                <li>Instagram: @jannikescatering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <ul className="space-y-2 text-sm text-cream/80">
                <li><a href="#catering" className="hover:text-mint transition-colors">Catering</a></li>
                <li><a href="#retreat" className="hover:text-mint transition-colors">Retreat Chef</a></li>
                <li><a href="#yoga" className="hover:text-mint transition-colors">Yoga</a></li>
                <li><a href="#artful-balance" className="hover:text-mint transition-colors">Artful Balance 2026</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
            <p>&copy; 2024 Jannikes Catering. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
