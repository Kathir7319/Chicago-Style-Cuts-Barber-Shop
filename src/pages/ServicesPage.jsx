import React from 'react';
import { Scissors, Check, Phone, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { shopInfo, servicesData, faqsData } from '../data/barbershopData';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="space-y-16 lg:space-y-20 pb-20">
      
      {/* Page Header */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#14181d] to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5" />
            <span>Official Price List</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Straightforward Pricing. Clean Results.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every service at Chicago Style Cuts includes dedicated attention to detail, precision lines, and traditional barbershop hospitality across 11 stations.
          </p>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Hot-Towel & Neck Lineup Included
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Walk-Ins 7 Days
            </span>
          </div>
        </div>
      </section>

      {/* Main Services Cards & Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-8 rounded-3xl bg-[#14171a] border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              {svc.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  Top Requested
                </div>
              )}

              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {svc.name}
                  </h3>
                </div>

                <div className="text-3xl font-display font-black text-amber-400 mb-4">
                  {svc.price}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-3 mb-8 bg-black/30 p-5 rounded-2xl border border-white/5">
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                    What’s Included:
                  </p>
                  <ul className="space-y-2.5">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold font-display uppercase tracking-wider text-xs transition-colors shadow-md text-center"
                >
                  Request {svc.name}
                </button>
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>Call {shopInfo.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Note Banner */}
        <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-red-950/60 via-[#191d22] to-[#121518] border border-red-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-red-600/30 text-red-300">
              Popular Pairing
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Need a Haircut and Beard Trim Combo?
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl">
              Get completely dialed in with a full tailored haircut and razor-sharp beard sculpting in a single chair session. Just ask your barber directly upon arrival or call ahead.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Ask: {shopInfo.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors"
            >
              Book Combo Online
            </button>
          </div>
        </div>
      </section>

      {/* Services Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#14171a] border border-white/10 shadow-xl overflow-hidden">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Quick Pricing Summary & Service Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase font-bold text-amber-400 tracking-wider">
                  <th className="pb-4 pr-6">Service</th>
                  <th className="pb-4 px-6">Description</th>
                  <th className="pb-4 px-6">Est. Time</th>
                  <th className="pb-4 pl-6 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {servicesData.map((svc) => (
                  <tr key={svc.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-6 font-semibold text-white">
                      {svc.name}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-400 max-w-md">
                      {svc.description}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-300">
                      20 – 30 mins
                    </td>
                    <td className="py-4 pl-6 text-right font-display font-bold text-amber-400 text-base">
                      {svc.price}
                    </td>
                  </tr>
                ))}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-6 font-semibold text-white">
                    Haircut & Beard Trim Combo
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-400">
                    Complete men’s cut plus beard sculpt & razor lineup.
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-300">
                    35 – 45 mins
                  </td>
                  <td className="py-4 pl-6 text-right font-display font-bold text-amber-400 text-base">
                    $40 – $45
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#14171a] border border-white/10 space-y-2">
              <h3 className="font-semibold text-white text-base">
                {faq.q}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
