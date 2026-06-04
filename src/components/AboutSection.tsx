import React from 'react';
import { Leaf, Heart, Compass, Shield, MapPin, Clock } from 'lucide-react';
import { CAFE_STORY, CAFE_HOURS } from '../data';
import { DeyarLogo } from './DeyarLogo';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Compass className="w-6 h-6 text-brand-rust" />,
      title: "Himalayan Storytelling",
      desc: "We weave folklore, ancient mythology, and woodfired forest rituals directly into modern food culture to keep regional oral traditions alive."
    },
    {
      icon: <Leaf className="w-6 h-6 text-brand-pine" />,
      title: "Deodar Forest Stewardship",
      desc: "Our menu uses responsibly harvested wild sage, cedar honey, and meadow botanicals, dedicating 5% of proceeds directly to community re-forestry in Shimla."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-gold" />,
      title: "Local Crop Alliance",
      desc: "Our high-altitude coffee lots are bought directly from multi-generational family farms in high valleys, securing fair wages and protecting terraced soil health."
    }
  ];

  return (
    <section className="bg-brand-cream-light py-16 px-4 sm:px-6 lg:px-8 w-full text-brand-espresso">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* 1. Page Title Narrative Anchor */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-rust block">OUR HERITAGE</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Connecting People, Peaks, and Pine
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-cocoa leading-relaxed">
            Deyar is a love letter to the timeless storytelling nights around mountain woodstoves, where legends of guardians and wild forests come alive.
          </p>
          <div className="h-0.5 w-16 bg-brand-rust mx-auto mt-6" />
        </div>

        {/* 2. Fully Detailed Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Logo & Folklore graphic Column */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-brand-cream rounded-sm p-8 border border-brand-cocoa/20 shadow-xs">
            <DeyarLogo size={200} variant="bear-only" className="mb-4" />
            <h3 className="font-serif text-xl font-bold text-center text-brand-espresso">Balanced on His Nose</h3>
            <p className="font-sans text-2xs uppercase tracking-widest text-brand-rust text-center mt-1 font-semibold">The Himalayan Bear Seal</p>
            <p className="font-sans text-xs text-brand-espresso/70 text-center mt-3 font-light leading-relaxed">
              Symbol of forest harmony. Folklore states that when the protector bear is content, a pinecone rests perfectly on its nose.
            </p>
          </div>

          {/* Core stories text Column */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-brand-espresso">
              The Genesis of Deyar Cafe
            </h2>
            <div className="space-y-4 font-sans text-sm md:text-base text-brand-espresso/80 leading-relaxed font-light">
              <p>
                {CAFE_STORY.paragraphs[2]}
              </p>
              <p>
                {CAFE_STORY.paragraphs[3]}
              </p>
              <blockquote className="border-l-4 border-brand-rust pl-4 italic text-brand-cocoa font-serif py-1 bg-brand-cream/40 rounded-sm">
                "To step into Deyar is to slow down, listen to the crackling fire, and partake in a lifestyle shared with ancient forests."
              </blockquote>
            </div>
          </div>

        </div>

        {/* 3. Bento Grid of Core Values & Community Dedication */}
        <div className="space-y-10 pt-10 border-t border-brand-cocoa/20">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <span className="font-display text-[10px] uppercase tracking-widest text-brand-pine font-semibold block">COOPERATIVE PRINCIPLES</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-espresso">Our Devotion To Himachal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-brand-cream rounded-sm p-6 border border-brand-cocoa/25 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-sm bg-brand-cream-light flex items-center justify-center shadow-xs">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-espresso">{val.title}</h3>
                <p className="font-sans text-xs md:text-sm text-brand-espresso/85 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Beautiful Photo Placeholder Section (Deyar Interior Spotlight) */}
        <div className="bg-brand-dark rounded-sm overflow-hidden text-brand-cream border border-brand-rust/30 shadow-md grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
            <span className="font-display text-xs uppercase tracking-widest text-brand-gold">CAFE DESIGNS</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-cream-light leading-[1.25]">
              Step Inside the Himalayan Hearth Room
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-cream/85 leading-relaxed font-light">
              Crafted with reclaimed cedarwood columns, soft wool weaving from Kullu weavers, and a glowing, stone hearth fireplace. Built as a warm, communal reading parlor.
            </p>
            
            <div className="space-y-3 pt-2 text-xs font-display text-brand-cream/70 uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Valley Ridge Trail, Junction 4. Shimla, Himachal</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Open Everyday: {CAFE_HOURS[0].time}</span>
              </div>
            </div>
          </div>

          {/* Interactive interior picture block */}
          <div className="relative aspect-video md:aspect-auto min-h-[300px] overflow-hidden group">
            <img 
              src="/images/cafe-1.jpg" 
              alt="Deyar timber café interior cozy bar counter with warm light and paper lanterns" 
              className="w-full h-full object-cover brightness-95 group-hover:scale-103 transition-transform duration-500"
            />
            {/* Minimal banner overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-brand-dark/80 p-4 border-t border-brand-rust/20 backdrop-blur-xs flex items-center justify-between text-brand-cream text-2xs font-display uppercase tracking-widest px-6">
              <span>Warm Wooden Hearth Bar</span>
              <span className="text-brand-gold">Hearth Stamped</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
