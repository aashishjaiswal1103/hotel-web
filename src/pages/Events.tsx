import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Calendar, Users, MapPin, Clock, Star, Phone } from 'lucide-react';
import { EventVenue } from '../types'; // Import EventVenue type
import VenueDetailModal from '../components/VenueDetailModal'; // Import the modal

const Events = () => {
  const [selectedCapacity, setSelectedCapacity] = useState('all'); // Renamed state for clarity
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedVenueForModal, setSelectedVenueForModal] = useState<EventVenue | null>(null); // State for modal
  const navigate = useNavigate(); // Initialize useNavigate

  // --- Venue Data (Ensure it matches EventVenue type) ---
  const venues: EventVenue[] = [ // Explicitly type the array
    {
      id: 1,
      name: "Royal Durbar Hall",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      capacity: 300,
      area: 2500,
      description: "Grand ceremonial hall with ornate chandeliers and royal portraits, perfect for weddings and large celebrations.",
      features: ["Crystal Chandeliers", "Royal Portraits", "Marble Floors", "Stage Area", "Sound System", "Air Conditioning"],
      pricePerHour: 25000
    },
    {
      id: 2,
      name: "Garden Pavilion",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      capacity: 150,
      area: 1800,
      description: "Elegant outdoor pavilion surrounded by heritage gardens, ideal for intimate ceremonies and cocktail receptions.",
      features: ["Garden Views", "Natural Lighting", "Floral Arrangements", "Outdoor Bar Setup", "Gazebo"],
      pricePerHour: 18000
    },
    {
      id: 3,
      name: "Colonial Ballroom",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      capacity: 200,
      area: 2000,
      description: "British colonial-style ballroom with vintage decor and period furniture for sophisticated gatherings.",
      features: ["Period Furniture", "Vintage Decor", "Wooden Dance Floor", "Built-in Bar Area", "Climate Control"],
      pricePerHour: 22000
    },
    {
      id: 4,
      name: "Rooftop Terrace",
      image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
      capacity: 100,
      area: 1200,
      description: "Panoramic terrace with stunning palace views, perfect for sunset cocktails and intimate celebrations.",
      features: ["Palace Views", "Sunset Views", "Open Air Setting", "Dedicated Bar Setup", "Comfortable Lounge Seating"],
      pricePerHour: 15000
    }
  ];

  // --- Event Types Data ---
  const eventTypes = [
    // ... (keep eventTypes data as before)
    {
      name: "Royal Weddings",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      description: "Celebrate your special day with royal grandeur and traditional ceremonies"
    },
    {
      name: "Corporate Events",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      description: "Professional meetings and conferences in elegant heritage settings"
    },
    {
      name: "Cultural Celebrations",
      image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
      description: "Traditional festivals and cultural events with authentic experiences"
    },
    {
      name: "Private Parties",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      description: "Intimate gatherings and celebrations in luxurious surroundings"
    }
  ];

  // --- Filtering Logic ---
  const filteredVenues = selectedCapacity === 'all'
    ? venues
    : venues.filter(venue => venue.capacity >= parseInt(selectedCapacity.split('-')[0]) && // Handle ranges or single values
                             (selectedCapacity.includes('-') ? venue.capacity <= parseInt(selectedCapacity.split('-')[1]) : true));
    // Simple capacity filtering, adjust if using ranges e.g. "100-200"

  // --- Handlers ---
   const handleCheckAvailability = (venue: EventVenue) => {
      navigate('/book', {
          state: {
              bookingType: 'EventVenue',
              item: venue,
              date: selectedDate || '', // Pass selected date if available
              // Guests might be added later in the booking form
          }
      });
  };

  const openVenueModal = (venue: EventVenue) => {
    setSelectedVenueForModal(venue);
  };

  const closeVenueModal = () => {
    setSelectedVenueForModal(null);
  };


  return (
    <> {/* Added Fragment shorthand */}
      <div className="min-h-screen pt-20 bg-ivory-sand">
        {/* Header */}
        <div className="bg-royal-maroon text-white py-16">
          {/* ... (header content remains the same) ... */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <Calendar className="h-16 w-16 text-antique-gold mx-auto mb-6"/> {/* Added Icon */}
             <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Royal Events</h1>
             <p className="text-xl text-white/90 max-w-2xl mx-auto">
                 Create unforgettable memories in our magnificent venues, where every celebration
                 becomes a royal affair steeped in heritage and elegance
             </p>
           </div>
        </div>

        {/* Event Types */}
        <section className="py-16">
          {/* ... (event types section remains the same) ... */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Types of Events We Host</h2>
                <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
                  From intimate gatherings to grand celebrations, we cater to every occasion
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {eventTypes.map((type, index) => (
                   <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                     <img
                       src={type.image}
                       alt={type.name}
                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                       <h3 className="font-serif text-xl font-bold mb-2">{type.name}</h3>
                       <p className="text-sm text-white/90">{type.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
        </section>

        {/* Venue Filter */}
        <section className="py-8 bg-white border-t border-b border-palace-beige sticky top-20 z-30"> {/* Added sticky top */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start">
              <div className='flex items-center space-x-2'>
                <Users className="h-5 w-5 text-royal-maroon" />
                <label htmlFor="capacityFilter" className="text-sm font-medium text-charcoal-ink whitespace-nowrap">Guest Capacity:</label>
                <select
                  id="capacityFilter"
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="px-4 py-2 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold text-sm"
                >
                  <option value="all">Any Capacity</option>
                  <option value="0-100">Up to 100</option> {/* Example Range */}
                  <option value="101-200">101 - 200</option> {/* Example Range */}
                  <option value="201-300">201 - 300</option> {/* Example Range */}
                  <option value="300">300+</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                 <Calendar className="h-5 w-5 text-royal-maroon" />
                <label htmlFor="dateFilter" className="text-sm font-medium text-charcoal-ink whitespace-nowrap">Preferred Date:</label>
                <input
                  id="dateFilter"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-2 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold text-sm"
                  min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="py-16 bg-palace-beige/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Our Magnificent Venues</h2>
              <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
                Choose from our collection of stunning spaces, each with its own unique character and charm.
              </p>
            </div>

            {filteredVenues.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredVenues.map((venue) => (
                  <div key={venue.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-palace-beige flex flex-col">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-56 object-cover" // Increased height
                    />
                    <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                      <h3 className="font-serif text-2xl font-bold text-royal-maroon mb-2">{venue.name}</h3>
                      <p className="text-charcoal-ink/75 text-sm mb-4 flex-grow">{venue.description}</p> {/* Added flex-grow */}

                      {/* Key Info Icons */}
                      <div className="grid grid-cols-3 gap-4 mb-5 text-center">
                        <div>
                          <Users className="h-5 w-5 text-antique-gold mx-auto mb-1" />
                          <p className="text-xs font-medium text-charcoal-ink">{venue.capacity} Guests</p>
                        </div>
                        <div>
                          <MapPin className="h-5 w-5 text-antique-gold mx-auto mb-1" />
                          <p className="text-xs font-medium text-charcoal-ink">{venue.area} sq ft</p>
                        </div>
                         <div>
                          <Clock className="h-5 w-5 text-antique-gold mx-auto mb-1" />
                           <p className="text-xs font-medium text-charcoal-ink">
                             {venue.pricePerHour ? `₹${venue.pricePerHour.toLocaleString()}/hr` : 'Quote'}
                           </p>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-5">
                        <h4 className="font-medium text-charcoal-ink text-sm mb-2">Features include:</h4>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="bg-palace-beige text-charcoal-ink px-3 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                          {venue.features.length > 3 && (
                            <span className="text-xs text-charcoal-ink/60 self-center">+{venue.features.length - 3} more</span>
                          )}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto"> {/* mt-auto */}
                        <button
                           onClick={() => handleCheckAvailability(venue)} // Updated handler
                           className="flex-1 bg-royal-maroon text-white py-3 px-4 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 font-medium text-sm"
                        >
                          book now
                        </button>
                        <button
                           onClick={() => openVenueModal(venue)} // Updated handler
                           className="flex-1 border border-palace-beige text-charcoal-ink py-3 px-4 rounded-lg hover:bg-palace-beige transition-colors duration-300 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-lg text-charcoal-ink/70">No venues match the selected capacity. Please adjust the filter.</p>
                </div>
            )}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 bg-royal-maroon text-white">
          {/* ... (booking CTA section remains largely the same, maybe adjust form fields if needed) ... */}
           <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
             <h2 className="font-serif text-4xl font-bold mb-4">Plan Your Royal Event</h2>
             <p className="text-xl text-white/90 mb-8">
                 Let our dedicated event specialists help you craft an unforgettable celebration steeped in heritage.
             </p>
             {/* Simplified Form/Enquiry Button */}
             <button className="bg-antique-gold text-white px-8 py-4 rounded-full hover:bg-antique-gold/90 transition-colors duration-300 font-medium flex items-center space-x-2 mx-auto text-lg">
                 <Calendar className="h-5 w-5" />
                 <span>Enquire Now</span>
             </button>
             <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-white/80">
                 <div className="flex items-center space-x-1">
                 <Phone className="h-4 w-4" />
                 <span>Speak to our Events Team: +91 141 234 5678</span>
                 </div>
                 <span>or email events@rajheritage.com</span>
             </div>
           </div>
        </section>
      </div>

      {/* Venue Detail Modal */}
      <VenueDetailModal venue={selectedVenueForModal} onClose={closeVenueModal} />
    </>
  );
};

export default Events;