import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Heart } from 'lucide-react';
import ItineraryModal from '../components/ItineraryModal';
import { Package } from '../types';
import { packages as packagesData } from '../data';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const navigate = useNavigate();

  // Function to handle navigation to the booking page
  const handleBookNow = (pkg: Package) => {
    // Navigate to the /book route and pass the package details in the state
    navigate('/book', { state: { bookingType: 'Package', item: pkg } });
  };

  return (
    <>
      <div className="min-h-screen pt-20 bg-ivory-sand">
        {/* Header Section */}
        <div className="bg-royal-maroon text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Curated Royal Experiences</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Immerse yourself in the magic of Rajasthan with our bespoke packages,
              designed to showcase the best of heritage, romance, cuisine, and wellness.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {packagesData.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-palace-beige flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-80 lg:h-full object-cover" />
                    <div className="absolute top-6 left-6 bg-antique-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-md flex items-center space-x-2">
                       {IconComponent && <IconComponent className="h-4 w-4" />}
                       <span>{pkg.name.split(' ')[0]} Special</span>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="lg:w-3/5 p-8 flex flex-col">
                    <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-3">{pkg.name}</h2>
                    <div className="flex items-center space-x-6 mb-4 text-sm text-charcoal-ink">
                        <div className="flex items-center space-x-2"><Clock className="h-4 w-4 text-antique-gold" /><span>{pkg.duration}</span></div>
                        <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-antique-gold fill-current" /><span>{pkg.rating} ({pkg.reviews} reviews)</span></div>
                    </div>
                    <p className="text-charcoal-ink/80 mb-6 leading-relaxed text-base">{pkg.description}</p>

                    {/* Benefits Section */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-royal-maroon mb-2 text-lg">Why Choose This Package?</h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {pkg.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-charcoal-ink">
                            <Heart className="h-4 w-4 text-antique-gold flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Buttons */}
                    <div className="mt-auto pt-6 border-t border-palace-beige">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-baseline space-x-3">
                          <span className="text-3xl font-bold text-antique-gold">₹{pkg.price.toLocaleString()}</span>
                          <span className="text-lg text-charcoal-ink/50 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                          <button
                            onClick={() => setSelectedPackage(pkg)}
                            className="flex-1 border border-royal-maroon text-royal-maroon py-3 px-6 rounded-lg hover:bg-royal-maroon hover:text-white transition-colors duration-300 whitespace-nowrap"
                          >
                            View Itinerary
                          </button>
                           {/* Ensure onClick calls handleBookNow with the current package 'pkg' */}
                           <button
                             onClick={() => handleBookNow(pkg)}
                             className="flex-1 bg-royal-maroon text-white py-3 px-6 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 whitespace-nowrap"
                           >
                            Book Now
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Itinerary Modal */}
      <ItineraryModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
    </>
  );
};

export default Packages;