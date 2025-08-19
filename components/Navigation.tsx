'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  scrolled: boolean;
  darkMode?: boolean;
}

export default function Navigation({ scrolled, darkMode = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { href: isHomePage ? '#services' : '/#services', label: 'Treatments' },
    { href: '/prp', label: 'PRP Therapy' },
    { href: '/tools', label: 'Tools' },
    { href: isHomePage ? '#about' : '/#about', label: 'About' },
    { href: isHomePage ? '#testimonials' : '/#testimonials', label: 'Results' },
    { href: isHomePage ? '#contact' : '/#contact', label: 'Contact' },
  ];

  const textColor = darkMode 
    ? (scrolled ? 'text-neutral-700' : 'text-white')
    : 'text-neutral-700';
  
  const hoverColor = darkMode 
    ? (scrolled ? 'hover:text-primary-600' : 'hover:text-primary-300')
    : 'hover:text-primary-600';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/676ae8_702c36455e8c44acb913421b1a277550~mv2.png/v1/fill/w_185,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eskeen_logo_gold_TRANSPARENT.png"
              alt="Eskeen Clinic"
              className={`h-12 w-auto ${darkMode && !scrolled ? 'brightness-0 invert' : ''}`}
            />
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColor} ${hoverColor} transition-colors font-medium`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://www.treatwell.co.uk/place/eskeen-clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book Now
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full ${darkMode && !scrolled ? 'bg-white' : 'bg-neutral-700'} transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full ${darkMode && !scrolled ? 'bg-white' : 'bg-neutral-700'} transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full ${darkMode && !scrolled ? 'bg-white' : 'bg-neutral-700'} transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}