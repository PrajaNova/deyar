"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle, Compass, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { DeyarLogo } from './DeyarLogo';
import { CAFE_HOURS } from '../data';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    
    // Simulate signup
    setSignedUp(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-brand-dark text-brand-cream-light border-t border-brand-rust/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        
        {/* Toggling grid: Newsletter and Brand Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Editorial Newsletter signup */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-display text-2xs uppercase tracking-[0.25em] text-brand-gold font-bold block">MONTHLY FOREST LEDGER</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
              Subscribe to the Hearth Letters
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-cream/80 max-w-xl font-light leading-relaxed">
              Recipients receive stories of wild honey migrations, alerts on new woodfired crop extractions, and secret fireside gatherings organized twice a autumn.
            </p>

            {signedUp ? (
              <div className="p-4 bg-brand-pine/15 border border-brand-pine/50 rounded-sm flex items-center gap-3 max-w-md animate-fade-in text-brand-cream-light">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="font-serif text-xs">Welcome to the Hearth Circle. Check your mailbox at next sunrise!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2 pointer-events-auto">
                <input
                  type="email"
                  required
                  placeholder="Insert your mailbox email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3 bg-brand-cream-light/10 border border-brand-cream/20 rounded-sm text-white outline-none focus:border-brand-gold font-sans text-xs placeholder:text-brand-cream/40 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-brand-rust hover:bg-brand-gold text-brand-cream hover:text-brand-espresso rounded-sm font-display text-[10px] uppercase tracking-widest font-bold transition-all shrink-0 cursor-pointer text-center"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Hours snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-semibold text-brand-gold">
              Hearth Rotations
            </h4>
            <div className="h-0.5 w-10 bg-brand-rust" />
            <div className="space-y-2.5 font-display text-2xs tracking-wider uppercase text-brand-cream/70">
              {CAFE_HOURS.map((itm, i) => (
                <div key={i} className="flex justify-between border-b border-brand-cream/10 pb-1.5">
                  <span>{itm.day}</span>
                  <span className="font-semibold text-brand-gold">{itm.time}</span>
                </div>
              ))}
              <div className="text-[10px] lowercase text-[#D4AF37] italic font-serif">
                *Winter trail support: open on blizzards.
              </div>
            </div>
          </div>

        </div>

        {/* Directory links and small Brand seal logo */}
        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <Link 
            href="/"
            className="flex items-center gap-3 cursor-pointer text-left"
          >
            <div className="w-10 h-10 bg-brand-cream text-brand-espresso rounded-sm flex items-center justify-center p-0.5 border border-brand-gold/20 transition-transform hover:rotate-6">
              <DeyarLogo size={36} variant="bear-only" />
            </div>
            <div>
              <span className="font-serif text-[18px] font-bold tracking-widest block text-white">DEYAR</span>
              <span className="font-display text-[8px] uppercase tracking-widest block mt-0.5 text-brand-gold">STORY & WOODFIRE</span>
            </div>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-2xs font-display uppercase tracking-widest text-brand-cream/75">
            <Link href="/" className="hover:text-brand-gold cursor-pointer bg-transparent border-none p-0">Heritage Home</Link>
            <Link href="/menu" className="hover:text-brand-gold cursor-pointer bg-transparent border-none p-0">Menu List</Link>
            <Link href="/about" className="hover:text-brand-gold cursor-pointer bg-transparent border-none p-0">Folklore Lore</Link>
            <Link href="/contact" className="hover:text-brand-gold cursor-pointer bg-transparent border-none p-0">Directions</Link>
          </nav>

        </div>

        {/* Legal and credits */}
        <div className="pt-8 border-t border-brand-cream/5 flex flex-col sm:flex-row justify-between text-[10px] font-display uppercase tracking-widest text-brand-cream/40 text-center sm:text-left gap-4">
          <div>
            © 2026 DEYAR CAFE • ALL LORE RESERVED.
          </div>
          <div className="flex gap-4 justify-center">
            <span className="flex items-center gap-1.5"><Leaf className="w-3 h-3 text-brand-pine" /> Himachal Wild honey</span>
            <span className="flex items-center gap-1.5"><Heart className="w-3 h-3 text-brand-rust" /> Peak Sanctuary</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
