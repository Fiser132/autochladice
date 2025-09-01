'use client';

import { useState, useEffect } from 'react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Služby' },
    { href: '#features', label: 'O nás' },
    { href: '#testimonials', label: 'Referencie' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Company Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">AutoChladiče SK</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-all duration-300 hover:text-emerald-400 ${
                  isScrolled ? 'text-gray-200' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Zavolajte nám
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 