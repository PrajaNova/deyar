"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Info, ExternalLink } from 'lucide-react';
import { CAFE_HOURS } from '../data';

export const ContactSection: React.FC = () => {
  // Form submission state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Dynamic Open/Closed Monitor State
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Basic dynamic open-state selector based on system local time (generally between 7:30 AM and 9:30 PM)
    const checkOpenStatus = () => {
      const now = new Date();
      const hrs = now.getHours();
      const mins = now.getMinutes();
      const totalMins = hrs * 60 + mins;
      
      const openMin = 7 * 60 + 30; // 7:30 AM
      const closeMin = 21 * 60 + 30; // 9:30 PM
      
      if (totalMins >= openMin && totalMins <= closeMin) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // sync every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Auto close success box
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section className="bg-brand-cream-light py-16 px-4 sm:px-6 lg:px-8 w-full text-brand-espresso">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. Header and open signal */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-rust block">COMMUNICATION & COORDINATES</span>
          <h1 className="font-serif text-4xl font-bold tracking-tight">Visit the Hearth Space</h1>
          <p className="font-sans text-xs md:text-sm text-brand-cocoa leading-relaxed font-light">
            Whether you want to coordinate private hiking gather-notes, write stories, ask about coffee shipments, or just say hello—we are listening.
          </p>
          
          {/* Dynamic Active Signal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-brand-cream border border-brand-cocoa/20 mt-4 shadow-sm">
            <span className={`h-2.5 w-2.5 rounded-sm ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-400'}`} />
            <span className="font-display text-[10px] uppercase tracking-widest font-semibold">
              {isOpenNow ? 'Deyar Hearth: Open Now' : 'Deyar Hearth: Closed Now'}
            </span>
            <span className="text-brand-cocoa font-sans text-[10px] pl-1 font-light">• 7:30 AM - 9:30 PM</span>
          </div>
        </div>

        {/* 2. Structured Splitting row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Operating Times */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-brand-cream rounded-sm p-6 md:p-8 border border-brand-cocoa/20 shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-espresso">Coordinates</h3>
              <div className="h-0.5 w-12 bg-brand-rust" />

              <div className="space-y-6">
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-brand-cream-light border border-brand-rust/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-rust" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs uppercase tracking-widest font-semibold text-brand-espresso">Our physical Sanctuary</h4>
                    <p className="font-sans text-xs md:text-sm text-brand-espresso/80 mt-1 font-light">
                      Valley Ridge Trail, Junction 4. <br />
                      Shimla Range, Himachal Pradesh 171001
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Shimla+Himachal+Pradesh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-brand-rust hover:text-brand-espresso font-display text-[10px] uppercase font-semibold mt-2 tracking-wider transition-colors"
                    >
                      Open in External Map
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-brand-cream-light border border-brand-pine/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-pine" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs uppercase tracking-widest font-semibold text-brand-espresso">Hearth Line Connection</h4>
                    <p className="font-sans text-xs md:text-sm text-brand-espresso/80 mt-1 font-light">
                      +91 (177) 4920-XBAR
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-brand-cream-light border border-brand-gold/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs uppercase tracking-widest font-semibold text-brand-espresso">Send a letter</h4>
                    <p className="font-sans text-xs md:text-sm text-brand-espresso/80 mt-1 font-light">
                      hearth@deyarcafe.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating hours table */}
            <div className="bg-brand-dark text-brand-cream rounded-sm p-6 md:p-8 border border-brand-rust/25 shadow-md space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-cream-light">Operating Rotations</h3>
              <div className="h-0.5 w-12 bg-brand-rust" />

              <div className="space-y-3 pt-2">
                {CAFE_HOURS.map((hr, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-brand-cream/10 pb-2">
                    <span className="font-display uppercase tracking-widest text-brand-cream/70">{hr.day}</span>
                    <span className="font-display tracking-wider font-semibold text-brand-gold">{hr.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 flex items-start gap-2.5 text-[10px] font-sans text-brand-cream/60 leading-relaxed">
                <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p>During winter blizzards, we tend the fire 24/7. Anyone walking the trails is welcome to stay warm free of charge.</p>
              </div>
            </div>

          </div>

          {/* Interactive contact message form */}
          <div className="lg:col-span-7 bg-brand-cream rounded-sm p-6 md:p-10 border border-brand-cocoa/20 shadow-xs space-y-6">
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-espresso">Drop a Leaf in Our Mailbox</h3>
              <p className="font-sans text-xs text-brand-cocoa mt-1 leading-relaxed">Fill out your details, and our local hearth coordinators will get back to you within a sun cycle.</p>
            </div>

            {formSuccess ? (
              <div className="p-6 bg-brand-pine/10 border border-brand-pine/30 rounded-sm flex items-start gap-4 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-brand-pine shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-pine">Letter Sent Safely!</h4>
                  <p className="font-sans text-xs text-brand-espresso/80 leading-relaxed mt-1">
                    Thank you for writing. Our team has received your letter and will respond right to your mailbox. Have a peaceful trek.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in">
                  <div className="space-y-2">
                    <label htmlFor="user-name" className="block font-display text-[10px] uppercase tracking-widest font-semibold">Your Name</label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Thakur"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-cream-light border border-brand-cocoa/20 focus:border-brand-rust focus:ring-1 focus:ring-brand-rust outline-none font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label id="user-email-label" htmlFor="user-email" className="block font-display text-[10px] uppercase tracking-widest font-semibold">Your Mailbox Header</label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@valleypoints.in"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-cream-light border border-brand-cocoa/20 focus:border-brand-rust focus:ring-1 focus:ring-brand-rust outline-none font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-msg" className="block font-display text-[10px] uppercase tracking-widest font-semibold">Your message</label>
                  <textarea
                    id="user-msg"
                    required
                    placeholder="Tell us what's on your mind..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-brand-cream-light border border-brand-cocoa/20 focus:border-brand-rust focus:ring-1 focus:ring-brand-rust outline-none font-sans text-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-espresso hover:bg-brand-rust text-brand-cream rounded-sm font-display text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 shadow cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Letter...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Mountain Mail
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* 3. Gorgeous Styled Vector Location Map Panel */}
        <div className="rounded-sm overflow-hidden border border-brand-cocoa/15 shadow-md bg-brand-cream overflow-hidden">
          
          {/* Custom Stylized Graphic Map Header */}
          <div className="p-4 bg-brand-cream border-b border-brand-cocoa/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-6">
            <div>
              <span className="block font-display text-[9px] uppercase tracking-widest text-brand-rust">VISUAL FOREST CARTOGRAPHY</span>
              <span className="block font-serif text-sm font-bold text-brand-espresso">Deyar Valley Ridge Topology Map</span>
            </div>
            
            <div className="text-2xs font-mono text-brand-cocoa bg-brand-cream-light px-3 py-1 rounded-sm border border-brand-cocoa/20">
              COORDS: 31.1048° N, 77.1734° E • ALTITUDE: 2200M
            </div>
          </div>

          {/* Interactive aesthetic SVG hiking map diagram */}
          <div className="relative aspect-video max-h-[380px] bg-brand-cream-light flex items-center justify-center relative overflow-hidden group">
            
            {/* Topography vector graphics background */}
            <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
              {/* Isohypse/Contours trails */}
              <circle cx="400" cy="200" r="160" fill="none" stroke="#845D4B" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="400" cy="200" r="240" fill="none" stroke="#845D4B" strokeWidth="0.5" strokeDasharray="6 3" />
              <circle cx="400" cy="200" r="320" fill="none" stroke="#845D4B" strokeWidth="0.25" />
              <circle cx="100" cy="50" r="90" fill="none" stroke="#845D4B" strokeWidth="0.5" />
              <circle cx="700" cy="350" r="120" fill="none" stroke="#845D4B" strokeWidth="0.5" />
              
              {/* Symbolic Hiking Trails */}
              <path d="M 50,380 C 150,350 250,220 380,210" fill="none" stroke="#9C522F" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" />
              <path d="M 380,210 C 450,210 600,100 750,40" fill="none" stroke="#9C522F" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" />
              <path d="M 400,20 C 450,110 390,160 380,210" fill="none" stroke="#1E3F2E" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 2" />

              {/* Mountains labels */}
              <text x="220" y="80" fill="#845D4B" className="font-display font-medium text-[8px] uppercase tracking-wider" opacity="0.6">CONIFEROUS FOREST BOUNDARY</text>
              <text x="500" y="320" fill="#845D4B" className="font-display font-medium text-[8px] uppercase tracking-wider" opacity="0.6">SHIMLA MALL ROAD TRAIL CONNECTOR (15 MIN)</text>
              <text x="50" y="270" fill="#1E3F2E" className="font-display font-medium text-[8px] uppercase tracking-widest" opacity="0.6">▼ KOTGARH PINECREST PATH</text>
            </svg>

            {/* Simulated interactive map markers */}
            <div className="absolute top-[52.5%] left-[47.5%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              
              {/* Wave effect rings */}
              <div className="absolute h-12 w-12 rounded-sm border border-brand-rust bg-brand-rust/20 animate-ping opacity-35" />
              <div className="absolute h-20 w-20 rounded-sm border border-brand-pine bg-brand-pine/5 animate-pulse opacity-20" />
              
              {/* Core Pins */}
              <div className="relative z-10 p-2 bg-brand-espresso text-brand-cream rounded-sm border border-brand-gold shadow-lg flex items-center justify-center cursor-pointer hover:bg-brand-rust transition-colors duration-300 animate-bounce">
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              
              {/* Floating label tag */}
              <div className="mt-3.5 bg-brand-dark/95 backdrop-blur-xs text-brand-cream-light font-display text-[9px] uppercase tracking-[0.2em] font-semibold py-1.5 px-3 rounded-sm shadow-2xl border border-brand-rust/40 text-center select-none whitespace-nowrap">
                DEYAR CAFE SANCTUARY
                <span className="block text-[7.5px] font-sans text-brand-gold font-light mt-0.5 uppercase tracking-widest">FIREPLACE & WOODFIRED BREWS • ACTIVE NOW</span>
              </div>

            </div>

          </div>

          {/* Micro Footer instructions */}
          <div className="p-4 bg-brand-cream/80 text-center text-sans text-brand-cocoa text-[10px] leading-none border-t border-brand-cocoa/15 px-6">
            Hover & Click "Open in External Map" above to load standard GPS orientation directions directly.
          </div>

        </div>

      </div>
    </section>
  );
};
