import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Users, MapPin, Star, Award, Crown, Sparkles } from 'lucide-react';

const Home = () => {
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    type: 'rooms'
  });

  const featuredRooms = [
    {
      id: 1,
      name: "Royal Maharaja Suite",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      price: "₹45,000",
      features: ["Palace View", "Butler Service", "Private Garden"]
    },
    {
      id: 2,
      name: "Heritage Palace Room",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "₹25,000",
      features: ["Antique Furnishing", "Marble Bathroom", "Courtyard View"]
    },
    {
      id: 3,
      name: "Colonial Governor Suite",
      image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      price: "₹35,000",
      features: ["British Decor", "Study Room", "Tea Service"]
    }
  ];

  const experiences = [
    {
      title: "Heritage Walks",
      image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
      description: "Explore the royal history and architecture"
    },
    {
      title: "Royal Dining",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      description: "Authentic Rajasthani and British cuisine"
    },
    {
      title: "Spa Treatments",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      description: "Ayurvedic wellness and relaxation"
    },
    {
      title: "Cultural Events",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      description: "Traditional music and dance performances"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-ink/60 to-royal-maroon/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-up">
            <Crown className="h-16 w-16 text-antique-gold mx-auto mb-6" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="text-antique-gold">Raj Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
              Experience the grandeur of Rajasthan's royal legacy<br />
              Where British elegance meets Indian hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rooms"
                className="bg-royal-maroon text-white px-8 py-4 rounded-full hover:bg-royal-maroon/90 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Explore Rooms
              </Link>
              <Link
                to="/packages"
                className="border-2 border-antique-gold text-antique-gold px-8 py-4 rounded-full hover:bg-antique-gold hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Sparkles className="h-8 w-8 text-antique-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-6">Royal Accommodations</h2>
          <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
            Discover our magnificent rooms and suites, each uniquely designed to reflect 
            the grandeur of Rajasthan's royal heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-royal-maroon mb-2">{room.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-antique-gold">{room.price}</span>
                  <span className="text-sm text-charcoal-ink/60">per night</span>
                </div>
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-antique-gold" />
                      <span className="text-sm text-charcoal-ink">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/rooms/${room.id}`}
                  className="block w-full bg-royal-maroon text-white text-center py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-palace-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-8 w-8 text-antique-gold mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-6">Royal Experiences</h2>
            <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
              Immerse yourself in the rich culture and traditions of Rajasthan 
              through our carefully curated experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-sm text-white/90">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-royal-maroon">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Crown className="h-12 w-12 text-antique-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive exclusive offers and updates from Raj Heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
            />
            <button className="bg-antique-gold text-white px-8 py-3 rounded-lg hover:bg-antique-gold/90 transition-colors duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;