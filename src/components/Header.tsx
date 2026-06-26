import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const isHomeTransparent = location.pathname === '/' && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHomeTransparent 
        ? 'bg-transparent border-b border-white/10' 
        : 'bg-ivory-sand/95 backdrop-blur-md border-b border-palace-beige/50 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Crown className={`h-8 w-8 transition-colors duration-300 ${
              isHomeTransparent ? 'text-antique-gold group-hover:text-white' : 'text-antique-gold group-hover:text-royal-maroon'
            }`} />
            <div>
              <h1 className={`text-2xl font-serif font-bold tracking-wide transition-colors duration-300 ${
                isHomeTransparent ? 'text-white' : 'text-royal-maroon'
              }`}>Raj Heritage</h1>
              <p className={`text-[10px] tracking-widest font-light transition-colors duration-300 ${
                isHomeTransparent ? 'text-white/80' : 'text-charcoal-ink/75'
              }`}>LUXURY PALACE HOTEL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[11px] xl:text-xs uppercase tracking-widest font-semibold transition-colors duration-300 relative py-1.5 ${
                  isHomeTransparent
                    ? location.pathname === item.path
                      ? 'text-antique-gold'
                      : 'text-white/90 hover:text-antique-gold'
                    : location.pathname === item.path
                      ? 'text-royal-maroon'
                      : 'text-charcoal-ink hover:text-royal-maroon'
                }`}
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-antique-gold animate-pulse"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link
              to="/loyalty"
              className={`p-2 transition-colors duration-300 ${
                isHomeTransparent ? 'text-white/90 hover:text-antique-gold' : 'text-charcoal-ink hover:text-royal-maroon'
              }`}
              aria-label="Loyalty Program"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              to="/book"
              className={`px-7 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isHomeTransparent 
                  ? 'bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-royal-maroon hover:border-white' 
                  : 'bg-royal-maroon text-white hover:bg-royal-maroon/90 shadow-md'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isHomeTransparent ? 'text-white hover:text-antique-gold' : 'text-charcoal-ink hover:text-royal-maroon'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl border-t border-palace-beige/50 animate-fade-in">
            <nav className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium tracking-wide transition-colors duration-300 hover:text-royal-maroon ${
                    location.pathname === item.path ? 'text-royal-maroon border-l-2 border-antique-gold pl-2' : 'text-charcoal-ink'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-palace-beige/50 space-y-4">
                <Link
                  to="/loyalty"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 text-sm font-medium text-charcoal-ink hover:text-royal-maroon transition-colors duration-300"
                >
                  <User className="h-4 w-4 text-antique-gold" />
                  <span>Member Portal</span>
                </Link>
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-royal-maroon text-white py-3 rounded-xl text-center font-medium shadow-md hover:bg-royal-maroon/95 transition-all"
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