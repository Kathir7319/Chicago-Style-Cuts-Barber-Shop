import React, { useState } from 'react';
import { Phone, Calendar, Clock, Scissors, MapPin, CheckCircle2, User, Star, ShieldCheck } from 'lucide-react';
import { shopInfo, servicesData, barbersData } from '../data/barbershopData';
import HoursStatusBadge from '../components/HoursStatusBadge';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesData[0].name,
    barber: 'Any Available Barber (Fastest)',
    date: new Date().toISOString().split('T')[0],
    time: 'Morning (10:00 AM – 12:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">

      {/* Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#14181d] to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Walk-Ins & Reservations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Book Ahead or Walk Right In
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            With 11 chairs running 7 days a week, you have two effortless ways to get fresh: walk right into the shop at 750 E Chatham St, or request a specific barber and time.
          </p>

          <div className="pt-2 flex justify-center">
            <HoursStatusBadge />
          </div>
        </div>
      </section>

      {/* 2 Methods Cards: Walk In vs Reserve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Method 1: Walk In (Recommended) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-950/40 via-[#15191d] to-[#111316] border border-amber-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black uppercase tracking-wider">
                Fastest & Easiest
              </div>
              <h2 className="text-2xl font-display font-bold text-white">
                Walk In Any Day (No Reservation Needed)
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                With 11 full-service stations, we keep wait times to a bare minimum. Simply drop by our shop at 750 E Chatham St anytime during opening hours.
              </p>
              
              <ul className="space-y-2 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sunday: 10:00 AM – 5:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Convenient storefront parking</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={shopInfo.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold font-display uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions & Walk In Today</span>
              </a>
            </div>
          </div>

          {/* Method 2: Call to Book */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-red-950/40 via-[#15191d] to-[#111316] border border-red-500/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white uppercase tracking-wider">
                Direct Line
              </div>
              <h2 className="text-2xl font-display font-bold text-white">
                Call the Shop: {shopInfo.phone}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Want to book with Zayed or your favorite barber? Give our front desk a quick ring and we’ll reserve your chair right away.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300 space-y-1">
                <p className="text-white font-semibold flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-red-400" /> Instant Confirmation Over Phone
                </p>
                <p className="text-gray-400">Speak directly with our team to lock in an exact slot.</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`tel:${shopInfo.phoneRaw}`}
                className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold font-display uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call (919) 377-2866 Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Online Reservation Request Form */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-[#14171a] border border-white/10 shadow-2xl">
          <div className="border-b border-white/10 pb-6 mb-6">
            <h2 className="text-2xl font-display font-bold text-white">
              Online Chair Request Form
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Prefer to submit online? Fill out the details below and we will prepare your station.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Request Submitted!
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you <strong className="text-white">{formData.name}</strong>. We have logged your request for <strong className="text-amber-400">{formData.service}</strong> with <strong className="text-white">{formData.barber}</strong>.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(919) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={`${s.name} (${s.price})`}>
                        {s.name} — {s.price}
                      </option>
                    ))}
                    <option value="Haircut & Beard Trim Combo ($40-$45)">Haircut & Beard Trim Combo ($40-$45)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Barber
                  </label>
                  <select
                    value={formData.barber}
                    onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Any Available Barber (Fastest)">Any Available Barber (Fastest)</option>
                    {barbersData.map((b) => (
                      <option key={b.name} value={`${b.name} (${b.role})`}>
                        {b.name} — {b.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                    <option value="Midday / Lunch (12:00 PM – 2:30 PM)">Midday / Lunch (12:00 PM – 2:30 PM)</option>
                    <option value="Afternoon (2:30 PM – 5:00 PM)">Afternoon (2:30 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Special Notes or Style Request (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Skin fade with razor edge, first haircut for my toddler, beard shaping, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display uppercase tracking-wider text-sm shadow-xl transition-all"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
