import React, { useState } from 'react';
import { X, Phone, Calendar, Clock, Scissors, User, CheckCircle, MapPin, AlertCircle } from 'lucide-react';
import { shopInfo, servicesData, barbersData } from '../data/barbershopData';

export default function QuickBookingModal({ isOpen, onClose, defaultService = '', defaultBarber = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || servicesData[0].name,
    barber: defaultBarber || 'Any Available Barber (Fastest)',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#14171a] border border-[#2b3036] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Barber Stripe */}
        <div className="h-1.5 w-full barber-pole-stripes"></div>

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#181c20]">
          <div>
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Scissors className="w-5 h-5 text-amber-400" />
              Book or Request an Appointment
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              11 Chairs • Walk-ins always welcome 7 days a week
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-white font-display">
                Appointment Request Received!
              </h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. We have logged your request for <span className="text-amber-400 font-semibold">{formData.service}</span> with <span className="text-white font-medium">{formData.barber}</span> on <span className="text-white font-medium">{formData.date}</span> around <span className="text-white font-medium">{formData.time}</span>.
              </p>
              
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left text-xs text-amber-200 space-y-1">
                <p className="font-semibold flex items-center gap-1.5 text-amber-300 text-sm">
                  <Phone className="w-4 h-4" /> Want instant confirmation?
                </p>
                <p>Call our front desk directly at <strong>{shopInfo.phone}</strong> for immediate booking or walk right into the shop anytime today!</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-lg transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {shopInfo.phone}
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-sm"
                >
                  Close & Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Quick Call Out Banner */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-950/60 to-[#1a1e24] border border-red-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/30 flex items-center justify-center text-red-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-400">Fastest Way to Book</p>
                    <p className="text-sm font-medium text-white">Call the Shop Directly</p>
                  </div>
                </div>
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {shopInfo.phone}
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  {/* Phone */}
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={`${svc.name} (${svc.price})`}>
                          {svc.name} — {svc.price}
                        </option>
                      ))}
                      <option value="Haircut & Beard Trim Combo">Haircut & Beard Trim Combo</option>
                    </select>
                  </div>

                  {/* Preferred Barber */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Preferred Barber
                    </label>
                    <select
                      value={formData.barber}
                      onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
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
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  {/* Time Window */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1013] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                      <option value="Lunch / Midday (12:00 PM – 2:30 PM)">Lunch / Midday (12:00 PM – 2:30 PM)</option>
                      <option value="Afternoon (2:30 PM – 5:00 PM)">Afternoon (2:30 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="e.g. Skin fade with razor finish, bringing my son along, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0e1013] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  ></textarea>
                </div>

                {/* Walk In Note */}
                <div className="flex items-start gap-2.5 text-xs text-gray-400 bg-white/[0.03] p-3 rounded-lg border border-white/5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    No appointment needed! You can always walk in directly at <strong>{shopInfo.address.full}</strong>. We have 11 stations ready.
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold font-display tracking-wider text-sm shadow-lg transition-all"
                  >
                    Request Booking
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
