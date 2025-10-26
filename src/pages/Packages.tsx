import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Heart, Utensils, Zap, Palette } from 'lucide-react';
import ItineraryModal from '../components/ItineraryModal';
import { Package } from '../types'; // Assuming Package type is correctly defined in types.ts

// Expanded Package Data (as provided previously)
const packagesData: Package[] = [
    {
      id: 1,
      name: "Royal Heritage Immersion",
      image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
      duration: "3 Days, 2 Nights",
      price: 85000,
      originalPrice: 95000,
      rating: 4.9,
      reviews: 156,
      description: "Step into the regal past. Explore Jaipur's majestic palaces, witness vibrant traditions, and live like royalty in our heritage haven.",
      inclusions: ["Maharaja Suite", "Private Heritage Walk", "Royal Thali Dinner", "Vintage Car City Tour", "Exclusive Museum Access", "All Meals Included"],
      benefits: ["Deep dive into history", "Experience authentic culture", "Unmatched luxury & service", "Perfect for history buffs"],
      itinerary: [
        { day: "Day 1", title: "Arrival & Royal Welcome", activities: ["Traditional welcome ceremony", "Check-in to Maharaja Suite", "Evening palace sound & light show", "Royal Thali dinner"] },
        { day: "Day 2", title: "Jaipur Heritage Exploration", activities: ["Breakfast", "Vintage car tour of Pink City (Hawa Mahal, City Palace)", "Private historian-led walk", "Lunch at a traditional haveli", "Exclusive Amber Fort museum access", "Evening folk music and dance performance"] },
        { day: "Day 3", title: "Artisan Crafts & Departure", activities: ["Breakfast", "Visit local artisan workshops (blue pottery, block printing)", "Check-out"] }
      ],
      icon: Palette
    },
    {
      id: 2,
      name: "Raj Romance & Elegance",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      duration: "4 Days, 3 Nights",
      price: 125000,
      originalPrice: 140000,
      rating: 4.8,
      reviews: 89,
      description: "Rekindle romance amidst colonial charm and royal grandeur. Enjoy intimate dinners, spa indulgence, and timeless moments together.",
      inclusions: ["Colonial Governor Suite", "Private Horse Riding", "Couples Ayurvedic Spa", "Starlit Dinner", "British High Tea", "Champagne Welcome"],
      benefits: ["Unforgettable romantic escape", "Blend of luxury & heritage", "Personalized intimate experiences", "Ideal for couples, anniversaries"],
      itinerary: [
        { day: "Day 1", title: "Arrival & Intimate Evening", activities: ["Champagne welcome", "Check-in to decorated suite", "Private candlelit dinner in a palace alcove"] },
        { day: "Day 2", title: "Colonial Charm", activities: ["Leisurely breakfast", "Private horse riding session", "Relaxing couples spa treatment", "Traditional British High Tea service"] },
        { day: "Day 3", title: "Royal Moments", activities: ["Breakfast", "Explore palace gardens with a picnic basket", "Optional couples photoshoot", "Romantic dinner under the stars with live sitar music"] },
        { day: "Day 4", title: "Farewell Embrace", activities: ["Final breakfast at leisure", "Check-out"] }
      ],
      icon: Heart
    },
    {
      id: 3,
      name: "Rajasthani Culinary Journey",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      duration: "3 Days, 2 Nights",
      price: 75000,
      originalPrice: 85000,
      rating: 4.7,
      reviews: 65,
      description: "Embark on a flavorful adventure through Rajasthan's royal kitchens. Learn traditional recipes, savor authentic dishes, and dine like Maharajas.",
      inclusions: ["Heritage Palace Room", "Interactive Cooking Class", "Spice Market Tour", "Multiple Royal Feasts", "Local Food Walk", "All Meals Included"],
      benefits: ["Master Rajasthani cooking secrets", "Taste authentic, rare dishes", "Explore local food culture", "Perfect for food lovers"],
      itinerary: [
        { day: "Day 1", title: "Arrival & Spice Trail", activities: ["Welcome drink", "Check-in", "Guided tour of a local spice market", "Welcome dinner featuring regional specialties"] },
        { day: "Day 2", title: "Royal Kitchen Secrets", activities: ["Breakfast", "Hands-on cooking class with palace chefs (Laal Maas, Dal Baati Churma)", "Lunch (dishes prepared)", "Jaipur street food walk", "Elaborate Maharaja Thali dinner"] },
        { day: "Day 3", title: "Sweet Endings & Departure", activities: ["Breakfast featuring Rajasthani sweets", "Visit a traditional sweet shop", "Check-out"] }
      ],
      icon: Utensils
    },
    {
      id: 4,
      name: "Wellness & Ayurvedic Retreat",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      duration: "5 Days, 4 Nights",
      price: 110000,
      originalPrice: 125000,
      rating: 4.9,
      reviews: 112,
      description: "Harmonize your body and soul with ancient Ayurvedic wisdom. Experience personalized treatments, yoga, and meditation in serene palace surroundings.",
      inclusions: ["Heritage Deluxe Room", "Ayurvedic Consultation", "Daily Spa Treatments (Abhyanga, Shirodhara)", "Private Yoga & Meditation", "Wellness Cuisine", "All Meals Included"],
      benefits: ["Complete mind-body rejuvenation", "Personalized wellness plan", "Learn ancient relaxation techniques", "Ideal for stress relief & detox"],
      itinerary: [
        { day: "Day 1", title: "Arrival & Consultation", activities: ["Wellness welcome drink", "Check-in", "Consultation with Ayurvedic doctor", "Relaxing evening massage"] },
        { day: "Day 2", title: "Detox & Balance", activities: ["Morning Yoga", "Ayurvedic breakfast", "Prescribed spa treatment (e.g., Abhyanga)", "Wellness lunch", "Meditation session", "Light dinner"] },
        { day: "Day 3", title: "Rejuvenation", activities: ["Sunrise Meditation", "Yoga session", "Ayurvedic breakfast", "Prescribed spa treatment (e.g., Shirodhara)", "Wellness lunch", "Leisure time/Palace exploration", "Light dinner"] },
        { day: "Day 4", title: "Inner Harmony", activities: ["Morning Yoga", "Ayurvedic breakfast", "Final spa treatment", "Wellness lunch", "Guided relaxation session", "Farewell wellness dinner"] },
        { day: "Day 5", title: "Mindful Departure", activities: ["Final Yoga & Meditation", "Ayurvedic breakfast", "Check-out"] }
      ],
      icon: Zap
    }
];

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