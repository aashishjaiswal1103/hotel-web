import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { rooms } from '../data'; // Import data from the new file

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find(r => r.id === Number(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen pt-40 text-center">
        <h1 className="text-2xl font-bold text-royal-maroon">Room not found.</h1>
        <Link to="/rooms" className="text-antique-gold hover:underline mt-4 inline-block">Back to all rooms</Link>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/book', { state: { bookingType: 'Room', item: room } });
  };
  
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      <div className="bg-white border-b border-palace-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/rooms" className="inline-flex items-center space-x-2 text-charcoal-ink hover:text-royal-maroon">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Rooms</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-4">
              <img src={room.images[currentImageIndex]} alt={room.name} className="w-full h-[500px] object-cover rounded-2xl" />
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"><ChevronLeft className="h-5 w-5" /></button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-palace-beige mb-8">
              <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-4">About This {room.category}</h2>
              <p className="text-charcoal-ink/70 leading-relaxed mb-4">{room.longDescription}</p>
              <h3 className="font-serif text-xl font-bold text-royal-maroon mb-3">Highlights</h3>
              <ul className="space-y-2 list-disc list-inside">
                {room.highlights.map((highlight, index) => (
                  <li key={index} className="text-charcoal-ink">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-palace-beige sticky top-24">
              <h1 className="font-serif text-2xl font-bold text-royal-maroon mb-2">{room.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-charcoal-ink/70 mb-4">
                  <div className="flex items-center space-x-1"><Users className="h-4 w-4" /><span>{room.capacity} Guests</span></div>
                  <div><span>{room.size} sq ft</span></div>
              </div>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-antique-gold">₹{room.price.toLocaleString()}</span>
                <span className="text-sm text-charcoal-ink/60 ml-1">per night</span>
              </div>
              <button
                onClick={handleBookNow}
                className="w-full bg-royal-maroon text-white py-3 rounded-lg hover:bg-royal-maroon/90 font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;