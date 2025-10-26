// project/src/components/VenueDetailModal.tsx
import React from 'react';
import { X, Users, MapPin, CheckCircle } from 'lucide-react';
import { EventVenue } from '../types'; // Import the EventVenue type

interface VenueDetailModalProps {
    venue: EventVenue | null;
    onClose: () => void;
}

const VenueDetailModal: React.FC<VenueDetailModalProps> = ({ venue, onClose }) => {
  if (!venue) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-palace-beige flex justify-between items-center bg-ivory-sand/50">
            <h2 className="font-serif text-3xl font-bold text-royal-maroon">{venue.name}</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-palace-beige transition-colors duration-200">
                <X className="h-6 w-6 text-charcoal-ink" />
            </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto">
           <img src={venue.image} alt={venue.name} className="w-full h-64 object-cover" />
           <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-charcoal-ink/80 leading-relaxed">{venue.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-palace-beige/30 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-antique-gold mx-auto mb-1" />
                        <p className="text-sm font-medium text-charcoal-ink">Capacity</p>
                        <p className="text-lg font-semibold text-royal-maroon">{venue.capacity} Guests</p>
                    </div>
                     <div className="bg-palace-beige/30 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-antique-gold mx-auto mb-1" />
                        <p className="text-sm font-medium text-charcoal-ink">Area</p>
                        <p className="text-lg font-semibold text-royal-maroon">{venue.area} sq ft</p>
                    </div>
                     <div className="bg-palace-beige/30 p-3 rounded-lg col-span-2 md:col-span-1">
                        <MapPin className="h-6 w-6 text-antique-gold mx-auto mb-1" /> {/* Replace with relevant icon if needed */}
                        <p className="text-sm font-medium text-charcoal-ink">Pricing</p>
                        <p className="text-lg font-semibold text-royal-maroon">
                            {venue.pricePerHour ? `₹${venue.pricePerHour.toLocaleString()}/hr` : 'Enquire for quote'}
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-royal-maroon mb-3">Key Features</h3>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {venue.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-charcoal-ink">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

         {/* Footer/Action */}
         <div className="p-4 bg-ivory-sand/50 border-t border-palace-beige text-right">
             <button
                onClick={onClose}
                className="bg-royal-maroon text-white px-6 py-2 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300"
             >
                Close
             </button>
         </div>

      </div>
    </div>
  );
};

export default VenueDetailModal;