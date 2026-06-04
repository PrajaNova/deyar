"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { DeyarLogo } from './DeyarLogo';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'menu', label: 'Menu', href: '/menu' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Hours & Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-cocoa/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link 
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 group text-left cursor-pointer bg-transparent border-none p-0"
          >
            {/* Minimal Logo Symbol */}
            <div className="w-12 h-12 bg-brand-espresso rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-brand-rust/30 transition-transform duration-300 group-hover:scale-105 shadow-inner">
              <DeyarLogo size={42} variant="bear-only" className="w-full h-full scale-105" />
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wider text-brand-espresso block leading-none">
                DEYAR
              </span>
              <span className="font-display text-[9px] uppercase tracking-[0.2em] text-brand-rust block mt-1">
                Himachal Mountain Café
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-1 py-2 font-display text-sm uppercase tracking-widest font-medium transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  isActive(item.href) 
                    ? 'text-brand-rust' 
                    : 'text-brand-espresso/80 hover:text-brand-rust'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-rust rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-espresso hover:text-brand-rust transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-cocoa/20 bg-brand-cream px-4 py-6 space-y-3 shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={handleNavClick}
              className={`w-full text-left px-4 py-3 rounded-sm font-display text-sm uppercase tracking-widest font-medium transition-all bg-transparent border-none cursor-pointer block ${
                isActive(item.href) 
                  ? 'bg-brand-rust/10 text-brand-rust pl-6' 
                  : 'text-brand-espresso hover:bg-brand-cocoa/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
