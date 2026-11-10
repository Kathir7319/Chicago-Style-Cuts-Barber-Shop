import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, ShieldCheck, Scissors } from 'lucide-react';
import Logo from './Logo';
import { shopInfo } from '../data/barbershopData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#0b0c0e] border-t border-white/10 text-gray-400 text-sm mt-auto">
      {/* Decorative Barber Stripe top line */}
      <div className="h-1.5 w-full barber-pole-stripes"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Logo variant="horizontal" size="md" />
            <p className="text-gray-400 text-xs leading-relaxed">
              Big-city barber craft right here in Cary, NC. Led by owner Zayed and our veteran crew across 11 stations. Walk-ins always welcome 7 days a week.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">4.6 / 5.0</span>
              <span className="text-xs text-gray-500">(1,030+ Google Reviews)</span>
            </div>
            <div className="pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Follow us on Facebook</span>
                <span className="text-gray-600">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Hours of Operation */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Hours of Operation
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300 font-medium">Monday – Saturday</span>
                <span className="text-amber-400 font-bold">10:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300 font-medium">Sunday</span>
                <span className="text-amber-400 font-bold">10:00 AM – 5:00 PM</span>
              </li>
              <li className="pt-2 text-gray-400 italic">
                Open 7 Days a week • Walk-ins seated quickly across 11 chairs.
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Services */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-amber-400" />
              Services & Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Services & Pricing Menu ($25 Cuts)</Link>
              </li>
              <li>
                <Link to="/barbers" className="hover:text-amber-400 transition-colors">Meet Our 11 Barbers</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-amber-400 transition-colors">Customer Testimonials & Ratings</Link>
              </li>
              <li>
                <Link to="/hours-location" className="hover:text-amber-400 transition-colors">Hours, Directions & Map</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Visit Our Shop
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-white font-semibold">{shopInfo.address.street}</p>
                <p className="text-gray-400">{shopInfo.address.city}, {shopInfo.address.state} {shopInfo.address.zip}</p>
                <p className="text-amber-400/80 mt-0.5">{shopInfo.address.note}</p>
              </div>

              <div className="pt-1">
                <a 
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>{shopInfo.phone}</span>
                </a>
              </div>

              <div>
                <a 
                  href={`mailto:${shopInfo.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{shopInfo.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  Book / Request Chair
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p className="text-center sm:text-left">
            © 2026 Chicago Style Cuts Barber Shop | 750 E Chatham St, Cary, NC 27511 | Follow us on Facebook
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Domain: <strong className="text-gray-300">{shopInfo.recommendedDomain}</strong></span>
            <span>•</span>
            <span className="text-amber-400/90 font-medium">11 Barber Chairs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
