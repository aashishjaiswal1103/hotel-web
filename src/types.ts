// project/src/types.ts

// Core interfaces for the application
export interface ItineraryStep {
  day: string;
  title: string;
  activities: string[];
}

export interface Package {
  id: number;
  name: string;
  image: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  description: string;
  inclusions: string[];
  benefits: string[];
  itinerary: ItineraryStep[];
  icon: React.ElementType;
}

export interface DiningVenue {
  id: number;
  name: string;
  image: string;
  description: string;
  icon: React.ElementType;
}

export interface SpaService {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Add EventVenue interface
export interface EventVenue {
  id: number;
  name: string;
  image: string;
  description: string;
  capacity: number;
  area: number;
  features: string[];
  pricePerHour?: number; // Optional price for display
  // Add other relevant venue details if needed
}

// Update BookingItem to include EventVenue and ActivityItem
export type BookingItem = Package | DiningVenue | SpaService | Room | EventVenue | ActivityItem | null;

// Add Room interface if not already present (based on data.ts)
export interface Room {
    id: number;
    name: string;
    category: string;
    images: string[];
    price: number;
    rating: number;
    reviews: number;
    capacity: number;
    size: number;
    description: string;
    longDescription: string;
    amenities: string[];
    highlights: string[];
}


// Update BookingDetails
export interface BookingDetails {
  bookingType: 'Package' | 'Dining' | 'Spa' | 'Room' | 'EventVenue' | 'Activity' | ''; // Added EventVenue and Activity
  item: BookingItem;
  date: string; // Keep date generic
  time: string; // Relevant mainly for Dining
  guests: number; // Relevant for most types
  name: string;
  email: string;
  phone: string;
  // Payment details (keep as mock)
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  // Add event specific fields if needed later, e.g., eventDuration, specificRequirements
}

// Ensure ActivityItem is defined or extend SpaService as needed
// (using the definition from the previous Spa.tsx update)
export interface ActivityItem extends SpaService {
  image: string;
  category: 'Wellness' | 'Cultural' | 'Leisure';
  icon: React.ElementType;
}