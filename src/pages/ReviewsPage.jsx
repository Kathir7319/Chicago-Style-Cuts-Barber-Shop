import React, { useState } from 'react';
import { Star, ThumbsUp, ShieldCheck, MessageSquare, ExternalLink, Scissors, CheckCircle2 } from 'lucide-react';
import { shopInfo, reviewsData } from '../data/barbershopData';

export default function ReviewsPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Fades & Fast Service', 'Hospitality & Value', 'Kids Haircuts', 'Beard Trim & Lineup', '11 Chairs & Zero Wait'];

  const filteredReviews = selectedTag === 'All' 
    ? reviewsData 
    : reviewsData.filter(r => r.tag === selectedTag);

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">

      {/* Page Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#14181d] to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Customer Testimonials</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by Over 1,030 Cary Locals
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real feedback from neighborhood clients, fathers, professionals, and students who make Chicago Style Cuts their regular grooming destination.
          </p>

          {/* Aggregate Rating Cards */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="text-left">
                <span className="block text-2xl font-display font-bold text-white">4.6 / 5.0</span>
                <span className="text-xs text-gray-400">Google Reviews</span>
              </div>
              <div className="text-right">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-400">1,034+ Verified</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="text-left">
                <span className="block text-2xl font-display font-bold text-white">4.5 / 5.0</span>
                <span className="text-xs text-gray-400">Yelp Community</span>
              </div>
              <div className="text-right">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-400">Top Rated in Cary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-[#14171a] border border-white/10 flex flex-col justify-between shadow-xl relative group hover:border-amber-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {rev.date}
                  </span>
                </div>

                <blockquote className="text-sm text-gray-200 leading-relaxed italic mb-6">
                  “{rev.text}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white text-xs">{rev.author}</p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {rev.role}
                  </p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 font-medium">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Callout: Share Your Experience */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#171b20] to-[#121417] border border-white/10 text-center space-y-4">
          <h2 className="text-2xl font-display font-bold text-white">
            Been In Our Chair Recently?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            We appreciate every review from our Cary community. Your feedback keeps our barbers motivated and helps new neighbors find a dependable haircut.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Leave a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
