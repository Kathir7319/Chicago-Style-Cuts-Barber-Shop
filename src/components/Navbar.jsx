import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, Scissors, Calendar } from 'lucide-react';
import Logo from './Logo';
import HoursStatusBadge from './HoursStatusBadge';
import { shopInfo } from '../data/barbershopData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'Our Barbers', path: '/barbers' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Hours & Location', path: '/hours-location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Top Bar Quick Info Strip */}
      <div className="bg-[#090a0c] text-gray-400 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={shopInfo.address.directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{shopInfo.address.street}, {shopInfo.address.city}, {shopInfo.address.state}</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-300 font-medium">Walk-Ins Always Welcome</span>
              <span className="text-amber-400 font-semibold">• 11 Chairs</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <HoursStatusBadge />
            <a 
              href={`tel:${shopInfo.phoneRaw}`}
              className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{shopInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#101215]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
            : 'bg-[#121518]/90 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="horizontal" size="md" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-white/5 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="px-3.5 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-xs font-bold font-display uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Chair</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="p-2 rounded-lg bg-red-600 text-white sm:hidden"
              aria-label="Call shop"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#121518] px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            {/* Mobile Status */}
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <HoursStatusBadge />
              <span className="text-xs text-amber-400 font-semibold">11 Chairs Ready</span>
            </div>

            {/* Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-amber-400 bg-white/10 font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book or Request Time
              </button>
              <a
                href={`tel:${shopInfo.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call (919) 377-2866
              </a>
            </div>

            {/* Address */}
            <div className="pt-2 text-center text-xs text-gray-400">
              <p>{shopInfo.address.full}</p>
              <p className="text-gray-500 mt-1">Walk-ins always welcome 7 days a week</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
