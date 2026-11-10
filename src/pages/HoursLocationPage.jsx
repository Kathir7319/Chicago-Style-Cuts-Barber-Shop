import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, CheckCircle, Send, AlertCircle, Car, Shield } from 'lucide-react';
import { shopInfo } from '../data/barbershopData';
import HoursStatusBadge from '../components/HoursStatusBadge';

export default function HoursLocationPage({ onOpenBooking }) {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  // Get current day name to highlight in table
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">

      {/* Page Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#14181d] to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 border border-red-500/30 text-red-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Us in Cary, NC</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Stop By or Give Us a Call
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated on East Chatham Street with easy storefront parking right out front. Open 7 days a week with 11 stations ready.
          </p>

          <div className="pt-2 flex justify-center">
            <HoursStatusBadge />
          </div>
        </div>
      </section>

      {/* Main Info & Interactive Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Essential Details & Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Parking Card */}
            <div className="p-7 rounded-3xl bg-[#14171a] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Shop Address</h3>
                  <p className="text-sm font-semibold text-gray-200 mt-1">{shopInfo.address.street}</p>
                  <p className="text-sm text-gray-300">{shopInfo.address.city}, {shopInfo.address.state} {shopInfo.address.zip}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <Car className="w-3.5 h-3.5" />
                    <span>{shopInfo.address.note}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={shopInfo.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Hours Table Card */}
            <div className="p-7 rounded-3xl bg-[#14171a] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display font-bold text-white text-lg">Weekly Hours</h3>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">Open 7 Days</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {shopInfo.hours.map((schedule) => {
                  const isToday = schedule.day === todayName;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        isToday 
                          ? 'bg-amber-500/15 border border-amber-500/30 text-white font-semibold' 
                          : 'text-gray-300 hover:bg-white/[0.02]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {schedule.day}
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider bg-amber-500 text-black px-1.5 py-0.2 rounded font-bold">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={isToday ? 'text-amber-300 font-bold' : 'text-gray-400'}>
                        {schedule.open} – {schedule.close}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-gray-400 pt-2 border-t border-white/5">
                Sunday closing is 5:00 PM. Monday through Saturday open until 7:00 PM.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="p-7 rounded-3xl bg-[#14171a] border border-white/10 shadow-xl space-y-4">
              <h3 className="font-display font-bold text-white text-lg">Direct Contact</h3>
              
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between hover:border-red-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-red-500" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500">Shop Telephone</p>
                      <p className="text-white font-semibold text-sm group-hover:text-red-400">{shopInfo.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-medium">Tap to Call →</span>
                </a>

                <a
                  href={`mailto:${shopInfo.email}`}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between hover:border-blue-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500">General Email</p>
                      <p className="text-white font-semibold text-sm group-hover:text-blue-300 truncate max-w-[200px]">
                        {shopInfo.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">Send Email →</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#14171a] p-2">
              <div className="h-96 w-full rounded-2xl overflow-hidden relative">
                <iframe
                  title="Google Maps Storefront Location"
                  src={shopInfo.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs shadow-lg">
                  <p className="font-bold text-white">Chicago Style Cuts Barber Shop</p>
                  <p className="text-gray-400">750 E Chatham St, Cary, NC</p>
                </div>
              </div>
            </div>

            {/* Walk-in Reassurance Strip */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
              <Shield className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-amber-300 text-sm">Walk-Ins Welcome Every Day</h4>
                <p className="text-xs text-amber-200/90 leading-relaxed mt-1">
                  {shopInfo.walkInsPolicy}
                </p>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="p-7 rounded-3xl bg-[#14171a] border border-white/10 shadow-xl space-y-5">
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Send a Quick Question to Zayed & The Shop
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Have a question about a haircut style, kids' haircuts, or group scheduling? Send us a note below.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="font-bold text-white text-base">Message Sent Successfully!</p>
                  <p className="text-xs text-gray-300">
                    Thank you. We will get back to you shortly, or feel free to call us at <strong>{shopInfo.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs text-amber-400 underline font-semibold mt-2"
                  >
                    Send another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Phone or Email *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Phone or email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Message / Question *
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Ask about cuts, barber availability, or specific hair styles..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display uppercase tracking-wider text-xs transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
