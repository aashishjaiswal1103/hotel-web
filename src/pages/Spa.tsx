import { useNavigate, Link } from 'react-router-dom';
import { ActivityItem } from '../types';
import { Zap } from 'lucide-react';
import { spaActivities as activitiesData } from '../data';

// Helper to group activities by category
const groupActivitiesByCategory = (activities: ActivityItem[]) => {
  return activities.reduce((acc, activity) => {
    (acc[activity.category] = acc[activity.category] || []).push(activity);
    return acc;
  }, {} as Record<ActivityItem['category'], ActivityItem[]>);
};


const Spa = () => {
  const navigate = useNavigate();

  const handleBookNow = (activity: ActivityItem) => {
    // Determine booking type based on category or specific item if needed
    const bookingType = activity.category === 'Wellness' ? 'Spa' : 'Activity'; // Example logic
    navigate('/book', { state: { bookingType: bookingType, item: activity } });
  };

  const groupedActivities = groupActivitiesByCategory(activitiesData);
  const categoryOrder: ActivityItem['category'][] = ['Wellness', 'Cultural', 'Leisure']; // Define display order

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Header Section */}
      <div className="bg-royal-maroon text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Zap className="h-16 w-16 text-antique-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Royal Rejuvenation & Recreation</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Revitalize your senses with our serene spa therapies, engaging cultural workshops, and delightful leisure activities.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Loop through categories in defined order */}
          {categoryOrder.map((category) => (
             groupedActivities[category] && ( // Check if category exists
              <div key={category}>
                <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-8 text-center">{category} Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groupedActivities[category].map((activity) => {
                    const IconComponent = activity.icon;
                    return (
                     <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-palace-beige flex flex-col">
                        <div className="relative">
                           <img src={activity.image} alt={activity.name} className="w-full h-52 object-cover" />
                           <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
                              <IconComponent className="h-6 w-6 text-antique-gold" />
                           </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-serif text-xl font-bold text-royal-maroon mb-2">{activity.name}</h3>
                          <p className="text-charcoal-ink/75 text-sm mb-2">{activity.description}</p>
                          
                          {/* Cross-Linkage to Packages */}
                          {activity.id === 1 && (
                            <p className="text-[10px] text-antique-gold font-semibold tracking-wider uppercase mb-3">
                              <span>👑 Included in: </span>
                              <Link to="/packages" className="underline hover:text-royal-maroon transition-colors">Royal Heritage Immersion</Link>
                            </p>
                          )}
                          {activity.id === 2 && (
                            <p className="text-[10px] text-antique-gold font-semibold tracking-wider uppercase mb-3">
                              <span>👑 Featured in: </span>
                              <Link to="/packages" className="underline hover:text-royal-maroon transition-colors">Raj Romance & Elegance</Link>
                            </p>
                          )}
                          {activity.id === 3 && (
                            <p className="text-[10px] text-antique-gold font-semibold tracking-wider uppercase mb-3">
                              <span>👑 Part of: </span>
                              <Link to="/packages" className="underline hover:text-royal-maroon transition-colors">Wellness & Ayurvedic Retreat</Link>
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-palace-beige">
                            <span className="text-2xl font-bold text-antique-gold">
                                {/* Display price or indication like 'Enquire' */}
                                {activity.price > 0 ? `₹${activity.price.toLocaleString()}` : 'Enquire'}
                            </span>
                            <button
                               onClick={() => handleBookNow(activity)}
                               className="bg-royal-maroon text-white px-5 py-2 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 text-sm font-medium"
                            >
                                {activity.price > 0 ? 'Book Now' : 'Enquire Now'}
                            </button>
                          </div>
                        </div>
                     </div>
                    );
                   })}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default Spa;