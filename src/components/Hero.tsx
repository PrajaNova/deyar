"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Sparkles, Flame } from 'lucide-react';
import { DeyarLogo } from './DeyarLogo';
import { MENU_ITEMS, CAFE_STORY } from '../data';

export const Hero: React.FC = () => {
  // Get seasonal items for showcase
  const seasonalItems = MENU_ITEMS.filter((item) => item.category === 'seasonal');

  // Interactive local seasonal selector
  const [activeSpecial, setActiveSpecial] = React.useState(0);

  return (
    <div className="w-full">
      {/* 1. Primary Splash & Core Hero Branding */}
      <section 
        className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cafe-7.jpg')" }}
      >
        {/* Dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-brand-dark/75 z-0" />

        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          
          {/* Animated Signature Brand Seal Emblem */}
          <div className="mb-8">
            <DeyarLogo size={240} variant="emblem" theme="light" />
          </div>

          {/* Tagline Accent Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-brand-gold/15 text-brand-gold font-display text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 border border-brand-gold/30">
            <Leaf className="w-3.5 h-3.5" />
            Storytelling & Mountain Botany
          </div>

          {/* Master Display Typography */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Grown in Himalayan Forest Stories, <br className="hidden md:inline" />
            <span className="text-brand-gold italic font-normal">Smoked in Woodfire.</span>
          </h1>

          <p className="font-sans text-base md:text-xl text-brand-cream/90 max-w-2xl font-light leading-relaxed mb-10">
            Deyar is a cozy, artisanal refuge rooted in Bir Billing’s pristine Deodar forest folklore. Crafting high-altitude beans, heritage wild-botanical infusions, and traditional wood-smoked delicacies.
          </p>

          {/* Core App Direction Flows */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-espresso hover:bg-brand-gold/90 rounded-sm font-display text-xs uppercase tracking-widest font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-brand-gold text-center"
            >
              Explore Mountain Menu
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-espresso rounded-sm font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-semibold text-center"
            >
              Hours & Location
            </Link>
          </div>

          {/* Quick Links Row as requested */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-2xs font-display tracking-widest uppercase">
            <Link
              href="/menu"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors font-semibold py-1 border-b border-transparent hover:border-brand-gold cursor-pointer bg-transparent border-none p-0"
            >
              Menu
            </Link>
            <span className="text-brand-cream/30">•</span>
            <Link
              href="/about"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors font-semibold py-1 border-b border-transparent hover:border-brand-gold cursor-pointer bg-transparent border-none p-0"
            >
              About Us
            </Link>
            <span className="text-brand-cream/30">•</span>
            <Link
              href="/contact"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors font-semibold py-1 border-b border-transparent hover:border-brand-gold cursor-pointer bg-transparent border-none p-0"
            >
              Contact
            </Link>
          </div>

          {/* Micro Banner highlighting key features */}
          <div className="mt-12 pt-8 border-t border-brand-cream/20 w-full max-w-lg flex items-center justify-center gap-8 text-brand-cream/70 font-display text-[10px] uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-brand-gold" /> Ethically Wild Sourced</span>
            <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-brand-gold" /> Hearth Wood-Smoked</span>
          </div>

        </div>
      </section>

      {/* 2. Cozy Brand Photo Banner & Folklore Snippet */}
      <section className="bg-brand-dark py-20 px-4 text-brand-cream border-y border-brand-rust/35 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Custom Styled Coffee/Forest Photo frame */}
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-rust rounded-sm transform rotate-1 scale-95 opacity-50 group-hover:rotate-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-pine rounded-sm transform -rotate-1 scale-95 opacity-40 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-lg border border-brand-cocoa/30">
              <img 
                src="/images/cafe-4.jpg" 
                alt="Deyar mountain café courtyard featuring the central Deodar tree" 
                className="w-full h-full object-cover grayscale-[10%] brightness-90 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-display text-[9px] tracking-widest text-brand-gold uppercase block mb-1">Our Sanctuary</span>
                  <span className="font-serif text-lg text-white block">The Sacred Deodar Courtyard Tree</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-gold block">
              COZY HERITAGE STORY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream-light leading-tight">
              {CAFE_STORY.story_title}
            </h2>
            <div className="h-0.5 w-20 bg-brand-rust" />
            <p className="font-sans text-sm md:text-base text-brand-cream/80 leading-relaxed font-light">
              {CAFE_STORY.paragraphs[0]}
            </p>
            <p className="font-sans text-sm md:text-base text-brand-cream/80 leading-relaxed font-light">
              {CAFE_STORY.paragraphs[1]}
            </p>
            
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-cream-light font-display text-[11px] uppercase tracking-widest font-semibold transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
              >
                Read Full Folklore Heritage Story
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Deep-Dive Seasonal Focus Slider */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-2 mb-12">
            <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-rust block">
              LIMITED TIME ROTATION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-espresso">
              Current Seasonal Hearth Specials
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-cocoa/90 max-w-xl mx-auto">
              Prepared daily with wild-harvested pine ingredients and Kotgarh orchard elements. Pull up-close to try them.
            </p>
            <div className="h-0.5 w-16 bg-brand-rust mx-auto mt-4" />
          </div>

          {/* Seasonal Interactive Slider Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-cream-light rounded-sm p-6 md:p-10 border border-brand-cocoa/20 shadow-sm">
            
            {/* Spec Card Image Panel */}
            <div className="lg:col-span-12 xl:col-span-5 relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/5] border border-brand-cocoa/10">
              <img
                src={seasonalItems[activeSpecial].image}
                alt={seasonalItems[activeSpecial].name}
                className="w-full h-full object-cover transition-all duration-500 scale-102"
              />
              <div className="absolute top-4 left-4 bg-brand-rust text-[#FAF8F5] px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest font-display font-semibold shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                Active Special
              </div>
            </div>

            {/* Spec Details Column */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center space-y-6 lg:pl-6 text-brand-espresso">
              
              <div className="flex flex-wrap gap-2">
                {seasonalItems[activeSpecial].tags.map((tg, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 bg-brand-pine/10 text-brand-pine text-[10px] font-semibold tracking-wider uppercase rounded-sm">
                    {tg}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-espresso">
                {seasonalItems[activeSpecial].name}
              </h3>

              <div className="text-3xl font-display font-light text-brand-rust">
                ${seasonalItems[activeSpecial].price.toFixed(2)}
              </div>

              <p className="font-sans text-sm md:text-base text-brand-espresso/80 leading-relaxed font-light">
                {seasonalItems[activeSpecial].description}
              </p>

              {/* Slider Toggle Selectors */}
              <div className="flex gap-4 border-b border-brand-cocoa/20 pb-4">
                {seasonalItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSpecial(idx)}
                    className={`text-left border-l-2 pl-3 py-1 transition-all bg-transparent border-none cursor-pointer ${
                      activeSpecial === idx 
                        ? 'border-brand-rust font-semibold text-brand-rust' 
                        : 'border-transparent text-brand-espresso/55 hover:text-brand-espresso hover:border-brand-cocoa/40'
                    }`}
                  >
                    <span className="block text-[10px] uppercase font-display tracking-widest leading-none mb-1">Spec 0{idx + 1}</span>
                    <span className="font-serif text-sm block leading-none">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Action */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/menu"
                  className="px-6 py-3 bg-brand-espresso hover:opacity-95 text-[#FAF8F5] rounded-sm font-display text-2xs uppercase tracking-widest font-bold transition-all duration-300 shadow cursor-pointer flex items-center gap-2 border border-brand-espresso text-center"
                >
                  View Full Menu
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
