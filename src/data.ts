import { 
  Palette, Heart, Utensils, Zap, Martini, Coffee, Smile, Car, Sun, Wind 
} from 'lucide-react';
import { Room, Package, DiningVenue, ActivityItem } from './types';

export const rooms: Room[] = [
  {
    id: 1,
    name: "Royal Maharaja Suite",
    category: "suite",
    images: [
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg"
    ],
    price: 45000,
    rating: 4.9,
    reviews: 128,
    capacity: 4,
    size: 850,
    description: "The pinnacle of luxury with panoramic palace views, private butler service, and exquisite antique furnishings.",
    longDescription: "The Royal Maharaja Suite represents the pinnacle of luxury accommodation at Raj Heritage. Originally designed for visiting dignitaries, this suite features hand-carved furniture, silk tapestries, and marble inlay work. The expansive living area, master bedroom, and private terrace offer unparalleled comfort and breathtaking views of the heritage gardens and palace.",
    amenities: ["Butler Service", "Palace View", "Private Garden", "Antique Furniture", "Marble Bathroom", "Wi-Fi", "Mini Bar", "Air Conditioning", "Safe", "Tea Service"],
    highlights: [
      "Originally designed for visiting royalty",
      "Features 18th-century antique furnishings",
      "Private entrance with carved doorway",
      "Handwoven silk carpets and tapestries"
    ]
  },
  {
    id: 2,
    name: "Heritage Palace Room",
    category: "deluxe",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
    ],
    price: 25000,
    rating: 4.7,
    reviews: 94,
    capacity: 2,
    size: 450,
    description: "Elegantly appointed room with traditional Rajasthani decor and modern comforts for the discerning traveler.",
    longDescription: "This elegantly appointed room features traditional Rajasthani decor and modern comforts. Enjoy views of the serene courtyard, antique furnishings, and a luxurious marble bathroom. The room is a perfect blend of historical charm and contemporary convenience, providing a peaceful sanctuary for your stay.",
    amenities: ["Courtyard View", "Traditional Decor", "Marble Bathroom", "Wi-Fi", "Tea Service", "Air Conditioning", "Mini Bar", "Safe"],
    highlights: [
      "Hand-painted frescoes",
      "Four-poster bed",
      "Views of the central courtyard"
    ]
  },
  {
    id: 3,
    name: "Colonial Governor Suite",
    category: "suite",
    images: [
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg"
    ],
    price: 35000,
    rating: 4.8,
    reviews: 76,
    capacity: 3,
    size: 650,
    description: "British colonial elegance meets Indian luxury in this sophisticated suite with private study and tea service.",
    longDescription: "Step into an era of refined elegance. The Colonial Governor Suite pays homage to the British Raj with its dark wood furniture, leather armchairs, and a private study. The suite offers a separate living area and a spacious bedroom with views of the heritage gardens, complemented by our signature afternoon tea service.",
    amenities: ["Study Room", "British Decor", "Tea Service", "Garden View", "Wi-Fi", "Mini Bar", "Air Conditioning", "Marble Bathroom", "Safe"],
    highlights: [
      "Features authentic British colonial decor",
      "Private study with writing desk",
      "Signature afternoon tea service",
      "Views of the heritage gardens"
    ]
  },
  {
    id: 4,
    name: "Royal Family Room",
    category: "family",
    images: [
      "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
    ],
    price: 38000,
    rating: 4.6,
    reviews: 52,
    capacity: 6,
    size: 750,
    description: "Spacious family accommodation with connecting rooms and child-friendly amenities in royal surroundings.",
    longDescription: "Create lasting memories with your family in this spacious accommodation. Featuring two connecting rooms, this setup provides both privacy for parents and a comfortable space for children. The room is equipped with child-friendly amenities and offers ample space for the whole family to relax after a day of exploration.",
    amenities: ["Connecting Rooms", "Family Friendly", "Large Bathroom", "Wi-Fi", "Kids Amenities", "Air Conditioning", "Mini Bar", "Safe"],
    highlights: [
      "Two interconnecting bedrooms",
      "Child-friendly amenities upon request",
      "Spacious layout for families",
      "Dedicated seating area"
    ]
  },
  {
    id: 5,
    name: "Heritage Deluxe Room",
    category: "deluxe",
    images: [
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
    ],
    price: 20000,
    rating: 4.5,
    reviews: 103,
    capacity: 2,
    size: 380,
    description: "Comfortable accommodation with heritage charm, featuring handcrafted furniture and traditional textiles.",
    longDescription: "Our Heritage Deluxe Room is a celebration of Rajasthani craftsmanship. It features handcrafted furniture, traditional textiles, and hand-painted frescoes. This cozy and comfortable room is perfect for travelers seeking an authentic heritage experience with all modern conveniences.",
    amenities: ["Heritage Decor", "Handcrafted Furniture", "Wi-Fi", "Tea Service", "Air Conditioning", "Mini Bar", "Safe"],
    highlights: [
      "Authentic Rajasthani decor",
      "Handcrafted furniture",
      "Traditional textiles and art",
      "Modern en-suite bathroom"
    ]
  },
  {
    id: 6,
    name: "Luxury Standard Room",
    category: "standard",
    images: [
      "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
    ],
    price: 15000,
    rating: 4.3,
    reviews: 67,
    capacity: 2,
    size: 300,
    description: "Well-appointed standard room with essential amenities and glimpses of royal architecture.",
    longDescription: "Our Luxury Standard Room offers a comfortable and elegant stay. While being our entry-level category, it compromises nothing on luxury and comfort. The room is well-appointed with all essential amenities and features tasteful decor that reflects the heritage of the palace, ensuring a restful and pleasant stay.",
    amenities: ["Modern Amenities", "Comfortable Bedding", "Wi-Fi", "Air Conditioning", "Tea Service", "Safe"],
    highlights: [
      "Comfortable king-size bed",
      "Modern en-suite bathroom",
      "Essential luxury amenities",
      "Glimpses of palace architecture"
    ]
  }
];

