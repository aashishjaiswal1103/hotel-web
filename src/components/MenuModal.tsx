import React from 'react';
import { X } from 'lucide-react';
import { DiningVenue } from '../types'; // Ensure DiningVenue type includes necessary fields if needed

interface MenuModalProps {
    venue: DiningVenue | null;
    onClose: () => void;
}

// Categorized Menu Items
const menuData = {
  // Example Menu (You can customize this per venue if needed)
  starters: [
    { name: 'Hara Bhara Kebab', price: 750, description: 'Spinach and green pea patties, spiced and shallow-fried' },
    { name: 'Murgh Malai Tikka', price: 950, description: 'Creamy chicken tikka marinated in cheese and cardamom' },
    { name: 'Raj Kachori', price: 650, description: 'Large crispy shell filled with potatoes, sprouts, yogurt, and chutneys' },
    { name: 'Prawn Balchao Skewers', price: 1100, description: 'Goan-style spicy and tangy prawn skewers' },
  ],
  rajasthaniSpecialties: [
    { name: 'Laal Maas', price: 2850, description: 'Fiery traditional Rajasthani mutton curry with Mathania chilies' },
    { name: 'Dal Baati Churma', price: 1650, description: 'Classic trio: baked dough balls, spicy lentils, and sweet crumbled bread' },
    { name: 'Gatte ki Sabzi', price: 1450, description: 'Gram flour dumplings simmered in a tangy yogurt-based gravy' },
    { name: 'Ker Sangri', price: 1550, description: 'A unique Rajasthani desert vegetable preparation with berries and beans' },
  ],
  mainCourse: [
    { name: 'Butter Chicken (Murgh Makhani)', price: 1950, description: 'Tandoori chicken simmered in a rich tomato and butter gravy' },
    { name: 'Paneer Lababdar', price: 1550, description: 'Cottage cheese cubes in a creamy, tangy tomato-onion gravy' },
    { name: 'Goan Fish Curry', price: 2100, description: 'Tangy fish curry cooked in coconut milk with traditional Goan spices' },
    { name: 'Shepherds Pie', price: 1850, description: 'Classic British dish with minced lamb topped with mashed potatoes' },
    { name: 'Vegetable Biryani', price: 1400, description: 'Aromatic basmati rice cooked with mixed vegetables and spices' },
  ],
  britishClassics: [
     { name: 'Fish and Chips', price: 1900, description: 'Beer-battered fish served with thick-cut chips and tartar sauce' },
     { name: 'British High Tea Platter', price: 2500, description: 'Assortment of scones, finger sandwiches, pastries, and premium teas' },
  ],
  desserts: [
    { name: 'Ghevar', price: 650, description: 'Traditional Rajasthani disc-shaped honeycomb dessert, soaked in syrup' },
    { name: 'Moong Dal Halwa', price: 550, description: 'Rich lentil pudding cooked in ghee and flavored with cardamom' },
    { name: 'Sticky Toffee Pudding', price: 700, description: 'Classic British date sponge cake with toffee sauce' },
    { name: 'Kulfi Falooda', price: 600, description: 'Indian ice cream served with vermicelli noodles and rose syrup' },
  ],
  beverages: [
    { name: 'Masala Chai', price: 350, description: 'Traditional Indian spiced tea' },
    { name: 'Fresh Lime Soda', price: 300, description: 'Sweet or Salty' },
    { name: 'Selection of Wines', price: 800, description: 'Per glass (Ask for list)' },
    { name: 'Signature Cocktails', price: 950, description: 'Ask your server for our specials' },
  ]
};

// Helper function to format category titles
const formatCategoryTitle = (key: string) => {
  // Example: 'rajasthaniSpecialties' becomes 'Rajasthani Specialties'
  const spaced = key.replace(/([A-Z])/g, ' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};


const MenuModal: React.FC<MenuModalProps> = ({ venue, onClose }) => {
  if (!venue) return null;

  // In a real app, you might fetch or select a menu based on the 'venue.id' or 'venue.name'
  // For now, we use the common 'menuData' for all venues.
  const currentMenu = menuData;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"> {/* Added backdrop blur */}
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[85vh] flex flex-col"> {/* Adjusted max-h, added flex */}

        {/* Header */}
        <div className="p-6 border-b border-palace-beige flex justify-between items-center sticky top-0 bg-white z-10">
            <h2 className="font-serif text-3xl font-bold text-royal-maroon">{venue.name} - Menu</h2> {/* Increased size */}
            <button onClick={onClose} className="p-2 rounded-full hover:bg-palace-beige transition-colors duration-200">
                <X className="h-6 w-6 text-charcoal-ink" /> {/* Increased size */}
            </button>
        </div>

        {/* Menu Content - Scrollable */}
        <div className="p-6 overflow-y-auto flex-grow"> {/* Added flex-grow */}
            {Object.entries(currentMenu).map(([categoryKey, items]) => (
                <div key={categoryKey} className="mb-8"> {/* Added margin bottom */}
                    <h3 className="font-serif text-2xl font-semibold text-antique-gold mb-4 border-b border-palace-beige pb-2">{formatCategoryTitle(categoryKey)}</h3>
                    <div className="space-y-5"> {/* Increased spacing */}
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-between items-start gap-4"> {/* Added gap */}
                                <div className="flex-1"> {/* Allow text to wrap */}
                                    <h4 className="font-bold text-lg text-charcoal-ink">{item.name}</h4> {/* Increased size */}
                                    <p className="text-sm text-charcoal-ink/70 mt-1">{item.description}</p>
                                </div>
                                <span className="font-bold text-lg text-antique-gold whitespace-nowrap pt-1">₹{item.price}</span> {/* Increased size, added padding */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default MenuModal;