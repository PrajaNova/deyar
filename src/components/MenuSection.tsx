"use client";

import React, { useState, useMemo } from 'react';
import { Search, Info, X, ShieldAlert, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  // Navigation & Search State
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'tea' | 'pastries' | 'seasonal'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Customization Info Modal State
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Categories list
  const categoriesMap = [
    { id: 'all', label: 'Full Forest Guild' },
    { id: 'coffee', label: 'Coffee Crafts' },
    { id: 'tea', label: 'Valley Infusions' },
    { id: 'pastries', label: 'Hearth Pastries' },
    { id: 'seasonal', label: 'Seasonal Rotations' },
  ];

  // Filtering Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Open recipe details dialog
  const handleOpenDetails = (item: MenuItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section className="bg-brand-cream-light py-12 px-4 sm:px-6 lg:px-8 w-full min-h-[85vh] text-brand-espresso">
      
      {/* 1. Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-rust block mb-2 font-semibold">ARTISANAL WOODFIRED COFFEE & TEA</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Deyar Kitchen Menu
        </h1>
        <p className="font-sans text-sm text-brand-cocoa max-w-lg mx-auto leading-relaxed">
          Explore single-origin coffee extracted on woodfire, botanical blends steeped with seasonal flowers, and traditional rolls glazed in forest honey.
        </p>
        <div className="h-0.5 w-16 bg-brand-rust mx-auto mt-4" />
      </div>

      {/* 2. Interactive Search & Filters controls */}
      <div className="max-w-6xl mx-auto space-y-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories Button Row */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {categoriesMap.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                }}
                className={`px-4 py-2 rounded-sm font-display text-2xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer border-none bg-transparent ${
                  activeCategory === cat.id
                    ? 'bg-brand-espresso text-[#FAF8F5] shadow-sm font-bold'
                    : 'bg-brand-cream border border-brand-cocoa/20 text-brand-espresso hover:border-brand-espresso/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box block */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-brand-cocoa">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search woodfired brews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-brand-cream border border-brand-cocoa/20 focus:border-brand-rust focus:ring-1 focus:ring-brand-rust outline-none transition-shadow font-sans text-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-brand-espresso/50 hover:text-brand-espresso bg-transparent border-none cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. Items Dynamic Catalog Grid */}
      <div className="max-w-6xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-brand-cream rounded-sm border border-dashed border-brand-cocoa/30 p-8 max-w-md mx-auto">
            <ShieldAlert className="w-12 h-12 text-brand-rust/60 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">No Forest Delicacies Found</h3>
            <p className="font-sans text-xs text-brand-cocoa leading-relaxed mb-4">
              We couldn't find matches for "{searchQuery}". Try searching for popular ingredients like "honey", "espresso", or "scone".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 bg-brand-espresso text-brand-cream rounded-sm font-display text-2xs uppercase tracking-widest font-semibold cursor-pointer border-none"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article 
                key={item.id}
                className="group flex flex-col bg-brand-cream rounded-sm overflow-hidden border border-brand-cocoa/15 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                id={`menu-item-${item.id}`}
              >
                
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark/20 border-b border-brand-cocoa/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-brand-cream/90 backdrop-blur-sm px-2.5 py-0.5 rounded-sm font-display text-[9px] font-semibold uppercase tracking-widest text-brand-espresso border border-brand-cocoa/20 shadow-sm">
                    {item.category}
                  </div>
                  
                  {/* Seasonal glow badge */}
                  {item.isSeasonal && (
                    <div className="absolute top-3 right-3 bg-brand-rust text-[#FAF8F5] px-2 py-0.5 rounded-sm font-display text-[8.5px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1 animate-pulse border border-brand-rust/10">
                      <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                      Seasonal
                    </div>
                  )}
                </div>

                {/* Card Content details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-1.5">
                      <h3 className="font-serif text-lg font-bold text-brand-espresso group-hover:text-brand-rust transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-display font-semibold text-brand-rust text-base shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-brand-espresso/70 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Item organic labels */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-brand-pine/5 text-brand-pine text-[8.5px] font-semibold tracking-wider uppercase rounded-sm border border-brand-pine/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-brand-cocoa/10">
                      <button
                        onClick={() => handleOpenDetails(item)}
                        className="w-full py-2.5 bg-brand-cream hover:bg-brand-cocoa/5 border border-brand-cocoa/20 text-brand-espresso font-display text-[10px] uppercase tracking-widest font-bold rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Info className="w-3.5 h-3.5" />
                        Explore Details
                      </button>
                    </div>
                  </div>

                </div>

              </article>
            ))}
          </div>
        )}
      </div>

      {/* 4. Customization Info Modal Dialog Frame */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="w-full max-w-lg bg-brand-cream-light rounded-sm overflow-hidden border border-brand-rust/20 shadow-xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Image banner */}
            <div className="relative h-44 shrink-0 bg-brand-dark/20">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-brand-dark/85 hover:bg-brand-rust text-brand-cream rounded-sm cursor-pointer transition-colors shadow-md text-white border-none"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="font-serif text-2xl font-bold text-white tracking-wide">{selectedItem.name}</span>
              </div>
            </div>

            {/* Modal Content container */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6 subtle-scroll text-brand-espresso">
              
              <div className="space-y-2">
                <h4 className="font-display text-[10px] uppercase tracking-widest text-brand-rust font-bold">Chef's Recipe Commentary</h4>
                <p className="font-sans text-xs md:text-sm text-brand-espresso/85 leading-relaxed font-light">
                  {selectedItem.description}
                </p>
                <div className="flex gap-2 pt-1.5">
                  {selectedItem.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-brand-pine/10 text-brand-pine text-[8.5px] uppercase tracking-wider font-semibold rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Display of information options (Non-interactive display for MVP) */}
              {selectedItem.customizationOptions && selectedItem.customizationOptions.length > 0 && (
                <div className="space-y-4 border-t border-brand-cocoa/15 pt-5">
                  <h4 className="font-display text-[10px] uppercase tracking-widest text-brand-rust font-bold">Options & Customizations</h4>
                  <div className="space-y-3">
                    {selectedItem.customizationOptions.map((option) => (
                      <div key={option.name} className="space-y-1">
                        <span className="font-sans text-xs font-semibold text-brand-espresso">{option.name}: </span>
                        <span className="font-sans text-xs text-brand-espresso/70">{option.options.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-brand-cocoa/15 pt-5 text-xs text-brand-cocoa/80 italic font-light">
                *Ask our barista for custom preferences upon order at the hearth.
              </div>

            </div>

            {/* Modal Action Footer */}
            <div className="p-6 shrink-0 bg-brand-cream border-t border-brand-cocoa/20 flex items-center justify-between">
              <div>
                <span className="block font-display text-[9px] uppercase tracking-widest text-brand-cocoa">Base Price</span>
                <span className="block font-serif text-xl font-bold text-brand-rust leading-none">${selectedItem.price.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-brand-espresso hover:opacity-90 text-[#FAF8F5] rounded-sm font-display text-2xs uppercase tracking-widest font-semibold transition-all duration-300 shadow cursor-pointer text-white border-none"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
