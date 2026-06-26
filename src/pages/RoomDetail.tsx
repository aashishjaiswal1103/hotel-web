import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, ArrowLeft, ChevronLeft, ChevronRight, Crown, ShieldCheck, Heart } from 'lucide-react';
import { rooms, packages, spaActivities } from '../data';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find(r => r.id === Number(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen pt-40 text-center bg-ivory-sand">
        <Crown className="h-10 w-10 text-antique-gold mx-auto mb-3" />
        <h1 className="text-2xl font-serif font-bold text-royal-maroon">Room not found.</h1>
        <Link to="/rooms" className="text-antique-gold hover:underline mt-4 inline-block">Back to all rooms</Link>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/book', { state: { bookingType: 'Room', item: room } });
  };
  
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);

  const getRecommendationsForRoom = (roomId: number) => {
    if (roomId === 1) { // Royal Maharaja Suite
      return {
        pkg: packages.find(p => p.id === 1), // Royal Heritage Immersion
        activity: spaActivities.find(a => a.id === 1) // Maharaja Abhyanga
      };
    } else if (roomId === 3) { // Colonial Governor Suite
      return {
        pkg: packages.find(p => p.id === 2), // Raj Romance
        activity: spaActivities.find(a => a.id === 8) // Croquet & High Tea
      };
    } else if (roomId === 2 || roomId === 5) { // Heritage Rooms
      return {
        pkg: packages.find(p => p.id === 3), // Culinary Journey
        activity: spaActivities.find(a => a.id === 4) // Block Printing
      };
    } else { // default standard or family
      return {
        pkg: packages.find(p => p.id === 4), // Wellness & Ayurvedic
        activity: spaActivities.find(a => a.id === 3) // Yoga
      };
    }
  };

  const { pkg, activity } = getRecommendationsForRoom(room.id);

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Subheader Back Navigation */}
      <div className="bg-white border-b border-palace-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/rooms" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-charcoal-ink hover:text-royal-maroon transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 text-antique-gold" />
            <span>Return to Accommodations</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Gallery & Room Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative group overflow-hidden rounded-3xl border border-palace-beige shadow-lg">
              <img src={room.images[currentImageIndex]} alt={room.name} className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
              
              <button 
                onClick={prevImage} 
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md text-charcoal-ink hover:bg-white hover:text-royal-maroon hover:scale-110 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md text-charcoal-ink hover:bg-white hover:text-royal-maroon hover:scale-110 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white">
                <span className="text-xs uppercase tracking-widest bg-antique-gold px-3.5 py-1.5 rounded-full font-bold shadow-md">
                  {room.category}
                </span>
                <span className="text-sm font-semibold tracking-wider bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  Image {currentImageIndex + 1} of {room.images.length}
                </span>
              </div>
            </div>

            {/* Room description */}
            <div className="bg-white rounded-3xl p-8 border border-palace-beige/50 shadow-md">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-maroon mb-4">About the {room.name}</h2>
              <p className="text-charcoal-ink/80 leading-relaxed text-base mb-6 font-light">{room.longDescription}</p>
              
              <div className="border-t border-palace-beige/40 pt-6">
                <h3 className="font-serif text-xl font-bold text-royal-maroon mb-4 flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-antique-gold" />
                  <span>Room Highlights</span>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center space-x-3 text-sm text-charcoal-ink/80">
                      <Star className="h-4 w-4 text-antique-gold fill-antique-gold/20 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="bg-white rounded-3xl p-8 border border-palace-beige/50 shadow-md">
              <h3 className="font-serif text-xl font-bold text-royal-maroon mb-6">Imperial Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2.5 text-sm text-charcoal-ink/75">
                    <ShieldCheck className="h-4 w-4 text-antique-gold" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-antique-gold/20 shadow-luxury-gold sticky top-24 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-antique-gold font-bold block mb-1">Accommodation Name</span>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-royal-maroon leading-tight">{room.name}</h1>
              </div>

              <div className="flex items-center justify-between py-4 border-y border-palace-beige/50 text-sm text-charcoal-ink/75">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-antique-gold" />
                  <span>Max Capacity: <strong className="text-charcoal-ink font-semibold">{room.capacity} Guests</strong></span>
                </div>
                <div>
                  <span>Size: <strong className="text-charcoal-ink font-semibold">{room.size} sq ft</strong></span>
                </div>
              </div>

              <div className="text-center py-4 bg-ivory-sand/40 rounded-2xl border border-palace-beige/30">
                <span className="text-[10px] uppercase tracking-widest text-charcoal-ink/50 block font-semibold mb-1">Standard Rate</span>
                <span className="text-4xl font-bold text-antique-gold">₹{room.price.toLocaleString()}</span>
                <span className="text-xs text-charcoal-ink/60 ml-1">/ night</span>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-royal-maroon text-white py-4 rounded-xl hover:bg-royal-maroon/95 font-bold transition-all duration-300 uppercase tracking-widest shadow-md hover:shadow-luxury-hover"
              >
                Reserve Now
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-xs text-charcoal-ink/60">
                <Star className="h-4 w-4 text-antique-gold fill-current" />
                <span className="font-semibold text-charcoal-ink">{room.rating}</span>
                <span>({room.reviews} verified guest reviews)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Experiential Cross-Linkages Section */}
        <div className="mt-16 border-t border-palace-beige/50 pt-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-royal-maroon">Complete Your Experience</h2>
            <p className="text-charcoal-ink/70 max-w-xl mx-auto mt-2 text-sm">
              We recommend combining your stay in the {room.name} with these curated activities and packages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Recommended Package */}
            {pkg && (
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-palace-beige flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300">
                <img src={pkg.image} alt={pkg.name} className="w-full sm:w-2/5 h-48 sm:h-full object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-antique-gold font-bold flex items-center space-x-1 mb-1">
                      <Crown className="h-3 w-3" />
                      <span>Recommended Curated Stay</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">{pkg.name}</h3>
                    <p className="text-xs text-charcoal-ink/70 line-clamp-3 leading-relaxed mb-4">{pkg.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-palace-beige/40 pt-4 mt-auto">
                    <span className="text-sm font-bold text-antique-gold">₹{pkg.price.toLocaleString()}</span>
                    <Link to="/packages" className="text-xs text-royal-maroon hover:text-antique-gold font-bold uppercase tracking-wider flex items-center space-x-1">
                      <span>View Packages</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Recommended Activity */}
            {activity && (
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-palace-beige flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300">
                <img src={activity.image} alt={activity.name} className="w-full sm:w-2/5 h-48 sm:h-full object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-antique-gold font-bold flex items-center space-x-1 mb-1">
                      <Heart className="h-3 w-3" />
                      <span>Recommended Wellness Add-on</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">{activity.name}</h3>
                    <p className="text-xs text-charcoal-ink/70 line-clamp-3 leading-relaxed mb-4">{activity.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-palace-beige/40 pt-4 mt-auto">
                    <span className="text-sm font-bold text-antique-gold">₹{activity.price.toLocaleString()}</span>
                    <Link to="/spa" className="text-xs text-royal-maroon hover:text-antique-gold font-bold uppercase tracking-wider flex items-center space-x-1">
                      <span>View Services</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomDetail;