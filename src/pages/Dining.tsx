import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiningVenue } from '../types';
import MenuModal from '../components/MenuModal';
import { Utensils, Coffee, Martini } from 'lucide-react'; // Import icons

const venuesData: DiningVenue[] = [
    {
        id: 1,
        name: "Maharaja's Table",
        image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
        description: "Experience the grandeur of royal Rajasthani dining. Authentic thalis and curated regional specialties.",
        icon: Utensils // Add icon
    },
    {
        id: 2,
        name: "Colonial Club",
        image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
        description: "Classic British fare and continental cuisine in an elegant, colonial-era setting. Perfect for high tea.",
        icon: Martini // Add icon
    },
    {
        id: 3,
        name: "The Courtyard Cafe",
        image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg", // Example cafe image
        description: "Relaxed all-day dining by the serene palace courtyard. Offers light meals, snacks, and beverages.",
        icon: Coffee // Add icon
    },
    {
        id: 4,
        name: "Polo Bar",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg", // Example bar image
        description: "Sophisticated bar adorned with polo memorabilia. Serving classic cocktails, fine spirits, and light bites.",
        icon: Martini // Add icon
    },
];

const Dining = () => {
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);
  const navigate = useNavigate();

  const handleReserve = (venue: DiningVenue) => {
    // Navigate to booking, pass venue details
    navigate('/book', { state: { bookingType: 'Dining', item: venue } });
  };

  return (
    <>
      <div className="min-h-screen pt-20 bg-ivory-sand">
        {/* Header Section */}
        <div className="bg-royal-maroon text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <Utensils className="h-16 w-16 text-antique-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Royal Dining Experiences</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Indulge your palate with exquisite flavors, from authentic Rajasthani feasts to elegant colonial high tea.
            </p>
          </div>
        </div>

        {/* Venues Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Adjusted gap */}
              {venuesData.map((venue) => {
                const IconComponent = venue.icon; // Get icon component
                return (
                 <div key={venue.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-palace-beige flex flex-col">
                  <img src={venue.image} alt={venue.name} className="w-full h-56 object-cover" /> {/* Increased image height */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                       {IconComponent && <IconComponent className="h-6 w-6 text-antique-gold" />}
                       <h3 className="font-serif text-2xl font-bold text-royal-maroon">{venue.name}</h3>
                    </div>
                    <p className="text-charcoal-ink/75 text-base mb-5 flex-grow">{venue.description}</p> {/* Slightly adjusted text color/size */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto"> {/* Use mt-auto to push buttons down */}
                      <button
                         onClick={() => handleReserve(venue)}
                         className="flex-1 bg-royal-maroon text-white py-3 px-5 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 font-medium" // Adjusted padding/font
                      >
                         Reserve Table
                      </button>
                      <button
                         onClick={() => setSelectedVenue(venue)}
                         className="flex-1 border border-palace-beige text-charcoal-ink py-3 px-5 rounded-lg hover:bg-palace-beige transition-colors duration-300 font-medium" // Adjusted padding/font
                      >
                         View Menu
                       </button>
                    </div>
                  </div>
                 </div>
                );
               })}
            </div>
          </div>
        </section>
      </div>
      {/* Menu Modal */}
      <MenuModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </>
  );
};

export default Dining;