export const packages: Package[] = [
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
    inclusions: ["Maharaja Suite Booking", "Private Heritage Walk", "Royal Thali Dinner", "Vintage Car City Tour", "Exclusive Museum Access", "All Meals Included"],
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
    inclusions: ["Colonial Governor Suite Booking", "Private Horse Riding", "Couples Ayurvedic Spa", "Starlit Dinner", "British High Tea", "Champagne Welcome"],
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
    inclusions: ["Heritage Palace Room Booking", "Interactive Cooking Class", "Spice Market Tour", "Multiple Royal Feasts", "Local Food Walk", "All Meals Included"],
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
    inclusions: ["Heritage Deluxe Room Booking", "Ayurvedic Consultation", "Daily Spa Treatments", "Private Yoga & Meditation", "Wellness Cuisine", "All Meals Included"],
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

export const diningVenues: DiningVenue[] = [
  {
    id: 1,
    name: "Maharaja's Table",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    description: "Experience the grandeur of royal Rajasthani dining. Authentic thalis and curated regional specialties.",
    icon: Utensils
  },
  {
    id: 2,
    name: "Colonial Club",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    description: "Classic British fare and continental cuisine in an elegant, colonial-era setting. Perfect for high tea.",
    icon: Martini
  },
  {
    id: 3,
    name: "The Courtyard Cafe",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    description: "Relaxed all-day dining by the serene palace courtyard. Offers light meals, snacks, and beverages.",
    icon: Coffee
  },
  {
    id: 4,
    name: "Polo Bar",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    description: "Sophisticated bar adorned with polo memorabilia. Serving classic cocktails, fine spirits, and light bites.",
    icon: Martini
  }
];

export const spaActivities: ActivityItem[] = [
  {
    id: 1,
    name: 'Maharaja Abhyanga Massage',
    price: 8500,
    description: 'Indulge in a traditional full-body massage using warm, herb-infused oils to deeply relax muscles and nourish the skin.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    category: 'Wellness',
    icon: Heart
  },
  {
    id: 2,
    name: 'Shirodhara Therapy',
    price: 6500,
    description: 'Experience profound tranquility as a continuous stream of warm oil flows gently over your forehead, calming the mind.',
    image: 'https://images.pexels.com/photos/4041133/pexels-photo-4041133.jpeg',
    category: 'Wellness',
    icon: Wind
  },
  {
    id: 3,
    name: 'Sunrise Yoga & Meditation',
    price: 2500,
    description: 'Greet the dawn with revitalizing yoga and guided meditation sessions held in our serene heritage gardens.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    category: 'Wellness',
    icon: Zap
  },
  {
    id: 4,
    name: 'Block Printing Workshop',
    price: 3500,
    description: 'Discover the traditional Rajasthani art of block printing. Create your own masterpiece to take home as a souvenir.',
    image: 'https://images.pexels.com/photos/7144085/pexels-photo-7144085.jpeg',
    category: 'Cultural',
    icon: Palette
  },
  {
    id: 5,
    name: 'Kathputli Puppet Show',
    price: 1500,
    description: 'Be enchanted by a vibrant traditional Rajasthani puppet show, telling tales of folklore and royalty (Evening only).',
    image: 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg',
    category: 'Cultural',
    icon: Smile
  },
  {
    id: 6,
    name: 'Heritage Palace Walk',
    price: 2000,
    description: 'Join our historian for a guided walk through the palace, uncovering hidden stories and architectural marvels.',
    image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg',
    category: 'Cultural',
    icon: Palette
  },
  {
    id: 7,
    name: 'Vintage Car Ride',
    price: 7000,
    description: 'Experience the charm of Jaipur like royalty with a chauffeur-driven ride in one of our classic vintage cars.',
    image: 'https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg',
    category: 'Leisure',
    icon: Car
  },
  {
    id: 8,
    name: 'Garden Croquet & High Tea',
    price: 4000,
    description: 'Enjoy a leisurely afternoon playing the classic game of croquet on our lawns, followed by traditional British High Tea.',
    image: 'https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg',
    category: 'Leisure',
    icon: Sun
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Royal Legacy of Jaipur's Pink City",
    excerpt: "Discover the fascinating history behind Jaipur's iconic pink architecture and its significance in Rajasthani culture.",
    content: "<p>Discover the fascinating history behind Jaipur's iconic pink architecture and its significance in Rajasthani culture. The city was painted pink in 1876 to welcome the Prince of Wales, and the tradition has continued ever since.</p><p>The Hawa Mahal, City Palace, and other monuments are stunning examples of this unique architectural style. Explore the Johari Bazaar for vibrant gemstones, and witness the blend of Mughal and Rajput architecture at the City Palace complex. Don't miss the astronomical wonders at Jantar Mantar.</p>",
    image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
    category: "heritage",
    author: "Dr. Priya Sharma",
    date: "October 15, 2025",
    readTime: "8 min read",
    tags: ["History", "Architecture", "Jaipur", "Pink City"]
  },
  {
    id: 2,
    title: "A Culinary Journey Through Royal Rajasthani Cuisine",
    excerpt: "Explore the rich flavors and traditional cooking methods that have been passed down through generations of royal chefs.",
    content: "<p>Rajasthani cuisine is known for its rich flavors and unique cooking techniques, shaped by the region's arid climate and martial history. Dishes like <strong>Laal Maas</strong> (fiery mutton curry) and <strong>Dal Baati Churma</strong> (lentils with baked dough balls and sweet crumble) are staples.</p><p>Learn about the use of local ingredients like Ker Sangri and the influence of royal kitchens (khansamas) on modern gastronomy. Our chefs preserve these age-old recipes, offering an authentic taste of royalty.</p>",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "dining",
    author: "Chef Vikram Singh",
    date: "October 12, 2025",
    readTime: "6 min read",
    tags: ["Food", "Culture", "Recipes", "Rajasthan"]
  },
  {
    id: 3,
    title: "The Art of Ayurvedic Wellness in Palace Settings",
    excerpt: "Learn about ancient healing practices and how they're being preserved and practiced in modern luxury hotels.",
    content: "<p>Ayurveda, the ancient Indian science of life, offers holistic healing for mind, body, and spirit. At Raj Heritage, we integrate these principles into our spa offerings.</p><p>Discover treatments like <strong>Abhyanga</strong> (warm oil massage) and <strong>Shirodhara</strong> (oil stream on the forehead) designed to balance your doshas (body energies). Learn how the serene palace environment enhances the healing process, promoting deep relaxation and rejuvenation.</p>",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    category: "wellness",
    author: "Dr. Anjali Mehta",
    date: "October 10, 2025",
    readTime: "10 min read",
    tags: ["Ayurveda", "Wellness", "Spa", "Holistic Health"]
  },
  {
    id: 4,
    title: "Planning the Perfect Heritage Wedding in Rajasthan",
    excerpt: "Everything you need to know about hosting a royal wedding celebration in the palaces of Rajasthan.",
    content: "<p>A wedding in Rajasthan is more than an event; it's a fairytale. Imagine exchanging vows against the backdrop of a majestic palace like Raj Heritage.</p> <p>This guide covers choosing the right venue (like our Durbar Hall or Garden Pavilion), planning traditional ceremonies (Haldi, Mehendi, Sangeet), incorporating royal elements (vintage cars, elephant processions), and managing logistics for a seamless, unforgettable celebration.</p>",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    category: "events",
    author: "Meera Rajput",
    date: "October 8, 2025",
    readTime: "12 min read",
    tags: ["Weddings", "Events", "Planning", "Rajasthan", "Palace"]
  },
  {
    id: 5,
    title: "Essential Travel Tips for First-Time Visitors to Rajasthan",
    excerpt: "Make the most of your visit to the Land of Kings with these insider tips and cultural insights.",
    content: "<p>Visiting Rajasthan for the first time? Prepare for a vibrant experience! Pack light cotton clothing for the day and layers for cooler evenings (especially Oct-Mar).</p><p>Stay hydrated, be ready to bargain respectfully in markets, and embrace the chaos and color. Learn a few basic Hindi phrases ('Namaste', 'Dhanyavaad'). Consider hiring local guides for deeper insights into forts and palaces. Remember to respect local customs and dress modestly when visiting religious sites.</p>",
    image: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg",
    category: "travel",
    author: "Rahul Gupta",
    date: "October 5, 2025",
    readTime: "7 min read",
    tags: ["Travel", "Tips", "Rajasthan", "Culture", "India"]
  },
  {
    id: 6,
    title: "The British Raj Influence on Indian Palace Architecture",
    excerpt: "Explore how colonial architecture blended with traditional Indian design to create unique palace styles.",
    content: "<p>The British Raj era saw a fascinating fusion of architectural styles in India. While traditional Rajput and Mughal designs emphasized intricate carvings, courtyards, and jharokhas, the British introduced elements like grand porticos, Corinthian columns, and symmetrical layouts.</p><p>Palaces like Raj Heritage often showcase this blend – perhaps a traditional facade with colonial-style ballrooms or living quarters. This Indo-Saracenic style reflects the complex history of the period.</p>",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    category: "heritage",
    author: "Prof. James Mitchell",
    date: "October 3, 2025",
    readTime: "9 min read",
    tags: ["Architecture", "History", "Colonial", "IndoSaracenic"]
  }
];