import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Calendar, Users, Tag, Clock } from 'lucide-react';
import { BookingDetails } from '../types';

const Confirmation = () => {
  const location = useLocation();
  const state = location.state as { bookingDetails: BookingDetails };
  const bookingDetails = state?.bookingDetails;

  if (!bookingDetails || !bookingDetails.item) {
    return (
      <div className="min-h-screen pt-20 bg-ivory-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Booking Details Missing</h1>
          <Link to="/" className="bg-royal-maroon text-white px-6 py-3 rounded-lg">Back to Home</Link>
        </div>
      </div>
    );
  }

  const { bookingType, item, date, time, guests, name } = bookingDetails;

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-palace-beige text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-charcoal-ink/70 mb-8">Thank you, {name}. Your {bookingType.toLowerCase()} reservation is confirmed.</p>
          <div className="border-t border-palace-beige pt-6 text-left space-y-3">
            <div className="flex items-center"><Tag className="h-5 w-5 text-antique-gold mr-3" /> <span className="font-medium">{bookingType}: {item.name}</span></div>
            <div className="flex items-center"><Calendar className="h-5 w-5 text-antique-gold mr-3" /> <span className="font-medium">{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
            {time && bookingType === 'Dining' && <div className="flex items-center"><Clock className="h-5 w-5 text-antique-gold mr-3" /> <span className="font-medium">{time}</span></div>}
            {bookingType !== 'Spa' && <div className="flex items-center"><Users className="h-5 w-5 text-antique-gold mr-3" /> <span className="font-medium">{guests} Guest(s)</span></div>}
            {'price' in item && <div className="text-right font-bold text-xl text-royal-maroon mt-4">Total: ₹{(item as any).price.toLocaleString()}</div>}
          </div>
          <div className="mt-8">
            <Link to="/" className="bg-royal-maroon text-white px-8 py-3 rounded-lg hover:bg-royal-maroon/90">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;