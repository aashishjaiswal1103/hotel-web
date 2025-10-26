import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Star, Users, Wifi, Car, Coffee, Bath, Eye } from 'lucide-react';

const Rooms = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([10000, 100000]);

  const rooms = [
    {
      id: 1,
      name: "Royal Maharaja Suite",
      category: "suite",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      images: [
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      price: 45000,
      rating: 4.9,
      reviews: 128,
      capacity: 4,
      size: 850,
      description: "The pinnacle of luxury with panoramic palace views, private butler service, and exquisite antique furnishings.",
      amenities: ["Butler Service", "Palace View", "Private Garden", "Antique Furniture", "Marble Bathroom", "Wi-Fi", "Mini Bar", "Air Conditioning"]
    },
    {
      id: 2,
      name: "Heritage Palace Room",
      category: "deluxe",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      images: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
      ],
      price: 25000,
      rating: 4.7,
      reviews: 94,
      capacity: 2,
      size: 450,
      description: "Elegantly appointed room with traditional Rajasthani decor and modern comforts for the discerning traveler.",
      amenities: ["Courtyard View", "Traditional Decor", "Marble Bathroom", "Wi-Fi", "Tea Service", "Air Conditioning"]
    },
    {
      id: 3,
      name: "Colonial Governor Suite",
      category: "suite",
      image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      images: [
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
      ],
      price: 35000,
      rating: 4.8,
      reviews: 76,
      capacity: 3,
      size: 650,
      description: "British colonial elegance meets Indian luxury in this sophisticated suite with private study and tea service.",
      amenities: ["Study Room", "British Decor", "Tea Service", "Garden View", "Wi-Fi", "Mini Bar", "Air Conditioning"]
    },
    {
      id: 4,
      name: "Royal Family Room",
      category: "family",
      image: "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg",
      images: [
        "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      price: 38000,
      rating: 4.6,
      reviews: 52,
      capacity: 6,
      size: 750,
      description: "Spacious family accommodation with connecting rooms and child-friendly amenities in royal surroundings.",
      amenities: ["Connecting Rooms", "Family Friendly", "Large Bathroom", "Wi-Fi", "Kids Amenities", "Air Conditioning"]
    },
    {
      id: 5,
      name: "Heritage Deluxe Room",
      category: "deluxe",
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
      images: [
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      price: 20000,
      rating: 4.5,
      reviews: 103,
      capacity: 2,
      size: 380,
      description: "Comfortable accommodation with heritage charm, featuring handcrafted furniture and traditional textiles.",
      amenities: ["Heritage Decor", "Handcrafted Furniture", "Wi-Fi", "Tea Service", "Air Conditioning"]
    },
    {
      id: 6,
      name: "Luxury Standard Room",
      category: "standard",
      image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg",
      images: [
        "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      price: 15000,
      rating: 4.3,
      reviews: 67,
      capacity: 2,
      size: 300,
      description: "Well-appointed standard room with essential amenities and glimpses of royal architecture.",
      amenities: ["Modern Amenities", "Comfortable Bedding", "Wi-Fi", "Air Conditioning"]
    }
  ];

  const filteredRooms = rooms.filter(room => {
    if (filter !== 'all' && room.category !== filter) return false;
    if (room.price < priceRange[0] || room.price > priceRange[1]) return false;
    return true;
  });

  const amenityIcons = {
    "Wi-Fi": Wifi,
    "Air Conditioning": Coffee, // You might want to import a better icon like Wind or AirVent
    "Marble Bathroom": Bath,
    "Mini Bar": Coffee, // You might want a different icon
    "Parking": Car
  };

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Header */}
      <div className="bg-royal-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our collection of luxurious accommodations, each uniquely designed
            to offer the ultimate in comfort and royal elegance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-palace-beige">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-20 items-start sm:items-center">
              <div>
                <label className="block text-sm font-lg text-charcoal-ink mb-2">Category</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
                >
                  <option value="all">All Rooms</option>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suites</option>
                  <option value="family">Family</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium text-charcoal-ink mb-2">Price Range</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-charcoal-ink">₹{priceRange[0].toLocaleString()}</span>
                  <span className="text-sm text-charcoal-ink">-</span>
                  <span className="text-sm text-charcoal-ink">₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-royal-maroon text-white' : 'text-charcoal-ink hover:bg-palace-beige'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-royal-maroon text-white' : 'text-charcoal-ink hover:bg-palace-beige'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Rooms Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
          {filteredRooms.map((room) => (
            <div key={room.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className={`object-cover transition-transform duration-700 hover:scale-110 ${viewMode === 'list' ? 'w-full h-64 md:h-full' : 'w-full h-64'}`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-antique-gold text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {room.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-300">
                    <Eye className="h-4 w-4 text-charcoal-ink" />
                  </button>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-royal-maroon">{room.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-antique-gold fill-current" />
                    <span className="text-sm font-medium text-charcoal-ink">{room.rating}</span>
                    <span className="text-sm text-charcoal-ink/60">({room.reviews})</span>
                  </div>
                </div>
                
                <p className="text-charcoal-ink/70 text-sm mb-4 leading-relaxed">{room.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-charcoal-ink/70">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{room.capacity} Guests</span>
                  </div>
                  <div>
                    <span>{room.size} sq ft</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <span key={index} className="bg-palace-beige text-charcoal-ink px-3 py-1 rounded-full text-xs">
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="text-xs text-charcoal-ink/60">+{room.amenities.length - 4} more</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-antique-gold">₹{room.price.toLocaleString()}</span>
                    <span className="text-sm text-charcoal-ink/60 ml-1">per night</span>
                  </div>
                  <Link
                    to={`/rooms/${room.id}`}
                    className="bg-royal-maroon text-white px-6 py-2 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;