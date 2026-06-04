"use client";

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'emblem' | 'simple' | 'bear-only';
  size?: number;
  theme?: 'dark' | 'light';
}

export const DeyarLogo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'emblem',
  size = 180,
  theme = 'dark'
}) => {
  const [imageError, setImageError] = useState(false);

  // Try to load custom logo images, otherwise fall back to native SVG drawings
  const logoSrc = theme === 'light' ? '/images/logo-light.png' : '/images/logo-dark.png';

  // Brand colors mapping
  const colors = {
    rust: '#5A5A40',
    cocoa: '#6B5A4E',
    espresso: '#4A3728',
    pine: '#5A5A40',
    gold: '#D4BC9B',
    cream: '#FAF8F5'
  };

  if (!imageError) {
    return (
      <img
        src={logoSrc}
        alt="Deyar Logo"
        onError={() => setImageError(true)}
        className={`${className} object-contain inline-block`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (variant === 'bear-only') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Background Ambient Glow */}
        <circle cx="100" cy="110" r="75" fill={colors.cream} opacity="0.4" />
        
        {/* Mountain back-line */}
        <path d="M40 145l30-40 25 30 45-60 35 70H40z" fill={colors.cocoa} opacity="0.15" />
        <path d="M25 155l35-30 20 18 25-25 45 42 25-25 15 20H25z" fill={colors.pine} opacity="0.1" />

        {/* Minimalist Bear looking up (Profile) */}
        <path 
          d="M 50 160 
             C 65 150, 75 125, 80 110 
             C 85 95, 95 85, 115 80 
             C 125 78, 140 78, 148 76
             C 152 75, 153 71, 150 68
             C 145 61, 137 57, 131 58
             C 123 59, 115 62, 108 55
             C 102 49, 98 42, 95 38
             C 93 36, 89 36, 88 39
             C 86 45, 81 50, 75 52
             C 65 55, 59 50, 56 46
             C 54 44, 51 45, 51 48
             C 52 56, 50 64, 42 70
             C 32 78, 25 90, 26 105
             C 27 125, 33 145, 50 160 Z" 
          fill={colors.espresso} 
          className="transition-all duration-300"
        />

        {/* Bear Eye - Looking up sleepily/warmly */}
        <ellipse cx="108" cy="65" rx="3" ry="1.5" transform="rotate(-25 108 65)" fill={colors.cream} />
        {/* Warm smile cheek accent */}
        <path d="M125 82 C122 84, 118 83, 116 80" stroke={colors.cocoa} strokeWidth="1.5" strokeLinecap="round" />

        {/* The Golden Pinecone - Hovering/balanced on bear nose */}
        <g transform="translate(152, 65) rotate(15)">
          {/* Base stalk */}
          <path d="M0 10 Q -2 15 -4 18" stroke={colors.rust} strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Main pinecone body seed scales */}
          <path d="M-8 4 C-10 -4, 0 -12, 4 -8 C8 -4, -4 12, -8 4 Z" fill={colors.gold} />
          {/* Overlapping pinecone segments */}
          <path d="M-5 0 C-7 -4, -1 -8, 1 -5 C3 -2, -3 3, -5 0 Z" fill={colors.rust} />
          <path d="M-2 -6 C-3 -9, 2 -10, 3 -7 C4 -4, 0 -1, -2 -6 Z" fill={colors.gold} />
          <path d="M-10 6 C-11 3, -7 0, -6 3 C-5 6, -9 9, -10 6 Z" fill={colors.cocoa} />
          <path d="M-4 8 C-5 6, -1 4, 0 6 C1 8, -3 10, -4 8 Z" fill={colors.gold} />
          <path d="M2 -3 C2 -6, 6 -6, 6 -3 C6 -0, 2 0, 2 -3 Z" fill={colors.rust} />
          <path d="M-3 -1 C-2 -3, 1 -3, 2 -1 C3 1, -2 1, -3 -1 Z" fill={colors.pine} />

          {/* Little spark of nature/magic */}
          <circle cx="10" cy="-6" r="1.5" fill={colors.gold} />
          <circle cx="-12" cy="-10" r="1" fill={colors.gold} />
          <circle cx="5" cy="12" r="2" fill={colors.rust} />
        </g>

        {/* Delicate Pine Forest Silhouettes in Foreground */}
        <polygon points="135,160 145,140 150,143 143,125 155,127 151,105 163,110 155,90 170,95 160,70 175,75 165,45 185,160" fill={colors.pine} />
        <polygon points="160,165 170,147 175,150 169,134 180,136 173,118 183,122 176,104 189,108 180,85 198,165" fill={colors.pine} opacity="0.7" />

        {/* Stars in the mountain night sky */}
        <path d="M45 40l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill={colors.gold} opacity="0.8" />
        <path d="M125 25l0.5 1 1 0.5-1 0.5-0.5 1-0.5-1-1-0.5 1-0.5z" fill={colors.gold} opacity="0.6" />
        <path d="M75 15l0.5 1 1 0.5-1 0.5-0.5 1-0.5-1-1-0.5 1-0.5z" fill={colors.gold} opacity="0.9" />
      </svg>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
      <div 
        className="relative flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]"
        style={{ width: size, height: size }}
      >
        {/* Circular text trail */}
        <svg
          className="absolute inset-0 animate-spin-slow"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
        >
          <path
            id="textPath"
            d="M 100, 100 m -84, 0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
            fill="none"
          />
          <text className="font-display font-medium uppercase tracking-[0.22em] text-[10.5px]">
            <textPath href="#textPath" fill={colors.espresso} startOffset="0%">
              • STORIES FROM THE DEODAR FOREST • DEYAR CAFE • ESTD 2026
            </textPath>
          </text>
        </svg>

        {/* Concentric rings of the seal */}
        <div 
          className="absolute inset-[14px] rounded-full border border-dashed flex items-center justify-center bg-brand-cream-light pointer-events-none"
          style={{ borderColor: colors.cocoa }}
        >
          <div 
            className="absolute inset-[6px] rounded-full border flex items-center justify-center"
            style={{ borderColor: colors.rust, borderWidth: '0.5px' }}
          >
            {/* Bear SVG drawing in middle */}
            <DeyarLogo size={size - 40} variant="bear-only" theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};
