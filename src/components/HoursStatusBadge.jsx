import React from 'react';
import { Clock } from 'lucide-react';
import { shopInfo } from '../data/barbershopData';

export default function HoursStatusBadge({ size = 'md', className = '' }) {
  // Determine if open based on current Eastern time
  const getStatus = () => {
    try {
      // Get current time in US/Eastern
      const now = new Date();
      const easternFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        weekday: 'long'
      });
      
      const parts = easternFormatter.formatToParts(now);
      const dayName = parts.find(p => p.type === 'weekday')?.value;
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '12', 10);
      const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
      const currentTimeFloat = hour + (minute / 60);

      const daySchedule = shopInfo.hours.find(h => h.day === dayName) || shopInfo.hours[0];
      const isOpen = currentTimeFloat >= daySchedule.openHour && currentTimeFloat < daySchedule.closeHour;

      return {
        isOpen,
        dayName,
        hoursText: `${daySchedule.open} – ${daySchedule.close}`,
        closeTime: daySchedule.close
      };
    } catch {
      // Fallback
      return {
        isOpen: true,
        dayName: 'Today',
        hoursText: '10:00 AM – 7:00 PM',
        closeTime: '7:00 PM'
      };
    }
  };

  const status = getStatus();

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
      status.isOpen 
        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300' 
        : 'bg-amber-950/50 border-amber-500/40 text-amber-300'
    } ${className}`}>
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
      </span>
      <span className="flex items-center gap-1">
        <strong className="font-semibold">{status.isOpen ? 'Open Now' : 'Closed'}</strong>
        <span className="text-gray-400">•</span>
        <span className="text-gray-300">{status.isOpen ? `Closes at ${status.closeTime}` : `Opens 10 AM`}</span>
      </span>
    </div>
  );
}
