import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Clock, Check, Scissors, Users, Calendar, ArrowRight, ShieldCheck, Sparkles, Navigation, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { shopInfo, servicesData, barbersData, reviewsData } from '../data/barbershopData';
import Logo from '../components/Logo';
import HoursStatusBadge from '../components/HoursStatusBadge';

export default function HomePage({ onOpenBooking }) {
  // Available Official Shop Emblems
  const emblems = [
    {
      id: 'artisan',
      name: 'Master Artisan Crest',
      tag: 'Official Shop Emblem',
      src: '/official-shop-emblem.jpg',
      isImage: true,
      subtitle: 'Brushed Gold & Ruby Vintage Emblem',
      description: 'Ultra-luxurious circular crest with illuminated barber pole, crossed straight razors, and Chicago stars.'
    },
    {
      id: 'heritage',
      name: 'Heritage Razor & Shears',
      tag: 'Classic Vector',
      src: '/emblem-heritage.svg',
      isImage: false,
      subtitle: 'Fine Gold Filigree & Crossed Cutters',
      description: 'Crisp vector circular badge with hollow-ground straight razor and ergonomic shears.'
    },
    {
      id: 'gentleman',
      name: 'The Gentleman’s Silhouette',
      tag: 'Modern Dapper',
      src: '/emblem-gentleman.svg',
      isImage: false,
      subtitle: 'Tailored Fade & Sculpted Beard',
      description: 'Clean gentleman profile medallion celebrating Cary’s sharpest fades and beard grooming.'
    },
    {
      id: 'shield',
      name: 'Royal Barber Shield',
      tag: 'Heraldic Badge',
      src: '/emblem-crest.svg',
      isImage: false,
      subtitle: 'Chicago Colors & Barber Pole Crest',
      description: 'Heraldic shield with traditional diagonal stripes and crossed artisan tools.'
    }
  ];

  const [activeEmblemIdx, setActiveEmblemIdx] = useState(0);
  const activeEmblem = emblems[activeEmblemIdx];

  const handleNextEmblem = () => {
    setActiveEmblemIdx((prev) => (prev + 1) % emblems.length);
  };

  const handlePrevEmblem = () => {
    setActiveEmblemIdx((prev) => (prev - 1 + emblems.length) % emblems.length);
  };
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-white/5 bg-gradient-to-b from-[#14181d] via-[#0f1114] to-[#0b0c0e]">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-red-600/5 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-600/5 blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <HoursStatusBadge />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  <Scissors className="w-3.5 h-3.5" />
                  11 Chairs • Walk-Ins Welcome
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  4.6 Stars (1,030+ Reviews)
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                Sharp Cuts. Classic Craft.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                  Cary’s Trusted Neighborhood Barber Shop.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {shopInfo.subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Primary CTA: Call to Book */}
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-display font-bold text-base shadow-xl shadow-red-950/50 hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 text-white animate-pulse" />
                  <span>Call to Book: {shopInfo.phone}</span>
                </a>

                {/* Secondary CTA: Walk In Today / Directions */}
                <a
                  href={shopInfo.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium text-base transition-all hover:border-amber-400/40"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Walk In Today — Directions</span>
                </a>
              </div>

              {/* Quick Reassurance */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  No Long Wait Times
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Free Front Parking
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Fair $25 Cuts
                </span>
              </div>
            </div>

            {/* Right Column: Barber Shop Logo Emblem Showcase Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative p-6 sm:p-7 rounded-3xl bg-[#15191e]/95 border border-[#2d3239] shadow-2xl backdrop-blur-md max-w-md w-full text-center group hover:border-amber-500/40 transition-all duration-300">
                {/* Vintage Barber Pole Ribbon accent top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 barber-pole-stripes rounded-b-md"></div>

                {/* Emblem Switcher Header / Tag */}
                <div className="flex items-center justify-between pt-1 pb-3 text-xs border-b border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeEmblem.tag}</span>
                  </span>
                  <span className="text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {activeEmblemIdx + 1} of {emblems.length} styles
                  </span>
                </div>

                {/* Emblem Display with Left/Right Arrows */}
                <div className="relative pt-4 pb-3 flex items-center justify-center">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrevEmblem}
                    className="absolute left-0 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gray-400 hover:text-white border border-white/10 hover:border-amber-400/40 transition-all shadow-md active:scale-95"
                    aria-label="Previous emblem"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Emblem Asset */}
                  <div className="w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center transition-all duration-300">
                    <img
                      key={activeEmblem.id}
                      src={activeEmblem.src}
                      alt={activeEmblem.name}
                      className={`w-52 h-52 sm:w-60 sm:h-60 object-contain drop-shadow-[0_16px_25px_rgba(0,0,0,0.85)] transform transition-transform duration-500 group-hover:scale-105 ${
                        activeEmblem.isImage ? 'rounded-full border-2 border-amber-500/30' : ''
                      }`}
                    />
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextEmblem}
                    className="absolute right-0 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gray-400 hover:text-white border border-white/10 hover:border-amber-400/40 transition-all shadow-md active:scale-95"
                    aria-label="Next emblem"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Emblem Selector Dots / Quick Buttons */}
                <div className="flex items-center justify-center gap-1.5 py-2">
                  {emblems.map((emb, idx) => (
                    <button
                      key={emb.id}
                      onClick={() => setActiveEmblemIdx(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeEmblemIdx === idx
                          ? 'w-6 bg-amber-400'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Select ${emb.name}`}
                      title={emb.name}
                    />
                  ))}
                </div>

                {/* Emblem Information */}
                <div className="space-y-1.5 border-t border-white/10 pt-3">
                  <h3 className="font-display font-bold text-white text-lg">
                    {activeEmblem.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {activeEmblem.subtitle}
                  </p>
                  <p className="text-[11px] text-gray-400 max-w-xs mx-auto leading-relaxed">
                    {activeEmblem.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-300">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Walk-Ins Welcome
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
                  >
                    Request a Chair →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge Strip */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Why Cary Locals Rely On Chicago Style Cuts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {shopInfo.trustBadges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 text-center transition-all"
                >
                  <p className="font-display font-bold text-white text-base sm:text-lg">
                    {badge.label}
                  </p>
                  <p className="text-xs text-amber-400/90 mt-0.5">
                    {badge.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CHICAGO STYLE CUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1e24] to-[#101215] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl">11 Full-Service Chairs</h3>
                    <p className="text-xs text-gray-400">Never worry about endless wait times</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="block font-display font-bold text-3xl text-amber-400">11</span>
                    <span className="text-xs text-gray-300">Barber Stations Ready</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="block font-display font-bold text-3xl text-white">$25</span>
                    <span className="text-xs text-gray-300">Standard Haircut</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="block font-display font-bold text-3xl text-red-400">1,030+</span>
                    <span className="text-xs text-gray-300">Verified Reviews</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="block font-display font-bold text-3xl text-emerald-400">7 Days</span>
                    <span className="text-xs text-gray-300">Open Mon – Sun</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed">
                  <p className="font-semibold text-amber-300 mb-1">Our Neighborhood Promise</p>
                  "We listen to what you want, respect your time, and deliver sharp cuts at an honest price every single chair turn."
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 border border-red-500/30 text-red-400 uppercase tracking-wider">
              <span>About Chicago Style Cuts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Big-City Barber Craft Right Here in Cary
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Located on East Chatham Street in the heart of Cary, Chicago Style Cuts Barber Shop brings traditional barbershop hospitality together with modern styling expertise. Led by owner Zayed and a dedicated crew of experienced barbers, we take pride in listening to every client, taking our time on the details, and making sure you leave the chair looking sharp and feeling confident.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              With 11 full-service barber stations, you never have to worry about endless wait times. Whether you stop by on your lunch break as a walk-in or call ahead to book with your favorite barber, you will always receive friendly, consistent service at an honest price.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/barbers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all"
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Meet Zayed & The Crew</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-amber-400/30 text-gray-300 hover:text-white font-medium text-sm transition-all"
              >
                <Scissors className="w-4 h-4 text-amber-400" />
                <span>View Full Menu & Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES & PRICING MENU PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <span>Honest Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Straightforward Pricing. Clean Results.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            No surprise add-ons. No shortcuts. Every service includes careful listening, clean lineups, and premium styling.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="relative p-6 rounded-2xl bg-[#14171a] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              {svc.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {svc.name}
                  </h3>
                  <span className="text-2xl font-display font-black text-amber-400">
                    {svc.price}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  {svc.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {svc.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-lg bg-white/5 group-hover:bg-amber-500 group-hover:text-black text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Callout Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#1b1f24] to-[#121518] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Need a Haircut and Beard Trim Combo?</p>
              <p className="text-xs text-gray-400">Ask your barber directly in the chair or call ahead at {shopInfo.phone}.</p>
            </div>
          </div>
          <a
            href={`tel:${shopInfo.phoneRaw}`}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Call {shopInfo.phone}
          </a>
        </div>
      </section>

      {/* 4. MEET OUR BARBERS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-300 uppercase tracking-wider mb-3">
              <span>Veteran Crew</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Experienced Hands. Consistent Cuts.
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Our shop is built on skill, reliability, and community trust. Every barber on our floor brings years of hands-on experience with all hair textures and styles.
            </p>
          </div>
          <Link
            to="/barbers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>See All Barber Profiles & Specialties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Barbers Roster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbersData.slice(0, 3).map((barber) => (
            <div
              key={barber.name}
              className="p-6 rounded-2xl bg-[#14171a] border border-white/10 hover:border-amber-500/30 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${barber.avatarBg} flex items-center justify-center font-display font-bold text-white text-lg shadow-md`}>
                    {barber.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg group-hover:text-amber-400 transition-colors">
                      {barber.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">{barber.role}</p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  {barber.station}
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {barber.bio}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-white/5">
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Top Specialties</p>
                <div className="flex flex-wrap gap-1.5">
                  {barber.specialties.slice(0, 3).map((s, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 11 Chairs Team Callout */}
        <div className="mt-8 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-gray-300">
            Also on our full roster: <strong className="text-white">Steven, Amini & Bulat</strong> — ready across 11 stations to deliver clean lineups and consistent cuts.
          </p>
          <div className="mt-3">
            <Link
              to="/barbers"
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              Meet the complete roster & view stations →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <span>Verified Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Trusted by Over 1,030 Cary Locals
          </h2>
          <div className="flex items-center justify-center gap-6 pt-1 text-sm font-semibold">
            <span className="flex items-center gap-1.5 text-white">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              4.6 out of 5 Stars on Google (1,034+ Reviews)
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden sm:inline">
              4.5 Stars on Yelp
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14171a] border border-white/10 flex flex-col justify-between shadow-lg relative"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic mb-4">
                  “{rev.text}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-xs">{rev.author}</p>
                  <p className="text-[11px] text-gray-500">{rev.role}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-medium">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Read more customer testimonials & Google reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. HOURS, LOCATION & FAST WALK-IN BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#1a1e24] via-[#14171a] to-[#0f1114] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
                <MapPin className="w-4 h-4" />
                <span>Visit Us On East Chatham Street</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Stop By Today or Give Us a Call
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                Walk-ins are always welcome across our 11 stations. Whether you need a quick lunchtime fade, beard trim, or haircut for the kids, we are open 7 days a week with convenient parking right out front.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <p className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">Shop Address</p>
                  <p className="text-white font-semibold">{shopInfo.address.full}</p>
                  <p className="text-amber-400/80">{shopInfo.address.note}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <p className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">Hours of Operation</p>
                  <p className="text-white font-semibold">Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-white font-semibold">Sunday: 10:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {shopInfo.phone}</span>
                </a>

                <a
                  href={shopInfo.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map Preview */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-inner relative">
              <iframe
                title="Chicago Style Cuts Location Map"
                src={shopInfo.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <span className="text-white font-medium truncate">750 E Chatham St, Cary, NC</span>
                <a 
                  href={shopInfo.address.directionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 font-bold hover:underline shrink-0 ml-2"
                >
                  Open Maps →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
