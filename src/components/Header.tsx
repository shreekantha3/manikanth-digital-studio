import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navigationItems, primaryCTAText, siteConfig } from '../data/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex flex-col">
            <span className={`text-sm font-semibold tracking-wider ${
              hasScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              MANIKANTH
            </span>
            <span className={`text-xs tracking-wider ${
              hasScrolled ? 'text-warm-gray' : 'text-white/80'
            }`}>
              DIGITAL STUDIO • SINDAGI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`transition-all duration-200 relative group ${
                  hasScrolled ? 'text-charcoal hover:text-champagne' : 'text-white hover:text-champagne'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    hasScrolled ? 'bg-champagne' : 'bg-champagne'
                  } group-hover:w-full w-0`}
                ></span>
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-full transition-all duration-200 ${
                hasScrolled ? 'text-charcoal hover:bg-charcoal/10' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Primary CTA */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${siteConfig.whatsapp?.replace('+', '').replace(/\s/g, '')}?text=${encodeURIComponent('Hi Manikanth Digital Studio, I want to book a shoot.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-2 rounded-full transition-all duration-200 border text-sm font-medium text-center ${
                hasScrolled
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white/70 text-white hover:bg-white/20'
              }`}
            >
              {primaryCTAText}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                hasScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left px-4 py-2 text-base font-medium text-charcoal transition-colors duration-200 hover:text-champagne"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mx-4 px-6 py-2 rounded-full border border-charcoal text-charcoal font-medium text-sm transition-all duration-200 hover:bg-charcoal"
              >
                {primaryCTAText}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;