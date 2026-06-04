"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-brand-dark text-brand-cream py-16 px-4 border-y border-brand-rust/20 relative overflow-hidden">
      
      {/* Subtle quote graphic in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none text-brand-gold select-none">
        <Quote className="w-48 h-48 rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold block">HIKER DIARIES</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-cream-light">Shared Around the Hearth</h2>
          <div className="h-0.5 w-12 bg-brand-rust mx-auto mt-4" />
        </div>

        {/* Testimonial Active Display Panel */}
        <div className="w-full bg-brand-cream-light/5 border border-brand-cream/10 rounded-2xl p-6 md:p-10 relative flex flex-col items-center text-center space-y-6">
          
          {/* Avatar Profile Frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-rust rounded-full rotate-6 scale-102" />
            <img 
              src={TESTIMONIALS[activeIdx].avatar} 
              alt={TESTIMONIALS[activeIdx].name} 
              className="relative w-20 h-20 rounded-full object-cover border border-brand-gold/30 shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Core Star Ratings */}
          <div className="flex gap-1 justify-center text-brand-gold">
            {Array.from({ length: TESTIMONIALS[activeIdx].rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-gold stroke-brand-gold" />
            ))}
          </div>

          {/* Testimonial Commentary Text */}
          <p className="font-serif text-base md:text-lg italic text-brand-cream/90 max-w-2xl leading-relaxed">
            "{TESTIMONIALS[activeIdx].text}"
          </p>

          {/* Speaker Metadata */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-cream-light leading-none">{TESTIMONIALS[activeIdx].name}</h4>
            <span className="font-display text-[9px] uppercase tracking-widest text-[#D4AF37] block mt-1.5">{TESTIMONIALS[activeIdx].role}</span>
          </div>

          {/* Carousel Arrows toggles */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-brand-cream text-brand-espresso hover:bg-brand-gold hover:text-brand-espresso rounded-full transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-brand-cream text-brand-espresso hover:bg-brand-gold hover:text-brand-espresso rounded-full transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
