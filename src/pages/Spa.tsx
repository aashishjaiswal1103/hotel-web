import { useNavigate } from 'react-router-dom';
import { SpaService, ActivityItem } from '../types';
import { Heart, Wind, Zap, Palette, Smile, Car, Sun } from 'lucide-react'; // Import relevant icons


const activitiesData: ActivityItem[] = [
    // Wellness & Spa
    {
        id: 1,
        name: 'Maharaja Abhyanga Massage',
        price: 8500,
        description: 'Indulge in a traditional full-body massage using warm, herb-infused oils to deeply relax muscles and nourish the skin.',
        image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg', // Spa image
        category: 'Wellness',
        icon: Heart
    },
    {
        id: 2,
        name: 'Shirodhara Therapy',
        price: 6500,
        description: 'Experience profound tranquility as a continuous stream of warm oil flows gently over your forehead, calming the mind.',
        image: 'https://images.pexels.com/photos/4041133/pexels-photo-4041133.jpeg', // Shirodhara-like image
        category: 'Wellness',
        icon: Wind
    },
    {
        id: 3,
        name: 'Sunrise Yoga & Meditation',
        price: 2500,
        description: 'Greet the dawn with revitalizing yoga and guided meditation sessions held in our serene heritage gardens.',
        image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg', // Yoga image
        category: 'Wellness',
        icon: Zap
    },
    // Cultural Experiences
    {
        id: 4,
        name: 'Block Printing Workshop',
        price: 3500,
        description: 'Discover the traditional Rajasthani art of block printing. Create your own masterpiece to take home as a souvenir.',
        image: 'https://images.pexels.com/photos/7144085/pexels-photo-7144085.jpeg', // Block printing image
        category: 'Cultural',
        icon: Palette
    },
    {
        id: 5,
        name: 'Kathputli Puppet Show',
        price: 1500, // Price per person, maybe group booking
        description: 'Be enchanted by a vibrant traditional Rajasthani puppet show, telling tales of folklore and royalty (Evening only).',
        image: 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg', // Puppet image
        category: 'Cultural',
        icon: Smile
    },
     {
        id: 6,
        name: 'Heritage Palace Walk',
        price: 2000,
        description: 'Join our historian for a guided walk through the palace, uncovering hidden stories and architectural marvels.',
        image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg', // Palace architecture image
        category: 'Cultural',
        icon: Palette // Reusing icon, consider Compass or BookOpen
    },
    // Leisure & Recreation
    {
        id: 7,
        name: 'Vintage Car Ride',
        price: 7000, // Price per ride/hour
        description: 'Experience the charm of Jaipur like royalty with a chauffeur-driven ride in one of our classic vintage cars.',
        image: 'https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg', // Vintage car image
        category: 'Leisure',
        icon: Car
    },
    {
        id: 8,
        name: 'Garden Croquet & High Tea',
        price: 4000, // Price per couple/group
        description: 'Enjoy a leisurely afternoon playing the classic game of croquet on our lawns, followed by traditional British High Tea.',
        image: 'https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg', // High tea image
        category: 'Leisure',
        icon: Sun // Represents outdoor leisure
    },

];

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
                          <p className="text-charcoal-ink/75 text-sm mb-4 flex-grow">{activity.description}</p>
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