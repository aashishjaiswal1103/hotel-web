import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Packages', path: '/packages' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa & Activities', path: '/spa' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ivory-sand/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Crown className="h-8 w-8 text-antique-gold group-hover:text-royal-maroon transition-colors duration-300" />
            <div>
              <h1 className="text-2xl font-serif text-royal-maroon font-bold">Raj Heritage</h1>
              <p className="text-xs text-charcoal-ink/70 font-light">LUXURY PALACE HOTEL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-royal-maroon ${
                  location.pathname === item.path ? 'text-royal-maroon' : 'text-charcoal-ink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-charcoal-ink hover:text-royal-maroon transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/loyalty"
              className="p-2 text-charcoal-ink hover:text-royal-maroon transition-colors duration-300"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              to="/book"
              className="bg-royal-maroon text-white px-6 py-2 rounded-full hover:bg-royal-maroon/90 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal-ink hover:text-royal-maroon transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-palace-beige">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <input
                type="text"
                placeholder="Search rooms, events, spa services..."
                className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-palace-beige">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-300 hover:text-royal-maroon ${
                    location.pathname === item.path ? 'text-royal-maroon' : 'text-charcoal-ink'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-palace-beige space-y-4">
                <Link
                  to="/loyalty"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium text-charcoal-ink hover:text-royal-maroon transition-colors duration-300"
                >
                  Member Login
                </Link>
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-royal-maroon text-white px-6 py-2 rounded-full text-center font-medium"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;