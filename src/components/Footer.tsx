import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Crown className="h-8 w-8 text-antique-gold" />
              <div>
                <h3 className="text-xl font-serif font-bold">Raj Heritage</h3>
                <p className="text-xs text-gray-400 font-light">LUXURY PALACE HOTEL</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the grandeur of Rajasthan's royal heritage in our luxurious palace hotel, 
              where British colonial elegance meets traditional Indian hospitality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-antique-gold transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-antique-gold transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-antique-gold transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-antique-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-antique-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link to="/dining" className="text-gray-300 hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/spa" className="text-gray-300 hover:text-white transition-colors">Spa & Activities</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/loyalty" className="text-gray-300 hover:text-white transition-colors">Loyalty Program</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-antique-gold">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/spa" className="text-gray-300 hover:text-white transition-colors">Ayurvedic Spa</Link></li>
              <li><Link to="/spa" className="text-gray-300 hover:text-white transition-colors">Yoga Classes</Link></li>
              <li><Link to="/spa" className="text-gray-300 hover:text-white transition-colors">Polo Lessons</Link></li>
              <li><Link to="/spa" className="text-gray-300 hover:text-white transition-colors">Heritage Walks</Link></li>
              <li><Link to="/dining" className="text-gray-300 hover:text-white transition-colors">British Tea Service</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Concierge</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-antique-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-antique-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Royal Palace Road</p>
                  <p className="text-gray-300 text-sm">Jaipur, Rajasthan 302001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-antique-gold" />
                <p className="text-gray-300 text-sm">+91 141 234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-antique-gold" />
                <p className="text-gray-300 text-sm">info@rajheritage.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Raj Heritage Palace Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;