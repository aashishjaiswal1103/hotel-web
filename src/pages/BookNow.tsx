import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tag, Crown, Calendar, Clock, Users, ShieldCheck, CreditCard } from 'lucide-react';
import { BookingDetails, BookingItem } from '../types';
import { rooms, packages, diningVenues, spaActivities } from '../data';

const BookNow: FC = () => {
    const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
        bookingType: '',
        item: null,
        date: '',
        time: '19:00',
        guests: 2,
        name: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        // Check if location.state exists and has the expected structure
        if (location.state && typeof location.state === 'object') {
            const { bookingType, item } = location.state as { bookingType: BookingDetails['bookingType'], item: BookingItem | null };

            // Validate that bookingType is a non-empty string and item is a valid object with at least a 'name' property
            if (bookingType && typeof bookingType === 'string' && item && typeof item === 'object' && 'name' in item) {
                setBookingDetails(prev => ({
                    ...prev,
                    bookingType,
                    item,
                    guests: (item && 'capacity' in item && typeof item.capacity === 'number') ? Math.min(item.capacity, 2) : 2,
                    time: bookingType === 'Dining' ? '19:00' : '',
                    date: location.state.date || '',
                }));
                setIsLoading(false);
            } else {
                // If state structure is invalid, fallback to Royal Maharaja Suite instead of blocking error
                setBookingDetails(prev => ({
                    ...prev,
                    bookingType: 'Room',
                    item: rooms[0],
                    guests: 2,
                    time: '',
                    date: '',
                }));
                setIsLoading(false);
            }
        } else {
            // Default setup when clicked directly from navbar
            setBookingDetails(prev => ({
                ...prev,
                bookingType: 'Room',
                item: rooms[0],
                guests: 2,
                time: '',
                date: '',
            }));
            setIsLoading(false);
        }
    }, [location.state]);

    const getOptionsForType = (type: BookingDetails['bookingType']) => {
        switch (type) {
            case 'Room':
                return rooms;
            case 'Package':
                return packages;
            case 'Dining':
                return diningVenues;
            case 'Spa':
                return spaActivities.filter(a => a.category === 'Wellness');
            case 'Activity':
                return spaActivities.filter(a => a.category !== 'Wellness');
            default:
                return [];
        }
    };

    const handleBookingTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value as BookingDetails['bookingType'];
        const options = getOptionsForType(newType);
        const firstItem = options[0] || null;
        
        setError(null);
        setBookingDetails(prev => ({
            ...prev,
            bookingType: newType,
            item: firstItem,
            guests: (firstItem && 'capacity' in firstItem && typeof firstItem.capacity === 'number') ? Math.min(firstItem.capacity, 2) : 2,
            time: newType === 'Dining' ? '19:00' : '',
        }));
    };

    const handleItemChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedName = e.target.value;
        const options = getOptionsForType(bookingDetails.bookingType);
        const selectedItem = options.find(item => item.name === selectedName) || null;

        setError(null);
        setBookingDetails(prev => ({
            ...prev,
            item: selectedItem,
            guests: (selectedItem && 'capacity' in selectedItem && typeof selectedItem.capacity === 'number') ? Math.min(selectedItem.capacity, 2) : 2,
        }));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setError(null);
        setBookingDetails(prev => ({
            ...prev,
            [name]: name === 'guests' ? parseInt(value, 10) || 1 : value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        // Simple validation check - ensure required fields are filled
        if (!bookingDetails.item || !bookingDetails.date || !bookingDetails.name || !bookingDetails.email || !bookingDetails.phone || !bookingDetails.cardNumber || !bookingDetails.expiryDate || !bookingDetails.cvv) {
           setError("Please fill in all required fields marked with *.");
           return;
        }

        navigate('/confirmation', { state: { bookingDetails } });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen pt-40 flex flex-col items-center justify-center bg-ivory-sand">
                <Crown className="h-12 w-12 text-antique-gold animate-spin mb-4" />
                <span className="font-serif text-xl text-royal-maroon">Preparing concierge services...</span>
            </div>
        );
    }

    const currentOptions = getOptionsForType(bookingDetails.bookingType);
    const selectedItem = bookingDetails.item;

    return (
        <div className="min-h-screen pt-28 pb-16 bg-ivory-sand">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Intro Headers */}
                <div className="text-center mb-10">
                    <Crown className="h-10 w-10 text-antique-gold mx-auto mb-3" />
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-2">Palace Reservations</h1>
                    <p className="text-charcoal-ink/75 max-w-xl mx-auto text-sm tracking-wider uppercase">
                        Book your luxurious stay, dining table, or wellness therapy
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Booking Form Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-3xl shadow-luxury-gold p-8 border border-palace-beige/50">
                            
                            {/* Dynamic Booking Selectors */}
                            <div className="border-b border-palace-beige pb-6 mb-6">
                                <h2 className="font-serif text-xl font-bold text-royal-maroon mb-4">Choose Your Experience</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="bookingType" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Reservation Category</label>
                                        <select
                                            id="bookingType"
                                            value={bookingDetails.bookingType}
                                            onChange={handleBookingTypeChange}
                                            className="w-full px-4 py-3 bg-ivory-sand/40 border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-charcoal-ink font-medium"
                                        >
                                            <option value="Room">Room & Suite</option>
                                            <option value="Package">Special Package</option>
                                            <option value="Dining">Dining Table</option>
                                            <option value="Spa">Spa & Wellness</option>
                                            <option value="Activity">Cultural & Leisure Activities</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="selectOption" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Select Venue / Package</label>
                                        <select
                                            id="selectOption"
                                            value={selectedItem ? selectedItem.name : ''}
                                            onChange={handleItemChange}
                                            className="w-full px-4 py-3 bg-ivory-sand/40 border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-charcoal-ink font-medium"
                                        >
                                            {currentOptions.map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="font-serif text-lg font-bold text-royal-maroon mb-4">Reservation Schedule</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Select Date *</label>
                                        <input 
                                            id="date" 
                                            type="date" 
                                            name="date" 
                                            value={bookingDetails.date} 
                                            onChange={handleInputChange} 
                                            className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-charcoal-ink" 
                                            required 
                                        />
                                    </div>

                                    {bookingDetails.bookingType === 'Dining' && (
                                        <div>
                                            <label htmlFor="time" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Reservation Time *</label>
                                            <input 
                                                id="time" 
                                                type="time" 
                                                name="time" 
                                                value={bookingDetails.time} 
                                                onChange={handleInputChange} 
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-charcoal-ink" 
                                                required 
                                            />
                                        </div>
                                    )}

                                    {bookingDetails.bookingType !== 'Spa' && (
                                        <div>
                                            <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Number of Guests *</label>
                                            <input
                                                id="guests"
                                                type="number"
                                                name="guests"
                                                min="1"
                                                max={selectedItem && 'capacity' in selectedItem ? (selectedItem as any).capacity : undefined}
                                                value={bookingDetails.guests}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-charcoal-ink" 
                                                required
                                            />
                                            {selectedItem && 'capacity' in selectedItem && (
                                                <p className="text-[10px] text-charcoal-ink/50 mt-1 uppercase tracking-wider">Maximum Room Capacity: {(selectedItem as any).capacity} Guests</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <h3 className="font-serif text-lg font-bold text-royal-maroon pt-6 border-t border-palace-beige/50">Guest Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Full Guest Name *</label>
                                        <input 
                                            id="name" 
                                            type="text" 
                                            name="name" 
                                            placeholder="Enter lead guest full name" 
                                            value={bookingDetails.name} 
                                            onChange={handleInputChange} 
                                            className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold" 
                                            required 
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Email Address *</label>
                                            <input 
                                                id="email" 
                                                type="email" 
                                                name="email" 
                                                placeholder="guest@example.com" 
                                                value={bookingDetails.email} 
                                                onChange={handleInputChange} 
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Phone Number *</label>
                                            <input 
                                                id="phone" 
                                                type="tel" 
                                                name="phone" 
                                                placeholder="+91 XXXXX XXXXX" 
                                                value={bookingDetails.phone} 
                                                onChange={handleInputChange} 
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-serif text-lg font-bold text-royal-maroon pt-6 border-t border-palace-beige/50 flex items-center space-x-2">
                                    <CreditCard className="h-5 w-5 text-antique-gold" />
                                    <span>Guarantee Payment (Mock)</span>
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Card Number *</label>
                                        <input 
                                            id="cardNumber" 
                                            type="text" 
                                            name="cardNumber" 
                                            placeholder="4111 2222 3333 4444" 
                                            value={bookingDetails.cardNumber} 
                                            onChange={handleInputChange} 
                                            className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold" 
                                            required 
                                            pattern="\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}" 
                                            title="Enter a 16-digit card number"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">Expiry Date *</label>
                                            <input 
                                                id="expiryDate" 
                                                type="text" 
                                                name="expiryDate" 
                                                placeholder="MM/YY" 
                                                value={bookingDetails.expiryDate} 
                                                onChange={handleInputChange} 
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold" 
                                                required 
                                                pattern="(0[1-9]|1[0-2])\/\d{2}" 
                                                title="Enter date in MM/YY format"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-ink/70 mb-2">CVV Security Code *</label>
                                            <input 
                                                id="cvv" 
                                                type="password" 
                                                name="cvv" 
                                                placeholder="•••" 
                                                value={bookingDetails.cvv} 
                                                onChange={handleInputChange} 
                                                className="w-full px-4 py-3 bg-white border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold text-center" 
                                                required 
                                                pattern="\d{3,4}" 
                                                title="Enter 3 or 4 digit CVV"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-red-600 text-sm font-medium mt-4 text-center">{error}</p>
                                )}

                                <button 
                                    type="submit" 
                                    className="w-full bg-royal-maroon text-white py-4 mt-8 rounded-xl hover:bg-royal-maroon/95 font-bold transition-all duration-300 text-base uppercase tracking-widest shadow-lg hover:shadow-luxury-hover"
                                >
                                    Confirm Reservation
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Voucher Summary Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-3xl border border-antique-gold/20 shadow-luxury-gold overflow-hidden">
                            
                            {/* Gold header */}
                            <div className="bg-gradient-to-r from-royal-maroon to-royal-maroon/90 p-6 text-white text-center border-b border-antique-gold/20">
                                <Crown className="h-6 w-6 text-antique-gold mx-auto mb-2" />
                                <h3 className="font-serif text-lg font-bold uppercase tracking-wider">Palace Voucher</h3>
                                <p className="text-[10px] text-white/70 uppercase tracking-widest">Raj Heritage Palace Hotel</p>
                            </div>

                            {/* Main Voucher Body */}
                            <div className="p-6 space-y-6">
                                {selectedItem && ('image' in selectedItem ? selectedItem.image : (selectedItem as any).images?.[0]) && (
                                    <img 
                                        src={'image' in selectedItem ? selectedItem.image : (selectedItem as any).images?.[0]} 
                                        alt={selectedItem.name} 
                                        className="w-full h-36 object-cover rounded-xl shadow-md border border-palace-beige/50" 
                                    />
                                )}
                                
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-antique-gold font-bold">
                                        <Tag className="h-4 w-4" />
                                        <span>{bookingDetails.bookingType} Selection</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-royal-maroon leading-snug">
                                        {selectedItem ? selectedItem.name : 'No item selected'}
                                    </h4>
                                    
                                    {selectedItem && 'description' in selectedItem && (
                                        <p className="text-xs text-charcoal-ink/75 leading-relaxed italic pt-2">
                                            "{selectedItem.description}"
                                        </p>
                                    )}
                                </div>

                                {/* Dash Divider */}
                                <div className="border-t-2 border-dashed border-palace-beige/80 my-4 relative">
                                    <div className="absolute -left-8 -top-2.5 h-5 w-5 rounded-full bg-ivory-sand border-r border-antique-gold/15"></div>
                                    <div className="absolute -right-8 -top-2.5 h-5 w-5 rounded-full bg-ivory-sand border-l border-antique-gold/15"></div>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center text-charcoal-ink/70">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-antique-gold" />
                                            <span>Date</span>
                                        </div>
                                        <span className="font-medium text-charcoal-ink">{bookingDetails.date || 'Not set'}</span>
                                    </div>

                                    {bookingDetails.bookingType === 'Dining' && (
                                        <div className="flex justify-between items-center text-charcoal-ink/70">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="h-4 w-4 text-antique-gold" />
                                                <span>Reservation Time</span>
                                            </div>
                                            <span className="font-medium text-charcoal-ink">{bookingDetails.time || '19:00'}</span>
                                        </div>
                                    )}

                                    {bookingDetails.bookingType !== 'Spa' && (
                                        <div className="flex justify-between items-center text-charcoal-ink/70">
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-antique-gold" />
                                                <span>Total Guests</span>
                                            </div>
                                            <span className="font-medium text-charcoal-ink">{bookingDetails.guests} Guests</span>
                                        </div>
                                    )}

                                    {bookingDetails.bookingType === 'Package' && selectedItem && 'duration' in selectedItem && (
                                        <div className="flex justify-between items-center text-charcoal-ink/70">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="h-4 w-4 text-antique-gold" />
                                                <span>Duration</span>
                                            </div>
                                            <span className="font-medium text-charcoal-ink">{ (selectedItem as any).duration }</span>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-palace-beige/50 pt-4 flex justify-between items-baseline">
                                    <span className="text-xs uppercase tracking-widest text-charcoal-ink/60 font-semibold">Total Price</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-antique-gold">
                                            {selectedItem && 'price' in selectedItem && (selectedItem as any).price > 0 ? (
                                                `₹${(selectedItem as any).price.toLocaleString()}`
                                            ) : (
                                                'Enquire'
                                            )}
                                        </span>
                                        {selectedItem && 'price' in selectedItem && (selectedItem as any).price > 0 && bookingDetails.bookingType === 'Room' && (
                                            <span className="text-[10px] text-charcoal-ink/50 block">per night</span>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-ivory-sand/40 border border-palace-beige/60 p-3 rounded-xl flex items-start space-x-2 text-[10px] text-charcoal-ink/70">
                                    <ShieldCheck className="h-4 w-4 text-antique-gold flex-shrink-0 mt-0.5" />
                                    <p>Your transaction is fully encrypted and guaranteed by the Raj Heritage Concierge Desk.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookNow;