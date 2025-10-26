import React, { useState } from 'react';
import { Gift, Clock, Users, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Offers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Offers', icon: Gift },
    { id: 'seasonal', name: 'Seasonal', icon: Calendar },
    { id: 'dining', name: 'Dining', icon: Users },
    { id: 'spa', name: 'Spa & Wellness', icon: Star },
    { id: 'events', name: 'Events', icon: MapPin }
  ];

  const offers = [
    {
      id: 1,
      category: 'seasonal',
      title: 'Diwali Royal Celebration',
      discount: '40% OFF',
      description: 'Experience the grandeur of Diwali with traditional ceremonies, royal feast, and cultural performances',
      originalPrice: '₹25,000',
      offerPrice: '₹15,000',
      validUntil: 'November 15, 2024',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      features: ['3 nights accommodation', 'Traditional Diwali dinner', 'Cultural performances', 'Fireworks display'],
      terms: 'Valid for bookings until October 31st. Subject to availability.'
    },
    {
      id: 2,
      category: 'spa',
      title: 'Ayurvedic Wellness Retreat',
      discount: '30% OFF',
      description: 'Rejuvenate your mind, body, and soul with authentic Ayurvedic treatments and yoga sessions',
      originalPrice: '₹18,000',
      offerPrice: '₹12,600',
      validUntil: 'December 31, 2024',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
      features: ['5 spa treatments', 'Daily yoga sessions', 'Ayurvedic consultation', 'Herbal meals'],
      terms: 'Minimum 3 nights stay required. Advance booking mandatory.'
    },
    {
      id: 3,
      category: 'dining',
      title: 'British High Tea Experience',
      discount: '25% OFF',
      description: 'Indulge in an authentic British afternoon tea experience in our heritage dining room',
      originalPrice: '₹3,500',
      offerPrice: '₹2,625',
      validUntil: 'January 31, 2025',
      image: 'https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg',
      features: ['Traditional tea service', 'Assorted pastries', 'Finger sandwiches', 'Live piano music'],
      terms: 'Available daily 3-6 PM. Reservation required 24 hours in advance.'
    },
    {
      id: 4,
      category: 'events',
      title: 'Royal Wedding Package',
      discount: '35% OFF',
      description: 'Create unforgettable memories with our comprehensive royal wedding celebration package',
      originalPrice: '₹5,00,000',
      offerPrice: '₹3,25,000',
      validUntil: 'March 31, 2025',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      features: ['Venue decoration', 'Catering for 100 guests', 'Photography', 'Traditional ceremonies'],
      terms: 'Booking required 3 months in advance. Customization available.'
    },
    {
      id: 5,
      category: 'seasonal',
      title: 'Holi Festival Celebration',
      discount: '20% OFF',
      description: 'Join the vibrant Holi celebrations with colors, music, and traditional Rajasthani festivities',
      originalPrice: '₹8,000',
      offerPrice: '₹6,400',
      validUntil: 'March 10, 2025',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
      features: ['2 nights stay', 'Holi celebration', 'Traditional lunch', 'Cultural activities'],
      terms: 'Limited availability. Book early to secure your spot.'
    },
    {
      id: 6,
      category: 'dining',
      title: 'Maharaja Feast Experience',
      discount: '30% OFF',
      description: 'Savor the royal flavors of Rajasthan with our elaborate multi-course Maharaja feast',
      originalPrice: '₹4,500',
      offerPrice: '₹3,150',
      validUntil: 'February 28, 2025',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      features: ['12-course meal', 'Traditional entertainment', 'Royal dining setup', 'Welcome drinks'],
      terms: 'Available for groups of 4 or more. 48-hour advance notice required.'
    }
  ];

  const filteredOffers = selectedCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Header */}
      <div className="bg-royal-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="h-16 w-16 text-antique-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover exclusive deals and seasonal packages crafted for unforgettable experiences
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-palace-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-royal-maroon text-white'
                      : 'bg-palace-beige text-charcoal-ink hover:bg-antique-gold hover:text-white'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-palace-beige hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-antique-gold text-white px-3 py-1 rounded-full font-bold text-sm">
                    {offer.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm">
                      <Clock className="h-3 w-3 text-royal-maroon" />
                      <span className="text-charcoal-ink font-medium">Until {offer.validUntil}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-royal-maroon mb-2">{offer.title}</h3>
                  <p className="text-charcoal-ink/70 mb-4 text-sm leading-relaxed">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-charcoal-ink/50 line-through text-sm">{offer.originalPrice}</span>
                      <span className="text-antique-gold font-bold text-lg ml-2">{offer.offerPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {offer.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-antique-gold flex-shrink-0" />
                        <span className="text-xs text-charcoal-ink">{feature}</span>
                      </div>
                    ))}
                    {offer.features.length > 3 && (
                      <div className="text-xs text-charcoal-ink/70">
                        +{offer.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="border-t border-palace-beige pt-4">
                    <p className="text-xs text-charcoal-ink/60 mb-3">{offer.terms}</p>
                    <button className="w-full bg-royal-maroon text-white py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 font-medium">
                      Book This Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-palace-beige/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Gift className="h-12 w-12 text-antique-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Never Miss an Offer</h2>
          <p className="text-lg text-charcoal-ink/70 mb-8">
            Subscribe to our newsletter and be the first to know about exclusive deals and seasonal packages
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
            />
            <button className="bg-royal-maroon text-white px-6 py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 font-medium">
              Subscribe
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-charcoal-ink/60">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 141 234 5678</span>
            </div>
            <span>or</span>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>offers@rajheritage.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;