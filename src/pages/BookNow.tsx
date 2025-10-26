import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { BookingDetails, BookingItem } from '../types'; // Ensure BookingItem covers all possible item types (Package, Room, Spa, Dining)

const BookNow: FC = () => {
    // Initialize state structure fully
    const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
        bookingType: '',
        item: null, // Initialize item as null
        date: '',
        time: '19:00', // Default time, only relevant for Dining
        guests: 1, // Default guests
        name: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [error, setError] = useState<string | null>(null); // Add error state

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
                    // Set guests based on item capacity if available, default to 1
                    guests: (item && 'capacity' in item && typeof item.capacity === 'number') ? Math.min(item.capacity, 1) : 1,
                    // Keep time default for Dining, clear otherwise
                    time: bookingType === 'Dining' ? prev.time : '',
                    // Pre-fill date if passed (optional)
                    date: location.state.date || '',
                }));
                setIsLoading(false);
            } else {
                // If state structure is invalid
                setError("Booking details are incomplete or invalid. Please select your desired package or service again.");
                setIsLoading(false);
            }
        } else {
            // If no state is passed at all
            setError("No booking selected. Please navigate from a Room, Package, Dining, or Spa page to make a booking.");
            setIsLoading(false);
        }
    // Dependency array includes location.state to re-run when it changes
    }, [location.state]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setError(null); // Clear error on input change
        setBookingDetails(prev => ({
            ...prev,
            // Ensure guests is stored as a number, defaulting to 1 if invalid
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
        // Add more specific validations (email format, card number format, date validity etc.) here if needed

        // If validation passes, navigate to confirmation
        navigate('/confirmation', { state: { bookingDetails } });
    };

    // --- Render Logic ---

    // 1. Loading State
    if (isLoading) {
        return <div className="min-h-screen pt-40 text-center text-xl text-charcoal-ink/80">Loading booking details...</div>;
    }

    // 2. Error State (or item is missing after loading)
    if (error || !bookingDetails.item) {
         return (
            <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center px-4 bg-ivory-sand">
                <h1 className="font-serif text-3xl font-bold text-royal-maroon mb-4">Booking Error</h1>
                <p className="text-lg text-charcoal-ink/70 mb-6 max-w-md">{error || "Could not load booking information. Please try starting the booking process again."}</p>
                <Link to="/" className="bg-royal-maroon text-white px-6 py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300">
                    Back to Home
                </Link>
            </div>
        );
    }

    // 3. Success State - Render Form
    return (
        <div className="min-h-screen pt-20 bg-ivory-sand">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-8 text-center">Confirm Your Booking</h1>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-palace-beige">
                    {/* Booking Summary */}
                    <div className="border-b border-palace-beige pb-6 mb-6">
                        <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-4">Booking Summary</h2>
                        <div className="flex items-start space-x-3 text-lg mb-2">
                            <Tag className="h-5 w-5 text-antique-gold flex-shrink-0 mt-1" />
                            <span className="font-semibold text-charcoal-ink">{bookingDetails.bookingType}: {bookingDetails.item.name}</span>
                        </div>
                        {/* Display Price */}
                        {'price' in bookingDetails.item && typeof (bookingDetails.item as any).price === 'number' && (
                            <div className="text-right text-2xl font-bold text-antique-gold mt-2">
                                Total: ₹{(bookingDetails.item as any).price.toLocaleString()}
                            </div>
                        )}
                         {/* Display Duration for Packages */}
                         {bookingDetails.bookingType === 'Package' && 'duration' in bookingDetails.item && (
                            <div className="text-right text-md text-charcoal-ink/80 mt-1">
                                Duration: {(bookingDetails.item as any).duration}
                            </div>
                        )}
                         {/* Display Description for Spa/Dining */}
                         {(bookingDetails.bookingType === 'Spa' || bookingDetails.bookingType === 'Dining') && 'description' in bookingDetails.item && (
                             <p className="text-sm text-charcoal-ink/70 mt-2">{ (bookingDetails.item as any).description }</p>
                         )}
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Booking Details Section */}
                        <h3 className="font-serif text-xl font-bold text-royal-maroon mb-4">Booking Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-charcoal-ink mb-2">Select Date *</label>
                                <input id="date" type="date" name="date" value={bookingDetails.date} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required />
                            </div>

                            {/* Conditional Time Input for Dining */}
                            {bookingDetails.bookingType === 'Dining' && (
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-charcoal-ink mb-2">Select Time *</label>
                                    <input id="time" type="time" name="time" value={bookingDetails.time} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required />
                                </div>
                            )}

                            {/* Conditional Guests Input (Exclude Spa) */}
                            {bookingDetails.bookingType !== 'Spa' && (
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-charcoal-ink mb-2">Number of Guests *</label>
                                    <input
                                        id="guests"
                                        type="number"
                                        name="guests"
                                        min="1"
                                        // Set max based on item capacity if it exists, otherwise no max
                                        max={bookingDetails.item && 'capacity' in bookingDetails.item ? (bookingDetails.item as any).capacity : undefined}
                                        value={bookingDetails.guests}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required
                                     />
                                     {/* Optionally display max capacity info */}
                                     {bookingDetails.item && 'capacity' in bookingDetails.item && (
                                        <p className="text-xs text-charcoal-ink/60 mt-1">Max capacity: {(bookingDetails.item as any).capacity}</p>
                                     )}
                                </div>
                            )}
                        </div>

                        {/* Personal & Payment Details */}
                        <h3 className="font-serif text-xl font-bold text-royal-maroon mb-4 mt-8 border-t border-palace-beige pt-6">Personal & Payment Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-charcoal-ink mb-2">Full Name *</label>
                                <input id="name" type="text" name="name" placeholder="Enter your full name" value={bookingDetails.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required />
                             </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-charcoal-ink mb-2">Email Address *</label>
                                <input id="email" type="email" name="email" placeholder="Enter your email" value={bookingDetails.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required />
                             </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-ink mb-2">Phone Number *</label>
                                <input id="phone" type="tel" name="phone" placeholder="Enter your phone number" value={bookingDetails.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required />
                             </div>
                            {/* Simplified Mock Payment */}
                             <div>
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-charcoal-ink mb-2">Card Number (mock) *</label>
                                <input id="cardNumber" type="text" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx" value={bookingDetails.cardNumber} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required pattern="\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}" title="Enter a 16-digit card number"/>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-charcoal-ink mb-2">Expiry Date (mock) *</label>
                                     <input id="expiryDate" type="text" name="expiryDate" placeholder="MM/YY" value={bookingDetails.expiryDate} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required pattern="(0[1-9]|1[0-2])\/\d{2}" title="Enter date in MM/YY format"/>
                                </div>
                                <div>
                                     <label htmlFor="cvv" className="block text-sm font-medium text-charcoal-ink mb-2">CVV (mock) *</label>
                                     <input id="cvv" type="text" name="cvv" placeholder="123" value={bookingDetails.cvv} onChange={handleInputChange} className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold" required pattern="\d{3,4}" title="Enter 3 or 4 digit CVV"/>
                                </div>
                             </div>
                        </div>

                         {/* Display Error Message */}
                        {error && (
                            <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
                        )}

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-royal-maroon text-white py-3 mt-8 rounded-lg hover:bg-royal-maroon/90 font-medium transition-colors duration-300 text-lg">
                            Confirm & Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;