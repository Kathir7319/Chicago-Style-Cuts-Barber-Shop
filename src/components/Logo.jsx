import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'horizontal', size = 'md', className = '', showLink = true }) {
  // Dimensions
  const getDimensions = () => {
    switch (size) {
      case 'xs': return { width: 32, height: 32, textSize: 'text-sm' };
      case 'sm': return { width: 42, height: 42, textSize: 'text-base' };
      case 'lg': return { width: 140, height: 140, textSize: 'text-xl' };
      case 'xl': return { width: 220, height: 220, textSize: 'text-2xl' };
      case 'md':
      default: return { width: 50, height: 50, textSize: 'text-lg' };
    }
  };

  const { width, height } = getDimensions();

  // The Vector Barber Mark
  const BarberMark = () => (
    <div className="relative flex-shrink-0 group">
      <svg
        viewBox="0 0 100 100"
        width={width}
        height={height}
        className="transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
      >
        <defs>
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047" />
            <stop offset="50%" stop-color="#D4AF37" />
            <stop offset="100%" stop-color="#996515" />
          </linearGradient>
          <linearGradient id="logoBlade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="100%" stop-color="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Outer Circular Rim */}
        <circle cx="50" cy="50" r="47" fill="#111417" stroke="url(#logoGold)" stroke-width="2.5" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="#D4AF37" stroke-width="0.75" stroke-dasharray="2,2" opacity="0.7" />

        {/* Barber Pole Mini Center */}
        <g transform="translate(46, 20)">
          <rect x="0" y="0" width="8" height="38" rx="4" fill="#0E1013" stroke="url(#logoGold)" stroke-width="1" />
          <clipPath id="miniPoleClip">
            <rect x="1" y="1" width="6" height="36" rx="3" />
          </clipPath>
          <g clip-path="url(#miniPoleClip)">
            <polygon points="0,0 8,8 8,4 0,-4" fill="#C92A2A" />
            <polygon points="0,7 8,15 8,11 0,3" fill="#FFFFFF" />
            <polygon points="0,14 8,22 8,18 0,10" fill="#1971C2" />
            <polygon points="0,21 8,29 8,25 0,17" fill="#FFFFFF" />
            <polygon points="0,28 8,36 8,32 0,24" fill="#C92A2A" />
            <polygon points="0,35 8,43 8,39 0,31" fill="#1971C2" />
          </g>
        </g>

        {/* Crossed Scissors & Straight Razor */}
        {/* Scissor */}
        <g transform="translate(50, 40) rotate(-40) translate(-50, -40)">
          <line x1="50" y1="18" x2="50" y2="52" stroke="url(#logoBlade)" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="50" cy="58" r="4" fill="none" stroke="url(#logoGold)" stroke-width="2" />
        </g>
        {/* Razor */}
        <g transform="translate(50, 40) rotate(40) translate(-50, -40)">
          <path d="M 49,18 L 53,24 L 51,52 L 49,52 Z" fill="url(#logoBlade)" />
          <circle cx="50" cy="52" r="2" fill="url(#logoGold)" />
          <path d="M 50,52 C 51,60 48,66 49,70" stroke="url(#logoGold)" stroke-width="2.2" stroke-linecap="round" fill="none" />
        </g>

        {/* Center Pivot Stud */}
        <circle cx="50" cy="40" r="3" fill="#C92A2A" stroke="url(#logoGold)" stroke-width="1.2" />

        {/* Lower Banner: CSC */}
        <path d="M 20,68 Q 50,64 80,68 L 78,82 Q 50,78 22,82 Z" fill="#C92A2A" stroke="url(#logoGold)" stroke-width="1.2" />
        <text x="50" y="77" font-family="'Cinzel', 'Oswald', serif" font-weight="900" font-size="8.5" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">
          CSC
        </text>

        {/* 6-Pointed Chicago Mini Star */}
        <polygon points="50,86 51.5,90 56,90 52.5,92.5 54,97 50,94 46,97 47.5,92.5 44,90 48.5,90" fill="#D4AF37" />
      </svg>
    </div>
  );

  // Full Badge Variant (for Hero / About / Showcase)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src="/logo.svg"
          alt="Chicago Style Cuts Barber Shop Logo"
          className="w-48 h-48 md:w-60 md:h-60 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  // Icon Only
  if (variant === 'icon') {
    return showLink ? (
      <Link to="/" className={`inline-block ${className}`} aria-label="Chicago Style Cuts Home">
        <BarberMark />
      </Link>
    ) : (
      <div className={className}><BarberMark /></div>
    );
  }

  // Horizontal Logo (Navbar & Footer standard)
  const Content = (
    <div className={`flex items-center gap-3 group ${className}`}>
      <BarberMark />
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-extrabold tracking-wider text-white text-base md:text-lg leading-tight uppercase group-hover:text-amber-400 transition-colors">
            Chicago Style Cuts
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] md:text-xs font-medium tracking-widest text-[#d4af37] uppercase">
          <span>Barber Shop</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 font-normal">Cary, NC</span>
        </div>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" className="inline-flex items-center focus:outline-none" aria-label="Chicago Style Cuts Barber Shop Homepage">
        {Content}
      </Link>
    );
  }

  return Content;
}
