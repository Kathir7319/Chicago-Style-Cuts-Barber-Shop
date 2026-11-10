import React, { useState } from 'react';
import { Users, Scissors, Award, CheckCircle2, Phone, Calendar, Star, Sparkles } from 'lucide-react';
import { shopInfo, barbersData } from '../data/barbershopData';

export default function BarbersPage({ onOpenBooking }) {
  const [selectedBarber, setSelectedBarber] = useState(null);

  const handleBookWithBarber = (barberName) => {
    onOpenBooking(barberName);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">
      
      {/* Page Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#14181d] to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Meet Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Experienced Hands. Consistent Cuts.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our shop is built on skill, reliability, and community trust. Every barber on our floor brings years of hands-on experience with all hair textures and styles—from classic business cuts and bald fades to beard sculpting.
          </p>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 text-white">
              <Award className="w-4 h-4 text-amber-400" />
              11 Full-Service Stations
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Walk-Ins & Appointments
            </span>
          </div>
        </div>
      </section>

      {/* 11 Stations Advantage Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#171b20] via-[#13161a] to-[#0e1013] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Waiting Anxiety</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-white">
              Why 11 Barber Stations Makes All The Difference
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl">
              Unlike small 2 or 3 chair shops with 45-minute waitlists, Chicago Style Cuts maintains 11 fully equipped stations. You can swing by spontaneously on your lunch break or weekend and be in a chair within minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Shop: {shopInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Barbers Roster Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbersData.map((barber) => (
            <div
              key={barber.name}
              className="rounded-3xl bg-[#14171a] border border-white/10 hover:border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Header with Avatar and Station */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${barber.avatarBg} flex items-center justify-center font-display font-black text-white text-2xl shadow-lg border border-white/10`}>
                      {barber.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                          {barber.name}
                        </h3>
                        {barber.name === 'Zayed' && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                            Owner
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-400 font-semibold">{barber.role}</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono">
                    {barber.station}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-400 font-medium bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                    {barber.experience}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {barber.bio}
                </p>

                {/* Specialties */}
                <div className="space-y-2 mb-6 bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-gray-400">
                    Signature Services:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {barber.specialties.map((spec, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/5">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="pt-4 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => handleBookWithBarber(barber.name)}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request {barber.name}</span>
                </button>
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
                  title={`Call to request ${barber.name}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Reassurance */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-display font-bold text-white">
          No Preference? We’ll Pair You With The Next Free Station!
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Every barber on our floor has passed rigorous standards of craftsmanship. Just walk in and enjoy a great cut with whichever chair opens first.
        </p>
        <div className="pt-2">
          <a
            href={shopInfo.address.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/10"
          >
            <span>Get Directions to 750 E Chatham St</span>
            <span>→</span>
          </a>
        </div>
      </section>

    </div>
  );
}
