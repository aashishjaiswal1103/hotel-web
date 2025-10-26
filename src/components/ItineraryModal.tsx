import React from 'react';
import { X, Clock } from 'lucide-react';
import { Package } from '../types';

interface ItineraryModalProps {
  pkg: Package | null;
  onClose: () => void;
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ pkg, onClose }) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-palace-beige sticky top-0 bg-white z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-serif text-2xl font-bold text-royal-maroon">{pkg.name}</h2>
              <div className="flex items-center space-x-2 text-sm text-charcoal-ink/70 mt-1">
                <Clock className="h-4 w-4" />
                <span>{pkg.duration}</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-palace-beige">
              <X className="h-5 w-5 text-charcoal-ink" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-bold text-royal-maroon mb-3">Package Includes</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-charcoal-ink">
              {pkg.inclusions.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-royal-maroon mb-3">Full Itinerary</h3>
            <div className="space-y-4">
              {pkg.itinerary.map((day, index) => (
                <div key={index}>
                  <h4 className="font-bold text-charcoal-ink">{day.day}: {day.title}</h4>
                  <ul className="list-disc list-inside pl-4 text-sm text-charcoal-ink/80">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryModal;